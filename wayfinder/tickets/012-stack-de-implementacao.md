---
id: 012
title: Stack de implementação, bibliotecas e componentes
type: grilling
mode: HITL
status: open
assignee:
blocked_by: []
---

## Question

Que bibliotecas entram no projeto, e quais o portfólio consegue não instalar?

O esqueleto já está decidido e não se reabre aqui: **Next.js com App Router, TypeScript, Tailwind v4** (011, 004), servido em modo `standalone` na Railway (005), com `next/font` para Orbitron e Inter e `next/image` com import estático (004, 011). Falta a camada de cima: componentes, animação, tema, ícones, ferramental.

O critério é peso e manutenção, não sofisticação. Este site tem duas rotas, nenhum formulário, nenhum modal, nenhuma tabela e nenhum estado compartilhado. A pergunta honesta em cada linha abaixo é se a biblioteca ganha da alternativa de não instalar nada.

Um dado concreto do protótipo aprovado em 008: ele implementa **a página inteira, incluindo as três famílias de motion e o toggle de tema, com CSS e trinta linhas de JavaScript sem dependência alguma.** Isso é o piso contra o qual cada biblioteca precisa se justificar.

### Precisa fechar com

1. **Animação.** 011 adotou a receita de motion do `REFERENCIAS`, que a descreve em Framer Motion (`whileInView`, stagger, springs). Mas 008 entregou o mesmo resultado com `IntersectionObserver` e transições CSS. Decidir entre **Motion** (`motion/react`, API declarativa, custo de bundle real numa página que anima pouco) e **CSS mais IntersectionObserver** (zero dependência, mais código manual). Se a escolha for Motion, ele precisa viver em componentes cliente isolados.
2. **Biblioteca de componentes.** shadcn/ui é a companhia natural de Next mais Tailwind e o autor já a usou no Silcon. Mas o inventário de componentes desta página é: um botão em pill, um card, chips, uma timeline e um toggle. Nada disso é primitiva acessível complexa. Decidir se shadcn entra, e se entrar, quais componentes de fato.
3. **Ícones.** O protótipo aprovado **não usa nenhum ícone**. Se continuar assim, nenhuma biblioteca é necessária. Se aparecerem (seta de voltar, link externo, WhatsApp), escolher uma família só, e verificar se dá para importar apenas os glifos usados.
4. **Toggle de tema.** `next-themes` resolve o flash de tema errado no primeiro paint, que é um problema real e chato de acertar à mão com SSR. Pesar contra uma implementação própria com script inline no `<head>`.
5. **Tipografia e tokens.** Confirmar a forma final do bloco `@theme` do Tailwind v4 produzido pelo research 006, agora recalibrado para canvas claro conforme 011.
6. **Ferramental de qualidade.** ESLint e Prettier, e se vale Biome no lugar dos dois. Se há verificação de tipos no CI. Se há teste algum, e a resposta honesta pode ser não: uma página de conteúdo sem lógica de negócio tem pouco a testar em unidade.
7. **A lista final de dependências**, com uma linha de justificativa por item. O ticket fecha com o conteúdo do `package.json`, não com uma discussão.

### Fora do escopo deste ticket

Analytics (segue na névoa), CMS e backend (fora de escopo do mapa), e testes end-to-end.

## Resolution

_(aberto)_
