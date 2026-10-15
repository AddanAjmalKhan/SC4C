import { Icon } from "@/components/ui/Icon";
import { business } from "@/data/business";

export function WhatsAppFab() {
  return (
    <a
      href={business.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-7 right-7 z-[70] hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-10px_rgba(37,211,102,0.7)] transition-transform hover:-translate-y-1 md:flex"
    >
      <Icon name="whatsapp" className="h-7 w-7" />
    </a>
  );
}
