# Referências de Design — Portfolios Scraped

Documento de pesquisa visual/técnica para orientar a construção do portfolio.
Medições feitas em **31/07/2026** via HTML/CSS/JS + Playwright (viewport desktop `1440×900`, mobile `390×844`).

| Fonte | URL | Stack aparente |
|---|---|---|
| **Aman Verma** | https://amanworks.vercel.app/ | Next.js (App Router) + Tailwind v4 + shadcn/ui |
| **Anderson Medeiros** | https://www.andersonbrdev.com/ | React 19 (Vite) + Tailwind CDN + Framer Motion |

> Objetivo: extrair padrões reutilizáveis (estrutura, tipografia, espaçamento, motion, componentes) — não copiar identidade visual literal.

---

## 1. Comparativo rápido (o que cada um faz bem)

| Dimensão | Aman | Anderson | Lição para o nosso portfolio |
|---|---|---|---|
| Tom | Editorial técnico (serif + mono) | Currículo minimalista (Inter + accent laranja) | Escolher **uma** voz tipográfica; evitar misturar os dois sistemas |
| Largura do conteúdo | `max-w-4xl` = **896px** | `max-w-[800px]` = **800px** | Coluna estreita (800–896px) lê melhor que full-bleed |
| Hero | Nome + bio + mídia + social + contribution graph | Avatar + nome grande + meta + sobre + CTAs | Hero deve carregar identidade em 1 viewport; Aman é mais “produto”, Anderson mais “CV” |
| Projetos | Cards com screenshot `aspect-video`, badge Live/Building | Blocos textuais com bullets e métricas | Preferir **evidência visual** (Aman) + **prova de impacto** (Anderson) |
| Motion | CSS transitions + blur/text reveal + hover scale em cards | Framer Motion `whileInView` com stagger | Usar 2–3 motions intencionais; Anderson é referência de scroll-reveal |
| Tema | Light default + tokens dark (shadcn) | Light `#fafafa` / Dark `#0b0b0b` + toggle | Dark mode opcional; accent cromático só se tiver papel claro |
| Densidade | Média-alta, seções ricas | Média, muito whitespace vertical (`space-y-24`) | Respiração vertical ≥ 64–96px entre seções |

---

## 2. Aman Verma — anatomia pixel-level

### 2.1 Estrutura da página (ordem vertical)

1. **Hero / About** — nome, role, 3 parágrafos bio, social chips, mídia (ilustração), meta local/data/hora, GitHub activity calendar  
2. **Projects** — grid 2×2 (desktop) / 1 col (mobile) + CTA “View All Projects”  
3. **Tech Stack** — chips com ícone + label + filtro “All”  
4. **Blogs** — grid 2 col + CTA “View All Blogs”  
5. **Work With Me** — headline de contato + social novamente  
6. **Quote** — blockquote grande com aspas decorativas  
7. **Footer** — crédito + © + contador de views  

Altura total desktop ≈ **3403px**.

### 2.2 Container & grid

```txt
Container principal:
  class ≈ relative mx-auto flex min-h-screen w-full max-w-4xl flex-col
  max-width: 896px
  margin lateral @1440: ~272px cada lado
  padding interno horizontal tipico: px-8 (32px); md:px-12 / md:px-16 em blocos

Hero:
  Coluna texto ~512px + coluna mídia à direita
  Nome H1 top ≈ y:128px

Breakpoints observados no CSS:
  sm ≈ 40rem (640px)
  md ≈ 48rem (768px)
  prefers-reduced-motion: reduce (respeitado)
```

### 2.3 Tipografia (medido)

| Papel | Família | Size | Weight | Line-height | Tracking | Classe típica |
|---|---|---|---|---|---|---|
| Display / section H1 | **Instrument Serif** | **30px** (`text-3xl`) | 400 | 36px (1.2) | normal | `font-heading text-3xl` |
| CTA headline | Instrument Serif | 30px | 500 | 36px | **0.75px** (`tracking-wide`) | `text-2xl md:text-3xl font-medium tracking-wide` |
| Body / bio | **IBM Plex Mono** | **14px** (`text-sm`) | 400 | 20px (~1.43) | normal | `text-sm` |
| UI / labels | IBM Plex Mono | 12–14px (`text-xs`/`text-sm`) | 400–500 | — | — | `text-muted-foreground` |
| Base body | IBM Plex Mono | 16px | 400 | 24px | — | `body` |

