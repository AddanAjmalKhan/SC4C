"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cityNames, ServiceAreaMap } from "./ServiceAreaMap";

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
          </div>

          <div className="flex flex-col bg-[#1f1a1a] px-6 py-[26px]">
            <h3 className="mb-4 flex items-center gap-2.5 font-mono text-lg font-bold tracking-[0.1em] text-white">
              <i aria-hidden="true" className="h-[9px] w-[9px] rounded-full bg-[#2BD46A]" style={{ animation: "pulse 1.8s infinite" }} />
              PICKUP ZONES
            </h3>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {cityNames.map((city) => (
                <li key={city}>
                  <a
                    href="#top-quote"
                    onMouseEnter={() => setHovered(city)}
                    onMouseLeave={() => setHovered(null)}
                    className={`flex items-center gap-1.5 border-2 px-2.5 py-[7px] font-mono text-xs font-semibold transition-colors ${
                      hovered === city ? "border-ink bg-amber text-ink" : "border-[#3a3333] bg-[#2a2323] text-white"
                    }`}
                  >
                    <span aria-hidden="true" className={`h-1.5 w-1.5 shrink-0 rounded-full ${hovered === city ? "bg-red" : "bg-amber"}`} />
                    <span className="truncate">{city}</span>
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
