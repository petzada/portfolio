---
id: 009
title: Conversão — CTA e captura de contato
type: grilling
mode: HITL
status: open
assignee:
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

_(aberto)_
