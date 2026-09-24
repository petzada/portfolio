import type { Emprego } from "@/lib/types";

export const trajetoria = [
  {
    org: "Ceremony",
    cargo: "Fundador e desenvolvedor do produto",
    periodo: "jul 2026 · atual",
    atual: true,
    descricao: [
      "Concepção e desenvolvimento full stack, da definição do escopo à implantação em produção",
      "Decisões de produto, UX e onboarding, com evolução baseada no uso real",
      "Integração de pagamentos por PIX, com cobrança de taxa e repasse validados com transações reais",
      "Atendimento aos usuários",
    ],
  },
  {
    org: "Silcon Sustech Ecosystem",
    cargo: "Assistente de Implantação",
    periodo: "dez 2024 · atual",
    atual: true,
    descricao: [
      "Responsável pelas atividades de TI no almoxarifado da empresa",
      "Desenvolvimento de softwares sob demanda para soluções operacionais, como o Silcon Estoque",
      "Apoio a colaboradores com demandas internas de TI",
      "Controle de estoque e reposição para a operação industrial e logística, organização e distribuição de insumos e relatórios de custos para a supervisão",
    ],
  },
] satisfies Emprego[];
