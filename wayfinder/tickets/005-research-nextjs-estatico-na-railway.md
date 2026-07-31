---
id: 005
title: Research — Next.js estático na Railway
type: research
mode: AFK
status: closed
assignee: agente-research-railway (Sonnet)
blocked_by: []
---

## Question

Como se serve um site Next.js estático na Railway, o que custa, e a Railway é de fato a escolha certa aqui?

Railway está fixada como restrição pelo autor, e segue como padrão. Mas Railway é uma plataforma de containers com cobrança por consumo, enquanto um portfólio estático é o caso de uso canônico de plataformas de borda com plano gratuito. A decisão é do Marcio; este ticket existe para que ela seja tomada com números na mão, não por inércia.

Levantar, com fontes datadas (a documentação de todas essas plataformas muda rápido — verificar, não confiar em memória):

1. **Modos de deploy na Railway para Next.js** — Nixpacks versus Dockerfile; `output: 'export'` servido por um servidor estático versus `output: 'standalone'` rodando o servidor Next. Qual é o caminho suportado e menos frágil.
2. **Custo real** — modelo de cobrança atual da Railway, se há tier gratuito ou crédito, e o que um site de portfólio de baixo tráfego custa por mês. Incluir o custo de um serviço que fica ocioso a maior parte do tempo, e se há sleep/wake e qual a latência do primeiro acesso depois de ocioso (isso importa: o lead abre o link uma vez).
3. **Domínio próprio e HTTPS** — como se aponta domínio custom, se o certificado é automático, requisitos de DNS.
4. **Imagens** — se o Image Optimization do Next funciona no modo escolhido, ou se exige `unoptimized: true`. Alimenta a névoa de performance no mapa.
5. **CI/CD** — deploy automático a partir do GitHub, previews de branch, tempo típico de build.
6. **Comparação honesta** — mesma tabela para Vercel, Cloudflare Pages e GitHub Pages: custo, domínio custom, HTTPS, esforço de configuração, e o que se perde ao sair da Railway. Fechar com uma recomendação explícita e o motivo.

Registrar as descobertas em `wayfinder/assets/` e apontar daqui.

## Resolution

Railway serve, com uma decisão técnica específica: usar `output: "standalone"` (servidor Next real em container) em vez de `output: 'export'`. O export estático puro não é o caminho documentado pela Railway e tem histórico relatado de quebrar com `next start`; `standalone` é o caminho suportado oficialmente e resolve de brinde a otimização de imagem do `next/image` sem precisar de `unoptimized: true`.

Custo real esperado: **$5/mês fixos** (plano Hobby — o Free de $1/mês de crédito não sustenta um serviço always-on). O sleep/wake ("App Sleeping") existe mas está gated/experimental e a própria Railway desaconselha para produção; não vale a pena tentar usá-lo para economizar, já que os $5/mês são cobrados de qualquer forma independente de uso. Sem sleep, não há cold-start a temer no primeiro acesso do lead.

Domínio próprio + HTTPS: trivial — CNAME + TXT, certificado Let's Encrypt automático em ~1h, sem custo adicional na Railway.

Comparado com Vercel (grátis para uso pessoal, nativo para Next.js) e GitHub Pages (grátis, mais fricção), Railway é a opção **mais cara das quatro em termos absolutos ($5/mês vs $0)**, mas não é irracional dado que a restrição de manter Railway já foi fixada pelo autor — o custo é previsível e baixo, e o caminho `standalone` evita as gambiarras de imagem que as alternativas estáticas (Cloudflare Pages, GitHub Pages, export puro) exigem.

Relatório completo: [`wayfinder/assets/005-railway-deploy-research.md`](../assets/005-railway-deploy-research.md).
