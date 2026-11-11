import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void; // Funzione per aprire il dettaglio / modale
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div className="bg-purple-950/40 border-2 border-yellow-300/30 rounded-2xl p-6 flex flex-col justify-between hover:border-yellow-300 transition-all shadow-xl">
      <div>
        {/* Anteprima Immagini (Desktop + Mobile) */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="col-span-2 relative h-48 rounded-xl overflow-hidden border border-yellow-300/20 bg-purple-900/20">
            <Image 
              src={project.desktopImage} 
              alt={`${project.title} Desktop`} 
              fill 
              className="object-cover object-top"
            />
          </div>
          <div className="col-span-1 relative h-48 rounded-xl overflow-hidden border border-yellow-300/20 bg-purple-900/20 flex justify-center">
            <Image 
              src={project.mobileImage} 
              alt={`${project.title} Mobile`} 
              fill 
              className="object-cover object-top"
            />
          </div>
        </div>

        <h2 className="text-2xl font-black text-yellow-300 mb-3">{project.title}</h2>
        <p className="text-purple-100 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div>
        <div className="flex gap-2 flex-wrap mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-bold px-3 py-1 bg-yellow-300 text-purple-950 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Azioni: Dettaglio / Pop-up e Link Live */}
        <div className="flex gap-3">
          <button 
            onClick={() => onSelect(project)}
            className="flex-1 py-2.5 px-4 bg-purple-900/60 hover:bg-purple-900 text-yellow-300 border border-yellow-300/50 rounded-xl font-bold text-sm transition-all text-center"
          >
            Scopri di più
          </button>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="py-2.5 px-4 bg-yellow-300 hover:bg-yellow-400 text-purple-950 rounded-xl font-bold text-sm transition-all text-center flex items-center justify-center"
            >
              Visita ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}