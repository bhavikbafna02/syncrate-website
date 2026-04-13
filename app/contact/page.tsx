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

      setSuccessMessage("✓ Sent! We'll get back to you soon.");
      form.reset();
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ParallaxShell>
      <main className="min-h-screen">
        {/* Header */}
        <section className="container-width pt-24 pb-12 text-center">
          <div className="space-y-4 animate-slide-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium tracking-widest text-text-secondary uppercase">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
              Tell us what you need
            </h1>
            <p className="text-lg text-text-secondary max-w-md mx-auto">
              No pitch decks. Just tell us what&apos;s stuck.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="container-width pb-20">
          <div className="max-w-2xl mx-auto border border-border bg-surface rounded-xl p-8 shadow-sm">
            {successMessage && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 dark:text-green-400 font-medium text-sm">
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400 font-medium text-sm">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text-primary">Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2 bg-background text-text-primary placeholder-text-tertiary border border-border rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text-primary">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-2 bg-background text-text-primary placeholder-text-tertiary border border-border rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-primary">Company</label>
                <input
                  name="company"
                  type="text"
                  placeholder="Optional"
                  className="w-full px-4 py-2 bg-background text-text-primary placeholder-text-tertiary border border-border rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-primary">
                  What do you need?
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Your product, your problem, what you'd like to change."
                  className="w-full px-4 py-2 bg-background text-text-primary placeholder-text-tertiary border border-border rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 btn-primary text-base ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </button>

              <p className="text-xs text-text-tertiary text-center">We respond within one business day.</p>
            </form>
          </div>
        </section>

        {/* Info */}
        <section className="container-width pb-24 grid md:grid-cols-3 gap-8 text-center border-t border-border pt-12">
          <div>
            <div className="text-2xl mb-2 grayscale">📧</div>
            <h3 className="font-semibold text-text-primary">Email</h3>
            <a
              href="mailto:hello@syncrate.com"
              className="text-text-secondary hover:text-accent transition-colors text-sm"
            >
              hello@syncrate.com
            </a>
          </div>

          <div>
            <div className="text-2xl mb-2 grayscale">💼</div>
            <h3 className="font-semibold text-text-primary">Services</h3>
            <p className="text-text-secondary text-sm">Websites, AI, automation</p>
          </div>

          <div>
            <div className="text-2xl mb-2 grayscale">⏱️</div>
            <h3 className="font-semibold text-text-primary">Response</h3>
            <p className="text-text-secondary text-sm">Within 24h on weekdays</p>
          </div>
        </section>
      </main>
    </ParallaxShell>
  );
}
