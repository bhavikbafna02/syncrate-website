"use client";

import { useState, useEffect, useRef } from "react";

/* ─── DATA ──────────────────────────────────────────────────────────── */

const stats = [
  { value: "3×", label: "Profile views" },
  { value: "5×", label: "Inbound leads" },
  { value: "47%", label: "More connection accepts" },
  { value: "< 2 wks", label: "To see first results" },
];

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder, B2B SaaS",
    text: "I went from zero inbound to 3 warm leads in the first week. The profile rewrite paid for itself on day 8.",
    initials: "AM",
    accent: "bg-indigo-500",
  },
  {
    name: "Priya Sharma",
    role: "Senior Product Manager",
    text: "Recruiters started reaching out without me applying. I landed my dream role in 6 weeks.",
    initials: "PS",
    accent: "bg-violet-500",
  },
  {
    name: "David Chen",
    role: "Independent Consultant",
    text: "Content impressions went from 200 to 12,000 per post. The strategy they built actually makes sense.",
    initials: "DC",
    accent: "bg-blue-500",
  },
];

const painPoints = [
  {
    title: "No one is finding you",
    desc: "LinkedIn's algorithm buries profiles with weak keyword signals. You're invisible to the exact people searching for you.",
  },
  {
    title: "Your positioning is unclear",
    desc: "If a visitor can't understand what you do and who you help within five seconds, they leave — and never come back.",
  },
  {
    title: "Zero inbound interest",
    desc: "You're either posting to silence, or not posting at all. Either way, LinkedIn isn't generating any real opportunities for you.",
  },
  {
    title: "First impressions are costing you",
    desc: "A generic banner and a job-title headline tell visitors nothing. Credibility is lost before a single word is read.",
  },
];

const services = [
  {
    num: "01",
    title: "Profile Optimization",
    desc: "Full rewrite of every section — headline, about, experience, skills — keyword-mapped to your niche so the algorithm surfaces you to the right people.",
    tags: ["Headline Rewrite", "Keyword Mapping", "Full Profile"],
    accent: "bg-indigo-400",
    shadow: "hover:shadow-indigo-500/8 hover:border-indigo-400/30",
  },
  {
    num: "02",
    title: "Personal Branding Strategy",
    desc: "A focused positioning sprint. We define your niche, your voice, and the single thing you should be known for before any optimization begins.",
    tags: ["Niche Definition", "Voice Guide", "ICP Mapping"],
    accent: "bg-blue-400",
    shadow: "hover:shadow-blue-500/8 hover:border-blue-400/30",
  },
  {
    num: "03",
    title: "Content Strategy",
    desc: "30 post ideas, 5 fully written posts, and hooks engineered to stop the scroll — built around your audience, not generic thought leadership.",
    tags: ["30 Post Ideas", "5 Written Posts", "Hook Templates"],
    accent: "bg-violet-400",
    shadow: "hover:shadow-violet-500/8 hover:border-violet-400/30",
  },
  {
    num: "04",
    title: "Banner + Headline Design",
    desc: "A custom banner built in your brand palette and a headline tested for maximum visibility in LinkedIn search results.",
    tags: ["Custom Banner", "A/B Headline", "Brand Palette"],
    accent: "bg-emerald-400",
    shadow: "hover:shadow-emerald-500/8 hover:border-emerald-400/30",
  },
  {
    num: "05",
    title: "About Section Copywriting",
    desc: "Your About section is your most-visited real estate. We rewrite it to hook in three sentences and convert in the next five.",
    tags: ["Story Arc", "CTA Included", "Conversion Copy"],
    accent: "bg-amber-400",
    shadow: "hover:shadow-amber-500/8 hover:border-amber-400/30",
  },
  {
    num: "06",
    title: "LinkedIn SEO",
    desc: "Strategic keyword placement across every field. We reverse-engineer how your ideal client searches and make you show up first.",
    tags: ["Keyword Audit", "Search Ranking", "Niche SEO"],
    accent: "bg-rose-400",
    shadow: "hover:shadow-rose-500/8 hover:border-rose-400/30",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Free Profile Audit",
    desc: "We review your profile against 22 criteria — SEO, positioning, copy quality, visual design, and conversion. You receive a full scorecard within 48 hours.",
    time: "48 hrs",
  },
  {
    num: "02",
    title: "Strategy Session",
    desc: "One focused 45-minute call. We map your niche, target audience, and goals. Output: a one-page positioning brief you keep regardless of what you decide.",
    time: "45 min",
  },
  {
    num: "03",
    title: "Full Optimization",
    desc: "Profile rewrite, banner design, content strategy, and SEO implementation — delivered as a ready-to-publish document with clear revision instructions.",
    time: "5–7 days",
  },
  {
    num: "04",
    title: "Growth System",
    desc: "A 90-day content calendar, an engagement playbook, and a growth plan you can follow independently. We check in on first-month metrics together.",
    time: "Ongoing",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$297",
    unit: "one-time",
    tagline: "A solid, optimized profile with a strong visual first impression.",
    includes: [
      "Full profile rewrite (all sections)",
      "Custom banner design",
      "LinkedIn SEO keyword mapping",
      "1 round of revisions",
      "48-hr delivery",
    ],
    notIncluded: ["Content strategy", "Strategy session"],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$597",
    unit: "one-time",
    tagline: "Profile + strategy + content — everything needed to generate real inbound.",
    includes: [
      "Everything in Starter",
      "Personal branding strategy doc",
      "30-day content calendar",
      "5 fully written LinkedIn posts",
      "45-min strategy session",
      "2 rounds of revisions",
    ],
    notIncluded: ["Ongoing monthly management"],
    cta: "Start growing",
    highlight: true,
  },
  {
    name: "Premium",
    price: "$1,197",
    unit: "one-time",
    tagline: "LinkedIn as a sustained lead source — for founders who are serious about it.",
    includes: [
      "Everything in Growth",
      "90-day LinkedIn growth plan",
      "10 fully written posts",
      "Engagement playbook",
      "Monthly check-in (3 months)",
      "Profile performance tracking",
      "Priority response (same-day)",
    ],
    notIncluded: [],
    cta: "Go premium",
    highlight: false,
  },
];

