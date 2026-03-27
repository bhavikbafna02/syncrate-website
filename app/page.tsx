import Link from "next/link";
import ParallaxShell from "@/components/ParallaxShell";

const features = [
  {
    num: "01",
    title: "Interfaces",
    tagline: "Sites that don't make your visitors work.",
    desc: "We build fast, opinionated web experiences with deliberate design decisions. Not themes, not templates, not Figma hand-me-downs.",
    items: ["Marketing Sites", "Web Apps", "Design Systems"],
    accent: "from-indigo-500/10 to-violet-500/5",
  },
  {
    num: "02",
    title: "Intelligence",
    tagline: "AI you'd actually use on a Tuesday.",
    desc: "Not demo-ware. We build RAG pipelines, custom assistants, and data tools that quietly do the boring work so your team doesn't have to.",
    items: ["RAG Pipelines", "Custom Assistants", "Data Analysis"],
    accent: "from-blue-500/10 to-cyan-500/5",
  },
  {
    num: "03",
    title: "Systems",
    tagline: "Infrastructure that holds its shape.",
    desc: "Automations, APIs, and backends that scale when you do. Built clean enough that the next engineer doesn't curse your name.",
    items: ["Workflow Automation", "API Integration", "Database Design"],
    accent: "from-violet-500/10 to-indigo-500/5",
  },
];

const processSteps = [
  {
    step: "Week 1",
    title: "We actually listen",
    desc: "One focused session. We dig into what you're trying to do, what's slowing you down, and what 'done' looks like.",
  },
  {
    step: "Week 2",
    title: "We scope it tight",
    desc: "No massive PRDs. We carve the work into shippable slices and send you a plan you can actually read in under 5 minutes.",
  },
  {
    step: "Week 3+",
    title: "We ship in cycles",
    desc: "Weekly demos. Real code. No radio silence. You see progress every single week, not just at the end.",
  },
  {
    step: "Post-launch",
    title: "We stick around",
    desc: "We monitor, iterate, and tighten things up. Most clients become long-term partners. That's how we like it.",
  },
];

const beliefs = [
  "Most \"AI features\" are just demos dressed up as products. We build the boring infrastructure that makes AI actually work.",
  "A website is a conversation. If yours is talking at your users instead of to them, it's costing you.",
  "Scale is overrated early. Clarity is not. Build something people understand before you build something that handles 10,000 users.",
];

