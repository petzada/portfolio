---
id: 007
title: Produzir as capturas de tela dos projetos
type: task
mode: HITL
status: open
assignee:
blocked_by: [002, 003]
---

## Question

Subir cada projeto selecionado e capturar as telas que a página vai usar.

**Reclassificado como crítico após a resolução de 001.** O autor optou por oferta ampla e por não mencionar o contexto acadêmico dos projetos — o que significa que a página não tem nenhuma afirmação em texto sustentando a competência do Marcio. Resta a prova visual. Se as capturas não forem excelentes, não há copy que compense: a página vira currículo online. Este é o ticket de maior alavancagem do mapa inteiro.

Nada a decidir — é trabalho manual que trava as decisões visuais seguintes. O `DESIGN.md` apoia o sistema inteiro em capturas de produto, e o cliente de freelance compra por prova visual: sem as imagens, o protótipo não tem o que emoldurar e o case não tem o que provar.

Depende de **Curadoria dos projetos** (002), que diz *quais* projetos, e de **Anatomia da página de case** (003), que diz *quantas telas e o que cada uma prova*.

**Projetos definidos por 002, nesta ordem:** Ceremony (ceremony.com.br) · Silcon (estoque/almoxarifado) · Evoluteam (RH, PDI e avaliação). Feltrin Noivas está fora. Os três estão vivos, então todos podem ser capturados com dados reais em vez de mock.

Trabalho a executar:

1. Subir cada projeto selecionado localmente, com **dados de exemplo plausíveis** — nada de tabela vazia, "Lorem ipsum", ou nome de cliente de teste. Tela de produto vazia mata a credibilidade mais rápido do que tela nenhuma.
2. Anonimizar o que for dado real de empresa — nomes, valores, fornecedores. Silcon e Feltrin Noivas são empresas reais; publicar operação delas sem autorização é problema.
3. Capturar em **viewport e escala consistentes** entre todos os projetos (mesma largura, densidade 2x). Capturas em tamanhos diferentes destroem a regularidade da grade de cards.
4. Capturar também um recorte **em viewport móvel** dos projetos que forem responsivos — prova de que o entregue funciona no celular, que é onde o cliente PME vai abrir.
5. Nomear conforme a convenção que **Modelo de conteúdo e rotas** (004) definir; se 004 ainda não fechou, nomear de forma óbvia e ajustar depois.
6. Anotar por captura o que ela prova, em uma linha — vira legenda e alt text.

Se algum projeto não render uma captura decente, isso é sinal para 002: ele provavelmente não deveria estar na página. Reportar de volta em vez de forçar.

## Resolution

_(aberto)_
