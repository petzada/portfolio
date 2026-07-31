import type { Emprego } from "@/lib/types";

export const trajetoria = [
  {
    org: "Silcon Sustech Ecosystem",
    cargo: "Assistente administrativo",
    periodo: "dez 2024 · atual",
    atual: true,
    descricao:
      "Compras, estoque e custos de uma operação industrial. Foi o problema daqui que virou o sistema de almoxarifado que está em uso hoje.",
  },
  {
    org: "Gerenciamento Amb Tech Lix",
    cargo: "Assistente operacional",
    periodo: "mai 2024 · set 2024",
    atual: false,
    descricao:
      "Cronogramas, equipe de apoio e otimização de fluxos logísticos para reduzir custo de coleta.",
  },
] satisfies Emprego[];
