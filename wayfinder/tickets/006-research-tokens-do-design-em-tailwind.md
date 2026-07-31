---
id: 006
title: Research — tokens do DESIGN.md em Tailwind
type: research
mode: AFK
status: closed
assignee: agente-research-tokens (Sonnet)
blocked_by: []
---

## Question

Como o sistema do `DESIGN.md` vira tokens executáveis em Tailwind, e quais são os valores que o documento não entrega?

O `DESIGN.md` é preciso na intenção mas incompleto nos valores: a escada de superfícies aparece como `{colors.surface-1}` até `{colors.surface-4}` sem hex algum, e as famílias tipográficas da Linear são proprietárias. Sem resolver isso, nenhuma decisão visual posterior tem chão.

Levantar:

1. **Os hex faltantes da escada de superfícies** — os quatro degraus entre o canvas #010102 e as superfícies elevadas, mais `hairline-strong` e `hairline-tertiary`, coerentes com `hairline` #23252a. Derivar de uma escala consistente e justificar o método; a fidelidade pixel-a-pixel à Linear importa menos do que a escada ser regular e legível.
2. **A escolha tipográfica** — Inter versus Geist para display e corpo, considerando que o texto é em português (acentuação, cedilha) e que os pesos usados são 400/500/600. Verificar disponibilidade via `next/font` e o custo de carregamento.
3. **Tracking negativo na prática** — a tabela do `DESIGN.md` dá tracking em pixels por tamanho (−3.0px a 80px, até −0.05px no corpo). Converter para `em`, que é o que escala corretamente no responsivo, e definir como isso vira utilitários.
4. **Encaixe na versão do Tailwind** — se o alvo é Tailwind v4, os tokens vivem em `@theme` no CSS, não em `tailwind.config.js`. Confirmar a sintaxe atual e produzir o bloco de tokens pronto para colar.
5. **Contraste** — medir o par de cada nível de texto (`ink`, `ink-muted`, `ink-subtle`, `ink-tertiary`) contra canvas e contra cada superfície; marcar quais passam AA e em que tamanho. Alimenta diretamente a névoa de acessibilidade do mapa.
6. **A adaptação honesta** — o `DESIGN.md` manda "liderar toda seção com screenshot de produto" e apoia a página inteira nisso. Um portfólio pessoal tem menos telas e mais texto sobre uma pessoa. Levantar que padrões da Linear substituem o screenshot onde não houver um — sem inventar um segundo acento cromático, que o documento proíbe.

Registrar em `wayfinder/assets/` e apontar daqui.

## Resolution

Research completa em `wayfinder/assets/006-design-tokens-research.md`. Conclusões acionáveis:

1. **Escada de superfícies** derivada por interpolação linear em HSL entre os dois âncoras do documento (canvas L=0.59%, hairline L=15.10%), matiz/saturação fixos no tom azulado do hairline (H≈223°, S≈9.1%), passo ΔL≈2.42%: `surface-1` `#070708` · `surface-2` `#0d0d0f` · `surface-3` `#121316` · `surface-4` `#18191d` · `hairline-tertiary` `#1d1f23` · `hairline-strong` `#292b31`.
2. **Fonte: Inter** (400/500/600), via `next/font/google`, variável, self-hosted. Vence Geist por maturidade de cobertura de acentuação latina estendida em produção (Geist ainda expande cobertura de idiomas, ex. Cyrillic recém-adicionado) e por já ser a recomendação primária do próprio `DESIGN.md`.
3. **Tracking convertido px→em** para as 13 escalas tipográficas — de -0.0375em (display-xl) a +0.0308em (eyebrow); tabela completa no relatório.
4. **Tailwind v4 confirmado** como linha estável corrente (série 4.3.x em jul/2026); tokens vivem em `@theme` no CSS de entrada, não em `tailwind.config.js`. Bloco `@theme` completo, pronto para colar, entregue no relatório.
5. **Contraste WCAG**: `ink` e `ink-muted` passam AA (normal e grande) contra canvas e as 4 superfícies com folga grande (12:1 a 19.6:1). `ink-subtle` passa AA normal em todas (5.4:1 a 6.4:1). **`ink-tertiary` (#62666d) reprova AA normal em todas as superfícies (3.05:1–3.62:1) — só serve como texto grande (≥3:1)**; não deve carregar informação essencial em corpo padrão. Isso fecha a névoa de acessibilidade do mapa: usar `ink-tertiary` só em disabled/footnote, nunca em label ou corpo funcional.
6. **Adaptação sem screenshot**: o próprio sistema Linear já cobre seções sem UI (`/pricing`, `/contact/sales` não lideram com screenshot). Substitutos sem inventar vocabulário novo: `testimonial-card` para bio, blocos mono em `product-screenshot-card` para trechos de código reais, `changelog-row` para trajetória, `status-badge` (pílula, mas só aqui — categoria/tag, não CTA) para stack, `feature-card` 3-up para oferta, `cta-banner`-style headline direto no canvas para fechamento. Nenhum segundo acento, gradiente, light mode ou CTA pílula.
