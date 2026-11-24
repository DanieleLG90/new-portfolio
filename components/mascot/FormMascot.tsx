"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface FormMascotProps {
  delay?: number;
}

export default function FormMascot({ delay = 300 }: FormMascotProps) {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasEntered(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      aria-hidden="true"
      className={`absolute -top-6 right-6 z-0 pointer-events-none transition-all duration-1000 ease-out transform ${
        hasEntered
          ? "-translate-y-20 translate-x-4 rotate-[-12deg] opacity-100"
          : "translate-y-12 translate-x-0 rotate-0 opacity-0"
      }`}
    >
      <div className="relative w-36 h-36 sm:w-48 sm:h-48">
        <Image
          src="/avatar/avatar.png"
          alt=""
          fill
          sizes="(max-width: 640px) 144px, 192px"
          className="object-contain drop-shadow-xl"
        />
      </div>
    </div>
  );
}