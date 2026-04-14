import Link from "next/link";
import ParallaxShell from "@/components/ParallaxShell";

const services = [
  {
    num: "01",
    title: "Websites",
    tagline: "Fast, opinionated, built to convert.",
    description:
      "We're not a web agency with 30 designers and a project manager. It's 1–2 of us, full attention, start to finish. You get a site that feels like it was built for your specific situation — not a theme someone swapped the logo on.",
    note: "Typical timeline: 2–4 weeks",
    features: [
      { label: "Marketing Sites", detail: "For founders who need something credible, live, fast." },
      { label: "Web Applications", detail: "Real product interfaces — not Figma prototypes." },
      { label: "Design Systems", detail: "If you're building a team, we build the foundation." },
      { label: "Performance Audits", detail: "We'll tell you what's actually hurting conversions." },
    ],
    accent: "border-l-indigo-400",
    hoverBg: "hover:bg-indigo-50/40 dark:hover:bg-indigo-500/5",
  },
  {
    num: "02",
    title: "AI Systems",
    tagline: "Useful tools, not demos dressed up as products.",
    description:
      "We've built RAG pipelines, document Q&A tools, internal copilots, and data analysis dashboards. The pattern we see is: most teams don't need a chatbot. They need 30 hours of manual work automated. That's what we actually build.",
    note: "Most projects: 4–8 weeks",
    features: [
      { label: "Document Q&A / RAG", detail: "Search your own knowledge base, not the internet." },
      { label: "Internal Assistants", detail: "Tools trained on how your team actually works." },
      { label: "Process Automation", detail: "The thing that takes 3 hours every week." },
      { label: "Data Analysis", detail: "Surface answers from data without hiring an analyst." },
    ],
    accent: "border-l-blue-400",
    hoverBg: "hover:bg-blue-50/40 dark:hover:bg-blue-500/5",
  },
  {
    num: "03",
    title: "Automation",
    tagline: "Kill the repetitive stuff. Keep the humans for the hard parts.",
    description:
      "We map your actual workflow — the real one, messy and all — find the bottlenecks, and build systems that handle the boring bits. It usually starts with one process. Six months later that team has three fewer weekly meetings.",
    note: "Typical engagement: 3–6 weeks",
    features: [
      { label: "Workflow Design", detail: "We understand what you do before building anything." },
      { label: "API Integration", detail: "Make your tools talk to each other properly." },
      { label: "Process Optimization", detail: "Cut the redundant steps out, then automate the rest." },
      { label: "Scalable Backends", detail: "Built to not fall over at 10× the volume." },
    ],
    accent: "border-l-violet-400",
    hoverBg: "hover:bg-violet-50/40 dark:hover:bg-violet-500/5",
  },
];

const notFor = [
  "Teams looking for the cheapest option (we're not the cheapest)",
  "Projects that need 20+ developers",
  "When you need a full-time in-house team",
  "Vague 'build me an app' asks with no clear problem",
];

const goodFor = [
  "Startups who need a technical partner, not a vendor",
  "Founders who know the problem but not the solution",
  "Teams with a specific, broken thing they need fixed",
  "Anyone tired of agencies that talk a lot and ship little",
];

export default function ServicesPage() {
  return (
    <ParallaxShell>
      <main>

        {/* ─── HERO ──────────────────────────────────────────────── */}
        <section className="container-width pt-32 pb-16 md:pt-44 md:pb-20">
          <div className="animate-slide-up max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold tracking-widest text-text-secondary uppercase mb-10">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Services
            </span>

            <h1 className="text-5xl md:text-[62px] font-bold text-text-primary leading-[1.05] tracking-tight mb-6">
              Three things.<br />
              <span className="text-text-secondary font-normal text-4xl md:text-5xl">All of them properly.</span>
            </h1>

            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
              We go deep on a small set of things rather than saying yes to everything.
              Most agencies do the opposite — and you can feel it in the work.
            </p>
          </div>
        </section>

        {/* ─── SERVICES — Each card has unique layout ──────────────── */}
        <section className="container-width pb-20 space-y-6">
          {services.map((s, i) => (
            <article
              key={s.num}
              className={`group rounded-xl border border-border border-l-4 ${s.accent} bg-surface overflow-hidden transition-all duration-300 ${s.hoverBg}`}
            >
              <div className="p-8 md:p-10">

                {/* Top row — number + timeline tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-text-tertiary">{s.num}</span>
                  <span className="text-[11px] text-text-tertiary font-mono border border-border/60 bg-surface-highlight dark:bg-background px-2.5 py-1 rounded">
                    {s.note}
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-14">

                  {/* Left — description, slightly wider for odd items */}
                  <div className={`${i % 2 === 0 ? "lg:w-[45%]" : "lg:w-[40%]"}`}>
                    <h2 className="text-2xl font-bold text-text-primary mb-1.5 group-hover:text-accent transition-colors duration-200">
                      {s.title}
                    </h2>
                    <p className="text-sm font-semibold text-accent mb-5">{s.tagline}</p>
                    <p className="text-[15px] text-text-secondary leading-relaxed">{s.description}</p>
                  </div>

                  {/* Right — feature list, slightly narrower */}
                  <div className={`${i % 2 === 0 ? "lg:w-[55%]" : "lg:w-[60%]"} lg:border-l lg:border-border/50 lg:pl-10`}>
                    <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest mb-4">What&apos;s in scope</p>
                    <div className="space-y-3">
                      {s.features.map((f) => (
                        <div
                          key={f.label}
                          className="group/item flex items-start gap-3 rounded-lg border border-border/50 bg-background/60 dark:bg-background/30 px-4 py-3 transition-all duration-150 hover:border-accent/25 hover:bg-accent-muted/20"
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
          ))}
        </section>

        {/* ─── HONEST FIT SECTION ──────────────────────────────────
            Not for / good for — breaks template feel */}
        <section className="border-t border-border/60 bg-warm-surface dark:bg-surface/20">
          <div className="container-width py-20">
            <div className="mb-12">
              <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-3">Honest assessment</p>
              <h2 className="text-3xl font-bold text-text-primary">
                Who we&apos;re right for.<br />
                <span className="text-text-secondary font-normal text-2xl">And who we&apos;re probably not.</span>
              </h2>
            </div>

            {/* Intentionally not a perfect 2-col grid — asymmetric widths */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="md:w-[45%]">
                <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-5">Good fit</p>
                <ul className="space-y-3">
                  {goodFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="text-emerald-500 mt-0.5 font-bold flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:w-[55%] md:border-l md:border-border/50 md:pl-12">
                <p className="text-xs font-bold text-red-500/70 uppercase tracking-widest mb-5">Probably not a fit</p>
                <ul className="space-y-3">
                  {notFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="text-red-400/70 mt-0.5 font-bold flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-text-tertiary italic mt-6">
                  If you&apos;re unsure which column you&apos;re in — just message us. We&apos;ll tell you honestly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ───────────────────────────────────────────────── */}
        <section className="container-width py-24">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-text-primary mb-3">Not sure which service fits?</h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Tell us what you&apos;re dealing with. We&apos;ll figure out the right starting point — usually something small, low-risk, and fast.
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
                Or review our{" "}
                <Link href="/#pricing" className="underline underline-offset-2 hover:text-accent transition-colors">
                  pricing estimates
                </Link>{" "}
                first if you want numbers before talking.
              </p>
            </div>
          </div>
        </section>

      </main>
    </ParallaxShell>
  );
}
