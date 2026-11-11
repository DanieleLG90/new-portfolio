export default function Hero() {
  return (
    <section className="flex-1 flex items-center justify-center px-6 md:px-12 py-20 md:py-32 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
        
        {/* Colonna Testi */}
        <div className="md:col-span-7 flex flex-col items-start text-left">
          
          <span className="px-4 py-1.5 mb-6 text-xs font-bold tracking-wider uppercase bg-yellow-300 text-purple-950 rounded-full shadow-md">
            Junior Front-End Developer & 3D Designer
          </span>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
            Trasformo il design in codice fluido.
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-[#f3e8ff] light:text-[#13032b] mb-10 max-w-2xl leading-relaxed font-medium opacity-90">
            Unione di estetica visiva (IED) e ingegneria frontend moderna con React, Next.js, TypeScript e Tailwind CSS.
          </p>
          
          <div className="flex gap-4 flex-wrap justify-start">
            <a 
              href="#projects" 
              className="px-7 py-3.5 font-bold bg-yellow-300 text-purple-950 rounded-xl shadow-lg hover:bg-yellow-400 transition-all transform hover:-translate-y-0.5"
            >
              Esplora i Progetti
            </a>
            <a 
              href="#contact" 
              className="px-7 py-3.5 font-bold bg-purple-950/40 text-yellow-300 border-2 border-yellow-300 rounded-xl hover:bg-purple-950/60 transition-all"
            >
              Mettiamoci in contatto
            </a>
          </div>

        </div>

        {/* Colonna Destra (Spazio per Avatar / Grafica) */}
        <div className="md:col-span-5 hidden md:flex justify-center items-center">
          <div className="w-full h-80 rounded-2xl bg-purple-950/40 border-2 border-yellow-300/30 flex items-center justify-center text-yellow-300/60 text-sm shadow-xl p-6 text-center backdrop-blur-sm">
            [Spazio per Elemento Grafico / Avatar / Tech Stack Preview]
          </div>
        </div>

      </div>
    </section>
  );
}