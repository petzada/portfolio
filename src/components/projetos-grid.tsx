import { projetos } from "@/content/projetos";

import { ProjetoCard } from "./projeto-card";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ProjetosGrid() {
  return (
    <section
      aria-labelledby="projetos-titulo"
      className="mx-auto mt-24 max-w-[800px] px-5 sm:px-6"
    >
      <SectionHeading id="projetos-titulo">Projetos</SectionHeading>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-7">
        {projetos.map((projeto, index) => (
          <Reveal
            className={index === 0 ? "sm:col-span-2" : undefined}
            delay={index * 0.04}
            key={projeto.slug}
          >
            <ProjetoCard destaque={index === 0} projeto={projeto} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
