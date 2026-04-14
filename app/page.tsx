"use client";

import Link from "next/link";
import ParallaxShell from "@/components/ParallaxShell";
import { useState } from "react";

/* ─── DATA ──────────────────────────────────────────────────────────── */

const features = [
  {
    num: "01",
    title: "Interfaces",
    desc: "Marketing sites, web apps, design systems built to convert — not to win awards.",
    items: ["Marketing Sites", "Web Apps", "Design Systems"],
    // Each card has a slightly different hover and layout feel
    hoverClass: "hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-400/40",
    bgClass: "bg-white dark:bg-surface",
    accentLine: "bg-indigo-400",
  },
  {
    num: "02",
    title: "Intelligence",
    desc: "RAG pipelines, document chat, internal tools. We build things you'd actually use on a Tuesday.",
    items: ["RAG Pipelines", "Custom Assistants", "Data Analysis"],
    // Slightly larger, more prominent — intentional asymmetry
    hoverClass: "hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-400/40",
    bgClass: "bg-surface-highlight/40 dark:bg-surface dark:border-[#2A3045]",
    accentLine: "bg-blue-400",
  },
  {
    num: "03",
    title: "Systems",
    desc: "Automations, APIs, backends. Built clean enough that the next engineer doesn't hate us.",
    items: ["Workflow Automation", "API Integration", "Database Design"],
    hoverClass: "hover:translate-x-1 hover:shadow-lg hover:shadow-violet-500/10 hover:border-violet-400/40",
    bgClass: "bg-white dark:bg-surface",
    accentLine: "bg-violet-400",
  },
];

const onboardingSteps = [
  {
    num: "1",
    title: "You fill out a short form.",
    desc: "Not a 40-field intake. Just: what's the problem, what's broken, what does success look like in 3 months.",
    time: "~5 min",
  },
  {
    num: "2",
    title: "We have one real conversation.",
    desc: "One focused call — no slides, no discovery theatre. We ask the questions that actually matter.",
    time: "30–45 min",
  },
  {
    num: "3",
    title: "You get a one-page plan.",
    desc: "A short doc with scope, timeline, and a fixed price. You can read it in under 5 minutes.",
    time: "2–3 days",
  },
  {
    num: "4",
    title: "We start and you see progress weekly.",
    desc: "No radio silence. Demos every Friday. Real code, not mockups.",
    time: "From week 1",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$3,500",
    unit: "one-time",
    tagline: "For early-stage founders who need a real website, fast.",
    honest: "Honestly — this is for 'I need something live and credible in 2 weeks.'",
    includes: [
      "Marketing site (up to 6 pages)",
      "Copy editing included",
      "Basic contact form + analytics",
      "2 rounds of revisions",
      "Deployed & handed off cleanly",
    ],
    notIncluded: ["CMS setup", "Custom illustrations", "Ongoing support"],
    cta: "Talk about this",
    highlight: false,
  },
  {
    name: "Build",
    price: "$8,000+",
    unit: "project",
    tagline: "For teams who need a real product built, not a concept validated.",
    honest: "This is our most common engagement. Most projects land between $8k–$18k.",
    includes: [
      "Full web app or AI system",
      "Database design + API layer",
      "Auth, admin, integrations",
      "Weekly demos, no surprises",
      "Deployed with documentation",
    ],
    notIncluded: ["Ongoing bug fixes after 30 days (retainer available)", "Marketing"],
    cta: "Discuss your project",
    highlight: true,
  },
  {
    name: "Retain",
    price: "$2,200",
    unit: "/month",
    tagline: "For teams who want a technical partner, not a vendor.",
    honest: "Most of our long-term clients started here after a Build project.",
    includes: [
      "20hrs/month of dev & design time",
      "Priority response (same-day)",
      "Monthly strategy call",
      "Ongoing improvements & fixes",
      "Cancel anytime, no drama",
    ],
    notIncluded: ["Large feature builds (scoped separately)"],
    cta: "Start the conversation",
    highlight: false,
  },
];

