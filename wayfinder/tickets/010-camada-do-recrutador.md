---
id: 010
title: Camada do recrutador
type: grilling
mode: HITL
status: closed
assignee: sessao-principal
blocked_by: [001]
---

## Question

Como a página atende recrutador e tech lead sem que isso enfraqueça a venda para o cliente de freelance?

Marcio definiu prioridade clara: cliente manda, recrutador vem em segundo plano. Mas segundo plano não é ausência — ele está cursando ADS até dezembro de 2026 e o próprio `CURRICULO.md` se apresenta como "Desenvolvedor Full Stack | Estágio". A vaga é real. O risco é a página tentar servir os dois com a mesma voz e virar um currículo online que não vende serviço nem impressiona recrutador.

Depende de **Oferta e posicionamento freelance** (001): só dá para saber quanto espaço sobra para o recrutador depois de saber quanto a oferta ocupa.

**Herdado de 011:** a direção visual escolhida aproxima a página do formato de currículo online. Isso facilita muito atender o recrutador — mas aumenta o risco oposto ao que este ticket foi criado para evitar: em vez de o recrutador ser espremido, o **cliente** é que pode sumir. Ao decidir quanto espaço a carreira ocupa, lembrar que a prioridade declarada em 001 continua sendo o cliente freelance.

**Grande parte já foi decidida em 008**, ao aprovar o protótipo v6. O mecanismo de separação existe e está construído:

- **"Sobre mim"** como seção própria da home, logo após os projetos.
- **"Trajetória"**: timeline vertical apenas com os empregos.
- **"Formação"**: seção separada, depois da trajetória, em duas colunas (curso e idiomas). Formação em andamento **com as datas visíveis**.
- **Currículo baixável**: existe, como pill "Baixar CV" no hero.
- **Stack visível**: chips no bloco "Sobre mim".
- **Contato secundário**: LinkedIn e GitHub como pills, ao lado do CTA principal.
- A experiência administrativa ficou do lado **cliente** da narrativa, e não do lado currículo, exatamente como este ticket previa.

O risco que sobrou está registrado em 008: Trajetória isolada exibe dois cargos administrativos e nenhum de desenvolvimento. O autor optou conscientemente por manter.

**Complicação vinda de 003:** os cases **não vão linkar repositório no GitHub**, porque Silcon é sistema de uma empresa real e Ceremony movimenta pagamento. A decisão é correta, mas retira do recrutador exatamente o artefato que ele mais procura. Este ticket precisa decidir o que ocupa esse lugar: um perfil do GitHub com outros repositórios que possam ser públicos, um repositório de exemplo criado para vitrine, ou a aceitação explícita de que o código não é auditável por estranhos.

Resta fechar:

Precisa fechar com:

1. **O mecanismo de separação** — seção discreta no fim do one-pager, página `/sobre` própria, ou apenas links de LinkedIn e GitHub no rodapé. O que existe sem competir com o CTA primário.
2. **Currículo baixável** — tem PDF na página? Onde fica? Recrutador quer; cliente não sabe o que é. Se sim, definir de onde vem o arquivo e como se mantém sincronizado com o `CURRICULO.md`.
3. **O que da carreira aparece** — formação SENAI, a experiência administrativa na Silcon e na Amb Tech Lix, o inglês A2. Nota: a experiência administrativa não é passivo a esconder, é o que explica por que ele entende a operação de uma PME melhor que um dev júnior típico; provavelmente pertence ao lado *cliente* da página, não ao do recrutador.
4. **Stack visível** — lista de tecnologias em algum formato. Recrutador escaneia por palavra-chave; cliente não distingue React de Node. Onde isso vive sem virar nuvem de logos.
5. **Formação em andamento** — dizer "cursando, conclusão em dez/2026" ou omitir. Para recrutador é neutro; para cliente pode ler como amador. Decidir a favor do primário.
6. **Contato secundário** — se o recrutador tem um caminho diferente do lead de freelance (LinkedIn em vez de WhatsApp).

## Resolution

A maior parte deste ticket foi resolvida por 008, ao aprovar o protótipo v6. O que segue consolida o conjunto e decide o que restava.

### O mecanismo de separação, construído

Não há página separada nem seção espremida. O recrutador é atendido por três seções próprias no fim do one-pager, depois dos projetos:

- **Sobre mim**, com a narrativa profissional e os chips de stack.
- **Trajetória**, timeline vertical apenas com os empregos.
- **Formação**, seção própria, em duas colunas (curso e idiomas), com o período **em andamento visível**.

Mais a pill **LinkedIn** no hero, que é o canal secundário de contato, distinto do WhatsApp que 009 definiu para o cliente.

O enquadramento decidido em 008 se mantém: a experiência administrativa vive do lado **cliente** da narrativa, como razão pela qual ele entende a operação, e não como conteúdo de currículo. Mas o eixo da copy é a capacidade de desenvolvimento; a origem é a última frase, não a tese.

### Currículo baixável: PDF estático

Arquivo exportado pelo autor e versionado em `/public`, atualizado à mão quando mudar, o que acontece duas ou três vezes por ano.

Descartada a alternativa de uma rota `/cv` imprimível. Ela garantiria fonte de verdade única, mas custaria mais uma rota e tiraria do autor o controle da diagramação, que é justamente o que o recrutador imprime e lê.

**O `CURRICULO.md` do repositório não é a fonte do PDF.** São dois artefatos independentes, e manter os dois alinhados é responsabilidade manual. Registrado para que ninguém tente automatizar isso depois achando que resolve um problema.

### O lugar do código: apenas o perfil do GitHub

003 decidiu que nenhum case linka repositório, por razões de segurança e adequação, o que retirava do recrutador o artefato que ele mais procura. A decisão aqui é **não substituir esse artefato**: a pill de GitHub no hero aponta para o perfil, e pronto.

Foram consideradas e descartadas a publicação do repositório deste próprio portfólio como amostra de código, e a criação de um repositório de vitrine. Ambas dariam ao tech lead algo concreto para ler; ambas foram recusadas em favor da simplicidade.

**Consequência que fica registrada:** o perfil do GitHub passa a ser uma superfície de avaliação **não curada**. O recrutador vai clicar e tirar conclusões do que encontrar, seja lá o que for. Se o perfil estiver vazio, com repositórios abandonados ou sem README, o link trabalha contra a página em vez de a favor. Isso vira pendência de execução: revisar o perfil antes de publicar o site.

### O que da carreira aparece, e o que não

| Item | Na página |
|---|---|
| Empregos (Silcon, Amb Tech Lix) | sim, na timeline |
| Formação SENAI, com período em andamento | sim, seção própria |
| Idiomas | sim, ao lado da formação |
| Stack técnica | sim, chips no bloco Sobre mim |
| Currículo em PDF | sim, pill no hero |
| LinkedIn | sim, pill no hero |
| Código dos projetos | não |

### Risco herdado, não resolvido aqui

008 registrou que a seção Trajetória, isolada da formação, exibe dois cargos administrativos e nenhum de desenvolvimento, logo após um "sobre mim" que afirma o contrário. O autor optou conscientemente por manter. A costura que impede a leitura de contradição é a frase final da entrada da Silcon, ligando o emprego ao sistema que ele construiu. Continua valendo.
