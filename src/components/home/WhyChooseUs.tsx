import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/data/business";
import { whyChooseUs } from "@/data/services";

export function WhyChooseUs() {
  return (
    <section id="why" className="bg-cream py-10 sm:py-12 lg:py-14">
      <Container className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-[clamp(28px,5vw,64px)]">
        <div className="order-1 flex flex-col">
          <Reveal>
            <p className="mb-2 inline-flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-red">
              <span
                aria-hidden="true"
                className="h-2.5 w-[22px] border border-ink bg-[length:22px_22px]"
                style={{
                  backgroundImage: "repeating-linear-gradient(-45deg, var(--color-ink) 0 7px, var(--color-amber) 7px 14px)",
                }}
              />
              Why Choose Us
            </p>
            <h2 className="font-display uppercase leading-[1.02] tracking-wide" style={{ fontSize: "clamp(1.625rem, 3.6vw, 2.5rem)" }}>
              Why Residents Choose Scrap Cars 4 Cash
            </h2>
            <p className="mt-2 text-[15.5px] text-grey">
              We offer some of the highest cash rates for scrap and junk vehicles in the GTA, with no lowball offers.
            </p>
          </Reveal>

          <div className="mt-4 grid gap-2.5">
            {whyChooseUs.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 4) as 0 | 1 | 2 | 3}
                variant="left"
                className="grid grid-cols-[40px_1fr] gap-3 border-[3px] border-ink bg-white p-3 shadow-[5px_5px_0_var(--color-ink)]"
              >
                <span className="grid h-10 w-10 place-items-center border-2 border-ink bg-amber text-ink">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="mb-0.5 font-body text-[15px] font-bold leading-snug">{item.title}</h3>
                  <p className="text-[13px] leading-snug text-grey">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={3} className="mt-4 flex flex-wrap gap-3">
            <Button href={business.phoneHref} variant="primary">
              <Icon name="phone" className="h-4 w-4" />
              Call Now
            </Button>
            <Button href={business.whatsappHref} variant="whatsapp" target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" className="h-4 w-4" />
              WhatsApp
            </Button>
          </Reveal>
        </div>

        <Reveal variant="scale" className="relative order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden border-[3px] border-ink bg-[#d9dde3] shadow-[-12px_12px_0_var(--color-red)] lg:aspect-auto lg:h-full">
            <Image
              src="https://scrapcars4cash.ca/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-10-at-4.41.27-AM.jpeg"
              alt="Scrap van loaded and strapped onto a Scrap Cars 4 Cash flatbed tow truck in the GTA"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <span className="absolute -right-3 bottom-7 border-2 border-amber bg-ink px-3.5 py-2.5 font-mono text-xs font-bold tracking-[0.15em] text-amber">
            LOADED · STRAPPED · GONE
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
