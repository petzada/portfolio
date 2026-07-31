import { ceremony } from "./ceremony";
import { evoluteam } from "./evoluteam";
import { silcon } from "./silcon";
import type { Projeto } from "@/lib/types";

export const projetos: Projeto[] = [ceremony, silcon, evoluteam];

export function buscarProjeto(slug: string) {
  return projetos.find((projeto) => projeto.slug === slug);
}
