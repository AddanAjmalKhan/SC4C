"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";

const GAUGES = [
  { title: "Free Towing", subtitle: "Anywhere in the GTA", color: "#F2A93B", rotation: 70, label: "$0" },
  { title: "Cash On The Spot", subtitle: "Paid at pickup", color: "#2BD46A", rotation: 80, label: "CASH" },
  { title: "12,000+ Vehicles", subtitle: "Recycled", color: "#F2A93B", rotation: 55, label: "12K" },
  { title: "4.9★ Average", subtitle: "Customer rating", color: "#F2A93B", rotation: 84, label: "4.9" },
];

function Dial({ color, rotation, label, active }: { color: string; rotation: number; label: string; active: boolean }) {
  return (
    <div className="relative h-[62px] w-[62px] shrink-0">
      <svg viewBox="0 0 62 62" className="h-full w-full">
        <path d="M7 38a24 24 0 0 1 48 0" fill="none" stroke="#3a3333" strokeWidth="7" />
        <path d="M7 38a24 24 0 0 1 48 0" fill="none" stroke={color} strokeWidth="7" strokeDasharray="4 3" />
        <g
          style={{
            transformOrigin: "31px 34px",
            transform: `rotate(${active ? rotation : -90}deg)`,
            transition: "transform 1.4s cubic-bezier(.3,1.4,.5,1)",
          }}
        >
          <line
            x1="31"
            y1="34"
            x2="31"
            y2="12"
            stroke="#BD141E"
            strokeWidth="3"
            strokeLinecap="round"
            style={active ? { animation: "wob 2.8s ease-in-out 1.6s infinite", transformBox: "view-box", transformOrigin: "31px 34px" } : undefined}
          />
        </g>
        <circle cx="31" cy="34" r="4.5" fill="#fff" />
        <text x="31" y="56" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" fill="#9aa">
          {label}
        </text>
      </svg>
    </div>
  );
}

export function TrustGauges() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} aria-label="Why customers trust us" className="border-b-[3px] border-ink bg-ink">
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {GAUGES.map((g, i) => (
          <div
            key={g.title}
            className={`flex items-center gap-3 border-[#2c2626] px-5 py-5 sm:gap-4 sm:py-6 ${
              i !== GAUGES.length - 1 ? "border-b-2 sm:border-b-0" : ""
            } ${i % 2 === 0 ? "sm:border-r-2" : "sm:border-r-0 lg:border-r-2"} ${
              i < 2 ? "sm:border-b-2 lg:border-b-0" : ""
            } ${i === GAUGES.length - 1 ? "lg:border-r-0" : ""}`}
          >
            <Dial color={g.color} rotation={g.rotation} label={g.label} active={active} />
            <div>
              <h3 className="font-display text-lg font-extrabold tracking-wide text-white sm:text-xl">{g.title}</h3>
              <p className="mt-0.5 font-mono text-xs uppercase tracking-wide text-amber">{g.subtitle}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
