import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon, VehicleIcon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/data/business";
import { acceptedVehicles } from "@/data/services";

export function WhatWeAccept() {
  return (
    <section id="accept" className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <Reveal as="div" className="mb-10 sm:mb-14">
          <p className="mb-3.5 inline-flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-red">
            <span
              aria-hidden="true"
              className="h-2.5 w-[22px] border border-ink bg-[length:22px_22px]"
              style={{
                backgroundImage: "repeating-linear-gradient(-45deg, var(--color-ink) 0 7px, var(--color-amber) 7px 14px)",
              }}
            />
            What We Accept
          </p>
          <h2 className="font-display uppercase leading-[1.02] tracking-wide" style={{ fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)" }}>
            Vehicles We Buy, in Any Condition
          </h2>
          <p className="mt-3.5 max-w-xl text-[17px] text-grey">
            Running, non-running, rusted, flooded, or totaled, if it has four wheels, we&apos;ll make an offer.
          </p>
        </Reveal>

        <Reveal variant="scale" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {acceptedVehicles.map((item) => (
            <div
              key={item.letter}
              className="grid grid-cols-[96px_1fr] items-center gap-5 border-[3px] border-ink bg-white p-[30px_28px] transition-colors hover:bg-[#FFF6E6]"
            >
              <div className="relative grid h-[72px] w-24 place-items-center border-2 border-ink bg-[#F4F4F4]">
                <VehicleIcon name={item.vehicle} className="h-[50px] w-20 text-ink" />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 -left-0.5 -right-0.5 h-1.5 bg-[length:12px_12px]"
                  style={{
                    backgroundImage: "repeating-linear-gradient(-45deg, var(--color-ink) 0 4px, var(--color-amber) 4px 8px)",
                  }}
                />
              </div>
              <div>
                <h3 className="mb-1.5 font-display text-[22px] font-extrabold leading-[1.05]">{item.title}</h3>
                <p className="text-[14.5px] text-grey">{item.body}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal
          delay={1}
          className="mt-14 flex flex-wrap items-center justify-between gap-5 border border-ink/10 bg-[linear-gradient(90deg,rgba(189,20,30,.08),rgba(13,63,130,.08))] px-6 py-5 sm:px-8"
        >
          <div className="flex items-center gap-4 font-display text-2xl sm:text-3xl">
            <Icon name="phone" className="h-7 w-7 shrink-0 text-red" />
            <a href={business.phoneHref}>{business.phone}</a>
          </div>
          <div className="flex gap-2.5">
            <Button href={business.phoneHref} variant="primary">
              <Icon name="phone" className="h-4 w-4" />
              Call Now
            </Button>
            <Button href={business.whatsappHref} target="_blank" rel="noopener noreferrer" variant="whatsapp">
              <Icon name="whatsapp" className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
