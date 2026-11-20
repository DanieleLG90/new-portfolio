import "@/app/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Daniele Lorenzo Giacomazzi | Junior Front-End Developer",
    template: "%s | Daniele Lorenzo Giacomazzi",
  },
  description:
    "Portfolio di Daniele Lorenzo Giacomazzi, Junior Front-End Developer specializzato in React, Next.js, TypeScript e Tailwind CSS.",
  keywords: [
    "Front-End Developer",
    "React Developer",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Web Developer Italia",
  ],
  authors: [{ name: "Daniele Lorenzo Giacomazzi" }],
  openGraph: {
    title: "Daniele Lorenzo Giacomazzi | Junior Front-End Developer",
    description:
      "Esplora i miei progetti front-end realizzati con React, Next.js, TypeScript e Tailwind CSS.",
    url: "https://new-portfolio-1857ww9mn-danielelg90s-projects.vercel.app", // Aggiorneremo con il dominio personalizzato appena lo colleghiamo
    siteName: "Portfolio Daniele Lorenzo Giacomazzi",
    images: [
      {
        url: "/og-image.png", // Nome dell'immagine di anteprima per le condivisioni social
        width: 1200,
        height: 630,
        alt: "Daniele Lorenzo Giacomazzi Portfolio Preview",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniele Lorenzo Giacomazzi | Junior Front-End Developer",
    description:
      "Esplora i miei progetti front-end realizzati con React, Next.js, TypeScript e Tailwind CSS.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          
          <Header />
          
          <main className="flex-1">
            {children}
          </main>
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}