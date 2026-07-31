---
id: 012
title: Stack de implementação, bibliotecas e componentes
type: grilling
mode: HITL
status: closed
assignee: sessao-principal
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

Três dependências de runtime além do framework. Tudo o mais foi recusado.

### Animação: Motion com LazyMotion

Escolhido pela ergonomia da API declarativa e por ser a linguagem em que o `REFERENCIAS` descreve a receita de motion adotada em 011.

**Disciplina obrigatória, sem a qual a escolha perde o sentido:**

- Importar o componente **`m`**, nunca `motion`. `import { m, LazyMotion, domAnimation } from 'motion/react'`.
- Um `LazyMotion` com `features={domAnimation}` e **`strict`** no topo da árvore animada. Com `strict`, usar `motion.div` por engano lança erro em desenvolvimento, o que transforma a disciplina em algo que o compilador cobra em vez de depender de memória.
- Todo componente animado é folha cliente, com `'use client'` no topo. As páginas seguem Server Components.

Custo aceito: cerca de 4,6 kB iniciais mais aproximadamente 15 kB do `domAnimation`, contra 30 kB do import direto. Fontes: [Motion, reduce bundle size](https://motion.dev/docs/react-reduce-bundle-size), [LazyMotion](https://motion.dev/docs/react-lazy-motion).

**Consequência para a implementação:** o protótipo v6 implementa a revelação com `IntersectionObserver` e transições CSS. Esse código **não é a referência de motion**; ele será reescrito com `m` e `whileInView`. O que o protótipo fixa são os valores (opacidade 0 a 1, deslocamento de 16 a 24px, 0,45 a 0,6s, `easeOut`, uma vez só) e o comportamento sob `prefers-reduced-motion`, que continua obrigatório via `useReducedMotion()`.

### Componentes: nenhuma biblioteca

shadcn/ui recusado. O inventário da página é botão em pill, card, chips, timeline e toggle. Nenhum tem estado, foco preso ou navegação por teclado. shadcn resolve modal, combobox, dropdown e formulário, e esta página não tem nenhum dos quatro. Os componentes são escritos à mão em `src/components/`, conforme a estrutura de 004.

### Tema: next-themes

O único ponto onde uma biblioteca resolve algo genuinamente difícil. Com SSR, o servidor não sabe o tema do visitante e a página pisca no tema errado no primeiro paint. `next-themes` injeta o script bloqueante que evita isso, e ainda cobre preferência de sistema, persistência e sincronia entre abas.

Configuração: `attribute="class"`, `defaultTheme="light"` (light é o padrão por 011), `enableSystem`, e `suppressHydrationWarning` no `<html>`.

### Ícones: nenhuma biblioteca

O protótipo aprovado não usa ícone algum, e a página não precisa de nenhum. Se surgirem casos pontuais (seta de voltar, indicação de link externo), a decisão é **Phosphor com import individual por glifo**, nunca import do pacote inteiro. Não instalar antes de haver necessidade concreta.

### Testes: nenhuma suíte

Resposta honesta para uma página de conteúdo sem lógica de negócio, sem formulário e sem estado: não há o que testar em unidade que valha a manutenção. A rede de segurança é `tsc --noEmit` no CI mais o lint. Se um dia houver lógica de verdade, isso muda.

### Tokens

Os valores finais são os do protótipo v6 aprovado, já recalibrados para canvas claro:

| Token | Light | Dark |
|---|---|---|
| `canvas` | `#fafafa` | `#0b0b0b` |
| `surface` | `#ffffff` | `#16171a` |
| `ink` | `#0b0b0b` | `#f5f5f5` |
| `muted` | `#6b6b6b` | `#a1a1a1` |
| `subtle` | `#949494` | `#6f7176` |
| `line` | `#e5e5e5` | `#26282d` |
| `line-strong` | `#d4d4d4` | `#34373d` |

Vivem em `@theme` no CSS de entrada, conforme Tailwind v4 confirmado pelo research 006. Raio: 12px para mídia e cards, 8px para controles, círculo para avatar e pills. **A auditoria de contraste destes valores segue pendente na névoa do mapa**; o research 006 mediu contra canvas escuro e a paleta mudou.

### Ferramental

ESLint com `eslint-config-next`, pelas regras específicas do framework, mais Prettier com `prettier-plugin-tailwindcss` para ordenar as classes de forma determinística. Biome foi considerado e recusado por perder as regras do Next.

### O `package.json`

```jsonc
{
  "dependencies": {
    "next": "^15",            // App Router, output standalone (005)
    "react": "^19",
    "react-dom": "^19",
    "motion": "^12",          // sempre via m + LazyMotion
    "next-themes": "^0"       // anti-flash no primeiro paint
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4",
    "@tailwindcss/postcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "^15",
    "prettier": "^3",
    "prettier-plugin-tailwindcss": "^0"
  }
}
```

As faixas de versão são indicativas; fixar as versões correntes no momento da instalação.

**Duas dependências de runtime além do framework.** Nenhuma biblioteca de componentes, de ícones, de utilitários ou de teste.
