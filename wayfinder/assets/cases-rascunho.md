# Cases, rascunho para revisão

Redigido a partir da leitura direta dos três repositórios em 31/07/2026, conforme o método definido em 003. Formato e extensão seguem 003: enquadramento de produto, seções fixas, 250 a 350 palavras por case.

**Nada aqui foi inventado.** Toda afirmação sai do `CONTEXT.md`, do `README.md`, do `PRD`, das rotas ou do `package.json` de cada projeto. Onde havia dúvida, a frase foi cortada em vez de arredondada. Marcio revisa e corrige.

---

## Ceremony

**Frase:** Os convidados presenteiam por PIX e o casal recebe direto, sem plataforma segurando o dinheiro.

**Status:** no ar · **URL:** ceremony.com.br

### O que é

Plataforma de sites de casamento. O casal monta e publica um site com convite, confirmação de presença e lista de presentes, e recebe os presentes por PIX. O modelo é freemium: publicar é gratuito e a plataforma se sustenta por uma taxa sobre os presentes recebidos.

### Como funciona

Cada usuário tem um site, que sai do rascunho no momento em que é publicado e passa a viver num endereço próprio. Edições posteriores entram no ar sem precisar republicar.

Os presentes vêm de um catálogo curado pela plataforma: o casal escolhe categorias e oculta o que não quer, sem criar itens nem definir preços. Cada convidado paga o valor integral de um item, sem cotas fracionadas. Para receber, o casal cadastra um recebedor com nome, telefone e chave PIX, que vira uma subconta no provedor de pagamento. O saldo fica disponível assim que o pagamento é confirmado, e o saque cai em dois dias úteis.

A confirmação de presença é aberta: o convidado se autoconfirma pelo site, sem lista prévia. O site tem prazo de vida, expirando sessenta dias depois da data do casamento, e a expiração acompanha automaticamente qualquer mudança nessa data.

### Como foi construído

Next.js 16 com App Router e React 19, TypeScript e Tailwind v4. Supabase para banco Postgres e autenticação. O pagamento chega por webhook assinado do provedor de PIX. Uploads de imagem vão para armazenamento S3-compatível com URLs pré-assinadas, com recorte no cliente. E-mails transacionais escritos em React Email e entregues por Resend. Sentry para monitoramento de erro e sessão. A suíte cobre unidade e integração em Vitest e ponta a ponta em Playwright, além de rotinas de verificação contra o ambiente de produção.

---

## Silcon Estoque

**Frase:** O almoxarifado sabe o que está acabando antes de faltar na linha.

**Status:** em uso

### O que é

Sistema de gestão de estoque de materiais internos da Silcon Ambiental, empresa de gestão de resíduos hospitalares. Cobre catálogo de produtos, movimentações de entrada e saída, compras e o controle de vestiário dos colaboradores. Está em uso na operação.

### Como funciona

Cada produto tem estoque mínimo e máximo, e o saldo o coloca em uma de três faixas: estável, crítico quando fica abaixo do mínimo, ou zerado. Produtos críticos e zerados entram numa fila de reposição ordenada por urgência, e as sugestões de compra sempre repõem até o estoque máximo.

Entradas e saídas são registradas com nota fiscal e com o setor solicitante. O sistema guarda o histórico de preço de cada produto e compara o valor pago com o custo cadastrado, disparando um alerta quando o preço sobe quinze por cento ou mais. O dashboard consolida entradas e saídas em reais, itens críticos, gasto por setor e os produtos mais consumidos, com filtro por mês, ano e setor.

Um módulo à parte cuida do vestiário: armários numerados, de uniforme ou de vestiário, com no máximo um ocupante por armário e uma ocupação ativa por colaborador em cada tipo.

### Como foi construído

Next.js 16 com App Router e React 19, TypeScript e Tailwind v4. Supabase com Postgres, onde a atualização de saldo é feita por triggers SQL e não pela aplicação, de modo que nenhuma movimentação registrada deixa o estoque inconsistente. Componentes construídos sobre primitivas Radix. Gráficos em Recharts e relatórios exportáveis em PDF com jsPDF. Formulários com react-hook-form e validação por Zod. O catálogo pode ser carregado em massa por importação de CSV.

