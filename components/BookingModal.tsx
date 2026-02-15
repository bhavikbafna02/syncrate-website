"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Script from "next/script";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Handle ESC key press
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

    // Handle outside click
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    // Use createPortal to render outside the DOM hierarchy (avoid z-idx issues)
    return createPortal(
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
            onClick={handleOverlayClick}
        >
            <div
                ref={modalRef}
                className="relative w-full max-w-4xl bg-surface border border-border rounded-xl shadow-2xl overflow-hidden mx-4 animate-slide-up h-[80vh] flex flex-col"
                role="dialog"
                aria-modal="true"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface-highlight/30">
                    <h2 className="text-lg font-semibold text-text-primary">
                        Schedule a Meeting
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg text-text-tertiary hover:text-text-primary hover:bg-surface-highlight transition-colors"
                        aria-label="Close modal"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Content - Calendly Widget */}
                <div className="flex-1 w-full bg-background relative overflow-hidden">
                    <div
                        className="calendly-inline-widget w-full h-full"
                        data-url="https://calendly.com/syncratetech?hide_gdpr_banner=1&background_color=0f1115&text_color=f8fafc&primary_color=5b6cff"
                        style={{ width: "100%", height: "100%" }}
                    ></div>
                </div>
            </div>

            {/* Load Calendly Script */}
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
            />
        </div>,
        document.body
    );
}
