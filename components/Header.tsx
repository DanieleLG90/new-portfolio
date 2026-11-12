"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";

export default function Header() {
  return (
    <header className="w-full border-b transition-colors duration-300
      
      bg-yellow-300 text-[#13032b] border-purple-900/30
      /* LIGHT MODE: Sfondo Viola Scuro, Testo Giallo */
      light:bg-[#13032b] light:text-yellow-300 light:border-yellow-300/30"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo con Icona Mascotte Line-Art */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 font-extrabold text-xl tracking-wider uppercase hover:opacity-80 transition-opacity"
        >
          <img 
            src="/avatar-icona/avatar-icon.svg" 
            alt="DLG Mascot Icon" 
            className="w-20 h-20 object-contain drop-shadow-[0_0_1px_currentColor] light:invert"
          />
        </Link>

        {/* Navigazione Desktop (Nascosta su mobile) */}
        <nav className="hidden md:flex items-center gap-6 font-semibold">
          <Link 
            href="#projects" 
            className="hover:opacity-80 transition-opacity"
          >
            Projects
          </Link>

          <Link 
            href="#about" 
            className="hover:opacity-80 transition-opacity"
          >
            About
          </Link>

          <Link 
            href="#contact" 
            className="hover:opacity-80 transition-opacity"
          >
            Contact
          </Link>

          <ThemeToggle />
        </nav>

        {/* Sezione Mobile: Toggle Tema + Hamburger Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>

      </div>
    </header>
  );
}