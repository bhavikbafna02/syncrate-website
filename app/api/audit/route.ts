import { NextResponse } from 'next/server';
import {
  extractWebsiteData,
  isSafeUrl,
  isValidUrl,
  AuditResponse,
} from '@/utils/auditHelpers';

export const maxDuration = 60;

async function fetchHtmlWithRetry(urlStr: string) {
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
  };

  const variants = [urlStr];
  try {
    const parsed = new URL(urlStr);
    if (parsed.hostname.startsWith('www.')) {
      variants.push(parsed.protocol + '//' + parsed.hostname.replace('www.', '') + parsed.pathname);
    } else {
      variants.push(parsed.protocol + '//www.' + parsed.hostname + parsed.pathname);
    }
  } catch (e) {}

  let lastError = null;

  for (let i = 0; i < variants.length && i < 2; i++) {
    const targetUrl = variants[i];
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8-second timeout per attempt

    try {
      console.log(`[Audit] Fetching ${targetUrl}...`);
      const response = await fetch(targetUrl, {
        signal: controller.signal,
        headers,
      });

      clearTimeout(timeoutId);

      // Handle common bot blocking status codes
      if (response.status === 403 || response.status === 401 || response.status === 429 || response.status === 503) {
        console.warn(`[Audit] Blocked by ${targetUrl} (Status: ${response.status})`);
        return { html: '', finalUrl: targetUrl, isBlocked: true };
      }

      if (!response.ok) {
        throw new Error(`Status ${response.status}`);
      }

      const html = await response.text();
      return { html, finalUrl: targetUrl, isBlocked: false };
    } catch (error: any) {
      clearTimeout(timeoutId);
      console.warn(`[Audit] Failed fetching ${targetUrl}:`, error.message);

      if (error.name === 'AbortError') {
        lastError = new Error('timeout');
      } else {
        lastError = error;
      }
    }
  }

  if (lastError && lastError.message === 'timeout') {
    throw new Error('timeout_all');
  }

  throw lastError || new Error('unreachable');
}

