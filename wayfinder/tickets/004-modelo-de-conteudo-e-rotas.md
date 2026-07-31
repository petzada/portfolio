---
id: 004
title: Modelo de conteúdo e rotas
type: grilling
mode: HITL
status: open
assignee:
blocked_by: [002, 003]
---

## Question

Como um projeto é representado no repositório, e qual o mapa de rotas do site?

Modelagem de domínio: existe uma entidade — o Projeto — que aparece em duas superfícies (card no one-pager, página de case) e precisa de uma única fonte de verdade. Como ela é tipada, onde mora, e como vira páginas.

Depende de **Curadoria dos projetos** (002) e **Anatomia da página de case** (003): o formato de dado só pode ser desenhado depois que os campos existirem.

**Insumo de 008.** Os campos que o protótipo v6 já exercita para cada projeto: `nome` (renderizado em caixa alta), `descricao_curta` (uma frase, consequência e não funcionalidade), `status` (ativo ou inativo, renderizado como ponto sólido ou vazado, sem cor), `stack` (lista de chips), `url_publica` (opcional; só o Ceremony tem), `destaque` (booleano; governa se o card ocupa a largura inteira ou meia), e as capturas com suas proporções por posição. Notar que `status` **não** é texto livre: os rótulos "no ar", "em uso" e "demo" já apareceram, e precisam virar um conjunto fechado.

Precisa fechar com:

1. **O tipo `Projeto`** — todos os campos, quais são obrigatórios, quais opcionais, e o que acontece na renderização quando um opcional falta (o caso "projeto sem métrica de resultado" de 003 precisa ter resposta no tipo, não no JSX).
2. **Onde o conteúdo mora** — arquivo `.ts` com objetos tipados, MDX por projeto, ou uma pasta por projeto com metadados e corpo separados. O critério real é o de manutenção: como Marcio adiciona o projeto nº 5 daqui a seis meses.
3. **Onde as imagens moram** e como se relacionam com o registro do projeto — convenção de nomes, `public/` versus import, alt text obrigatório.
4. **Mapa de rotas** — `/`, `/projetos/[slug]`, e o que mais existe. Há página `/sobre` separada ou "sobre" é seção do one-pager? Onde vive a camada de recrutador definida em 010?
5. **Geração estática** — como as rotas de case são geradas em build (`generateStaticParams`) e o que acontece com slug inexistente.
6. **Contrato com a implementação** — a estrutura de pastas que a sessão de construção vai encontrar. Este ticket é o que torna o spec de fato implementável.

## Resolution

_(aberto)_
