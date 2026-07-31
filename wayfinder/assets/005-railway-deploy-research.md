---
label: wayfinder:asset
title: Research — Next.js estático na Railway (custo, deploy, comparação)
source_ticket: 005
accessed: 2026-07-31
---

# Next.js estático na Railway — o que custa, como se serve, e se é a escolha certa

Pesquisa feita em 2026-07-31 via busca e leitura direta de documentação. Toda afirmação abaixo tem URL e foi verificada nesta data — onde a fonte não deu número exato, está marcado "não confirmado" em vez de estimado.

---

## 1. Modos de deploy na Railway para Next.js

Existem dois caminhos, e eles **não são equivalentes** em maturidade:

**Caminho suportado e documentado oficialmente para Next.js:** `output: "standalone"` rodando o servidor Next de verdade. O guia oficial da Railway para Next.js (docs.railway.com/guides/nextjs, acessado 2026-07-31) recomenda explicitamente adicionar `output: "standalone"` ao `next.config.ts` e ajustar o `package.json` para `"start": "node .next/standalone/server.js"`. É o caminho de primeira classe: builder Railpack (sucessor do Nixpacks) ou Dockerfile, ambos com suporte direto. Esse guia não menciona `output: 'export'` em nenhum momento.

**Caminho de site estático puro (`output: 'export'`):** não é suportado nativamente para Next.js e é a origem de um problema recorrente relatado na comunidade. Um post no Railway Central Station ("Deployment Crashing Due to 'next start' with output: export in Next.js 14", station.railway.com, acessado 2026-07-31) documenta que rodar `next start` sobre uma pasta gerada por `output: 'export'` quebra o deploy, porque `next start` espera um servidor, não arquivos estáticos. A correção usada pela comunidade é trocar o comando de start por `npx serve@latest out` — ou seja, servir os arquivos com um servidor HTTP genérico, não com o Next.

O builder de arquivos estáticos da própria Railway (Railpack, ver railpack.com/languages/staticfile, acessado 2026-07-31) usa **Caddy** como servidor por baixo dos panos, e detecta um site estático por: arquivo `Staticfile` na raiz, `index.html` na raiz, pasta `public/`, ou a variável de ambiente `RAILPACK_STATIC_FILE_ROOT`. Para servir a saída de um `next export` (pasta `out/`), seria preciso criar um `Staticfile` na raiz do repo apontando `root: out` e `index_fallback: true` (ou setar `RAILPACK_STATIC_FILE_ROOT=out`) — nenhuma dessas convenções é automática para um projeto Next.js "do jeito que ele vem".

**Conclusão do item 1:** o caminho suportado e menos frágil na Railway é `output: "standalone"` (servidor Next real dentro de um container). Servir `output: 'export'` funciona, mas é um caminho não-oficial que exige configuração manual (Staticfile ou troca do comando de start por `serve`) e tem histórico de quebrar silenciosamente quando alguém deixa o `next start` padrão. Isso é uma ironia relevante: a Railway é boa em rodar o **servidor** Next, não em servir a saída **estática** dele — que é exatamente o caso de uso do portfólio.

Fontes: docs.railway.com/guides/nextjs; station.railway.com/questions/deployment-crashing-due-to-next-start-5b078052; railpack.com/languages/staticfile; docs.railway.com/guides/static-hosting (acessados 2026-07-31).

---

## 2. Custo real — o item que mais importa

### Modelo de cobrança atual (docs.railway.com/pricing/plans e railway.com/pricing, acessados 2026-07-31)

| Plano | Mensalidade | Crédito incluso | Limites |
|---|---|---|---|
| Free Trial | $0 (uma vez) | $5, expira em 30 dias | até 2 vCPU / 1GB por serviço, restrição de rede se conta não verificada |
| Free | $0/mês | $1/mês | até 1 vCPU / 0.5GB por serviço, 1 réplica, histórico de log de 3 dias |
| Hobby | $5/mês | $5/mês (não acumula) | até 48 vCPU / 48GB por serviço, 6 réplicas |
| Pro | $20/mês por workspace | $20/mês | até 1.000 vCPU / 1TB |

