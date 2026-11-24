"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Traccia le animazioni già eseguite per ciascun id in questo caricamento di pagina
const playedIds = new Set<string>();

interface PeekMascotProps {
  id?: string;
  side?: "left" | "right";
  delay?: number;
  duration?: number;
}

export default function PeekMascot({
  id = "default",
  side = "right",
  delay = 500,
  duration = 3200,
}: PeekMascotProps) {
  const [stage, setStage] = useState<"hidden" | "peeking" | "done">("hidden");

  useEffect(() => {
    if (playedIds.has(id)) {
      setStage("done");
      return;
    }

    let cancelled = false;
    let hideTimer: ReturnType<typeof setTimeout>;
    let cleanupTimer: ReturnType<typeof setTimeout>;

    const peekTimer = setTimeout(() => {
      if (cancelled) return;

      playedIds.add(id);
      setStage("peeking");

      hideTimer = setTimeout(() => {
        if (!cancelled) setStage("hidden");
      }, duration);

      cleanupTimer = setTimeout(() => {
        if (!cancelled) setStage("done");
      }, duration + 1000);
    }, delay);

    return () => {
      cancelled = true;
      clearTimeout(peekTimer);
      clearTimeout(hideTimer);
      clearTimeout(cleanupTimer);
    };
  }, [id, delay, duration]);

  if (stage === "done") return null;

  const isRight = side === "right";
  const positionClasses = isRight ? "right-0 top-1/3" : "left-0 top-1/3";

  // Entrata: sporge dal bordo e si inclina dolcemente verso l'interno
  const transformShow = isRight
    ? "translate-x-1/3 rotate-[-14deg] opacity-100"
    : "-translate-x-1/3 rotate-[14deg] opacity-100";

  // Nascosta/Uscita: rientra oltre il bordo riallineando la rotazione
  const transformHide = isRight
    ? "translate-x-full rotate-6 opacity-0"
    : "-translate-x-full rotate-[-6deg] opacity-0";

  const flipClass = isRight ? "" : "scale-x-[-1]";

  return (
    <div
      className={`fixed ${positionClasses} z-50 pointer-events-none transition-all duration-1000 ease-in-out transform ${
        stage === "peeking" ? transformShow : transformHide
      }`}
    >
      <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72">
        <Image
          src="/avatar/avatar.png"
          alt="Mascotte che sbircia dal bordo"
          fill
          sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 288px"
          className={`object-contain drop-shadow-2xl ${flipClass}`}
        />
      </div>
    </div>
  );
}