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

**Referência final aprovada: [`wayfinder/assets/008-prototipo-v12.html`](../assets/008-prototipo-v12.html).** As anteriores (`v1` a `v11`) ficam no diretório como registro do caminho, mas apenas a v12 vale.

**Fechamento em 31/07/2026 (v11 e v12):**

- **Texto corrido justificado, com hifenização automática.** A hifenização não é enfeite: sem ela, justificar uma coluna estreita em português abre rios de espaço entre palavras. O `lang="pt-BR"` no `<html>` é o que faz o navegador hifenizar corretamente. Ficam de fora a frase de abertura do "Sobre mim", títulos e legendas, porque justificar duas linhas espalha palavra em vez de alinhar.
- **Largura uniforme.** Cada bloco de texto tinha a própria largura máxima (60, 62, 58, 56 e 46 caracteres), o que fazia a borda direita mudar de seção para seção e a página não ler como um bloco único. Todos passaram a ocupar a largura inteira da coluna. Custo conhecido e aceito: a linha vai para cerca de 95 caracteres, acima do confortável para leitura corrida, mitigado pelo justificado com hifenização.
- **Dark é o tema padrão.** Só abre claro se o sistema do usuário declarar preferência por claro; sem preferência declarada, ou com o sistema em escuro, prevalece o escuro. Inverte o que 011 tinha decidido, e está registrado lá.

**Tentativa descartada no caminho:** uma versão intermediária centrou cada bloco de texto dentro da coluna (`margin-inline: auto`). Foi rejeitada de imediato pelo autor, com razão: centrar caixas de larguras diferentes deixa cada parágrafo flutuando num eixo próprio e piora justamente o alinhamento que se queria corrigir. O problema real era a diferença de largura entre blocos, não a posição deles.

**Da v10:**

- **Alinhamento à esquerda.** A página inteira centralizada foi testada na v9 e **revertida por decisão do autor**. A v9 fica no diretório apenas como registro do experimento, junto com a variante centrada da timeline que ela exigia.
- **A descrição abaixo do carrossel saiu.** A seção Stack é só o carrossel.
- **Quebras verificadas em 390px:** nome, cargo e corpo ganham escala reduzida própria; data da trajetória e status do card empilham em coluna em vez de espremer ao lado do título; e-mail e links do rodapé recebem `overflow-wrap: anywhere`, já que o endereço é a string mais longa da página. As regras estão agrupadas ao fim do `<style>` para leitura; **na implementação, incorporar em cada componente** em vez de manter como camada de sobrescrita.

**Nota sobre o experimento da v9:** centralizar custa legibilidade em bloco de parágrafo longo, porque o olho perde a margem fixa de retorno a cada linha, e o "Sobre mim" tem cinco parágrafos. A reversão resolve isso. Fica registrado que a alternativa foi testada e descartada com a página montada à frente, não no abstrato.

**Atualização de 31/07/2026 (v8):**

- **Stack virou carrossel horizontal automático de uma linha e desceu para depois dos projetos.** Marquee único da página. A faixa é duplicada e transladada até `-50%`, o que fecha o laço sem salto visível; a cópia leva `aria-hidden` para não duplicar na leitura assistiva. Pausa no hover, e sob `prefers-reduced-motion` a animação para de vez e a faixa vira scroll manual.
- **CTA final removido.** A página termina em footer com links úteis: WhatsApp, LinkedIn, GitHub, e-mail e currículo. Custo registrado abaixo.
- **Header sem a frase de pitch.** "Transformo problema de negócio em software que funciona" saiu, e "Desenvolvedor full stack" herdou o peso tipográfico que era dela (22px, cor `ink`).

Ordem final: `Hero` → `Projetos` → `Stack` → `Sobre mim` → `Trajetória` → `Formação` → `Footer`.

**Atualização de 31/07/2026 (v7)**, depois que a leitura dos repositórios mostrou que a engenharia real dos projetos era mais forte do que a página comunicava:

- **Nova seção `Stack`, logo abaixo do hero**, em três grupos (Interface, Servidor e dados, Qualidade e infraestrutura), com logotipos de tecnologia em Simple Icons renderizados por `mask-image` com `currentColor`. A decisão de ícones de 012 foi revista por causa disso.
- **Os chips de skill saíram do "Sobre mim"**, absorvidos pela nova seção.
- **"Sobre mim" reescrito** para nomear a engenharia que não aparece na tela: webhook de pagamento assinado no Ceremony, isolamento multi-inquilino no Evoluteam, gatilhos no Postgres garantindo consistência de saldo no Silcon, testes de unidade a ponta a ponta e verificação contra produção. Antes a seção falava de capacidade em abstrato; agora ela cita fato verificável.
- **Python saiu de vez.** A leitura dos repositórios confirmou que não é usado em nenhum dos três.

Ordem final da página: `Hero` → `Stack` → `Projetos` → `Sobre mim` → `Trajetória` → `Formação` → `CTA`.

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

### Segundo risco aceito: a página não tem chamada de fechamento

A v8 removeu o banner de CTA do fim do one-pager, por decisão do autor. Isso **altera a resolução de 009**, que havia fixado três pontos de chamada e argumentava que quem chega ao fim da página é o lead mais quente que existe nela.

Sobram dois pontos: a pill "Pedir um orçamento" no hero, e o CTA no fim de cada página de case. No one-pager, o caminho de conversão passa a ser o link de WhatsApp no rodapé, que é um link de rodapé e não uma chamada.

Consequência prática: quem lê a página inteira e se convence termina sem nada pedindo a ação, e precisa procurar. Se algum dia houver medida de conversão, este é o primeiro lugar para olhar.

### Pendências que este ticket gerou

- **Retrato do autor** para o avatar de 112px. Vai para 007.
- **Stack do Ceremony e do Evoluteam**, ainda em branco no protótipo.
- **Python aparece nos chips de skill** mas não é comprovado por nenhum dos três projetos. Decidir se fica.
- **A promessa do CTA** ("respondo com uma ideia de escopo e uma faixa de preço") é um compromisso real. Confirmar em 009 se o autor pretende cumprir.
- **Largura de coluna**: nos cards 2-up a captura fica com cerca de 370px. Se as telas do Silcon não sobreviverem a esse tamanho, reconsiderar os 800px em favor dos 896px. Só decidível com as capturas reais.
