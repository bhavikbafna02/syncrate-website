import ParallaxShell from "@/components/ParallaxShell";

export default function Home() {
  return (
    <ParallaxShell>
      <main className="min-h-[calc(100vh-60px)] flex flex-col justify-center">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pb-24 grid md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-12 items-center">
          <div className="space-y-8 slide-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              Syncrate Studio
            </div>

            <div className="space-y-4">
              <h1 className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white">
                Calm technology
                <br />
                for noisy
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  {" "}
                  problems
                </span>
              </h1>
              <p className="max-w-xl text-left text-base md:text-lg text-slate-300 leading-relaxed">
                We design and build opinionated websites, AI products, and automations that feel crafted
                — not generic. Fewer buzzwords, more results your team can actually feel.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3 text-sm font-semibold text-white"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-[-1px] -z-10 bg-gradient-to-r from-blue-400/40 via-cyan-400/40 to-indigo-400/40 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-[13px] md:text-[14px] tracking-tight leading-none drop-shadow-[0_0_8px_rgba(0,0,0,0.55)]">
                  Tell us about your project
                </span>
                <svg
                  className="relative h-4 w-4 -translate-x-1 opacity-80 transition-all group-hover:translate-x-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h13m0 0-5-5m5 5-5 5"
                  />
                </svg>
              </a>

              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/40 px-7 py-3 text-sm font-semibold text-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.8)] transition-all hover:border-cyan-400/60 hover:bg-slate-900/80 hover:text-white"
              >
                See how we work
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 text-xs text-slate-400">
              <div className="flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Product-minded strategy
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Small, senior team
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                From idea to launch
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="float glass card-hover relative mx-auto h-[320px] w-full max-w-sm rounded-3xl border border-slate-700/70 bg-slate-900/80 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.9)]">
              <div className="flex items-center justify-between text-[11px] font-medium text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400/90" />
                  Live projects
                </span>
                <span className="rounded-full bg-slate-800/90 px-2 py-0.5 text-[10px] uppercase tracking-widest text-slate-300">
                  Syncrate
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between rounded-2xl bg-slate-900/90 px-4 py-3 border border-slate-700/70">
                  <div>
                    <p className="text-xs font-medium text-slate-400">Website redesign</p>
                    <p className="text-sm font-semibold text-slate-50">B2B SaaS, Berlin</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                    In flight
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-3">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400">Launches</p>
                    <p className="mt-1 text-xl font-semibold text-slate-50">12</p>
                    <p className="text-[11px] text-emerald-300">this year</p>
                  </div>
                  <div className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-3">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400">Time to ship</p>
                    <p className="mt-1 text-xl font-semibold text-slate-50">6w</p>
                    <p className="text-[11px] text-cyan-300">avg project</p>
                  </div>
                  <div className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-3">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400">Clients</p>
                    <p className="mt-1 text-xl font-semibold text-slate-50">92%</p>
                    <p className="text-[11px] text-indigo-300">repeat</p>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between rounded-2xl border border-slate-700/70 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900/80 px-4 py-3">
                  <div className="space-y-0.5">
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                      Signal over noise
                    </p>
                    <p className="text-sm text-slate-200">
                      A small studio, working on a few things at a time.
                    </p>
                  </div>
                  <span className="h-10 w-10 rounded-2xl border border-cyan-400/50 bg-slate-950/80 shadow-[0_0_35px_rgba(34,211,238,0.45)]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto px-6 pb-16 md:pb-24">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                What we actually do
              </p>
              <h2 className="mt-1 text-2xl md:text-3xl font-semibold text-slate-50">
                A studio for shipping real products
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-400">
              Not a marketplace, not an agency-of-agencies. You work directly with the people designing and
              building your product.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-hover glass relative overflow-hidden rounded-2xl border border-slate-700/70 p-6">
              <div className="mb-4 text-2xl">Interfaces</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-50">Web & product design</h3>
              <p className="mb-4 text-sm text-slate-400">
                Carefully structured pages, fast-loading experiences, and content that sounds like you — not a
                template.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>• Marketing sites & product pages</li>
                <li>• Dashboards & internal tools</li>
                <li>• Brand-tuned design systems</li>
              </ul>
            </div>

            <div className="card-hover glass relative overflow-hidden rounded-2xl border border-slate-700/70 p-6">
              <div className="mb-4 text-2xl">Intelligence</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-50">AI that earns its place</h3>
              <p className="mb-4 text-sm text-slate-400">
                Assistants, copilots, and knowledge tools that genuinely reduce cognitive load for your team.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>• Research & knowledge retrieval</li>
                <li>• Workflow copilots</li>
                <li>• Evaluation & safety loops</li>
              </ul>
            </div>

            <div className="card-hover glass relative overflow-hidden rounded-2xl border border-slate-700/70 p-6">
              <div className="mb-4 text-2xl">Systems</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-50">Automation that you trust</h3>
              <p className="mb-4 text-sm text-slate-400">
                Glue between tools that&apos;s observable, debuggable, and designed to survive real-world change.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>• Event-driven workflows</li>
                <li>• Integrations & APIs</li>
                <li>• Monitoring & alerting baked in</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
          <div className="glass card-hover relative overflow-hidden rounded-3xl border border-slate-700/70 px-6 py-10 md:px-10 md:py-12">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Quietly compounding work
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
                  Long-term partners over one-off handoffs
                </h2>
                <p className="text-sm md:text-base text-slate-300">
                  Most of our work is with teams we&apos;ve collaborated with for years. We ship small, sharp
                  improvements on a rhythm — launches, not lorem ipsum.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-4">
                  <p className="text-xs text-slate-400">Repeat collaborations</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-50">90%+</p>
                  <p className="mt-1 text-xs text-emerald-300">of projects lead to another</p>
                </div>
                <div className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-4">
                  <p className="text-xs text-slate-400">Timezone overlap</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-50">4–8h</p>
                  <p className="mt-1 text-xs text-cyan-300">across EU / US clients</p>
                </div>
                <div className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-4">
                  <p className="text-xs text-slate-400">Delivery rhythm</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-50">Weekly</p>
                  <p className="mt-1 text-xs text-indigo-300">demo, feedback, adjust</p>
                </div>
                <div className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-4">
                  <p className="text-xs text-slate-400">Open slots</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-50">1–2</p>
                  <p className="mt-1 text-xs text-slate-400">per quarter</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Have a specific problem in mind?
            </h2>
            <p className="text-base md:text-lg text-slate-300">
              Send us one paragraph about what you&apos;re trying to ship. We&apos;ll reply with a clear,
              no-fluff plan of attack.
            </p>
          </div>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-cyan-400/60 bg-slate-950/80 px-8 py-3 text-sm font-semibold text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.45)] transition-all hover:border-cyan-300 hover:text-white"
          >
            Start a conversation
          </a>
        </section>
      </main>
    </ParallaxShell>
  );
}