**Contraste tipográfico chave:** serif só no heading; **tudo o mais é mono**. Isso cria identidade forte sem accent de cor.

Fonts carregadas via `next/font` (preload woff2). CSS vars:

```css
--font-heading: "Instrument Serif", "Instrument Serif Fallback";
--font-sans: "IBM Plex Mono", "IBM Plex Mono Fallback"; /* usado como body */
--radius: 0.45rem; /* ~7.2px base shadcn */
```

### 2.4 Cor & tokens (shadcn-like)

**Light (default medido):**

| Token | Hex aproximado | Uso |
|---|---|---|
| `--background` | `#ffffff` | Canvas |
| `--foreground` | `#0a0a0a` | Texto principal |
| `--muted` / `--secondary` | `#f5f5f5` | Superfícies sutis, chips |
| `--muted-foreground` | `#737373` | Bio, meta, secundário |
| `--border` | `#e5e5e5` | Cards, botões outline |
| `--card` | `#ffffff` | Cards |
| `--radius` | `.45rem` | Base; `rounded-md` / `rounded-xl` / `rounded-2xl` derivados |
| Status Live | emerald `#00bb7f` / `#00d294` | Badge |
| Status Building | amber `#f99c00` / `#fcbb00` | Badge |
| Destructive | `#e40014` | Erros (sistema) |

**Dark tokens presentes** (não é o default visual):

```txt
background #0a0a0a · foreground #fafafa · card #171717
border #ffffff1a · muted-foreground #a1a1a1
```

A página é essencialmente **quase monocromática**; cor só em status pills.

### 2.5 Espaçamento & ritmo

| Elemento | Valor medido / classe |
|---|---|
| Gap entre H1s de seção | ~224–978px (conteúdo entre eles; seções “respiram”) |
| Section title padding | `py-2` (8px) |
| Card padding (hero media) | `p-3` (12px), `rounded-2xl`, `border` |
| Project card image hover | `group-hover/card:scale-105` + `duration-500 ease-out` |
| Icon hover | `group-hover:scale-110` |
| Social / botões | `rounded-md` / `rounded-full`, `gap-1.5`–`gap-2` |
| Footer | `pt-20`, texto `text-sm`, centrado |
| Container padding mobile | conteúdo full-width com gutters menores |

Escala Tailwind ativa (confirmada no CSS): `--spacing: .25rem` (4px).

### 2.6 Componentes recorrentes

**Social chip / botão outline**

- `inline-flex items-center`, borda `border-border`, `rounded-md`
- `transition-colors`, hover `hover:bg-muted` / `hover:text-foreground`
- Active press: `active:translate-y-px` (micro feedback 1px)
- Focus: `focus-visible:ring-3 focus-visible:ring-ring/50`

**Project card**

- Container `group/card`, borda hairline, cantos superiores `rounded-t-xl`
- Imagem `aspect-video object-cover`, zoom no hover (`scale-105`, 500ms ease-out)
- Título serif + badge pill (Live verde / Building âmbar)
- Descrição mono `text-sm` muted
- Rodapé: ícones de stack + links externos

**Tech chip**

- Fundo muted, borda sutil, ícone + label, wrap horizontal denso

**Blog card**

- Mesma linguagem visual do project card; meta `date · N min read` em mono

### 2.7 Motion (Aman)

Biblioteca principal: **CSS / Tailwind animate** (não Framer no core).

