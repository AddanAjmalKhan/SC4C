"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/data/business";
import { cityNames, ServiceAreaMap } from "./ServiceAreaMap";

const dealPoints = ["Free tow and pickup, always", "Cash or e-transfer on the spot", "Same-day service, 7 days a week"];

export function ServiceAreas() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="areas" className="bg-ink py-16 text-[#c8ccd4] sm:py-20 lg:py-28">
      <Container>
        <Reveal as="div" className="mb-10">
          <p className="mb-3.5 inline-flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber">
            <span
              aria-hidden="true"
              className="h-2.5 w-[22px] border border-ink bg-[length:22px_22px]"
              style={{
                backgroundImage: "repeating-linear-gradient(-45deg, var(--color-ink) 0 7px, var(--color-amber) 7px 14px)",
              }}
            />
            Service Areas
          </p>
          <h2 className="font-display uppercase leading-[1.02] tracking-wide text-white" style={{ fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)" }}>
            Scrap Car Removal Across the GTA
          </h2>
          <p className="mt-3.5 max-w-xl text-[17px] text-[#c8ccd4]">Pick your city for local pickup times and service details.</p>
        </Reveal>

        <Reveal
          variant="scale"
          className="grid grid-cols-1 border-[3px] border-black shadow-[0_0_0_3px_#2c2626] lg:grid-cols-[1.25fr_0.75fr]"
        >
          <div className="relative min-h-[320px] overflow-hidden bg-navy-dark sm:min-h-[420px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(255,255,255,.05) 0 1px, transparent 1px 32px), repeating-linear-gradient(90deg, rgba(255,255,255,.05) 0 1px, transparent 1px 32px)",
              }}
            />
            <ServiceAreaMap hovered={hovered} onHoverCity={setHovered} />

            <div className="absolute bottom-3 right-3 z-[3] hidden w-[210px] border-l-4 border-red bg-[#0b1b33]/95 p-3.5 backdrop-blur-sm sm:block">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-red">Every Area, Same Deal</p>
              <ul className="mt-2 space-y-1.5">
                {dealPoints.map((point) => (
                  <li key={point} className="flex items-start gap-1.5 text-[11px] leading-snug text-[#c8ccd4]">
                    <span aria-hidden="true" className="mt-[3px] h-1.5 w-1.5 shrink-0 bg-amber" />
                    {point}
                  </li>
                ))}
              </ul>
              <a href={business.phoneHref} className="mt-2.5 block font-display text-base font-extrabold tracking-wide text-white hover:text-amber">
                {business.phone}
              </a>
            </div>
          </div>

          <div className="flex flex-col bg-[#1f1a1a] px-6 py-[26px]">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="flex items-center gap-2.5 font-mono text-lg font-bold tracking-[0.1em] text-white">
                <i aria-hidden="true" className="h-[9px] w-[9px] rounded-full bg-[#2BD46A]" style={{ animation: "pulse 1.8s infinite" }} />
                PICKUP ZONES
              </h3>
              <span className="shrink-0 border border-[#3a3333] px-2.5 py-1 font-mono text-[11px] font-bold tracking-[0.1em] text-[#9aa0ab]">
                {cityNames.length} ZONES
              </span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
              {cityNames.map((city, i) => (
                <li key={city}>
                  <a
                    href="#top-quote"
                    onMouseEnter={() => setHovered(city)}
                    onMouseLeave={() => setHovered(null)}
                    className={`flex items-center gap-2.5 border-b py-[11px] font-mono text-sm transition-colors ${
                      hovered === city ? "border-amber text-amber" : "border-[#332e2e] text-[#c8ccd4] hover:text-white"
                    }`}
                  >
                    <span className="text-xs text-[#6b6f78]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="truncate font-semibold">{city}</span>
                    <span aria-hidden="true" className={`ml-auto h-1.5 w-1.5 shrink-0 rounded-full ${hovered === city ? "bg-red" : "bg-amber"}`} />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-[22px]">
              <a href="#top-quote" className="font-display text-lg font-extrabold uppercase tracking-wide text-amber hover:text-white">
                View All Areas →
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
