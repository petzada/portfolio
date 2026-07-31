import Image from "next/image";

import { capturaEstaPendente } from "@/content/projetos/imagem-pendente";
import type { Captura } from "@/lib/types";

interface CapturaSlotProps {
  captura: Captura;
  dimensoes: string;
  priority?: boolean;
  sizes: string;
}

export function CapturaSlot({
  captura,
  dimensoes,
  priority = false,
  sizes,
}: CapturaSlotProps) {
  if (capturaEstaPendente(captura.src)) {
    return (
      <div className="project-media absolute inset-0 grid place-content-center gap-1 bg-surface px-6 text-center">
        <span className="text-[11px] font-semibold tracking-[0.16em] text-subtle uppercase">
          Captura pendente
        </span>
        <span className="text-xs font-medium text-muted">{captura.alt}</span>
        <span className="text-[11px] text-subtle">{dimensoes}</span>
      </div>
    );
  }

  return (
    <Image
      fill
      alt={captura.alt}
      className="project-media object-cover"
      placeholder={captura.src.blurDataURL ? "blur" : "empty"}
      priority={priority}
      sizes={sizes}
      src={captura.src}
    />
  );
}
