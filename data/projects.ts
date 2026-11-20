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
    description: "Custom WordPress infrastructure with cPanel, dedicated database setup, and a scalable multilingual architecture.",
    longDescription: "Designed and engineered a bespoke web platform for a seaside guest house. Handled the end-to-end technical setup on cPanel with Softaculous, configured a secure, dedicated database environment (wp_perlanera), and established a modular, scalable structure specifically designed to seamlessly manage multiple languages and localized content without compromising core performance or navigation stability.",
    tags: ["WordPress", "PHP", "cPanel", "Responsive UI"],
    desktopImage: "/img-progetti/perla nera desktop.png",
    mobileImage: "/img-progetti/perla nera mobile.png",
    liveUrl: "https://www.perlaneraguesthouse.it/it",
  },
  {
    id: "femer-beauty",
    title: "Femer Beauty Suite",
    description: "Headless Next.js storefront powered by a customized WordPress backend via Advanced Custom Fields (ACF).",
    longDescription: "Stewarted a high-performance web application bridging the speed and modern UI capabilities of Next.js and Tailwind CSS with a flexible headless WordPress backend. Leveraged ACF REST API payloads and dynamic slug rendering to deliver seamless, lightning-fast content updates coupled with a robust remote architecture.",
    tags: ["Next.js", "Tailwind CSS", "Headless WP", "TypeScript"],
    desktopImage: "/img-progetti/femer desktop.png",
    mobileImage: "/img-progetti/femer mobile.png",
    liveUrl: "https://femer-beautysuite.vercel.app/",
  },
];