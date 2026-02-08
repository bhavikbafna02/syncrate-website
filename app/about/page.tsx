export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Decorative background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 py-32">
          <div className="space-y-6">
            <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full inline-block tracking-widest uppercase">
              About Syncrate
            </span>
            
            <h1 className="text-6xl md:text-6xl font-bold text-white leading-tight">
              Technology that actually works for you
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              We build websites, AI systems, and automation that are simple, effective, and built to last. Everything works together seamlessly.
            </p>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Our Philosophy</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Simplicity is power. We strip away complexity and build solutions that do exactly what they should—nothing more, nothing less. Every feature, every design choice serves a clear purpose.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-white font-bold mb-2">Purpose-Driven</h3>
                <p className="text-slate-400 text-sm">Every project serves a clear, measurable goal.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700">
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="text-white font-bold mb-2">Built Strong</h3>
                <p className="text-slate-400 text-sm">Quality code and thoughtful architecture matter.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-white font-bold mb-2">Fast Delivery</h3>
                <p className="text-slate-400 text-sm">We respect timelines and deliver quality on time.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-16">
            <h2 className="text-4xl font-bold text-white mb-8">What We Stand For</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-slate-800/20 border border-slate-700">
                <h3 className="text-blue-400 font-bold text-lg mb-3">Simplicity Scales</h3>
                <p className="text-slate-400 leading-relaxed">
                  Complex solutions impress in a demo but become nightmares to maintain. Simple solutions scale because they're easier to understand, maintain, and improve over time.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-slate-800/20 border border-slate-700">
                <h3 className="text-blue-400 font-bold text-lg mb-3">Good Design Disappears</h3>
                <p className="text-slate-400 leading-relaxed">
                  When technology works perfectly, you don't notice it. You just use it and get results. That's the standard we build to—invisible excellence.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-slate-800/20 border border-slate-700">
                <h3 className="text-blue-400 font-bold text-lg mb-3">Your Success is Ours</h3>
                <p className="text-slate-400 leading-relaxed">
                  We don't consider a project done until your business goals are met. We're partners with you in building something that truly matters.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto px-6 py-20 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Let's create together</h2>
            <p className="text-slate-400 text-lg">Tell us about your vision and we'll help bring it to life.</p>
          </div>
          <a
            href="/contact"
            className="inline-block group relative px-10 py-4 font-semibold text-white overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-300"></div>
            <div className="relative">Get in Touch</div>
          </a>
        </div>
      </div>
    </main>
  );
}
