import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/data/business";

function Seal({
  className = "",
  rotate,
  bg,
  color,
  label,
}: {
  className?: string;
  rotate: string;
  bg: string;
  color: string;
  label: string;
}) {
  return (
    <div
      className={`absolute z-[2] grid h-[132px] w-[132px] place-items-center rounded-full border-4 p-[22px] text-center font-display text-[14.5px] font-black uppercase leading-none tracking-wide shadow-[0_8px_20px_rgba(0,0,0,0.25)] ${className}`}
      style={{ background: bg, color, borderColor: color, outline: `2px dashed ${color}`, outlineOffset: "-12px", transform: `rotate(${rotate})` }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[9px] rounded-full opacity-55"
        style={{ border: `2px dashed ${color}`, animation: "spin-slow 18s linear infinite" }}
      />
      <span className="relative">
        <b className="block text-[31px] tracking-wide">24/7</b>
        {label}
      </span>
    </div>
  );
}

export function WhoWeAre() {
  return (
    <section id="about" className="bg-[#171212] py-16 text-white sm:py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal variant="scale" className="relative">
          <span
            aria-hidden="true"
            className="absolute -bottom-[18px] -right-[18px] -z-10 h-3/5 w-3/5 rounded-[28px] border-2 border-red"
          />
          <div className="group relative aspect-square overflow-hidden rounded-[28px] bg-[#261e1e] shadow-[0_50px_100px_-40px_rgba(0,0,0,0.9)]">
            <Image
              src="https://scrapcars4cash.ca/wp-content/uploads/2026/08/toronto-scrap-car-removal-1024x1024.jpg"
              alt="Scrap Cars 4 Cash tow truck removing a scrap car in Toronto"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{ background: "linear-gradient(180deg, transparent 50%, rgba(14,10,10,.7))" }}
            />
          </div>

          <Seal className="-bottom-[34px] -left-[34px]" rotate="-12deg" bg="var(--color-red)" color="#fff" label="Scrap Car Service" />
          <Seal className="-right-[28px] -top-[28px]" rotate="9deg" bg="var(--color-amber)" color="var(--color-ink)" label="Assistance" />
        </Reveal>

        <div>
          <Reveal>
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-amber">
              <span
                aria-hidden="true"
                className="h-0.5 w-7 bg-amber shadow-[0_0_12px_var(--color-amber)]"
              />
              Who We Are
            </p>
            <h2 className="mt-3 font-display uppercase leading-[1.02] tracking-wide" style={{ fontSize: "clamp(1.875rem, 4.5vw, 3rem)" }}>
              Toronto&apos;s Most Trusted Scrap Car Removal Company
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-5 max-w-[54ch] text-[15.5px] text-white/70">
              At Scrap Cars 4 Cash, we make getting rid of your old, damaged, or unwanted vehicle completely
              stress-free. Whether your car won&apos;t start, has been in an accident, or is simply taking up
              space in your driveway, we come to you, pick it up for free, and pay you top cash on the spot.
            </p>
          </Reveal>
          <Reveal delay={2} className="mt-8 flex flex-wrap gap-3">
            <Button href="#services" variant="ghost">
              Discover More <Icon name="arrow" className="h-4 w-4" />
            </Button>
            <Button href={business.phoneHref} variant="primary">
              <Icon name="phone" className="h-4 w-4" />
              Call Now
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
