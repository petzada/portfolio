---
id: 010
title: Camada do recrutador
type: grilling
mode: HITL
status: open
assignee:
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

_(aberto)_
