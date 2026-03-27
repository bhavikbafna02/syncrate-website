import Link from "next/link";
import ParallaxShell from "@/components/ParallaxShell";

const services = [
  {
    num: "01",
    icon: "⬡",
    title: "Websites",
    tagline: "Sites people don't immediately close.",
    description:
      "We build web experiences that do the selling for you. Fast, opinionated, conversion-focused. Not another pretty template your competitors are also using.",
    features: [
      { label: "Marketing Sites", note: "Lands clients while you sleep" },
      { label: "Web Applications", note: "Interfaces people actually use" },
      { label: "Design Systems", note: "Consistency at scale" },
      { label: "Performance Audits", note: "Find and fix what's hurting you" },
    ],
    accent: "from-indigo-500/10 to-violet-500/5",
  },
  {
    num: "02",
    icon: "◈",
    title: "AI Systems",
    tagline: "AI that does real work. Not just demos.",
    description:
      "Custom assistants, RAG pipelines, and data tools built around how your team actually operates. Not chatbot wrappers with a lick of paint.",
    features: [
      { label: "Custom Chatbots", note: "Trained on your data, not the internet" },
      { label: "RAG Pipelines", note: "Docs that talk back" },
      { label: "Process Automation", note: "The thing that takes 3 hours each week" },
      { label: "Data Analysis", note: "Insight without the analyst" },
    ],
    accent: "from-blue-500/10 to-cyan-500/5",
  },
  {
    num: "03",
    icon: "◉",
    title: "Automation",
    tagline: "Kill the repetitive stuff. Keep the humans.",
    description:
      "We map your workflows, find the bottlenecks, and build systems that handle the boring bits. Your team keeps the work that actually needs a human.",
    features: [
      { label: "Workflow Design", note: "Start with how things actually work" },
      { label: "API Integration", note: "Make your tools talk to each other" },
      { label: "Process Optimization", note: "Cut the redundant steps out" },
      { label: "Scalable Architecture", note: "Built to not break at 10×" },
    ],
    accent: "from-violet-500/10 to-indigo-500/5",
  },
];

const processSteps = [
  {
    label: "Discovery",
    copy: "We get a precise sense of where you are today, and what 'better' looks like in 3–6 months. No 60-question intake forms.",
  },
  {
    label: "Scoping",
    copy: "We carve the work into sharp, shippable chunks. You get a one-page plan, not a novel.",
  },
  {
    label: "Delivery",
    copy: "Weekly demos. Real code. No radio silence. You see something new every single week.",
  },
  {
    label: "Aftercare",
    copy: "We stay close after launch. Every edge case, every second thought gets handled before it becomes a problem.",
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

            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mb-6">
              We focus on a tight set of services that compound together. Interfaces your users actually want to use. AI that earns its place in the workflow. Systems that hold shape when things get messy.
            </p>

            <p className="text-sm text-text-tertiary italic">
              We don&apos;t do everything. We do these things really well.
            </p>
          </div>
        </section>

        {/* ─── SERVICES DETAILED ────────────────────────────────── */}
        <section className="container-width pb-24 space-y-8">
          {services.map((s, i) => (
            <article
              key={s.num}
              className={`group relative rounded-2xl border border-border bg-gradient-to-br ${s.accent} overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5`}
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-10">

                  {/* Left */}
                  <div className="md:w-2/5">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-xs font-mono font-bold text-text-tertiary">{s.num}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-text-primary mb-1">{s.title}</h2>
                    <p className="text-sm font-semibold text-accent mb-5">{s.tagline}</p>
                    <p className="text-text-secondary text-[15px] leading-relaxed">{s.description}</p>
                  </div>

                  {/* Right: features */}
                  <div className="md:w-3/5 md:border-l md:border-border/50 md:pl-10">
                    <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-5">What&apos;s included</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {s.features.map((f) => (
                        <div key={f.label} className="flex flex-col gap-1 rounded-xl border border-border/60 bg-background/50 px-4 py-3 hover:border-accent/30 transition-colors">
                          <p className="text-sm font-semibold text-text-primary">{f.label}</p>
                          <p className="text-xs text-text-tertiary">{f.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* ─── PROCESS ───────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface/30">
          <div className="container-width py-24">
            <div className="max-w-xl mb-16">
              <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3">How we work</p>
              <h2 className="text-4xl font-bold text-text-primary mb-4">No mystery. No surprises.</h2>
              <p className="text-text-secondary text-lg">
                A simple cadence. You always know what&apos;s next.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={step.label} className="relative pl-8 border-l border-border group">
                  <div className="absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-accent group-hover:scale-125 transition-transform" />
                  <span className="text-[10px] font-mono text-text-tertiary">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-base font-bold text-text-primary mt-1 mb-2">{step.label}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ───────────────────────────────────────────────── */}
        <section className="container-width py-24">
          <div className="rounded-2xl border border-border bg-surface/60 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-text-primary mb-3">Not sure which service fits?</h2>
              <p className="text-text-secondary text-lg">
                Tell us what you&apos;re dealing with. We&apos;ll figure out the right starting point. Usually something small, low-risk, and fast.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-highlight active:scale-[0.98]"
              >
                Describe your situation
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </ParallaxShell>
  );
}
