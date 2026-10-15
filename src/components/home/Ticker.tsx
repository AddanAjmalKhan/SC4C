import { business } from "@/data/business";

const ITEMS = [
  "Free Towing",
  "Cash On The Spot",
  "Same-Day Pickup",
  "Open 24/7",
  "Anywhere in the GTA",
  business.phone,
  "Toronto",
  "Mississauga",
  "Brampton",
  "Vaughan",
  "Markham",
  "Scarborough",
];

function Group() {
  return (
    <span className="inline-flex items-center py-2.5">
      {ITEMS.map((item, i) => (
        <span key={i} className="inline-flex items-center">
          {i === 0 && <i className="mr-3 h-2 w-2 rounded-full bg-[#2BD46A]" style={{ animation: "pulse 1.8s infinite" }} />}
          <b className="font-mono">{item}</b>
          <i className="mx-5 opacity-60">◆</i>
        </span>
      ))}
    </span>
  );
}

export function Ticker() {
  return (
    <div aria-hidden="true" className="overflow-hidden border-y-[3px] border-ink bg-red text-xs font-bold uppercase tracking-[0.15em] text-white">
      <div className="flex w-max" style={{ animation: "marquee 36s linear infinite" }}>
        <Group />
        <Group />
      </div>
    </div>
  );
}
