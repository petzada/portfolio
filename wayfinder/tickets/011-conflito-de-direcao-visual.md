---
id: 011
title: Conflito de direção visual — DESIGN.md versus REFERENCIAS-PORTFOLIOS.md
type: grilling
mode: HITL
status: closed
assignee: sessao-principal
blocked_by: []
---

## Question

O repositório passou a ter **duas direções visuais incompatíveis**. Qual manda, e onde a outra ainda contribui?

O `DESIGN.md` descreve o sistema de marketing da Linear: dark absoluto, quatro superfícies, acento lavanda escasso, tracking negativo agressivo, screenshots de produto como protagonistas. O `REFERENCIAS-PORTFOLIOS.md` (adicionado em 31/07/2026) mede dois portfólios pessoais reais — Aman Verma e Anderson Medeiros — e sintetiza diretrizes que divergem do primeiro em pontos estruturais, não cosméticos.

Não dá para seguir os dois. Escolher por acumulação produz exatamente o híbrido sem identidade que ambos os documentos alertam evitar.

### Os conflitos, item a item

| Ponto | `DESIGN.md` | `REFERENCIAS-PORTFOLIOS.md` |
|---|---|---|
| Tema | Dark absoluto; "don't ship a light-mode marketing page" | Canvas claro `#fafafa`/`#ffffff`, dark como toggle opcional |
| Largura | ~1280px de conteúdo, grid de cards 3-up | Coluna única 800–896px; "largura > 1000px para texto corrido" é anti-padrão |
| Tipografia | Inter como substituto recomendado da fonte Linear | "evitar Inter se quisermos menos genérico" — sugere Satoshi, Geist, Neue Montreal |
| Acento | Um só (lavanda #5e6ad2), escasso; verde apenas como semântico | Um acento à escolha, mais badges Live verde e WIP âmbar |
| Motion | Silencioso — nenhuma menção | Receita completa: scroll reveal, stagger, hover scale, com timings medidos |
| Elevação | Sem sombra; hierarquia por escada de superfícies | Sombra no hover (`0 8px 30px rgba(0,0,0,.1)`) |

### Onde os dois concordam (não é conflito, é confirmação)

- Screenshot real por projeto como evidência central — reforça a criticidade de 007.
- Acento cromático escasso, nunca competindo com o título.
- Nada de gradiente roxo genérico, glow neon, parallax ou partículas.
- Respeitar `prefers-reduced-motion`.

### Precisa fechar com

1. **Qual documento é a fonte de verdade** — e a decisão precisa ser uma escolha, não uma média. Se for o `DESIGN.md`, o `REFERENCIAS` fica como fonte de *padrões estruturais* (ordem de seções, anatomia de card, receita de motion) que o Linear não cobre. Se for o `REFERENCIAS`, o trabalho do ticket 006 (escada de superfícies, Inter, tracking em `em`) precisa ser reavaliado.
2. **Tema, decidido de vez** — dark absoluto ou light com dark opcional. Consequência direta: o "Toggle light/dark" está hoje **fora de escopo** no mapa justamente porque o `DESIGN.md` proíbe; se o `REFERENCIAS` vencer, esse item volta a ser discutível.
3. **Largura de conteúdo** — 1280px com grid 3-up, ou coluna estreita de 800–896px. Isso muda a anatomia do card de projeto e quantas capturas cabem lado a lado; conecta direto a 003 e 008.
4. **Fonte** — manter Inter (escolha fundamentada de 006, com a cobertura de acentuação em português verificada) ou trocar por algo menos comum, aceitando refazer a verificação de acentuação e de licença.
5. **Motion** — este ticket é a oportunidade de fechar a névoa de motion do mapa. O `REFERENCIAS` entrega uma receita concreta e contida (3 famílias, timings, `prefers-reduced-motion`); adotá-la como está é razoável independentemente de quem vença nos outros pontos, já que o `DESIGN.md` simplesmente não fala do assunto.
6. **Badges de status** — "Live" e "WIP" resolvem um problema real (nem todo projeto está no ar), mas introduzem verde e âmbar. Decidir se existem e em que cor, dentro do limite de acento escolhido.

### Nota de conteúdo, fora do visual

O `REFERENCIAS` recomenda "1–2 métricas concretas por case". Isso colide com o que já se sabe: os projetos não têm métrica de resultado, e **Anatomia da página de case** (003) já carrega a pergunta de com que fechar um case sem número. Não inventar métrica.

## Resolution

**`REFERENCIAS-PORTFOLIOS.md` é a fonte de verdade.** O `DESIGN.md` deixa de governar o projeto. Não é mais o sistema visual do portfólio; permanece no repositório como documento de referência, sem autoridade.

### As decisões, item a item

| Ponto | Decisão |
|---|---|
| **Tema** | **Light por padrão, com toggle dark** — canvas claro `#fafafa`, no padrão do Anderson. Traz o toggle de volta ao escopo do mapa. |
| **Largura** | Coluna única centrada, ~800px, conforme o `REFERENCIAS`. Nada de grid 3-up. |
| **Display** | **Orbitron** (Google Fonts), pesos Bold e Regular — nome, títulos de seção e nomes de projeto. |
| **Corpo** | **Inter** — parágrafos, bullets, legendas, UI. Mantém a verificação de acentuação do research 006. |
| **Acento cromático** | **Nenhum.** Página monocromática; a identidade vem inteiramente da tipografia e das telas dos projetos. |
| **Motion** | Receita do `REFERENCIAS` adotada: três famílias — scroll reveal (`opacity 0→1`, `y 16–24→0`, 0.45–0.6s easeOut, `once`), stagger de lista (delay `i * 0.03–0.05`), hover de mídia (`scale 1.05` em 500ms). `prefers-reduced-motion` obrigatório. **Fecha a névoa de motion do mapa.** |
| **Elevação** | Sem sombra permanente; sombra só no hover (`0 8px 30px rgba(0,0,0,.1)`), conforme o `REFERENCIAS`. |

### A divisão tipográfica

Orbitron é declarada pelos mantenedores como *"intended for display purposes"* — geométrica e larga, desenhada para título, não para parágrafo. Suporta português (á, ã, õ, ç verificados). Fica, portanto, restrita ao display; o corpo é Inter.

Isso não é concessão: é o padrão que o próprio `REFERENCIAS` documenta no Aman Verma — display expressiva no heading, fonte neutra no corpo, o que o documento chama de *"contraste tipográfico chave: isso cria identidade forte sem accent de cor"*. Casa exatamente com a decisão de não haver acento cromático. **Com a página monocromática, a tipografia é a identidade inteira** — o que eleva a importância de acertar a escala e o uso de Orbitron em 008.

Fontes consultadas: [Google Fonts — Orbitron](https://fonts.google.com/specimen/Orbitron), [Fontsource](https://fontsource.org/fonts/orbitron), [googlefonts/orbitron-vf](https://github.com/googlefonts/orbitron-vf).

### O que acontece com o research 006

Parcialmente obsoleto, parcialmente aproveitado:

- **Descartado** — tracking negativo agressivo da Linear e a premissa de dark absoluto como sistema único.
- **Sobrevive** — Inter como fonte de corpo, com a verificação de acentuação em português já feita.
- **Volta a ser útil por um caminho inesperado** — a escada de superfícies derivada (`surface-1` #070708 → `surface-4` #18191d) e os dois hairlines servem agora como **base do tema dark do toggle**. O trabalho não se perde; muda de papel.
- **Precisa ser refeito** — a auditoria de contraste do 006 mediu tudo contra canvas escuro. Com light como padrão, a matriz de contraste precisa ser recalculada para `#fafafa`. Anotado na névoa do mapa.

### Pendências menores geradas

- **Indicador de status** ("no ar" / "em desenvolvimento"): o `REFERENCIAS` propunha verde e âmbar, mas a decisão de não haver acento cromático elimina essa via. Resolver em 003 ou 008 — provavelmente ponto neutro mais rótulo em texto, ou tratamento tipográfico.
- **Ordem das seções**: o `REFERENCIAS` sugere `Hero → Projetos → Experiência/prova → Stack → Contato/Footer`. Não travada aqui; cabe a 003 e 010.

### Tensão registrada, a resolver adiante

A opção escolhida foi descrita na deliberação como "lê como currículo online bem feito" — formato que serve bem o **recrutador**, definido como audiência secundária em 001, e menos o **cliente freelance desconhecido**, definido como primário. Coluna estreita e monocromática pode perfeitamente vender serviço, mas isso não acontece por acaso: depende de copy e de CTA fazendo o trabalho que o layout não faz. Levar essa tensão explicitamente para **Conversão — CTA e contato** (009) e **Camada do recrutador** (010).