| Motion | Implementação | Timing |
|---|---|---|
| Text reveal (hero) | Spans com `opacity` + `filter: blur` → sharp | Entrada on-load |
| Card image hover | `group-hover/card:scale-105` | `duration-500 ease-out` |
| Icon hover | `group-hover:scale-110` | transform transition |
| Card/media shadow | `transition-shadow duration-300` → `hover:shadow-[0_8px_30px_rgba(0,0,0,…)]` | 300ms `cubic-bezier(0.4, 0, 0.2, 1)` |
| Button press | `active:translate-y-px` | imediato |
| Color hover | `transition-colors` / `duration-150` | 150ms (default TW) |
| Ping (status?) | `@keyframes ping` | 1s |
| Enter/exit (UI) | `@keyframes enter/exit` (opacity, translate, scale, blur) | `.15s` default |
| Scroll-fade masks | CSS vars `--scroll-fade-*` | fade nas bordas de overflow |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` | obrigatório |

**Defaults de transição no tema:**

```css
--default-transition-duration: .15s;
--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
--ease-out: cubic-bezier(0, 0, .2, 1);
```

### 2.8 Mobile (390px)

- Stack vertical: mídia no topo → texto → social → calendar  
- Projetos em coluna única  
- Mesma tipografia de section titles (30px) — não encolhe agressivamente  
- Gutters internos menores; container ainda centrado  

---

## 3. Anderson Medeiros — anatomia pixel-level

### 3.1 Estrutura da página (ordem vertical)

1. **Header / Identity** — avatar circular, nome, cargo, toggle tema, seletor PT/EN, meta (local · tel · email), “Sobre mim”, CTAs (LinkedIn, GitHub, Portfolio, Baixar CV)  
2. **Projetos em destaque** — AalvoHub, Brotu (título + one-liner + bullets de impacto)  
3. **Experiência profissional** — timeline textual (empresa, datas mono, cargo, bullets)  
4. **Habilidades & tech stack** — chips wrap  
5. **Formação + Idiomas** — grid 2 col  
6. **Footer** — © esquerda · role direita  

Altura total desktop ≈ **3738px**.

Landmarks medidos (tops @1440):

| Seção | Top (px) | Largura |
|---|---|---|
| Header (`space-y-12`) | 96 | 752 |
| Projetos | 1056 | 752 |
| Experiência | 1812 | 752 |
| Skills | 3142 | 752 |
| Formação | 3409 | 752 |
| Footer | 3578 | 752 |

### 3.2 Container & layout

```txt
class ≈ max-w-[800px] mx-auto px-6 py-16 md:py-24 space-y-24

max-width: 800px
padding: 96px 24px  (md: py-24 = 96px vertical; px-6 = 24px)
margin lateral @1440: ~320px cada lado
espaço entre seções principais: space-y-24 = 96px
header interno: space-y-12 = 48px
```

Conteúdo útil ≈ **752px** (800 − 24×2).

### 3.3 Tipografia (medido)

Fonte única: **Inter** (Google Fonts 300–700) + mono do sistema para datas.

| Papel | Size | Weight | Line-height | Tracking | Classe |
|---|---|---|---|---|---|
| Nome (H1) | **60px** (`md:text-6xl`; base `text-5xl`) | **800** | 60px (1.0) | **-3px** (`tracking-tighter`) | `font-extrabold tracking-tighter` |
| Cargo | ~20px (`text-xl`) | 500 | — | — | `text-neutral-500 font-medium` |
| Section label (H2) | **12px** | **700** | 16px | **2.4px** (`tracking-[0.2em]`) | `uppercase text-neutral-400 border-b pb-1/2` |
| Project / job title (H3) | **20px** | 700 | 28px | **-0.5px** | `tracking-tight` |
| Body “Sobre” | 18–20px (`text-lg md:text-xl`) | 400 | relaxed | — | `leading-relaxed` |
| Project one-liner | 14px italic | 600 | — | — | `border-l-2 border-orange-200 pl-3` |
| Bullets | 13–14px | 400 | relaxed | — | `text-[13px]` / `text-sm text-neutral-500` |
| Datas | 12px | 400 | — | — | `font-mono text-neutral-400` |
| Skills / footer labels | 10–12px | 700 | — | widest | `uppercase tracking-widest` |
| Title utility CSS | `clamp(2.5rem, 5vw, 3.5rem)` / lh 1.1 | — | — | `.text-title` (definido, H1 usa TW) |

### 3.4 Cor

Definido no HTML inline + `theme-color`:

| Token | Light | Dark | Uso |
|---|---|---|---|
| Background | `#fafafa` | `#0b0b0b` | Canvas |
| Ink | `#0b0b0b` | `#f5f5f5` | Texto |
| Accent | **`#f97316`** (orange-500) | hover `orange-300/200` | theme-color, ícones, bordas de destaque |
| Accent hover | `#ea580c` / `#fb923c` | — | links/ícones |
| Neutrals | slate/neutral Tailwind | `neutral-800/700` borders | UI chrome |
| Live dot | `green-500` | — | status online |