export async function POST(req: Request) {
  try {
    /* ── 1. Validate Input ───────────────────────────────────────────── */
    const { url } = await req.json();

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'URL is required.' }, { status: 400 });
    }

    let targetUrl = url.trim();
    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
      targetUrl = 'https://' + targetUrl;
    }

    if (!isValidUrl(targetUrl)) {
      return NextResponse.json(
        { error: "That doesn't look like a valid URL. Try something like https://yoursite.com" },
        { status: 400 }
      );
    }

    if (!isSafeUrl(targetUrl)) {
      return NextResponse.json(
        { error: 'Localhost and private network URLs are not allowed.' },
        { status: 403 }
      );
    }

    /* ── 2. Fetch Website HTML ───────────────────────────────────────── */
    let html = '';
    let isBlocked = false;
    let finalUrl = targetUrl;

    try {
      const fetchResult = await fetchHtmlWithRetry(targetUrl);
      html = fetchResult.html;
      finalUrl = fetchResult.finalUrl;
      isBlocked = fetchResult.isBlocked;
    } catch (error: any) {
      if (error.message === 'timeout_all') {
        return NextResponse.json(
          { error: 'The site is taking too long to respond. It may be slow or protected.' },
          { status: 504 }
        );
      }
      return NextResponse.json(
        { error: 'This site is blocking automated requests. Try another URL or contact us for a manual audit.' },
        { status: 502 }
      );
    }

    /* ── 3. Extract Structured Data ─────────────────────────────────── */
    const site = extractWebsiteData(html, finalUrl);
    
    // Sometimes a site returns 200 OK but has barely any content due to client-side rendering or an invisible captcha
    if (!isBlocked && site.wordCount < 10 && !site.h1 && !site.title) {
        console.warn(`[Audit] Fetched HTML but it lacked content for ${finalUrl}`);
        isBlocked = true; // Fallback to partial response logic
    }

    /* ── 4. Build AI Prompt ──────────────────────────────────────────── */
    const apiKey = process.env.GROK_API_KEY;
    if (!apiKey) {
      console.error('GROK_API_KEY missing');
      return NextResponse.json(
        { error: 'AI service not configured.' },
        { status: 500 }
      );
    }

    let prompt = '';

    if (isBlocked) {
      prompt = `You are an experienced web consultant who has audited hundreds of websites. 
We attempted to audit the website "${finalUrl}", but it uses anti-bot protection and we couldn't read its full HTML. 
Your job is to provide a 'partial audit'. Use the domain name, URL structure, and standard industry knowledge of what typical businesses might struggle with to provide a useful, directional audit.

Instructions:
- Acknowledge that this is a partial audit based on the URL and domain name, but maintain an expert tone.
- Give generally applicable best practices for conversion, design, and UX regarding this type of domain.
- Keep the score relatively conservative (e.g., 50-70).
- The "agencyApproach" field should explain how an agency would bypass these limits via a manual audit.
- Keep every array item to 1-2 sentences max — tight and actionable.
- Return ONLY valid JSON matching the exact shape below. No markdown fences.

{
  "score": <number 0-100>,
  "summary": "<2-3 sentence overview — acknowledge lack of full access but provide value>",
  "firstImpression": "<What a visitor might expect to see>",
  "positives": ["<generic positive based on domain setup or tech assumption>", "<another standard positive>"],
  "improvements": {
    "clarity": ["<specific standard fix>", "<specific standard fix>"],
    "design": ["<specific standard fix>", "<specific standard fix>"],
    "ux": ["<specific standard fix>", "<specific standard fix>"],
    "conversion": ["<specific standard fix>", "<specific standard fix>"],
    "content": ["<specific standard fix>", "<specific standard fix>"],
    "seo": ["<specific standard fix>", "<specific standard fix>"]
  },
  "quickFixes": ["<standard fix>", "<standard fix>", "<standard fix>"],
  "keepAsIs": ["<standard working element>", "<standard working element>"],
  "agencyApproach": "<how a pro would do a deep-dive manual audit>"
}`;
    } else {
      prompt = `You are a highly experienced web consultant performing a live teardown of a website. Your job is to give a heavily tailored, intensely specific, and practical critique.

Website Details:
- URL: ${site.url}
- Page Title: ${site.title || 'None'}
- Meta Description: ${site.description || 'None'}
- H1 Heading: ${site.h1}
- H2 Headings: ${site.h2s.length > 0 ? site.h2s.join(' | ') : 'None found'}
- Approximate Word Count: ${site.wordCount}
- Image Count: ${site.imageCount}
- Has Viewport Meta: ${site.hasViewport ? 'Yes' : 'No'}
- Has Canonical Tag: ${site.hasCanonical ? 'Yes' : 'No'}
- Internal/External Links: ${site.linkCount}

Page Text Sample (first 3500 chars):
"""
${site.mainText}
"""

DATA USAGE RULES (CRITICAL):
- You MUST reference the ACTUAL text (H1, H2s, or body copy) from the website in your feedback. 
- Example BAD: "Your headline doesn't explain what you do."
- Example GOOD: "Your headline '${site.h1}' doesn't clearly explain what you do."
- Do NOT invent features or text that aren't in the provided data. Give feedback ONLY on what you see.
- If data is limited, state that: "Based on the limited visible text..."

TONE RULES:
- Human, direct, and slightly opinionated. 
- No AI tone, zero buzzwords. Sound like a real consultant talking to a founder.
- Keep sentences short. Avoid over-explaining.
- Be highly specific and actionable.
- Example BAD: "Enhancing your SEO strategy could improve visibility."
- Example GOOD: "Your page doesn't clearly target any specific keyword or search intent."

OUTPUT FORMAT:
- Score out of 100 based on realistic business conversion capability.
- Short bullet points for arrays, 1 sentence maximum per item. Keep it punchy.
- The "summary" is a one-line honest overview (e.g. "58/100 — decent structure, but unclear messaging and weak call-to-action").
- The "agencyApproach" is a short, non-salesy explanation of how a pro would naturally fix it.
- Return ONLY valid JSON matching the exact shape below. No markdown fences.

{
  "score": <number 0-100>,
  "summary": "<1-line honest summary combining score and main takeaway>",
  "firstImpression": "<What a user actually understands in 5 seconds reading the actual text>",
  "positives": ["<specific thing that works quoting the site>", "<specific thing that works quoting the site>"],
  "improvements": {
    "clarity": ["<specific critique referencing actual text/headings>", "<specific critique referencing actual text/headings>"],
    "design": ["<specific critique on spacing, readability, or structure>", "<specific critique on spacing, readability, or structure>"],
    "ux": ["<specific flow or friction critique>", "<specific flow or friction critique>"],
    "conversion": ["<CTA clarity and placement critique>", "<CTA clarity and placement critique>"],
    "content": ["<specific note on copy length or genericness>", "<specific note on copy length or genericness>"],
    "seo": ["<specific critique on their actual meta tags or headings>", "<specific critique on their actual meta tags or headings>"]
  },
  "quickFixes": ["<highly specific action like rewriting the exact H1>", "<highly specific action>", "<highly specific action>"],
  "keepAsIs": ["<specific element to NOT change>", "<specific element to NOT change>"],
  "agencyApproach": "<how a pro would tackle this organically>"
}`;
    }

    /* ── 5. Call Groq API ────────────────────────────────────────────── */
    try {
      const aiRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content:
                'You are a senior web consultant. Return only valid JSON — no markdown fences, no commentary outside the JSON object.',
            },
            { role: 'user', content: prompt },
          ],
          temperature: 0.4,
          max_tokens: 1800,
          stream: false,
        }),
      });

      if (!aiRes.ok) {
        const errText = await aiRes.text();
        console.error('Groq API error:', errText);
        throw new Error(`AI service returned ${aiRes.status}`);
      }

      const aiData = await aiRes.json();
      let raw: string = aiData.choices?.[0]?.message?.content?.trim() ?? '';

      if (!raw) throw new Error('Empty AI response');

      // Strip markdown fences if model sneaks them in
      raw = raw
        .replace(/^```json\s*/i, '')
        .replace(/^```\s*/i, '')
        .replace(/\s*```$/i, '')
        .trim();

      const result: AuditResponse = JSON.parse(raw);

      // Clamp score
      result.score = Math.min(100, Math.max(0, Math.round(result.score)));

      return NextResponse.json({ success: true, data: result, isPartial: isBlocked });
    } catch (aiError: any) {
      console.error('AI generation failed:', aiError);
      return NextResponse.json(
        { error: 'AI audit failed. Please try again in a moment.' },
        { status: 500 }
      );
    }
  } catch (err: any) {
    console.error('Audit route error:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
