import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/data/business";
import { pricingFactors } from "@/data/services";

export function Pricing() {
  return (
    <section id="pricing" className="bg-navy py-16 text-[#d5def0] sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-[clamp(32px,5vw,70px)]">
          <Reveal>
            <p className="mb-3.5 inline-flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber">
              <span
                aria-hidden="true"
                className="h-2.5 w-[22px] border border-ink bg-[length:22px_22px]"
                style={{
                  backgroundImage: "repeating-linear-gradient(-45deg, var(--color-ink) 0 7px, var(--color-amber) 7px 14px)",
                }}
              />
              Pricing
            </p>
            <h2 className="font-display uppercase leading-[1.02] tracking-wide text-white" style={{ fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)" }}>
              What Determines Your Quote
            </h2>
            <p className="mt-3.5 text-[17px]">Five factors set your cash offer. We walk you through each one before you accept.</p>

            <div aria-hidden="true" className="mt-[30px] font-display leading-[0.9]" style={{ fontSize: "clamp(50px, 6.4vw, 84px)" }}>
              <small className="mb-1.5 block font-mono text-xs font-bold tracking-[0.15em] text-[#9fb3d6]">TYPICAL GTA PAYOUT</small>
              <span className="text-amber">$250–$2000</span>
            </div>

            <div className="mt-7">
              <Button href={business.phoneHref} variant="amber">
                <Icon name="phone" className="h-4 w-4" />
                Call Now
              </Button>
            </div>

            <p className="mt-7 text-sm text-[#9fb3d6]">
              Based on these factors, most vehicles we pick up in the GTA sell for $250 to $2000, with larger trucks
              and newer write-offs going higher.
            </p>
          </Reveal>

          <Reveal delay={1} variant="scale" className="relative min-w-0 border-[3px] border-ink bg-[#FFFDF6] p-[26px] pb-[22px] text-ink shadow-[12px_12px_0_rgba(0,0,0,0.4)]">
            <div className="flex items-end justify-between gap-2.5 border-b-[3px] border-double border-ink pb-3 pt-3.5 font-mono text-xs uppercase tracking-wide">
              <b className="font-bold">Scale Ticket</b>
              <span className="text-[#6b6556]">Weigh Station · 66 Milvan Dr</span>
            </div>
            <table className="mt-1.5 w-full border-collapse text-left max-sm:block">
              <thead className="max-sm:hidden">
                <tr>
                  <th scope="col" className="border-b-2 border-ink px-2 py-3 font-mono text-xs uppercase tracking-wide text-navy">
                    Factor
                  </th>
                  <th scope="col" className="border-b-2 border-ink px-2 py-3 font-mono text-xs uppercase tracking-wide text-navy">
                    How It Affects Your Offer
                  </th>
                </tr>
              </thead>
              <tbody className="max-sm:block">
                {pricingFactors.map((row) => (
                  <tr key={row.code} className="max-sm:block max-sm:border-b max-sm:border-dashed max-sm:border-[#b9b2a2] max-sm:py-3 max-sm:last:border-b-0">
                    <td className="whitespace-normal border-b border-dashed border-[#b9b2a2] px-2 py-[15px] pr-[18px] align-top font-mono text-[13px] font-bold sm:whitespace-nowrap max-sm:block max-sm:border-b-0 max-sm:px-0 max-sm:py-0">
                      <i aria-hidden="true" className="mr-2 not-italic text-red">
                        {row.code}
                      </i>
                      {row.title}
                    </td>
                    <td className="border-b border-dashed border-[#b9b2a2] px-2 py-[15px] align-top text-[14.5px] text-grey max-sm:mt-1 max-sm:block max-sm:border-b-0 max-sm:px-0 max-sm:py-0">
                      {row.body}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
