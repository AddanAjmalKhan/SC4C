"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { business } from "@/data/business";
import { navLinks } from "@/data/nav";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled ? "bg-[rgba(18,13,13,0.82)] shadow-[0_1px_0_rgba(255,236,220,0.09),0_20px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1360px] items-center gap-5 px-4 transition-[height] duration-300 sm:px-6 lg:px-10 ${
          scrolled ? "h-[66px]" : "h-[70px] lg:h-[84px]"
        }`}
      >
        <a
          href="#top"
          aria-label="Scrap Cars 4 Cash home"
          className="relative flex shrink-0 items-center overflow-hidden border-l-[6px] border-red bg-white py-2 pl-3 pr-5 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] transition-[padding] duration-300"
          style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 16px) 100%, 0 100%)" }}
        >
          <Image
            src={business.logoSrc}
            alt="Scrap Cars 4 Cash logo – top dollar paid"
            width={business.logoWidth}
            height={business.logoHeight}
            className={`w-auto transition-[height] duration-300 ${scrolled ? "h-9" : "h-10 lg:h-12"}`}
            priority
          />
        </a>

        <nav aria-label="Main" className="hidden min-[1180px]:flex min-[1180px]:flex-1 min-[1180px]:justify-center">
          <ul className="flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href} className="group relative shrink-0">
                <a
                  href={link.href}
                  aria-current={link.label === "Home" ? "page" : undefined}
                  className="flex items-center gap-1.5 whitespace-nowrap px-3.5 py-2.5 font-body text-[14.5px] font-semibold text-white transition-colors hover:text-amber aria-current:text-amber"
                >
                  {link.label}
                  {link.dropdown && (
                    <svg viewBox="0 0 10 10" className="h-2.5 w-2.5 shrink-0 fill-current transition-transform duration-200 group-hover:rotate-180">
                      <path d="M0 3h10L5 8z" />
                    </svg>
                  )}
                </a>
                {link.dropdown && (
                  <ul className="invisible absolute left-1/2 top-full z-10 min-w-[260px] -translate-x-1/2 translate-y-2 columns-2 gap-0 border border-white/15 bg-[rgba(26,20,20,0.97)] p-2.5 opacity-0 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {link.dropdown.map((item) => (
                      <li key={item}>
                        <a href="#services" className="block whitespace-nowrap px-3 py-2 text-sm text-white/70 hover:bg-amber/15 hover:text-amber">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3 min-[1180px]:ml-0">
          <a
            href={business.phoneHref}
            className="hidden h-12 items-center gap-2 whitespace-nowrap rounded-full bg-red px-5 font-body text-sm font-bold text-white shadow-[0_10px_30px_-10px_rgba(189,20,30,0.8)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:bg-red-dark hover:shadow-[0_16px_40px_-10px_rgba(222,29,41,0.9)] sm:inline-flex"
          >
            <Icon name="phone" className="h-4 w-4 shrink-0" />
            <span className="hidden min-[1400px]:inline">Call Us: {business.phone}</span>
            <span className="min-[1400px]:hidden">Call Us</span>
          </a>

          <span className="hidden items-center gap-2 whitespace-nowrap font-mono text-xs font-bold uppercase tracking-wide text-[#bfe9cc] min-[1500px]:inline-flex">
            <i className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#2BD46A]" style={{ animation: "pulse 1.8s infinite" }} />
            Open 24/7
          </span>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/15 bg-white/5 min-[1180px]:hidden"
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span className={`h-0.5 w-full bg-white transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-0.5 w-full bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-white transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[4px] border-y border-ink bg-[length:14px_14px]"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, var(--color-ink) 0 5px, var(--color-amber) 5px 10px)",
        }}
      />

      {open &&
        createPortal(
          <div className="fixed inset-x-0 top-0 z-[90] flex h-dvh flex-col bg-[rgba(14,10,10,0.98)] backdrop-blur-xl min-[1180px]:hidden">
          <div
            className={`flex shrink-0 items-center gap-5 px-4 sm:px-6 ${scrolled ? "h-[66px]" : "h-[70px]"}`}
          >
            <a
              href="#top"
              onClick={() => setOpen(false)}
              aria-label="Scrap Cars 4 Cash home"
              className="relative flex shrink-0 items-center overflow-hidden border-l-[6px] border-red bg-white py-2 pl-3 pr-5 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)]"
              style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 16px) 100%, 0 100%)" }}
            >
              <Image
                src={business.logoSrc}
                alt="Scrap Cars 4 Cash logo – top dollar paid"
                width={business.logoWidth}
                height={business.logoHeight}
                className="h-9 w-auto"
              />
            </a>

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="ml-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white/25 bg-white/10 text-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.6)] transition-colors hover:border-amber hover:bg-white/20 hover:text-amber"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto border-t border-white/10 px-4 py-5">
            <ul className="flex flex-col gap-1 font-body text-lg font-semibold">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-white/5 last:border-b-0">
                  {link.dropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setExpanded((v) => (v === link.label ? null : link.label))}
                        aria-expanded={expanded === link.label}
                        className="flex w-full items-center justify-between gap-2 px-3 py-3 text-left text-white/80 transition-colors hover:bg-white/10 hover:text-amber"
                      >
                        {link.label}
                        <svg
                          viewBox="0 0 10 10"
                          className={`h-2.5 w-2.5 shrink-0 fill-current transition-transform duration-200 ${
                            expanded === link.label ? "rotate-180 text-amber" : ""
                          }`}
                        >
                          <path d="M0 3h10L5 8z" />
                        </svg>
                      </button>
                      {expanded === link.label && (
                        <ul
                          className="flex flex-col bg-white/[0.04] px-3 font-mono text-sm font-normal"
                          style={{ animation: "fade-up .3s ease" }}
                        >
                          {link.dropdown.map((item) => (
                            <li key={item} className="border-b border-white/10 last:border-b-0">
                              <a
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2.5 py-3 text-white/60 transition-colors hover:text-amber"
                              >
                                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={link.label === "Home" ? "page" : undefined}
                      className="block px-3 py-3 text-white/80 transition-colors hover:bg-white/10 hover:text-amber aria-current:text-amber"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-2 px-3 font-mono text-xs font-bold uppercase tracking-wide text-[#bfe9cc]">
              <i className="h-2.5 w-2.5 rounded-full bg-[#2BD46A]" style={{ animation: "pulse 1.8s infinite" }} />
              Open 24/7
            </div>
          </nav>

          <div className="shrink-0 border-t border-white/10 p-4">
            <a
              href={business.phoneHref}
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center gap-2.5 rounded-full bg-red font-body text-base font-bold text-white shadow-[0_10px_30px_-10px_rgba(189,20,30,0.8)] transition-transform hover:-translate-y-0.5 hover:bg-red-dark"
            >
              <Icon name="phone" className="h-5 w-5" />
              Call Now · {business.phone}
            </a>
          </div>
        </div>,
          document.body,
        )}
    </header>
  );
}
