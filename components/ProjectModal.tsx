"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Gestione tasto ESC e blocco scroll del body a modale aperta
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[#13032b] text-yellow-300 light:bg-yellow-300 light:text-[#13032b] border-2 border-current rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pulsante di chiusura (X) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full border border-current font-bold flex items-center justify-center bg-black/10 light:bg-white/10 hover:scale-110 active:scale-95 transition-all cursor-pointer"
          aria-label="Chiudi"
        >
          ✕
        </button>

        {/* Badge e Titolo */}
        <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 bg-[#13032b] text-yellow-300 light:bg-yellow-300 light:text-[#13032b] border border-current rounded-full inline-block mb-3 shadow-md">
          Case Study Dettagliato
        </span>
        <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
          {project.title}
        </h2>

        {/* Immagini in primo piano (Desktop + Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-2 relative h-56 md:h-64 rounded-xl overflow-hidden border border-current bg-black/5 light:bg-white/5">
            <Image 
              src={project.desktopImage} 
              alt={`${project.title} Desktop View`} 
              fill 
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="md:col-span-1 relative h-56 md:h-64 rounded-xl overflow-hidden border border-current bg-black/5 light:bg-white/5">
            <Image 
              src={project.mobileImage} 
              alt={`${project.title} Mobile View`} 
              fill 
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Descrizione estesa */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 uppercase tracking-wider text-xs">
            Panoramica e Soluzione
          </h3>
          <p className="text-sm md:text-base leading-relaxed opacity-90 font-medium">
            {project.longDescription}
          </p>
        </div>

        {/* Stack Tecnologico */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-wider opacity-80 mb-3">
            Stack Tecnologico
          </h3>
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs font-bold px-3 py-1.5 border border-current rounded-lg bg-black/5 light:bg-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Modale: Link Esterni (Task 2) */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-current/20 justify-end items-center">
          
          {/* Link Repository GitHub */}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2.5 rounded-xl border border-current font-bold text-xs sm:text-sm hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 bg-black/5 light:bg-white/10"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
              GitHub ↗
            </a>
          )}
          
          {/* Link Live Site */}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm bg-[#13032b] text-yellow-300 light:bg-yellow-300 light:text-[#13032b] hover:scale-[1.02] active:scale-95 transition-all shadow-lg flex items-center gap-2"
            >
              Visita Sito Live ↗
            </a>
          )}

          {/* Pulsante Chiudi */}
          <button 
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-current font-bold text-xs sm:text-sm hover:opacity-80 transition-all cursor-pointer"
          >
            Chiudi
          </button>
        </div>

      </div>
    </div>
  );
}