export default function Footer() {
  return (
    <footer className="border-t border-border mt-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-sm text-text-secondary">
        {/* Left */}
        <div className="space-y-1">
          <p className="text-text-primary font-medium">
            © {new Date().getFullYear()} Syncrate.
          </p>
          <p className="text-text-tertiary">
            Quietly building useful things.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-wrap gap-6 md:justify-end font-medium">
          <a
            href="/services"
            className="hover:text-text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="/about"
            className="hover:text-text-primary transition-colors"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-text-primary transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
