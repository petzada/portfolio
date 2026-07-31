# Cases para revisão

Textos finais dos três cases, escritos a partir da leitura dos repositórios em 31/07/2026. Formato definido por 003: case de produto, seções fixas, 250 a 350 palavras.

Marcio: leia como se fosse a página no ar. **Marque o que estiver errado ou o que você não diria assim.** Onde eu não tinha certeza, cortei a frase em vez de arredondar, então é possível que falte algo que você considera importante.

---

# 1. Ceremony

**Frase do card e do topo do case**
Os convidados presenteiam por PIX e o casal recebe direto, sem plataforma segurando o dinheiro.

**Meta** · no ar · ceremony.com.br · Next.js, TypeScript, Supabase, PIX

### O que é

Plataforma de sites de casamento. O casal monta e publica um site com convite, confirmação de presença e lista de presentes, e recebe os presentes por PIX na própria conta.

O modelo é freemium: publicar não custa nada, e a plataforma se sustenta por uma taxa sobre os presentes recebidos. Cada usuário tem um site, e a regra vale mesmo depois do casamento: enquanto existir um site, não se cria outro.

### Como funciona

O casal se cadastra, monta o site e publica num endereço próprio. Depois de publicado, qualquer edição entra no ar direto, sem precisar republicar.

Os presentes vêm de um catálogo curado pela plataforma. O casal escolhe as categorias que fazem sentido e oculta o que não quer, sem precisar cadastrar item nem definir preço. Cada convidado paga o valor integral de um presente, sem cotas divididas.

Para receber, o casal cadastra nome, telefone e chave PIX, o que gera uma subconta no provedor de pagamento. O saldo fica disponível assim que o pagamento é confirmado, e o saque cai em dois dias úteis.

A confirmação de presença é aberta: o convidado se confirma sozinho pelo site, sem lista prévia. O painel do casal reúne presentes recebidos, confirmações e conta.

O site tem prazo de vida e expira sessenta dias depois da data do casamento. Se a data muda, a expiração acompanha sozinha.

### Como foi construído

Next.js 16 com App Router e React 19, TypeScript e Tailwind. Supabase para banco Postgres e autenticação.

O pagamento chega por webhook assinado do provedor de PIX, com verificação de assinatura antes de qualquer escrita. As fotos do casal vão para armazenamento S3-compatível por URL pré-assinada, com recorte feito no navegador antes do upload. Os e-mails são escritos como componentes e entregues por Resend. Sentry acompanha erro e sessão em produção.

Os testes cobrem unidade, integração e fluxo completo em navegador, e há rotinas que verificam o ambiente de produção depois do deploy.

---

# 2. Silcon Estoque

**Frase do card e do topo do case**
O almoxarifado sabe o que está acabando antes de faltar na linha.

**Meta** · em uso · Next.js, TypeScript, PostgreSQL

### O que é

Sistema de gestão do estoque de materiais internos da Silcon Ambiental, empresa de gestão de resíduos hospitalares. Controla catálogo de produtos, movimentações, pedidos de compra e o vestiário dos colaboradores.

Está em uso na operação, com as pessoas do almoxarifado usando todo dia.

### Como funciona

Cada produto tem estoque mínimo e máximo, e o saldo o classifica em uma de três faixas: estável, crítico quando cai abaixo do mínimo, ou zerado. Produtos críticos e zerados entram numa fila de reposição ordenada por urgência.

A partir dessa fila o sistema gera dois tipos de pedido de compra: o emergencial, para o que zerou, e o de reposição mensal, que repõe cada item até o estoque máximo. Os dois saem em PDF, prontos para enviar ao fornecedor.

Entradas e saídas são registradas com nota fiscal e com o setor que solicitou. O sistema guarda o histórico de preço de cada produto e compara o valor pago com o custo cadastrado, avisando quando o preço sobe quinze por cento ou mais. É o alerta que evita pagar reajuste sem perceber.

O dashboard mostra entradas e saídas em reais, itens críticos, estoque zerado, gasto por setor e os produtos mais consumidos, com filtro por mês, ano e setor.

