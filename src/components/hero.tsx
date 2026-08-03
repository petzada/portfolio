import Image from "next/image";

import retrato from "@/content/hero.png";
import { perfil } from "@/content/perfil";

import { Reveal } from "./reveal";

const tecnologias = "Next.js, TypeScript, Node e PostgreSQL";

export function Hero() {
  const [antes, depois] = perfil.apresentacao.split(tecnologias);

  return (
    <>
      <Reveal
        className="mx-auto max-w-[800px] px-5 pt-16 sm:px-6 sm:pt-20"
        distance={16}
      >
        <section aria-labelledby="nome-marcio">
          <Image
            alt={`Retrato ilustrado de ${perfil.nome}`}
            className="mb-7 size-[88px] rounded-full border border-line object-cover sm:size-28"
            placeholder="blur"
            priority
            sizes="(max-width: 640px) 88px, 112px"
            src={retrato}
          />
          <h1
            className="font-display text-[30px] leading-[1.06] font-bold tracking-[-0.005em] sm:text-[44px]"
            id="nome-marcio"
          >
            {perfil.nomeDisplay.map((linha) => (
              <span className="block" key={linha}>
                {linha}
              </span>
            ))}
          </h1>
          <p className="mt-4 text-[19px] font-medium tracking-[-0.025em] text-ink sm:text-[22px]">
            {perfil.cargo}
          </p>
          <div className="mt-[18px] flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-subtle">
            <span>{perfil.local}</span>
            <a
              className="border-b border-line-strong [overflow-wrap:anywhere] text-muted transition-colors hover:border-ink hover:text-ink"
              href={perfil.links.email}
            >
              {perfil.email}
            </a>
          </div>
          <p className="copy mt-[26px] text-[17px] leading-[1.65] text-muted sm:text-lg">
            {antes}
            <strong className="font-semibold text-ink">{tecnologias}</strong>
            {depois}
          </p>
          <nav
            aria-label="Contato e perfis"
            className="mt-[30px] flex flex-wrap gap-[9px]"
          >
            <a
              className="rounded-full border border-ink bg-ink px-4 py-[9px] text-[13px] font-semibold whitespace-nowrap text-canvas transition-opacity hover:opacity-85 active:translate-y-px"
              href={perfil.links.whatsapp}
              rel="noopener noreferrer"
              target="_blank"
            >
              Pedir um orçamento
            </a>
            <a
              className="rounded-full border border-line-strong bg-surface px-4 py-[9px] text-[13px] font-semibold whitespace-nowrap text-ink transition-colors hover:border-ink active:translate-y-px"
              href={perfil.links.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="rounded-full border border-line-strong bg-surface px-4 py-[9px] text-[13px] font-semibold whitespace-nowrap text-ink transition-colors hover:border-ink active:translate-y-px"
              href={perfil.links.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </nav>
        </section>
      </Reveal>
    </>
  );
}
