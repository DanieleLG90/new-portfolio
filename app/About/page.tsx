import Image from "next/image";
import PeekMascot from "@/components/mascot/PeekMascot";

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

      <PeekMascot side="left" />
      
      {/* Intestazione Sezione */}
      <div className="flex flex-col items-center md:items-start mb-12">
        <span className="px-3.5 py-1.5 mb-3 text-xs font-bold tracking-wider uppercase bg-[#13032b] text-yellow-300 light:bg-yellow-300 light:text-[#13032b] rounded-full shadow-md">
          About Me & Philosophy
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-center md:text-left">
          Beyond the code, in the real world
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
        
        {/* Colonna Testo (Bio Personale + Professionale) */}
        <div className=" text-purple-300 light:text-[#13032b] lg:col-span-6 flex flex-col justify-center text-center md:text-left space-y-4">
          <p className="text-base sm:text-lg leading-relaxed font-semibold">
            I firmly believe that the best ideas don't just happen in front of a monitor, but by experiencing life out in the field.
          </p>
          <p className="text-sm sm:text-base leading-relaxed opacity-90 font-medium">
            With a background in 3D animation from IED and years of hands-on web development study, I’ve learned to blend a keen eye for design with the rigor of modern code. But for me, development is only part of the picture: attention to detail, problem-solving, and the pursuit of aesthetics guide everything I do.
          </p>
          <p className="text-sm sm:text-base leading-relaxed opacity-90 font-medium">
            From outdoor and mountain challenges to hands-on crafting projects and travel adventures, I love to experiment, build, and explore. This continuous curiosity directly fuels the way I craft digital products: with energy, practicality, and constant visual attention.
          </p>

          {/* Sezione Download CV a forte contrasto */}
          <div className="mt-16 p-6 sm:p-8 rounded-2xl border-2 border-purple-300 light:border-current bg-yellow-300 text-[#13032b] light:bg-[#13032b] light:text-yellow-300 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl transition-colors duration-300">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-black mb-1">Want to learn more about my profile?</h3>
              <p className="text-xs sm:text-sm opacity-90 font-medium">
                Download my updated CV with all my experiences and technical skills.
              </p>
            </div>
            <a 
              href="/Daniele_Lorenzo_Giacomazzi_CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#13032b] text-yellow-300 light:bg-yellow-300 light:text-[#13032b] border-2 border-current rounded-xl font-black text-sm transition-all hover:-translate-y-0.5 active:scale-95 shadow-lg flex items-center gap-2 shrink-0 cursor-pointer"
            >
              Download CV 📄
            </a>
          </div>

        </div>

        {/* Colonna Foto (Griglia a 3 Immagini) */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 h-full min-h-[360px] sm:min-h-[420px]">
          {/* Immagine 1 (Grande, occupa 2 righe a sinistra) */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-current bg-black/5 light:bg-white/5 shadow-lg group">
            <Image 
              src="/img-about/daniele-1.png" 
              alt="Daniele - Vita reale e passioni" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Colonna destra con 2 foto impilate */}
          <div className="flex flex-col gap-4">
            <div className="relative flex-1 rounded-2xl overflow-hidden border-2 border-current bg-black/5 light:bg-white/5 shadow-lg group">
              <Image 
                src="/img-about/foto-profilo.png" 
                alt="Daniele outdoor / dettagli" 
                fill 
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative flex-1 rounded-2xl overflow-hidden border-2 border-current bg-black/5 light:bg-white/5 shadow-lg group">
              <Image 
                src="/img-about/daniele-2.png" 
                alt="Daniele progetti / viaggio" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Sezione Tech Stack in Basso */}
      <div className="pt-8 border-t border-current/10 mb-16">
        <h3 className="text-xl sm:text-2xl font-extrabold mb-6 text-center md:text-left">
          Core Tech Stack & Tools
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="p-4 rounded-xl border-2 border-current font-bold text-xs sm:text-sm text-center flex items-center justify-center bg-yellow-300 text-[#13032b] light:bg-[#13032b] light:text-yellow-300 shadow-md transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Sezione Oltre lo schermo: Passioni & Manualità */}
      <div className="border-t-2 border-current/20 pt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
          Beyond the Screen: Passions & Hands-on Mindset
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border-2 border-current bg-black/5 light:bg-white/5 shadow-lg">
            <h3 className="text-xl font-bold mb-3">🧗‍♂️ Climbing & Outdoor Life</h3>
            <p className="text-sm leading-relaxed opacity-90 font-medium">
              I regularly practice indoor and outdoor climbing, alongside trekking and mountain adventures. Navigating routes requires focus, analytical problem-solving, and managing tension under pressure—the exact same mental framework I bring when tackling complex bugs in a codebase.
            </p>
          </div>
          <div className="p-6 rounded-2xl border-2 border-current bg-black/5 light:bg-white/5 shadow-lg">
            <h3 className="text-xl font-bold mb-3">🛠️ Crafting & Mindful Creativity</h3>
            <p className="text-sm leading-relaxed opacity-90 font-medium">
              I thrive on hands-on making, physical crafting, and exploring new creative outlets. Driven by continuous curiosity and constant learning, this maker mindset translates directly into building software: attention to precision, alignment, and bringing tangible ideas to life.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}