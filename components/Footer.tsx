export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-sm text-gray-500">
        
        {/* Left */}
        <p>
          © {new Date().getFullYear()} Syncrate. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6">
          <a href="/services" className="hover:text-black">
            Services
          </a>
          <a href="/about" className="hover:text-black">
            About
          </a>
          <a href="/contact" className="hover:text-black">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}
