import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#7C3AED]/90 border-b-2 border-yellow-300 px-6 py-4 flex justify-between items-center shadow-md">
      <div className="font-extrabold text-lg tracking-wider text-yellow-300">
        Daniele Giacomazzi <span className="text-xs font-normal text-purple-100">/ Portfolio V1.0</span>
      </div>
      <nav className="flex items-center gap-6">
        <Link href="/Projects" className="text-sm font-medium hover:text-yellow-200 transition-colors">Progetti</Link>
        <Link href="/About" className="text-sm font-medium hover:text-yellow-200 transition-colors">About & Passions</Link>
        <Link href="/Contact" className="text-sm font-medium hover:text-yellow-200 transition-colors">Contatti</Link>
        
        {/* Pulsante/Icona toggle tema con accento giallo */}
        <div className="w-9 h-9 rounded-full bg-yellow-300 text-purple-950 font-bold flex items-center justify-center text-xs shadow-sm hover:scale-105 transition-transform cursor-pointer">
          🌙
        </div>
      </nav>
    </header>
  );
}