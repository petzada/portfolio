import type { Projeto } from "@/lib/types";

import silconApoio1 from "./img/silcon-apoio-1.png";
import silconApoio2 from "./img/silcon-apoio-2.png";
import silconCapa from "./img/silcon-capa.png";

export const silcon = {
  slug: "silcon",
  nome: "Silcon Estoque",
  frase:
    "Sistema de estoque que substituiu as planilhas do almoxarifado onde trabalho e está em uso diário na operação.",
  status: "em-uso",
  stack: ["Next.js", "TypeScript", "PostgreSQL"],
  capa: {
    src: silconCapa,
    alt: "Dashboard do Silcon Estoque com consumo, compras e movimentações do período",
  },
  apoio: [
    {
      src: silconApoio1,
      alt: "Fila de reposição do Silcon Estoque, com os materiais abaixo do estoque mínimo",
    },
    {
      src: silconApoio2,
      alt: "Histórico de movimentações do Silcon Estoque, com entradas e saídas de material",
    },
  ],
  oQueE: `Sistema de gestão do almoxarifado da Silcon Ambiental, empresa de gestão de resíduos hospitalares. Controla o material que a operação consome: EPIs, uniformes, produtos de copa e limpeza.

O problema era meu antes de ser do software. Quando assumi o almoxarifado, o controle vivia em planilhas de Excel, e três perguntas não tinham resposta: o que está acabando, quanto cada setor gastou no mês e se o fornecedor subiu o preço. Construí o sistema para responder as três em segundos.`,
  comoFunciona: `O dashboard tem duas abas. Operação mostra o que pede atenção hoje: itens zerados e críticos, pedidos em atraso e a cobertura em dias, que usa o consumo dos últimos 90 dias para dizer quanto tempo o saldo ainda dura. É o número que antecipa a falta em vez de anunciá-la. Análise compara consumo e compras em reais com o período anterior, por categoria, setor e produto.

Cada saída é lançada com o colaborador que retirou o material e herda o setor dele. É isso que permite perguntar quanto a Produção gastou de EPI.

A compra passa por quatro etapas: a fila de reposição, ordenada por urgência; a sugestão de compra, emergencial ou mensal, sempre repondo até o estoque máximo; o acompanhamento de cada pedido até o recebimento; e a variação de preço entre compras, que avisa quando um item sobe acima de um limite ajustável.

Um módulo à parte cuida do vestiário: armários de uniforme e de vestiário, com no máximo um ocupante por armário.`,
  comoFoiConstruido: `A regra de negócio mora no banco. O saldo é atualizado por gatilhos no PostgreSQL, e os indicadores do dashboard são funções SQL. Nenhuma movimentação deixa o estoque inconsistente, venha da tela, de uma importação ou de uma correção.

O custo de um produto só muda com entrada que tem nota fiscal e valor unitário. É decisão de projeto: sem isso, o histórico de preços vira ruído. Essa e as outras decisões estruturais estão documentadas com o motivo, junto de um glossário que fixa o vocabulário do domínio.

Login individual, com acesso ao banco liberado apenas para sessão autenticada.

Stack: Next.js, React, TypeScript, PostgreSQL, Supabase, SQL, Tailwind CSS e Git.`,
} satisfies Projeto;
