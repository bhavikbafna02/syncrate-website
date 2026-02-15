import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import { ModeToggle } from "@/components/mode-toggle";

export default async function Navbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const username = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Dashboard';

  return (
    <nav className="sticky top-0 z-50 bg-background/95 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo_light.svg?v=2"
            alt="SYNCRATE"
            width={140}
            height={48}
            priority
            className="h-12 w-auto block dark:hidden"
          />
          <Image
            src="/logo.svg?v=2"
            alt="SYNCRATE"
            width={140}
            height={48}
            priority
            className="h-12 w-auto hidden dark:block"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 text-sm font-medium items-center">
          <Link
            href="/services"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            About
          </Link>
          <div className="flex gap-4 items-center pl-4 border-l border-border">
            <Link
              href="/contact"
              className="text-text-secondary hover:text-text-primary transition-colors mr-2"
            >
              Contact
            </Link>
            <ModeToggle />

            {user ? (
              <Link
                href="/dashboard"
                className="btn-secondary truncate max-w-[200px]"
              >
                {username}
              </Link>
            ) : (
              <Link
                href="/login"
                className="btn-primary"
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
