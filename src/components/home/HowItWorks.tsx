"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { howItWorksSteps } from "@/data/steps";

function Wheel({ cx }: { cx: number }) {
  return (
    <g
      className="wheel [.moving_&]:[animation-play-state:running]"
      style={{ transformOrigin: "center", transformBox: "fill-box", animation: "spin-slow .6s linear infinite paused" }}
    >
      <circle cx={cx} cy="54" r="10" fill="#171212" />
      <circle cx={cx} cy="54" r="4" fill="#c9ced6" />
      <line x1={cx} y1="45" x2={cx} y2="63" stroke="#555" strokeWidth="2" />
      <line x1={cx - 9} y1="54" x2={cx + 9} y2="54" stroke="#555" strokeWidth="2" />
    </g>
  );
}

function TruckSvg() {
  return (
    <svg viewBox="0 0 160 72" className="block h-auto w-[150px]">
      <rect x="4" y="38" width="96" height="10" fill="#0D3F82" stroke="#171212" strokeWidth="2.5" />
      <rect x="4" y="38" width="96" height="4" fill="#F2A93B" />
      <path d="M4 42h96" stroke="#171212" strokeWidth="1.5" strokeDasharray="6 6" />
      <g transform="translate(14 14) rotate(-2)">
        <path d="M2 22v-6l7-2 8-8h22l8 8 8 2v6z" fill="#8b4b2a" stroke="#171212" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M19 8l-5 6h26l-6-6z" fill="#bcd3ea" stroke="#171212" strokeWidth="2" />
        <circle cx="14" cy="23" r="4.5" fill="#171212" />
        <circle cx="44" cy="23" r="4.5" fill="#171212" />
        <text x="30" y="20" fontFamily="Saira Condensed, sans-serif" fontWeight={900} fontSize="12" fill="#F2A93B" textAnchor="middle">$</text>
      </g>
      <path d="M22 37l10-20M60 37l-6-20" stroke="#F2A93B" strokeWidth="2" />
      <path d="M100 48V22h26l14 14h14v12z" fill="#BD141E" stroke="#171212" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M108 26h16l9 10h-25z" fill="#bcd3ea" stroke="#171212" strokeWidth="2" />
      <rect x="112" y="14" width="14" height="6" fill="#F2A93B" stroke="#171212" strokeWidth="2" />
      <rect x="150" y="38" width="6" height="5" fill="#F2A93B" />
      <Wheel cx={26} />
      <Wheel cx={76} />
      <Wheel cx={134} />
    </svg>
  );
}

export function HowItWorks() {
  const roadWrapRef = useRef<HTMLDivElement | null>(null);
  const truckRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const stopTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    function tick() {
      const rw = roadWrapRef.current;
      const truck = truckRef.current;
      if (!rw || !truck) return;
      const r = rw.getBoundingClientRect();
      const vh = window.innerHeight;
      let p = (vh * 0.75 - r.top) / (r.height + vh * 0.1);
      p = Math.max(0, Math.min(1, p));

      rw.style.setProperty("--rw", r.width + "px");
      truck.style.setProperty("--p", p.toFixed(4));

      const idx = Math.min(3, Math.floor(p * 4.0001));
      stepRefs.current.forEach((s, i) => {
        if (s) s.classList.toggle("lit", p > 0.02 && i <= idx);
      });

      truck.classList.add("moving");
      rw.classList.add("moving");
      clearTimeout(stopTimer.current);
      stopTimer.current = setTimeout(() => {
        truck.classList.remove("moving");
        rw.classList.remove("moving");
      }, 160);
    }

    let raf = 0;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", tick);
    tick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", tick);
      cancelAnimationFrame(raf);
      clearTimeout(stopTimer.current);
    };
  }, []);

  return (
    <section id="how" className="bg-cream py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="mb-8 sm:mb-14">
          <p className="mb-3.5 inline-flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-red">
            <span
              aria-hidden="true"
              className="h-2.5 w-[22px] border border-ink bg-[length:22px_22px]"
              style={{
                backgroundImage: "repeating-linear-gradient(-45deg, var(--color-ink) 0 7px, var(--color-amber) 7px 14px)",
              }}
            />
            How It Works
          </p>
          <h2 className="font-display uppercase leading-[1.02] tracking-wide" style={{ fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)" }}>
            Sell Your Scrap Car in 4 Simple Steps
          </h2>
          <p className="mt-3.5 max-w-xl text-[17px] text-grey">
            From your first call to cash in hand, most pickups are done in under 24 hours.
          </p>
        </div>

        <div ref={roadWrapRef} className="group/road relative mt-5">
          {/* road */}
          <div className="absolute inset-x-0 top-[118px] h-14 overflow-hidden border-y-4 border-ink bg-[#2a2a2e] max-md:hidden">
            <div
              className="absolute -left-[54px] right-0 top-1/2 h-1 -translate-y-1/2 [.moving_&]:[animation-play-state:running]"
              style={{
                backgroundImage: "repeating-linear-gradient(90deg, var(--color-amber) 0 30px, transparent 30px 54px)",
                animation: "dash-x .45s linear infinite paused",
              }}
            />
          </div>

          {/* truck */}
          <div
            ref={truckRef}
            className="absolute top-[66px] left-0 z-[3] w-[150px] will-change-transform max-md:hidden"
            style={{ transform: "translateX(calc(var(--p, 0) * (var(--rw, 1000px) - 150px)))" }}
          >
            <TruckSvg />
          </div>

          <ol className="relative grid list-none grid-cols-1 gap-6 pt-6 sm:grid-cols-2 sm:gap-5 md:pt-[210px] lg:grid-cols-4">
            {howItWorksSteps.map((step, i) => (
              <li
                key={step.title}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="step relative border-[3px] border-ink bg-white px-[22px] pb-[26px] pt-6 shadow-[6px_6px_0_var(--color-ink)] transition-[transform,box-shadow] duration-300 [&.lit]:-translate-y-1.5 [&.lit]:shadow-[6px_12px_0_var(--color-red)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-[18px] top-[-38px] hidden h-[35px] w-1 md:block"
                  style={{
                    backgroundImage: "repeating-linear-gradient(180deg, var(--color-ink) 0 6px, transparent 6px 10px)",
                  }}
                />
                <span className="absolute -top-[22px] left-[18px] border-2 border-ink bg-amber px-2.5 py-0.5 font-mono text-xs font-bold tracking-wide text-ink [.lit_&]:bg-red [.lit_&]:text-white">
                  {step.label.toUpperCase()}
                </span>
                <div className="relative mb-4 grid h-[52px] w-[52px] place-items-center border-2 border-ink bg-navy text-white [.lit_&]:bg-red">
                  <Icon name={step.icon} className="h-7 w-7" />
                  <span
                    aria-hidden="true"
                    className="absolute -inset-1 hidden border-2 border-red [.lit_&]:block"
                    style={{ animation: "ico-ping 1.6s ease-out infinite" }}
                  />
                </div>
                <h3 className="font-condensed text-[19px] font-bold uppercase leading-snug tracking-wide">{step.title}</h3>
                <p className="mt-2.5 text-[15px] text-grey">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
