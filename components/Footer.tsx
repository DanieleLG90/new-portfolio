

export default function Footer() {
  return (
    <footer id="contact" className="border-t-2 border-yellow-300 py-12 px-6 bg-purple-950/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Info / Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-black text-yellow-300 tracking-tight">
            Daniele Giacomazzi
          </h3>
          <p className="text-purple-200 text-sm mt-1">
            Junior Front-End Developer • Partita IVA • Basato tra Tortona e Seveso
          </p>
        </div>

        {/* Link rapidi / Social */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <a 
            href="mailto:tua-email@example.com" 
            className="text-yellow-300 hover:text-yellow-200 transition-colors underline decoration-yellow-300/40 underline-offset-4"
          >
            Email diretta
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple-200 hover:text-yellow-300 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple-200 hover:text-yellow-300 transition-colors"
          >
            LinkedIn
          </a>
        </div>

      </div>

      {/* Copyright e nota di chiusura */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-purple-900/60 text-center text-xs text-purple-300">
        © 2026 Daniele Giacomazzi • Sviluppato con Next.js (App Router), TypeScript & Tailwind CSS
      </div>
    </footer>
  );
}