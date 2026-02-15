
import ParallaxShell from "@/components/ParallaxShell";

export default function Home() {
  return (
    <ParallaxShell>
      <main className="min-h-[calc(100vh-60px)] flex flex-col justify-center">
        {/* Hero Section */}
        <section className="container-width pt-32 pb-20 md:pb-32 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium tracking-wider text-text-secondary uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Syncrate Studio
            </div>

            <div className="space-y-6">
              <h1 className="text-left text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-text-primary">
                Calm technology
                <br />
                for noisy
                <span className="text-accent"> problems.</span>
              </h1>
              <p className="max-w-xl text-left text-lg text-text-secondary leading-relaxed">
                We design and build opinionated websites, AI systems, and automations that feel crafted.
                Fewer buzzwords, more clarity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-slate-800 dark:bg-[#5B6CFF] dark:hover:bg-[#4C5BE0]">
                Start a conversation
              </a>

              <a href="/services" className="btn-secondary">
                See our work
              </a>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Product Strategy", "Engineering", "Design Systems"].map((tag) => (
                <div key={tag} className="px-3 py-1 rounded-md bg-surface border border-border text-xs text-text-secondary font-medium">
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual - Minimal Cards */}
          <div className="relative hidden md:block">
            <div className="relative mx-auto w-full max-w-sm rounded-2xl border border-border bg-surface/50 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-text-primary uppercase tracking-wider">Active Projects</span>
                </div>
                <span className="text-[10px] font-mono text-text-tertiary">SYNC-001</span>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Dashboard Redesign", status: "In Progress", meta: "B2B SaaS" },
                  { title: "AI Knowledge Base", status: "Review", meta: "Internal Tool" },
                  { title: "Marketing Site", status: "Shipped", meta: "Fintech" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border bg-background/50">
                    <div>
                      <h4 className="text-sm font-medium text-text-primary">{item.title}</h4>
                      <p className="text-[11px] text-text-tertiary">{item.meta}</p>
                    </div>
                    <span className="text-[10px] font-medium text-text-secondary bg-surface-highlight px-2 py-0.5 rounded">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Minimal Grid */}
        <section className="container-width py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Capabilities</h2>
            <p className="text-3xl font-bold text-text-primary">Design. Build. Ship.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Interfaces",
                desc: "Fast, accessible, and beautiful web experiences.",
                items: ["Design Systems", "Web Applications", "Marketing Sites"]
              },
              {
                title: "Intelligence",
                desc: "AI that actually solves problems, not just demos.",
                items: ["RAG Systems", "Custom Assistants", "Data Analysis"]
              },
              {
                title: "Systems",
                desc: "Robust backends and automations that scale.",
                items: ["API Integration", "Workflow Automation", "Database Design"]
              }
            ].map((feature) => (
              <div key={feature.title} className="p-6 rounded-xl bg-surface border border-border hover:border-accent/50 transition-colors">
                <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.items.map(item => (
                    <li key={item} className="text-xs font-medium text-text-tertiary flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent/50"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="container-width py-24 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to build something real?</h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-8">
            We work with founders who value craft and clarity. Send us a note about your project.
          </p>
          <a href="/contact" className="btn-primary px-8">
            Get in touch
          </a>
        </section>
      </main>
    </ParallaxShell>
  );
}
