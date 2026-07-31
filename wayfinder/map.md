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
- Direção visual: **`REFERENCIAS-PORTFOLIOS.md`** — light `#fafafa` por padrão com toggle dark, coluna única de ~800px, **Orbitron** (Bold/Regular) no display e **Inter** no corpo, **sem acento cromático**, motion em três famílias, sombra só no hover. O `DESIGN.md` foi **rebaixado a referência sem autoridade** por 011; não seguir suas regras.
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

- [Curadoria dos projetos](tickets/002-curadoria-dos-projetos.md) — grade de **três**, nesta ordem: **Ceremony** (ceremony.com.br, presentes de casamento por PIX, no ar) → **Silcon** (estoque e almoxarifado, em uso real) → **Evoluteam** (RH, PDI e avaliação, funcional). **Feltrin Noivas fica de fora** — não está no ar e é redundante com o Ceremony. Critério de corte escrito e reutilizável: vivo / visualmente apresentável / explicável em 30s a leigo / prova algo que nenhum outro card prova. Pendente: stack de Ceremony e Evoluteam.

- [Conflito de direção visual](tickets/011-conflito-de-direcao-visual.md) — **`REFERENCIAS-PORTFOLIOS.md` vence; `DESIGN.md` perde autoridade.** Light com toggle dark, coluna ~800px, Orbitron no display e Inter no corpo, página monocromática, motion em três famílias, sombra só no hover. Fecha a névoa de motion e traz o toggle de tema de volta ao escopo. A escada de superfícies do 006 é reaproveitada como base do tema dark; a auditoria de contraste precisa ser refeita para canvas claro.

- [Protótipo — hero e card de projeto](tickets/008-prototipo-hero-e-card-de-projeto.md) — referência aprovada em [`assets/008-prototipo-v6.html`](assets/008-prototipo-v6.html), após seis iterações. **Trava a estrutura do one-pager**: Hero → Projetos → Sobre mim → Trajetória → Formação → CTA. Hero empilhado no padrão do Anderson (avatar 112px, nome em Orbitron em duas linhas, pitch, meta, pills). Card emoldurado 16:10, clique abre o case; grade com Ceremony full-width e os outros dois 2-up. Status sem cor (ponto sólido para ativo, vazado para inativo), fechando a pendência de 011. Registro de voz da copy fixado: eixo na capacidade de desenvolvimento, não na origem administrativa.

- [Anatomia da página de case](tickets/003-anatomia-da-pagina-de-case.md) — **case de produto**, não case de cliente, porque nenhum dos três projetos teve contratante. Sequência: nome, frase, meta, captura de abertura 16:9, "O que é", "Como funciona", "Como foi construído" (recolhível), fechamento com "ver no ar" e CTA. **250 a 350 palavras** e **três capturas** por case. Sem link de repositório, por segurança e adequação. **Não inventar métrica**: um case de produto termina em "veja funcionando", não em porcentagem.

- [Modelo de conteúdo e rotas](tickets/004-modelo-de-conteudo-e-rotas.md) — conteúdo em **objetos TypeScript tipados**, um arquivo por projeto, mais `perfil`, `trajetoria` e `formacao` como dados. Estrutura de case regular demais para justificar MDX. Rotas: `/` e `/projetos/[slug]`, estáticas via `generateStaticParams` com `dynamicParams = false`. Imagens por import estático, junto do conteúdo. `status` é união fechada, `alt` é obrigatório, `apoio` é tupla de duas capturas, e **`destaque` foi eliminado**: o primeiro do array é o destaque, por definição. O ticket entrega a estrutura de pastas completa, que é o contrato com a implementação.

- [Conversão — CTA e contato](tickets/009-conversao-cta-e-contato.md) — **WhatsApp com mensagem pré-preenchida** (`wa.me`), o canal onde cliente PME brasileiro responde e o de menor atrito. Rótulo único "Pedir um orçamento" em três pontos: hero, banner de fechamento e fim de cada case. Microcópia revisada, **sem a promessa de escopo e faixa de preço**, apenas "a primeira conversa é sem compromisso". Nenhuma qualificação de lead. Telefone não aparece escrito, mas o link o revela: pendência de criar um **WhatsApp Business separado do pessoal**.

