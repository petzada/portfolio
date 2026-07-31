---
id: 009
title: Conversão — CTA e captura de contato
type: grilling
mode: HITL
status: closed
assignee: sessao-principal
blocked_by: [001]
---

## Question

O que o visitante faz quando decide que quer o Marcio, e por qual caminho?

O portfólio tem um objetivo mensurável: virar conversa. Página estática não tem backend, então "formulário de contato" não é grátis — é uma decisão de arquitetura com consequência de custo, privacidade e manutenção.

Depende de **Oferta e posicionamento freelance** (001): o CTA é a oferta transformada em verbo. "Entre em contato" é o CTA de quem não decidiu o que vende.

**Herdado de 011:** a direção visual escolhida é a de portfólio-currículo — coluna estreita, monocromática, sem acento. Esse formato serve naturalmente o recrutador (audiência secundária) e não faz sozinho o trabalho de vender serviço ao cliente freelance (audiência primária, definida em 001). **Sem cor de acento, o CTA não tem botão colorido para se destacar** — a ênfase terá de vir de posição, espaço e texto. Este ticket é onde essa lacuna é compensada, ou não é.

**Pré-decidido em 008**, ao aprovar o protótipo v6. Não reabrir sem motivo:

- **Rótulo único: "Pedir um orçamento"**, idêntico no hero e no CTA final. Um rótulo por intenção.
- **Duas posições**: pills do hero e banner de fechamento. Não há CTA fixo no mobile.
- **Microcópia de redução de atrito**: "Respondo com uma ideia de escopo e uma faixa de preço, sem compromisso." Sem promessa de prazo.
- **Exposição**: e-mail e cidade aparecem; **telefone não**.
- Sem acento cromático, o botão primário se destaca por preenchimento sólido em `ink` sobre canvas claro.

Resta decidir, e é o coração do ticket:

Precisa fechar com:

1. **A ação única primária** — orçamento por WhatsApp, agendamento de conversa, e-mail. Uma só; duas ações de mesmo peso reduzem as duas.
2. **O mecanismo** — link `wa.me` com mensagem pré-preenchida, `mailto:`, serviço de formulário de terceiros, ou agenda embutida. Avaliar cada um por: custo, esforço, quanto atrito impõe ao lead, e o que expõe publicamente (um `mailto:` com o e-mail em texto puro é ímã de spam; o telefone do `CURRICULO.md` é número pessoal).
3. **O que aparece no site e o que não aparece** — telefone, e-mail, cidade. Marcio é pessoa física em Mauá/SP; decidir conscientemente o grau de exposição.
4. **Onde os CTAs aparecem** — nav, hero, fim de cada case, banner de fechamento. E se há um CTA persistente no mobile.
5. **O texto do botão** e a microcópia ao redor — a frase que reduz o medo de clicar (tempo de resposta, "sem compromisso", como funciona a primeira conversa).
6. **A qualificação** — se vale filtrar lead ruim antes do contato (faixa de orçamento, tipo de projeto), ou se nesse estágio todo contato é bem-vindo. Provavelmente o segundo, mas decidir.

Consultar a skill `copywriting` para o texto do CTA.

## Resolution

### Correção de premissa

O ticket foi escrito afirmando que uma página estática não tem backend e que formulário "não é grátis". **Isso deixou de valer em 005**: o modo `standalone` implica um servidor Next rodando, então Server Actions e route handlers eram opções reais. A decisão abaixo foi tomada com o leque completo à vista, não por limitação técnica.

### Mecanismo: WhatsApp com mensagem pré-preenchida

Link `wa.me` abrindo a conversa com texto já escrito, algo como *"Oi Marcio, vi seu portfólio e queria falar sobre um projeto."*

É o canal onde o cliente PME brasileiro de fato responde, e tem o menor atrito possível: nenhum campo para preencher, nenhum cliente de e-mail para abrir, nenhum estado de carregando ou de erro para construir. Para um portfólio cujo objetivo é virar conversa, o formulário próprio adicionaria código, chave de API, tratamento de spam e três estados de UI para resolver um problema que um link resolve.

**Implementação:** âncora comum com a mensagem em `encodeURIComponent`, `target="_blank"` e `rel="noopener noreferrer"`. Nenhuma dependência, nenhuma variável de ambiente.

**Número confirmado pelo autor (31/07/2026):** WhatsApp Business já criado, `+55 11 97481-5782`. O link fica:

```
https://wa.me/5511974815782?text=Oi%20Marcio%2C%20vi%20seu%20portf%C3%B3lio%20e%20queria%20falar%20sobre%20um%20projeto.
```

Formato do número no `wa.me`: apenas dígitos, com código do país e sem `+`, sem espaço e sem hífen. O texto vai em `encodeURIComponent`. Guardar o número em uma constante em `content/perfil.ts`, nunca espalhado pelos componentes, já que aparece no hero e no CTA final.

A pendência de criar a conta Business está **resolvida**. Segue valendo que o número é revelado ao abrir o link, o que agora é aceitável por ser conta comercial e não pessoal.

### Ação primária e posições

**Rótulo único: "Pedir um orçamento"**, idêntico em todos os lugares. Um rótulo por intenção; variar o texto entre o topo e o rodapé dilui os dois.

Aparece em três pontos: pills do hero, banner de fechamento do one-pager, e fim de cada página de case (definido em 003). Sem CTA fixo flutuante no mobile.

Sem acento cromático, a ênfase vem do preenchimento sólido em `ink` sobre canvas claro, decidido em 008.

### Microcópia, revisada

A promessa de responder com escopo e faixa de preço **foi retirada**. Era uma promessa forte e diferenciadora, mas comprometia o autor a orçar antes de entender o projeto. Fica apenas a redução de atrito:

> **Tem um processo que ainda roda na planilha?**
> Me conte o que trava hoje. A primeira conversa é sem compromisso.

Sem promessa de prazo de resposta, porque também não há intenção de garanti-lo.

### Exposição de dados

| Dado | Na página |
|---|---|
| Cidade (Mauá, SP) | sim |
| E-mail | sim, no hero e no CTA final |
| Telefone | não, só através do link do WhatsApp |
| LinkedIn e GitHub | sim, como pills |

**Risco anotado:** e-mail em texto puro e linkável é alvo de raspagem de spam. Como a decisão de exibi-lo já foi tomada em 008, fica a mitigação sugerida para a implementação: renderizar o endereço sem `mailto:` direto no HTML, montando o link no cliente, ou aceitar o spam conscientemente. Decisão de implementação, não de produto.

### Qualificação: nenhuma

Coerente com a oferta ampla de 001 e com o estágio. Não há volume de lead que justifique filtrar, e filtrar cedo custa oportunidade. Sem faixa de orçamento anunciada, sem lista de trabalhos recusados.

### O que este ticket não resolve

O canal do **recrutador** continua sendo LinkedIn, e o que ocupa o lugar do link de repositório é assunto de 010.