Consumo além do crédito incluso é cobrado por uso: RAM ~$10/GB/mês (ou $0,00000386/GB-segundo), vCPU ~$20/vCPU/mês, egress $0,05/GB, volumes $0,15/GB/mês.

**Importante:** a Railway não tem mais um "free tier permanente e generoso" no sentido clássico. O plano Free dá só $1/mês de crédito — insuficiente até para um serviço minúsculo rodando o mês inteiro. Na prática, para ter um site com domínio próprio, always-on, o piso realista é o **plano Hobby, $5/mês**, e mesmo aí a mensalidade é cobrada independente de uso ("mesmo que você não use o crédito, você paga os $5" — confirmado em múltiplas fontes secundárias, ex. costbench.com/software/developer-tools/railway, acessado 2026-07-31, e consistente com a estrutura oficial de crédito não-cumulativo).

### Custo esperado para um portfólio de baixo tráfego, ocioso a maior parte do tempo

Um site estático servido por container consome recursos mínimos quando ocioso (pouca CPU, RAM baixa, sem egress relevante). Nesse perfil, o consumo de recursos tende a ficar **dentro do crédito de $5/mês do plano Hobby** — ou seja, o custo mensal esperado é essencially **$5/mês fixo**, sem cobrança adicional, desde que o tráfego permaneça baixo (múltiplas fontes secundárias convergem nisso, ex. servercompass.app e makerkit.dev/pricing-calculator/railway, acessados 2026-07-31 — não são fontes primárias da Railway, mas o cálculo bate com a tabela oficial de preços). Não confirmado com um caso real medido: o valor exato depende de como a Railway mede CPU idle de um container Node/Caddy parado (não há uma calculadora oficial testada por este agente).

### Sleep/wake e latência do primeiro acesso — a pegadinha real

A Railway tem um recurso chamado **App Sleeping / Scale to Zero** (blog.railway.com/p/launch-week-01-scale-to-zero, acessado 2026-07-31), mas com ressalvas importantes:

- É preciso **ativar manualmente** ("Enable App Sleeping" nas configurações do serviço) — não é o comportamento padrão.
- O serviço dorme depois de ~10 minutos **sem tráfego de saída** (outbound). Isso é uma armadilha conceitual: qualquer coisa que gere pacotes de saída (pool de conexão de banco, telemetria, healthcheck, chamada a outro serviço) mantém o serviço acordado mesmo sem visitantes reais. Para um site estático simples isso tende a ser inofensivo, mas é preciso confirmar que nada no build (analytics, fontes remotas, etc.) gera tráfego de saída periódico.
- Latência de wake reportada pela própria Railway: "**menos de 1 segundo** para uma resposta HTTP completa no cold boot", com "algumas centenas de ms de latência" no primeiro request após dormir.
- **A própria Railway desaconselha esse recurso para produção**, recomendando manter ao menos uma instância "Hot N Ready" quando a variância de cold-start não é aceitável.
- No momento da pesquisa, o recurso aparece descrito como disponível para assinantes de "Priority Boarding" — ou seja, **não confirmado que está geralmente disponível para todo usuário Hobby/Pro sem inscrição em programa beta**. Isso precisa ser verificado no painel real da Railway antes de contar com ele.

**Por que isso importa para este caso específico:** o ticket destaca que "o lead abre o link uma vez". Se o serviço estiver dormindo, esse lead pode esperar uma fração de segundo a ~1 segundo extra no primeiro carregamento — tecnicamente tolerável segundo o número da própria Railway, mas é uma variável que **não existe** nas plataformas de borda da comparação abaixo (que não dormem porque não há container para dormir). E como o recurso de sleep parece gated/experimental, o cenário mais realista para um site always-on comum é **não usar sleep** e pagar o consumo mínimo dentro do crédito Hobby — o que devolve ao caso "~$5/mês fixo, sem cold start", que é a expectativa mais segura para planejar.

