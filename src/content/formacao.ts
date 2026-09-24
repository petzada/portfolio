import type { Formacao } from "@/lib/types";

export const formacao = [
  {
    curso: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    instituicao: "Faculdade SENAI Armando de Arruda Pereira",
    periodo: "jan 2025 · dez 2026",
    detalhe:
      "Banco de dados, engenharia de software, frontend, backend, redes, ciência de dados e inteligência artificial.",
  },
] satisfies Formacao[];

export const formacaoComplementar = [
  { curso: "Agentes Autônomos", instituicao: "FIAP", periodo: "set 2026" },
  {
    curso: "Gestão de Infraestrutura de TI",
    instituicao: "FIAP",
    periodo: "set 2026",
  },
  { curso: "Engenharia de Software", instituicao: "FIAP", periodo: "ago 2026" },
  { curso: "Lógica de Programação", instituicao: "SENAI", periodo: "fev 2025" },
] satisfies Formacao[];

export const idiomas = ["Português, nativo", "Inglês, básico (A2)"] as const;
