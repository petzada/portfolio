---
id: 008
title: Protótipo — hero e card de projeto
type: prototype
mode: HITL
status: closed
assignee: sessao-principal
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

**Referência aprovada: [`wayfinder/assets/008-prototipo-v6.html`](../assets/008-prototipo-v6.html).** Seis iterações; as anteriores (`v1` a `v5`) ficam no diretório como registro do caminho, mas apenas a v6 vale.

O ticket foi aberto para testar hero e card. Acabou fixando o **one-pager inteiro**, por pedido do autor durante a sessão.

### Estrutura da página, travada

`Hero` → `Projetos` → `Sobre mim` → `Trajetória` → `Formação` → `CTA` → rodapé.

Cinco famílias de layout distintas, uma por seção, dando a leitura vertical contínua que o autor pediu.

### Hero

Disposição empilhada, no padrão do Anderson Medeiros documentado no `REFERENCIAS`: avatar circular de 112px, nome, cargo, pitch, meta, parágrafo de apresentação, pills de CTA. A v3 testou um split assimétrico com retrato retangular para fugir da semelhança com a referência; foi rejeitada e a disposição empilhada voltou.

O nome usa Orbitron e **quebra em duas linhas**, porque a fonte é larga demais para caber em 800px num corpo que valha a pena. Aceito como está.

### Card de projeto

Emoldurado, hairline de 1px, raio de 12px, mídia em 16:10 (16:9 no card de destaque). Clique abre a página de case. Hover: `scale(1.05)` na mídia em 500ms mais sombra, sem sombra em estado de repouso.

**Grade:** Ceremony ocupa a largura inteira como destaque, Silcon e Evoluteam ficam 2-up abaixo. Três itens, três células, sem vão. A disposição também respeita a hierarquia definida em 002.

### Indicador de status sem cor

Resolve a pendência deixada por 011. Ponto de 6px preenchido para "no ar" e "em uso", contornado e vazado para "demo". A mesma gramática se repete na timeline (ponto sólido para o que está em curso, vazado para o encerrado). Nenhuma cor envolvida, coerente com a decisão de página monocromática.

### Registro de voz da copy

Não é copy final, que continua fora do destino do mapa, mas o **registro** está fixado: direto, concreto, sem adjetivo de marketing.

O eixo foi reorientado durante a sessão. As primeiras versões contavam a história a partir da origem administrativa ("cheguei ao código pelo lado de quem sofria com a falta dele"); o autor determinou que o eixo é a **capacidade de desenvolvimento**, e a origem virou a última frase do último parágrafo.

O argumento que sustenta a oferta ampla decidida em 001: **os três projetos são de setores que não conversam entre si** (pagamento por PIX, almoxarifado industrial, avaliação de pessoas) e isso é apresentado como prova deliberada de que o método se repete onde o domínio não se repete. É o que permite vender generalista sem soar como quem não tem especialidade.

Nos cards, funcionalidade deu lugar a consequência: "movimentações, alerta de preço e fila de reposição" virou "o almoxarifado sabe o que está acabando antes de faltar na linha".

### Motion, confirmado na prática

As três famílias de 011 implementadas e validadas: revelação na entrada via `IntersectionObserver` (nunca listener de scroll), `scale` no hover da mídia, e `prefers-reduced-motion` desligando translate e scale.

### Risco aceito e registrado

Com a separação entre Trajetória e Formação (pedida pelo autor), a seção **Trajetória exibe dois cargos administrativos e nenhum de desenvolvimento**, logo após um "sobre mim" que afirma com força que ele é desenvolvedor full stack. Para o recrutador é leitura normal; para o cliente, é a seção que mais pode plantar a dúvida que o resto da página dissipou.

Foram oferecidas três saídas (manter, mover para depois do CTA ou para uma página `/sobre`, ou renomear para "Experiência" incluindo o desenvolvimento). **O autor optou por manter.** A costura que impede a leitura de contradição é a última frase da entrada da Silcon: "foi o problema daqui que virou o sistema de almoxarifado que está em uso hoje". Essa frase é estrutural, não decorativa; se a copy final for reescrita, ela precisa sobreviver em alguma forma.

### Pendências que este ticket gerou

- **Retrato do autor** para o avatar de 112px. Vai para 007.
- **Stack do Ceremony e do Evoluteam**, ainda em branco no protótipo.
- **Python aparece nos chips de skill** mas não é comprovado por nenhum dos três projetos. Decidir se fica.
- **A promessa do CTA** ("respondo com uma ideia de escopo e uma faixa de preço") é um compromisso real. Confirmar em 009 se o autor pretende cumprir.
- **Largura de coluna**: nos cards 2-up a captura fica com cerca de 370px. Se as telas do Silcon não sobreviverem a esse tamanho, reconsiderar os 800px em favor dos 896px. Só decidível com as capturas reais.
