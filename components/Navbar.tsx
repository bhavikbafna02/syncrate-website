import Link from "next/link";
import Image from "next/image";

import { createClient } from "@/utils/supabase/server";

export default async function Navbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const username = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Dashboard';

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.svg"
            alt="SYNCRATE"
            width={250}
            height={100}
            priority
            className="h-16 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 text-sm font-medium items-center">
          <Link
            href="/services"
            className="text-slate-400 hover:text-white transition-colors relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="/about"
            className="text-slate-400 hover:text-white transition-colors relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <div className="flex gap-4 items-center">
            <Link
              href="/contact"
              className="text-slate-400 hover:text-white transition-colors relative group mr-2"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300" />
            </Link>
            {user ? (
              <Link
                href="/dashboard"
                className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 backdrop-blur-sm border border-white/10 shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_25px_rgba(0,102,255,0.5)] truncate max-w-[200px]"
              >
                {username}
              </Link>
            ) : (
              <Link
                href="/login"
                className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 backdrop-blur-sm border border-white/10 shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_25px_rgba(0,102,255,0.5)]"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
