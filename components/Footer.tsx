import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-current/20 pt-8 pb-6 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        {/* Colonna 1: Barra di navigazione stile Header */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 font-bold text-sm">
          <Link href="/" className="hover:opacity-75 transition-opacity">
            Home
          </Link>
          <Link href="Projects" className="hover:opacity-75 transition-opacity">
            Projects
          </Link>
          <Link href="About" className="hover:opacity-75 transition-opacity">
            About
          </Link>
          <Link href="Contact" className="hover:opacity-75 transition-opacity">
            Contact
          </Link>
        </nav>

        {/* Colonna 2: Frase d'impatto e link alla pagina/sezione contatti */}
        <div className="flex flex-col items-center">
          <p className="text-sm sm:text-base font-bold mb-2">
            Mettiamoci in contatto
          </p>
          <a 
            href="mailto:daniele.giacomazzi@example.com" 
            className="text-xs sm:text-sm font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity"
          >
            Invia una mail &rarr;
          </a>
        </div>

        {/* Colonna 3: Social Links (LinkedIn & GitHub) */}
        <div className="flex justify-center md:justify-end gap-6 font-bold text-sm">
          <Link 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-75 transition-opacity"
          >
            LinkedIn
          </Link>
          <Link 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-75 transition-opacity"
          >
            GitHub
          </Link>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="mt-8 pt-6 border-t border-current/10 text-center text-xs opacity-75 font-medium">
        © 2026 Daniele Lorenzo Giacomazzi. All rights reserved.
      </div>
    </footer>
  );
}