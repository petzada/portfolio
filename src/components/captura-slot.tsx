import Image from "next/image";

import type { Captura } from "@/lib/types";

interface CapturaSlotProps {
  captura: Captura;
  className: string;
  priority?: boolean;
  sizes: string;
}

export function CapturaSlot({
  captura,
  className,
  priority = false,
  sizes,
}: CapturaSlotProps) {
  return (
    <Image
      alt={captura.alt}
      className={className}
      placeholder={captura.src.blurDataURL ? "blur" : "empty"}
      priority={priority}
      sizes={sizes}
      src={captura.src}
    />
  );
}
