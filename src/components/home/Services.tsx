import { Container } from "@/components/ui/Container";
import { VehicleIcon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="bg-[#F4F4F4] py-16 sm:py-20 lg:py-28">
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
            What We Offer
          </p>
          <h2 className="font-display uppercase leading-[1.02] tracking-wide" style={{ fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)" }}>
            Fast, Reliable &amp; Profitable Services Across the GTA
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc, i) => (
            <Reveal
              key={svc.tag}
              as="article"
              delay={i as 0 | 1 | 2 | 3}
              className="group relative flex flex-col border-[3px] border-ink bg-white px-6 pb-[26px] pt-11 shadow-[8px_8px_0_var(--color-ink)] transition-[transform,box-shadow] duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[11px_11px_0_var(--color-red)]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-2"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #9aa1ac 0 2px, #454b55 2.6px, transparent 3.6px) 0 0/10px 10px no-repeat, radial-gradient(circle, #9aa1ac 0 2px, #454b55 2.6px, transparent 3.6px) 100% 0/10px 10px no-repeat, radial-gradient(circle, #9aa1ac 0 2px, #454b55 2.6px, transparent 3.6px) 0 100%/10px 10px no-repeat, radial-gradient(circle, #9aa1ac 0 2px, #454b55 2.6px, transparent 3.6px) 100% 100%/10px 10px no-repeat",
                }}
              />
              <span
                className="absolute -top-[3px] left-5 border-[3px] border-t-0 border-ink bg-red px-3 pb-2 pt-1.5 font-mono text-xs font-bold tracking-wide text-white"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 82%, 0 100%)" }}
              >
                {svc.tag}
              </span>
              <VehicleIcon name={svc.vehicle} className="mb-3.5 h-16 w-16 text-navy transition-transform duration-[450ms] ease-[cubic-bezier(.3,1.4,.5,1)] group-hover:-rotate-6 group-hover:scale-110" />
              <h3 className="mb-2.5 font-display text-[24.5px] font-extrabold leading-[1.05]">{svc.title}</h3>
              <p className="flex-1 text-[15px] text-grey">{svc.body}</p>
              <a
                href="#top-quote"
                className="mt-[18px] self-start border-b-2 border-red font-mono text-xs font-bold uppercase tracking-wide text-red pb-0.5 transition-colors hover:border-navy hover:text-navy"
              >
                Learn more →
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
