interface CtaProps {
  titulo: string;
  texto: string;
  acao: string;
  href: string;
}

export function Cta({ titulo, texto, acao, href }: CtaProps) {
  const externo = href.startsWith("http");

  return (
    <section className="mt-16 rounded-media border border-line bg-surface p-5 sm:p-7">
      <h2 className="font-display text-lg leading-tight font-bold uppercase">
        {titulo}
      </h2>
      <p className="mt-3 text-sm text-muted">{texto}</p>
      <a
        className="mt-5 inline-flex rounded-full border border-ink bg-ink px-4 py-[9px] text-[13px] font-semibold whitespace-nowrap text-canvas transition-opacity hover:opacity-85 active:translate-y-px"
        href={href}
        rel={externo ? "noopener noreferrer" : undefined}
        target={externo ? "_blank" : undefined}
      >
        {acao}
      </a>
    </section>
  );
}
