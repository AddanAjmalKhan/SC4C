import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "navy" | "ghost" | "white" | "amber" | "whatsapp";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-red text-white shadow-[0_10px_30px_-10px_rgba(189,20,30,0.8)] hover:bg-red-dark hover:shadow-[0_16px_40px_-10px_rgba(222,29,41,0.9)]",
  navy: "bg-navy text-white shadow-[0_10px_30px_-10px_rgba(13,63,130,0.8)] hover:bg-navy-dark hover:shadow-[0_16px_40px_-10px_rgba(13,63,130,0.9)]",
  ghost: "border border-white/25 bg-white/5 text-white hover:border-amber hover:text-amber",
  white: "bg-white text-ink shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.6)]",
  amber: "bg-amber text-ink shadow-[0_10px_30px_-10px_rgba(242,169,59,0.7)] hover:bg-[#ffbb52] hover:shadow-[0_16px_40px_-10px_rgba(242,169,59,0.8)]",
  whatsapp: "bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.8)] hover:shadow-[0_16px_40px_-10px_rgba(37,211,102,0.9)]",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`inline-flex h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-5 font-body text-[14.5px] font-bold transition-[transform,box-shadow,background,color,border-color] duration-200 hover:-translate-y-0.5 ${VARIANT_CLASSES[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
