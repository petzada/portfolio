import { perfil } from "@/content/perfil";

import { TemaToggle } from "./tema-toggle";

function IconeDownload() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width="18"
    >
      <path d="M12 3.6v11.2" />
      <path d="m7.6 10.6 4.4 4.4 4.4-4.4" />
      <path d="M4.8 19.2h14.4" />
    </svg>
  );
}

export function TopoAcoes() {
  return (
    <div className="absolute top-4 right-4 z-50 flex items-center gap-2 sm:top-5 sm:right-6">
      <a
        aria-label="Baixar currículo em PDF"
        className="grid size-10 place-content-center rounded-full border border-ink bg-ink text-canvas transition-[opacity,transform] duration-150 hover:opacity-85 active:translate-y-px"
        download
        href={perfil.links.curriculo}
        title="Baixar currículo em PDF"
      >
        <IconeDownload />
      </a>
      <TemaToggle />
    </div>
  );
}