---

## Evoluteam

**Frase:** Avaliação de desempenho e PDI com histórico, fora da planilha compartilhada.

**Status:** demo

### O que é

Aplicação web B2B de gestão de pessoas, voltada a empresas de vinte a trezentos colaboradores que ainda conduzem avaliação de desempenho de forma manual. Reúne num só lugar a estrutura organizacional, os ciclos de avaliação, o feedback contínuo, os planos de desenvolvimento individual e os indicadores de gestão.

### Como funciona

A empresa cadastra unidades, departamentos, cargos e competências, e a partir daí registra os colaboradores com gestor responsável e nível. O acesso é dividido em quatro perfis: RH enxerga tudo, o gestor enxerga seus liderados, o colaborador enxerga apenas o próprio histórico, e a diretoria vê os dashboards consolidados.

O RH abre um ciclo de avaliação. Dentro dele, cada colaborador responde a autoavaliação enquanto o gestor responde a sua, e o resultado individual nasce da comparação entre as duas leituras. Fora dos ciclos, gestores registram feedbacks a qualquer momento, o que evita que o único registro sobre uma pessoa seja o da avaliação anual. O que sai da avaliação vira um plano de desenvolvimento individual, com ações e acompanhamento. Há ainda um módulo de recrutamento, com vagas, candidatos, etapas e relatórios.

### Como foi construído

Next.js 16 com App Router e React 19, TypeScript e Tailwind v4. Supabase com Postgres, com isolamento multi-inquilino por empresa. Listagens em TanStack Table, reordenação por arrastar e soltar com dnd-kit e gráficos em Recharts. A entrada de um colaborador acontece por convite em e-mail com token, escrito em React Email e entregue por Resend. Formulários com react-hook-form e validação por Zod. Testes em Vitest com Testing Library.

---

## Stacks, para os chips do card

Resolvendo a pendência que vinha desde 002. Os chips devem ser poucos; abaixo, os candidatos em ordem de relevância para quem lê.

| Projeto | Sugestão para o card | Stack completa observada |
|---|---|---|
| **Ceremony** | Next.js · TypeScript · Supabase · PIX | Next.js 16, React 19, TypeScript, Tailwind v4, Supabase, Resend, React Email, Sentry, S3/R2, MDX, Recharts, Zod, Vitest, Playwright |
| **Silcon** | Next.js · TypeScript · PostgreSQL | Next.js 16, React 19, TypeScript, Tailwind v4, Supabase, Radix, Recharts, jsPDF, react-hook-form, Zod |
| **Evoluteam** | Next.js · TypeScript · Supabase | Next.js 16, React 19, TypeScript, Tailwind v4, Supabase, TanStack Table, dnd-kit, Recharts, Resend, react-hook-form, Zod, Vitest |

## Observações para Marcio

1. **Python sai dos chips de skill.** Nenhum dos três projetos usa Python. Está no `CURRICULO.md`, então pode continuar lá, mas na página ele seria a única tecnologia anunciada sem nada que a comprove.
2. **A stack real é mais forte do que o currículo sugere.** Webhook de pagamento assinado, multi-inquilino, triggers no banco, testes ponta a ponta e monitoramento em produção não são coisas de portfólio de estudante. Vale considerar deixar isso mais visível na seção "Sobre mim".
3. **O Ceremony tem `nixpacks.toml` no repositório**, o que indica que você já faz deploy nesse formato. Isso corrobora a decisão de 005 sobre a Railway e reduz o risco daquela escolha.
4. **Citação da Silcon: autorizada pelo autor em 31/07/2026.** A empresa pode ser nomeada e descrita como gestão de resíduos hospitalares. Segue valendo a anonimização de dados operacionais nas capturas, conforme 007: autorização para citar o nome não é autorização para expor fornecedores, valores e estoques reais.
5. **Aplicado na v7 do protótipo:** Python saiu dos chips, a stack ganhou seção própria com ícones, e o "Sobre mim" foi reescrito citando a engenharia real (webhook assinado, multi-inquilino, gatilhos no Postgres, teste ponta a ponta).
