"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroMascot() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    // 1. Entrata da destra
    const enterTimer = setTimeout(() => {
      setHasEntered(true);
      setIsFloating(true);
    }, 200);

    // 2. Dopo 4.5 secondi la fluttuazione iniziale sfuma verso la stasi
    const floatTimer = setTimeout(() => {
      setIsFloating(false);
    }, 4700);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(floatTimer);
    };
  }, []);

  return (
    <div
      className={`relative w-full h-full transition-all duration-1000 ease-out transform ${
        hasEntered ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
      }`}
    >
      <div
        className={`w-full h-full transition-all duration-700 ease-out ${
          isFloating 
            ? "animate-hero-bounce" 
            : "translate-y-0 rotate-0 hover:scale-105 hover:-translate-y-2"
        }`}
      >
        <Image
          src="/avatar/avatar.png"
          alt="DLG Flying Eye Mascot"
          fill
          priority
          sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 384px"
          className="object-contain drop-shadow-[0_15px_30px_rgba(253,224,71,0.15)] cursor-pointer"
        />
      </div>
    </div>
  );
}