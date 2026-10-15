import type { ReactNode, SVGProps } from "react";

const PATHS: Record<string, ReactNode> = {
  phone: (
    <path
      fill="currentColor"
      d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"
    />
  ),
  whatsapp: (
    <path
      fill="currentColor"
      d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2s.2-1.1.2-1.2-.2-.2-.5-.3z"
    />
  ),
  mail: (
    <path
      fill="currentColor"
      d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4.2 7v.1L12 13l7.8-5.9V7z"
    />
  ),
  clock: (
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm1 5h-2v6l5 3 1-1.7-4-2.3z"
    />
  ),
  pin: (
    <path
      fill="currentColor"
      d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7zm0 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"
    />
  ),
  facebook: (
    <path
      fill="currentColor"
      d="M14 8V6c0-.8.2-1.3 1.4-1.3H17V1.2C16.7 1.1 15.6 1 14.4 1 11.8 1 10 2.6 10 5.5V8H7v3.6h3V23h4V11.6h3l.5-3.6z"
    />
  ),
  instagram: (
    <path
      fill="currentColor"
      d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.5-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4z"
    />
  ),
  star: (
    <path
      fill="currentColor"
      d="M12 2l3 6.6 7.2.7-5.4 4.9 1.6 7.1L12 17.6 5.6 21.3l1.6-7.1L1.8 9.3 9 8.6z"
    />
  ),
  arrow: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="square"
      d="M4 12h15M13 6l6 6-6 6"
    />
  ),
  left: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="square"
      d="M20 12H5M11 6l-6 6 6 6"
    />
  ),
  check: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="square"
      d="M4 12.5l5 5L20 6.5"
    />
  ),
  truck: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M1 5h13v11H1zM14 9h4l4 4v3h-8z"
      />
      <circle cx="5.5" cy="18" r="2" fill="currentColor" fillOpacity="0" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="18" r="2" fill="currentColor" fillOpacity="0" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  cash: (
    <>
      <rect x="2" y="6" width="20" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M6 9v.01M18 15v.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  recycle: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 19H4.8a1.8 1.8 0 0 1-1.6-2.7L5 13M11 19h8.2a1.8 1.8 0 0 0 1.6-2.7L19 13M14 16l-3 3 3 3M8.3 13.3 5 13l-1.2 3.1M9.3 5.4 10.4 3.6a1.8 1.8 0 0 1 3.1 0L17.3 10M14.4 10.2l2.9-.2-.3-3.2"
    />
  ),
  headset: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H4zM17 14h3v6h-3zM20 20c0 1.5-2 2-5 2"
    />
  ),
  "24h": (
    <>
      <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2" />
    </>
  ),
};

export type IconName = keyof typeof PATHS;

export function Icon({
  name,
  className,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {PATHS[name]}
    </svg>
  );
}

export function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M23 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.2a5.3 5.3 0 0 1-2.3 3.5v2.9h3.7c2.2-2 3.4-5 3.4-8.5z" />
      <path fill="#34A853" d="M12 23.5c3.1 0 5.7-1 7.6-2.8l-3.7-2.9c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.8v3A11.5 11.5 0 0 0 12 23.5z" />
      <path fill="#FBBC05" d="M5.6 14.2a6.9 6.9 0 0 1 0-4.4v-3H1.8a11.5 11.5 0 0 0 0 10.4z" />
      <path fill="#EA4335" d="M12 5.1c1.7 0 3.2.6 4.4 1.7l3.3-3.3A11.5 11.5 0 0 0 1.8 6.8l3.8 3C6.5 7.1 9 5.1 12 5.1z" />
    </svg>
  );
}

export function VehicleIcon({ name, className }: { name: "sedan" | "truck" | "van" | "crash" | "battery"; className?: string }) {
  const icons: Record<string, ReactNode> = {
    sedan: (
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
        <path d="M6 34v-7l8-2 10-10h26l12 10 10 2 2 7z" fill="#fff" />
        <path d="M26 17l-6 8h34l-8-8z" />
        <line x1="37" y1="17" x2="37" y2="25" />
      </g>
    ),
    truck: (
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
        <path d="M4 35V24h36V12h18l8 12h8v11z" fill="#fff" />
        <path d="M44 14v10h18l-6-10z" />
        <line x1="4" y1="24" x2="40" y2="24" />
      </g>
    ),
    van: (
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
        <path d="M4 36V10h50l14 12 8 3v11z" fill="#fff" />
        <path d="M54 12v12h12zM10 14h16v10H10zM30 14h18v10H30z" />
      </g>
    ),
    crash: (
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
        <path d="M6 34v-7l8-2 10-10h20l6 6 4-3 4 5 6 1-2 4 6 2v4z" fill="#fff" />
        <path d="M26 17l-6 8h20" />
      </g>
    ),
    battery: (
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
        <path d="M4 36v-7l7-2 9-9h22l10 9 9 2v7z" fill="#fff" />
      </g>
    ),
  };
  return (
    <svg viewBox="0 0 80 50" className={className} aria-hidden="true">
      {icons[name]}
      <circle cx="20" cy="36" r="6" fill="#171212" />
      <circle cx="60" cy="36" r="6" fill="#171212" />
    </svg>
  );
}
