import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col py-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
      
      {/* Header della Pagina */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="px-4 py-1.5 mb-4 text-xs font-bold tracking-wider uppercase bg-[#13032b] text-yellow-300 light:bg-yellow-300 light:text-[#13032b] rounded-full shadow-md">
          Disponibile per collaborazioni
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Mettiamoci in contatto.
        </h1>
        <p className="text-base sm:text-lg opacity-90 max-w-2xl leading-relaxed font-medium">
          Hai un progetto da sviluppare, una collaborazione da proporre o vuoi semplicemente fare due chiacchiere? Inviami un messaggio dal form oppure utilizza uno dei miei recapiti diretti.
        </p>
      </div>

      {/* Griglia a 2 Colonne: Info & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Colonna Sinistra: Recapiti Diretti & Social */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <h2 className="text-2xl font-black tracking-tight mb-2">
            Recapiti Diretti
          </h2>

          <div className="space-y-4">
            {/* Email Card */}
            <a 
              href="mailto:daniele.giacomazzi@example.com" 
              className="flex items-center gap-4 p-4 rounded-2xl border-2 border-current bg-black/5 light:bg-white/5 hover:scale-[1.01] transition-all shadow-md group"
            >
              <div className="w-10 h-10 rounded-xl bg-current/10 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                ✉️
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] sm:text-xs opacity-75 font-bold uppercase tracking-wider">Email</p>
                <p className="text-sm sm:text-base font-black truncate">daniele.giacomazzi@example.com</p>
              </div>
            </a>

            {/* Telefono Card */}
            <a 
              href="tel:+393330000000" 
              className="flex items-center gap-4 p-4 rounded-2xl border-2 border-current bg-black/5 light:bg-white/5 hover:scale-[1.01] transition-all shadow-md group"
            >
              <div className="w-10 h-10 rounded-xl bg-current/10 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                📞
              </div>
              <div>
                <p className="text-[10px] sm:text-xs opacity-75 font-bold uppercase tracking-wider">Telefono</p>
                <p className="text-sm sm:text-base font-black">+39 333 000 0000</p>
              </div>
            </a>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 py-3.5 px-4 text-center rounded-xl border-2 border-current font-bold text-sm bg-black/5 light:bg-white/5 hover:scale-[1.02] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.3.5-2.07 1.62-2.07 1.07 0 1.5.76 1.5 2.07v4.93h2.82M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 py-3.5 px-4 text-center rounded-xl border-2 border-current font-bold text-sm bg-black/5 light:bg-white/5 hover:scale-[1.02] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
          </div>
        </div>

        {/* Colonna Destra: Componente Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>

    </main>
  );
}