- [Camada do recrutador](tickets/010-camada-do-recrutador.md) — atendida por três seções próprias no fim do one-pager (Sobre mim, Trajetória, Formação) mais a pill de LinkedIn, sem página separada. Currículo como **PDF estático em `/public`**, atualizado à mão; o `CURRICULO.md` não é sua fonte, são artefatos independentes. **O código não é oferecido**: a pill de GitHub aponta para o perfil e nada substitui o link de repositório que 003 retirou. Consequência registrada: o perfil vira superfície de avaliação não curada, e precisa ser revisado antes da publicação.

- [Stack de implementação](tickets/012-stack-de-implementacao.md) — **duas dependências de runtime além do framework**: `motion` (sempre via `m` + `LazyMotion` com `domAnimation` e `strict`) e `next-themes` (pelo anti-flash no primeiro paint com SSR). **Recusados**: shadcn/ui, biblioteca de ícones e suíte de testes. ESLint com `eslint-config-next` mais Prettier com o plugin do Tailwind. Tokens finais fixados a partir do protótipo v6, em `@theme` do Tailwind v4. O ticket entrega o `package.json`.

**Consequência de arquitetura a carregar adiante:** o site não é "estático servido por CDN" — é SSG rodando em servidor Next dentro de um container. Muda o que **Modelo de conteúdo e rotas** (004) pode assumir, e abre a porta para `next/image` de verdade.

## Not yet specified

Névoa em escopo, ainda sem nitidez para virar ticket. Graduará conforme a fronteira avançar.

- **Metadata e compartilhamento** — title/description por rota, imagem OG (crítica: link de portfólio circula colado em WhatsApp e DM do LinkedIn), favicon, `sitemap.xml`. Depende do modelo de conteúdo e das rotas.
- **Contraste da paleta final** — 012 fixou os valores dos dois temas a partir do protótipo v6, mas a única auditoria de contraste existente é a do research 006, feita contra uma paleta escura que foi descartada. A matriz precisa ser recalculada para os pares reais, principalmente `subtle` #949494 sobre `canvas` #fafafa, que é o candidato mais provável a reprovar em AA.
- **Revisar o perfil do GitHub** — 010 decidiu não linkar repositório algum nos cases e apontar só para o perfil, que passa a ser a única superfície de código que o recrutador vê. Precisa estar apresentável antes de o site ir ao ar. Pendência de execução do autor.
- **Exportar o PDF do currículo** — versionar em `/public`. Pendência de execução.
- **WhatsApp Business** — 009 definiu o `wa.me` como mecanismo de conversão, e o link revela o número ao abrir. Criar uma conta Business separada do número pessoal, com mensagem de ausência e horário. Pendência de execução do autor, não decisão.
- **Acesso aos repositórios** — 003 definiu que o autor dá acesso ao GitHub e ao material dos projetos para que os cases sejam redigidos. Pendência de insumo, não decisão.
- **Idioma** — só PT-BR, ou PT-BR + EN? Inglês A2 no currículo pesa contra manter duas versões; cliente freelance brasileiro não precisa. Revisitar depois que a oferta estiver definida.
- **Estratégia de imagens e performance** — formato, dimensões e peso das capturas. O modo de servir já está resolvido (`standalone`, `next/image` disponível), então resta a decisão de conteúdo: quanto pesa uma captura de UI densa e como ela se comporta no 4G do lead.
- **Registro do domínio** — qual nome, qual registrador, quanto custa. Depende do posicionamento (nome pessoal versus nome de marca/estúdio).
- **Analytics** — se vale medir conversão, com qual ferramenta, e o que isso implica de LGPD e de aviso de cookies.
- **Aquisição de tráfego** — a decisão de 001 pressupõe lead desconhecido vindo da internet, mas página estática não gera tráfego sozinha. Alguém precisa levar essa pessoa até o link (LinkedIn, Instagram, busca, comunidade). É marketing, não site — provavelmente **fora do destino**, mas fica anotado até que se decida se alguma coisa na página precisa servir a isso (metadata de compartilhamento, âncoras para campanha).
- **Plano de manutenção** — o ritual para adicionar um projeto novo daqui a seis meses sem reaprender o repo.

## Out of scope

Trabalho conscientemente colocado além do destino. Não graduará; só retorna se o destino for redesenhado, e aí como esforço novo.

- **Blog / seção de artigos** — outro compromisso de escrita, outro objetivo (SEO de conteúdo). Não é o que converte cliente freelance nesta página.
- **CMS ou painel administrativo** — o próprio autor edita o repo; um CMS é infraestrutura sem leitor.
- **Backend próprio, API, banco de dados** — o destino é página estática por definição.
- **Construção, deploy e copy final** — são o *depois* do spec, não o mapa.
