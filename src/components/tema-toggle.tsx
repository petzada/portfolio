"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const buttonClass =
  "grid size-10 place-content-center rounded-full border border-line-strong bg-surface text-ink transition-[border-color,transform] duration-150 hover:border-ink active:translate-y-px";

function IconeSol() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
      width="18"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.6v2.2M12 19.2v2.2M21.4 12h-2.2M4.8 12H2.6M18.6 5.4 17 7M7 17l-1.6 1.6M18.6 18.6 17 17M7 7 5.4 5.4" />
    </svg>
  );
}

function IconeLua() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
      width="18"
    >
      <path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z" />
    </svg>
  );
}

export function TemaToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span aria-hidden="true" className={`${buttonClass} invisible`} />;
  }

  const isDark = resolvedTheme === "dark";
  const rotulo = isDark ? "Ativar tema claro" : "Ativar tema escuro";

  return (
    <button
      aria-label={rotulo}
      aria-pressed={isDark}
      className={buttonClass}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={rotulo}
      type="button"
    >
      {isDark ? <IconeSol /> : <IconeLua />}
    </button>
  );
}
