---
id: 003
title: Anatomia da página de case
type: grilling
mode: HITL
status: open
assignee:
blocked_by: [002]
---

## Question

Que seções compõem uma página de case, e que pergunta do leitor cada uma responde?

A decisão de estrutura já está tomada — one-pager mais uma página por projeto. Falta o gabarito da página de case: uma estrutura fixa que sirva a todos os projetos escolhidos, para que sejam comparáveis entre si e para que adicionar o próximo projeto seja preencher um formulário, não desenhar do zero.

Depende de **Curadoria dos projetos** (002): o gabarito precisa caber em todos os projetos que de fato entraram.

**Insumo de 008.** O protótipo v6 já esboça um esqueleto de case, que serve de ponto de partida mas **não é decisão**: volta, nome do projeto em Orbitron, frase de uma linha, meta (URL e stack), captura de abertura em 16:9, e as seções "O problema", "O que foi construído" (com captura de apoio no meio) e "Decisões técnicas". Esta última já entrou marcada como candidata a ficar recolhida, dado que o leitor primário é cliente e o secundário é tech lead.

Precisa fechar com:

1. **A sequência de seções**, na ordem em que o leitor as encontra. Um esqueleto plausível para PME — problema, contexto da operação, o que foi construído, telas, decisões técnicas e por quê, resultado, stack, CTA — mas a ordem e o corte são a decisão.
2. **O que fazer sem métrica de resultado** — sendo projetos aplicados, não há "reduziu 30% do tempo de fechamento". Sem número, o case termina em quê? Depoimento? Escopo entregue? Antes/depois da operação? Um case que promete resultado e não entrega perde mais do que um que nunca prometeu.
3. **Profundidade técnica** — o leitor primário é cliente, que não lê arquitetura; o secundário é tech lead, que só lê isso. Uma seção técnica ao final, dobrável e ignorável, serve os dois? Decidir a mecânica.
4. **Quantidade e papel das telas** — quantas capturas por case, e o que cada uma prova. Isso alimenta diretamente **Produzir as capturas de tela dos projetos** (007).
5. **Extensão-alvo** — quantas palavras Marcio de fato vai escrever. Um gabarito de 800 palavras por case que nunca é preenchido é pior que um de 250 que é.
6. **Links externos** — repositório público e demo ao vivo aparecem? Para cliente, código é ruído; para recrutador, é o principal.

## Resolution

_(aberto)_
