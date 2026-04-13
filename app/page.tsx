import Link from "next/link";
import ParallaxShell from "@/components/ParallaxShell";

const features = [
  {
    num: "01",
    title: "Interfaces",
    desc: "Marketing sites, web apps, and design systems built for conversion — not decoration.",
    items: ["Marketing Sites", "Web Apps", "Design Systems"],
    accent: "from-indigo-500/10 to-violet-500/5",
  },
  {
    num: "02",
    title: "Intelligence",
    desc: "RAG pipelines, custom assistants, and data tools that do real work in your workflow.",
    items: ["RAG Pipelines", "Custom Assistants", "Data Analysis"],
    accent: "from-blue-500/10 to-cyan-500/5",
  },
  {
    num: "03",
    title: "Systems",
    desc: "Automations, APIs, and backends that scale cleanly when you do.",
    items: ["Workflow Automation", "API Integration", "Database Design"],
    accent: "from-violet-500/10 to-indigo-500/5",
  },
];

const processSteps = [
  { step: "Week 1", title: "Listen & scope" },
  { step: "Week 2", title: "Plan in one page" },
  { step: "Week 3+", title: "Ship weekly demos" },
  { step: "Post-launch", title: "Monitor & iterate" },
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
              We build&nbsp;
              <span className="relative inline-block">
                <span className="relative z-10 text-accent">software</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent/30 rounded-full" />
              </span>
              <br />
              you&apos;re proud of.
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl mb-12">
              Websites, AI systems, and automation — built by a small team that ships weekly.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-highlight active:scale-[0.98]"
              >
                Start a project
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition-all duration-200 hover:border-accent/50 hover:bg-surface-highlight active:scale-[0.98]"
              >
                Free site audit
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
                <p className="text-xs text-text-tertiary uppercase tracking-wider mt-0.5">Avg. first demo</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-left">
                <p className="text-2xl font-bold text-text-primary">100%</p>
                <p className="text-xs text-text-tertiary uppercase tracking-wider mt-0.5">Repeat rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHAT WE DO ───────────────────────────────────────── */}
        <section className="container-width py-28">
          <div className="mb-16">
            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3">What we do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary max-w-xl leading-tight">
              Three things.<br/>Done well.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.num}
                className={`group relative rounded-2xl border border-border bg-gradient-to-br ${f.accent} p-7 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5`}
              >
                <span className="text-xs font-mono font-bold text-text-tertiary mb-6 block">{f.num}</span>
                <h3 className="text-2xl font-bold text-text-primary mb-3">{f.title}</h3>
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
              Full breakdown →
            </Link>
          </div>
        </section>

        {/* ─── HOW WE WORK ─────────────────────────────────────── */}
        <section className="border-t border-border bg-surface/30">
          <div className="container-width py-24">
            <div className="mb-14">
              <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Process</p>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                No surprises. Just progress.
              </h2>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-6 left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px bg-border" />
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                {processSteps.map((s, i) => (
                  <div key={i} className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="relative z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-xs font-mono text-text-tertiary">{s.step}</span>
                    </div>
                    <h3 className="text-base font-bold text-text-primary">{s.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ────────────────────────────────────────────── */}
        <section className="border-t border-border">
          <div className="container-width py-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-text-primary mb-3">
                Got a project?
              </h2>
              <p className="text-text-secondary text-lg">
                Even half-baked ideas work. We respond personally within 24h.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-highlight active:scale-[0.98] whitespace-nowrap flex-shrink-0"
            >
              Start the conversation
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>

      </main>
    </ParallaxShell>
  );
}
