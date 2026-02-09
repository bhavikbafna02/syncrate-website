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
    <ParallaxShell strength={0.17}>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 pt-28 pb-10 md:pt-32 md:pb-14">
          <div className="space-y-6 slide-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">
              Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
              Three ways we can help you ship
            </h1>

            <p className="max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed">
              We focus on a small set of services that compound together: interfaces your users love, systems that
              stay fast, and AI that actually earns a place in the workflow.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-6xl mx-auto px-6 pb-16 md:pb-20">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <article
                key={index}
                className="glass card-hover group flex flex-col rounded-2xl border border-slate-700/70 p-6"
              >
                <div className="mb-4 text-3xl group-hover:scale-110 transition-transform duration-300 inline-block">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-5">{service.description}</p>

                <div className="mt-auto space-y-3 pt-4 border-t border-slate-700/80">
                  <p className="text-[11px] font-semibold text-blue-300 uppercase tracking-[0.18em]">
                    Typical ingredients
                  </p>
                  <ul className="space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
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
        <section className="max-w-5xl mx-auto px-6 pb-16 md:pb-20 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">What working together feels like</h2>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-300">
              A simple, repeatable cadence — no mystery, no disappearing acts. You always know what&apos;s next.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                label: "Discovery",
                copy: "We get a precise sense of where you are today, and what 'better' looks like in 3–6 months.",
              },
              {
                label: "Shaping",
                copy: "We carve the work into sharp, shippable chunks that can ship independently and provide value early.",
              },
              {
                label: "Delivery",
                copy: "We build in weekly cycles with clear artifacts: demos, notes, and implementation details you can keep.",
              },
              {
                label: "Aftercare",
                copy: "We stay close after launch to tighten any loose screws and line up the next set of improvements.",
              },
            ].map((step, index) => (
              <div key={step.label} className="flex gap-5 items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-500/40 bg-slate-950/80 text-sm font-semibold text-blue-200">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-white mb-1.5">{step.label}</h3>
                  <p className="text-sm text-slate-300">{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Not sure which service you need?
            </h2>
            <p className="text-base md:text-lg text-slate-300">
              Share the situation you&apos;re in, and we&apos;ll suggest a simple way to start — often a small, low-risk
              first project.
            </p>
          </div>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-blue-400/60 bg-slate-950/80 px-8 py-3 text-sm font-semibold text-blue-100 shadow-[0_0_40px_rgba(59,130,246,0.45)] transition-all hover:border-blue-300 hover:text-white"
          >
            Describe your situation
          </a>
        </section>
      </main>
    </ParallaxShell>
  );
}

