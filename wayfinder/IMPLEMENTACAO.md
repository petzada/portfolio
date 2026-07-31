# Prompt de implementação

Copie o bloco abaixo para o agente que vai construir o site. Ele é autossuficiente: aponta para as decisões já tomadas em vez de repeti-las, e define o critério de conclusão de cada etapa.

---

## Contexto

Você vai construir o portfólio pessoal de **Marcio Petigrosso**, desenvolvedor full stack. Todas as decisões de produto e de design **já foram tomadas** e estão registradas no mapa wayfinder deste repositório. Seu trabalho é executar, não redecidir.

**Leia primeiro, nesta ordem:**

1. `wayfinder/map.md` — o índice. Destino, restrições, as onze decisões em uma linha cada, a névoa que sobrou e o que está fora de escopo.
2. `wayfinder/tickets/004-modelo-de-conteudo-e-rotas.md` — os tipos, a estrutura de pastas e as rotas. É o contrato da implementação.
3. `wayfinder/tickets/012-stack-de-implementacao.md` — o `package.json` e as regras de uso de cada dependência.
4. `wayfinder/tickets/008-prototipo-hero-e-card-de-projeto.md` — a referência visual e o histórico do que foi testado e descartado.
5. `wayfinder/assets/008-prototipo-v12.html` — **a referência visual definitiva**. Abra no navegador antes de escrever qualquer componente.
6. `wayfinder/tickets/003-anatomia-da-pagina-de-case.md` — a estrutura da página de case.
7. `wayfinder/assets/cases-para-revisao.md` — os textos dos três cases.

Os demais tickets valem quando a dúvida cair no assunto deles. `REFERENCIAS-PORTFOLIOS.md` é a fonte de verdade de design; **`DESIGN.md` foi rebaixado a referência sem autoridade e não deve ser seguido.**

## Regras invioláveis

- **Não redecidir o que está fechado.** Se uma decisão parecer errada, diga qual e por quê, e pergunte. Não mude por conta própria.
- **Não inventar conteúdo.** Nenhum texto novo sobre Marcio, nenhum número, nenhuma métrica, nenhum depoimento. O que não existe em `cases-para-revisao.md` ou no protótipo não vai para a página.
- **Nada de placeholder que pareça real.** Onde faltar imagem, deixe um slot claramente marcado, como o protótipo faz. Nunca desenhe telas falsas em `<div>`.
- **Uma etapa por vez**, na ordem abaixo. Ao terminar cada uma, mostre o resultado e espere confirmação antes da seguinte.

## Etapas

### 1. Fundação

Criar o projeto Next.js com App Router, TypeScript e Tailwind v4, e montar a estrutura de pastas exatamente como o ticket 004 define. Instalar só o que o ticket 012 lista.

Configurar `output: 'standalone'` no `next.config`, decidido em 005 por causa da Railway.

**Pronto quando:** `npm run dev` sobe, `tsc --noEmit` passa, e a árvore de pastas bate com a do ticket 004.

### 2. Tokens, fontes e tema

Tokens dos dois temas em `@theme` no CSS de entrada, com os valores do ticket 012. Orbitron (400, 700) e Inter (400, 500, 600) por `next/font/google`.

Tema com `next-themes`: `attribute="class"`, `defaultTheme="dark"`, `enableSystem`, `suppressHydrationWarning` no `<html>`. **Dark é o padrão**; só abre claro se o sistema pedir claro.

Sistema de raio: 12px mídia e cards, 8px controles, círculo em avatar e pills. **Nenhum acento cromático** em lugar nenhum.

**Pronto quando:** uma página em branco alterna entre os dois temas sem piscar no primeiro carregamento, e as duas fontes carregam.

### 3. Conteúdo como dado

Criar `lib/types.ts` com os tipos do ticket 004, sem alterações. Depois preencher `content/perfil.ts`, `content/trajetoria.ts`, `content/formacao.ts` e os três arquivos de projeto, com os textos de `cases-para-revisao.md` e do protótipo.

Atenção a três coisas que o ticket 004 exige: `status` é união fechada, `alt` é obrigatório, e **não existe campo `destaque`** — o primeiro item do array é o destaque, por definição.

O número de WhatsApp e o link montado ficam em `perfil.ts`, nunca espalhados nos componentes.

**Pronto quando:** os dados compilam e nenhum componente foi escrito ainda.

### 4. Componentes da home

Construir na ordem da página, cada um espelhando o protótipo v12: hero, grade de projetos, carrossel de stack, sobre mim, trajetória, formação, rodapé.

Pontos de atenção, todos verificáveis no protótipo:

- **Grade:** o primeiro projeto ocupa a largura inteira, os outros dois ficam 2-up. Três itens, três células, sem vão.
- **Status sem cor:** ponto preenchido para ativo, contornado e vazado para inativo. Mesma gramática na timeline.
- **Carrossel:** faixa duplicada transladada até `-50%`, com a cópia em `aria-hidden`. CSS puro, não Motion. Pausa no hover; sob `prefers-reduced-motion` a animação para e a faixa vira scroll manual.
- **Ícones de tecnologia:** SVGs do Simple Icons **vendorizados no repositório**, aplicados como `mask-image` com `background-color: currentColor`. Nunca como `<img>`, que traria a cor da marca e quebraria a página monocromática.
- **Texto:** corrido é justificado com `hyphens: auto`; frase de destaque, títulos e legendas ficam fora. Todos os blocos ocupam a largura inteira da coluna, sem largura máxima própria.
- **Sem dividers** entre seções. A separação é só espaço vertical.

