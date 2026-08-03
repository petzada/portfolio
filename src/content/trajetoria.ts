import type { Emprego } from "@/lib/types";

export const trajetoria = [
  {
    org: "Silcon Sustech Ecosystem",
    cargo: "Assistente administrativo",
    periodo: "dez 2024 · atual",
    atual: true,
    descricao: [
      "Responsável pelas atividades de TI no almoxarifado da empresa",
      "Desenvolvimento de softwares sob demanda para soluções operacionais",
      "Apoio a colaboradores com demandas internas de TI",
      "Controle de estoque visando o reabastecimento da operação industrial e logística",
      "Organização e distribuição de insumos e derivados",
      "Análise de despesas e elaboração de relatórios de custos para a supervisão",
      "Solicitação e controle de pedidos de insumos",
      "Controle de contas a pagar (SAP B1)",
    ],
  },
  {
    org: "Gerenciamento Amb Tech Lix",
    cargo: "Assistente de operações",
    periodo: "mai 2024 · set 2024",
    atual: false,
    descricao: [
      "Supervisão de cronogramas e delegação de tarefas para equipe de apoio operacional",
      "Responsável pelas rotinas administrativas (atendimento telefônico, controles de planilhas e relatórios para a supervisão)",
      "Otimização dos fluxos logísticos, visando o aumento da eficiência e a redução de custos",
      "Auxílio no controle das operações logísticas, garantindo o recebimento da demanda, organização das coletas e eficiência operacional",
      "Responsável pela gestão de manutenção preventiva e corretiva da frota de veículos",
      "Controle de documentações de veículos (CRLV, CIV, CIPP, ANTT)",
      "Organização de estoque de peças e insumos para a frota",
    ],
  },
] satisfies Emprego[];
