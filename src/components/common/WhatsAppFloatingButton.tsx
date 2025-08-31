"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";
import { siteConfig } from "@/config/site";
import { useMemo } from "react";
import clsx from "clsx";

export type WhatsAppFloatingButtonProps = {
  phone?: string; // e.g. "+52 1 81 2627 0599"
  message?: string; // default prefilled message
  position?: "br" | "bl" | "tr" | "tl"; // bottom-right, etc.
  tooltip?: string; // also used as desktop label if provided
  hide?: boolean;
};

function normalizePhone(input?: string): string | undefined {
  if (!input) return undefined;
  // Keep digits only for wa.me
  const digits = input.replace(/\D/g, "");
  return digits || undefined;
}

function buildWhatsAppUrl(phone?: string, message?: string) {
  const normalized = normalizePhone(phone);
  const text = message ?? process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? "Hola, me gustaría más información";
  const encodedText = encodeURIComponent(text);

  // If phone is set, use wa.me direct chat; otherwise fallback to API link that opens contact picker
  if (normalized) {
    return `https://wa.me/${normalized}?text=${encodedText}`;
  }
  return `https://api.whatsapp.com/send?text=${encodedText}`;
}

export function WhatsAppFloatingButton({
  phone,
  message,
  position = "br",
  tooltip,
  hide,
}: WhatsAppFloatingButtonProps) {
  const resolvedPhone = phone ?? process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? siteConfig.links.phone;
  const href = useMemo(() => buildWhatsAppUrl(resolvedPhone, message), [resolvedPhone, message]);

  if (hide) return null;

  const posClass =
    position === "br"
      ? "bottom-6 right-6"
      : position === "bl"
      ? "bottom-6 left-6"
      : position === "tr"
      ? "top-6 right-6"
      : "top-6 left-6";

  const desktopLabel = tooltip ?? "¿Hablamos por WhatsApp?";

  return (
    <div className={clsx("fixed z-50", posClass)}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={tooltip ?? "Chatea con nosotros por WhatsApp"}
        title={tooltip ?? "Chatea con nosotros por WhatsApp"}
        className={clsx(
          "inline-flex items-center justify-center rounded-full shadow-lg",
          "bg-[#25D366] text-white",
          "transition-transform duration-200",
          "hover:scale-105 active:scale-95",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]",
          // Mobile: circular icon-only
          "h-14 w-14",
          // Desktop: pill with text
          "md:h-12 md:w-auto md:px-4 md:gap-2"
        )}
      >
        <IconBrandWhatsapp className="h-7 w-7 md:h-5 md:w-5" aria-hidden="true" />
        {/* Desktop label */}
        <span className="hidden md:inline text-sm font-medium">{desktopLabel}</span>
        {/* SR-only helper for mobile */}
        <span className="sr-only">Abrir chat de WhatsApp</span>
      </a>
    </div>
  );
}

export default WhatsAppFloatingButton;
