---
id: 008
title: Protótipo — hero e card de projeto
type: prototype
mode: HITL
status: open
assignee:
blocked_by: [001, 006]
---

## Question

O sistema do `DESIGN.md` funciona quando aplicado a um portfólio pessoal — e qual variante o Marcio escolhe?

Este é o trecho de maior risco visual do projeto. O sistema da Linear foi desenhado para uma empresa de software com capturas de produto densas e um wordmark forte; um portfólio pessoal tem menos telas, mais texto sobre uma pessoa, e nenhuma marca. Aplicado ingenuamente, o resultado é uma página escura e vazia com um botão lavanda perdido no meio. A pergunta "isso fica bom?" não se responde em conversa — se responde olhando.

Depende de **Oferta e posicionamento freelance** (001), que dá o que a headline diz, e de **Research — tokens do DESIGN.md em Tailwind** (006), que dá os valores para construir com fidelidade.

Produzir, como HTML estático descartável:

1. **Duas ou três variantes de hero**, divergindo em uma decisão real — por exemplo: display de 80px com tracking pesado e nada mais versus headline acompanhada de uma captura emoldurada logo abaixo da dobra. O que ocupa o espaço do "screenshot de produto" da Linear quando o protagonista é uma pessoa.
2. **O card de projeto**, que é o componente que mais se repete e o que mais decide a conversão — `surface-1`, hairline de 1px, canto de 12px, captura emoldurada, título, uma linha, e o que mais. Ver com uma captura real dentro, não com placeholder cinza.
3. **A grade completa** com todos os projetos selecionados, para checar a regularidade — é onde um card fraco aparece.
4. **Checar o acento** — o `DESIGN.md` limita lavanda a marca, CTA primário, foco e ênfase de link. Ver se a página sobrevive a essa escassez ou se fica sem ponto focal.
5. **Ver em telefone**, não só em desktop. O lead abre o link no WhatsApp.

Consultar a skill `design-taste-frontend`. Salvar os protótipos em `wayfinder/assets/` e apontar daqui. É protótipo descartável: rápido e concreto, não é o começo da implementação.

## Resolution

_(aberto)_
