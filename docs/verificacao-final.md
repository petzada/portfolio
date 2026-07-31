# Verificação final

Data da auditoria: 31/07/2026.

## Compilação e rotas

- `npm run typecheck`: aprovado.
- `npm run lint`: aprovado.
- `npm run format:check`: aprovado.
- `npm run build`: aprovado.
- Saída standalone: `.next/standalone/server.js` gerada.
- Home, três cases, imagem Open Graph, favicon, `robots.txt` e `sitemap.xml`: gerados estaticamente.
- `/projetos/inexistente`: HTTP 404.
- `motion.`: nenhuma ocorrência; as animações usam somente `m.` com `LazyMotion`, `domAnimation` e modo `strict`.

## Navegador

A auditoria foi feita no Microsoft Edge headless pelo Chrome DevTools Protocol, com viewport real e espera de hidratação.

| Cenário        |    Viewport | `clientWidth` | `scrollWidth` | Resultado               |
| -------------- | ----------: | ------------: | ------------: | ----------------------- |
| Home clara     |   390 × 844 |           390 |           390 | sem overflow horizontal |
| Home escura    |   390 × 844 |           390 |           390 | sem overflow horizontal |
| Home clara     | 1440 × 1000 |          1425 |          1425 | sem overflow horizontal |
| Home escura    | 1440 × 1000 |          1425 |          1425 | sem overflow horizontal |
| Case Evoluteam |   390 × 844 |           390 |           390 | sem overflow horizontal |
| Case Ceremony  | 1440 × 1000 |          1425 |          1425 | sem overflow horizontal |

O toggle mudou a classe do documento de `dark` para `light` e persistiu `light` no armazenamento local. O disclosure "Como foi construído" iniciou fechado e respondeu à ativação, mudando seu estado para aberto.

## Movimento reduzido

Com `prefers-reduced-motion: reduce`:

- reveal: opacidade 1 e transform `none`;
- marquee: `animation-name: none` e rolagem manual;
- cópia duplicada da marquee: escondida;
- hover de mídia: sem escala.

Com movimento normal, o hero terminou em opacidade 1 e transform `none`; a marquee manteve `animation-name: marquee-slide`.

## Desempenho local

Medição mobile pelas APIs `PerformanceObserver`, usando o servidor de produção local:

| Métrica            | Resultado |        Meta |
| ------------------ | --------: | ----------: |
| LCP                |    232 ms |     < 2,5 s |
| CLS                |         0 |       < 0,1 |
| `DOMContentLoaded` |     21 ms | informativo |
| `load`             |    159 ms | informativo |

Esses números validam a construção atual, mas não substituem o Lighthouse no domínio público com as capturas reais. Essa checagem está registrada nas pendências manuais.

## Conteúdo e ativos

- Nenhuma métrica, depoimento ou informação sobre Marcio foi inventada.
- Os textos vêm do protótipo v12, do currículo e de `cases-para-revisao.md`.
- Os nove slots de projeto e o retrato estão marcados explicitamente como pendentes.
- Quatorze SVGs do Simple Icons estão vendorizados e renderizados como máscara monocromática.
- Playwright aparece apenas em texto, sem ícone inexistente.
- Não há links `#`, Lorem Ipsum ou telas falsas construídas com `div`.