```css
.accent-color { color: #f97316; }
.accent-bg { background-color: #f97316; }
.accent-border { border-color: #f97316; }
body { scroll-behavior: smooth; }
```

Accent é **escasso** — aparece em download icon, hovers e border-left de tagline. O resto é neutro.

### 3.5 Componentes

**Avatar**

```txt
w-28 h-28 (112px) rounded-full object-cover
ring-2 ring-neutral-200 dark:ring-neutral-700
```

**CTA outline pills**

```txt
inline-flex items-center gap-2 px-3 py-1.5 rounded-full
border border-neutral-200 dark:border-neutral-700
bg-white dark:bg-neutral-900 text-xs font-semibold
hover → fundo/neutro + accent laranja nos ícones
transition-all
```

**Section label**

```txt
text-xs font-bold uppercase tracking-[0.2em]
text-neutral-400 border-b border-neutral-100/200 pb-1|2 mb-8
```

**Project block**

- Título 20px bold  
- Tagline italic com `border-l-2 border-orange-200 pl-3`  
- Descrição `text-sm leading-relaxed mb-6`  
- Bullets em coluna (`gap-2` / `gap-3`), ícone `•` implícito  
- Grid de meta opcional `md:grid-cols-2 gap-x-8 gap-y-2`

**Experience row**

```txt
flex flex-col md:flex-row justify-between items-start md:items-baseline gap-1 mb-2
empresa: text-lg font-bold
data: text-xs font-mono text-neutral-400
cargo: text-sm font-semibold text-neutral-600 mb-4
```

**Skills**

```txt
flex flex-wrap gap-2 md:gap-3
chips neutros, sem sombra
```

**Footer**

```txt
pt-12 border-t border-neutral-200
text-[10px] font-bold uppercase tracking-widest text-neutral-300
flex justify-between
```

### 3.6 Motion (Anderson) — Framer Motion

Detectado no bundle: `whileInView`, `initial`, springs, staggers.

**Presets extraídos do JS:**

```js
// Entradas de seção / blocos
initial: { opacity: 0, y: 18 | 16 | 14 | 10 | 24 }
whileInView: { opacity: 1, y: 0 }

// Entradas laterais (bullets / linhas)
initial: { opacity: 0, x: -8 | -6 }
whileInView: { opacity: 1, x: 0 }

// Escala (avatar / ícones)
initial: { opacity: 0, scale: 0.8 }

// Timings
transition: { duration: 0.6, ease: "easeOut" }
transition: { duration: 0.4, ease: "easeOut" }
transition: { duration: 0.45, ease: "easeOut", delay: n * 0.05 }  // stagger
transition: { duration: 0.35, ease: "easeOut", delay: t * 0.03 }
transition: { duration: 0.45, ease: "easeOut", delay: t * 0.04 }
transition: { type: "spring", stiffness: 260, damping: 18 }
transition: { type: "spring", stiffness: 280, damping: 18 }
transition: { type: "spring", stiffness: 260, damping: 16 }

// Viewport
viewport: { once: true, amount: 0.2 }
viewport: { once: true }
```

**Estado observado no DOM (antes de entrar na viewport):**

```txt
section → opacity: 0; transform: translateY(24px)
project group → opacity: 0; transform: translateY(16px)
li bullets → opacity: 0; transform: translateX(-8px) ou -6px
```

**Hovers CSS:**

```txt
ícones: hover:text-orange-600 dark:hover:text-orange-300
        hover:bg-neutral-100 dark:hover:bg-neutral-800
        transition-all
botões/chips: transition-all / transition-colors
```

**Theme toggle:** class `dark` no `<html>`, preferência em `localStorage.theme`, fallback `prefers-color-scheme`.

### 3.7 Mobile

