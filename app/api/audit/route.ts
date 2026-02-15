import { NextResponse } from 'next/server';
import { extractMetadata, isSafeUrl, isValidUrl, WebsiteAuditData, AuditResponse } from '@/utils/auditHelpers';

export const maxDuration = 60; // Allow longer timeout for AI generation if deployed on Vercel Pro/Hobby (default is 10s/60s)

export async function POST(req: Request) {
    try {
        const { url } = await req.json();

        // 1. Validate Input
        if (!url || typeof url !== 'string') {
            return NextResponse.json({ error: "URL is required" }, { status: 400 });
        }

        if (!isValidUrl(url)) {
            return NextResponse.json({ error: "Invalid URL format. Must start with http:// or https://" }, { status: 400 });
        }

        if (!isSafeUrl(url)) {
            return NextResponse.json({ error: "Restricted URL. Localhost and private IPs are not allowed." }, { status: 403 });
        }

        // 2. Add Protocol if missing (though isValidUrl enforces http/https, redundant check is safe)
        let targetUrl = url;

        // 3. Server-side Fetch with Timeout and AbortController
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

        let html = '';
        try {
            const response = await fetch(targetUrl, {
                signal: controller.signal,
                headers: {
                    'User-Agent': 'Syncrate-Audit-Bot/1.0 (+https://syncrate.tech)',
                    'Accept': 'text/html,application/xhtml+xml,application/xml'
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch website (Status: ${response.status})`);
            }

            html = await response.text();
        } catch (fetchError: any) {
            if (fetchError.name === 'AbortError') {
                return NextResponse.json({ error: "Website took too long to respond (timeout > 8s)." }, { status: 504 });
            }
            return NextResponse.json({ error: `Could not access website: ${fetchError.message}` }, { status: 502 });
        } finally {
            clearTimeout(timeoutId);
        }

        // 4. Parse HTML
        const extractedData: WebsiteAuditData = extractMetadata(html, targetUrl);

        // 5. Call Grok API (xAI)
        const apiKey = process.env.GROK_API_KEY;

        if (!apiKey) {
            console.error("GROK_API_KEY is missing");
            return NextResponse.json({ error: "AI service configuration missing on server." }, { status: 500 });
        }

        try {
            const prompt = `Analyze this website data and provide a strictly structured audit.
      
      Website Data:
      - URL: ${extractedData.url}
      - Title: ${extractedData.title}
      - Description: ${extractedData.description}
      - H1: ${extractedData.h1}
      - H2 Headings: ${extractedData.h2s.join(', ')}
      - Word Count: ${extractedData.wordCount}
      - Image Count: ${extractedData.imageCount}

      Provide 2-3 concise, actionable sentences for each section (SEO, UX, Performance, Conversion).
      Focus on premium advice.
      STRICT JSON FORMAT ONLY:
      {
        "seo": "...",
        "ux": "...",
        "performance": "...",
        "conversion": "..."
      }`;

            const aiResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        {
                            role: "system",
                            content: "You are an AI website audit specialist. Return strictly valid JSON only. Do not add markdown blocks."
                        },
                        {
                            role: "user",
                            content: prompt
                        }
                    ],
                    temperature: 0.3,
                    stream: false
                })
            });

            if (!aiResponse.ok) {
                const errorText = await aiResponse.text();
                console.error("Grok API Error:", errorText);
                throw new Error(`AI Service Error: ${aiResponse.status}`);
            }

            const aiData = await aiResponse.json();
            const rawContent = aiData.choices?.[0]?.message?.content?.trim();

            if (!rawContent) {
                throw new Error("Empty response from AI");
            }

            // Safely parse JSON (handle potential markdown blocks if model misbehaves)
            let jsonStr = rawContent;
            if (jsonStr.startsWith('```json')) {
                jsonStr = jsonStr.replace(/^```json\s*/, '').replace(/\s*```$/, '');
            } else if (jsonStr.startsWith('```')) {
                jsonStr = jsonStr.replace(/^```\s*/, '').replace(/\s*```$/, '');
            }

            const auditResults: AuditResponse = JSON.parse(jsonStr);

            return NextResponse.json({ success: true, data: auditResults });

        } catch (aiError: any) {
            console.error("AI Generation Failed:", aiError);
            return NextResponse.json({ error: "Failed to generate AI audit report. Please try again." }, { status: 500 });
        }

    } catch (error: any) {
        console.error("Audit API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
