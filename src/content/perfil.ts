const whatsappNumero = "5511974815782";
const whatsappMensagem =
  "Oi Marcio, vi seu portfólio e queria falar sobre um projeto.";

export const perfil = {
  nome: "Marcio Petigrosso",
  nomeDisplay: ["MARCIO", "PETIGROSSO"],
  cargo: "Desenvolvedor full stack",
  local: "Mauá, SP",
  email: "marciopetigrosso@gmail.com",
  apresentacao:
    "Construo aplicações web completas, do banco de dados ao deploy, com Next.js, TypeScript, Node e PostgreSQL. Já entreguei uma plataforma de pagamento por PIX, um sistema de estoque industrial e uma ferramenta de avaliação de desempenho. Setores diferentes, mesmo trabalho: entender o problema e devolver ele resolvido.",
  sobre: [
    "Sou desenvolvedor full stack. Meu trabalho é pegar um problema de negócio e devolver ele resolvido em software.",
    "Cuido do ciclo inteiro: modelo os dados, escrevo o servidor, construo a interface e coloco no ar. Não entrego uma parte e passo o resto adiante.",
    "A parte que decide se um sistema funciona costuma ser a que ninguém vê. No Ceremony, o pagamento por PIX entra por webhook assinado do provedor, com monitoramento de erro rodando em produção. No Evoluteam, cada empresa tem os próprios dados isolados dentro do mesmo banco. No Silcon, a atualização de saldo do estoque vive em gatilhos no Postgres e não na aplicação, para que nenhuma movimentação registrada consiga deixar o estoque inconsistente.",
    "Escrevo teste onde errar sai caro, de unidade a ponta a ponta, e mantenho verificação automática contra o ambiente de produção. Sistema que mexe com dinheiro ou com o estoque de uma operação não pode quebrar em silêncio.",
    "Os três projetos são de setores que não conversam entre si, e isso é de propósito. O que se repete não é o domínio, é o método: entender como o processo funciona de verdade, modelar os dados em cima disso e só então desenhar a tela. Software que ignora essa ordem vira o sistema que ninguém usa.",
    "Antes de programar profissionalmente atuei em operação e administração, o que me deixou confortável para sentar com quem vai usar o sistema, e não só com quem vai mantê-lo.",
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
  ],
} as const;

export const siteUrl = "https://petigrosso.com";
