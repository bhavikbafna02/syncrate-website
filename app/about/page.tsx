import ParallaxShell from "@/components/ParallaxShell";

export default function AboutPage() {
  return (
    <ParallaxShell strength={0.16}>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 pt-28 pb-10 md:pt-32 md:pb-14">
          <div className="space-y-6 slide-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">
              About Syncrate
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              A small studio
              <br />
              with a long attention span
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              We&apos;re developers and designers who like sitting close to the work: real problems, long-term
              relationships, and products that keep getting better instead of being rebuilt every year.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="max-w-4xl mx-auto px-6 pb-16 md:pb-20 space-y-14">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">How we think about work</h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                We say no to a lot of things so we can say yes properly to a few. That means fewer parallel
                projects, more direct access, and room to think instead of just react.
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass card-hover p-5 rounded-2xl border border-slate-700/70">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="text-white font-semibold mb-1.5">Clear targets</h3>
                <p className="text-slate-400 text-sm">
                  Every engagement has a small set of outcomes we can point to and say, &quot;that got better.&quot;
                </p>
              </div>
              <div className="glass card-hover p-5 rounded-2xl border border-slate-700/70">
                <div className="text-2xl mb-2">🔧</div>
                <h3 className="text-white font-semibold mb-1.5">Deliberate engineering</h3>
                <p className="text-slate-400 text-sm">
                  We pick stacks and patterns that your team can live with in two, three, five years.
                </p>
              </div>
              <div className="glass card-hover p-5 rounded-2xl border border-slate-700/70">
                <div className="text-2xl mb-2">🧭</div>
                <h3 className="text-white font-semibold mb-1.5">Honest guidance</h3>
                <p className="text-slate-400 text-sm">
                  We&apos;ll happily talk you out of work that doesn&apos;t serve the product, even if it&apos;s work
                  we could bill.
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl border border-slate-700/70 p-6 md:p-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">What matters to us</h2>
            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-[0.18em]">
                  Simplicity that ages well
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Complex systems impress in a demo and then quietly rot. We aim for designs and architectures that
                  someone new on your team can understand in an afternoon.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-[0.18em]">
                  Design that stays out of the way
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  The best interfaces feel obvious in hindsight. We&apos;d rather your users talk about how much
                  lighter their workload feels than our visual flourishes.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-[0.18em]">
                  Shared ownership
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  We try hard to feel like part of your team, not a vendor. That means clear docs, transparent
                  decisions, and calm communication even when things are moving quickly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Want a team that sticks around?
            </h2>
            <p className="text-base md:text-lg text-slate-300">
              If you&apos;re looking for a long-term product partner rather than a one-off build, we&apos;re probably
              a good fit.
            </p>
          </div>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-indigo-400/60 bg-slate-950/80 px-8 py-3 text-sm font-semibold text-indigo-100 shadow-[0_0_40px_rgba(129,140,248,0.45)] transition-all hover:border-indigo-300 hover:text-white"
          >
            Talk about your roadmap
          </a>
        </section>
      </main>
    </ParallaxShell>
  );
}

