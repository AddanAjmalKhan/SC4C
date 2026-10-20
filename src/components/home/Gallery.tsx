"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/data/business";
import { galleryImages } from "@/data/testimonials";

const SPANS: Record<number, string> = {
  0: "sm:col-span-2 sm:row-span-2",
  3: "sm:row-span-2",
  5: "sm:col-span-2",
  8: "sm:col-span-2 sm:row-span-2",
};

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-navy py-16 text-white sm:py-20 lg:py-28">
      <Container>
        <Reveal as="div" className="mb-10">
          <p className="font-display text-sm font-bold uppercase tracking-wide text-amber">08 / Gallery</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Our Work</h2>
        </Reveal>

        <div className="grid auto-rows-[160px] grid-cols-2 gap-3.5 sm:auto-rows-[220px] sm:grid-cols-4 sm:grid-flow-dense">
          {galleryImages.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) as 0 | 1 | 2 | 3}
              className={`group relative overflow-hidden border-2 border-ink/20 bg-white/5 ${SPANS[i] ?? ""}`}
            >
              <button
                type="button"
                aria-label={`View larger: ${img.alt}`}
                onClick={() => setOpen(i)}
                className="absolute inset-0 h-full w-full cursor-zoom-in"
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                />
                <span className="absolute right-3 top-3 flex h-9 w-9 -translate-y-1 items-center justify-center border border-white/30 bg-black/70 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Icon name="arrow" className="h-4 w-4 rotate-45" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={1}
          className="mt-8 flex flex-wrap items-center justify-between gap-5 border border-white/10 bg-[linear-gradient(90deg,rgba(189,20,30,.18),rgba(0,0,0,0))] px-6 py-5 sm:px-8"
        >
          <a href={business.phoneHref} className="flex items-center gap-3 font-display text-xl font-extrabold sm:text-2xl">
            <Icon name="phone" className="h-5 w-5 shrink-0 text-amber" />
            {business.phone}
          </a>
          <div className="flex gap-2.5">
            <a
              href={business.phoneHref}
              className="inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full bg-red px-5 font-body text-sm font-bold text-white shadow-[0_10px_30px_-10px_rgba(189,20,30,0.8)] transition-transform hover:-translate-y-0.5"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-5 font-body text-sm font-bold text-white transition-colors hover:border-[#25D366] hover:text-[#25D366]"
            >
              <Icon name="whatsapp" className="h-4 w-4 text-[#25D366]" />
              WhatsApp
            </a>
          </div>
        </Reveal>
      </Container>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 text-white hover:bg-white/20"
          >
            <Icon name="arrow" className="h-5 w-5 rotate-[135deg]" />
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl">
            <Image src={galleryImages[open].src} alt={galleryImages[open].alt} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
