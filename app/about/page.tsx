
import ParallaxShell from "@/components/ParallaxShell";

export default function AboutPage() {
  return (
    <ParallaxShell>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container-width pt-28 pb-12 md:pt-32 md:pb-14">
          <div className="space-y-6 animate-slide-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium tracking-widest text-text-secondary uppercase">
              About Us
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight">
              A studio with a longer
              <br />
              attention span.
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              We&apos;re developers and designers who prefer sitting close to the work: real problems, long-term
              relationships, and products that evolve rather than being rebuilt every year.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="container-width pb-20 space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary">How we think</h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                We say no to a lot of things so we can say yes properly to a few. Fewer parallel
                projects, more direct access, and room to think instead of just react.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: "🎯",
                  title: "Clear targets",
                  desc: "Every engagement has a small set of outcomes we can point to and say, 'that got better.'"
                },
                {
                  icon: "🔧",
                  title: "Deliberate engineering",
                  desc: "We pick stacks and patterns that your team can live with in two, three, five years."
                },
                {
                  icon: "🧭",
                  title: "Honest guidance",
                  desc: "We'll happily talk you out of work that doesn't serve the product, even if it's work we could bill."
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

          <div className="bg-surface rounded-2xl border border-border p-8 md:p-12">
            <h2 className="text-2xl font-bold text-text-primary mb-8">What matters to us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Simplicity that ages well",
                  desc: "Complex systems impress in a demo and then quietly rot. We aim for designs someone new on your team can understand in an afternoon."
                },
                {
                  title: "Design that fades away",
                  desc: "The best interfaces feel obvious. We'd rather your users talk about how much lighter their workload feels than our visual flourishes."
                },
                {
                  title: "Shared ownership",
                  desc: "We try hard to feel like part of your team, not a vendor. Clear docs, transparent decisions, and calm communication."
                }
              ].map(item => (
                <div key={item.title} className="space-y-3">
                  <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container-width pb-24 text-center">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary">
              Want a team that sticks around?
            </h2>
            <p className="text-lg text-text-secondary">
              If you&apos;re looking for a long-term product partner rather than a one-off build, we&apos;re probably a good fit.
            </p>
          </div>
          <div className="mt-8">
            <a href="/contact" className="btn-primary px-8">
              Talk about your roadmap
            </a>
          </div>
        </section>
      </main>
    </ParallaxShell>
  );
}
