# Pendências manuais para publicação

O código do portfólio está preparado para receber estes artefatos sem mudar os componentes.

## Imagens reais

Substituir os registros temporários de `imagemPendente()` nos três arquivos em `src/content/projetos/` por imports estáticos dos PNGs abaixo, todos em `src/content/projetos/img/`:

| Arquivo                 | Conteúdo esperado                                   | Proporção                                   |
| ----------------------- | --------------------------------------------------- | ------------------------------------------- |
| `ceremony-capa.png`     | lista de presentes, tela que melhor vende o produto | 16:9, 1920 × 1080                           |
| `ceremony-apoio-1.png`  | fluxo de presente                                   | 16:9, 1920 × 1080                           |
| `ceremony-apoio-2.png`  | painel do casal                                     | 16:9, 1920 × 1080                           |
| `silcon-capa.png`       | dashboard                                           | 16:10 no card, captura original consistente |
| `silcon-apoio-1.png`    | fila de reposição                                   | 16:9, 1920 × 1080                           |
| `silcon-apoio-2.png`    | histórico de movimentações                          | 16:9, 1920 × 1080                           |
| `evoluteam-capa.png`    | dashboard                                           | 16:10 no card, captura original consistente |
| `evoluteam-apoio-1.png` | ciclo de avaliação                                  | 16:9, 1920 × 1080                           |
| `evoluteam-apoio-2.png` | plano de desenvolvimento                            | 16:9, 1920 × 1080                           |

Os dados da Silcon devem ser plausíveis e anonimizados. Fornecedores, valores e estoques reais não podem aparecer.

Adicionar também um retrato quadrado e trocar o slot circular do componente `Hero` por `next/image` com import estático.

## Currículo

Exportar o currículo aprovado e salvar em:

`public/curriculo-marcio-petigrosso.pdf`

O link já está configurado na home.

## Revisão final de copy

As fontes aprovadas contêm duas construções que merecem confirmação do autor. Elas foram preservadas na página, porque o objetivo proíbe correção silenciosa de conteúdo:

- “Antes de programar profissionalmente atuei em operação e administração...” provavelmente pede uma vírgula depois de “profissionalmente”.
- No case Ceremony, “pode receber seus presentes criativos ou lista selecionada em PIX” tem leitura pouco clara e pode não expressar a distinção pretendida.

## Domínio e Railway

1. Verificar e registrar `marciopetigrosso.dev.br`, escolha usada em metadata e sitemap.
2. Se o domínio registrado for diferente, alterar apenas `siteUrl` em `src/content/perfil.ts` e executar um novo build.
3. Conectar este repositório a um serviço Railway. O `Dockerfile`, `railway.json` e `output: "standalone"` já estão configurados.
4. Gerar o domínio temporário da Railway e validar o healthcheck.
5. Adicionar o domínio próprio na área Networking, copiar os registros CNAME/TXT indicados pela Railway e aguardar o HTTPS automático.
6. Depois do deploy, compartilhar a home e uma página de projeto no WhatsApp ou LinkedIn para confirmar a prévia Open Graph.
7. Rodar Lighthouse no endereço público, em modo mobile, e confirmar LCP abaixo de 2,5s e CLS abaixo de 0,1 depois que as imagens reais forem adicionadas.

Não há variáveis de ambiente, banco, analytics, CMS ou chaves de API para configurar.

## Dependências

O ticket 012 fixa o projeto na linha Next.js 15. O `npm audit` atual sinaliza vulnerabilidades transitivas em PostCSS e Sharp dentro dessa linha, sem correção compatível indicada pelo próprio relatório. Não executar `npm audit fix --force`, pois a sugestão atual troca o framework por uma versão incompatível. Reavaliar quando houver uma correção compatível publicada pelo Next.js e pelo Sharp.