**Veredito do item 2:** custo esperado realista = **$5/mês** (plano Hobby), sem cold-start se o sleep não for ativado. Se o sleep for ativado para tentar economizar (o que não compensa, já que $5/mês é o piso fixo mesmo com uso zero), a pegadinha é a variância de cold-start e a dependência de o serviço realmente não gerar tráfego de saída em background.

Fontes: docs.railway.com/pricing/plans; railway.com/pricing; blog.railway.com/p/launch-week-01-scale-to-zero; station.railway.com (múltiplas threads sobre sleep); docs.railway.com/reference/pricing/free-trial (todas acessadas 2026-07-31).

---

## 3. Domínio próprio e HTTPS

Confirmado direto na documentação oficial (docs.railway.com/networking/domains/working-with-domains, acessado 2026-07-31):

- Depois de configurar o domínio custom corretamente, a Railway **gera e aplica automaticamente um certificado Let's Encrypt** (ECDSA), válido por 90 dias, renovado automaticamente aos 30 dias restantes.
- Requisitos de DNS: um registro **CNAME** (roteia o tráfego) + um registro **TXT** (verifica a posse do domínio).
- Emissão do certificado costuma ocorrer **dentro de uma hora** depois do DNS propagar.
- Railway **não aceita certificado externo** — só o próprio, provisionado automaticamente.
- Se o domínio estiver atrás do proxy da Cloudflare (nuvem laranja), o modo SSL/TLS da Cloudflare precisa ser "Full", não "Full (Strict)" — "Full (Strict)" quebra.

**Conclusão do item 3:** processo simples e sem custo adicional na Railway em si (o custo é só o registro do domínio, fora do escopo da Railway). Sem pegadinha relevante encontrada além do detalhe de configuração com Cloudflare proxy.

Fontes: docs.railway.com/networking/domains/working-with-domains; docs.railway.com/networking/troubleshooting/ssl (acessadas 2026-07-31).

---

## 4. Otimização de imagem do Next

O comportamento aqui depende inteiramente de qual modo de deploy for escolhido (item 1), e é isso que faz a decisão de deploy alimentar a névoa "estratégia de imagens" do mapa:

- Se o site for servido em **`output: "standalone"`** (caminho suportado pela Railway) — o servidor Next real está de pé, então o **Image Optimization API funciona normalmente** por padrão, sem precisar de `unoptimized: true`. Isso não foi encontrado explicitamente no guia oficial da Railway (que é omisso sobre imagens), mas é uma decorrência direta de rodar o servidor Next completo — que é o mesmo runtime que suporta otimização de imagem em qualquer self-host Node.
- Se o site for servido como **export estático puro** (`output: 'export'`) — a documentação oficial do Next.js (nextjs.org/docs, confirmado via busca, acessado 2026-07-31) é explícita: o loader default do `next/image` depende da Image Optimization API, que **não está disponível** em apps exportados estaticamente. É obrigatório setar `images: { unoptimized: true }` no `next.config.js`, o que desliga o resize/otimização automática — sobra só lazy-loading e prevenção de CLS. Para compensar, existe a lib de terceiros `next-image-export-optimizer` que otimiza as imagens **em build time**, mas é uma dependência extra a manter.

**Conclusão do item 4:** se a Railway for mantida com `output: "standalone"` (o caminho recomendado no item 1), a otimização de imagem do Next funciona sem gambiarra — ponto a favor de standalone sobre export puro na Railway. Se o export estático for escolhido mesmo assim (por simplicidade ou para manter portabilidade futura para uma plataforma de borda), `unoptimized: true` é obrigatório e a compressão de imagem vira responsabilidade de pré-processamento manual — relevante porque o `DESIGN.md` depende pesadamente de qualidade de screenshot.

Fontes: nextjs.org/docs/messages/export-image-api; github.com/Niels-IO/next-image-export-optimizer (acessadas 2026-07-31).

---

## 5. CI/CD

Confirmado via docs.railway.com/guides/preview-deployments-with-pr-environments e blog.railway.com/p/cicd-for-modern-deployment (acessados 2026-07-31):

