"use client";

import { useState } from "react";
import { PROJECTS_DATA, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="flex-1 max-w-7xl mx-auto px-6 py-16 w-full">
      <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
        Progetti & Case Studies
      </h1>
      <p className="text-purple-100 light:text-[#13032b] text-lg mb-12 max-w-2xl">
        Una selezione dei miei lavori nello sviluppo frontend e nell'infrastruttura web, focalizzati su performance, pulizia del codice e identità visiva.
      </p>

      {/* Griglia scalabile dei progetti */}
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onSelect={(proj) => setSelectedProject(proj)} 
          />
        ))}
      </div>

      {/* Finestra Modale / Pop-up dinamica */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}