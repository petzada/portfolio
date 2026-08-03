import type { Projeto } from "@/lib/types";

import silconApoio1 from "./img/silcon-apoio-1.png";
import silconApoio2 from "./img/silcon-apoio-2.png";
import silconCapa from "./img/silcon-capa.png";

export const silcon = {
  slug: "silcon",
  nome: "Silcon Estoque",
  frase: "O almoxarifado sabe o que está acabando antes de faltar na linha.",
  status: "em-uso",
  stack: ["Next.js", "TypeScript", "PostgreSQL"],
  capa: {
    src: silconCapa,
    alt: "Dashboard do Silcon Estoque",
  },
  apoio: [
    {
      src: silconApoio1,
      alt: "Fila de reposição do Silcon Estoque",
    },
    {
      src: silconApoio2,
      alt: "Histórico de movimentações do Silcon Estoque",
    },
  ],
  oQueE: `Sistema de gestão do estoque de materiais internos da Silcon Ambiental, empresa de gestão de resíduos hospitalares. Controla catálogo de produtos, movimentações, pedidos de compra e o vestiário dos colaboradores.

Está em uso na operação, com as pessoas do almoxarifado usando todo dia.`,
  comoFunciona: `Cada produto tem estoque mínimo e máximo, e o saldo o classifica em uma de três faixas: estável, crítico quando cai abaixo do mínimo, ou zerado. Produtos críticos e zerados entram numa fila de reposição ordenada por urgência.

A partir dessa fila o sistema gera dois tipos de pedido de compra: o emergencial, para o que zerou, e o de reposição mensal, que repõe cada item até o estoque máximo. Os dois saem em PDF, prontos para enviar ao fornecedor.

Entradas e saídas são registradas com nota fiscal e com o setor que solicitou. O sistema guarda o histórico de preço de cada produto e compara o valor pago com o custo cadastrado, avisando quando o preço sobe quinze por cento ou mais. É o alerta que evita pagar reajuste sem perceber.

O dashboard mostra entradas e saídas em reais, itens críticos, estoque zerado, gasto por setor e os produtos mais consumidos, com filtro por mês, ano e setor.

Um módulo à parte cuida do vestiário: armários numerados, de uniforme ou de vestiário, com no máximo um ocupante por armário.`,
  comoFoiConstruido: `Aplicação Next.js 16 com App Router, React 19 e TypeScript, estilizada com Tailwind CSS. Servidor em Node.js.

O banco é PostgreSQL, e a decisão central do projeto está nele: a atualização de saldo não vive na aplicação, e sim em gatilhos e funções SQL disparados pela própria movimentação. Isso garante que nenhuma entrada ou saída consiga deixar o estoque inconsistente, venha ela da interface, de uma importação em massa ou de uma correção manual. O controle de acesso também é aplicado no banco, por Row Level Security.

A modelagem cobre produtos, categorias, setores, colaboradores, movimentações e ocupação de armários, com integridade referencial e exclusão em cascata. Validação de entrada com schema tipado, importação de catálogo por CSV e geração de relatórios em PDF no cliente.

Stack: Next.js, React, TypeScript, Node.js, PostgreSQL, SQL, triggers e functions, APIs REST, Tailwind CSS e Git.`,
} satisfies Projeto;
