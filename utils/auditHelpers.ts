import * as cheerio from 'cheerio';

/* ─── TYPES ─────────────────────────────────────────────────────────── */

export interface WebsiteData {
  url: string;
  title: string;
  description: string;
  h1: string;
  subheadline: string;
  navigation: string[];
  sections: string[];
  ctas: string[];
  longParagraphCount: number;
  mainText: string;
  wordCount: number;
  imageCount: number;
  hasViewport: boolean;
  hasCanonical: boolean;
  linkCount: number;
}

export interface AuditImprovements {
  clarity: string[];
  design: string[];
  ux: string[];
  conversion: string[];
  content: string[];
  seo: string[];
}

export interface AuditResponse {
  score: number;
  summary: string;
  firstImpression: string;
  positives: string[];
  improvements: AuditImprovements;
  quickFixes: string[];
  keepAsIs: string[];
  agencyApproach: string;
  extractedData: {
    headline: string;
    ctas: string[];
    sections: string[];
  };
}

/* ─── URL VALIDATION ─────────────────────────────────────────────────── */

export function isValidUrl(input: string): boolean {
  try {
    const url = new URL(input);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

export function isSafeUrl(input: string): boolean {
  try {
    const url = new URL(input);
    const host = url.hostname;
    if (host === 'localhost' || host === '127.0.0.1' || host === '[::1]') return false;
    if (host.startsWith('10.')) return false;
    if (host.startsWith('192.168.')) return false;
    if (/^172\.(1[6-9]|2\d|3[0-1])\./.test(host)) return false;
    if (host.endsWith('.local') || host.endsWith('.test') || host.endsWith('.example')) return false;
    return true;
  } catch {
    return false;
  }
}

/* ─── HTML EXTRACTION ────────────────────────────────────────────────── */

export function extractWebsiteData(html: string, pageUrl: string): WebsiteData {
  const $ = cheerio.load(html);

  // Extract navigation before stripping it
  const navigation: string[] = [];
  $('header nav a, nav a').slice(0, 10).each((_, el) => {
    const text = $(el).text().replace(/\s+/g, ' ').trim();
    if (text) navigation.push(text);
  });

  // Strip noise before reading body text
  $('script, style, noscript, iframe, svg, header nav, footer').remove();

  const title = $('title').text().trim().slice(0, 150);
  const description = (
    $('meta[name="description"]').attr('content') ||
    $('meta[property="og:description"]').attr('content') ||
    ''
  ).slice(0, 300);

  const h1 = $('h1').first().text().replace(/\s+/g, ' ').trim().slice(0, 150) || 'No H1 found';
  
  // Predict subheadline (often the p tag right after the h1 or in the same header section)
  const subheadline = $('h1').parent().find('p').first().text().replace(/\s+/g, ' ').trim().slice(0, 200) || '';

  const sections: string[] = [];
  $('h2, h3').slice(0, 12).each((_, el) => {
    const text = $(el).text().replace(/\s+/g, ' ').trim();
    if (text && text.length > 3) sections.push(text.slice(0, 100));
  });

  // Extract CTAs
  const ctas: string[] = [];
  $('a, button').each((_, el) => {
    const text = $(el).text().replace(/\s+/g, ' ').trim();
    const href = $(el).attr('href') || '';
    // Look for common CTA keywords or just grab main buttons
    if (
      text && 
      text.length < 30 && 
      (
        $(el).hasClass('btn') || 
        $(el).hasClass('button') || 
        ['get started', 'book', 'contact', 'sign up', 'try', 'buy', 'learn more', 'download'].some(k => text.toLowerCase().includes(k)) ||
        $('a, button').length < 15 // If page is small, grab all obvious links
      )
    ) {
      if (!ctas.includes(text)) ctas.push(text);
    }
  });

  // Long paragraphs
  let longParagraphCount = 0;
  $('p').each((_, el) => {
    if ($(el).text().trim().length > 300) longParagraphCount++;
  });

  // Visible body text — capped to keep prompt lean
  const rawBodyText = $('body').text().replace(/\s+/g, ' ').trim();
  const wordCount = rawBodyText.split(' ').filter(Boolean).length;
  const mainText = rawBodyText.slice(0, 3500);

  const imageCount = $('img').length;
  const hasViewport = $('meta[name="viewport"]').length > 0;
  const hasCanonical = $('link[rel="canonical"]').length > 0;
  const linkCount = $('a[href]').length;

  return {
    url: pageUrl,
    title,
    description,
    h1,
    subheadline,
    navigation,
    sections,
    ctas: ctas.slice(0, 15),
    longParagraphCount,
    mainText,
    wordCount,
    imageCount,
    hasViewport,
    hasCanonical,
    linkCount,
  };
}
