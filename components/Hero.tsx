import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-12 pt-6 pb-16 md:py-28 max-w-7xl mx-auto w-full transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center w-full">
        
        {/* Colonna Testi (Su mobile va sotto la mascotte o sopra a seconda dell'ordine) */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          
          {/* Badge Ruolo */}
          <span className="px-3.5 py-2.5 mb-5 text-xs font-bold tracking-wider uppercase bg-[#fde047] text-[#13032b] light:bg-[#13032b] light:text-[#fde047] rounded-full border-2 border-[#7C3AED] shadow-md">
            Junior Front-End Developer & 3D Designer
          </span>
          
          {/* Titolo Principale */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
            Trasformo il design in codice fluido.
          </h1>
          
          {/* Sottotitolo / Descrizione */}
          <p className="text-[#f3e8ff] light:text-[#13032b] text-sm sm:text-base lg:text-xl mb-8 md:mb-10 max-w-2xl leading-relaxed font-medium opacity-90">
            Unione di estetica visiva (IED) e ingegneria frontend moderna con React, Next.js, TypeScript e Tailwind CSS.
          </p>
          
          {/* Pulsanti Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <Link 
              href="Projects" 
              className="px-6 sm:px-7 py-3.5 font-bold bg-transparent border-2 border-current rounded-xl hover:bg-black/5 light:hover:bg-white/5 active:scale-95 transition-all text-center text-sm sm:text-base"
            >
              Esplora i Progetti
            </Link>
            <Link 
              href="Contact" 
              className="px-6 sm:px-7 py-3.5 font-bold bg-transparent border-2 border-current rounded-xl hover:bg-black/5 light:hover:bg-white/5 active:scale-95 transition-all text-center text-sm sm:text-base"
            >
              Mettiamoci in contatto
            </Link>
          </div>

        </div>

        {/* Colonna Destra: Mascotte Vettoriale Colorata */}
        <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
            <Image 
              src="/avatar/avatar.png" 
              alt="DLG Flying Eye Mascot" 
              fill 
              priority
              className="object-contain drop-shadow-[0_15px_30px_rgba(253,224,71,0.15)]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}