---
id: 004
title: Modelo de conteúdo e rotas
type: grilling
mode: HITL
status: closed
assignee: sessao-principal
blocked_by: [002, 003]
---

## Question

Como um projeto é representado no repositório, e qual o mapa de rotas do site?

Modelagem de domínio: existe uma entidade — o Projeto — que aparece em duas superfícies (card no one-pager, página de case) e precisa de uma única fonte de verdade. Como ela é tipada, onde mora, e como vira páginas.

Depende de **Curadoria dos projetos** (002) e **Anatomia da página de case** (003): o formato de dado só pode ser desenhado depois que os campos existirem.

**Insumo de 008.** Os campos que o protótipo v6 já exercita para cada projeto: `nome` (renderizado em caixa alta), `descricao_curta` (uma frase, consequência e não funcionalidade), `status` (ativo ou inativo, renderizado como ponto sólido ou vazado, sem cor), `stack` (lista de chips), `url_publica` (opcional; só o Ceremony tem), `destaque` (booleano; governa se o card ocupa a largura inteira ou meia), e as capturas com suas proporções por posição. Notar que `status` **não** é texto livre: os rótulos "no ar", "em uso" e "demo" já apareceram, e precisam virar um conjunto fechado.

Precisa fechar com:

1. **O tipo `Projeto`** — todos os campos, quais são obrigatórios, quais opcionais, e o que acontece na renderização quando um opcional falta (o caso "projeto sem métrica de resultado" de 003 precisa ter resposta no tipo, não no JSX).
2. **Onde o conteúdo mora** — arquivo `.ts` com objetos tipados, MDX por projeto, ou uma pasta por projeto com metadados e corpo separados. O critério real é o de manutenção: como Marcio adiciona o projeto nº 5 daqui a seis meses.
3. **Onde as imagens moram** e como se relacionam com o registro do projeto — convenção de nomes, `public/` versus import, alt text obrigatório.
4. **Mapa de rotas** — `/`, `/projetos/[slug]`, e o que mais existe. Há página `/sobre` separada ou "sobre" é seção do one-pager? Onde vive a camada de recrutador definida em 010?
5. **Geração estática** — como as rotas de case são geradas em build (`generateStaticParams`) e o que acontece com slug inexistente.
6. **Contrato com a implementação** — a estrutura de pastas que a sessão de construção vai encontrar. Este ticket é o que torna o spec de fato implementável.

## Resolution

**Conteúdo em objetos TypeScript tipados**, um arquivo por projeto. O conteúdo do one-pager fora dos projetos (trajetória, formação, skills, perfil) também vira dado.

A razão de não usar MDX: 003 travou o case numa estrutura muito regular, com as mesmas três seções, três capturas e 250 a 350 palavras sempre. Conteúdo tão regular não precisa da liberdade do markdown, precisa de campos. Como campos, um esquecimento vira erro de compilação em vez de buraco em produção.

### Os tipos

```ts
// src/lib/types.ts
import type { StaticImageData } from 'next/image'

export type Status = 'no-ar' | 'em-uso' | 'demo'

export interface Captura {
  src: StaticImageData
  alt: string          // obrigatório, nunca opcional
  legenda?: string
}

export interface Projeto {
  slug: string
  nome: string
  frase: string                    // a mesma no card e no topo do case
  status: Status
  url?: string                     // só quando existe demo pública
  stack: string[]
  capa: Captura                    // 16:9 no destaque, 16:10 nos demais
  apoio: [Captura, Captura]        // exatamente duas, conforme 003
  oQueE: string
  comoFunciona: string
  comoFoiConstruido: string        // renderizado recolhido
}

export interface Emprego {
  org: string
  cargo: string
  periodo: string                  // texto pronto: "dez 2024 · atual"
  atual: boolean                   // governa ponto sólido ou vazado
  descricao: string
}

export interface Formacao {
  curso: string
  instituicao: string
  periodo: string
  detalhe?: string
}
```

**Decisões de modelagem que valem justificativa:**

- **`status` é união fechada**, não string livre. Os três rótulos já apareceram no protótipo e precisam ser finitos, porque cada um tem tratamento visual definido (ponto sólido ou vazado).
- **`destaque` foi eliminado.** Duplicaria informação que a ordem do array já carrega, e dois projetos marcados como destaque quebrariam a grade em silêncio. **O primeiro item do array é o destaque, por definição.** Estado derivado, não armazenado.
- **`alt` é obrigatório.** Acessibilidade imposta pelo tipo, não pela boa vontade de quem edita.
- **`apoio` é tupla de dois**, não array aberto, para que a regra de 003 seja verificada pelo compilador. Relaxar depois é trivial se o gabarito mudar.
- **`periodo` é texto pronto**, não par de datas. A página nunca calcula nada com essas datas; formatar seria complexidade sem uso.

### Estrutura de pastas, o contrato com a implementação

```
src/
  app/
    layout.tsx                 # fontes, tema, metadata base
    page.tsx                   # one-pager
    not-found.tsx
    projetos/[slug]/page.tsx   # case
  components/
    hero.tsx
    projeto-card.tsx
    projetos-grid.tsx
    sobre.tsx
    trajetoria.tsx
    formacao.tsx
    cta.tsx
    tema-toggle.tsx            # 'use client', o único que precisa
  content/
    perfil.ts                  # nome, cargo, pitch, sobre, meta, links, skills
    trajetoria.ts              # Emprego[]
    formacao.ts                # Formacao[]
    projetos/
      index.ts                 # array ordenado; a ordem É a hierarquia
      ceremony.ts
      silcon.ts
      evoluteam.ts
      img/
        ceremony-capa.png
        ceremony-apoio-1.png
        ceremony-apoio-2.png
        ...
  lib/types.ts
  styles/globals.css           # tokens em @theme, Tailwind v4
```

### Imagens

Ficam junto do conteúdo, em `content/projetos/img/`, e entram por **import estático**. Isso dá largura e altura automáticas ao `next/image`, o que elimina layout shift sem ninguém precisar lembrar de declarar dimensão. O modo `standalone` decidido em 005 mantém a otimização de imagem ativa, então não há necessidade de `unoptimized`.

Convenção de nome: `<slug>-capa.png`, `<slug>-apoio-1.png`, `<slug>-apoio-2.png`. Previsível o bastante para que a captura errada no lugar errado seja visível na revisão do arquivo.

### Rotas

| Rota | O que é |
|---|---|
| `/` | O one-pager: hero, projetos, sobre, trajetória, formação, CTA |
| `/projetos/[slug]` | A página de case |

Não há `/sobre` separada: 008 colocou sobre, trajetória e formação dentro do one-pager. Rotas em português, coerente com a página ser PT-BR.

### Geração estática

`generateStaticParams` deriva os slugs do array de projetos. Com `dynamicParams = false`, qualquer slug fora da lista responde 404 pelo `not-found.tsx`, sem rota dinâmica viva em produção. Todas as páginas são geradas no build; o servidor Next existe para servi-las e para otimizar imagem, não para renderizar sob demanda.

### Como se adiciona o projeto número 4

O teste de manutenção que motivou este ticket, em quatro passos:

1. Colocar as três capturas em `content/projetos/img/` seguindo a convenção.
2. Criar `content/projetos/<slug>.ts` copiando um existente. O TypeScript acusa qualquer campo faltando.
3. Acrescentar o import ao array em `index.ts`, na posição que reflete a hierarquia desejada.
4. Build. A rota do case passa a existir sozinha.

Nada além disso. Nenhum componente precisa ser tocado.
