import * as cheerio from 'cheerio';

export interface WebsiteAuditData {
    url: string;
    title: string;
    description: string;
    h1: string;
    h2s: string[];
    wordCount: number;
    imageCount: number;
}

export interface AuditResponse {
    seo: string;
    ux: string;
    performance: string;
    conversion: string;
}

/**
 * Validates if the input string is a valid HTTP/HTTPS URL
 */
export function isValidUrl(input: string): boolean {
    try {
        const url = new URL(input);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
        return false;
    }
}

/**
 * Checks for SSRF attempts (localhost, private IPs)
 */
export function isSafeUrl(input: string): boolean {
    try {
        const url = new URL(input);
        const host = url.hostname;

        // Block localhost
        if (host === 'localhost' || host === '127.0.0.1' || host === '[::1]') return false;

        // Block private ranges
        // 10.0.0.0/8
        if (host.startsWith('10.')) return false;
        // 192.168.0.0/16
        if (host.startsWith('192.168.')) return false;
        // 172.16.0.0/12 - 172.31.255.255
        if (/^172\.(1[6-9]|2\d|3[0-1])\./.test(host)) return false;

        // Block internal test domains
        if (host.endsWith('.local') || host.endsWith('.test') || host.endsWith('.example')) return false;

        return true;
    } catch {
        return false;
    }
}

/**
 * Extracts metadata and content structure using Cheerio
 */
export function extractMetadata(html: string, pageUrl: string): WebsiteAuditData {
    const $ = cheerio.load(html);

    // Clean noise
    $('script, style, noscript, iframe, svg, link').remove();

    const title = $('title').text().trim().substring(0, 150);
    const description = $('meta[name="description"]').attr('content') ||
        $('meta[property="og:description"]').attr('content') || '';

    const h1 = $('h1').first().text().replace(/\s+/g, ' ').trim().substring(0, 150) || 'Missing H1 Heading';

    const h2s: string[] = [];
    $('h2').slice(0, 10).each((_, el) => {
        const text = $(el).text().replace(/\s+/g, ' ').trim();
        if (text) h2s.push(text.substring(0, 100));
    });

    // Calculate approximate word count
    const bodyText = $('body').text().replace(/\s+/g, ' ').trim();
    const wordCount = bodyText.split(' ').length;

    const imageCount = $('img').length;

    return {
        url: pageUrl,
        title,
        description: description.substring(0, 300),
        h1,
        h2s,
        wordCount,
        imageCount
    };
}
