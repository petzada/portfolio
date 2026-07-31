---
id: 008
title: Protótipo — hero e card de projeto
type: prototype
mode: HITL
status: open
assignee:
blocked_by: [001, 006, 011]
---

## Question

Como a página se parece de fato — e qual variante o Marcio escolhe?

> **Reescrito após 011.** A versão anterior deste ticket testava a aplicação do sistema Linear (dark, lavanda, escada de superfícies) a um portfólio pessoal. Essa direção foi descartada: o `REFERENCIAS-PORTFOLIOS.md` venceu e o `DESIGN.md` perdeu autoridade. O risco mudou de lugar, mas não diminuiu.

O sistema agora tem uma característica que concentra todo o risco visual: **não há acento cromático**. Sem cor para criar hierarquia, ponto focal ou ênfase, tudo recai sobre tipografia, espaçamento e as telas dos projetos. Uma página monocromática ou fica elegante e confiante, ou fica sem graça — e a diferença não se decide em conversa, se decide olhando.

O segundo risco é Orbitron. Ela é o que dá identidade à página, mas é uma display geométrica de caráter forte (leitura tecnológica, quase sci-fi). Precisa ser vista em tamanho e contexto reais para saber se comunica "desenvolvedor competente" ou se puxa para um registro que não combina com sistemas de estoque e RH.

### Restrições fixadas por 011 — não são para reabrir aqui

- Canvas light `#fafafa`, tema dark via toggle
- Coluna única centrada, ~800px
- Orbitron Bold/Regular no display (nome, títulos de seção, nomes de projeto); Inter no corpo
- Zero acento cromático
- Sem sombra permanente; sombra apenas no hover (`0 8px 30px rgba(0,0,0,.1)`)
- Motion em três famílias: scroll reveal (`opacity 0→1`, `y 16–24→0`, 0.45–0.6s easeOut, `once`), stagger (`delay i*0.03–0.05`), hover de mídia (`scale 1.05`, 500ms); `prefers-reduced-motion` obrigatório

### Produzir, como HTML estático descartável

1. **Duas ou três variantes de hero**, divergindo numa decisão real de escala tipográfica: Orbitron no nome em ~48px versus algo bem maior; nome sozinho versus nome acompanhado de uma frase de posicionamento; com e sem avatar. Sem cor para brigar, o tamanho do nome *é* a decisão de hierarquia da página.
2. **O card de projeto** com uma captura real dentro — nunca placeholder cinza. Este é o componente que mais se repete e o que carrega a conversão. Testar: onde entra o nome em Orbitron, como o indicador de "no ar" aparece **sem cor** (ponto neutro? rótulo? tratamento tipográfico?), e como a captura é emoldurada.
3. **A grade completa** com Ceremony, Silcon e Evoluteam empilhados na coluna estreita, para ver o ritmo vertical e se os três se sustentam lado a lado.
4. **Os dois temas.** Light é o padrão, mas o toggle está no escopo — e cada captura de tela precisa ficar boa nos dois fundos. Uma captura de dashboard claro sobre canvas escuro costuma brilhar demais; ver isso agora, não depois.
5. **Ver em telefone** (390px), não só em desktop. O lead abre o link no WhatsApp.
6. **Checar a legibilidade de Orbitron nos títulos longos** — "Sistema de Controle de Estoque" em Orbitron numa coluna de 800px pode simplesmente não caber bem.

Consultar a skill `design-taste-frontend`. Salvar em `wayfinder/assets/` e apontar daqui. Protótipo descartável: rápido e concreto, não é o começo da implementação.

## Resolution

_(aberto)_
