"use client";

import Link from "next/link";
import ParallaxShell from "@/components/ParallaxShell";
import { useState } from "react";

/* ─── DATA ──────────────────────────────────────────────────────────── */

const services = [
  {
    num: "01",
    title: "Web Development",
    benefit: "Sites that load fast, look sharp, and actually convert.",
    items: ["Marketing Sites", "Web Apps", "Design Systems"],
    accent: "bg-indigo-400",
    hover: "hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/8 hover:border-indigo-400/30",
  },
  {
    num: "02",
    title: "SEO Optimization",
    benefit: "Get found by the people already searching for what you do.",
    items: ["Technical SEO", "Content Strategy", "Performance Audits"],
    accent: "bg-blue-400",
    hover: "hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/8 hover:border-blue-400/30",
  },
  {
    num: "03",
    title: "UI/UX Design",
    benefit: "Interfaces people enjoy using, built around how they actually behave.",
    items: ["Product Design", "Design Systems", "Usability Research"],
    accent: "bg-violet-400",
    hover: "hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/8 hover:border-violet-400/30",
  },
  {
    num: "04",
    title: "LinkedIn Growth",
    benefit: "Turn your profile into an inbound lead channel. Without cold DMs.",
    items: ["Profile Optimization", "Personal Branding", "Content Direction"],
    accent: "bg-emerald-400",
    hover: "hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/8 hover:border-emerald-400/30",
  },
];

const steps = [
  {
    num: "1",
    title: "Fill out a short form.",
    desc: "What's the problem, what's broken, what does success look like. No 40-field intake.",
    time: "~5 min",
  },
  {
    num: "2",
    title: "One real conversation.",
    desc: "One focused call. No slide decks, no discovery theatre. Just the questions that matter.",
    time: "30 to 45 min",
  },
  {
    num: "3",
    title: "You get a one-page plan.",
    desc: "Scope, timeline, fixed price. Written clearly enough to read in under 5 minutes.",
    time: "2 to 3 days",
  },
  {
    num: "4",
    title: "Progress every week.",
    desc: "Demos on Fridays. Real code, not mockups. No radio silence.",
    time: "From week 1",
  },
];

const faqs = [
  {
    q: "What if it doesn't fit my use case?",
    a: "We've turned down projects that weren't right, and told clients when a cheaper option already exists. If we're the wrong team, we'll say so in the first call. Not after you've paid a deposit.",
  },
  {
    q: "How long does it take?",
    a: "First demo in 2 to 3 weeks. Full projects in 4 to 10 weeks depending on scope. The one-page plan you get after our call has specific dates, not vague estimates.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "No. We've worked with non-technical founders, ops leads, and solo consultants. You bring the problem. We figure out the how. We just need you to be responsive. Slow decisions cost time.",
  },
  {
    q: "Can I see past work?",
    a: "We show work on calls, not on a public portfolio. Some clients prefer we don't list them. If that's a dealbreaker, fair. We'd rather say so now.",
  },
  {
    q: "What if the project goes over scope?",
    a: "We flag it early. If something changes, we'll send a short scope update with cost impact before building anything. No surprise invoices.",
  },
];

