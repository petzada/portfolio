import type { StaticImageData } from "next/image";

const prefixo = "/capturas-pendentes/";

export function imagemPendente(nome: string): StaticImageData {
  return {
    src: `${prefixo}${nome}.png`,
    width: 1,
    height: 1,
  };
}

export function capturaEstaPendente(src: StaticImageData) {
  return src.src.startsWith(prefixo);
}
