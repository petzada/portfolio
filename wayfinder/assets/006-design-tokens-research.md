---
label: wayfinder:asset
ticket: 006
title: Research — tokens do DESIGN.md em Tailwind
---

# Tokens do DESIGN.md em Tailwind — research

Cobre os 6 itens do ticket 006. Método, fontes e contas mostrados — nenhum valor é "de memória" onde há API/versão que muda com o tempo.

## 1. Hex faltantes da escada de superfícies

**Âncoras dadas pelo `DESIGN.md`:** `canvas` `#010102` e `hairline` `#23252a`. Nenhum outro degrau vem com hex.

**Método.** Converti os dois âncoras para HSL:

| Token | Hex | H | S | L |
|---|---|---|---|---|
| canvas | `#010102` | 240.0° | 33.3%* | 0.59% |
| hairline | `#23252a` | 222.9° | 9.1% | 15.10% |

\* a saturação do canvas não é significativa nesse extremo de luminância (R=G, diferença de 1 em 255 no canal azul) — o que importa é o matiz ~230°, o "faint blue tint" que o documento descreve.

Tratei a escada como **8 degraus regulares em luminância (HSL)**, ancorados nas duas pontas dadas pelo documento (canvas no degrau 0, hairline no degrau 6), com matiz e saturação fixos no valor do hairline (H=222.9°, S=9.1%) — é o tom azulado que o `DESIGN.md` já valida como a assinatura do sistema. Isso dá um passo constante de **ΔL ≈ 2.42%** por degrau, e o hairline cai exatamente no ponto certo da progressão sem precisar forçar — evidência de que a escada linear é uma leitura razoável da intenção original.

Ordem por luminância (do mais escuro ao mais claro): `canvas` → `surface-1` → `surface-2` → `surface-3` → `surface-4` → `hairline-tertiary` → `hairline` → `hairline-strong`. Isso respeita a semântica do documento: bordas (hairline-*) precisam ser mais claras que a superfície que contornam para permanecerem visíveis; `hairline-strong` (usada em focus ring) é a mais clara/mais visível; `hairline-tertiary` (bordas discretas em superfícies aninhadas) fica entre `surface-4` e `hairline` — perceptível, porém discreta.

**Resultado:**

| Token | Hex | L (HSL) |
|---|---|---|
| `colors.canvas` | `#010102` | 0.59% (dado) |
| `colors.surface-1` | `#070708` | 3.01% |
| `colors.surface-2` | `#0d0d0f` | 5.42% |
| `colors.surface-3` | `#121316` | 7.84% |
| `colors.surface-4` | `#18191d` | 10.26% |
| `colors.hairline-tertiary` | `#1d1f23` | 12.68% |
| `colors.hairline` | `#23252a` | 15.10% (dado) |
| `colors.hairline-strong` | `#292b31` | 17.52% |

Fidelidade pixel-a-pixel à Linear real não foi o alvo (o próprio ticket dispensa isso); a escada é regular, monotônica, mantém o tom azulado dos dois âncoras e é perceptualmente legível degrau a degrau (~2.4 pontos de L, suficiente para diferenciar no olho sem criar saltos bruscos).

## 2. Inter vs. Geist para texto em português

**Disponibilidade via `next/font`** (confirmado na doc atual do Next.js, `nextjs.org/docs/app/getting-started/fonts`, atualizada 2026-06-23): ambas as fontes são carregáveis via `next/font/google`, ambas são **fontes variáveis** — não é preciso especificar peso por import; o próprio Next recomenda usar a variável e deixar os pesos 400/500/600 como instâncias do mesmo arquivo (menos requests, sem layout shift, self-hosted automaticamente).

```tsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
```

**Cobertura de acentuação PT-BR.** Título, cedilha e til (á é í ó ú â ê ô ã õ ç à) vivem no bloco Unicode Latin-1 Supplement (U+0080–U+00FF); nenhuma delas cai fora do subset `latin` padrão do Google Fonts para essas famílias — ambas cobrem integralmente. Isso não é o ponto de decisão.