- H1 cai de 60px → ~48px (`text-5xl`)  
- `space-y-24` e `px-6` mantidos  
- Meta/contact wrap  
- Projetos e experiência empilham (já são 1 coluna)  
- Skills wrap com `gap-2`  

---

## 4. Diretrizes sintetizadas para o nosso portfolio

### 4.1 Layout (pegar o melhor dos dois)

1. **Coluna única centrada** entre **800px e 896px** (`max-w-[800px]` ou `max-w-4xl`).  
2. **Padding vertical generoso:** `py-16` mobile / `py-24` desktop; **gap entre seções `64–96px`**.  
3. **Horizontal gutters:** `px-6` (24px) mínimo; no desktop pode subir a 32–48px.  
4. **Uma composição por seção:** 1 heading + 1 supporting line + 1 bloco de conteúdo.  
5. Ordem sugerida (híbrido):  
   `Hero → Projetos (com screenshot) → Experiência/prova → Stack → Contato/Footer`

### 4.2 Tipografia (escolha de sistema)

Não misturar Instrument Serif+Mono **e** Inter extrabold no mesmo site sem intenção.

**Opção A — Editorial/dev (inspiração Aman)**  
- Display: serif expressiva (ex.: Instrument Serif / similar)  
- Body/UI: mono ou sans técnica  
- Section titles ~30px, weight 400–500  
- Body 14–16px, muted `#737373`

**Opção B — CV moderno (inspiração Anderson)**  
- Tudo Inter (ou uma sans boa — **evitar Inter se quisermos menos genérico**; Satoshi/Geist/Neue Montreal etc.)  
- Nome 48–60px, weight 800, tracking **-0.05em a -0.03em**  
- Labels de seção 12px uppercase + tracking `0.2em` + hairline border  

### 4.3 Cor

- Canvas claro: `#ffffff` ou `#fafafa`  
- Ink: `#0a0a0a` / `#0b0b0b`  
- Muted: `#737373` / `#a3a3a3`  
- Border: `#e5e5e5` / `#e5e5e5`–`neutral-200`  
- **Um accent só**, usado com parcimônia (status, CTA, hover) — Anderson `#f97316` é exemplo de accent pontual  
- Status: verde = live, âmbar = building/wip  

### 4.4 Superfícies & cards

| Padrão | Quando usar |
|---|---|
| **Sem card** (Anderson) | Experiência, bullets, texto — só tipografia + divisórias |
| **Card com mídia** (Aman) | Projetos e posts — screenshot + borda 1px + radius 12–16px |
| Sombra | Só no hover (`0 8px 30px rgba(0,0,0,0.08–0.12)`), nunca como estado default |
| Radius base | 6–8px UI; 12–16px mídia; avatar full (`9999px`) |

### 4.5 Motion (receita prática)

Implementar **no máximo 3 famílias** de motion:

1. **Scroll reveal de seção** (Anderson)  
   - `opacity 0→1`, `y 16–24 → 0`  
   - `duration 0.45–0.6`, `easeOut`  
   - `viewport once`, `amount ~0.2`  
2. **Stagger de lista**  
   - delay `index * 0.03–0.05`  
   - bullets podem entrar em `x: -6/-8`  
3. **Hover de projeto** (Aman)  
   - imagem `scale 1.05` em 500ms ease-out  
   - sombra 300ms  
   - press `translateY(1px)` em botões  

Sempre respeitar `prefers-reduced-motion: reduce` (desligar translate/scale; manter opacity se necessário).

### 4.6 Componentes mínimos a especificar

- [ ] Hero com nome dominante + 1 frase + 1 grupo de CTAs  
- [ ] Project card com screenshot real (`aspect-video`) + status badge + stack icons  
- [ ] Section label (serif grande **ou** uppercase tracked — um só)  
- [ ] Tech chips  
- [ ] Experience row (empresa / data mono / bullets com métricas)  
- [ ] Footer minimal com hairline  
- [ ] (Opcional) dark toggle como Anderson  
- [ ] (Opcional) contribution graph / social proof como Aman  

### 4.7 Conteúdo (o que os dois ensinam)

