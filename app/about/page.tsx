import ParallaxShell from "@/components/ParallaxShell";

const beliefs = [
  {
    title: "Fewer clients, more attention.",
    desc: "We take 2–3 projects at a time. That's not a policy — it's just how you do good work without dropping the ball on someone.",
  },
  {
    title: "Directness isn't rudeness.",
    desc: "If we think you're going down the wrong path, we'll say so. We'd rather have an uncomfortable conversation early than a messy one three months in.",
  },
  {
    title: "We build stacks you can live with.",
    desc: "Not whatever framework we're excited about this month. We pick boring, proven technology — because boring technology doesn't wake you up at 3am.",
  },
];



export default function AboutPage() {
  return (
    <ParallaxShell>
      <main className="min-h-screen">

        {/* ─── HERO — left-aligned, slightly off-grid ──────────────── */}
        <section className="container-width pt-28 pb-16 md:pt-40 md:pb-20">
          <div className="animate-slide-up max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium tracking-widest text-text-secondary uppercase mb-10">
              About
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-[58px] font-bold text-text-primary leading-tight tracking-tight mb-6">
              A studio with a longer<br />
              attention span.
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-5">
              We&apos;re a small technical team. We stick close to the work, keep the client list short, and try not to build things people don&apos;t need.
            </p>

            <p className="text-sm text-text-tertiary max-w-xl italic">
              Started in 2023. Still figuring some things out — but getting better at the things that matter.
            </p>
          </div>
        </section>

        {/* ─── HOW WE THINK — Staggered vertical list, not grid ─────── */}
        <section className="border-t border-border/60 bg-warm-surface dark:bg-surface/20">
          <div className="container-width py-20">
            <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-20">

              <div className="md:w-1/3 md:sticky md:top-24">
                <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-4">How we think</p>
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  A few things we actually believe.
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Not a values slide deck. Just things that came from building stuff with real clients.
                </p>
              </div>

              <div className="md:w-2/3 space-y-0">
                {beliefs.map((b, i) => (
                  <div
                    key={b.title}
                    className={`py-8 ${i !== beliefs.length - 1 ? "border-b border-border/60" : ""} group`}
                  >
                    <div className="flex items-start gap-5">
                      <span
                        className="text-[10px] font-mono text-text-tertiary mt-1 flex-shrink-0 font-bold"
                        style={{ paddingTop: "3px" }}
                      >
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-150">
                          {b.title}
                        </h3>
                        <p className="text-sm text-text-secondary leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ─── CTA — Intentionally minimal here ────────────────────── */}
        <section className="border-t border-border/60 bg-warm-surface dark:bg-surface/20">
          <div className="container-width py-20">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Want a team that sticks around?
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-7">
                Most of our clients are long-term. That&apos;s not by accident —
                it&apos;s because we try to be genuinely useful, not just deliverable-complete.
              </p>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-highlight hover:shadow-lg hover:shadow-accent/25 active:translate-y-0"
              >
                Let&apos;s talk
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </ParallaxShell>
  );
}
