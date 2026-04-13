import Link from "next/link";
import ParallaxShell from "@/components/ParallaxShell";

const services = [
  {
    num: "01",
    title: "Websites",
    tagline: "Fast, opinionated, conversion-focused.",
    features: ["Marketing Sites", "Web Applications", "Design Systems", "Performance Audits"],
    accent: "from-indigo-500/10 to-violet-500/5",
  },
  {
    num: "02",
    title: "AI Systems",
    tagline: "Custom AI that fits your workflow.",
    features: ["Custom Chatbots", "RAG Pipelines", "Process Automation", "Data Analysis"],
    accent: "from-blue-500/10 to-cyan-500/5",
  },
  {
    num: "03",
    title: "Automation",
    tagline: "Kill the repetitive stuff.",
    features: ["Workflow Design", "API Integration", "Process Optimization", "Scalable Architecture"],
    accent: "from-violet-500/10 to-indigo-500/5",
  },
];

export default function ServicesPage() {
  return (
    <ParallaxShell>
      <main>

        {/* ─── HERO ──────────────────────────────────────────────── */}
        <section className="container-width pt-32 pb-20 md:pt-40">
          <div className="animate-slide-up max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold tracking-widest text-text-secondary uppercase mb-10">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Services
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-text-primary leading-[1.05] tracking-tight mb-6">
              Three things we do.<br />
              <span className="text-text-secondary font-normal">All of them well.</span>
            </h1>
          </div>
        </section>

        {/* ─── SERVICES ────────────────────────────────────────── */}
        <section className="container-width pb-24 space-y-8">
          {services.map((s) => (
            <article
              key={s.num}
              className={`group relative rounded-2xl border border-border bg-gradient-to-br ${s.accent} overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5`}
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-8">

                  {/* Left */}
                  <div className="md:w-2/5">
                    <span className="text-xs font-mono font-bold text-text-tertiary mb-4 block">{s.num}</span>
                    <h2 className="text-3xl font-bold text-text-primary mb-2">{s.title}</h2>
                    <p className="text-sm font-semibold text-accent">{s.tagline}</p>
                  </div>

                  {/* Right */}
                  <div className="md:w-3/5 md:border-l md:border-border/50 md:pl-10">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {s.features.map((f) => (
                        <div key={f} className="rounded-xl border border-border/60 bg-background/50 px-4 py-3 hover:border-accent/30 transition-colors">
                          <p className="text-sm font-semibold text-text-primary">{f}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* ─── CTA ───────────────────────────────────────────────── */}
        <section className="container-width py-24">
          <div className="rounded-2xl border border-border bg-surface/60 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-text-primary mb-3">Not sure which fits?</h2>
              <p className="text-text-secondary text-lg">
                Tell us what you&apos;re dealing with. We&apos;ll find the right starting point.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-highlight active:scale-[0.98] flex-shrink-0"
            >
              Get in touch
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>

      </main>
    </ParallaxShell>
  );
}
