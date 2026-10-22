"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { faqColumns } from "@/data/testimonials";

function FaqItem({ question, answer, index, defaultOpen }: { question: string; answer: string; index: number; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 py-[18px] text-left"
      >
        <span className="shrink-0 font-mono text-xs text-ink/35">{String(index + 1).padStart(2, "0")}</span>
        <span className={`flex-1 font-condensed text-[17px] font-bold leading-snug transition-colors ${open ? "text-navy" : "text-ink"}`}>
          {question}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-base leading-none transition-all duration-300 ${
            open ? "rotate-45 border-amber text-amber" : "border-ink/20 text-ink/45"
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="ml-9 pb-5 pr-9 text-[15px] leading-relaxed text-grey" style={{ animation: "fade-up .3s ease" }}>
          {answer}
        </p>
      )}
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-cream py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="mb-3.5 inline-flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-red">
              <span
                aria-hidden="true"
                className="h-2.5 w-[22px] border border-ink bg-[length:22px_22px]"
                style={{
                  backgroundImage: "repeating-linear-gradient(-45deg, var(--color-ink) 0 7px, var(--color-amber) 7px 14px)",
                }}
              />
              FAQ
            </p>
            <h2 className="font-display uppercase leading-[1.02] tracking-wide text-ink" style={{ fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)" }}>
              Still Need Help?
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-x-12 lg:grid-cols-2">
          {faqColumns.map((column, colIndex) => (
            <Reveal key={colIndex} delay={colIndex as 0 | 1}>
              {column.map((item, i) => (
                <FaqItem key={item.question} {...item} index={colIndex * column.length + i} defaultOpen={colIndex === 0 && i === 0} />
              ))}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
