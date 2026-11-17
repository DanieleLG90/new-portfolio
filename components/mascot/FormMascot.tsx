"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface FormMascotProps {
  delay?: number;
  duration?: number;
}

export default function FormMascot({
  delay = 600,
  duration = 3200,
}: FormMascotProps) {
  const [stage, setStage] = useState<"hidden" | "peeking" | "gone">("hidden");

  useEffect(() => {
    // 1. Inizia a salire da dietro il form
    const peekTimer = setTimeout(() => {
      setStage("peeking");
    }, delay);

    // 2. Inizia a scendere e rientrare
    const hideTimer = setTimeout(() => {
      setStage("hidden");
    }, delay + duration);

    // 3. Rimozione pulita dal DOM
    const cleanupTimer = setTimeout(() => {
      setStage("gone");
    }, delay + duration + 1000);

    return () => {
      clearTimeout(peekTimer);
      clearTimeout(hideTimer);
      clearTimeout(cleanupTimer);
    };
  }, [delay, duration]);

  if (stage === "gone") return null;

  // Stato Visibile: sale verso l'alto ed esce parzialmente a destra del form
  const transformShow = "-translate-y-20 translate-x-4 rotate-[-12deg] opacity-100";

  // Stato Nascosto: rientra completamente sotto il bordo superiore del form
  const transformHide = "translate-y-8 translate-x-0 rotate-0 opacity-0";

  return (
    <div
      className={`absolute -top-6 right-6 z-0 pointer-events-none transition-all duration-1000 ease-in-out transform ${
        stage === "peeking" ? transformShow : transformHide
      }`}
    >
      <div className="relative w-36 h-36 sm:w-48 sm:h-48">
        <Image
          src="/avatar/avatar.png"
          alt="Mascotte che sbircia dal form"
          fill
          sizes="(max-width: 640px) 144px, 192px"
          className="object-contain drop-shadow-xl"
        />
      </div>
    </div>
  );
}