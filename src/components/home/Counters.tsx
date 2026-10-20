"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { counters } from "@/data/services";

function Counter({ value, suffix, label, first }: { value: number; suffix: string; label: string; first: boolean }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1100;
          const start = performance.now();
          function tick(now: number) {
            const progress = Math.min(1, (now - start) / duration);
            setDisplay(Math.round(progress * value));
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className={`flex items-center gap-4 px-6 py-5 sm:px-8 ${first ? "" : "border-t border-white/10 sm:border-t-0 sm:border-l"}`}>
      <span className="flex h-9 items-center font-display text-3xl leading-none text-white sm:h-10 sm:text-4xl">
        {display}
        <em className="not-italic text-amber">{suffix}</em>
      </span>
      <span className="h-8 w-px shrink-0 bg-white/10" aria-hidden="true" />
      <p className="font-mono text-[11px] font-bold uppercase leading-snug tracking-[0.12em] text-white/60">{label}</p>
    </div>
  );
}

export function Counters() {
  return (
    <section id="counters" aria-label="Company numbers" className="bg-ink">
      <Container>
        <div className="grid grid-cols-1 divide-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {counters.map((c, i) => (
            <Counter key={c.label} value={c.value} suffix={c.suffix} label={c.label} first={i === 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}
