import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { HazardStripe } from "@/components/ui/HazardStripe";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/data/business";

export function UrgentCta() {
  return (
    <>
      <HazardStripe thin />
      <section
        className="relative isolate overflow-hidden py-16 text-center text-white sm:py-24"
        style={{
          background:
            "radial-gradient(900px 400px at 50% 120%, rgba(242,169,59,.35), transparent 60%), linear-gradient(135deg, #8f0d15, var(--color-red) 50%, #8f0d15)",
        }}
      >
        {[0, 1.3, 2.6].map((delay) => (
          <span
            key={delay}
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
            style={{ animation: "radar-ping 4s ease-out infinite", animationDelay: `${delay}s` }}
          />
        ))}

        <Container className="relative">
          <Reveal>
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#ffe6c4]">
              Need Help? In an Urgent Situation?
            </p>
          </Reveal>
          <Reveal delay={1}>
            <a href={business.phoneHref} className="mt-5 inline-block font-display uppercase leading-[0.95] text-white">
              <span className="block text-2xl tracking-wide text-[#ffe6c4] sm:text-3xl">Please call:</span>
              <span
                className="block text-[2.5rem] sm:text-[5.5rem] lg:text-[7rem]"
                style={{ animation: "glow-pulse 2.6s ease-in-out infinite" }}
              >
                {business.phone}
              </span>
            </a>
          </Reveal>
          <Reveal delay={2} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={business.phoneHref}
              className="inline-flex h-12 items-center gap-2.5 whitespace-nowrap rounded-full bg-white px-5 font-body text-[15px] font-bold text-ink shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-0.5"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2.5 whitespace-nowrap rounded-full bg-[#25D366] px-5 font-body text-[15px] font-bold text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.8)] transition-transform hover:-translate-y-0.5"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              WhatsApp
            </a>
          </Reveal>
        </Container>
      </section>
      <HazardStripe thin />
    </>
  );
}
