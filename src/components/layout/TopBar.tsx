import { Icon } from "@/components/ui/Icon";
import { business } from "@/data/business";

export function TopBar() {
  return (
    <div className="hidden border-b border-white/[0.06] bg-navy-dark font-body text-[#dbe5f5] md:block">
      <div className="mx-auto flex min-h-10 max-w-[1360px] items-center justify-between px-6 text-[13px] lg:px-10">
        <div className="flex items-center gap-[22px]">
          <a href={business.emailHref} className="flex items-center gap-2 hover:text-white">
            <Icon name="mail" className="h-[15px] w-[15px] text-amber" />
            {business.email}
          </a>
          <a href={business.phoneHref} className="flex items-center gap-2 hover:text-white">
            <Icon name="phone" className="h-[15px] w-[15px] text-amber" />
            {business.phone}
          </a>
          <span className="flex items-center gap-2">
            <Icon name="clock" className="h-[15px] w-[15px] text-amber" />
            {business.hours}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <a
            href={business.facebookHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="grid h-7 w-7 place-items-center text-white hover:bg-white/10"
          >
            <Icon name="facebook" className="h-4 w-4" />
          </a>
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="grid h-7 w-7 place-items-center text-white hover:bg-white/10"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
          </a>
          <a
            href={business.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="grid h-7 w-7 place-items-center text-white hover:bg-white/10"
          >
            <Icon name="instagram" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