const faqs = [
  {
    q: "What if this doesn't work for my use case?",
    a: "It happens. We've turned down projects that weren't a good fit, and honestly told clients when a cheaper solution already exists. If we're not the right team for your problem, we'll say so in the first call — not after you've paid a deposit.",
  },
  {
    q: "How long does setup actually take?",
    a: "First demo is usually in 2–3 weeks. Full projects ship in 4–10 weeks depending on scope. We don't over-promise on timelines — the one-page plan we send you will have specific dates, not vague estimates.",
  },
  {
    q: "Do I need technical knowledge to work with you?",
    a: "No. We've worked with non-technical founders, ops teams, and solo consultants. If you know what outcome you want, we'll figure out the 'how'. We just ask that you're decisive and responsive — context-switching kills timelines.",
  },
  {
    q: "Can I see examples of past work?",
    a: "We show work on calls, not on a public portfolio page. Some clients prefer we don't list them. If that's a dealbreaker, we understand — we'd rather be upfront about it than hide it.",
  },
  {
    q: "What happens if the project goes over scope?",
    a: "We catch scope creep early and tell you. If something changes, we'll send a short scope update with the cost impact before we build it. No surprise invoices at the end.",
  },
];

/* ─── FAQ ACCORDION ─────────────────────────────────────────────────── */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-border/60 last:border-0 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-4 py-5 group">
        <p
          className={`text-base font-semibold transition-colors duration-150 ${
            open ? "text-accent" : "text-text-primary group-hover:text-accent"
          }`}
        >
          {q}
        </p>
        <span
          className={`text-text-tertiary mt-0.5 flex-shrink-0 text-lg leading-none transition-all duration-200 ${
            open ? "rotate-45 text-accent" : ""
          }`}
        >
          +
        </span>
      </div>
      {open && (
        <p className="text-text-secondary text-[15px] leading-relaxed pb-5 animate-fade-in">
          {a}
        </p>
      )}
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <ParallaxShell>
      <main>

        {/* ─── HERO ────────────────────────────────────────────────
            Intentionally left-heavy — headline takes most of width  */}
        <section className="container-width pt-32 pb-20 md:pt-44 md:pb-28">
          <div className="max-w-5xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold tracking-widest text-text-secondary uppercase mb-10 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Taking on new projects · April 2026
            </div>

            {/* Headline — Syne font, slightly uneven line breaks on purpose */}
            <h1 className="text-5xl sm:text-6xl md:text-[70px] font-bold leading-[1.04] tracking-tight text-text-primary mb-7 animate-slide-up">
              We build software<br />
              <span className="text-accent">you&apos;re proud of.</span>
              <span className="text-text-tertiary dark:text-text-tertiary text-4xl md:text-5xl font-normal block mt-2">
                (and that actually works.)
              </span>
            </h1>

            {/* Subheadline — slightly indented to break the grid */}
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mb-3 ml-0.5 animate-slide-up-delay">
              Syncrate is a 3-person technical studio. We design websites, build custom tools, and automate workflows — without the agency overhead or the offshore handoff.
            </p>
            <p className="text-sm text-text-tertiary max-w-lg ml-0.5 mb-12 animate-slide-up-delay">
              We take 2–3 projects at a time. That&apos;s intentional.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-slide-up-delay2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-highlight hover:shadow-accent/40 active:translate-y-0 active:shadow-md"
              >
                Tell us what you&apos;re building
                <span className="transition-all duration-200 group-hover:translate-x-1.5 group-hover:opacity-100">→</span>
              </Link>
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 rounded-lg border border-[#C8CDD8] dark:border-border bg-surface px-6 py-3.5 text-sm font-semibold text-text-primary transition-all duration-150 hover:border-[#9BA3B4] dark:hover:border-[#3A4255] hover:bg-surface-highlight active:scale-[0.98]"
              >
                Free site audit first
              </Link>
            </div>

            {/* Social proof — not perfectly spaced */}
            <div className="mt-14 pt-10 border-t border-border/60 flex flex-wrap gap-10 items-end">
              <div>
                <p className="text-3xl font-bold text-text-primary tabular-nums">12+</p>
                <p className="text-xs text-text-tertiary mt-1">Projects shipped</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-text-primary tabular-nums">3 wks</p>
                <p className="text-xs text-text-tertiary mt-1">Avg. first demo</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-text-primary tabular-nums">~80%</p>
                <p className="text-xs text-text-tertiary mt-1">Come back for more work</p>
              </div>
              <p className="text-xs text-text-tertiary italic self-end pb-0.5">
                (we don&apos;t say 100% because that&apos;d be a little suspicious)
              </p>
            </div>
          </div>
        </section>

        {/* ─── WHAT WE DO ──────────────────────────────────────────
            Asymmetric layout — label on left, headline on right offset */}
        <section className="border-t border-border/60 bg-warm-surface dark:bg-surface/30">
          <div className="container-width py-24">

            {/* Header — label left, text offset slightly right */}
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
              <div className="md:w-1/3">
                <p className="text-[11px] font-bold text-accent uppercase tracking-widest">What we actually do</p>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                  Three things.<br />
                  <span className="text-text-secondary font-normal text-3xl">Done properly, not quickly.</span>
                </h2>
              </div>
            </div>

            {/* Cards — each has a distinctly different hover behavior */}
            <div className="grid md:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <div
                  key={f.num}
                  className={`group relative rounded-xl border border-border ${f.bgClass} p-6 transition-all duration-300 cursor-default ${f.hoverClass}`}
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {/* Top accent line — different width per card */}
                  <div
                    className={`absolute top-0 left-6 right-12 h-[2px] rounded-full ${f.accentLine} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    style={{ width: `${45 + i * 15}%` }}
                  />

                  <div className="flex items-start justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold text-text-tertiary">{f.num}</span>
                    <span className="opacity-0 group-hover:opacity-70 transition-all duration-200 text-xs text-text-tertiary">
                      {i === 0 ? "↗" : i === 1 ? "↑" : "→"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-2 transition-colors duration-150 group-hover:text-accent">
                    {f.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-7">{f.desc}</p>

                  <div className="pt-5 border-t border-border/40 flex flex-wrap gap-1.5">
                    {f.items.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-medium text-text-tertiary bg-surface-highlight dark:bg-background px-2 py-0.5 rounded border border-border/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 ml-1">
              <Link
                href="/services"
                className="text-sm font-medium text-text-tertiary hover:text-accent transition-colors inline-flex items-center gap-1.5 group"
              >
                See the full breakdown
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── HOW TO GET STARTED ──────────────────────────────────
            Numbered, step-by-step — not a timeline graphic, just real info */}
        <section className="container-width py-24">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-4">Getting started</p>
            <h2 className="text-4xl font-bold text-text-primary mb-2">
              How it actually works
            </h2>
            <p className="text-text-secondary mb-14 text-lg">
              No sales call. No proposal theatre. Here&apos;s the exact sequence.
            </p>
          </div>

          <div className="space-y-0">
            {onboardingSteps.map((s, i) => (
              <div
                key={s.num}
                className="group grid md:grid-cols-[80px_1fr_120px] gap-6 py-8 border-t border-border/60 hover:bg-surface-highlight/30 dark:hover:bg-surface/50 transition-colors duration-200 rounded-lg px-3 -mx-3"
              >
                <div className="flex items-start pt-0.5">
                  <span className="text-3xl font-bold text-text-primary/10 dark:text-text-tertiary/20 font-display tabular-nums group-hover:text-accent/20 transition-colors duration-300">
                    {s.num}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text-primary mb-1.5 group-hover:text-accent transition-colors duration-150">
                    {s.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
                <div className="flex items-start justify-end md:justify-end pt-0.5">
                  <span className="text-[11px] font-mono text-text-tertiary bg-surface-highlight dark:bg-surface px-2.5 py-1 rounded border border-border/60 whitespace-nowrap">
                    {s.time}
                  </span>
                </div>
              </div>
            ))}
            <div className="border-t border-border/60" />
          </div>
        </section>

        {/* ─── PRICING ─────────────────────────────────────────────
            Not "simple pricing" — actual specifics with honest caveats */}
        <section className="border-t border-border/60 bg-warm-surface dark:bg-surface/20">
          <div className="container-width py-24">
            <div className="mb-14">
              <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-4">Pricing</p>
              <h2 className="text-4xl font-bold text-text-primary mb-3">
                What it costs, roughly.
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl">
                We don&apos;t do "contact us for pricing." Here&apos;s our honest range.
                Every project gets a fixed quote after our first call.
              </p>
            </div>

            {/* Pricing cards — middle one is elevated, not a generic 3-col grid */}
            <div className="grid md:grid-cols-3 gap-5 items-start">
              {pricing.map((p, i) => (
                <div
                  key={p.name}
                  className={`rounded-xl border p-7 transition-all duration-300 ${
                    p.highlight
                      ? "border-accent/30 bg-accent-muted dark:bg-accent-muted shadow-xl shadow-accent/10 md:-mt-4 md:-mb-4 relative"
                      : "border-border bg-surface hover:border-border dark:hover:bg-surface-highlight/30 hover:shadow-md transition-shadow duration-200"
                  }`}
                >
                  {p.highlight && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                        Most common
                      </span>
                    </div>
                  )}

                  <p className="text-sm font-semibold text-text-tertiary uppercase tracking-widest mb-3">{p.name}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold text-text-primary tabular-nums">{p.price}</span>
                    <span className="text-sm text-text-tertiary">{p.unit}</span>
                  </div>
                  <p className="text-sm text-text-secondary mb-3 leading-relaxed">{p.tagline}</p>

                  {/* Honest caveat in italic */}
                  <p className="text-[12px] text-text-tertiary italic mb-6 pb-6 border-b border-border/60">
                    {p.honest}
                  </p>

                  <ul className="space-y-2.5 mb-5">
                    {p.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                        <span className="text-emerald-500 mt-0.5 flex-shrink-0 font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {p.notIncluded.length > 0 && (
                    <div className="mb-7">
                      <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest mb-2">Not included</p>
                      {p.notIncluded.map((item) => (
                        <p key={item} className="text-[12px] text-text-tertiary">— {item}</p>
                      ))}
                    </div>
                  )}

                  <Link
                    href="/contact"
                    className={`group inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      p.highlight
                        ? "bg-accent text-white hover:-translate-y-0.5 hover:bg-accent-highlight shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/30"
                        : "border border-[#C8CDD8] dark:border-border bg-surface hover:bg-surface-highlight hover:border-[#9BA3B4] dark:hover:border-[#3A4255] text-text-primary"
                    }`}
                  >
                    {p.cta}
                    <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-xs text-text-tertiary mt-8 ml-1">
              All prices are in USD. These are estimates — the quote we send after our call is the actual fixed price. No hourly billing.
            </p>
          </div>
        </section>

        {/* ─── FAQ ─────────────────────────────────────────────────
            Real questions, not corporate-speak answers */}
        <section className="container-width py-24">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div className="md:sticky md:top-28">
              <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-4">FAQ</p>
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Real questions,<br />
                <span className="text-text-secondary font-normal text-2xl">honest answers.</span>
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                We get asked these a lot. The answers aren&apos;t PR-polished — they&apos;re just true.
              </p>
            </div>

            <div>
              {faqs.map((f) => (
                <FAQItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ───────────────────────────────────────────
            Different structure — not the standard centered box */}
        <section className="border-t border-border/60">
          <div className="container-width py-28">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">
                  Got something<br />building in your head?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-2">
                  Half-baked is fine. Most of our best projects started as a voice note someone sent at 11pm.
                </p>
                <p className="text-sm text-text-tertiary">
                  We read every message. If it&apos;s not a fit, we&apos;ll say so — no ghosting.
                </p>
              </div>
              <div className="md:w-1/2 flex flex-col gap-4 md:pt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-lg bg-accent px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-highlight hover:shadow-xl hover:shadow-accent/30 active:translate-y-0 self-start"
                >
                  Start the conversation
                  <span className="transition-all duration-200 group-hover:translate-x-1.5">→</span>
                </Link>
                <div className="flex items-center gap-2 text-xs text-text-tertiary">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Usually hear back within a few hours
                </div>
                <p className="text-xs text-text-tertiary max-w-xs">
                  Or email us directly at{" "}
                  <a href="mailto:hello@syncrate.com" className="text-accent hover:underline">
                    hello@syncrate.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </ParallaxShell>
  );
}
