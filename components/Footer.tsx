export default function Footer() {
  return (
    <footer className="w-full border-t transition-colors duration-300 py-10
      /* DARK MODE (Default): Sfondo Giallo Pieno, Testo Viola Scuro */
      bg-yellow-300 text-[#13032B] border-purple-900/30
      /* LIGHT MODE: Sfondo Viola Scuro, Testo Giallo */
      light:bg-[#13032B] light:text-yellow-300 light:border-yellow-300/30"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 font-medium text-sm">
        <p>© 2026 Daniele Lorenzo Giacomazzi. All rights reserved.</p>
        
        <div className="flex items-center gap-6 font-bold">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:underline">GitHub ↗</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn ↗</a>
        </div>
      </div>
    </footer>
  );
}