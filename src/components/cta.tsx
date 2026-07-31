import { perfil } from "@/content/perfil";

export function Cta() {
  return (
    <section className="mt-16 rounded-media border border-line bg-surface p-5 sm:p-7">
      <h2 className="font-display text-lg leading-tight font-bold uppercase">
        Tem um processo que ainda roda na planilha?
      </h2>
      <p className="mt-3 text-sm text-muted">
        Me conte o que trava hoje. A primeira conversa é sem compromisso.
      </p>
      <a
        className="mt-5 inline-flex rounded-full border border-ink bg-ink px-4 py-[9px] text-[13px] font-semibold whitespace-nowrap text-canvas transition-opacity hover:opacity-85 active:translate-y-px"
        href={perfil.links.whatsapp}
        rel="noopener noreferrer"
        target="_blank"
      >
        Pedir um orçamento
      </a>
    </section>
  );
}
