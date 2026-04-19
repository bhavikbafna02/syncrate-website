"use client";

import { useState } from "react";
import Link from "next/link";
import ParallaxShell from "@/components/ParallaxShell";

/* ─── TYPES ─────────────────────────────────────────────────────────── */

type PanelData = {
  label: string;
  headline: string;
  subtext: string;
  problems: string[];
  whatWeDo: { title: string; desc: string }[];
  process: { step: string; desc: string }[];
  results: string[];
  ctaLabel: string;
  ctaHref: string;
  accentColor: string;
};

/* ─── SERVICE DEFINITIONS ────────────────────────────────────────────── */

const webPanel: PanelData = {
  label: "Web Development",
  headline: "Your website should work as hard as you do.",
  subtext: "Most sites look fine but convert poorly. We fix that.",
  problems: [
    "Your site is slow and Google knows it",
    "Visitors land and leave without doing anything",
    "It looks outdated or doesn't reflect what you actually do",
  ],
  whatWeDo: [
    { title: "Build marketing sites that convert", desc: "Clean, fast, credible. Something you're actually proud to send people to." },
    { title: "Design product interfaces", desc: "Real web apps built properly. Not Figma prototypes handed off to a developer who wasn't in the room." },
    { title: "Set up design systems", desc: "If you're scaling a team, we build the foundation so things stay consistent." },
    { title: "Run performance audits", desc: "We find exactly what's hurting your conversions and tell you how to fix it." },
  ],
  process: [
    { step: "Discover", desc: "We learn the problem before touching any tools. One focused call, no slides." },
    { step: "Design", desc: "You see real designs within a week. Not mood boards. Actual screens." },
    { step: "Build", desc: "We build fast and show you progress every Friday. No radio silence." },
    { step: "Ship", desc: "Deployed, documented, and handed off cleanly. No mystery code." },
  ],
  results: [
    "A site you're proud to share in every context",
    "Measurably faster load times and better Core Web Vitals",
    "More visitors converting into actual leads",
  ],
  ctaLabel: "Talk about your site",
  ctaHref: "/contact",
  accentColor: "indigo",
};

const seoPanel: PanelData = {
  label: "SEO Optimization",
  headline: "People are searching for what you offer. They just can't find you.",
  subtext: "We fix the technical and content problems that are keeping you invisible.",
  problems: [
    "You're not ranking for the searches that matter",
    "Your site has technical issues you don't even know about",
    "You're creating content but none of it is gaining traction",
  ],
  whatWeDo: [
    { title: "Fix what search engines penalize you for", desc: "Speed, crawlability, indexation, broken links. The silent stuff that tanks rankings." },
    { title: "Build a content structure that compounds", desc: "What to write, in what order, for which keywords. A plan you can actually follow." },
    { title: "Nail the technical foundation", desc: "Core Web Vitals, structured data, sitemaps, crawl budget. Done right once." },
    { title: "Set up local SEO if geography matters", desc: "If you serve a specific area, we make sure you show up when it counts." },
  ],
  process: [
    { step: "Audit", desc: "Full technical and content audit. We show you exactly what's broken and why it matters." },
    { step: "Prioritize", desc: "Not everything is worth fixing. We rank by impact and go after the highest-leverage items first." },
    { step: "Implement", desc: "We fix the technical problems, build the content plan, and execute." },
    { step: "Track", desc: "We set up proper monitoring and show you what's improving." },
  ],
  results: [
    "More organic traffic from people who are ready to buy",
    "A content structure that keeps working without constant attention",
    "Clean technical SEO that won't cause problems six months from now",
  ],
  ctaLabel: "Get an SEO audit",
  ctaHref: "/contact",
  accentColor: "blue",
};