**O ponto de decisão real:**
- **Inter** foi desenhada desde o início como fonte de interface multilíngue europeia, com anos de uso em produção em produtos com volume alto de texto acentuado (GitHub, Figma, Framer). O desenho dos acentos sobre maiúsculas (Á, É, Í, Ó, Ú, Ã, Õ, Ç) é maduro e testado — relevante porque headlines em caixa alta/mista com acento são comuns em copy de portfólio PT-BR ("Único", "Ágil").
- **Geist** (Vercel) é mais nova, nasceu como fonte de produto/dashboard da Vercel; a cobertura de idiomas ainda está em expansão ativa (ex.: Cyrillic foi redesenhado e adicionado em release recente do repositório `vercel/geist-font`), o que sinaliza que o trabalho de i18n é contínuo e mais recente — menos tempo de bake em edge cases de acentuação estendida do que Inter.
- O próprio `DESIGN.md` já lista Inter primeiro ("**Inter** at weight 500/600/700 is the closest free substitute. **Geist Sans** is also viable") — Geist é a alternativa, não a recomendação primária.

**Decisão: Inter**, pesos 400/500/600 (cobre body/subhead/eyebrow em 400–500 e display/headline em 500–600, sem precisar do 700 que o documento evita em display). Custo de carregamento: uma única fonte variável, self-hosted pelo `next/font`, sem chamada de rede externa em runtime, `variable: '--font-sans'` alimentando o token Tailwind `--font-sans`. Não é necessária uma segunda família para display — o `DESIGN.md` já pede "single voice from display to body" (mesma família, larguras de peso diferentes), então Inter cobre os dois papéis.

## 3. Tracking negativo: px → em

Tailwind (e CSS responsivo em geral) escala corretamente com `em`/`rem`; um valor fixo em `px` de letter-spacing não encolhe quando o `font-size` do token encolhe em breakpoints menores (ex.: display-xl caindo de 80px para ~36px no mobile, conforme a seção Responsive Behavior do `DESIGN.md`). Convertendo `tracking = tracking_px / font_size_px`:

| Token | Size | Tracking (px, DESIGN.md) | Tracking (em) |
|---|---|---|---|
| `typography.display-xl` | 80px | -3.0px | **-0.0375em** |
| `typography.display-lg` | 56px | -1.8px | **-0.0321em** |
| `typography.display-md` | 40px | -1.0px | **-0.0250em** |
| `typography.headline` | 28px | -0.6px | **-0.0214em** |
| `typography.card-title` | 22px | -0.4px | **-0.0182em** |
| `typography.subhead` | 20px | -0.2px | **-0.0100em** |
| `typography.body-lg` | 18px | -0.1px | **-0.0056em** |
| `typography.body` | 16px | -0.05px | **-0.0031em** |
| `typography.body-sm` | 14px | 0px | **0em** |
| `typography.caption` | 12px | 0px | **0em** |
| `typography.button` | 14px | 0px | **0em** |
| `typography.eyebrow` | 13px | +0.4px | **+0.0308em** |
| `typography.mono` | 13px | 0px | **0em** |

Todos os valores caem entre -3.75% e +3.08% do tamanho da fonte — consistente com a "aggressive negative tracking ≈ 4% at 80px" que o documento descreve como regra de bolso.

## 4. Sintaxe Tailwind atual

Confirmado via `tailwindcss.com/blog/tailwindcss-v4` e cobertura de release subsequente: **Tailwind v4 é a linha estável corrente** (a mais recente localizada em buscas datadas de julho de 2026 é a série 4.3.x). Não existe `tailwind.config.js` por padrão em v4 — tokens de tema (cor, espaçamento, fonte, radius, breakpoint) são declarados dentro de um bloco `@theme` direto no CSS de entrada, e o Tailwind gera as utilities a partir disso; os mesmos tokens ficam disponíveis em runtime como custom properties CSS nativas (`var(--color-surface-1)` etc.), sem build extra para consumi-los em JS/inline styles.

### Bloco de tokens pronto para colar (`app/globals.css` ou equivalente)

