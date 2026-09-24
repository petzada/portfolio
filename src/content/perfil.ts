const whatsappNumero = "5511974815782";
const whatsappMensagem =
  "Oi Marcio, vi seu portfólio e queria falar sobre um projeto.";

export const perfil = {
  nome: "Marcio Petigrosso",
  nomeDisplay: ["MARCIO", "PETIGROSSO"],
  cargo: "Product Software Engineer",
  local: "Mauá, SP",
  email: "marciopetigrosso@gmail.com",
  apresentacao:
    "Construo produtos de software do problema ao deploy: pesquiso o mercado, defino o escopo, desenho a experiência, programo, testo e atendo quem usa. Fundei e desenvolvi sozinho o Ceremony, um SaaS de sites de casamento que chegou a mais de 200 casais nos dois primeiros meses, sem mídia paga. Uso IA generativa como ferramenta de trabalho em todo o processo.",
  sobre: [
    "Sou Product Software Engineer. Meu trabalho começa antes do código: entender quem usa, o que trava e o que vale construir primeiro.",
    "Comecei no telemarketing, onde aprendi a ouvir cliente. Depois fui para a operação, cuidando de estoque, compras, custos e relatórios para a supervisão. Em 2025 entrei em Análise e Desenvolvimento de Sistemas no SENAI e passei a transformar em software os problemas que via no trabalho.",
    "O Silcon veio daí. O almoxarifado onde trabalho era controlado em planilhas de Excel, e construí o sistema que hoje a operação usa todo dia no lugar delas. Como assistente de implantação, cuido do TI do setor e continuo evoluindo o sistema.",
    "Depois veio o Evoluteam, uma plataforma de gestão de desempenho para uma empresa de consultoria. Nele levei a arquitetura mais longe: várias empresas no mesmo banco, cada uma com os dados isolados, e quatro perfis de acesso.",
    "Para a Copa do Mundo de 2026, construí uma esteira de automação de posts para o X: um agente com Gemini Flash, integrado pelo Vercel AI SDK, que gera os posts a partir do contexto que recebe. Serve para qualquer tema, basta trocar o contexto.",
    "Em julho de 2026 lancei o Ceremony, meu produto mais completo. Estudei os concorrentes e as críticas dos usuários deles, defini uma oferta gratuita para competir com plataformas grandes e construí sozinho do banco de dados ao PIX, com cobrança e repasse validados com dinheiro real. Também faço o atendimento aos casais, e o que eles me dizem vira melhoria no produto.",
    "Em todos eles, a parte que decide se o produto funciona costuma ser a que ninguém vê: o pagamento do Ceremony entra por webhook assinado, e o saldo do Silcon é atualizado por gatilhos no Postgres. Escrevo teste onde errar sai caro. Uso IA generativa em todo o ciclo, principalmente Cursor, Codex e Claude Code, mas quem responde pelo que vai para produção sou eu.",
    "Hoje sigo com o Ceremony e com o trabalho na Silcon, concluo a graduação em dezembro de 2026 e aprofundo o estudo de agentes de IA, como no curso de Agentes Autônomos da FIAP.",
  ],
  links: {
    whatsapp: `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(whatsappMensagem)}`,
    linkedin: "https://www.linkedin.com/in/petigrosso/",
    github: "https://github.com/petzada",
    curriculo: "/curriculo-marcio-petigrosso.pdf",
    email: "mailto:marciopetigrosso@gmail.com",
  },
  stack: [
    { nome: "Next.js", icone: "nextdotjs" },
    { nome: "React", icone: "react" },
    { nome: "TypeScript", icone: "typescript" },
    { nome: "Tailwind CSS", icone: "tailwindcss" },
    { nome: "Node.js", icone: "nodedotjs" },
    { nome: "PostgreSQL", icone: "postgresql" },
    { nome: "Supabase", icone: "supabase" },
    { nome: "Zod", icone: "zod" },
    { nome: "PIX", icone: "pix" },
    { nome: "Vitest", icone: "vitest" },
    { nome: "Playwright", icone: null },
    { nome: "Sentry", icone: "sentry" },
    { nome: "Resend", icone: "resend" },
    { nome: "Git", icone: "git" },
    { nome: "Railway", icone: "railway" },
    { nome: "Cursor", icone: "cursor" },
    { nome: "Codex", icone: "openai" },
    { nome: "Claude Code", icone: "claude" },
    { nome: "Vercel AI SDK", icone: "vercel" },
    { nome: "Gemini", icone: "googlegemini" },
  ],
} as const;

export const siteUrl = "https://petigrosso.com";
