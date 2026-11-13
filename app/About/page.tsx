import Image from "next/image";

export default function About() {
  const skills = [
    "Next.js App Router",
    "TypeScript",
    "Tailwind CSS",
    "React & React Router",
    "WordPress Headless",
    "Vite & Git Workflows",
    "Responsive Design",
    "UI/UX Visual Aesthetics"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-current/20">
      
      {/* Intestazione Sezione */}
      <div className="flex flex-col items-center md:items-start mb-12">
        <span className="px-3.5 py-1.5 mb-3 text-xs font-bold tracking-wider uppercase bg-[#13032b] text-yellow-300 light:bg-yellow-300 light:text-[#13032b] rounded-full shadow-md">
          Chi Sono
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-center md:text-left">
          Oltre il codice, nella vita vera.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
        
        {/* Colonna Testo (Bio Personale + Professionale) */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center md:text-left space-y-4">
          <p className="text-base sm:text-lg leading-relaxed font-semibold">
            Credo fermamente che le idee migliori non nascano solo davanti a un monitor, ma vivendo le esperienze sul campo.
          </p>
          <p className="text-sm sm:text-base leading-relaxed opacity-90 font-medium">
            Con una formazione in animazione 3D all'IED e anni di studio sul campo web, ho imparato a fondere l'occhio per il design con il rigore del codice moderno. Ma per me lo sviluppo è solo una parte del quadro: la cura per i dettagli, la risoluzione dei problemi e la ricerca dell'estetica mi guidano in tutto ciò che faccio.
          </p>
          <p className="text-sm sm:text-base leading-relaxed opacity-90 font-medium">
            Dalle sfide all'aperto e in montagna, ai progetti manuali e alle avventure in viaggio, amo sperimentare, costruire ed esplorare. Questa curiosità continua si riflette direttamente nel modo in cui creo prodotti digitali: con energia, concretezza e un'attenzione visiva costante.
          </p>
        </div>

        {/* Colonna Foto (Griglia a 3 Immagini) */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 h-full min-h-[360px] sm:min-h-[420px]">
          {/* Immagine 1 (Grande, occupa 2 righe a sinistra) */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-current bg-black/5 light:bg-white/5 shadow-lg group">
            <Image 
              src="/about-1.jpg" 
              alt="Daniele - Vita reale e passioni" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-30 text-xs font-bold uppercase p-2 text-center">
              [ Foto 1 Main ]
            </div>
          </div>

          {/* Colonna destra con 2 foto impilate */}
          <div className="flex flex-col gap-4">
            <div className="relative flex-1 rounded-2xl overflow-hidden border-2 border-current bg-black/5 light:bg-white/5 shadow-lg group">
              <Image 
                src="/about-2.jpg" 
                alt="Daniele outdoor / dettagli" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-30 text-xs font-bold uppercase p-2 text-center">
                [ Foto 2 ]
              </div>
            </div>

            <div className="relative flex-1 rounded-2xl overflow-hidden border-2 border-current bg-black/5 light:bg-white/5 shadow-lg group">
              <Image 
                src="/about-3.jpg" 
                alt="Daniele progetti / viaggio" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-30 text-xs font-bold uppercase p-2 text-center">
                [ Foto 3 ]
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Sezione Tech Stack in Basso */}
      <div className="pt-8 border-t border-current/10 mb-16">
        <h3 className="text-xl sm:text-2xl font-extrabold mb-6 text-center md:text-left">
          Core Tech Stack & Strumenti
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="p-4 rounded-xl border-2 border-current font-bold text-xs sm:text-sm text-center flex items-center justify-center bg-black/5 light:bg-white/5 shadow-md transition-all hover:scale-[1.02]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Sezione Oltre lo schermo: Passioni & Manualità */}
      <div className="border-t-2 border-current/20 pt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
          Oltre lo schermo: Passioni & Manualità
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border-2 border-current bg-black/5 light:bg-white/5 shadow-lg">
            <h3 className="text-xl font-bold mb-3">🧗‍♂️ Arrampicata</h3>
            <p className="text-sm leading-relaxed opacity-90 font-medium">
              Pratico regolarmente arrampicata indoor e outdoor. Richiede concentrazione, problem-solving analitico e gestione della tensione: lo stesso approccio mentale che applico quando affrongo un bug complesso in codebase.
            </p>
          </div>
          <div className="p-6 rounded-2xl border-2 border-current bg-black/5 light:bg-white/5 shadow-lg">
            <h3 className="text-xl font-bold mb-3">🪵 Falegnameria & Fai-da-te</h3>
            <p className="text-sm leading-relaxed opacity-90 font-medium">
              Amo lavorare il legno e dedicarmi alla falegnameria artigianale. La cura per l'allineamento dei materiali, la precisione dei tagli e la tangibilità del risultato rispecchiano la mia passione per la costruzione di interfacce curate nei minimi dettagli.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}