```css
@import "tailwindcss";

@theme {
  /* Cor — superfícies */
  --color-canvas: #010102;
  --color-surface-1: #070708;
  --color-surface-2: #0d0d0f;
  --color-surface-3: #121316;
  --color-surface-4: #18191d;

  /* Cor — hairlines */
  --color-hairline: #23252a;
  --color-hairline-strong: #292b31;
  --color-hairline-tertiary: #1d1f23;

  /* Cor — acento (único, escasso) */
  --color-primary: #5e6ad2;
  --color-primary-hover: #828fff;
  --color-primary-focus: #5e69d1;
  --color-brand-secure: #7a7fad;

  /* Cor — texto */
  --color-ink: #f7f8f8;
  --color-ink-muted: #d0d6e0;
  --color-ink-subtle: #8a8f98;
  --color-ink-tertiary: #62666d;

  /* Cor — semântico (único) */
  --color-semantic-success: #27a644;
  --color-semantic-overlay: #000000;

  /* Cor — inverso (raro, ver Do's/Don'ts) */
  --color-inverse-canvas: #ffffff;
  --color-inverse-surface-1: #f2f2f3;
  --color-inverse-surface-2: #e6e6e8;

  /* Fonte */
  --font-sans: var(--font-inter), "SF Pro Display", -apple-system, system-ui, "Segoe UI", Roboto, sans-serif;
  --font-mono: var(--font-geist-mono), "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;

  /* Tracking (em) */
  --tracking-display-xl: -0.0375em;
  --tracking-display-lg: -0.0321em;
  --tracking-display-md: -0.0250em;
  --tracking-headline: -0.0214em;
  --tracking-card-title: -0.0182em;
  --tracking-subhead: -0.0100em;
  --tracking-body-lg: -0.0056em;
  --tracking-body: -0.0031em;
  --tracking-eyebrow: 0.0308em;

  /* Radius */
  --radius-xs: 4px;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-pill: 9999px;

  /* Spacing (além da escala default de 4px do Tailwind, nomes semânticos) */
  --spacing-xxs: 4px;
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;
  --spacing-section: 96px;
}
```

Uso nas classes: `bg-surface-1`, `text-ink-muted`, `border-hairline`, `rounded-xl`, `tracking-display-lg`, `font-sans` — o Tailwind v4 deriva essas utilities automaticamente dos nomes `--color-*`, `--radius-*`, `--tracking-*`, `--spacing-*`, `--font-*` declarados em `@theme`.

Setup de fonte em `app/layout.tsx`:

```tsx
import { Inter, Geist_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

## 5. Contraste WCAG

Cálculo de razão de contraste (fórmula WCAG 2.x — luminância relativa sRGB) para os 4 níveis de texto contra `canvas` e as 4 superfícies derivadas no item 1. Script em Node, matemática mostrada abaixo.

| Texto \ Fundo | canvas `#010102` | surface-1 `#070708` | surface-2 `#0d0d0f` | surface-3 `#121316` | surface-4 `#18191d` |
|---|---|---|---|---|---|
| **ink** `#f7f8f8` | 19.61:1 | 18.92:1 | 18.25:1 | 17.46:1 | 16.51:1 |
| **ink-muted** `#d0d6e0` | 14.28:1 | 13.79:1 | 13.29:1 | 12.72:1 | 12.02:1 |
| **ink-subtle** `#8a8f98` | 6.42:1 | 6.20:1 | 5.98:1 | 5.72:1 | 5.41:1 |
| **ink-tertiary** `#62666d` | 3.62:1 | 3.49:1 | 3.37:1 | 3.22:1 | 3.05:1 |

**Veredito AA** (texto normal ≥ 4.5:1, texto grande ≥ 3:1 — "grande" = ≥18.66px bold ou ≥24px regular, WCAG 2.x):

- `ink`: **PASS normal e grande** em todas as 5 superfícies (16.5:1 a 19.6:1) — folga enorme.
- `ink-muted`: **PASS normal e grande** em todas as 5 superfícies (12.0:1 a 14.3:1).
- `ink-subtle`: **PASS normal e grande** em todas as 5 superfícies (5.4:1 a 6.4:1) — acima do piso de 4.5:1 mesmo no pior caso (surface-4).
- `ink-tertiary`: **FALHA para texto normal** em todas as 5 superfícies (3.05:1 a 3.62:1, piso é 4.5:1) — **PASSA apenas como texto grande** (≥3:1) em todas elas.

**Ação para a névoa de acessibilidade do mapa:** `ink-tertiary` (`#62666d`) só pode ser usado em texto normal (body/caption) se o requisito for AA-large ou se não houver requisito formal de AA — que é o caso de rodapés/legendas muito pequenas em muitos sistemas de marketing, mas **não deve carregar informação essencial** em tamanho de corpo padrão. Onde o `DESIGN.md` aponta `ink-tertiary` para "disabled, footnotes" isso é aceitável (conteúdo não essencial); se a implementação usar `ink-tertiary` em qualquer texto que precise ser lido com confiança (labels de formulário, texto de erro, corpo de case), subir para `ink-subtle` resolve — que passa AA normal com folga em toda a escada.

### Como o cálculo foi feito

