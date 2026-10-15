"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { galleryImages } from "@/data/testimonials";

const SPANS: Record<number, string> = {
  0: "sm:col-span-2 sm:row-span-2",
  3: "sm:row-span-2",
  5: "sm:col-span-2",
  8: "sm:col-span-2 sm:row-span-2",
  10: "sm:col-span-2",
};

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="border-t border-ink/10 py-16 sm:py-20 lg:py-28">
      <Container>
        <Reveal as="div" className="mb-10">
          <p className="font-display text-sm font-bold uppercase tracking-wide text-red">08 / Gallery</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Our Work</h2>
        </Reveal>

        <div className="grid auto-rows-[160px] grid-cols-2 gap-3.5 sm:grid-cols-4 sm:auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) as 0 | 1 | 2 | 3}
              className={`group relative overflow-hidden rounded-2xl bg-paper-2 ${SPANS[i] ?? ""}`}
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
                <span className="absolute right-3 top-3 flex h-9 w-9 -translate-y-1 items-center justify-center rounded-full bg-ink/70 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Icon name="arrow" className="h-4 w-4 rotate-45" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
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
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
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
