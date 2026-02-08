'use client';

import { FormEvent, useState } from 'react';

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
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="space-y-6">
          <span className="text-sm font-semibold text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full inline-block">
            Get in touch
          </span>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Let's build something great
          </h1>
          <p className="text-lg text-gray-400">
            Share your vision. We'll bring it to life.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-6 pb-20">
        <div className="border border-slate-700/50 backdrop-blur-sm bg-slate-900/50 rounded-2xl p-8 space-y-6">
          
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
                <label className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 bg-slate-800/50 text-white placeholder-gray-500 border border-slate-700/50 rounded-lg focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 bg-slate-800/50 text-white placeholder-gray-500 border border-slate-700/50 rounded-lg focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Company
              </label>
              <input
                name="company"
                type="text"
                placeholder="Your company (optional)"
                className="w-full px-4 py-2.5 bg-slate-800/50 text-white placeholder-gray-500 border border-slate-700/50 rounded-lg focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-2.5 bg-slate-800/50 text-white placeholder-gray-500 border border-slate-700/50 rounded-lg focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 font-medium rounded-lg transition-all ${
                isSubmitting
                  ? 'bg-slate-600 cursor-not-allowed text-gray-300'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </button>

            <p className="text-xs text-gray-500 text-center">
              We'll respond within 24 hours.
            </p>
          </form>
        </div>
      </div>

      {/* Info */}
      <div className="max-w-4xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8 text-center border-t border-slate-800/50">
        <div>
          <div className="text-3xl mb-2">📧</div>
          <h3 className="font-semibold text-gray-300">Email</h3>
          <a href="mailto:hello@syncrate.com" className="text-blue-400 hover:text-blue-300 transition-colors">
            hello@syncrate.com
          </a>
        </div>

        <div>
          <div className="text-3xl mb-2">💼</div>
          <h3 className="font-semibold text-gray-300">Services</h3>
          <p className="text-gray-500">Websites, AI, Automation</p>
        </div>

        <div>
          <div className="text-3xl mb-2">⏱️</div>
          <h3 className="font-semibold text-gray-300">Response Time</h3>
          <p className="text-gray-500">Within 24 hours</p>
        </div>
      </div>
    </main>
  );
}
