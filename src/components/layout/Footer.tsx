import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { business } from "@/data/business";

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "FAQ's", href: "#faq" },
  { label: "Service Areas", href: "#areas" },
  { label: "Contact", href: "#top-quote" },
];

const serviceLinks = ["Cash for Cars", "Junk Car Pickup", "Scrap Car Removal", "Towing Service"];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.09] bg-[#0e0a0a] pt-24 text-[#F6F1EA]">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1.1fr]">
          <div>
            <div
              className="inline-flex items-center overflow-hidden border-l-[6px] border-red bg-white py-2 pl-3 pr-5"
              style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 16px) 100%, 0 100%)" }}
            >
              <Image src={business.logoSrc} alt="Scrap Cars 4 Cash logo" width={business.logoWidth} height={business.logoHeight} className="h-10 w-auto" />
            </div>
            <p className="mt-[22px] max-w-[40ch] text-[15px] text-[#a3958d]">
              We are the GTA&apos;s most trusted Cash for Cars service with over 25 years of experience, offering free same-day pickup for junk, scrap, and
              accident-damaged vehicles.
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-extrabold uppercase tracking-[0.2em] text-amber">Company</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[#a3958d] bg-[linear-gradient(var(--color-amber),var(--color-amber))] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size,color] duration-300 hover:bg-[length:100%_1px] hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-extrabold uppercase tracking-[0.2em] text-amber">Services</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-[#a3958d] bg-[linear-gradient(var(--color-amber),var(--color-amber))] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size,color] duration-300 hover:bg-[length:100%_1px] hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-extrabold uppercase tracking-[0.2em] text-amber">Get in touch</h3>
            <ul className="mt-5 flex flex-col gap-3">
              <li className="flex items-start gap-3 text-[#a3958d]">
                <Icon name="pin" className="mt-1 h-[18px] w-[18px] shrink-0 text-red" />
                <span>
                  <strong className="block text-[#F6F1EA]">{business.name}</strong>
                  <a href={business.mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {business.address}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3 text-[#a3958d]">
                <Icon name="phone" className="h-[18px] w-[18px] shrink-0 text-red" />
                <a href={business.phoneHref} className="hover:text-white">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#a3958d]">
                <Icon name="mail" className="h-[18px] w-[18px] shrink-0 text-red" />
                <a href={business.emailHref} className="hover:text-white">
                  {business.email}
                </a>
              </li>
            </ul>
            <div className="mt-[22px] flex gap-2.5">
              <a
                href={business.facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/[0.16] px-4 py-2.5 text-sm font-bold text-[#F6F1EA] transition-colors hover:border-amber hover:text-amber"
              >
                <Icon name="facebook" className="h-4 w-4" />
                Facebook
              </a>
              <a
                href={business.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/[0.16] px-4 py-2.5 text-sm font-bold text-[#F6F1EA] transition-colors hover:border-amber hover:text-amber"
              >
                <Icon name="instagram" className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="mb-[18px] text-sm font-extrabold uppercase tracking-[0.2em] text-amber">Find Us</h3>
          <iframe
            loading="lazy"
            title={`Map to ${business.name}, ${business.address}`}
            src={business.mapEmbedSrc}
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[340px] w-full border-0 bg-[#1e1818] grayscale-[90%] invert-[92%] contrast-[90%] hue-rotate-180"
          />
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.09] py-7 text-[13px] text-[#a3958d]">
          <span>Copyright © 2026, All rights reserved.</span>
          <span>
            Mon - Sun : 24 Hours ·{" "}
            <a href={business.phoneHref} className="font-bold text-[#F6F1EA]">
              {business.phone}
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
