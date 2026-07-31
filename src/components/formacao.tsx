import { formacao, idiomas } from "@/content/formacao";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Formacao() {
  const curso = formacao[0];

  return (
    <section
      aria-labelledby="formacao-titulo"
      className="mx-auto mt-24 max-w-[800px] px-5 sm:px-6"
    >
      <SectionHeading id="formacao-titulo">Formação</SectionHeading>
      <Reveal className="grid grid-cols-1 gap-7 sm:grid-cols-[1.4fr_1fr] sm:gap-9">
        <div>
          <h3 className="text-[17px] font-semibold tracking-[-0.02em]">
            {curso.curso}
          </h3>
          <p className="mt-1.5 text-sm text-muted">{curso.instituicao}</p>
          <p className="mt-1.5 text-xs text-subtle">{curso.periodo}</p>
          {curso.detalhe ? (
            <p className="copy mt-3 text-sm text-muted">{curso.detalhe}</p>
          ) : null}
        </div>
        <div>
          <h3 className="text-[17px] font-semibold tracking-[-0.02em]">
            Idiomas
          </h3>
          {idiomas.map((idioma) => (
            <p className="mt-1.5 text-sm text-muted" key={idioma}>
              {idioma}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
