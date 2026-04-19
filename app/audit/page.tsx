"use client";

import { useState } from "react";
import ParallaxShell from "@/components/ParallaxShell";
import { AuditResponse } from "@/utils/auditHelpers";

/* ─── SCORE RING ─────────────────────────────────────────────────────── */

function ScoreRing({ score }: { score: number }) {
  const radius = 52;
  const circ = 2 * Math.PI * radius;
  const fill = circ - (score / 100) * circ;

  const color =
    score >= 75 ? "#22c55e" : score >= 50 ? "#f59e0b" : "#ef4444";

  const label =
    score >= 75 ? "Looking solid" : score >= 50 ? "Needs work" : "Room to grow";

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="currentColor"
            className="text-border" strokeWidth="8" />
          <circle
            cx="60" cy="60" r={radius} fill="none"
            stroke={color} strokeWidth="8"
            strokeDasharray={circ}
            strokeDashoffset={fill}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-text-primary tabular-nums">{score}</span>
          <span className="text-[10px] text-text-tertiary font-medium">/100</span>
        </div>
      </div>
      <span
        className="text-xs font-semibold px-2.5 py-1 rounded-full"
        style={{ background: color + "18", color }}
      >
        {label}
      </span>
    </div>
  );
}

/* ─── SECTION CARD ───────────────────────────────────────────────────── */

function Section({ label, items, variant = "neutral" }: {
  label: string;
  items: string[];
  variant?: "positive" | "fix" | "quick" | "neutral";
}) {
  const icon = variant === "positive" ? "✓" : variant === "fix" ? "→" : variant === "quick" ? "·" : "·";
  const iconColor =
    variant === "positive" ? "text-emerald-500" :
    variant === "quick" ? "text-accent" :
    "text-text-tertiary";

  if (!items || items.length === 0) return null;

  return (
    <div>
      <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest mb-3">{label}</p>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
            <span className={`font-bold mt-0.5 flex-shrink-0 text-xs ${iconColor}`}>{icon}</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── IMPROVEMENT GROUP ──────────────────────────────────────────────── */

function ImprovementGroup({ label, items }: { label: string; items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="rounded-lg border border-border bg-background/50 dark:bg-background/30 px-4 py-4">
      <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2.5">{label}</p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed">
            <span className="text-text-tertiary mt-0.5 flex-shrink-0 text-xs font-bold">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── LOADING STATE ──────────────────────────────────────────────────── */

function LoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="rounded-xl border border-border bg-surface p-8 flex flex-col sm:flex-row items-center gap-8">
        <div className="w-36 h-36 rounded-full bg-surface-highlight flex-shrink-0" />
        <div className="flex-1 space-y-3 w-full">
          <div className="h-4 bg-surface-highlight rounded w-1/4" />
          <div className="h-3 bg-surface-highlight rounded w-full" />
          <div className="h-3 bg-surface-highlight rounded w-5/6" />
          <div className="h-3 bg-surface-highlight rounded w-4/6" />
        </div>
      </div>
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-32 rounded-xl border border-border bg-surface" />
      ))}
    </div>
  );
}

/* ─── AUDIT REPORT ───────────────────────────────────────────────────── */

