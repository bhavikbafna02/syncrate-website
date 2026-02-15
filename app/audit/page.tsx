"use client";

import { useState } from "react";
import ParallaxShell from "@/components/ParallaxShell";
import { AuditResponse } from "@/utils/auditHelpers";

export default function AuditPage() {
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<AuditResponse | null>(null);
    const [error, setError] = useState("");

    const handleAnalyze = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;

        // Reset state
        setIsLoading(true);
        setResult(null);
        setError("");

        // Basic client-side protocol check
        let targetUrl = url;
        if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
            targetUrl = "https://" + targetUrl;
        }

        try {
            const res = await fetch("/api/audit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: targetUrl }),
            });

            const data = await res.json();

            if (!res.ok) {
                if (data.error) throw new Error(data.error);
                throw new Error("Something went wrong during analysis.");
            }

            setResult(data.data);
        } catch (err: any) {
            setError(err.message || "Failed to analyze website");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ParallaxShell>
            <main className="min-h-screen py-24 md:py-32 px-4 bg-background selection:bg-indigo-500/30">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* Header Section */}
                    <div className="text-center space-y-6 animate-fade-in">
                        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-[11px] font-medium tracking-widest text-indigo-400 uppercase">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                            AI Website Auditor
                        </span>

                        <h1 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
                            Is your website <span className="text-indigo-400">working hard enough?</span>
                        </h1>

                        <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                            Get an instant, AI-powered critique of your landing page's SEO, UX, and conversion potential.
                            No fluff, just actionable insights.
                        </p>
                    </div>

                    {/* Input Section */}
                    <div className="max-w-lg mx-auto w-full">
                        <form onSubmit={handleAnalyze} className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative flex gap-2 p-2 bg-surface border border-border rounded-lg shadow-xl">
                                <input
                                    type="text"
                                    placeholder="enter-your-website.com"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    className="w-full bg-transparent px-4 py-3 text-text-primary placeholder-text-tertiary focus:outline-none"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !url}
                                    className="btn-primary bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition-all focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                                >
                                    {isLoading ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Analyzing...
                                        </span>
                                    ) : "Analyze Website"}
                                </button>
                            </div>
                        </form>

                        {error && (
                            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center text-sm animate-slide-up">
                                {error}
                            </div>
                        )}
                    </div>

                    {/* Results Grid */}
                    {result && (
                        <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
                            <AuditCard
                                title="SEO Analysis"
                                icon="🔍"
                                content={result.seo}
                                delay="0ms"
                            />
                            <AuditCard
                                title="UX & Design"
                                icon="🎨"
                                content={result.ux}
                                delay="100ms"
                            />
                            <AuditCard
                                title="Performance"
                                icon="⚡"
                                content={result.performance}
                                delay="200ms"
                            />
                            <AuditCard
                                title="Conversion Optimization"
                                icon="💰"
                                content={result.conversion}
                                delay="300ms"
                            />
                        </div>
                    )}

                    {/* Final CTA */}
                    {result && (
                        <div className="text-center pt-12 animate-fade-in border-t border-border/50">
                            <h3 className="text-2xl font-bold text-text-primary mb-4">Need help implementing these fixes?</h3>
                            <p className="text-text-secondary mb-8">Let&apos;s turn these insights into revenue. Book a 15-minute strategy call.</p>
                            <a
                                href="https://calendly.com/syncratetech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/25"
                            >
                                Book a Free Strategy Call
                            </a>
                        </div>
                    )}

                </div>
            </main>
        </ParallaxShell>
    );
}

function AuditCard({ title, icon, content, delay }: { title: string, icon: string, content: string, delay: string }) {
    return (
        <div
            className="bg-surface border border-border/60 p-6 rounded-xl hover:border-indigo-500/30 transition-colors shadow-sm"
            style={{ animationDelay: delay }}
        >
            <div className="flex items-center gap-3 mb-4">
                <span className="bg-indigo-500/10 p-2 rounded-lg text-xl">{icon}</span>
                <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                {content}
            </p>
        </div>
    );
}
