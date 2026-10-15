import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/data/business";
import { ServiceAreaMap } from "./ServiceAreaMap";

const stats = [
  { value: "20", label: "Communities Served" },
  { value: "13", label: "Dedicated Area Pages" },
  { value: "<24h", label: "Typical Pickup Window" },
  { value: "7 days", label: "Dispatch Availability" },
];

export function ServiceAreas() {
  return (
    <section id="areas" className="bg-navy-darker py-16 text-white sm:py-20 lg:py-28">
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
          <h2 className="font-display uppercase leading-[1.02] tracking-wide" style={{ fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)" }}>
            Scrap Car Removal Across the GTA
          </h2>
          <p className="mt-3.5 max-w-xl text-[17px] text-white/70">Pick your city for local pickup times and service details.</p>
        </Reveal>

        <Reveal variant="scale" className="grid grid-cols-2 divide-x divide-y divide-white/10 border border-white/10 bg-[#0c1522] sm:grid-cols-4 sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-5">
              <span className="font-display text-2xl text-white sm:text-3xl">{s.value}</span>
              <p className="mt-1 font-mono text-[11px] font-bold uppercase leading-snug tracking-wide text-white/50">{s.label}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={1} variant="scale" className="relative mt-[3px] border border-white/10 bg-[#0c1522] p-4 sm:p-6">
          <div className="relative">
            <ServiceAreaMap />

            <div className="pointer-events-none absolute bottom-4 right-4 hidden w-[260px] border-l-4 border-red bg-[rgba(12,21,34,0.92)] p-5 backdrop-blur-sm sm:block">
              <p className="font-display text-sm font-extrabold uppercase tracking-wide text-red">Every Area, Same Deal</p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {["Free tow and pickup, always", "Cash or e-transfer on the spot", "Same-day service, 7 days a week"].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-amber" />
                    {line}
                  </li>
                ))}
              </ul>
              <a href={business.phoneHref} className="pointer-events-auto mt-4 block font-display text-xl font-extrabold text-white hover:text-amber">
                {business.phone}
              </a>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wide text-white/50">
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="h-3 w-4 rounded-sm border border-[#5a7fb5] bg-[#2c4061]" />
              In the service areas menu — 13
            </span>
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="h-3 w-3 rounded-full border-2 border-dashed border-amber" />
              Named on the site, no page — 7
            </span>
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="h-px w-5 border-t border-dashed border-[#3a4454]" />
              Highway
            </span>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <span className="text-sm font-bold text-white/70">View All Areas →</span>
          <a
            href={business.phoneHref}
            className="inline-flex h-12 items-center gap-2.5 whitespace-nowrap rounded-full bg-amber px-5 font-body text-sm font-bold text-ink shadow-[0_10px_30px_-10px_rgba(242,169,59,0.7)] transition-transform hover:-translate-y-0.5"
          >
            <Icon name="phone" className="h-4 w-4" />
            Call Us: {business.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
