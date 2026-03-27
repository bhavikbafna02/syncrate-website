import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Left: Brand */}
          <div className="max-w-xs space-y-3">
            <p className="text-text-primary font-bold text-base tracking-tight">Syncrate</p>
            <p className="text-text-tertiary text-sm leading-relaxed">
              A small studio building software that actually holds up. Websites, AI, automations done right.
            </p>
            <p className="text-text-tertiary text-xs">
              © {new Date().getFullYear()} Syncrate. All rights reserved.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-10 text-sm font-medium text-text-secondary">
            <div className="space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-widest text-text-tertiary">Work</p>
              <ul className="space-y-2">
                <li><Link href="/services" className="hover:text-text-primary transition-colors">Services</Link></li>
                <li><Link href="/audit" className="hover:text-text-primary transition-colors text-accent">Free Audit</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-widest text-text-tertiary">Company</p>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-text-primary transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
