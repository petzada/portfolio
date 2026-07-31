# Wayfinder — tracker local em markdown

Este repositório não tem issue tracker configurado, então o mapa e seus tickets vivem aqui como arquivos.

## Estrutura

- `map.md` — o mapa (equivalente a uma issue com label `wayfinder:map`). Índice de baixa resolução: destino, notas, decisões tomadas, névoa, fora de escopo. **Não lista tickets abertos.**
- `tickets/NNN-slug.md` — um ticket por arquivo (issue filha do mapa). O frontmatter carrega a identidade e o estado.

## Frontmatter do ticket

```yaml
id: 001               # identidade; nunca reutilizar
title: ...            # como o ticket é chamado em qualquer conversa
type: grilling        # research | prototype | grilling | task
mode: HITL            # HITL (com humano) | AFK (agente sozinho)
status: open          # open | closed
assignee:             # vazio = não reivindicado. Preencher ANTES de qualquer trabalho.
blocked_by: []        # ids dos tickets que precisam fechar antes
```

## Queries

- **Fronteira** (o que dá para pegar agora): tickets com `status: open`, `assignee` vazio, e todo id em `blocked_by` já com `status: closed`.
- **Bloqueados**: `status: open` com algum bloqueador aberto.
- **Reivindicados**: `status: open` com `assignee` preenchido — outra sessão está neles.

## Resolver um ticket

1. Preencher `assignee` **antes** de trabalhar.
2. Resolver.
3. Escrever a resposta na seção `## Resolution` do próprio ticket, mudar `status` para `closed`.
4. Acrescentar uma linha em **Decisions so far** no `map.md`, ligando ao ticket.
5. Criar tickets novos que a resposta tornou nítidos; limpar da névoa o que graduou.

Nunca mais de um ticket por sessão — exceto tickets de `research`, que podem correr em paralelo.
