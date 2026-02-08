export default function Home() {
  return (
    <main className="min-h-[calc(100vh-60px)] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-screen h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto px-6 py-32 text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full tracking-widest uppercase">
                Syncrate Studio
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight text-white">
              Ideas into<br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Reality
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We build beautiful websites, intelligent AI systems, and seamless automation. Everything works together perfectly.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="/contact"
              className="group relative px-8 py-3 font-semibold text-white overflow-hidden rounded-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                Get Started
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>
            <a
              href="/services"
              className="px-8 py-3 border border-slate-700 hover:border-blue-500 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
          <div className="group p-6 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/50">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold text-white mb-2">Modern Web Design</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Stunning websites built with cutting-edge technology and timeless design principles.</p>
          </div>

          <div className="group p-6 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/50">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">AI Solutions</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Intelligent systems that learn, adapt, and scale with your business needs.</p>
          </div>

          <div className="group p-6 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/50">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-bold text-white mb-2">Smart Automation</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Streamline workflows and eliminate manual tasks with intelligent automation.</p>
          </div>
        </div>

        {/* Trust Section */}
        <div className="max-w-5xl mx-auto px-6 py-20 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Trusted by innovative teams
            </h2>
            <p className="text-slate-400 text-lg">
              Building digital products that drive real results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-800/20 rounded-lg border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-slate-400 text-sm">Projects Delivered</div>
            </div>
            <div className="p-6 bg-slate-800/20 rounded-lg border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">99%</div>
              <div className="text-slate-400 text-sm">Client Satisfaction</div>
            </div>
            <div className="p-6 bg-slate-800/20 rounded-lg border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">24h</div>
              <div className="text-slate-400 text-sm">Average Response</div>
            </div>
            <div className="p-6 bg-slate-800/20 rounded-lg border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-slate-400 text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="max-w-3xl mx-auto px-6 py-20 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-white">Ready to start?</h2>
            <p className="text-lg text-slate-400">Let's discuss your project and create something amazing together.</p>
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