const designPanel: PanelData = {
  label: "UI/UX Design",
  headline: "If people struggle to use your product, they stop using it.",
  subtext: "Good design isn't about looking nice. It's about removing friction.",
  problems: [
    "Users drop off because the flow is confusing",
    "Your product feels inconsistent across different screens",
    "You're building features but retention isn't improving",
  ],
  whatWeDo: [
    { title: "Design product interfaces end to end", desc: "From blank page to screens you can actually build from. No handoff nightmares." },
    { title: "Build component-based design systems", desc: "One set of consistent parts your whole team works from. Scales without turning into a mess." },
    { title: "Run usability research", desc: "We watch real users try to use your product. Then we fix what's actually breaking, not what we assume is." },
    { title: "Add interaction design that feels right", desc: "Subtle motion, hover states, transitions. The small things that make something feel polished." },
  ],
  process: [
    { step: "Understand", desc: "We talk to users, review existing flows, and identify where things break down." },
    { step: "Map", desc: "User flows and information architecture before any visual design. Structure first." },
    { step: "Design", desc: "High-fidelity screens with a clear design system underneath." },
    { step: "Validate", desc: "We test with real users and iterate based on what we see." },
  ],
  results: [
    "Users find what they need without thinking about it",
    "A consistent visual system your team can build on",
    "Better retention because the experience doesn't frustrate people",
  ],
  ctaLabel: "Start a design conversation",
  ctaHref: "/contact",
  accentColor: "violet",
};

const linkedinPanel: PanelData = {
  label: "LinkedIn Growth",
  headline: "Your LinkedIn should bring you opportunities.",
  subtext: "Right now, it probably isn't. We fix that.",
  problems: [
    "No one is viewing your profile",
    "Your positioning is unclear",
    "You are not getting inbound leads",
  ],
  whatWeDo: [
    { title: "Rewrite your headline and about section", desc: "So people instantly get what you do and why it matters." },
    { title: "Fix your positioning", desc: "One clear niche, one clear audience. No more being everything to everyone." },
    { title: "Redesign your profile structure", desc: "Make it easy to scan, easy to trust, easy to act on." },
    { title: "Design your banner", desc: "First impression in 50ms. We make it count." },
    { title: "Build a content direction", desc: "What to post, how often, and what kind of posts actually work for your niche." },
  ],
  process: [
    { step: "Audit", desc: "We review your profile and identify exactly what needs fixing." },
    { step: "Fix", desc: "Rewrite, redesign, restructure. Delivered as a ready-to-use document." },
    { step: "Position", desc: "Clarify your niche, your audience, and your one core message." },
    { step: "Grow", desc: "Simple content direction to keep the momentum going." },
  ],
  results: [
    "More profile views from the right people",
    "Better inbound leads without cold outreach",
    "A stronger personal brand that reflects your actual work",
  ],
  ctaLabel: "Get a free profile audit",
  ctaHref: "#linkedin-form",
  accentColor: "emerald",
};

const SERVICES = [
  {
    id: "web",
    num: "01",
    title: "Web Development",
    benefit: "Sites that load fast, look sharp, and actually convert.",
    note: "2 to 4 weeks",
    accent: "border-l-indigo-400",
    accentBg: "hover:bg-indigo-50/30 dark:hover:bg-indigo-500/5",
    expandAccent: "border-indigo-400/20",
    panel: webPanel,
    features: [
      { label: "Marketing Sites", detail: "For founders who need something credible, live, and fast." },
      { label: "Web Applications", detail: "Real product interfaces built to be used, not just shown." },
      { label: "Design Systems", detail: "If you are building a team, we build the foundation first." },
      { label: "Performance Audits", detail: "We find what is actually hurting your conversions." },
    ],
  },
  {
    id: "seo",
    num: "02",
    title: "SEO Optimization",
    benefit: "Get found by the people already searching for what you do.",
    note: "3 to 6 weeks",
    accent: "border-l-blue-400",
    accentBg: "hover:bg-blue-50/30 dark:hover:bg-blue-500/5",
    expandAccent: "border-blue-400/20",
    panel: seoPanel,
    features: [
      { label: "Technical SEO", detail: "Fix the things search engines penalize you for silently." },
      { label: "Content Strategy", detail: "What to write, in what order, for which keywords." },
      { label: "Performance Audits", detail: "Core Web Vitals, indexation, crawl budget. All of it." },
      { label: "Local SEO", detail: "If geography matters for your business, we make it work." },
    ],
  },
  {
    id: "design",
    num: "03",
    title: "UI/UX Design",
    benefit: "Interfaces people enjoy using, built around how they actually behave.",
    note: "2 to 5 weeks",
    accent: "border-l-violet-400",
    accentBg: "hover:bg-violet-50/30 dark:hover:bg-violet-500/5",
    expandAccent: "border-violet-400/20",
    panel: designPanel,
    features: [
      { label: "Product Design", detail: "End-to-end design for apps and internal tools." },
      { label: "Design Systems", detail: "Consistent components your team can build with." },
      { label: "Usability Research", detail: "We watch real users, then fix what is breaking." },
      { label: "Interaction Design", detail: "Motion and micro-interactions that feel earned." },
    ],
  },
  {
    id: "linkedin",
    num: "04",
    title: "LinkedIn Growth",
    benefit: "Turn your profile into an inbound lead channel. Without cold DMs.",
    note: "Starts with a free audit",
    accent: "border-l-emerald-400",
    accentBg: "hover:bg-emerald-50/20 dark:hover:bg-emerald-500/5",
    expandAccent: "border-emerald-400/20",
    panel: linkedinPanel,
    features: [
      { label: "Profile Optimization", detail: "Headline, about, experience. Rewritten for your niche." },
      { label: "Personal Branding", detail: "One clear message. One clear audience." },
      { label: "Banner Design", detail: "Visual first impression that builds credibility fast." },
      { label: "Content Direction", detail: "What to post and how to stay consistent." },
    ],
  },
];

