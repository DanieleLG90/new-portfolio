"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Chiude automaticamente il menu se l'utente scorre la pagina
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Pulsante Hamburger */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="p-2 rounded-lg text-current hover:bg-black/5 light:hover:bg-white/10 transition-colors focus:outline-none relative z-[70]"
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            // Icona "X" (Chiusura)
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.293 5.293a1 1 0 011.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 011.414-1.414L12 10.586l6.293-6.293z"
            />
          ) : (
            // Icona Hamburger (3 righe)
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
            />
          )}
        </svg>
      </button>

      {/* Overlay Menu Mobile a tutta larghezza (fixed) */}
      {isOpen && (
        <div className="fixed top-20 left-0 w-full z-[60] text-center bg-yellow-300 text-[#13032b] light:bg-[#13032b] light:text-yellow-300 border-b border-purple-900/20 light:border-yellow-300/20 shadow-xl flex flex-col p-6 space-y-4 font-bold text-lg animate-in slide-in-from-top-2 duration-200">
          <Link href="#projects" onClick={closeMenu} className="border-b-2 border-[#7C3AED] hover:opacity-75 transition-opacity py-2">
            Projects
          </Link>
          <Link href="#about" onClick={closeMenu} className="border-b-2 border-[#7C3AED] hover:opacity-75 transition-opacity py-2">
            About
          </Link>
          <Link href="#contact" onClick={closeMenu} className="border-b-2 border-[#7C3AED] hover:opacity-75 transition-opacity py-2">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}