/* ─── COMPONENTS ────────────────────────────────────────────────────── */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-border/50 last:border-0 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-4 py-5 group">
        <p className={`text-[15px] font-semibold leading-snug transition-colors duration-150 ${open ? "text-accent" : "text-text-primary group-hover:text-accent"}`}>
          {q}
        </p>
        <span className={`text-text-tertiary mt-0.5 flex-shrink-0 text-base leading-none transition-all duration-200 ${open ? "rotate-45 text-accent" : ""}`}>
          +
        </span>
      </div>
      {open && (
        <p className="text-text-secondary text-sm leading-relaxed pb-5 max-w-2xl animate-fade-in">
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

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full bg-accent/5 blur-[140px]" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-violet-500/4 blur-[120px]" />
          </div>

          <div className="container-width relative z-10 pt-36 pb-24 md:pt-48 md:pb-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold tracking-widest text-text-secondary uppercase mb-10 animate-fade-in">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Taking on new projects · April 2026
              </div>

              <h1 className="text-5xl sm:text-[58px] md:text-[68px] font-bold leading-[1.04] tracking-tight text-text-primary mb-6 animate-slide-up">
                We build things<br />
                <span className="text-accent">you&apos;re proud to ship.</span>
              </h1>

              <p className="text-lg text-text-secondary leading-relaxed max-w-xl mb-10 animate-slide-up-delay">
                Syncrate is a small technical studio. We do websites, AI tools, and automations. No agency overhead, no offshore handoff, no endless revisions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 animate-slide-up-delay2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-highlight hover:shadow-accent/35 active:translate-y-0"
                >
                  Tell us what you&apos;re building
                  <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                </Link>
                <Link
                  href="/audit"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-text-primary transition-all duration-150 hover:bg-surface-highlight hover:border-border/80 active:scale-[0.98]"
                >
                  Free site audit first
                </Link>
              </div>

              <div className="mt-16 pt-10 border-t border-border/50 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 animate-fade-in">
                {[
                  { val: "12+", label: "Projects shipped" },
                  { val: "3 wks", label: "Avg. first demo" },
                  { val: "~80%", label: "Come back for more" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-text-primary tabular-nums">{s.val}</p>
                    <p className="text-xs text-text-tertiary mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────────── */}
        <section className="border-t border-border/50 bg-warm-surface dark:bg-surface/20">
          <div className="container-width py-24">
            <div className="mb-14">
              <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-3">What we do</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                Four services. Done properly.
              </h2>
              <p className="text-text-secondary max-w-lg">
                We focus on a small set of things and go deep on each. No stretched teams, no junior handoffs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((s, i) => (
                <Link
                  key={s.num}
                  href="/services"
                  className={`group relative rounded-xl border border-border bg-surface p-6 flex flex-col transition-all duration-300 ${s.hover}`}
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <div
                    className={`absolute top-0 left-6 h-[2px] rounded-full ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    style={{ width: `${40 + i * 10}%` }}
                  />
                  <span className="text-[10px] font-mono font-bold text-text-tertiary block mb-5">{s.num}</span>
                  <h3 className="text-[15px] font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-150">
                    {s.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">{s.benefit}</p>
                  <div className="pt-4 border-t border-border/40 flex flex-wrap gap-1.5">
                    {s.items.map((item) => (
                      <span key={item} className="text-[10px] font-medium text-text-tertiary bg-background px-2 py-0.5 rounded border border-border/50">
                        {item}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8">
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

        {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
        <section className="container-width py-24">
          <div className="max-w-2xl mb-14">
            <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
              How it works
            </h2>
            <p className="text-text-secondary">
              No sales theatre. No long intake forms. Here&apos;s the exact sequence.
            </p>
          </div>

          <div>
            {steps.map((s) => (
              <div
                key={s.num}
                className="group grid md:grid-cols-[64px_1fr_100px] gap-6 py-7 border-t border-border/50 hover:bg-surface-highlight/30 dark:hover:bg-surface/40 transition-colors duration-200 rounded-lg px-3 -mx-3"
              >
                <div className="flex items-start pt-0.5">
                  <span className="text-2xl font-bold text-text-primary/10 dark:text-text-tertiary/15 font-mono tabular-nums group-hover:text-accent/15 transition-colors duration-300">
                    {s.num}
                  </span>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-text-primary mb-1.5 group-hover:text-accent transition-colors duration-150">
                    {s.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
                <div className="flex items-start justify-end pt-0.5">
                  <span className="text-[11px] font-mono text-text-tertiary bg-surface-highlight dark:bg-surface px-2.5 py-1 rounded border border-border/50 whitespace-nowrap">
                    {s.time}
                  </span>
                </div>
              </div>
            ))}
            <div className="border-t border-border/50" />
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="container-width py-24">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div className="md:sticky md:top-28">
              <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-3">FAQ</p>
              <h2 className="text-3xl font-bold text-text-primary mb-3">
                Common questions
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Straight answers. No PR polish.
              </p>
            </div>
            <div>
              {faqs.map((f) => (
                <FAQItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────── */}
        <section className="border-t border-border/50 relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />
          </div>
          <div className="container-width py-28 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-[46px] font-bold text-text-primary mb-5 leading-tight">
                  Got something<br />building in your head?
                </h2>
                <p className="text-text-secondary leading-relaxed mb-2">
                  Half-baked is fine. Most of our best projects started as a rough idea someone sent at 11pm.
                </p>
                <p className="text-sm text-text-tertiary">
                   We read every message. If it&apos;s not a fit, we&apos;ll say so. No ghosting.
                </p>
              </div>
              <div className="md:w-1/2 flex flex-col gap-4 md:pt-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-lg bg-accent px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-highlight hover:shadow-xl hover:shadow-accent/28 active:translate-y-0 self-start"
                >
                  Start the conversation
                  <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                </Link>
                <div className="flex items-center gap-2 text-xs text-text-tertiary">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  Usually hear back within a few hours
                </div>
                <p className="text-xs text-text-tertiary">
                  Or email us at{" "}
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
