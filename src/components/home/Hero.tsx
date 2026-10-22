import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { business } from "@/data/business";
import { QuoteTicket } from "./QuoteTicket";

const EASE = "cubic-bezier(.2,.8,.2,1)";

export function Hero() {
  return (
    <>
    <section
      id="top"
      className="relative isolate -mt-[70px] flex min-h-[100svh] flex-col overflow-hidden bg-[#120d0d] pt-[70px] text-white lg:-mt-[84px] lg:pt-[84px]"
    >
      {/* Full-bleed background photo, Ken Burns zoom-out */}
      <div aria-hidden="true" className="absolute inset-0 -z-30">
        <Image
          src="https://scrapcars4cash.ca/wp-content/uploads/2026/08/toronto-scrap-car-removal.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: "60% 50%",
            transform: "scale(1.08)",
            animation: "kenburns 22s " + EASE + " forwards",
            filter: "saturate(.85) contrast(1.05)",
          }}
        />
      </div>

      {/* Gradient wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(1200px 600px at 78% 40%, rgba(189,20,30,.22), transparent 60%), linear-gradient(90deg, rgba(14,10,10,.96) 0%, rgba(14,10,10,.82) 40%, rgba(14,10,10,.45) 75%, rgba(14,10,10,.6) 100%), linear-gradient(180deg, rgba(14,10,10,.7) 0%, transparent 25%, transparent 60%, var(--color-ink) 100%)",
        }}
      />

      {/* Film grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1/2 -z-10 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1.4 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          animation: "grain 1.2s steps(6) infinite",
        }}
      />

      <div className="flex flex-1 items-center py-6 sm:py-8 lg:py-3">
        <Container>
          <div className="grid items-center gap-9 lg:grid-cols-[1.35fr_0.8fr] lg:gap-10">
            <div className="lg:col-start-1 lg:row-start-1">
              <p
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-amber"
                style={{ animation: "fade-up 1s both" }}
              >
                <span
                  aria-hidden="true"
                  className="h-0.5 w-7 bg-amber shadow-[0_0_12px_var(--color-amber)]"
                  style={{ transformOrigin: "left", animation: "line-grow .9s .35s " + EASE + " both" }}
                />
                Welcome to Scrap Cars 4Cash
              </p>

              <h1 className="mt-3 font-display uppercase leading-[0.93] tracking-wide" style={{ fontSize: "clamp(2.15rem, 4.2vw, 3.6rem)" }}>
                <span className="block overflow-hidden py-[0.04em] lg:hidden">
                  <span
                    className="inline-block"
                    style={{ transformOrigin: "0 100%", animation: "h1in 1.25s " + EASE + " both" }}
                  >
                    Get Instant Cash
                  </span>
                </span>
                <span className="block overflow-hidden py-[0.04em] lg:hidden">
                  <span
                    className="inline-block"
                    style={{ transformOrigin: "0 100%", animation: "h1in 1.25s .08s " + EASE + " both" }}
                  >
                    For Your
                  </span>
                </span>
                <span className="hidden overflow-hidden py-[0.04em] lg:block">
                  <span
                    className="inline-block"
                    style={{ transformOrigin: "0 100%", animation: "h1in 1.25s " + EASE + " both" }}
                  >
                    Get Instant Cash for Your
                  </span>
                </span>
                <span className="block overflow-hidden py-[0.04em]">
                  <span
                    className="relative inline-block text-amber"
                    style={{
                      transformOrigin: "0 100%",
                      animation: "h1in 1.25s .16s " + EASE + " both, flick 5s 1.6s infinite",
                      textShadow: "0 0 18px rgba(242,169,59,.55), 0 0 60px rgba(242,169,59,.35), 0 0 120px rgba(189,20,30,.35)",
                    }}
                  >
                    Scrap Car
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-[0.02em] -bottom-[0.04em] h-[0.06em]"
                      style={{
                        background: "linear-gradient(90deg, var(--color-red), var(--color-amber) 60%, rgba(242,169,59,0))",
                        boxShadow: "0 0 18px rgba(242,169,59,.6)",
                        transformOrigin: "left",
                        transform: "scaleX(0)",
                        animation: "line-grow 1.1s 1.25s " + EASE + " forwards",
                      }}
                    />
                  </span>
                </span>
                <span className="block overflow-hidden py-[0.04em]">
                  <span
                    className="inline-block max-w-[17ch] text-[0.58em] leading-[1.05] tracking-wide text-white/70"
                    style={{ transformOrigin: "0 100%", animation: "h1in 1.25s .32s " + EASE + " both" }}
                  >
                    — Fast, Easy &amp; <span className="whitespace-nowrap">Same-Day</span> Pickup
                  </span>
                </span>
              </h1>

              <p
                className="mt-3 max-w-[54ch] text-sm text-white/70 sm:text-base"
                style={{ animation: "fade-up 1s .5s both" }}
              >
                Turn your old, damaged, or unwanted vehicle into instant cash with our reliable scrap car removal
                service across Toronto and the GTA.
              </p>

            </div>

            <div
              id="top-quote"
              className="hidden justify-center lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:flex lg:justify-end"
              style={{ animation: "fade-up 1s .8s both" }}
            >
              <QuoteTicket transparent />
            </div>

            <div
              className="flex flex-col items-stretch gap-3 lg:col-start-1 lg:row-start-2 lg:flex-row lg:flex-wrap lg:items-center lg:justify-start"
              style={{ animation: "fade-up 1s .65s both" }}
            >
              <a
                href={business.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-red px-5 font-body text-sm font-bold text-white shadow-[0_10px_30px_-10px_rgba(189,20,30,0.8)] transition-transform hover:-translate-y-0.5 hover:bg-red-dark"
              >
                <Icon name="phone" className="h-4 w-4" />
                Call Now <span className="font-extrabold tracking-wide">· {business.phone}</span>
              </a>
              <div className="flex w-full items-center gap-3 lg:w-auto">
                <a
                  href="#mobile-quote"
                  className="inline-flex h-12 flex-1 items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-white/40 bg-white/[0.03] px-5 font-body text-sm font-bold text-white transition-colors hover:border-amber hover:text-amber lg:hidden"
                >
                  Get Quote <Icon name="arrow" className="h-4 w-4" />
                </a>
                <a
                  href="#top-quote"
                  className="hidden h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-white/40 bg-white/[0.03] px-5 font-body text-sm font-bold text-white transition-colors hover:border-amber hover:text-amber lg:inline-flex"
                >
                  Get Quote <Icon name="arrow" className="h-4 w-4" />
                </a>
                <a
                  href={business.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.8)] transition-transform hover:-translate-y-0.5"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>

    <section id="mobile-quote" className="bg-cream py-10 lg:hidden">
      <Container>
        <p className="mb-2 inline-flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-red">
          <span
            aria-hidden="true"
            className="h-2.5 w-[22px] border border-ink bg-[length:22px_22px]"
            style={{
              backgroundImage: "repeating-linear-gradient(-45deg, var(--color-ink) 0 7px, var(--color-amber) 7px 14px)",
            }}
          />
          Get Your Quote
        </p>
        <h2 className="font-display uppercase leading-[1.02] tracking-wide" style={{ fontSize: "clamp(1.5rem, 6vw, 2rem)" }}>
          See What Your Car Is Worth
        </h2>
        <p className="mt-2 max-w-[42ch] text-[15px] text-grey">
          Prefer to just talk? Call or WhatsApp us instead — or fill out the quick form below.
        </p>
        <div className="mt-6 flex justify-center">
          <QuoteTicket />
        </div>
      </Container>
    </section>
    </>
  );
}