Um módulo à parte cuida do vestiário: armários numerados, de uniforme ou de vestiário, com no máximo um ocupante por armário.

### Como foi construído

Next.js 16 com App Router e React 19, TypeScript e Tailwind. Supabase com Postgres e regras de acesso no próprio banco.

A atualização de saldo não fica na aplicação: acontece em gatilhos SQL, disparados pela própria movimentação. É o que garante que nenhuma entrada ou saída registrada consiga deixar o estoque inconsistente, independentemente de onde ela veio.

O catálogo pode ser carregado de uma vez por importação de CSV, e os relatórios saem em PDF gerado no cliente.

---

# 3. Evoluteam

**Frase do card e do topo do case**
Avaliação de desempenho e PDI com histórico, fora da planilha compartilhada.

**Meta** · demo · Next.js, TypeScript, Supabase

### O que é

Aplicação web de gestão de pessoas para empresas de vinte a trezentos colaboradores que ainda fazem avaliação de desempenho no manual, com formulário solto e planilha compartilhada.

Reúne num lugar só a estrutura da empresa, os ciclos de avaliação, o feedback contínuo, os planos de desenvolvimento individual e o acompanhamento de indicadores.

### Como funciona

A empresa cadastra unidades, departamentos, cargos e competências, e a partir daí registra os colaboradores, cada um com gestor responsável e nível. A entrada de uma pessoa no sistema acontece por convite enviado no e-mail dela.

O acesso é dividido em quatro perfis. RH enxerga tudo e configura a empresa. O gestor enxerga seus liderados. O colaborador enxerga apenas o próprio histórico. A diretoria vê os dashboards consolidados sem operar o sistema.

O RH abre um ciclo de avaliação. Dentro dele, cada colaborador responde a autoavaliação enquanto o gestor responde a dele, e o resultado individual nasce da comparação entre as duas leituras. Fora dos ciclos, gestores registram feedback a qualquer momento, o que impede que o único registro sobre uma pessoa seja o da avaliação anual.

O que sai da avaliação vira um plano de desenvolvimento individual, com ações e acompanhamento. Há ainda um módulo de recrutamento, com vagas, candidatos, etapas de processo e relatórios.

### Como foi construído

Next.js 16 com App Router e React 19, TypeScript e Tailwind. Supabase com Postgres.

Os dados de cada empresa ficam isolados dentro do mesmo banco, o que é o requisito que define um sistema assim: nenhuma consulta pode atravessar de uma empresa para outra, por acidente ou por má-fé.

As listagens usam tabela com ordenação e filtro, a priorização de itens é feita arrastando, e os convites saem por e-mail com token de uso único. Testes automatizados cobrem as regras de acesso e o fluxo de avaliação.

---

## Notas de revisão

Coisas que decidi e você pode reverter:

1. **Não digo "eu" em nenhum case.** Os textos descrevem o produto, não o autor. A voz em primeira pessoa fica no "Sobre mim". Se preferir "construí", "decidi", é uma reescrita rápida.
2. **Não cito nomes de bibliotecas menores** (Recharts, dnd-kit, TanStack Table, jsPDF, Zod). Descrevi o que elas fazem em português. O leitor primário é cliente; a lista de tecnologias fica nos chips do card e no carrossel da home.
3. **Não invento número.** Nenhum case tem métrica de resultado, conforme decidido em 003. Se você tiver dado real (casais atendidos no Ceremony, itens controlados no Silcon), me diga e eu coloco na meta do topo.
4. **O Ceremony tem um painel administrativo interno** (crescimento, pagamentos, receita, sites, usuários) que não mencionei, para não alongar. Se quiser, entra em "Como funciona" numa frase.
5. **O Silcon menciona a empresa nominalmente**, conforme você autorizou. A descrição do ramo veio do README do próprio repositório.
6. **O Evoluteam tem planos de IA documentados** (resumo de avaliação, sugestão de PDI) marcados como pós-MVP. Não entraram, por serem roadmap e não produto. Se já existirem, me avise.
