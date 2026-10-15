import { Container } from "@/components/ui/Container";
import { GoogleIcon, Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

function ReviewCard({ t, index }: { t: (typeof testimonials)[number]; index: number }) {
  return (
    <li className="relative h-[260px] w-[340px] shrink-0">
      <div className="flex h-full overflow-hidden border-2 border-ink bg-[#FFFDF6] shadow-sm">
        <div className="flex w-14 shrink-0 flex-col items-center gap-2 bg-red pb-4 pt-5">
          <div className="flex flex-col gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star" className="h-3 w-3 text-white" />
            ))}
          </div>
          <span
            className="mt-2 flex-1 font-mono text-[11px] font-bold tracking-[0.15em] text-white/90"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            NO.{String(index + 1).padStart(3, "0")}
          </span>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-navy font-display text-sm font-bold text-white">
              {t.initial}
            </span>
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-bold">{t.name}</p>
              <p className="flex items-center gap-1 text-xs text-grey">
                <GoogleIcon className="h-3 w-3" />
                Posted on Google
              </p>
            </div>
          </div>
          <div className="mt-3 flex gap-0.5 text-amber" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star" className="h-3.5 w-3.5" />
            ))}
          </div>
          <blockquote className="mt-3 line-clamp-4 text-sm leading-relaxed text-grey">{t.quote}</blockquote>
        </div>
      </div>

      <span aria-hidden="true" className="absolute -top-1.5 right-6 h-3.5 w-3.5 rounded-full bg-paper" />
      <span aria-hidden="true" className="absolute -bottom-1.5 left-6 h-3.5 w-3.5 rounded-full bg-paper" />
    </li>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="border-t border-ink/10 bg-paper py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <Reveal>
            <p className="font-display text-sm font-bold uppercase tracking-wide text-red">09 / Reviews</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
              What Our Clients Say About Our Scrap Car Removal In The GTA?
            </h2>
            <p className="mt-4 text-grey">
              Our customers trust us for <strong>reliable</strong>, <strong>fast</strong>, and{" "}
              <strong>hassle-free scrap car removal</strong>. Here&apos;s what they have to say.
            </p>
          </Reveal>

          <Reveal delay={1} className="border border-ink/10 bg-white p-6 shadow-sm">
            <p className="font-display text-xs font-bold uppercase tracking-wide text-grey">Excellent</p>
            <div className="mt-2 flex gap-1 text-amber">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-5 w-5" />
              ))}
            </div>
            <p className="mt-3 text-sm text-grey">
              Rated <b className="text-ink">5</b> out of 5 — Based on <b className="text-ink">9 reviews</b>
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4">
              <span className="flex items-center gap-2 font-display text-sm font-bold">
                <GoogleIcon className="h-5 w-5" />
                Google
              </span>
              <span className="flex items-center gap-1.5 text-xs text-grey">
                <Icon name="check" className="h-3.5 w-3.5 text-navy" />
                Verified by Trustindex
              </span>
            </div>
          </Reveal>
        </div>
      </Container>

      <Reveal
        delay={2}
        className="group/rail mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
      >
        <ul
          className="flex w-max gap-6 px-4 py-2 group-hover/rail:[animation-play-state:paused] sm:px-6 lg:px-10"
          style={{ animation: "marquee 54s linear infinite" }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <ReviewCard key={i} t={t} index={i % testimonials.length} />
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
