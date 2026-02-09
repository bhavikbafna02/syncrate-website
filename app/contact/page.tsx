"use client";

import { FormEvent, useState } from "react";
import ParallaxShell from "@/components/ParallaxShell";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
          message: formData.get('message'),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSuccessMessage("✓ Message sent successfully! We'll get back to you soon.");
      form.reset();
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ParallaxShell strength={0.15}>
      <main className="min-h-screen text-white">
        {/* Header */}
        <section className="max-w-2xl mx-auto px-6 pt-24 pb-10 md:pt-28 md:pb-14 text-center">
          <div className="space-y-5 slide-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">
              Get in touch
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Let&apos;s build something specific
            </h1>
            <p className="text-base md:text-lg text-slate-300">
              A short, honest message is perfect. No pitch decks needed — just tell us where you are and what&apos;s
              stuck.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="max-w-2xl mx-auto px-6 pb-16 md:pb-20">
          <div className="glass border border-slate-700/70 backdrop-blur bg-slate-950/70 rounded-2xl p-7 md:p-8 space-y-6">
            {successMessage && (
              <div className="p-4 bg-emerald-900/20 border border-emerald-700/50 rounded-lg text-emerald-300 font-medium text-sm">
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg text-red-300 font-medium text-sm">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 bg-slate-900/70 text-white placeholder-gray-500 border border-slate-700/70 rounded-lg focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/25 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-2.5 bg-slate-900/70 text-white placeholder-gray-500 border border-slate-700/70 rounded-lg focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/25 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">Company</label>
                <input
                  name="company"
                  type="text"
                  placeholder="Your company (optional)"
                  className="w-full px-4 py-2.5 bg-slate-900/70 text-white placeholder-gray-500 border border-slate-700/70 rounded-lg focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/25 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  What would you like to work on?
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="A paragraph about your product, team size, and what you'd like to see change over the next few months."
                  className="w-full px-4 py-2.5 bg-slate-900/70 text-white placeholder-gray-500 border border-slate-700/70 rounded-lg focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/25 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 font-medium rounded-full text-sm transition-all ${
                  isSubmitting
                    ? "bg-slate-700 cursor-not-allowed text-gray-300"
                    : "bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/35"
                }`}
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </button>

              <p className="text-xs text-gray-500 text-center">We usually respond within one business day.</p>
            </form>
          </div>
        </section>

        {/* Info */}
        <section className="max-w-4xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8 text-center border-t border-slate-800/60">
          <div>
            <div className="text-3xl mb-2">📧</div>
            <h3 className="font-semibold text-gray-200">Email</h3>
            <a
              href="mailto:hello@syncrate.com"
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              hello@syncrate.com
            </a>
          </div>

          <div>
            <div className="text-3xl mb-2">💼</div>
            <h3 className="font-semibold text-gray-200">Services</h3>
            <p className="text-gray-500 text-sm">Websites, product UX, AI, automation</p>
          </div>

          <div>
            <div className="text-3xl mb-2">⏱️</div>
            <h3 className="font-semibold text-gray-200">Response time</h3>
            <p className="text-gray-500 text-sm">Within 24 hours on weekdays</p>
          </div>
        </section>
      </main>
    </ParallaxShell>
  );
}

