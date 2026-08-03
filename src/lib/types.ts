import type { StaticImageData } from "next/image";

export type Status = "no-ar" | "em-uso" | "demo";

export interface Captura {
  src: StaticImageData;
  alt: string;
  legenda?: string;
}

export interface Projeto {
  slug: string;
  nome: string;
  frase: string;
  status: Status;
  url?: string;
  stack: string[];
  capa: Captura;
  apoio: [Captura, Captura];
  oQueE: string;
  comoFunciona: string;
  comoFoiConstruido: string;
}

export interface Emprego {
  org: string;
  cargo: string;
  periodo: string;
  atual: boolean;
  descricao: string[];
}

export interface Formacao {
  curso: string;
  instituicao: string;
  periodo: string;
  detalhe?: string;
}
