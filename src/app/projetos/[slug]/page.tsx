import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CapturaSlot } from "@/components/captura-slot";
import { Cta } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { buscarProjeto, projetos } from "@/content/projetos";
import type { Status } from "@/lib/types";

export const dynamicParams = false;

const statusLabel: Record<Status, string> = {
  "no-ar": "no ar",
  "em-uso": "em uso",
  demo: "demo",
};

interface ProjetoPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projetos.map((projeto) => ({ slug: projeto.slug }));
}

export async function generateMetadata({
  params,
}: ProjetoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const projeto = buscarProjeto(slug);

  if (!projeto) {
    return {};
  }

  return {
    title: projeto.nome,
    description: projeto.frase,
    alternates: { canonical: `/projetos/${projeto.slug}` },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      title: `${projeto.nome} | Marcio Petigrosso`,
      description: projeto.frase,
      url: `/projetos/${projeto.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${projeto.nome} | Marcio Petigrosso`,
      description: projeto.frase,
    },
  };
}

function Paragrafos({ texto }: { texto: string }) {
  return texto.split("\n\n").map((paragrafo) => (
    <p className="copy text-base leading-[1.7] text-muted" key={paragrafo}>
      {paragrafo}
    </p>
  ));
}

export default async function ProjetoPage({ params }: ProjetoPageProps) {
  const { slug } = await params;
  const projeto = buscarProjeto(slug);

  if (!projeto) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[800px] px-5 pb-24 sm:px-6 sm:pb-28">
      <nav
        className="flex items-center pt-16 sm:pt-20"
        aria-label="Navegação do case"
      >
        <Link
          className="text-[13px] font-semibold text-muted transition-colors hover:text-ink"
          href="/"
        >
          Voltar
        </Link>
      </nav>

      <Reveal className="pt-7" distance={16}>
        <header>
          <h1 className="font-display text-[28px] leading-[1.06] font-bold tracking-[-0.005em] uppercase sm:text-[34px]">
            {projeto.nome}
          </h1>
          <p className="mt-3.5 text-[19px] leading-relaxed text-muted">
            {projeto.frase}
          </p>
          <div className="mt-[22px] flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-subtle">
            <span className="inline-flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className={`size-1.5 rounded-full ${projeto.status === "demo" ? "border border-subtle" : "bg-muted"}`}
              />
              {statusLabel[projeto.status]}
            </span>
            {projeto.url ? (
              <a
                className="border-b border-line-strong text-muted transition-colors hover:border-ink hover:text-ink"
                href={projeto.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {projeto.url.replace(/^https?:\/\//, "")}
              </a>
            ) : null}
            <span>{projeto.stack.join(", ")}</span>
          </div>
        </header>
      </Reveal>

      <Reveal className="mt-9">
        <figure className="overflow-hidden rounded-media border border-line bg-surface p-2 sm:p-2.5">
          <CapturaSlot
            captura={projeto.capa}
            className="h-auto w-full rounded-[6px]"
            priority
            sizes="(max-width: 800px) 100vw, 752px"
          />
        </figure>
      </Reveal>

      <div className="mt-14 grid gap-10">
        <Reveal>
          <section aria-labelledby="o-que-e">
            <h2
              className="mb-3 text-[13px] font-bold tracking-[0.16em] text-subtle uppercase"
              id="o-que-e"
            >
              O que é
            </h2>
            <div className="grid gap-5">
              <Paragrafos texto={projeto.oQueE} />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <figure className="overflow-hidden rounded-media border border-line bg-surface p-2 sm:p-2.5">
            <CapturaSlot
              captura={projeto.apoio[0]}
              className="h-auto w-full rounded-[6px]"
              sizes="(max-width: 800px) 100vw, 752px"
            />
          </figure>
        </Reveal>

        <Reveal>
          <section aria-labelledby="como-funciona">
            <h2
              className="mb-3 text-[13px] font-bold tracking-[0.16em] text-subtle uppercase"
              id="como-funciona"
            >
              Como funciona
            </h2>
            <div className="grid gap-5">
              <Paragrafos texto={projeto.comoFunciona} />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <figure className="overflow-hidden rounded-media border border-line bg-surface p-2 sm:p-2.5">
            <CapturaSlot
              captura={projeto.apoio[1]}
              className="h-auto w-full rounded-[6px]"
              sizes="(max-width: 800px) 100vw, 752px"
            />
          </figure>
        </Reveal>

        <Reveal>
          <details className="group rounded-control border border-line bg-surface px-4 py-3.5 open:pb-5">
            <summary className="cursor-pointer text-[13px] font-bold tracking-[0.12em] text-ink uppercase marker:text-subtle">
              Como foi construído
            </summary>
            <div className="mt-5 grid gap-5">
              <Paragrafos texto={projeto.comoFoiConstruido} />
            </div>
          </details>
        </Reveal>
      </div>

      <Reveal>
        {projeto.url ? (
          <a
            className="mt-12 inline-flex border-b border-line-strong text-sm font-semibold text-ink transition-colors hover:border-ink"
            href={projeto.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            Ver no ar
          </a>
        ) : null}
        <Cta />
      </Reveal>
    </main>
  );
}
