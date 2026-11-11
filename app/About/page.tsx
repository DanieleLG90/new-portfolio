
export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-yellow-300 selection:text-purple-950">
      
      <div className="flex-1 max-w-5xl mx-auto px-6 py-16 w-full">
        <h1 className="text-4xl md:text-5xl font-black text-yellow-300 mb-6 tracking-tight">
          About Me & Background
        </h1>
        
        <div className="space-y-8 text-purple-100 text-base md:text-lg leading-relaxed mb-16">
          <p>
            Opero come <strong className="text-yellow-300">Junior Front-End Developer</strong> con Partita IVA, unendo una solida formazione in animazione 3D conseguita allo <strong className="text-yellow-300">IED</strong> a un percorso di alta specializzazione tecnica su React, Next.js, TypeScript e Tailwind CSS. 
          </p>
          <p>
            La mia filosofia di sviluppo unisce la precisione ingegneristica alla cura maniacale per l'estetica visiva e l'esperienza utente.
          </p>
        </div>

        {/* Sezione Passioni / Oltre il codice */}
        <div className="border-t-2 border-yellow-300/40 pt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6">
            Oltre lo schermo: Passioni & Manualità
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-950/40 border-2 border-yellow-300/30 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-yellow-300 mb-3">🧗‍♂️ Arrampicata</h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                Pratico regolarmente arrampicata indoor e outdoor. Richiede concentrazione, problem-solving analitico e gestione della tensione: lo stesso approccio mentale che applico quando affrongo un bug complesso in codebase.
              </p>
            </div>
            <div className="bg-purple-950/40 border-2 border-yellow-300/30 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-yellow-300 mb-3">🪵 Falegnameria & Fai-da-te</h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                Amo lavorare il legno e dedicarmi alla falegnameria artigianale. La cura per l'allineamento dei materiali, la precisione dei tagli e la tangibilità del risultato rispecchiano la mia passione per la costruzione di interfacce curate nei minimi dettagli.
              </p>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}