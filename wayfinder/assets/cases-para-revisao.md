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

O modelo é freemium: publicar não custa nada, e a plataforma se sustenta por uma taxa sobre os presentes recebidos. Cada usuário tem um site e pode receber seus presentes criativos ou lista selecionada em PIX.

### Como funciona

O casal se cadastra, monta o site e publica num endereço próprio. Depois de publicado, qualquer edição entra no ar direto, sem precisar republicar.

Os presentes vêm de um catálogo curado pela plataforma. O casal escolhe as categorias que fazem sentido e oculta o que não quer, sem precisar cadastrar item nem definir preço. Cada convidado paga o valor integral de um presente, sem cotas divididas.

Para receber, o casal cadastra nome, telefone e chave PIX, o que gera uma subconta no provedor de pagamento. O saldo fica disponível assim que o pagamento é confirmado, e o saque cai em dois dias úteis.

A confirmação de presença é aberta: o convidado se confirma sozinho pelo site, sem lista prévia. O painel do casal reúne presentes recebidos, confirmações e conta.

O site tem prazo de vida e expira sessenta dias depois da data do casamento. Se a data muda, a expiração acompanha sozinha.

### Como foi construído

Aplicação **Next.js 16** com App Router, **React 19** com Server Components e **TypeScript** em modo estrito, estilizada com **Tailwind CSS**. O servidor roda em **Node.js**.

A persistência é **PostgreSQL**, com schema versionado em migrations e políticas de acesso aplicadas no próprio banco por Row Level Security. Autenticação com sessão validada no servidor.

A camada de integração usa **APIs REST** e route handlers, incluindo recebimento de **webhooks com verificação de assinatura** antes de qualquer escrita, rotinas agendadas e envio de e-mail transacional. Upload de imagem por URL pré-assinada em armazenamento de objetos, com processamento no cliente antes do envio.

Em produção há monitoramento de erros e de sessões. A suíte cobre **testes unitários, de integração e end-to-end em navegador**, com verificação automatizada do ambiente após cada deploy, em pipeline de **CI/CD**.

**Stack:** Next.js · React · TypeScript · Node.js · PostgreSQL · SQL · APIs REST · Webhooks · Tailwind CSS · Vitest · Playwright · Git

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

Aplicação **Next.js 16** com App Router, **React 19** e **TypeScript**, estilizada com **Tailwind CSS**. Servidor em **Node.js**.

O banco é **PostgreSQL**, e a decisão central do projeto está nele: a atualização de saldo não vive na aplicação, e sim em **gatilhos e funções SQL** disparados pela própria movimentação. Isso garante que nenhuma entrada ou saída consiga deixar o estoque inconsistente, venha ela da interface, de uma importação em massa ou de uma correção manual. O controle de acesso também é aplicado no banco, por Row Level Security.

A modelagem cobre produtos, categorias, setores, colaboradores, movimentações e ocupação de armários, com integridade referencial e exclusão em cascata. Validação de entrada com schema tipado, importação de catálogo por CSV e geração de relatórios em PDF no cliente.

**Stack:** Next.js · React · TypeScript · Node.js · PostgreSQL · SQL · Triggers e functions · APIs REST · Tailwind CSS · Git

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

Aplicação **Next.js 16** com App Router, **React 19** com Server Components e Server Actions, **TypeScript** e **Tailwind CSS**. Servidor em **Node.js**.

O banco é **PostgreSQL** com arquitetura **multi-tenant**: os dados de todas as empresas convivem no mesmo banco, isolados por Row Level Security. É o requisito que define um sistema assim, porque nenhuma consulta pode atravessar de uma empresa para outra, por acidente ou por má-fé. Sobre esse isolamento roda um controle de permissão por papel, com quatro níveis de acesso.

A modelagem cobre empresas, unidades, departamentos, cargos, competências, colaboradores, ciclos de avaliação, respostas, feedbacks, planos de desenvolvimento e processos seletivos. Formulários com validação por schema tipado, listagens com ordenação e filtro em tabela, reordenação por arrastar e soltar, e convite de usuário por e-mail com token de uso único. **Testes automatizados** cobrem as regras de acesso e o fluxo de avaliação.

**Stack:** Next.js · React · TypeScript · Node.js · PostgreSQL · SQL · Multi-tenant · RBAC · APIs REST · Tailwind CSS · Vitest · Git

---

## Notas de revisão

Coisas que decidi e você pode reverter:

1. **Não digo "eu" em nenhum case.** Os textos descrevem o produto, não o autor. A voz em primeira pessoa fica no "Sobre mim". Se preferir "construí", "decidi", é uma reescrita rápida.
2. **Duas linguagens por case, de propósito.** "O que é" e "Como funciona" falam com o cliente, em português comum. **"Como foi construído" fala com o recrutador e o tech lead**, em registro técnico, e fecha com uma linha `Stack:` enumerada para quem escaneia. É por isso que a seção é recolhível: o cliente pula, o técnico abre.
3. **Nenhum provedor ou serviço é nomeado**, conforme sua orientação. O texto descreve a técnica, não o fornecedor: "webhooks com verificação de assinatura" em vez do provedor de PIX, "armazenamento de objetos com URL pré-assinada" em vez do nome do storage, "e-mail transacional" em vez do serviço, "monitoramento de erros" em vez da ferramenta. Também não cito Supabase: aparece como **PostgreSQL** e **Row Level Security**, que é o que o recrutador procura e o que descreve a tecnologia de fato usada.
4. **Bibliotecas menores** (Recharts, dnd-kit, TanStack Table, jsPDF, Zod) continuam fora dos nomes, descritas pelo que fazem. As que sinalizam competência (Vitest, Playwright) entram na linha `Stack:`.
5. **Não invento número.** Nenhum case tem métrica de resultado, conforme decidido em 003. Se você tiver dado real (casais atendidos no Ceremony, itens controlados no Silcon), me diga e eu coloco na meta do topo.
6. **O Ceremony tem um painel administrativo interno** (crescimento, pagamentos, receita, sites, usuários) que não mencionei, para não alongar. Se quiser, entra em "Como funciona" numa frase.
7. **O Silcon menciona a empresa nominalmente**, conforme você autorizou. A descrição do ramo veio do README do próprio repositório.
8. **O Evoluteam tem planos de IA documentados** (resumo de avaliação, sugestão de PDI) marcados como pós-MVP. Não entraram, por serem roadmap e não produto. Se já existirem, me avise.
