import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div className="bg-purple-950/40 border-2 border-yellow-300/30 light:border-[#13032b] rounded-2xl p-4 sm:p-6 flex flex-col justify-between hover:border-yellow-300 light:hover:border-[#7C3AED] transition-all shadow-xl">
      <div>
        {/* Anteprima Immagini (Desktop + Mobile) con altezze reattive */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
          <div className="col-span-2 relative h-40 sm:h-48 rounded-xl overflow-hidden border border-yellow-300/20 bg-purple-900/20">
            <Image 
              src={project.desktopImage} 
              alt={`${project.title} Desktop`} 
              fill 
              className="object-cover object-top"
            />
          </div>
          <div className="col-span-1 relative h-40 sm:h-48 rounded-xl overflow-hidden border border-yellow-300/20 bg-purple-900/20 flex justify-center">
            <Image 
              src={project.mobileImage} 
              alt={`${project.title} Mobile`} 
              fill 
              className="object-cover object-top"
            />
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-black mb-3">{project.title}</h2>
        <p className="text-purple-100 light:text-[#13032b] text-xs sm:text-sm mb-6 leading-relaxed">
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

        {/* Azioni: Impilate su mobile, affiancate da sm in su */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={() => onSelect(project)}
            className="w-full sm:flex-1 py-3 sm:py-2.5 px-4 bg-purple-900/60 hover:bg-purple-900 text-yellow-300 border border-yellow-300/50 rounded-xl font-bold text-sm transition-all text-center active:scale-95"
          >
            Scopri di più
          </button>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto py-3 sm:py-2.5 px-5 bg-yellow-300 hover:bg-yellow-400 text-purple-950 rounded-xl font-bold text-sm transition-all text-center flex items-center justify-center active:scale-95"
            >
              Visita ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}