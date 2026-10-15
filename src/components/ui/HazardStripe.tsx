export function HazardStripe({ className = "", thin = false }: { className?: string; thin?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`${thin ? "h-[10px] border-y-2 bg-[length:24px_24px]" : "h-4 border-y-[3px] bg-[length:36px_36px]"} border-ink ${className}`}
      style={{
        backgroundImage: thin
          ? "repeating-linear-gradient(-45deg, var(--color-ink) 0 9px, var(--color-amber) 9px 18px)"
          : "repeating-linear-gradient(-45deg, var(--color-ink) 0 13px, var(--color-amber) 13px 26px)",
      }}
    />
  );
}
