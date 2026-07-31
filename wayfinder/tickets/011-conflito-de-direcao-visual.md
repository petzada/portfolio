---
id: 011
title: Conflito de direção visual — DESIGN.md versus REFERENCIAS-PORTFOLIOS.md
type: grilling
mode: HITL
status: open
assignee:
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

_(aberto)_