const faqs = [
  {
    q: "How long until I see results?",
    a: "Profile view increases typically appear within 1–2 weeks of optimization. Inbound messages and lead generation usually build in weeks 3–6 as your content strategy takes effect. We set realistic benchmarks in the audit — no false promises.",
  },
  {
    q: "Who is this designed for?",
    a: "Founders who want inbound without cold outreach. Job seekers who want recruiters to come to them. Consultants and coaches building authority in a niche. Sales leaders who want warm introductions. If professional credibility translates directly into income for you, this is built for you.",
  },
  {
    q: "Do I need to write content myself?",
    a: "We write 5–10 posts for you and build a calendar with templates that take under 10 minutes each. You don't need to become a content creator — you just need to show up with intention.",
  },
  {
    q: "What if my profile is completely empty?",
    a: "That's actually a clean starting point. We've built profiles from scratch that generated 500+ connection requests within 60 days. No bad habits to undo.",
  },
  {
    q: "Is this a one-time engagement or ongoing?",
    a: "Starter and Growth are one-time optimizations. Premium includes three months of check-ins to track growth and adjust as needed. Many clients return quarterly as their goals evolve.",
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
      <div className="flex items-start justify-between gap-6 py-5 group">
        <p
          className={`text-[15px] font-semibold leading-snug transition-colors duration-150 ${
            open ? "text-accent" : "text-text-primary group-hover:text-accent"
          }`}
        >
          {q}
        </p>
        <span
          className={`text-text-tertiary mt-0.5 flex-shrink-0 text-base leading-none transition-all duration-200 ${
            open ? "rotate-45 text-accent" : ""
          }`}
        >
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

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", linkedin: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  if (submitted) {
    return (
      <div className="text-center py-8 animate-fade-in">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
          <span className="text-emerald-400 text-lg font-bold">✓</span>
        </div>
        <p className="text-base font-semibold text-text-primary mb-1">Audit request received</p>
        <p className="text-sm text-text-secondary max-w-xs mx-auto">
          We'll review your profile and return a full scorecard within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {[
        { label: "Full Name", type: "text", key: "name", placeholder: "Your name" },
        { label: "Email Address", type: "email", key: "email", placeholder: "you@company.com" },
        { label: "LinkedIn Profile URL", type: "url", key: "linkedin", placeholder: "linkedin.com/in/yourprofile" },
      ].map(({ label, type, key, placeholder }) => (
        <div key={key}>
          <label className="text-[11px] font-semibold text-text-tertiary uppercase tracking-widest block mb-2">
            {label}
          </label>
          <input
            type={type}
            required
            value={form[key as keyof typeof form]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            placeholder={placeholder}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary/60 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition-all duration-150"
          />
        </div>
      ))}
      <button
        type="submit"
        disabled={loading}
        className="w-full mt-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-highlight hover:shadow-lg hover:shadow-accent/30 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none"
      >
        {loading ? "Sending..." : "Request Free Audit →"}
      </button>
      <p className="text-[11px] text-text-tertiary text-center pt-1">
        No sales call. No spam. Just an honest scorecard.
      </p>
    </form>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────── */

export default function LinkedInOptimizationPage() {
  const servicesRef = useInView();
  const processRef = useInView();
  const pricingRef = useInView();

  return (
    <main className="overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[130px]" />
          <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] rounded-full bg-violet-500/4 blur-[100px]" />
        </div>

        <div className="container-width relative z-10 pt-36 pb-24 md:pt-48 md:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold tracking-widest text-text-secondary uppercase mb-10 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0A66C2] animate-pulse" />
              LinkedIn Optimization · By Syncrate
            </div>

            <h1 className="text-5xl sm:text-[58px] md:text-[68px] font-bold leading-[1.05] tracking-tight text-text-primary mb-7 animate-slide-up">
              Turn Your LinkedIn Into a<br />
              <span className="bg-gradient-to-r from-accent via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Lead-Generating Machine.
              </span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed max-w-xl mb-10 animate-slide-up-delay">
              Most profiles are digital business cards collecting dust. We turn yours into a 24/7 inbound pipeline — built for founders, job seekers, and personal brands who are done being invisible.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-slide-up-delay2">
              <a
                href="#audit"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-highlight hover:shadow-accent/35 active:translate-y-0"
              >
                Get Free Profile Audit
                <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-text-primary transition-all duration-150 hover:border-border/80 hover:bg-surface-highlight active:scale-[0.98]"
              >
                View packages
              </a>
            </div>

            <div className="mt-16 pt-10 border-t border-border/50 grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fade-in">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-text-primary tabular-nums">{s.value}</p>
                  <p className="text-xs text-text-tertiary mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="border-t border-border/50 bg-warm-surface dark:bg-surface/20">
        <div className="container-width py-24">
          <div className="mb-14">
            <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-3">Client results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Real outcomes. Real profiles.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/8 cursor-default"
              >
                <p className="text-sm text-text-secondary leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-border/40">
                  <div className={`w-8 h-8 rounded-full ${t.accent} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                    <p className="text-xs text-text-tertiary">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ───────────────────────────────────────────────── */}
      <section className="container-width py-24">
        <div className="max-w-2xl mb-14">
          <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-3">The problem</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Why your LinkedIn isn&apos;t working
          </h2>
          <p className="text-text-secondary">
            It&apos;s not a lack of effort. It&apos;s a fixable system problem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {painPoints.map((p, i) => (
            <div
              key={p.title}
              className="group rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border/80 hover:shadow-md cursor-default"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <h3 className="text-[15px] font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-150">
                {p.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────── */}
      <section
        ref={servicesRef.ref}
        className="border-t border-border/50 bg-warm-surface dark:bg-surface/20"
      >
        <div className="container-width py-24">
          <div className="mb-14">
            <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-3">What we do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
              Six services. One optimized presence.
            </h2>
            <p className="text-text-secondary max-w-xl">
              Each service is designed to work independently or together as a complete system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div
                key={s.num}
                className={`group relative rounded-xl border border-border bg-surface p-6 transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-lg ${s.shadow} ${
                  servicesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  transition: `opacity 0.5s ease ${i * 70}ms, transform 0.5s ease ${i * 70}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
                }}
              >
                <div
                  className={`absolute top-0 left-6 h-[2px] rounded-full ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{ width: `${36 + i * 8}%` }}
                />
                <span className="text-[10px] font-mono font-bold text-text-tertiary block mb-5">{s.num}</span>
                <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-150">
                  {s.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">{s.desc}</p>
                <div className="pt-4 border-t border-border/40 flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-text-tertiary bg-background px-2 py-0.5 rounded border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────── */}
      <section ref={processRef.ref} className="container-width py-24">
        <div className="max-w-2xl mb-14">
          <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
            From audit to authority
          </h2>
          <p className="text-text-secondary">
            Four steps. Clear at every stage.
          </p>
        </div>

        <div>
          {processSteps.map((s, i) => (
            <div
              key={s.num}
              className={`group grid md:grid-cols-[72px_1fr_100px] gap-6 py-7 border-t border-border/50 hover:bg-surface-highlight/30 dark:hover:bg-surface/40 transition-colors duration-200 rounded-lg px-3 -mx-3 ${
                processRef.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
              style={{ transition: `opacity 0.5s ease ${i * 90}ms, transform 0.5s ease ${i * 90}ms` }}
            >
              <div className="flex items-start pt-0.5">
                <span className="text-2xl font-bold text-text-primary/10 dark:text-text-tertiary/15 tabular-nums group-hover:text-accent/15 transition-colors duration-300 font-mono">
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

      {/* ── PRICING ───────────────────────────────────────────────── */}
      <section
        id="pricing"
        ref={pricingRef.ref}
        className="border-t border-border/50 bg-warm-surface dark:bg-surface/20"
      >
        <div className="container-width py-24">
          <div className="mb-14">
            <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
              One-time. No retainers.
            </h2>
            <p className="text-text-secondary max-w-xl">
              Every package pays for itself in a single closed deal or new role. Pick the depth your goals require.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 items-start">
            {pricingPlans.map((p, i) => (
              <div
                key={p.name}
                className={`rounded-xl border p-7 transition-all duration-300 ${
                  p.highlight
                    ? "border-accent/25 bg-accent-muted dark:bg-accent-muted shadow-xl shadow-accent/8 md:-mt-5 md:-mb-5 relative"
                    : "border-border bg-surface hover:shadow-md"
                } ${pricingRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transition: `opacity 0.5s ease ${i * 90}ms, transform 0.5s ease ${i * 90}ms, box-shadow 0.3s ease` }}
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      Most popular
                    </span>
                  </div>
                )}

                <p className="text-[11px] font-bold text-text-tertiary uppercase tracking-widest mb-4">{p.name}</p>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-4xl font-bold text-text-primary tabular-nums">{p.price}</span>
                  <span className="text-xs text-text-tertiary">{p.unit}</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 pb-6 border-b border-border/50">
                  {p.tagline}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {p.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="text-emerald-500 mt-0.5 flex-shrink-0 text-xs font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {p.notIncluded.length > 0 && (
                  <div className="mb-6">
                    <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest mb-2">Not included</p>
                    {p.notIncluded.map((item) => (
                      <p key={item} className="text-[12px] text-text-tertiary leading-relaxed">— {item}</p>
                    ))}
                  </div>
                )}

                <a
                  href="#audit"
                  className={`group inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    p.highlight
                      ? "bg-accent text-white hover:-translate-y-0.5 hover:bg-accent-highlight shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/25"
                      : "border border-border bg-surface hover:bg-surface-highlight hover:border-border/80 text-text-primary"
                  }`}
                >
                  {p.cta}
                  <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
                </a>
              </div>
            ))}
          </div>

          <p className="text-xs text-text-tertiary mt-8">
            All prices in USD. If we can&apos;t meaningfully improve your profile, we&apos;ll tell you upfront — no charge.
          </p>
        </div>
      </section>

      {/* ── AUDIT FORM ────────────────────────────────────────────── */}
      <section id="audit" className="container-width py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-28">
            <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-3">Free LinkedIn Audit</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5 leading-tight">
              Let&apos;s find what&apos;s<br />costing you leads.
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Submit your profile URL. We&apos;ll score it across 22 criteria and deliver a full scorecard within 48 hours — no pitch deck disguised as advice.
            </p>

            <div className="space-y-3">
              {[
                "Profile SEO & keyword density",
                "Headline conversion power",
                "About section hook & CTA",
                "Visual first impression",
                "Positioning clarity & niche focus",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="text-emerald-500 font-bold text-xs flex-shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border/50 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
              <p className="text-xs text-text-tertiary">Delivered within 48 hours. Always free.</p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-8 shadow-lg shadow-black/5">
            <p className="text-base font-bold text-text-primary mb-1">Request your audit</p>
            <p className="text-sm text-text-tertiary mb-7">60 seconds to fill. 48 hours to your inbox.</p>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="border-t border-border/50 bg-warm-surface dark:bg-surface/20">
        <div className="container-width py-24">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div className="md:sticky md:top-28">
              <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-3">FAQ</p>
              <h2 className="text-3xl font-bold text-text-primary mb-3">
                Common questions
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Direct answers. No marketing speak.
              </p>
            </div>
            <div>
              {faqs.map((f) => (
                <FAQItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="border-t border-border/50 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-accent/6 blur-[90px]" />
        </div>

        <div className="container-width py-28 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-[46px] font-bold text-text-primary mb-5 leading-tight">
                Let&apos;s optimize<br />your LinkedIn.
              </h2>
              <p className="text-text-secondary leading-relaxed">
                You&apos;re one good profile away from inbound leads, recruiter interest, and the opportunities you&apos;ve been manually chasing. Start with the free audit — no commitment required.
              </p>
            </div>
            <div className="md:w-1/2 flex flex-col gap-4 md:pt-3">
              <a
                href="#audit"
                className="group inline-flex items-center gap-3 rounded-lg bg-accent px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-highlight hover:shadow-xl hover:shadow-accent/28 active:translate-y-0 self-start"
              >
                Get My Free Profile Audit
                <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-text-tertiary">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                Scorecard returned within 48 hours
              </div>
              <p className="text-xs text-text-tertiary">
                Or email us at{" "}
                <a href="mailto:linkedin@syncrate.com" className="text-accent hover:underline">
                  linkedin@syncrate.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
