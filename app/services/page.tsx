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
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Decorative background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 py-32">
          <div className="space-y-6">
            <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full inline-block tracking-widest uppercase">
              Services
            </span>
            
            <h1 className="text-6xl md:text-6xl font-bold text-white">
              Services that scale with you
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl">
              Three core areas that work together to transform your business through technology.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-blue-500 hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 pt-6 border-t border-slate-700">
                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-4">Features:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-400 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-4xl mx-auto px-6 py-20 space-y-12">
          <h2 className="text-4xl font-bold text-center text-white">How We Work</h2>
          
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Discovery</h3>
                <p className="text-slate-400">We understand your goals, challenges, and vision for the future of your business.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Strategy</h3>
                <p className="text-slate-400">We create a clear, actionable roadmap tailored specifically to your needs.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Execution</h3>
                <p className="text-slate-400">We build your solution with meticulous attention to detail and quality code.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Launch & Support</h3>
                <p className="text-slate-400">We launch with precision and provide ongoing support for continued success.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto px-6 py-20 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Let's discuss your project</h2>
            <p className="text-slate-400 text-lg">Reach out and tell us what you're building.</p>
          </div>
          <a
            href="/contact"
            className="inline-block group relative px-10 py-4 font-semibold text-white overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-300"></div>
            <div className="relative">Contact Us</div>
          </a>
        </div>
      </div>
    </main>
  );
}
