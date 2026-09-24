import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Formacao } from "@/components/formacao";
import { Hero } from "@/components/hero";
import { ProjetosGrid } from "@/components/projetos-grid";
import { Reveal } from "@/components/reveal";
import { Sobre } from "@/components/sobre";
import { StackCarousel } from "@/components/stack-carousel";
import { Trajetoria } from "@/components/trajetoria";
import { perfil } from "@/content/perfil";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjetosGrid />
      <StackCarousel />
      <Sobre />
      <Trajetoria />
      <Formacao />
      <Reveal className="mx-auto max-w-[800px] px-5 sm:px-6">
        <Cta
          acao="Falar sobre um projeto"
          href={perfil.links.whatsapp}
          texto="Também atendo projetos freelance, de sistemas internos a produtos completos. Me conte o problema. A primeira conversa é sem compromisso."
          titulo="Precisa de um produto ou sistema sob medida?"
        />
      </Reveal>
      <Footer />
    </main>
  );
}
