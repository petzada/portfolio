---
id: 003
title: Anatomia da página de case
type: grilling
mode: HITL
status: closed
assignee: sessao-principal
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

### Enquadramento: case de produto

Cada projeto é tratado como **um produto que existe**: o que faz, para quem, como funciona, como foi construído.

A razão é factual e vale ficar registrada, porque ela reaparece toda vez que alguém for reescrever um case: **nenhum dos três projetos teve cliente contratante.** Ceremony é produto do próprio autor, Silcon nasceu de um problema do emprego dele, Evoluteam é demo. O formato clássico de case (cliente chegou com uma dor, entreguei a solução, o resultado foi X) não descreve nenhum dos três. Adotá-lo produziria ficção ou desculpa.

O enquadramento de produto contorna isso sem mentir: não promete resultado de cliente porque não fala de cliente. Para o leitor primário, a mensagem que sobra é a certa, que ele constrói coisas completas e que funcionam.

### Sequência de seções, travada

1. Voltar
2. Nome do projeto, em Orbitron
3. Frase de uma linha, a mesma do card
4. Meta: status, URL pública quando existir, stack
5. **Captura de abertura**, 16:9, a tela que melhor vende o produto
6. **O que é**: produto, público, contexto de uso
7. Captura de apoio
8. **Como funciona**: o fluxo principal, ponta a ponta
9. Captura de apoio
10. **Como foi construído**: stack, arquitetura, decisões. **Recolhível**, porque o leitor primário é cliente e o secundário é tech lead
11. Fechamento: "ver no ar" quando existir, mais CTA de orçamento

### Extensão: 250 a 350 palavras por case

Três ou quatro parágrafos, com as capturas fazendo o trabalho pesado. A escolha é operacional e deliberada: um gabarito de 800 palavras que nunca é preenchido vale menos que um de 250 que está no ar.

### Método de escrita, definido nesta sessão

O autor dá acesso aos repositórios no GitHub e ao material dos projetos; o agente extrai os insights de produto e redige os cases; o autor revisa e aprova. Isso **não altera o destino do mapa** (a copy final continua fora dele, é trabalho de implementação), mas fixa quem faz o quê, e cria uma pendência de acesso.

### Telas: três por case

Abertura mais duas de apoio. Já refletido nas especificações de 007. Nenhuma captura em viewport mobile foi pedida.

### Links externos

- **Demo ao vivo, quando existir.** Só o Ceremony tem. O campo é opcional no modelo de 004.
- **CTA de orçamento ao fim do case.** Quem terminou de ler um case é o lead mais quente da página; encerrar sem chamada desperdiça exatamente essa pessoa.
- **Repositório no GitHub: não.** Decisão consciente. Silcon é sistema de uma empresa real e Ceremony movimenta pagamento; nenhum dos dois deveria ter código público. Consequência propagada para 010, porque retira do recrutador justamente o que ele mais procura.

### Sobre a ausência de métrica

A pergunta original deste ticket era com o que fechar um case sem número de resultado. O enquadramento de produto **dissolve a pergunta** em vez de respondê-la: um case de produto termina em "veja funcionando" e em convite para conversar, não em porcentagem. Fica registrado como regra: **não inventar métrica.** Se algum dia houver número real (usuários do Ceremony, itens controlados no Silcon), ele entra na meta do topo, não numa seção de resultado.
