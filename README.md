# Portfólio | Marcio Petigrosso

![Status](https://img.shields.io/badge/status-em%20desenvolvimento%20ativo-brightgreen) ![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-green) ![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss&logoColor=white)

Meu **portfólio pessoal** como *Product Software Engineer*: reúne trajetória, formação, stack e os projetos que construí, em uma página rápida, acessível e com tema claro e escuro.

## Status do projeto

🟢 **Em desenvolvimento ativo**: atualizado conforme novos projetos e mudanças de carreira.

## Demonstração

Uma página única com seções animadas na rolagem:

- **Hero** com apresentação e chamadas para contato.
- **Sobre** e **trajetória** profissional em linha do tempo.
- **Formação** acadêmica.
- **Stack** em carrossel de ícones.
- **Projetos** em grade de cards, cada um com página própria em `/projetos/<slug>`.
- **Currículo em PDF** para download.
- **Tema claro/escuro**, contraste revisado conforme WCAG, Open Graph gerado dinamicamente, `sitemap` e `robots`.

Todo o conteúdo (perfil, trajetória, formação e projetos) fica em `src/content/`, separado dos componentes.

## Tecnologias utilizadas

- **Next.js 15** (App Router, saída *standalone*) + **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Motion** (animações) e **next-themes** (tema claro/escuro)
- **Docker** e **Railway** (hospedagem)
- ESLint e Prettier

## Pré-requisitos e instalação

**Pré-requisitos**

- **Node.js 22** e npm (ou Docker)

**Instalação**

```bash
git clone https://github.com/petzada/portfolio.git
cd portfolio
npm install
```

## Como utilizar

```bash
npm run dev       # http://localhost:3000
npm run build && npm run start
```

Com Docker:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

Para atualizar o conteúdo, edite os arquivos de `src/content/` (projetos em `src/content/projetos/`).

## Testes

Não há testes automatizados. As verificações disponíveis são:

```bash
npm run lint
npm run typecheck
npm run format:check
```

O checklist de verificação manual (acessibilidade e contraste) está em [`docs/`](docs/).

## Contribuição

Contribuições são bem-vindas! Para propor uma melhoria:

1. Abra uma **issue** descrevendo o problema ou a ideia antes de começar algo grande.
2. Faça um **fork** e crie um branch a partir da `main`: `<tipo>/<nome-kebab>` (`feat`, `fix`, `docs`, `refactor`, `test`, `chore`).
3. Use **commits semânticos** em português: `<tipo>(<escopo>): <descrição no imperativo>`.
4. Rode lint e testes antes de enviar (veja [Testes](#testes)).
5. Abra o **Pull Request** em *draft*, explicando o quê e o porquê. O merge é feito pelo autor.

Não inclua segredos (`.env`, chaves de API, tokens) em commits ou PRs.

## Licença

Distribuído sob a licença **MIT**, de código aberto. Isso significa que você **pode** usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e até vender cópias do código, inclusive em projetos comerciais, **desde que** mantenha o aviso de copyright e o texto da licença. O software é fornecido "no estado em que se encontra", **sem garantias**, e o autor não se responsabiliza por danos decorrentes do uso.

Texto completo em [`LICENSE`](LICENSE).

## Autor e contato

**Marcio Petigrosso** ("petzada"): idealização e desenvolvimento.

- GitHub: [@petzada](https://github.com/petzada)
- LinkedIn: [in/petigrosso](https://www.linkedin.com/in/petigrosso)
