"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode, Ref } from "react";

const VARIANT_CLASSES = {
  up: "translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
  scale: "scale-95",
} as const;

const DELAY_CLASSES = ["delay-0", "delay-[80ms]", "delay-150", "delay-[240ms]", "delay-300"];

function mergeRefs<T>(...refs: (Ref<T> | undefined)[]) {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") ref(node);
      else (ref as { current: T | null }).current = node;
    });
  };
}

export const Reveal = forwardRef<HTMLElement, {
  as?: ElementType;
  variant?: keyof typeof VARIANT_CLASSES;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  children: ReactNode;
}>(function Reveal({ as: Tag = "div", variant = "up", delay = 0, className = "", children }, forwardedRef) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Element = Tag as ElementType;

  return (
    <Element
      ref={mergeRefs(ref, forwardedRef)}
      className={`transition-all duration-700 ease-out ${DELAY_CLASSES[delay]} ${
        visible ? "translate-x-0 translate-y-0 scale-100 opacity-100" : `${VARIANT_CLASSES[variant]} opacity-0`
      } ${className}`}
    >
      {children}
    </Element>
  );
});
