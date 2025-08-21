"use client";

import { cn } from "@/lib/utils";

export function SectionBackdrop({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden", className)}>
      {/* Base gradient, sutil y profesional */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950" />

      {/* Glows muy suaves (no saturados) */}
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Grid sutil con máscara para que se desvanezca en bordes y no choque con otras secciones */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:26px_26px] [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]" />
    </div>
  );
}
