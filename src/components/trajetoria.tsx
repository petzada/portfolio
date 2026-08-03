import { trajetoria } from "@/content/trajetoria";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Trajetoria() {
  return (
    <section
      aria-labelledby="trajetoria-titulo"
      className="mx-auto mt-24 max-w-[800px] px-5 sm:px-6"
    >
      <SectionHeading id="trajetoria-titulo">Trajetória</SectionHeading>
      <ol className="relative m-0 list-none p-0 before:absolute before:top-2 before:bottom-2 before:left-[5px] before:w-px before:bg-line">
        {trajetoria.map((emprego, index) => (
          <li
            className="relative pb-10 pl-[34px] last:pb-0"
            key={`${emprego.org}-${emprego.periodo}`}
          >
            <span
              aria-hidden="true"
              className={`absolute top-[7px] left-0 size-[11px] rounded-full border ${emprego.atual ? "border-ink bg-ink" : "border-line-strong bg-canvas"}`}
            />
            <Reveal delay={index * 0.04} distance={16}>
              <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3.5">
                <h3 className="text-[17px] font-semibold tracking-[-0.02em]">
                  {emprego.org}
                </h3>
                <span className="text-xs whitespace-nowrap text-subtle sm:ml-auto">
                  {emprego.periodo}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-muted">
                {emprego.cargo}
              </p>
              <ul className="mt-2.5 grid list-disc gap-1.5 pl-[18px] text-sm text-muted marker:text-subtle">
                {emprego.descricao.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