function AuditReport({ result, auditedUrl }: { result: AuditResponse; auditedUrl: string }) {
  const imp = result.improvements || {};

  return (
    <div className="space-y-5 animate-fade-in">

      {/* Score + Summary */}
      <div className="rounded-xl border border-border bg-surface p-8">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <ScoreRing score={result.score} />
          <div className="flex-1">
            <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest mb-2">
              Overall Assessment
            </p>
            <p className="text-text-primary leading-relaxed mb-4">{result.summary}</p>
            <div className="rounded-lg bg-surface-highlight dark:bg-background/50 border border-border/50 px-4 py-3">
              <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest mb-1">First impression</p>
              <p className="text-sm text-text-secondary leading-relaxed">{result.firstImpression}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Positives + Quick Fixes side by side */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="rounded-xl border border-emerald-500/15 bg-surface p-6 space-y-0">
          <Section label="What is working" items={result.positives} variant="positive" />
        </div>
        <div className="rounded-xl border border-accent/15 bg-surface p-6 space-y-0">
          <Section label="Quick wins (do these today)" items={result.quickFixes} variant="quick" />
        </div>
      </div>

      {/* Improvements */}
      <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
        <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest mb-5">
          Detailed improvements
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          <ImprovementGroup label="Clarity" items={imp.clarity} />
          <ImprovementGroup label="Design" items={imp.design} />
          <ImprovementGroup label="UX" items={imp.ux} />
          <ImprovementGroup label="Conversion" items={imp.conversion} />
          <ImprovementGroup label="Content" items={imp.content} />
          <ImprovementGroup label="SEO" items={imp.seo} />
        </div>
      </div>

      {/* Keep + Agency Approach */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="rounded-xl border border-border bg-surface p-6">
          <Section label="Leave this alone" items={result.keepAsIs} variant="positive" />
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest mb-3">
            How we would approach this
          </p>
          <p className="text-sm text-text-secondary leading-relaxed">{result.agencyApproach}</p>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl border border-border/50 bg-warm-surface dark:bg-surface/30 p-8 text-center">
        <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-3">Want this fixed?</p>
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          We can handle all of this for you.
        </h3>
        <p className="text-text-secondary mb-7 max-w-md mx-auto text-sm leading-relaxed">
          Book a 15-minute call. We will look at your site together, tell you what matters most, and propose a concrete next step.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://calendly.com/syncratetech"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:bg-accent-highlight hover:shadow-accent/30"
          >
            Book a free call
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-text-primary transition-all hover:bg-surface-highlight"
          >
            Send us a message
          </a>
        </div>
      </div>

    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────── */

export default function AuditPage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AuditResponse | null>(null);
  const [isPartial, setIsPartial] = useState(false);
  const [auditedUrl, setAuditedUrl] = useState("");
  const [error, setError] = useState("");

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || isLoading) return;

    setIsLoading(true);
    setResult(null);
    setIsPartial(false);
    setError("");

    let targetUrl = url.trim();
    if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
      targetUrl = "https://" + targetUrl;
    }

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: targetUrl }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setAuditedUrl(targetUrl);
      setResult(data.data);
      setIsPartial(data.isPartial || false);

      // Scroll to results
      setTimeout(() => {
        document.getElementById("audit-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } catch (err: any) {
      setError(err.message || "Failed to analyze website. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ParallaxShell>
      <main className="min-h-screen bg-background">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
          </div>
          <div className="container-width relative z-10 pt-36 pb-16 md:pt-48 md:pb-20 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold tracking-widest text-text-secondary uppercase mb-10 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Free Website Audit
            </span>

            <h1 className="text-4xl md:text-[54px] font-bold text-text-primary leading-[1.05] tracking-tight mb-5 animate-slide-up">
              Is your website<br />
              <span className="text-accent">actually working?</span>
            </h1>

            <p className="text-lg text-text-secondary max-w-xl mx-auto leading-relaxed mb-12 animate-slide-up-delay">
              Paste your URL. Get a real critique — SEO, UX, clarity, and conversion. No fluff, no sales pitch disguised as advice.
            </p>

            {/* Input form */}
            <form
              onSubmit={handleAnalyze}
              className="max-w-xl mx-auto animate-slide-up-delay2"
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-violet-500/20 rounded-xl blur opacity-60 group-hover:opacity-90 transition duration-500" />
                <div className="relative flex gap-2 p-2 bg-surface border border-border rounded-xl shadow-xl">
                  <input
                    type="text"
                    placeholder="yourwebsite.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    disabled={isLoading}
                    className="flex-1 bg-transparent px-4 py-3 text-text-primary placeholder:text-text-tertiary/50 text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !url.trim()}
                    className="group/btn inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all hover:bg-accent-highlight disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Analyzing
                      </>
                    ) : (
                      <>Analyze site</>
                    )}
                  </button>
                </div>
              </div>

              <p className="text-xs text-text-tertiary mt-3 text-center">
                Takes 10 to 20 seconds. Powered by Groq AI.
              </p>
            </form>

            {/* Error */}
            {error && (
              <div className="max-w-xl mx-auto mt-5 p-4 rounded-lg border border-rose-500/20 bg-rose-500/8 text-rose-400 text-sm animate-fade-in">
                {error}
              </div>
            )}
          </div>
        </section>

        {/* ── Results ────────────────────────────────────────────────── */}
        <section id="audit-results" className="container-width pb-24">
          {isLoading && (
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-sm text-text-secondary">Reading your site and generating the audit...</p>
              </div>
              <LoadingSkeleton />
            </div>
          )}

          {result && !isLoading && (
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs text-text-tertiary">
                  Audit for{" "}
                  <span className="font-mono text-accent">{auditedUrl}</span>
                </p>
                <button
                  onClick={() => { setResult(null); setIsPartial(false); setUrl(""); setAuditedUrl(""); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="text-xs text-text-tertiary hover:text-text-primary transition-colors"
                >
                  Run another
                </button>
              </div>

              {isPartial && (
                <div className="mb-6 p-4 rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-500/90 text-sm animate-fade-in flex items-start gap-3">
                  <span className="font-bold flex-shrink-0">⚠</span>
                  <p>
                    This site uses anti-bot protection blocking full access. 
                    Here is a partial audit based on available signals and industry standards for this domain.
                  </p>
                </div>
              )}

              <AuditReport result={result} auditedUrl={auditedUrl} />
            </div>
          )}
        </section>

      </main>
    </ParallaxShell>
  );
}
