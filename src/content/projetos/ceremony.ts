import type { Projeto } from "@/lib/types";

import ceremonyApoio1 from "./img/ceremony-apoio-1.png";
import ceremonyApoio2 from "./img/ceremony-apoio-2.png";
import ceremonyCapa from "./img/ceremony-capa.png";

export const ceremony = {
  slug: "ceremony",
  nome: "Ceremony",
  frase:
    "Os convidados presenteiam por PIX e o casal recebe direto, sem plataforma segurando o dinheiro.",
  status: "no-ar",
  url: "https://ceremony.com.br",
  stack: ["Next.js", "TypeScript", "PIX"],
  capa: {
    src: ceremonyCapa,
    alt: "Lista de presentes do Ceremony",
  },
  apoio: [
    {
      src: ceremonyApoio1,
      alt: "Fluxo de presente do Ceremony",
    },
    {
      src: ceremonyApoio2,
      alt: "Painel do casal no Ceremony",
    },
  ],
  oQueE: `Plataforma de sites de casamento. O casal monta e publica um site com convite, confirmação de presença e lista de presentes, e recebe os presentes por PIX na própria conta.

O modelo é freemium: publicar não custa nada, e a plataforma se sustenta por uma taxa sobre os presentes recebidos. Cada usuário tem um site e pode receber seus presentes criativos ou lista selecionada em PIX.`,
  comoFunciona: `O casal se cadastra, monta o site e publica num endereço próprio. Depois de publicado, qualquer edição entra no ar direto, sem precisar republicar.

Os presentes vêm de um catálogo curado pela plataforma. O casal escolhe as categorias que fazem sentido e oculta o que não quer, sem precisar cadastrar item nem definir preço. Cada convidado paga o valor integral de um presente, sem cotas divididas.

Para receber, o casal cadastra nome, telefone e chave PIX, o que gera uma subconta no provedor de pagamento. O saldo fica disponível assim que o pagamento é confirmado, e o saque cai em dois dias úteis.

A confirmação de presença é aberta: o convidado se confirma sozinho pelo site, sem lista prévia. O painel do casal reúne presentes recebidos, confirmações e conta.

O site tem prazo de vida e expira sessenta dias depois da data do casamento. Se a data muda, a expiração acompanha sozinha.`,
  comoFoiConstruido: `Aplicação Next.js 16 com App Router, React 19 com Server Components e TypeScript em modo estrito, estilizada com Tailwind CSS. O servidor roda em Node.js.

A persistência é PostgreSQL, com schema versionado em migrations e políticas de acesso aplicadas no próprio banco por Row Level Security. Autenticação com sessão validada no servidor.

A camada de integração usa APIs REST e route handlers, incluindo recebimento de webhooks com verificação de assinatura antes de qualquer escrita, rotinas agendadas e envio de e-mail transacional. Upload de imagem por URL pré-assinada em armazenamento de objetos, com processamento no cliente antes do envio.

Em produção há monitoramento de erros e de sessões. A suíte cobre testes unitários, de integração e end-to-end em navegador, com verificação automatizada do ambiente após cada deploy, em pipeline de CI/CD.

Stack: Next.js, React, TypeScript, Node.js, PostgreSQL, SQL, APIs REST, Webhooks, Tailwind CSS, Vitest, Playwright e Git.`,
} satisfies Projeto;
