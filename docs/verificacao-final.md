# Verificação final

Data da auditoria: 03/08/2026. Substitui a auditoria de 31/07/2026, feita quando as capturas ainda eram slots pendentes.

## Compilação e rotas

- `npm run typecheck`, `npm run lint`, `npm run format:check` e `npm run build`: aprovados.
- Saída standalone gerada; 11 rotas pré-renderizadas.
- Home, três cases, imagem Open Graph, favicon, `robots.txt` e `sitemap.xml`: estáticos.
- `/projetos/inexistente`: HTTP 404.
- `motion.`: nenhuma ocorrência; as animações usam somente `m.` com `LazyMotion`, `domAnimation` e modo `strict`.

## Servidor standalone

Medido no `server.js` gerado, executado com a mesma disposição de arquivos que o `Dockerfile` monta.

| Rota                               | Status |            Tipo |
| ---------------------------------- | -----: | --------------: |
| `/`                                |    200 |       text/html |
| `/projetos/ceremony`               |    200 |       text/html |
| `/projetos/silcon`                 |    200 |       text/html |
| `/projetos/evoluteam`              |    200 |       text/html |
| `/sitemap.xml`                     |    200 | application/xml |
| `/robots.txt`                      |    200 |      text/plain |
| `/opengraph-image`                 |    200 |       image/png |
| `/curriculo-marcio-petigrosso.pdf` |    200 | application/pdf |
| `/_next/image?...`                 |    200 |       image/png |

O PDF e o otimizador de imagem só respondem quando `public/` e `.next/static/` estão ao lado do `server.js`, que é exatamente o que o `Dockerfile` copia. Rodar `node .next/standalone/server.js` a partir da raiz do repositório dá 404 nesses dois — é limitação do atalho, não do build.

## Produção

Conferido em `https://petigrosso.com`: home, `/sitemap.xml`, `/opengraph-image` e o PDF do currículo respondem 200, e o otimizador devolve `image/png`. O sitemap lista as quatro URLs no domínio correto.

## Navegador

Auditoria no Microsoft Edge headless pelo Chrome DevTools Protocol, com viewport real e espera de hidratação.

| Cenário        |    Viewport | `clientWidth` | `scrollWidth` | Resultado               |
| -------------- | ----------: | ------------: | ------------: | ----------------------- |
| Home escura    |   390 × 844 |           390 |           390 | sem overflow horizontal |
| Home escura    | 1440 × 1000 |          1440 |          1440 | sem overflow horizontal |
| Home clara     | 1440 × 1000 |          1440 |          1440 | sem overflow horizontal |
| Case Evoluteam | 1440 × 1000 |          1440 |          1440 | sem overflow horizontal |

O toggle de tema mudou a classe do documento de `dark` para `light` e persistiu `light` no armazenamento local.

## Imagens

Nenhuma imagem é cortada. As molduras dos cards da home têm proporção fixa, para manter a grade regular, e a captura aparece inteira dentro delas por `object-contain`. Nas páginas de case a moldura assume a proporção natural do arquivo, sem faixa vazia. O zoom de 5% no hover foi removido, porque recortava a imagem justamente no estado em que o visitante está olhando para ela.

| Imagem         |     Natural | Render no case | Render no card |
| -------------- | ----------: | -------------: | -------------: |
| ceremony-capa  |  1351 × 601 |              — |      730 × 401 |
| silcon-capa    |  1352 × 603 |              — |      340 × 204 |
| evoluteam-capa |  1262 × 908 |      730 × 525 |      340 × 204 |
| hero (retrato) | 1254 × 1254 |              — |      112 × 112 |

## Movimento reduzido

Com `prefers-reduced-motion: reduce`: `animation-name` da marquee em `none`, cópia duplicada com `display: none` e reveal em opacidade 1.

## Conteúdo e ativos

- Nenhuma métrica, depoimento ou informação sobre Marcio foi inventada.
- Os nove alt texts descrevem a tela que cada captura realmente mostra, conferidos imagem a imagem.
- Quatorze SVGs do Simple Icons vendorizados, renderizados como máscara monocromática a 22px no carrossel.
- Playwright aparece apenas em texto, sem ícone inexistente.
- Não há links `#`, Lorem Ipsum ou telas falsas construídas com `div`.
- Pendência aberta em `pendencias-manuais.md`: a captura `silcon-apoio-2.png` exibe nomes de colaboradores reais.

## Não medido aqui

Lighthouse no domínio público em modo mobile e a prévia Open Graph nos aplicativos de mensagem. Ambos exigem o endereço real e estão registrados como pendência.
