"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const buttonClass =
  "rounded-control border border-line-strong bg-surface px-3 py-2 text-xs font-semibold text-ink transition-[border-color,transform] duration-150 hover:border-ink active:translate-y-px";

export function TemaToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span aria-hidden="true" className={`${buttonClass} invisible`}>
        Trocar tema
      </span>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Trocar tema"
      aria-pressed={isDark}
      className={buttonClass}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
    >
      Trocar tema
    </button>
  );
}
