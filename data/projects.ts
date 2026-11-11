export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  desktopImage: string;
  mobileImage: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "perla-nera",
    title: "Perla Nera Guest House",
    description: "Infrastruttura WordPress personalizzata con cPanel, database dedicato e gestione avanzata delle versioni core.",
    longDescription: "Sito web per una guest house, sviluppato curando l'interfaccia estetica, la configurazione backend su cPanel con Softaculous, la gestione sicura del database (wp_perlanera) e la stabilità delle API multilingua.",
    tags: ["WordPress", "PHP", "cPanel", "Responsive UI"],
    desktopImage: "/img-progetti/perla nera desktop.png",
    mobileImage: "/img-progetti/perla nera mobile.png",
    liveUrl: "#",
  },
  {
    id: "femer-beauty",
    title: "Femer Beauty Suite",
    description: "Headless Next.js storefront potenziato da una struttura WordPress personalizzata tramite Advanced Custom Fields (ACF).",
    longDescription: "Piattaforma web avanzata che unisce le performance e la modernità di Next.js e Tailwind CSS alla flessibilità di un back-end WordPress headless per la gestione dei contenuti dinamici.",
    tags: ["Next.js", "Tailwind CSS", "Headless WP", "TypeScript"],
    desktopImage: "/img-progetti/femer desktop.png",
    mobileImage: "/img-progetti/femer mobile.png",
    liveUrl: "#",
  },
];