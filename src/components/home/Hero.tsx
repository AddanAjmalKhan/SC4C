import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { business } from "@/data/business";
import { QuoteTicket } from "./QuoteTicket";

const EASE = "cubic-bezier(.2,.8,.2,1)";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate -mt-[70px] flex h-[100svh] flex-col overflow-hidden bg-[#120d0d] pt-[70px] text-white lg:-mt-[84px] lg:pt-[84px]"
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

      <div className="flex min-h-0 flex-1 items-center overflow-y-auto py-3">
        <Container>
          <div className="grid items-center gap-6 lg:grid-cols-[1.35fr_0.8fr] lg:gap-10">
            <div>
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

              <h1 className="mt-3 font-display uppercase leading-[0.93] tracking-wide" style={{ fontSize: "clamp(1.9rem, 4.2vw, 3.6rem)" }}>
                <span className="block overflow-hidden py-[0.04em]">
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
                      animation: "h1in 1.25s .14s " + EASE + " both, flick 5s 1.6s infinite",
                      textShadow: "0 0 18px rgba(242,169,59,.55), 0 0 60px rgba(242,169,59,.35), 0 0 120px rgba(189,20,30,.35)",
                    }}
                  >
                    Scrap Car
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-[0.02em] -bottom-[0.04em] h-[0.06em] rounded-full"
                      style={{
                        background: "linear-gradient(90deg, var(--color-red), var(--color-amber) 60%, rgba(242,169,59,0))",
                        boxShadow: "0 0 18px rgba(242,169,59,.6)",
                        transformOrigin: "left",
                        transform: "scaleX(0)",
                        animation: "line-grow 1.1s 1.15s " + EASE + " forwards",
                      }}
                    />
                  </span>
                </span>
                <span className="block overflow-hidden py-[0.04em]">
                  <span
                    className="inline-block max-w-[17ch] text-[0.58em] leading-[1.05] tracking-wide text-white/70"
                    style={{ transformOrigin: "0 100%", animation: "h1in 1.25s .28s " + EASE + " both" }}
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

              <div className="mt-5 flex flex-wrap gap-3" style={{ animation: "fade-up 1s .65s both" }}>
                <a
                  href={business.phoneHref}
                  className="inline-flex h-12 items-center gap-2.5 whitespace-nowrap rounded-full bg-red px-5 font-body text-sm font-bold text-white shadow-[0_10px_30px_-10px_rgba(189,20,30,0.8)] transition-transform hover:-translate-y-0.5 hover:bg-red-dark"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  Call Now <span className="font-extrabold tracking-wide">· {business.phone}</span>
                </a>
                <a
                  href="#top-quote"
                  className="inline-flex h-12 items-center gap-2.5 whitespace-nowrap rounded-full border border-white/15 bg-white/[0.03] px-5 font-body text-sm font-bold text-white transition-colors hover:border-amber hover:text-amber"
                >
                  Get Quote <Icon name="arrow" className="h-4 w-4" />
                </a>
                <a
                  href={business.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.8)] transition-transform hover:-translate-y-0.5"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div id="top-quote" className="flex justify-center lg:justify-end" style={{ animation: "fade-up 1s .8s both" }}>
              <QuoteTicket />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
