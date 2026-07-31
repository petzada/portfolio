import Link from "next/link";

import type { Projeto, Status } from "@/lib/types";

import { CapturaSlot } from "./captura-slot";

const statusLabel: Record<Status, string> = {
  "no-ar": "no ar",
  "em-uso": "em uso",
  demo: "demo",
};

export function ProjetoCard({
  projeto,
  destaque,
}: {
  projeto: Projeto;
  destaque: boolean;
}) {
  const statusAtivo = projeto.status !== "demo";

  return (
    <Link
      className={`project-card group block text-inherit no-underline ${destaque ? "sm:col-span-2" : ""}`}
      href={`/projetos/${projeto.slug}`}
    >
      <div
        className={`relative overflow-hidden rounded-media border border-line bg-surface transition-[border-color,box-shadow] duration-300 ease-[var(--ease-portfolio)] group-hover:border-line-strong group-hover:shadow-[0_8px_30px_rgb(0_0_0/0.10)] dark:group-hover:shadow-[0_8px_30px_rgb(0_0_0/0.55)] ${destaque ? "aspect-video" : "aspect-[16/10]"}`}
      >
        <CapturaSlot
          captura={projeto.capa}
          dimensoes={destaque ? "1920 × 1080, 16:9" : "1600 × 1000, 16:10"}
          priority={destaque}
          sizes={
            destaque
              ? "(max-width: 800px) 100vw, 752px"
              : "(max-width: 640px) 100vw, 362px"
          }
        />
      </div>
      <div className="mt-4 flex flex-col items-start gap-[5px] sm:flex-row sm:items-baseline sm:gap-[10px]">
        <h3
          className={`font-display leading-[1.06] font-bold tracking-[-0.005em] uppercase ${destaque ? "text-xl" : "text-base"}`}
        >
          {projeto.nome}
        </h3>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium whitespace-nowrap text-muted sm:ml-auto">
          <span
            aria-hidden="true"
            className={`size-1.5 rounded-full ${statusAtivo ? "bg-muted" : "border border-subtle bg-transparent"}`}
          />
          {statusLabel[projeto.status]}
        </span>
      </div>
      <p
        className={`copy mt-2 text-muted ${destaque ? "text-[15px]" : "text-sm"}`}
      >
        {projeto.frase}
      </p>
      <ul
        aria-label={`Stack do ${projeto.nome}`}
        className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-muted"
      >
        {projeto.stack.map((item) => (
          <li
            className="rounded-control border border-line px-2 py-[3px]"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </Link>
  );
}
