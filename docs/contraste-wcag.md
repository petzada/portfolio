# Matriz de contraste WCAG

Auditoria dos tokens usados pelo portfólio. Os valores foram calculados pela fórmula de luminância relativa da WCAG 2.2. Texto normal precisa de pelo menos 4,5:1; texto grande precisa de 3:1.

## Tema claro

| Uso                      | Primeiro plano |     Fundo | Contraste | Resultado |
| ------------------------ | -------------: | --------: | --------: | --------- |
| `ink` sobre `canvas`     |      `#0b0b0b` | `#fafafa` |   18,86:1 | AAA       |
| `muted` sobre `canvas`   |      `#6b6b6b` | `#fafafa` |    5,11:1 | AA        |
| `subtle` sobre `canvas`  |      `#707070` | `#fafafa` |    4,74:1 | AA        |
| `ink` sobre `surface`    |      `#0b0b0b` | `#ffffff` |   19,68:1 | AAA       |
| `muted` sobre `surface`  |      `#6b6b6b` | `#ffffff` |    5,33:1 | AA        |
| `subtle` sobre `surface` |      `#707070` | `#ffffff` |    4,95:1 | AA        |

## Tema escuro

| Uso                      | Primeiro plano |     Fundo | Contraste | Resultado |
| ------------------------ | -------------: | --------: | --------: | --------- |
| `ink` sobre `canvas`     |      `#f5f5f5` | `#0b0b0b` |   18,05:1 | AAA       |
| `muted` sobre `canvas`   |      `#a1a1a1` | `#0b0b0b` |    7,62:1 | AAA       |
| `subtle` sobre `canvas`  |      `#7e8085` | `#0b0b0b` |    4,98:1 | AA        |
| `ink` sobre `surface`    |      `#f5f5f5` | `#16171a` |   16,44:1 | AAA       |
| `muted` sobre `surface`  |      `#a1a1a1` | `#16171a` |    6,94:1 | AA        |
| `subtle` sobre `surface` |      `#7e8085` | `#16171a` |    4,54:1 | AA        |

## Ajustes feitos

Os valores originais de `subtle` não atingiam AA quando usados nos textos pequenos de metadata, datas e rodapé. O tema claro passou de `#949494` para `#707070`; o escuro passou de `#6f7176` para `#7e8085`. Os demais tokens aprovados no ticket 012 foram preservados.

Links e botões recebem contorno de foco de 2px na cor `ink`, com afastamento de 4px. O carrossel não contém controles focáveis, pausa no hover e vira rolagem horizontal manual quando o sistema pede movimento reduzido.
