"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { type User } from "@supabase/supabase-js";
import BookingModal from "./BookingModal";

interface NavActionsProps {
    user: User | null;
    username: string; // Simplifies server logic passing
}

export default function NavActions({ user, username }: NavActionsProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="flex gap-4 items-center pl-4 border-l border-border h-8">
                {/* Contact Link */}
                <Link
                    href="/contact"
                    className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium hidden md:block mr-2"
                >
                    Contact
                </Link>

                {/* Theme Toggle */}
                <ModeToggle />

                {/* User Auth Button */}
                {user ? (
                    <Link
                        href="/dashboard"
                        className="btn-secondary truncate max-w-[150px] hidden sm:inline-flex h-9"
                    >
                        {username}
                    </Link>
                ) : (
                    <Link href="/login" className="btn-secondary hidden sm:inline-flex h-9">
                        Login
                    </Link>
                )}

                {/* Primary CTA: Book Appointment */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn-primary h-9 whitespace-nowrap ml-2 border border-accent/30 shadow-lg shadow-accent/20"
                >
                    Book Appointment
                </button>
            </div>

            {/* Modal Portal */}
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
