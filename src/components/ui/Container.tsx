import type { ReactNode } from "react";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
