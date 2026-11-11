"use client";

import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-[#13032B] border-2 border-yellow-300 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative text-purple-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pulsante di chiusura (X) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-purple-900/60 hover:bg-yellow-300 hover:text-purple-950 text-yellow-300 border border-yellow-300/40 font-bold flex items-center justify-center transition-all cursor-pointer"
          aria-label="Chiudi"
        >
          ✕
        </button>

        {/* Titolo */}
        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-yellow-300 text-purple-950 rounded-full inline-block mb-3">
          Case Study Dettagliato
        </span>
        <h2 className="text-3xl font-black text-yellow-300 mb-4 tracking-tight">
          {project.title}
        </h2>

        {/* Immagini in primo piano */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-2 relative h-56 md:h-64 rounded-xl overflow-hidden border border-yellow-300/20 bg-purple-900/20">
            <Image 
              src={project.desktopImage} 
              alt={`${project.title} Desktop View`} 
              fill 
              className="object-cover object-top"
            />
          </div>
          <div className="md:col-span-1 relative h-56 md:h-64 rounded-xl overflow-hidden border border-yellow-300/20 bg-purple-900/20 flex justify-center">
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
          <h3 className="text-lg font-bold text-yellow-300 mb-2">Panoramica e Soluzione</h3>
          <p className="text-purple-100 text-sm md:text-base leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Tag Stack Tecnologico */}
        <div className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-300/80 mb-3">Stack Tecnologico</h3>
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-bold px-3 py-1.5 bg-yellow-300 text-purple-950 rounded-lg shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer della Modale con azioni */}
        <div className="flex gap-4 pt-4 border-t border-yellow-300/20 justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl border border-yellow-300/40 text-yellow-300 hover:bg-purple-900/40 font-bold text-sm transition-all cursor-pointer"
          >
            Chiudi
          </button>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-2.5 rounded-xl bg-yellow-300 hover:bg-yellow-400 text-purple-950 font-bold text-sm transition-all shadow-lg flex items-center gap-2"
            >
              Visita Sito Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}