- **Aman:** mostra produto (screenshots, live badges, blogs). Bom para junior/estágio com projetos aplicados.  
- **Anderson:** mostra impacto (receita, %, escala, liderança). Bom para mid/senior.  
- Para Marcio: misturar **screenshot dos sistemas** (Silcon, Feltrin) + **1–2 métricas concretas** por case.

### 4.8 Anti-padrões observados / a evitar

- Hero lotado de stats + schedule + pills (nenhum dos dois faz isso)  
- Cards com sombra multi-camada permanente  
- Gradiente roxo genérico / glow neon  
- Accent competindo com o nome no H1  
- Motion excessivo (parallax, particles) — os dois são contidos  
- Largura > 1000px para texto corrido  

---

## 5. Tokens sugeridos (ponto de partida)

```css
:root {
  /* Layout */
  --page-max: 52rem;          /* 832px — meio-termo 800/896 */
  --page-pad-x: 1.5rem;       /* 24px */
  --page-pad-y: 6rem;         /* 96px desktop */
  --section-gap: 6rem;        /* 96px */

  /* Color */
  --canvas: #fafafa;
  --ink: #0b0b0b;
  --ink-muted: #737373;
  --ink-subtle: #a3a3a3;
  --line: #e5e5e5;
  --surface: #ffffff;
  --accent: /* escolher 1 hue — não copiar orange por default */;
  --live: #00bb7f;
  --wip: #f99c00;

  /* Type scale */
  --text-display: clamp(2.5rem, 5vw, 3.75rem);
  --text-section: 1.875rem;   /* 30px */
  --text-card: 1.25rem;       /* 20px */
  --text-body: 1rem;
  --text-small: 0.875rem;
  --text-label: 0.75rem;

  /* Radius */
  --radius-sm: 0.45rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;

  /* Motion */
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --dur-fast: 150ms;
  --dur-mid: 300ms;
  --dur-slow: 500ms;
  --reveal-distance: 20px;
  --reveal-duration: 500ms;
}
```

### Snippet Framer (padrão Anderson)

```tsx
const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const staggerItem = (i: number) => ({
  initial: { opacity: 0, x: -8 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.35, ease: "easeOut", delay: i * 0.04 },
  viewport: { once: true, amount: 0.2 },
});
```

### Snippet hover card (padrão Aman)

```css
.project-card img {
  transition: transform 500ms var(--ease-out);
}
.project-card:hover img {
  transform: scale(1.05);
}
.project-card {
  transition: box-shadow 300ms var(--ease-standard);
}
.project-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}
```

---

## 6. Checklist de fidelidade (quando for implementar)

**Layout**
- [ ] Conteúdo ≤ 896px centrado  
- [ ] Seções com gap ≥ 64px  
- [ ] Mobile 390: 1 coluna, sem overflow horizontal  

**Tipo**
- [ ] Hierarquia clara em ≤ 5 tamanhos  
- [ ] Tracking negativo só no display grande  
- [ ] Labels de seção consistentes (serif OU uppercase — não ambos)  

**Cor**
- [ ] 1 accent; resto neutro  
- [ ] Badges Live/WIP com semântica  

**Motion**
- [ ] Reveal on scroll once  
- [ ] Hover scale só na mídia do projeto  
- [ ] `prefers-reduced-motion` ok  

**Conteúdo**
- [ ] Screenshot real por projeto  
- [ ] ≥ 1 métrica/impacto quando existir  
- [ ] CTAs claros (GitHub / LinkedIn / Contato / CV)  

---

## 7. Método de scraping (reprodutível)

1. Download do HTML + CSS chunks (`/_next/static/...`) e JS bundles  
2. Extração de tokens (`:root`, `@font-face`, keyframes, classes Tailwind)  
3. Playwright headless:  
   - screenshot full-page desktop/mobile  
   - `getComputedStyle` em H1–H3, containers, cards, botões  
   - inspeção de nós com `opacity/transform` (Framer)  
4. Artefatos brutos (opcional, local): pasta `_scrape/`  

---

## 8. Fontes

- https://amanworks.vercel.app/  
- https://www.andersonbrdev.com/  

*Medições sujeitas a deploy futuro dos autores; validar de novo se for clonar um detalhe específico.*
