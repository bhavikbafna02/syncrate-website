import Link from "next/link";

import { createClient } from "@/utils/supabase/server";
import NavActions from "@/components/NavActions";

export default async function Navbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const username = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Dashboard';

  return (
    <nav className="sticky top-0 z-50 bg-background/95 border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <span className="font-bold text-xl tracking-tighter text-text-primary">
            SYNCRATE
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 text-sm font-medium items-center">
          <Link
            href="/"
            className="text-text-secondary hover:text-text-primary transition-colors hidden md:block"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-text-secondary hover:text-text-primary transition-colors hidden md:block"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-text-secondary hover:text-text-primary transition-colors hidden md:block"
          >
            About
          </Link>
          <Link
            href="/audit"
            className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors font-semibold hidden md:block"
          >
            Free Audit
          </Link>

          {/* Interactive Actions (Client Component) */}
          <NavActions user={user} username={username} />
        </div>
      </div>
    </nav>
  );
}
