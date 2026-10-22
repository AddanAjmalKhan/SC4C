"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const GAUGES = [
  { title: "Free Towing", subtitle: "Anywhere in the GTA", color: "#F2A93B", icon: "tow" as const },
  { title: "Cash On The Spot", subtitle: "Paid at pickup", color: "#2BD46A", icon: "cash" as const },
  { title: "12,000+ Vehicles", subtitle: "Recycled", color: "#F2A93B", icon: "stack" as const },
  { title: "4.9★ Average", subtitle: "Customer rating", color: "#F2A93B", icon: "star" as const },
];

function GaugeIcon({ icon, color, active }: { icon: "tow" | "cash" | "stack" | "star"; color: string; active: boolean }) {
  const style = {
    color,
    opacity: active ? 1 : 0,
    transform: active ? "scale(1)" : "scale(0.7)",
    transition: "opacity .6s ease, transform .6s cubic-bezier(.3,1.4,.5,1)",
  };

  if (icon === "stack") {
    return (
      <div className="relative h-14 w-10 shrink-0 sm:h-[78px] sm:w-14" style={style}>
        <Image src="/toy-cars-cutout.png" alt="" fill sizes="56px" className="object-contain" />
      </div>
    );
  }

  if (icon === "cash") {
    return (
      <div className="relative h-14 w-14 shrink-0 sm:h-[78px] sm:w-[78px]" style={style}>
        <Image src="/cash-cutout.png" alt="" fill sizes="78px" className="object-contain" />
      </div>
    );
  }

  if (icon === "tow") {
    return (
      <div className="relative h-9 w-16 shrink-0 sm:h-14 sm:w-32" style={style}>
        <Image src="/towing-car.jpg" alt="" fill sizes="128px" className="object-contain" />
      </div>
    );
  }

  return (
    <div className="relative h-14 w-14 shrink-0 sm:h-[78px] sm:w-[78px]" style={style}>
      <Image src="/star-cutout.png" alt="" fill sizes="78px" className="object-contain" />
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
    <section id="trust" ref={ref} aria-label="Why customers trust us" className="border-b-[3px] border-ink bg-ink">
      <Container className="grid grid-cols-2 lg:grid-cols-4">
        {GAUGES.map((g, i) => (
          <div
            key={g.title}
            className={`flex items-start gap-2 border-[#2c2626] px-3 py-4 sm:gap-4 sm:px-5 sm:py-6 ${
              i % 2 === 0 ? "border-r-2" : "border-r-0 lg:border-r-2"
            } ${i < 2 ? "border-b-2 lg:border-b-0" : ""} ${i === GAUGES.length - 1 ? "lg:border-r-0" : ""}`}
          >
            <GaugeIcon icon={g.icon} color={g.color} active={active} />
            <div>
              <h3 className="font-display text-sm font-extrabold tracking-wide text-white sm:text-lg lg:text-xl">{g.title}</h3>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-amber sm:text-xs">{g.subtitle}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
