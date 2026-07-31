import type { ReactNode } from "react";

import { perfil } from "@/content/perfil";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const nomes = /(Ceremony|Evoluteam|Silcon)/g;
const projetos = new Set(["Ceremony", "Evoluteam", "Silcon"]);

function destacarProjetos(texto: string): ReactNode[] {
  return texto.split(nomes).map((parte, index) =>
    projetos.has(parte) ? (
      <strong className="font-semibold text-ink" key={`${parte}-${index}`}>
        {parte}
      </strong>
    ) : (
      parte
    ),
  );
}

export function Sobre() {
  return (
    <section
      aria-labelledby="sobre-titulo"
      className="mx-auto mt-24 max-w-[800px] px-5 sm:px-6"
    >
      <SectionHeading id="sobre-titulo">Sobre mim</SectionHeading>
      <Reveal className="grid gap-5">
        {perfil.sobre.map((paragrafo, index) => (
          <p
            className={
              index === 0
                ? "text-left text-[19px] leading-[1.55] font-medium tracking-[-0.02em] text-ink sm:text-xl"
                : "copy text-[17px] leading-[1.7] text-muted"
            }
            key={paragrafo}
          >
            {destacarProjetos(paragrafo)}
          </p>
        ))}
      </Reveal>
    </section>
  );
}
