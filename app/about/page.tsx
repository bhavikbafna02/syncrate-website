
import ParallaxShell from "@/components/ParallaxShell";

export default function AboutPage() {
  return (
    <ParallaxShell>
      <main className="min-h-screen">
        {/* Hero */}
        <section className="container-width pt-28 pb-12 md:pt-32 md:pb-14">
          <div className="space-y-6 animate-slide-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium tracking-widest text-text-secondary uppercase">
              About
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight">
              A studio with a longer
              <br />
              attention span.
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Developers and designers who stick close to the work — real problems, long-term relationships, products that evolve.
            </p>
          </div>
        </section>

        {/* How we think */}
        <section className="container-width pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">How we think</h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Fewer projects, more focus. Direct access, room to think.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: "🎯",
                  title: "Clear targets",
                  desc: "Every engagement has measurable outcomes."
                },
                {
                  icon: "🔧",
                  title: "Deliberate engineering",
                  desc: "Stacks your team can live with for years."
                },
                {
                  icon: "🧭",
                  title: "Honest guidance",
                  desc: "We'll talk you out of work that doesn't serve the product."
                }
              ].map(item => (
                <div key={item.title} className="bg-surface p-5 rounded-xl border border-border hover:border-accent/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="text-xl grayscale opacity-80">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container-width pb-24 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-3">
            Want a team that sticks around?
          </h2>
          <p className="text-lg text-text-secondary max-w-lg mx-auto mb-8">
            Long-term product partner &gt; one-off build.
          </p>
          <a href="/contact" className="btn-primary px-8">
            Let&apos;s talk
          </a>
        </section>
      </main>
    </ParallaxShell>
  );
}
