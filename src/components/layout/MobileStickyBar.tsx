"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { business } from "@/data/business";

export function MobileStickyBar() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-ink/10 bg-white shadow-[0_-6px_20px_rgba(0,0,0,0.08)] transition-transform duration-500 md:hidden"
      style={{ transform: shown ? "translateY(0)" : "translateY(100%)" }}
    >
      <a href={business.phoneHref} className="flex items-center justify-center gap-2 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-ink">
        <Icon name="phone" className="h-4 w-4 text-red" />
        Call Now
      </a>
      <a
        href={business.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border-l border-ink/10 bg-navy py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white"
      >
        <span className="relative flex h-4 w-4 items-center justify-center" style={{ animation: "pulse 2.2s infinite" }}>
          <Icon name="whatsapp" className="h-4 w-4" />
        </span>
        WhatsApp
      </a>
    </nav>
  );
}
