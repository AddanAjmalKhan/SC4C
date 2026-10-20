"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
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
            <div className="mb-3.5 flex items-center justify-between gap-3">
              <h3 className="flex items-center gap-2.5 font-mono text-lg font-bold tracking-[0.1em] text-white">
                <i aria-hidden="true" className="h-[9px] w-[9px] rounded-full bg-[#2BD46A]" style={{ animation: "pulse 1.8s infinite" }} />
                PICKUP ZONES
              </h3>
              <span className="shrink-0 border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[11px] font-bold tracking-[0.1em] text-amber">
                {cityNames.length} ZONES
              </span>
            </div>

            <ul className="border-t border-dashed border-white/10 sm:columns-2 sm:gap-x-6">
              {cityNames.map((city, i) => {
                const active = hovered === city;
                return (
                  <li key={city} className="break-inside-avoid">
                    <a
                      href="#top-quote"
                      onMouseEnter={() => setHovered(city)}
                      onMouseLeave={() => setHovered(null)}
                      className={`group flex items-center gap-2.5 border-b border-dashed border-white/10 py-2.5 pl-3 pr-1 font-mono text-[13px] font-semibold transition-colors ${
                        active ? "border-l-2 border-l-amber bg-white/[0.06] text-amber" : "border-l-2 border-l-transparent text-white/75 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      <span className={`w-5 shrink-0 text-[10px] tabular-nums ${active ? "text-amber" : "text-white/30"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{city}</span>
                      <span aria-hidden="true" className={`h-1.5 w-1.5 shrink-0 rounded-full ${active ? "bg-red" : "bg-amber/60"}`} />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto pt-[22px]">
              <a
                href="#top-quote"
                className="inline-flex items-center gap-2 font-display text-lg font-extrabold uppercase tracking-wide text-amber transition-colors hover:text-white"
              >
                View All Areas
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
