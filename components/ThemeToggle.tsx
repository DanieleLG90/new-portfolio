"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isLight = theme === "light";

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="px-3 py-1.5 rounded-lg font-bold text-xs transition-all cursor-pointer shadow-sm border
        /* In Dark Mode (Header Giallo): Bottone Viola con testo Giallo */
        bg-[#13032b] text-yellow-300 border-[#13032b] hover:bg-purple-900
        /* In Light Mode (Header Viola): Bottone Giallo con testo Viola */
        light:bg-yellow-300 light:text-[#13032b] light:border-yellow-300 light:hover:bg-yellow-400"
      aria-label="Toggle Theme"
    >
      {isLight ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}