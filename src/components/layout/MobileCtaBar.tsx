import { Icon } from "@/components/ui/Icon";
import { business } from "@/data/business";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] grid grid-cols-3 border-t-2 border-ink lg:hidden">
      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-2 bg-ink py-3.5 font-body text-[13px] font-bold uppercase tracking-wide text-white"
      >
        <Icon name="phone" className="h-4 w-4 text-red" />
        Call
      </a>
      <a
        href={business.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border-x border-white/10 bg-ink py-3.5 font-body text-[13px] font-bold uppercase tracking-wide text-white"
      >
        <Icon name="whatsapp" className="h-4 w-4 text-[#2BD46A]" />
        WhatsApp
      </a>
      <a
        href="#mobile-quote"
        className="flex items-center justify-center gap-2 bg-amber py-3.5 font-body text-[13px] font-bold uppercase tracking-wide text-ink"
      >
        Get Quote
      </a>
    </div>
  );
}
