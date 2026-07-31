import { Footer } from "@/components/footer";
import { Formacao } from "@/components/formacao";
import { Hero } from "@/components/hero";
import { ProjetosGrid } from "@/components/projetos-grid";
import { Sobre } from "@/components/sobre";
import { StackCarousel } from "@/components/stack-carousel";
import { Trajetoria } from "@/components/trajetoria";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjetosGrid />
      <StackCarousel />
      <Sobre />
      <Trajetoria />
      <Formacao />
      <Footer />
    </main>
  );
}