- **Deploy automático via GitHub:** a Railway monitora o repositório conectado e builda automaticamente a cada push na branch linkada. Zero configuração extra para isso.
- **Preview por PR:** existe o recurso "PR Environments" — a Railway provisiona automaticamente um ambiente temporário e uma URL única por Pull Request aberto, e destrói o ambiente quando o PR é fechado/merged. Para monorepos, existe uma versão "Focused" que só builda os serviços afetados pelos arquivos alterados.
- **Tempo típico de build:** **não confirmado** — nenhuma das fontes consultadas (documentação oficial ou blog da Railway) publica um número de tempo médio de build para um projeto Next.js. Não estimar; depende do tamanho do projeto e cache de dependências.

**Conclusão do item 5:** CI/CD via GitHub é maduro e comparável ao de Vercel/Cloudflare Pages em recursos (deploy automático + preview por PR). Tempo de build real fica como "não confirmado" — só será conhecido rodando de fato.

Fontes: docs.railway.com/guides/preview-deployments-with-pr-environments; blog.railway.com/p/cicd-for-modern-deployment (acessadas 2026-07-31).

---

## 6. Comparação honesta — Railway x Vercel x Cloudflare Pages x GitHub Pages

| Critério | Railway | Vercel | Cloudflare Pages | GitHub Pages |
|---|---|---|---|---|
| **Custo mensal esperado (portfólio baixo tráfego)** | **$5/mês fixo** (plano Hobby; o plano Free de $1/mês de crédito não sustenta um serviço always-on) | **$0** no plano Hobby, para uso pessoal/não-comercial. Limites generosos: 100GB de transferência, 1M invocações de função, 5.000 image transformations/mês | **$0** no plano Free: builds ilimitados até 500/mês, domínios custom, banda "efetivamente ilimitada" para uso legítimo | **$0**, sempre, sem limite de banda razoável documentado como bloqueio |
| **Domínio próprio + HTTPS** | Certificado Let's Encrypt automático via CNAME+TXT, emissão em ~1h | Suportado nativamente, até 50 domínios no Hobby | Suportado nativamente, SSL automático, 100 domínios/projeto no Free (fontes divergem entre 5 e 100 — checar no painel) | Suportado via arquivo CNAME em `public/`, HTTPS automático via Let's Encrypt |
| **Esforço de configuração para Next.js estático** | Requer decisão manual entre `output: "standalone"` (suportado, mas roda container/servidor) ou export + Staticfile/`serve` (funciona mas não é o caminho documentado, tem histórico de quebrar com `next start` default) | Next.js é o framework nativo da empresa que o criou — zero configuração, ambos os modos funcionam de fábrica | Recomendação atual da própria Cloudflare mudou: **não recomenda mais Cloudflare Pages para Next.js**, e sim OpenNext + Cloudflare Workers. `@cloudflare/next-on-pages` (o caminho antigo com Pages) só suporta Edge runtime e tem lacunas de features | Exige export estático puro, criar `.nojekyll` (senão o Jekyll do GitHub ignora a pasta `_next`), e um `CNAME` manual em `public/`. Sem suporte a nada que não seja HTML/CSS/JS estático |
| **Otimização de imagem do Next** | Funciona nativamente só em `output: "standalone"`; em export exige `unoptimized: true` | Funciona nativamente (Image Optimization API é feature própria da Vercel), com cota de 5.000 transformações/mês no Hobby | Não funciona por padrão com Pages; precisa loader customizado apontando pro serviço de transformação de imagem da própria Cloudflare, ou migrar para Workers | Não funciona — exige sempre `unoptimized: true`, sem alternativa de otimização em runtime |
| **CI/CD (deploy automático + preview de PR)** | Sim, deploy automático + PR Environments | Sim — é o padrão-ouro histórico dessa feature | Sim, incluso no Free | Sim, via GitHub Actions, mas é "montado por você", não um produto de preview integrado como os outros três |
| **O que se perde saindo da Railway** | — | Perde-se o hábito de "tudo em containers" que o autor já usa em outros projetos (ex. Sistema Silcon) — Vercel é edge/serverless, não container. Ganha-se: zero custo, zero cold-start, zero decisão de `output` (funciona nos dois modos) | Perde-se suporte de primeira classe a Next.js — a própria Cloudflare hoje empurra para Workers, não Pages, o que torna Pages uma escolha desatualizada para este framework especificamente | Perde-se qualquer coisa que não seja HTML/CSS/JS puro — sem SSR, sem middleware, sem otimização de imagem, sem redirects/rewrites nativos do Next |

