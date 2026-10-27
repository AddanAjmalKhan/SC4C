import { Icon } from "@/components/ui/Icon";
import { business } from "@/data/business";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] grid grid-cols-2 border-t-2 border-ink lg:hidden">
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
