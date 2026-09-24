import type { Projeto } from "@/lib/types";

import ceremonyApoio1 from "./img/ceremony-apoio-1.png";
import ceremonyApoio2 from "./img/ceremony-apoio-2.png";
import ceremonyCapa from "./img/ceremony-capa.png";

export const ceremony = {
  slug: "ceremony",
  nome: "Ceremony",
  frase:
    "SaaS de sites de casamento que fundei e desenvolvi sozinho: convite, confirmação de presença e presentes por PIX. Mais de 200 casais nos dois primeiros meses, sem mídia paga.",
  status: "no-ar",
  url: "https://ceremony.com.br",
  stack: ["Next.js", "TypeScript", "PostgreSQL", "APIs PIX"],
  capa: {
    src: ceremonyCapa,
    alt: "Página inicial do Ceremony com a chamada para criar o site de casamento",
  },
  apoio: [
    {
      src: ceremonyApoio1,
      alt: "Lista de presentes do Ceremony, com as listas curadas por categoria",
    },
    {
      src: ceremonyApoio2,
      alt: "Painel do casal no Ceremony, com o progresso de montagem do site",
    },
  ],
  oQueE: `O casal monta e publica um site com convite, confirmação de presença e lista de presentes, e recebe os presentes por PIX na própria conta. Cuidei de tudo sozinho, da pesquisa ao pós-deploy.

Antes da primeira linha de código, passei horas estudando os concorrentes e as críticas dos usuários deles. O mercado tem plataformas grandes, com milhares de usuários e anos de reputação. Como fundador solo, a resposta foi uma oferta mais agressiva: publicar o site não custa nada, e a plataforma se sustenta por uma taxa sobre os presentes recebidos. O plano gratuito traz o casal; a taxa sobre os presentes é o modelo de receita.

Lancei em julho de 2026. Os mais de 200 casais dos dois primeiros meses criaram e publicaram o site, enviam convites e recebem presentes pela plataforma, e todos chegaram de forma orgânica. Os fluxos de pagamento, cobrança de taxa e repasse foram validados com transações reais.`,
  comoFunciona: `O casal se cadastra, monta o site e publica num endereço próprio, personalizado.

Os presentes vêm de um catálogo curado pela plataforma. O casal escolhe as categorias que fazem sentido e oculta o que não quer, ou podem cadastrar seus próprios presentes personalizados. Cada convidado paga o valor integral de um presente, sem cotas divididas.

Para receber, o casal cadastra nome, telefone e chave PIX, o que gera uma subconta no provedor de pagamento. O saldo fica disponível assim que o pagamento é confirmado, e o saque cai em dois dias úteis.

A confirmação de presença é aberta: o convidado se confirma sozinho pelo site, sem lista prévia. O painel do casal reúne presentes recebidos, confirmações e conta.

O atendimento aos casais é feito por mim. O que chega pelo suporte vira ajuste de produto: a criação, a personalização e a gestão do site foram simplificadas a partir do uso real.`,
  comoFoiConstruido: `Aplicação Next.js 16 com App Router, React 19 com Server Components e TypeScript em modo estrito, estilizada com Tailwind CSS. O servidor roda em Node.js.

A persistência é PostgreSQL, com schema versionado em migrations e políticas de acesso aplicadas no próprio banco por Row Level Security. Autenticação com sessão validada no servidor.

A camada de integração usa APIs REST e route handlers, incluindo recebimento de webhooks com verificação de assinatura antes de qualquer escrita, rotinas agendadas e envio de e-mail transacional. Upload de imagem por URL pré-assinada em armazenamento de objetos, com processamento no cliente antes do envio.

Em produção há monitoramento de erros e de sessões. A suíte cobre testes unitários, de integração e end-to-end em navegador, com verificação automatizada do ambiente após cada deploy, em pipeline de CI/CD.

Desenvolvi com IA generativa como ferramenta de produtividade, principalmente Cursor, Codex e Claude Code. As decisões de arquitetura, os testes e a revisão do que vai para produção são meus.

Stack: Next.js, React, TypeScript, Node.js, PostgreSQL, SQL, APIs REST, Webhooks, Tailwind CSS, Vitest, Playwright e Git.`,
} satisfies Projeto;