### Recomendação explícita

Para o caso descrito — **site estático, baixo tráfego, domínio próprio pago, prova visual de projetos via screenshot** — a escolha tecnicamente mais barata e com menos fricção seria **Vercel** (custo $0 no plano Hobby para uso pessoal, é o próprio criador do Next.js, zero decisão de `output`, otimização de imagem nativa, preview de PR de fábrica) ou, como segunda opção séria, **GitHub Pages** (custo $0, mas sem otimização de imagem e com mais fricção de configuração — `.nojekyll`, export puro obrigatório).

Dito isso, **Railway não é uma escolha absurda aqui, é uma escolha cara por decisão consciente**: ao preço de $5/mês fixos (não $0), ela entrega HTTPS automático, deploy automático, e — se o caminho `output: "standalone"` for usado — otimização de imagem nativa sem gambiarra, o que resolve o item 4 de forma mais limpa que o export estático em qualquer uma das outras três opções que exigem `unoptimized: true`. A "pegadinha" real não é o preço (previsível e baixo: $5/mês), é a **maturidade do caminho estático puro** — se o Marcio quiser manter consistência com a stack de container que já usa no Sistema Silcon, e não se importar com $5/mês fixos por um domínio com certificado automático e zero necessidade de aprender uma segunda plataforma, Railway com `output: "standalone"` é defensável e é o caminho **menos frágil dentro da própria Railway**. Se o critério for estritamente custo e simplicidade máxima para um site 100% estático, Vercel entrega o mesmo resultado visual por $0/mês.

Como a restrição de manter Railway já foi fixada pelo autor (`map.md`, restrição dura), a recomendação prática dentro dessa restrição é: **usar `output: "standalone"` na Railway, não `output: 'export'`** — evita o histórico de quebra com `next start`, mantém a otimização de imagem nativa, e custa o mesmo $5/mês fixo do plano Hobby de qualquer forma.

---

## Fontes consultadas (todas acessadas 2026-07-31)

- docs.railway.com/pricing/plans
- railway.com/pricing
- docs.railway.com/reference/pricing/free-trial
- blog.railway.com/p/launch-week-01-scale-to-zero
- docs.railway.com/guides/nextjs
- docs.railway.com/guides/static-hosting
- railpack.com/languages/staticfile
- station.railway.com/questions/deployment-crashing-due-to-next-start-5b078052
- docs.railway.com/networking/domains/working-with-domains
- docs.railway.com/networking/troubleshooting/ssl
- docs.railway.com/guides/preview-deployments-with-pr-environments
- blog.railway.com/p/cicd-for-modern-deployment
- nextjs.org/docs/messages/export-image-api
- github.com/Niels-IO/next-image-export-optimizer
- github.com/cloudflare/next-on-pages/blob/main/packages/next-on-pages/docs/supported.md
- thomasdesmond.me/posts/nextjs-pages-cloudflare-pages (posição atual da Cloudflare sobre Pages x Workers para Next.js)
- developers.cloudflare.com/pages/functions/pricing
- schematichq.com/blog/vercel-pricing; costbench.com/software/developer-tools/vercel (dados de plano Hobby Vercel, cruzados com múltiplas fontes secundárias — não há uma página oficial única de limites detalhados da Vercel indexada nesta busca)
- medium.com/@hitesh.shetty2011/deploying-a-next-js-static-site-on-github-pages-with-a-custom-domain-671754d63eb4
