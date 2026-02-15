import Link from "next/link";
import Image from "next/image";
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
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo_light.svg"
            alt="SYNCRATE"
            width={196}
            height={56}
            priority
            className="h-14 w-auto block [.dark_&]:hidden"
          />
          <Image
            src="/logo.svg"
            alt="SYNCRATE"
            width={196}
            height={56}
            priority
            className="h-14 w-auto hidden [.dark_&]:block"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 text-sm font-medium items-center">
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

          {/* Interactive Actions (Client Component) */}
          <NavActions user={user} username={username} />
        </div>
      </div>
    </nav>
  );
}
