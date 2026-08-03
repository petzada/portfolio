import type { Projeto } from "@/lib/types";

import evoluteamApoio1 from "./img/evoluteam-apoio-1.png";
import evoluteamApoio2 from "./img/evoluteam-apoio-2.png";
import evoluteamCapa from "./img/evoluteam-capa.png";

export const evoluteam = {
  slug: "evoluteam",
  nome: "Evoluteam",
  frase:
    "Plataforma de apoio a RH: avaliação de desempenho e PDI, fora da planilha compartilhada.",
  status: "demo",
  stack: ["Next.js", "TypeScript", "PostgreSQL"],
  capa: {
    src: evoluteamCapa,
    alt: "Dashboard do Evoluteam com indicadores de gestão de pessoas",
  },
  apoio: [
    {
      src: evoluteamApoio1,
      alt: "Ciclo de avaliação do Evoluteam com o progresso de autoavaliação e avaliação do gestor",
    },
    {
      src: evoluteamApoio2,
      alt: "Relatórios de recrutamento do Evoluteam com funil de conversão e tempo por etapa",
    },
  ],
  oQueE: `Aplicação web de gestão de pessoas para empresas que ainda fazem avaliação de desempenho no manual, com formulário solto e planilha compartilhada.

Reúne num lugar só a estrutura da empresa, os ciclos de avaliação, o feedback contínuo, os planos de desenvolvimento individual e o acompanhamento de indicadores.`,
  comoFunciona: `A empresa cadastra unidades, departamentos, cargos e competências, e a partir daí registra os colaboradores, cada um com gestor responsável e nível. A entrada de uma pessoa no sistema acontece por convite enviado no e-mail dela.

O acesso é dividido em quatro perfis. RH enxerga tudo e configura a empresa. O gestor enxerga seus liderados. O colaborador enxerga apenas o próprio histórico. A diretoria vê os dashboards consolidados sem operar o sistema.

O RH abre um ciclo de avaliação. Dentro dele, cada colaborador responde a autoavaliação enquanto o gestor responde a dele, e o resultado individual nasce da comparação entre as duas leituras. Fora dos ciclos, gestores registram feedback a qualquer momento, o que impede que o único registro sobre uma pessoa seja o da avaliação anual.

O que sai da avaliação vira um plano de desenvolvimento individual, com ações e acompanhamento. Há ainda um módulo de recrutamento, com vagas, candidatos, etapas de processo e relatórios.`,
  comoFoiConstruido: `Aplicação Next.js 16 com App Router, React 19 com Server Components e Server Actions, TypeScript e Tailwind CSS. Servidor em Node.js.

O banco é PostgreSQL com arquitetura multi-tenant: os dados de todas as empresas convivem no mesmo banco, isolados por Row Level Security. É o requisito que define um sistema assim, porque nenhuma consulta pode atravessar de uma empresa para outra, por acidente ou por má-fé. Sobre esse isolamento roda um controle de permissão por papel, com quatro níveis de acesso.

A modelagem cobre empresas, unidades, departamentos, cargos, competências, colaboradores, ciclos de avaliação, respostas, feedbacks, planos de desenvolvimento e processos seletivos. Formulários com validação por schema tipado, listagens com ordenação e filtro em tabela, reordenação por arrastar e soltar, e convite de usuário por e-mail com token de uso único. Testes automatizados cobrem as regras de acesso e o fluxo de avaliação.

Stack: Next.js, React, TypeScript, Node.js, PostgreSQL, SQL, multi-tenant, RBAC, APIs REST, Tailwind CSS, Vitest e Git.`,
} satisfies Projeto;
