---
id: 002
title: Curadoria dos projetos
type: grilling
mode: HITL
status: closed
assignee: sessao-principal
blocked_by: [001]
---

## Question

Quais projetos entram na página, em que ordem, e qual critério corta os demais?

O `CURRICULO.md` lista dois (Sistema de Controle de Estoque Silcon; Sistema de Gestão Feltrin Noivas), mas Marcio confirmou que existem outros ainda não inventariados. Currículo e portfólio têm regras opostas: o currículo é exaustivo, o portfólio é curado. Três projetos fortes convertem mais do que sete irregulares — e num sistema visual como o do `DESIGN.md`, um card fraco contamina os fortes ao lado dele.

**Este ticket foi reclassificado como crítico após a resolução de 001.** A premissa original — a oferta decide quais projetos entram — se inverteu: o autor optou por oferta **ampla**, sem nicho declarado. Sem categoria dita em texto, o visitante conclui que Marcio faz *exatamente aquilo que a grade de projetos mostra*. A curadoria não ilustra o posicionamento; ela **é** o posicionamento.

Duas consequências para o trabalho deste ticket:

- O critério de corte não pode mais ser "prova a oferta", porque não há oferta declarada. Precisa ser substituído por outro — provavelmente "junto, esse conjunto de projetos conta uma história coerente sobre o que eu faço?".
- A ordem dos projetos ganha peso de headline. O primeiro card é a primeira afirmação concreta sobre a capacidade do Marcio que o visitante encontra.

Registrar também: por decisão de 001, **nenhum projeto é rotulado como acadêmico ou aplicado**, e nenhuma data de faculdade aparece. Os projetos se apresentam como projetos.

Precisa fechar com:

1. **Inventário completo** — todo projeto que existe e roda, com uma linha do que é, stack, e estado real (funcional? pela metade? bonito?).
2. **Critério de corte explícito** — substituindo "prova a oferta", que 001 tornou inaplicável: é apresentável visualmente / é explicável em 30s a quem não é técnico / contribui para uma história coerente em vez de repetir a de outro. Escrito, para reusar quando surgir projeto novo.
3. **A lista final e a ordem** — qual é o carro-chefe, o que vem em segundo, o que fica de fora.
4. **O papel de cada um** — cada projeto na página deve provar algo *diferente*. Dois provando a mesma coisa: um deles sai ou é reenquadrado.
5. **O buraco** — se a oferta definida em 001 não tiver nenhum projeto que a prove, a conclusão é construir um projeto de vitrine. Descobrir isso agora custa uma conversa; descobrir depois do site pronto custa o site.

## Resolution

### Inventário levantado

Quatro projetos existem. Três estão vivos hoje.

| Projeto | O que é | Vivo? |
|---|---|---|
| **Ceremony** (ceremony.com.br) | Plataforma de casamento — noivos recebem presentes via PIX | No ar e funcionando, com domínio próprio |
| **Silcon** | Controle de estoque e almoxarifado — dashboard, catálogo, movimentações, alertas de preço, fila de reposição | Em uso real na operação da Silcon, por outras pessoas |
| **Evoluteam** | RH — PDI e avaliação de desempenho | Funcional de ponta a ponta, demonstrável |
| **Feltrin Noivas** | Landing page para noivaria (mais o sistema de gestão acadêmico) | Não está no ar |

### Critério de corte adotado

Substituindo "prova a oferta", que a resolução de 001 tornou inaplicável:

1. **Está vivo** — no ar ou em uso real. Projeto que só roda na máquina do autor não entra.
2. **É apresentável visualmente** — rende captura de tela que sustenta um card.
3. **É explicável em 30 segundos a quem não é técnico.**
4. **Prova algo que nenhum outro card já prova** — redundância derruba o mais fraco dos dois.

Reutilizável quando surgir projeto novo.

### Lista final e ordem

1. **Ceremony** — abre a página.
2. **Silcon**
3. **Evoluteam**

**Feltrin Noivas fica de fora.** Falha em dois critérios: não está viva, e é redundante com o Ceremony, que cobre o mesmo mundo (casamento) fazendo muito mais. Segue no `CURRICULO.md`, que é exaustivo por natureza; a página é curada.

### O papel de cada card — cada um prova algo diferente

- **Ceremony** — prova que Marcio constrói **produto de verdade, no ar, com dinheiro passando**. Pagamento por PIX é a prova mais forte disponível para um cliente desconhecido: não é demonstração, é sistema em que estranhos confiam com o próprio dinheiro. É por isso que abre.
- **Silcon** — prova **uso diário real por outras pessoas** numa operação industrial, e é onde a vivência administrativa do autor (almoxarifado, custos, SAP B1) aparece dentro do código. Vindo logo depois do Ceremony, cobre o maior espectro possível em dois cards: consumidor final e operação interna.
- **Evoluteam** — prova **modelagem de processo corporativo complexo** (PDI, ciclo de avaliação de desempenho). Fecha a grade mostrando que o autor dá conta de domínio de gente grande, não só de CRUD.

Nenhum buraco: a grade cobre B2C com pagamento, operação industrial e RH corporativo. Para uma oferta ampla, é uma cobertura larga e ainda assim coerente — três sistemas web completos, dois deles B2B.

### Nota sobre o agrupamento que se desfez

Durante o grilling apareceram dois clusters temáticos — casamento (Ceremony, Feltrin) e gestão interna (Silcon, Evoluteam). Com a saída da Feltrin, o cluster de casamento deixa de existir e o agrupamento perde função. A coerência da grade agora vem da qualidade e do escopo dos três, não de tema comum. **Não tentar reconstruir esse agrupamento no layout.**

### Pendência resolvida em 31/07/2026

As stacks dos três foram levantadas por leitura direta dos repositórios e estão registradas em [`assets/cases-rascunho.md`](../assets/cases-rascunho.md), com a sugestão de quais tecnologias virar chip no card (poucas, as que o leitor reconhece) e a stack completa observada em cada projeto.
