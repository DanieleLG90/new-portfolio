"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="w-full border-b transition-colors duration-300
      /* DARK MODE (Default): Sfondo Giallo Pieno, Testo Viola Scuro */
      bg-yellow-300 text-[#13032b] border-purple-900/30
      /* LIGHT MODE: Sfondo Viola Scuro, Testo Giallo */
      light:bg-[#13032b] light:text-yellow-300 light:border-yellow-300/30"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link 
          href="/" 
          className="font-extrabold text-xl tracking-wider uppercase hover:opacity-80 transition-opacity"
        >
          DLG <span className="opacity-70">/</span> Dev
        </Link>

        <nav className="flex items-center gap-6 font-semibold">
          <Link 
            href="Projects" 
            className="hover:opacity-80 transition-opacity"
          >
            Projects
          </Link>

          <Link 
            href="About" 
            className="hover:opacity-80 transition-opacity"
          >
            About
          </Link>

          <Link 
            href="Contact" 
            className="hover:opacity-80 transition-opacity"
          >
            Contact
          </Link>

          <ThemeToggle />
        </nav>

      </div>
    </header>
  );
}