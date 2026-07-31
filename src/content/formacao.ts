import type { Formacao } from "@/lib/types";

export const formacao = [
  {
    curso: "Análise e Desenvolvimento de Sistemas",
    instituicao: "Faculdade SENAI Armando de Arruda Pereira",
    periodo: "jan 2025 · dez 2026",
    detalhe:
      "Banco de dados, engenharia de software, frontend, backend, redes, ciência de dados e inteligência artificial.",
  },
] satisfies Formacao[];

export const idiomas = ["Português, nativo", "Inglês, básico"] as const;
