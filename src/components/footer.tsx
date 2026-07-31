import { perfil } from "@/content/perfil";

import { Reveal } from "./reveal";

const links = [
  { label: "WhatsApp", href: perfil.links.whatsapp, external: true },
  { label: "LinkedIn", href: perfil.links.linkedin, external: true },
  { label: "GitHub", href: perfil.links.github, external: true },
  { label: "E-mail", href: perfil.links.email, external: false },
] as const;

export function Footer() {
  return (
    <footer className="mx-auto mt-28 max-w-[800px] px-5 pb-24 sm:px-6 sm:pb-28">
      <Reveal className="flex flex-wrap items-baseline gap-x-7 gap-y-4">
        <nav
          aria-label="Links do rodapé"
          className="flex flex-wrap gap-x-5 gap-y-2"
        >
          {links.map((link) => (
            <a
              className="border-b border-line-strong pb-px text-sm font-medium [overflow-wrap:anywhere] text-ink transition-colors hover:border-ink"
              href={link.href}
              key={link.label}
              rel={link.external ? "noopener noreferrer" : undefined}
              target={link.external ? "_blank" : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            className="border-b border-line-strong pb-px text-sm font-medium text-ink transition-colors hover:border-ink"
            download
            href={perfil.links.curriculo}
          >
            Currículo
          </a>
        </nav>
        <p className="text-xs text-subtle sm:ml-auto">
          Marcio Petigrosso · Mauá, SP · 2026
        </p>
      </Reveal>
    </footer>
  );
}
