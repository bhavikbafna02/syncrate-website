import * as cheerio from 'cheerio';

/* ─── TYPES ─────────────────────────────────────────────────────────── */

export interface WebsiteData {
  url: string;
  title: string;
  description: string;
  h1: string;
  h2s: string[];
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

  // Strip noise before reading text
  $('script, style, noscript, iframe, svg, link, header nav, footer').remove();

  const title = $('title').text().trim().slice(0, 150);
  const description = (
    $('meta[name="description"]').attr('content') ||
    $('meta[property="og:description"]').attr('content') ||
    ''
  ).slice(0, 300);

  const h1 = $('h1').first().text().replace(/\s+/g, ' ').trim().slice(0, 150) || 'No H1 found';

  const h2s: string[] = [];
  $('h2').slice(0, 8).each((_, el) => {
    const text = $(el).text().replace(/\s+/g, ' ').trim();
    if (text) h2s.push(text.slice(0, 100));
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
    h2s,
    mainText,
    wordCount,
    imageCount,
    hasViewport,
    hasCanonical,
    linkCount,
  };
}