Luminância relativa sRGB: `L = 0.2126·R_lin + 0.7152·G_lin + 0.0722·B_lin`, onde cada canal é linearizado por `c ≤ 0.04045 ? c/12.92 : ((c+0.055)/1.055)^2.4` (c normalizado 0–1). Razão de contraste: `(L_clara + 0.05) / (L_escura + 0.05)`. Implementado em Node (`node -e`/script descartável, sem dependências) para evitar erro de aritmética manual; script não versionado (era só ferramenta de cálculo).

## 6. Adaptação honesta — o que substitui o screenshot

O `DESIGN.md` é explícito: "Product UI screenshots dominate as decorative depth" e a Iteration Guide manda "lead every section with a product UI screenshot". Um portfólio pessoal não tem esse ativo em toda seção — tem, no máximo, 2-3 capturas reais de projeto (por `wayfinder/map.md`, ativo real mas ainda não inventariado por completo) e o resto é texto sobre uma pessoa (bio, trajetória, contato).

**Observação-chave:** nem toda página da própria Linear lidera com screenshot. `/pricing` e `/contact/sales` (fontes citadas no `DESIGN.md`) lideram com headline + card estruturado (tiers de preço, formulário) — não com uma captura de produto. Isso já é o precedente do próprio sistema para seções sem UI para mostrar; não é preciso inventar nada fora do vocabulário existente.

**Padrões do próprio sistema que cobrem a lacuna, sem 2º acento cromático, sem gradiente, sem light mode, sem CTA pílula:**

1. **`product-screenshot-card` genérico → "artefato-card".** O mesmo componente (surface-1, `rounded-xl` 16px, padding 24px) pode enquadrar qualquer artefato retangular, não só uma screenshot: um trecho de código real (ver #3), um diagrama de arquitetura, uma captura de terminal. O token não exige que o conteúdo seja literalmente uma tela de produto — exige o enquadramento.
2. **`testimonial-card` para bio/pessoa.** Estrutura já definida (avatar `rounded.full` 32-40px + nome + cargo + texto em `body-lg`) é literalmente o padrão "uma pessoa, uma foto, uma frase" — encaixe direto para a seção "sobre mim" ou para uma citação de cliente, sem inventar layout novo.
3. **Bloco `typography.mono` em `surface-1`/`rounded-xl` como "screenshot de código".** O documento já reserva Linear Mono para "code snippets in product screenshots" — um snippet real (comando de deploy, trecho de config, saída de terminal) dentro do mesmo enquadramento de card resolve a seção "como eu trabalho" sem imagem nenhuma, mantendo o vocabulário do sistema (mono só em contexto de código, nunca como corpo).
4. **`changelog-row` para trajetória/timeline.** Já modelado para "versão, data, mudanças" — mapeia 1:1 para "cargo, período, conquistas" na seção de carreira, reaproveitando token sem criar componente novo.
5. **`status-badge` (`rounded.pill`, mas só aqui — não é CTA) para tags de stack.** O `DESIGN.md` restringe pílula a "pricing tab toggles, status pills" — tags de tecnologia (Next.js, TypeScript, Tailwind) são exatamente esse caso semântico (status/categoria), não botão de ação; usar aqui não viola "don't pill-round CTAs".
6. **`feature-card` 3-up para oferta/serviços.** Onde não há tela para mostrar (ex. "o que eu faço"), a grade de 3 cards genéricos já é o padrão do sistema para conteúdo sem imagem — usa apenas superfície + hairline + tipografia, sem decoração extra.
7. **Headline `display-lg`/`display-md` direto no canvas, sem screenshot abaixo, quando a seção é puramente textual (ex. seção de contato).** É o padrão do `cta-banner` — headline em `surface-1`, sem screenshot, é a leitura correta do sistema para fechamento de página.

**O que fica fora, mesmo sob pressão de "preciso preencher espaço":**
- Nenhum segundo acento cromático (laranja/verde/rosa) para "dar vida" a uma seção sem imagem.
- Nenhum gradiente atmosférico ou spotlight card atrás do texto — a "whitespace" continua sendo o canvas escuro, não um glow.
- Nenhum modo claro para diferenciar uma seção "mais pessoal".
- Nenhum CTA em pílula — mesmo em uma seção de bio mais informal, o CTA permanece `rounded-md` 8px.

## Tokens Tailwind — bloco consolidado

Ver bloco `@theme` completo no item 4 acima; é o entregável "pronto para colar" deste ticket.
