"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/data/business";
import { faqColumns } from "@/data/testimonials";

function FaqItem({ question, answer, index, defaultOpen }: { question: string; answer: string; index: number; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div className="relative mt-[18px] first:mt-3.5">
      <span className="absolute -top-6 left-0 border-2 border-b-0 border-ink bg-[#E9DFC8] px-4 pt-1 font-mono text-xs font-bold tracking-wide text-ink" style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 100%, 0 100%)" }}>
        TAB {String(index + 1).padStart(2, "0")}
      </span>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`relative flex w-full items-center justify-between gap-4 border-2 px-5 py-[18px] pr-[60px] text-left font-display text-[19px] font-extrabold uppercase leading-[1.15] transition-colors ${
          open ? "border-ink bg-navy text-white" : "border-ink bg-[#E9DFC8] text-ink hover:bg-[#F2E6CB]"
        }`}
      >
        {question}
        <span
          className={`absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center font-mono text-xl font-bold transition-transform duration-300 ${
            open ? "rotate-45 bg-amber text-ink" : "bg-ink text-amber"
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <p
          className="border-2 border-t-0 border-ink bg-[#FFFDF6] px-5 py-5 text-[15px] text-grey"
          style={{ animation: "fade-up .35s ease" }}
        >
          {answer}
        </p>
      )}
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-[#F4F4F4] py-16 sm:py-20 lg:py-28">
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
            <h2 className="font-display uppercase leading-[1.02] tracking-wide" style={{ fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)" }}>
              Still Need Help?
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <a
              href={business.phoneHref}
              className="inline-flex h-12 items-center gap-2.5 whitespace-nowrap rounded-full bg-red px-5 font-body text-sm font-bold text-white shadow-[0_10px_30px_-10px_rgba(189,20,30,0.8)] transition-transform hover:-translate-y-0.5"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call Now
            </a>
          </Reveal>
        </div>

        <div className="grid gap-x-12 gap-y-9 lg:grid-cols-2">
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
