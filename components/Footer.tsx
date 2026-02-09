export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between text-sm text-slate-400">
        {/* Left */}
        <div className="space-y-1">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Syncrate.{" "}
            <span className="text-slate-500">Quietly building useful things.</span>
          </p>
          <p className="text-xs text-slate-500">
            Fewer projects, more care. If we&apos;re fully booked, we&apos;ll say so.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-wrap gap-4 md:justify-end">
          <a
            href="/services"
            className="text-slate-400 hover:text-slate-100 transition-colors"
          >
            Services
          </a>
          <a
            href="/about"
            className="text-slate-400 hover:text-slate-100 transition-colors"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-slate-400 hover:text-slate-100 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
