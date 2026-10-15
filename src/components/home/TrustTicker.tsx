import { Icon } from "@/components/ui/Icon";

const items = [
  { icon: "truck" as const, title: "Free Towing", subtitle: "Anywhere in the GTA" },
  { icon: "cash" as const, title: "Cash On The Spot", subtitle: "Paid at pickup" },
  { icon: "recycle" as const, title: "12,000+ Vehicles", subtitle: "Recycled" },
  { icon: "star" as const, title: "4.9★ Average", subtitle: "Customer rating" },
];

const cities = ["Toronto", "Mississauga", "Brampton", "Vaughan", "Markham", "Scarborough", "North York", "Etobicoke"];

function Group() {
  return (
    <ul className="flex flex-none items-center">
      {items.map((item) => (
        <li key={item.title} className="flex items-center gap-2">
          <span className="flex items-center gap-2.5 whitespace-nowrap px-4 py-2.5 text-[15.5px] font-extrabold uppercase tracking-wide">
            <Icon name={item.icon} className="h-4 w-4 shrink-0" />
            <strong className="font-display text-base font-normal tracking-wide">{item.title}</strong>
            <span className="text-xs font-bold opacity-75">{item.subtitle}</span>
          </span>
          <i aria-hidden="true" className="text-lg text-red">
            ✦
          </i>
        </li>
      ))}
      {cities.map((city, i) => (
        <li key={city} className="flex items-center gap-2">
          <span className="whitespace-nowrap px-0 font-display text-base font-normal tracking-wide opacity-90">{city}</span>
          <i aria-hidden="true" className="text-lg text-red">
            {i === cities.length - 1 ? "✦" : "●"}
          </i>
        </li>
      ))}
    </ul>
  );
}

export function TrustTicker() {
  return (
    <div
      aria-label="Why customers choose us"
      className="relative z-20 mt-0 overflow-hidden bg-amber text-ink shadow-[0_20px_60px_-20px_rgba(242,169,59,0.5)]"
      style={{ transform: "rotate(-1.2deg) scale(1.02)" }}
    >
      <div className="flex w-max" style={{ animation: "marquee 48s linear infinite" }}>
        <Group />
        <Group />
      </div>
    </div>
  );
}
