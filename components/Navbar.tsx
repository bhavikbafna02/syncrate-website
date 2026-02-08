import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
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
            width={260}
            height={65}
            priority
            className="h-16 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-10 text-sm font-medium">
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
          <Link 
            href="/contact" 
            className="text-slate-400 hover:text-white transition-colors relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