export default function Home() {
  return (
    <ParallaxShell>
      <main>

        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="container-width pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-4xl animate-fade-in">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold tracking-widest text-text-secondary uppercase mb-10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open for new projects · 2026
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-text-primary mb-6">
              We build the kind of&nbsp;
              <span className="relative inline-block">
                <span className="relative z-10 text-accent">software</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent/30 rounded-full" />
              </span>
              <br />
              you&apos;re actually proud of.
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl mb-4">
              Syncrate is a small technical studio. We design websites, build AI systems, and automate the work your team is too busy to touch.
            </p>

            {/* Sharp supporting line */}
            <p className="text-base text-text-tertiary max-w-xl mb-12 italic">
              No 40-slide decks. No offshore devs. Just a tight team that ships real things.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-highlight active:scale-[0.98]"
              >
                Tell us what you&apos;re building
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition-all duration-200 hover:border-accent/50 hover:bg-surface-highlight active:scale-[0.98]"
              >
                Get a free audit first
              </Link>
            </div>

            {/* Social proof strip */}
            <div className="mt-12 pt-12 border-t border-border flex flex-wrap gap-8 items-center">
              <div className="text-left">
                <p className="text-2xl font-bold text-text-primary">12+</p>
                <p className="text-xs text-text-tertiary uppercase tracking-wider mt-0.5">Projects shipped</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-left">
                <p className="text-2xl font-bold text-text-primary">3 wks</p>
                <p className="text-xs text-text-tertiary uppercase tracking-wider mt-0.5">Avg. time to first demo</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-left">
                <p className="text-2xl font-bold text-text-primary">100%</p>
                <p className="text-xs text-text-tertiary uppercase tracking-wider mt-0.5">Clients we&apos;d work with again</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── THE HONEST TAKE ──────────────────────────────────── */}
        <section className="border-y border-border bg-surface/50">
          <div className="container-width py-16">
            <div className="flex gap-3 items-start mb-8">
              <span className="mt-1 h-4 w-4 rounded-sm bg-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <p className="text-xs font-bold text-accent uppercase tracking-widest">The honest take</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 md:gap-16">
              {beliefs.map((b, i) => (
                <div key={i} className="group">
                  <p className="text-3xl font-black text-border/40 mb-3 font-mono">0{i + 1}</p>
                  <p className="text-text-secondary leading-relaxed text-[15px]">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHAT WE DO ───────────────────────────────────────── */}
        <section className="container-width py-28">
          <div className="mb-16">
            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3">What we actually do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary max-w-xl leading-tight">
              Three things.<br/>Done seriously.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.num}
                className={`group relative rounded-2xl border border-border bg-gradient-to-br ${f.accent} p-7 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-text-tertiary">{f.num}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent text-xs font-medium">↗ explore</span>
                </div>

                <h3 className="text-2xl font-bold text-text-primary mb-1">{f.title}</h3>
                <p className="text-sm font-medium text-accent mb-4">{f.tagline}</p>
                <p className="text-sm text-text-secondary leading-relaxed mb-8">{f.desc}</p>

                <div className="mt-auto pt-6 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {f.items.map((item) => (
                      <span key={item} className="text-[11px] font-medium text-text-tertiary bg-background/80 px-2.5 py-1 rounded-md border border-border/70">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="text-sm font-medium text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-1.5">
              See the full breakdown → 
            </Link>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─────────────────────────────────────── */}
        <section className="border-t border-border bg-surface/30">
          <div className="container-width py-28">
            <div className="mb-16 max-w-xl">
              <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3">How we work</p>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                No surprises.<br />Just progress.
              </h2>
              <p className="text-text-secondary mt-4 text-lg">
                Here&apos;s what working with us actually looks like, week by week.
              </p>
            </div>

            <div className="relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-6 left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px bg-border" />

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                {processSteps.map((s, i) => (
                  <div key={i} className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="relative z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-xs font-mono text-text-tertiary">{s.step}</span>
                    </div>
                    <h3 className="text-base font-bold text-text-primary mb-2">{s.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTRARIAN TAKE / CALLOUT ────────────────────────── */}
        <section className="container-width py-24">
          <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-violet-500/5 p-10 md:p-14 relative overflow-hidden">
            {/* decorative blob */}
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <p className="text-xs font-bold text-accent uppercase tracking-widest mb-6">We believe this strongly</p>
              <blockquote className="text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-8">
                &ldquo;Most startup websites bury the lead. Yours shouldn&apos;t take 10 seconds to understand.&rdquo;
              </blockquote>
              <p className="text-text-secondary text-lg max-w-lg">
                We&apos;ve seen 90% of B2B sites fail on this. The fix isn&apos;t a redesign. It&apos;s a dose of brutal clarity. We know exactly how to get there.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/audit"
                  className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-highlight active:scale-[0.98]"
                >
                  Run the free audit on my site
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-lg px-6 py-3 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                >
                  Who&apos;s behind Syncrate?
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ────────────────────────────────────────── */}
        <section className="border-t border-border">
          <div className="container-width py-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-text-primary mb-4">
                Got a project in mind?<br />
                <span className="text-text-secondary font-normal">Even half-baked is fine.</span>
              </h2>
              <p className="text-text-secondary text-lg">
                We respond to every message personally. If it&apos;s not a fit, we&apos;ll say so and point you somewhere useful anyway.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-highlight active:scale-[0.98] whitespace-nowrap"
              >
                Start the conversation
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <p className="text-center text-xs text-text-tertiary">Usually hear back within 24h</p>
            </div>
          </div>
        </section>

      </main>
    </ParallaxShell>
  );
}
