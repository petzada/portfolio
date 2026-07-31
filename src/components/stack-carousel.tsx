import type { CSSProperties } from "react";

import { perfil } from "@/content/perfil";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

function StackGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden || undefined} className="marquee-group">
      {perfil.stack.map((item) => (
        <span
          className="inline-flex flex-none items-center gap-2 rounded-control border border-line bg-surface px-3.5 py-[9px] text-[13px] font-medium text-ink"
          key={item.nome}
        >
          {item.icone ? (
            <i
              aria-hidden="true"
              className="tech-icon"
              style={
                {
                  maskImage: `url(/icons/${item.icone}.svg)`,
                } as CSSProperties
              }
            />
          ) : null}
          {item.nome}
        </span>
      ))}
    </div>
  );
}

export function StackCarousel() {
  return (
    <section
      aria-labelledby="stack-titulo"
      className="mx-auto mt-24 max-w-[800px] px-5 sm:px-6"
    >
      <SectionHeading id="stack-titulo">Stack</SectionHeading>
      <Reveal>
        <div aria-label="Tecnologias que uso" className="marquee" role="region">
          <div className="marquee-track">
            <StackGroup />
            <StackGroup hidden />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
