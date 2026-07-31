---
label: wayfinder:map
title: Portfólio pessoal de Marcio Petigrosso — spec de construção
---

# Portfólio pessoal de Marcio Petigrosso — spec de construção

## Destination

Um **spec implementável** do portfólio: stack, hospedagem, arquitetura de conteúdo, curadoria de projetos, anatomia das páginas de case, direção visual traduzida do `DESIGN.md` e estratégia de conversão — travados e escritos, prontos para que uma sessão de implementação (ou o próprio Marcio) construa a página sem precisar decidir mais nada.

A construção em si, o deploy e a produção da copy final são esforço separado. Este mapa decide; não constrói.

## Notes

**Domínio.** Página estática de portfólio pessoal de desenvolvedor fullstack, em PT-BR.

**Audiência.** Primária: **cliente de freelance** — manda na copy, no hero e no CTA. Secundária: recrutador / tech lead — atendido por seção própria, sem disputar o protagonismo.

**Restrições duras** (decididas na charting, não são tickets):
- Stack: Next.js + TypeScript + Tailwind CSS — a mesma do Sistema Silcon. O portfólio é vitrine da stack que se vende.
- Deploy: **Railway**, com **domínio próprio** pago.
- Estrutura: **one-pager + páginas de case por projeto**.
- Direção visual: `DESIGN.md` (sistema Linear — canvas #010102, acento lavanda #5e6ad2 escasso, escada de quatro superfícies, tracking negativo agressivo no display, sem gradientes, sem light mode).
- Fonte de verdade da carreira: `CURRICULO.md` + LinkedIn (https://www.linkedin.com/in/petigrosso/).

**Ativos.** Os projetos rodam localmente e podem ser capturados em telas reais. Existem outros projetos além dos dois listados no `CURRICULO.md` — o inventário completo ainda não está levantado.

**Tensão central a carregar em todo ticket.** O `DESIGN.md` é um sistema construído *em torno de screenshots de produto* ("the marketing chrome is a dark frame for the app") — e cliente de freelance compra por prova visual. Logo, a qualidade e a consistência das capturas de tela são o gargalo real deste portfólio, não o código.

**Skills a consultar por sessão.** `design-taste-frontend` para qualquer decisão visual; `copywriting` para copy de conversão; `brainstorming` como método de grilling (uma pergunta por vez).

**Método.** Sem `/grilling` e `/domain-modeling` instalados neste repo; usar `brainstorming` no lugar, mantendo a disciplina de uma pergunta por vez e HITL real — o agente nunca responde pelo humano.

## Decisions so far

<!-- índice: uma linha por ticket fechado, com link para o detalhe -->

- [Research — Next.js estático na Railway](tickets/005-research-nextjs-estatico-na-railway.md) — Railway serve por **$5/mês fixos** (Hobby) com `output: "standalone"` — servidor Next em container, **não** export estático puro; domínio próprio e HTTPS automáticos e sem custo extra; `next/image` funciona sem `unoptimized`. É a mais cara das quatro opções avaliadas (Vercel e GitHub Pages entregam o mesmo por $0) — mantida por decisão do autor, com o custo agora explícito.
- [Research — tokens do DESIGN.md em Tailwind](tickets/006-research-tokens-do-design-em-tailwind.md) — escada de superfícies derivada por interpolação HSL entre os dois âncoras do documento (`surface-1` #070708 → `surface-4` #18191d, mais os dois hairlines); **Inter** 400/500/600 via `next/font/google` (vence Geist pela cobertura de acentuação latina); tracking convertido de px para `em` nas 13 escalas; tokens vivem em `@theme` do Tailwind v4. **`ink-tertiary` #62666d reprova AA em corpo** (3.05–3.62:1) — restrito a texto grande, nunca informação essencial.

- [Oferta e posicionamento freelance](tickets/001-oferta-e-posicionamento-freelance.md) — **oferta ampla por decisão explícita do autor**, sem nicho; lead esperado é desconhecido vindo da internet; a inexperiência não é mencionada (projetos aparecem como projetos, sem rótulo acadêmico); nenhum filtro de escopo. Riscos aceitos e registrados no ticket. **Inverte o mapa: como não há categoria declarada, a grade de projetos passa a ser o posicionamento** — 002 e 007 sobem para críticos.

**Consequência de arquitetura a carregar adiante:** o site não é "estático servido por CDN" — é SSG rodando em servidor Next dentro de um container. Muda o que **Modelo de conteúdo e rotas** (004) pode assumir, e abre a porta para `next/image` de verdade.

## Not yet specified

Névoa em escopo, ainda sem nitidez para virar ticket. Graduará conforme a fronteira avançar.

- **Metadata e compartilhamento** — title/description por rota, imagem OG (crítica: link de portfólio circula colado em WhatsApp e DM do LinkedIn), favicon, `sitemap.xml`. Depende do modelo de conteúdo e das rotas.
- **Idioma** — só PT-BR, ou PT-BR + EN? Inglês A2 no currículo pesa contra manter duas versões; cliente freelance brasileiro não precisa. Revisitar depois que a oferta estiver definida.
- **Estratégia de imagens e performance** — formato, dimensões e peso das capturas. O modo de servir já está resolvido (`standalone`, `next/image` disponível), então resta a decisão de conteúdo: quanto pesa uma captura de UI densa e como ela se comporta no 4G do lead.
- **Registro do domínio** — qual nome, qual registrador, quanto custa. Depende do posicionamento (nome pessoal versus nome de marca/estúdio).
- **Analytics** — se vale medir conversão, com qual ferramenta, e o que isso implica de LGPD e de aviso de cookies.
- **Motion** — o `DESIGN.md` é silencioso sobre animação. Quanto movimento a página tem, se algum.
- **Aquisição de tráfego** — a decisão de 001 pressupõe lead desconhecido vindo da internet, mas página estática não gera tráfego sozinha. Alguém precisa levar essa pessoa até o link (LinkedIn, Instagram, busca, comunidade). É marketing, não site — provavelmente **fora do destino**, mas fica anotado até que se decida se alguma coisa na página precisa servir a isso (metadata de compartilhamento, âncoras para campanha).
- **Plano de manutenção** — o ritual para adicionar um projeto novo daqui a seis meses sem reaprender o repo.

## Out of scope

Trabalho conscientemente colocado além do destino. Não graduará; só retorna se o destino for redesenhado, e aí como esforço novo.

- **Blog / seção de artigos** — outro compromisso de escrita, outro objetivo (SEO de conteúdo). Não é o que converte cliente freelance nesta página.
- **CMS ou painel administrativo** — o próprio autor edita o repo; um CMS é infraestrutura sem leitor.
- **Backend próprio, API, banco de dados** — o destino é página estática por definição.
- **Toggle light/dark** — o `DESIGN.md` proíbe explicitamente ("Don't ship a light-mode marketing page").
- **Construção, deploy e copy final** — são o *depois* do spec, não o mapa.
