
import ParallaxShell from "@/components/ParallaxShell";

export default function ServicesPage() {
  const services = [
    {
      title: "Websites",
      description: "Clean, fast, modern websites designed for clarity and conversion.",
      icon: "🌐",
      features: ["Responsive Design", "Fast Performance", "SEO Optimized", "Modern Tech Stack"]
    },
    {
      title: "AI Systems",
      description: "Practical AI assistants and knowledge tools that actually help teams.",
      icon: "🤖",
      features: ["Custom Chatbots", "Knowledge Bases", "Process Automation", "Data Integration"]
    },
    {
      title: "Automation",
      description: "Workflow systems that remove repetitive work and reduce operational friction.",
      icon: "⚙️",
      features: ["Workflow Design", "Integration", "Process Optimization", "Scalable Solutions"]
    }
  ];

  return (
    <ParallaxShell>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container-width pt-28 pb-12 md:pt-32 md:pb-14">
          <div className="space-y-6 animate-slide-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium tracking-widest text-text-secondary uppercase">
              Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight">
              Three ways we can help
              <br />
              you ship.
            </h1>

            <p className="max-w-2xl text-lg text-text-secondary leading-relaxed">
              We focus on a small set of services that compound together: interfaces your users love, systems that
              stay fast, and AI that actually earns a place in the workflow.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container-width pb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article
                key={index}
                className="bg-surface flex flex-col rounded-xl border border-border p-6 hover:border-accent/50 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 text-3xl opacity-80 grayscale">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-2">{service.title}</h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-8">{service.description}</p>

                <div className="mt-auto space-y-4 pt-4 border-t border-border">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest">
                    Start with
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs font-medium text-text-tertiary flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-accent/60 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="container-width pb-20 space-y-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-text-primary mb-4">What it feels like</h2>
            <p className="text-text-secondary text-lg">
              A simple, repeatable cadence — no mystery, no disappearing acts. You always know what&apos;s next.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: "Discovery",
                copy: "We get a precise sense of where you are today, and what 'better' looks like in 3–6 months.",
              },
              {
                label: "Shaping",
                copy: "We carve the work into sharp, shippable chunks that can ship independently.",
              },
              {
                label: "Delivery",
                copy: "We build in weekly cycles with clear artifacts: demos, notes, and code.",
              },
              {
                label: "Aftercare",
                copy: "We stay close after launch to tighten loose screws and line up the next improvements.",
              },
            ].map((step, index) => (
              <div key={step.label} className="relative pl-8 border-l border-border">
                <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-accent" />
                <h3 className="text-base font-bold text-text-primary mb-2">{step.label}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container-width pb-24 text-center border-t border-border pt-20">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary">
              Not sure which service you need?
            </h2>
            <p className="text-lg text-text-secondary">
              Share the situation you&apos;re in, and we&apos;ll suggest a simple way to start — often a small, low-risk first project.
            </p>
          </div>
          <div className="mt-8">
            <a href="/contact" className="btn-secondary px-8">
              Describe your situation
            </a>
          </div>
        </section>
      </main>
    </ParallaxShell>
  );
}
