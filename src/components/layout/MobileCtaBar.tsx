"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { business } from "@/data/business";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("mobile-quote");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show only once the second section has fully scrolled past (its
        // bottom edge is above the viewport) - hidden in the Hero and
        // while the "Get Your Quote" section is still in view.
        setVisible(entry.boundingClientRect.bottom < 0);
      },
      { threshold: 0 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[70] grid grid-cols-2 border-t-2 border-ink transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={business.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] py-3.5 font-body text-[13px] font-bold uppercase tracking-wide text-white"
      >
        <Icon name="whatsapp" className="h-4 w-4" />
        WhatsApp
      </a>
      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-2 bg-red py-3.5 font-body text-[13px] font-bold uppercase tracking-wide text-white"
      >
        <Icon name="phone" className="h-4 w-4" />
        Call
      </a>
    </div>
  );
}