/* ─── CONTACT FORM (for LinkedIn CTA) ───────────────────────────────── */

function AuditForm({ accentColor }: { accentColor: string }) {
  const [form, setForm] = useState({ name: "", email: "", url: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1200);
  };

  if (done) {
    return (
      <div className="py-6 text-center animate-fade-in">
        <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3">
          <span className="text-emerald-400 font-bold text-sm">✓</span>
        </div>
        <p className="font-semibold text-text-primary text-sm mb-1">Got it. Audit on its way.</p>
        <p className="text-xs text-text-secondary">You will hear back within 48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {[
        { label: "Name", type: "text", key: "name", ph: "Your name" },
        { label: "Email", type: "email", key: "email", ph: "you@company.com" },
        { label: "LinkedIn URL", type: "url", key: "url", ph: "linkedin.com/in/yourprofile" },
      ].map(({ label, type, key, ph }) => (
        <div key={key}>
          <label className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest block mb-1.5">
            {label}
          </label>
          <input
            type={type}
            required
            value={form[key as keyof typeof form]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            placeholder={ph}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-all duration-150"
          />
        </div>
      ))}
      <button
        type="submit"
        disabled={loading}
        className="w-full mt-1 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-highlight hover:shadow-accent/30 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none"
      >
        {loading ? "Sending..." : "Send me my audit"}
      </button>
      <p className="text-[10px] text-text-tertiary text-center">No sales call. Just an honest review.</p>
    </form>
  );
}

/* ─── EXPANDED SERVICE PANEL ─────────────────────────────────────────── */

function ServicePanel({
  panel,
  serviceId,
  onClose,
}: {
  panel: PanelData;
  serviceId: string;
  onClose: () => void;
}) {
  const isLinkedIn = serviceId === "linkedin";

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-10">
        <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">{panel.label}</p>
        <button
          onClick={onClose}
          className="text-xs text-text-tertiary hover:text-text-primary transition-colors"
        >
          Close
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Left column */}
        <div className="space-y-12">

          {/* Hero */}
          <div>
            <h2 className="text-3xl md:text-[34px] font-bold text-text-primary mb-3 leading-tight">
              {panel.headline}
            </h2>
            <p className="text-text-secondary">{panel.subtext}</p>
          </div>

          {/* Problems */}
          <div>
            <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest mb-4">
              What is broken
            </p>
            <div className="space-y-2">
              {panel.problems.map((p) => (
                <div key={p} className="flex items-start gap-3 py-3 border-b border-border/40 last:border-0">
                  <span className="text-rose-400 text-xs font-bold mt-0.5 flex-shrink-0">✗</span>
                  <p className="text-sm text-text-secondary">{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What we do */}
          <div>
            <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest mb-4">What we do</p>
            <div className="space-y-5">
              {panel.whatWeDo.map((w) => (
                <div key={w.title}>
                  <p className="text-sm font-semibold text-text-primary mb-1">{w.title}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest mb-4">How it works</p>
            <div className="grid grid-cols-2 gap-3">
              {panel.process.map((p, i) => (
                <div key={p.step} className="rounded-lg border border-border bg-surface-highlight/40 dark:bg-background/40 p-4">
                  <p className="text-[10px] font-mono font-bold text-text-tertiary mb-1">{`0${i + 1}`}</p>
                  <p className="text-sm font-bold text-text-primary mb-1">{p.step}</p>
                  <p className="text-xs text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest mb-4">What you get</p>
            <div className="space-y-2.5">
              {panel.results.map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                  <p className="text-sm text-text-secondary">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: form for LinkedIn, contact CTA for others */}
        <div className="md:sticky md:top-28 self-start">
          {isLinkedIn ? (
            <>
              <div id="linkedin-form" className="rounded-xl border border-border bg-surface p-7 shadow-lg shadow-black/5">
                <p className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest mb-2">Free audit</p>
                <h3 className="text-xl font-bold text-text-primary mb-1">
                  Let us make your LinkedIn<br />work for you.
                </h3>
                <p className="text-sm text-text-secondary mb-7">
                  Submit your profile URL. We will review it and tell you exactly what to fix. No charge.
                </p>
                <AuditForm accentColor="emerald" />
              </div>
              <div className="mt-6 space-y-2.5">
                <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">What the audit covers</p>
                {[
                  "Profile SEO and keyword placement",
                  "Headline clarity",
                  "About section hook",
                  "Visual impression (banner, photo)",
                  "Positioning and niche focus",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <span className="text-emerald-500 text-xs font-bold flex-shrink-0">✓</span>
                    {item}
                  </div>
                ))}
                <p className="text-xs text-text-tertiary pt-1">Delivered within 48 hours. Always free.</p>
              </div>
            </>
          ) : (
            <div className="rounded-xl border border-border bg-surface p-7 shadow-lg shadow-black/5">
              <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-2">Ready to start?</p>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Let us talk about<br />your specific situation.
              </h3>
              <p className="text-sm text-text-secondary mb-7 leading-relaxed">
                Describe what you need. We will figure out the right scope, timeline, and starting point together.
              </p>
              <Link
                href={panel.ctaHref}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-highlight hover:shadow-accent/30 active:translate-y-0"
              >
                {panel.ctaLabel}
                <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
              </Link>
              <div className="mt-5 flex items-center gap-2 text-xs text-text-tertiary">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                Usually hear back within a few hours
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── GOOD FIT / NOT FOR ─────────────────────────────────────────────── */

const goodFor = [
  "Startups who need a technical partner, not a vendor",
  "Founders who know the problem but not the solution",
  "Teams with a specific, broken thing that needs fixing",
  "Anyone tired of agencies that talk a lot and ship little",
];

const notFor = [
  "Teams looking for the cheapest option (we are not it)",
  "Projects that need 20 or more developers",
  "Vague build me an app asks with no clear problem",
  "When you need a full-time in-house team",
];

/* ─── PAGE ──────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  const [openService, setOpenService] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenService((prev) => (prev === id ? null : id));
  };

  return (
    <ParallaxShell>
      <main>

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="container-width pt-36 pb-16 md:pt-48 md:pb-20">
          <div className="animate-slide-up max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold tracking-widest text-text-secondary uppercase mb-10">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Services
            </span>

            <h1 className="text-5xl md:text-[58px] font-bold text-text-primary leading-[1.05] tracking-tight mb-5">
              Four things.<br />
              <span className="text-text-secondary font-normal text-4xl md:text-[46px]">All of them properly.</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed">
              We go deep on a small set of services. No stretched teams, no junior handoffs, no "we do everything" hedging.
            </p>
          </div>
        </section>

        {/* ── SERVICE CARDS ─────────────────────────────────────────── */}
        <section className="container-width pb-20 space-y-4">
          {SERVICES.map((s, i) => {
            const isOpen = openService === s.id;

            return (
              <div key={s.id}>
                {/* Collapsed card */}
                {!isOpen && (
                  <article
                    className={`group rounded-xl border border-border border-l-4 ${s.accent} bg-surface overflow-hidden transition-all duration-300 ${s.accentBg} cursor-pointer`}
                    onClick={() => toggle(s.id)}
                  >
                    <div className="p-8 md:p-10">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono font-bold text-text-tertiary">{s.num}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] text-text-tertiary font-mono border border-border/50 bg-background px-2.5 py-1 rounded">
                            {s.note}
                          </span>
                          <span className="text-xs text-text-tertiary group-hover:text-accent transition-colors duration-150">
                            View details
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-14">
                        <div className={`${i % 2 === 0 ? "lg:w-[42%]" : "lg:w-[38%]"}`}>
                          <h2 className="text-2xl font-bold text-text-primary mb-1 group-hover:text-accent transition-colors duration-200">
                            {s.title}
                          </h2>
                          <p className="text-sm font-semibold text-accent mb-5">{s.benefit}</p>
                          <p className="text-[15px] text-text-secondary leading-relaxed">
                            {s.panel.subtext}
                          </p>
                        </div>

                        <div className={`${i % 2 === 0 ? "lg:w-[58%]" : "lg:w-[62%]"} lg:border-l lg:border-border/40 lg:pl-10`}>
                          <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest mb-4">
                            What is in scope
                          </p>
                          <div className="space-y-2.5">
                            {s.features.map((f) => (
                              <div
                                key={f.label}
                                className="flex items-start gap-3 rounded-lg border border-border/40 bg-background/50 dark:bg-background/20 px-4 py-3 transition-all duration-150 hover:border-accent/20 hover:bg-accent-muted/10"
                              >
                                <span className="text-accent font-bold text-sm mt-0.5 flex-shrink-0">·</span>
                                <div>
                                  <p className="text-sm font-semibold text-text-primary">{f.label}</p>
                                  <p className="text-xs text-text-tertiary mt-0.5">{f.detail}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                )}

                {/* Expanded panel */}
                {isOpen && (
                  <div className={`rounded-xl border ${s.expandAccent} bg-surface p-8 md:p-10`}>
                    <ServicePanel
                      panel={s.panel}
                      serviceId={s.id}
                      onClose={() => setOpenService(null)}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* ── FIT SECTION ───────────────────────────────────────────── */}
        <section className="border-t border-border/50 bg-warm-surface dark:bg-surface/20">
          <div className="container-width py-20">
            <div className="mb-12">
              <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-3">Honest take</p>
              <h2 className="text-3xl font-bold text-text-primary">
                Who we are right for.
                <span className="block text-text-secondary font-normal text-2xl mt-1">And who we probably are not.</span>
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="md:w-[45%]">
                <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-5">Good fit</p>
                <ul className="space-y-3">
                  {goodFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="text-emerald-500 mt-0.5 font-bold flex-shrink-0 text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:w-[55%] md:border-l md:border-border/50 md:pl-12">
                <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mb-5">Probably not a fit</p>
                <ul className="space-y-3">
                  {notFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="text-rose-400 mt-0.5 font-bold flex-shrink-0 text-xs">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-text-tertiary italic mt-6">
                  Not sure which side you are on? Just message us. We will tell you honestly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="container-width py-24">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-text-primary mb-3">Not sure which service fits?</h2>
              <p className="text-text-secondary leading-relaxed">
                Tell us what you are dealing with. We will figure out the right starting point. Usually something small, low-risk, and fast to get going.
              </p>
            </div>
            <div className="md:w-1/2 flex flex-col gap-3">
              <Link
                href="/contact"
                className="group self-start inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:bg-accent-highlight hover:shadow-accent/30 active:translate-y-0"
              >
                Describe your situation
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <p className="text-xs text-text-tertiary">
                Or check our{" "}
                <Link href="/#pricing" className="underline underline-offset-2 hover:text-accent transition-colors">
                  pricing estimates
                </Link>{" "}
                if you want numbers first.
              </p>
            </div>
          </div>
        </section>

      </main>
    </ParallaxShell>
  );
}