**Pronto quando:** a home renderiza igual ao protótipo nos dois temas, em desktop e em 390px.

### 5. Página de case

Rota `/projetos/[slug]` com `generateStaticParams` e `dynamicParams = false`. Estrutura de seções conforme o ticket 003. Slug inexistente cai no `not-found.tsx`.

O CTA de orçamento aparece no fim de cada case, com o mesmo rótulo do hero: "Pedir um orçamento".

**Pronto quando:** as três rotas são geradas no build e um slug inventado dá 404.

### 6. Motion

Trocar as transições CSS de revelação por Motion, conforme o ticket 012: `import { m, LazyMotion, domAnimation } from 'motion/react'`, com `LazyMotion` em modo **`strict`** no topo da árvore animada.

Valores vindos do protótipo: opacidade 0 a 1, deslocamento de 16 a 24px, 0,45 a 0,6s, `easeOut`, `viewport={{ once: true }}`. `useReducedMotion()` degrada tudo para estático.

O hover da mídia do card e o carrossel **continuam em CSS**.

**Pronto quando:** as seções revelam ao entrar na viewport, o modo de movimento reduzido do sistema desliga tudo, e nenhum `motion.` aparece no código (só `m.`).

### 7. Metadata e compartilhamento

Está na névoa do mapa, então **decida com o Marcio antes de executar**: title e description por rota, imagem OG, favicon, `sitemap.xml`.

A imagem OG importa mais do que parece aqui: um link de portfólio circula colado em WhatsApp e em mensagem de LinkedIn, e é a prévia que decide se abrem.

**Pronto quando:** compartilhar o link num app de mensagem mostra prévia correta.

### 8. Acessibilidade

Recalcular a matriz de contraste WCAG dos dois temas com os valores reais, o que continua pendente na névoa. **Prioridade no tema escuro**, que é o padrão e o que a maioria vai ver. O primeiro par a verificar é `subtle` #6f7176 sobre `canvas` #0b0b0b.

Onde reprovar em AA, ajustar o token ou restringir o uso a texto grande. Verificar também foco visível por teclado em todos os links e botões, e que o carrossel não prenda o foco.

**Pronto quando:** existe uma tabela de contraste no repositório e nenhum texto de corpo reprova em AA.

### 9. Deploy

Railway, conforme 005: Nixpacks ou Dockerfile, `output: 'standalone'`, domínio próprio com CNAME e TXT, certificado automático. O plano é o Hobby, a cinco dólares por mês.

O relatório completo está em `wayfinder/assets/005-railway-deploy-research.md`.

**Pronto quando:** o site está no ar no domínio próprio, com HTTPS, e o deploy dispara automaticamente a cada push.

### 10. Verificação final

- Lighthouse: LCP abaixo de 2,5s, CLS abaixo de 0,1.
- Os dois temas, em desktop e em 390px, sem rolagem horizontal.
- Todos os links funcionam, incluindo o WhatsApp com a mensagem pré-preenchida e o download do currículo.
- `tsc --noEmit` e lint limpos.
- Nenhum texto de exemplo sobrando.

## O que depende do Marcio, e trava etapas

Peça no começo, não no meio:

| Pendência | Trava |
|---|---|
| Capturas dos três projetos (16:9 no destaque e nos cases, 16:10 nos secundários) | etapas 4 e 5 |
| Retrato para o avatar, quadrado | etapa 4 |
| PDF do currículo em `public/curriculo-marcio-petigrosso.pdf` | etapa 4 |
| Revisão dos textos em `cases-para-revisao.md` | etapa 3 |
| Decisão de metadata e imagem OG | etapa 7 |
| Domínio registrado e acesso à Railway | etapa 9 |

As capturas precisam ter dados de exemplo plausíveis e **dados de empresa anonimizados**: o nome Silcon Ambiental pode ser citado, mas fornecedores, valores e estoques reais não podem aparecer. O ticket 007 detalha.

## Riscos que o autor já aceitou

Não os levante de novo como se fossem novidade. Estão decididos e documentados:

- **Oferta ampla sem nicho**, com lead vindo de desconhecido pela internet (ticket 001).
- **A seção Trajetória mostra dois cargos administrativos e nenhum de desenvolvimento** (ticket 008). A frase final da entrada da Silcon é o que costura isso, e é estrutural: se a copy for reescrita, ela precisa sobreviver.
- **Não há CTA de fechamento no one-pager** (tickets 008 e 009). A conversão no fim da página passa pelo link de WhatsApp no rodapé.
- **Os cases não linkam repositório** (tickets 003 e 010). O único código visível é o perfil do GitHub.
