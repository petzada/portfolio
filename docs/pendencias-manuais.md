# Pendências manuais

Atualizado em 03/08/2026.

## Concluído

- **Capturas dos três projetos.** Os nove PNGs estão em `src/content/projetos/img/` e entram por import estático. Não existe mais slot pendente nem o módulo `imagem-pendente.ts`.
- **Retrato.** `src/content/hero.png`, renderizado por `next/image` no `Hero`.
- **Currículo.** `public/curriculo-marcio-petigrosso.pdf`, servido em `/curriculo-marcio-petigrosso.pdf` e validado em produção.
- **Domínio.** `https://petigrosso.com`, registrado e configurado na Railway. É o valor de `siteUrl` em `src/content/perfil.ts`, usado por `metadataBase`, canonicals, sitemap e robots.
- **Deploy.** Serviço Railway no ar, com HTTPS, healthcheck em `/` e otimizador de imagem respondendo `200 image/png`.

## Aberto

### Anonimização da captura da Silcon

`silcon-apoio-2.png` (histórico de movimentações) exibe **nomes completos de colaboradores reais** da Silcon Ambiental na coluna "Envolvido", junto de produtos, valores unitários e totais. O ticket 007 exigia anonimizar dado real de empresa antes de publicar, e essa captura está publicada desde o commit `777ff88`.

Decidir entre: recapturar com nomes fictícios, borrar a coluna, ou obter autorização explícita da empresa. É a única pendência que envolve dado de terceiro.

### Revisão de copy pendente de confirmação

Duas construções vieram das fontes aprovadas e foram preservadas, porque o objetivo proíbe correção silenciosa de conteúdo:

- `src/content/perfil.ts` — "Antes de programar profissionalmente atuei em operação e administração..." provavelmente pede vírgula depois de "profissionalmente".
- `src/content/projetos/ceremony.ts` — "pode receber seus presentes criativos ou lista selecionada em PIX" tem leitura pouco clara.

Corrigido nesta rodada, por ser erro ortográfico e não afirmação de conteúdo: "contas à pagar" virou "contas a pagar" em `src/content/trajetoria.ts`.

### Validação no dispositivo real

Depois do deploy desta rodada:

1. Compartilhar a home e uma página de projeto no WhatsApp e no LinkedIn, para confirmar a prévia Open Graph. A imagem é gerada em `/opengraph-image`, 1200 × 630, e vale para as quatro rotas.
2. Rodar Lighthouse no endereço público, em modo mobile, e confirmar LCP abaixo de 2,5s e CLS abaixo de 0,1 agora que todas as imagens são reais.
3. Conferir a leitura das capturas em tela de celular. As telas densas — Silcon e Evoluteam — renderizam a cerca de 332px de largura no card, e é onde a legibilidade pode cair.

### Peso das capturas

As fontes somam cerca de 3,5 MB de PNG no repositório, sendo 1,9 MB só do retrato de 1254 × 1254 usado a 112px. Não afeta a página, porque o `next/image` serve variantes otimizadas, mas infla o clone e o tempo de build. Reduzir na próxima vez que as capturas forem refeitas.

### Proporção das capturas

As capturas de Ceremony e Silcon são ~2,25:1 e as de Evoluteam ~1,39:1. Como a exibição passou a mostrar a imagem inteira, essa diferença não corta mais nada, mas aparece como faixa vazia dentro das molduras dos cards da home, que têm proporção fixa para manter a grade regular. Recapturar em proporção uniforme deixaria os cards mais cheios.

## Dependências

O ticket 012 fixa o projeto na linha Next.js 15. O `npm audit` sinaliza vulnerabilidades transitivas em PostCSS e Sharp dentro dessa linha, sem correção compatível indicada pelo próprio relatório. Não executar `npm audit fix --force`: a sugestão atual troca o framework por uma versão incompatível. Reavaliar quando houver correção compatível publicada.

Não há variáveis de ambiente, banco, analytics, CMS ou chaves de API para configurar.
