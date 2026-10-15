"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { business } from "@/data/business";

const MAKES = [
  "Toyota", "Honda", "Ford", "Chevrolet", "Dodge", "Hyundai", "Nissan", "Kia",
  "Mazda", "BMW", "Mercedes-Benz", "Volkswagen", "Jeep", "GMC",
];

const CONDITIONS = ["Running", "Non-Running", "Accident & Damaged", "Rusted", "Flooded"] as const;
const SLOTS = ["Same-Day", "Next-Day"] as const;

const STEP_LABELS = ["01 · Vehicle", "02 · Pickup"];
const TOTAL_STEPS = 2;

const fieldClass =
  "w-full rounded-none border-2 border-ink bg-white px-3 py-2 font-body text-[15px] font-semibold text-ink outline-none focus:border-navy";
const labelClass = "mb-1 block font-mono text-xs font-bold uppercase tracking-wide text-grey";
const selectStyle = {
  backgroundImage:
    "linear-gradient(45deg, transparent 50%, var(--color-ink) 50%), linear-gradient(135deg, var(--color-ink) 50%, transparent 50%)",
  backgroundPosition: "calc(100% - 18px) 50%, calc(100% - 12px) 50%",
  backgroundSize: "6px 6px",
  backgroundRepeat: "no-repeat",
} as const;

function buildTicketNumber() {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `SC4C-${n}`;
}

export function QuoteTicket() {
  const [step, setStep] = useState(1);
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [condition, setCondition] = useState<string>("");
  const [phone, setPhone] = useState("");
  const [slot, setSlot] = useState<string>("Same-Day");
  const [error, setError] = useState("");

  const [ticket, setTicket] = useState({ no: "SC4C-0000", today: "", years: [] as number[] });

  useEffect(() => {
    const now = new Date();
    const current = now.getFullYear();
    // Ticket number/date/years depend on Math.random()/Date, which Next.js
    // forbids during prerender — deferring to an effect is the documented fix.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTicket({
      no: buildTicketNumber(),
      today: now.toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" }),
      years: Array.from({ length: current - 1989 }, (_, i) => current - i),
    });
  }, []);
  const { no: ticketNo, today, years } = ticket;

  function goNext() {
    if (step === 1 && (!year || !make || !model || !condition)) {
      setError("Please fill in year, make, model, and condition.");
      return;
    }
    setError("");
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  }

  function goBack() {
    setError("");
    setStep((s) => Math.max(1, s - 1));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone) {
      setError("Please enter a phone number so we can reach you.");
      return;
    }
    const message = [
      `Hi! I'd like a quote for my vehicle (Ticket ${ticketNo}):`,
      `${year} ${make} ${model}`,
      `Condition: ${condition}`,
      `Pickup: ${slot}`,
      `Phone: ${phone}`,
    ].join("\n");
    window.open(`${business.whatsappHref}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  }

  return (
    <div className="relative w-full max-w-sm">
      {/* washi tape */}
      <div
        aria-hidden="true"
        className="absolute -top-[22px] left-1/2 z-10 h-[34px] w-[110px] -translate-x-1/2 bg-amber/85 shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
        style={{ transform: "translateX(-50%) rotate(-3deg)", clipPath: "polygon(4% 0, 96% 6%, 100% 100%, 0 94%)" }}
      />

      <form
        onSubmit={handleSubmit}
        aria-label="Get Quote"
        className="relative bg-[#FFFDF6] px-5 pb-5 pt-5 text-ink"
        style={{
          filter: "drop-shadow(10px 14px 0 rgba(0,0,0,0.35))",
          WebkitMask:
            "radial-gradient(circle 7px at 50% 0, #0000 98%, #000) 0 0/20px 51% repeat-x, radial-gradient(circle 7px at 50% 100%, #0000 98%, #000) 0 100%/20px 51% repeat-x",
          mask: "radial-gradient(circle 7px at 50% 0, #0000 98%, #000) 0 0/20px 51% repeat-x, radial-gradient(circle 7px at 50% 100%, #0000 98%, #000) 0 100%/20px 51% repeat-x",
        }}
      >
        {step === TOTAL_STEPS && (
          <div
            aria-hidden="true"
            className="absolute bottom-16 right-5 border-[3px] border-red px-2.5 py-0.5 font-display text-lg font-black uppercase tracking-wide text-red"
            style={{ animation: "stamp-in .5s cubic-bezier(.2,1.4,.4,1) both", transform: "rotate(-14deg)" }}
          >
            Paid at pickup
          </div>
        )}

        <div className="flex items-start justify-between gap-3 border-b-2 border-dashed border-[#b9b2a2] pb-2.5">
          <div className="font-display text-2xl font-black leading-[0.9]">
            <small className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-wide text-red">
              Free Towing · Cash On The Spot
            </small>
            Cash Ticket
          </div>
          <div className="text-right font-mono text-xs leading-[1.4] text-[#5a554b]">
            <div>TKT №</div>
            <div className="text-sm font-bold text-ink">{ticketNo}</div>
            <div>{today}</div>
          </div>
        </div>

        <div className="mt-2.5 flex justify-between font-mono text-xs font-bold uppercase tracking-wide text-[#8d8778]">
          {STEP_LABELS.map((label, i) => (
            <span key={label} className={i + 1 === step ? "text-navy" : ""}>
              {label}
            </span>
          ))}
        </div>
        <div className="mt-1.5 h-2.5 border-2 border-ink bg-[#eee9dc]">
          <div
            aria-hidden="true"
            className="h-full bg-[length:22px_22px] transition-[width] duration-400"
            style={{
              width: `${(step / TOTAL_STEPS) * 100}%`,
              backgroundImage: "repeating-linear-gradient(-45deg, var(--color-ink) 0 7px, var(--color-amber) 7px 14px)",
            }}
          />
        </div>

        {step === 1 && (
          <fieldset className="mt-3 border-0 p-0" style={{ animation: "fade-up .35s ease" }}>
            <legend className="mb-2 font-display text-lg font-extrabold uppercase">Vehicle &amp; Condition</legend>
            <div className="grid grid-cols-2 gap-2.5">
              <label className="block">
                <span className={labelClass}>Make</span>
                <input
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  list="makes"
                  placeholder="Make"
                  autoComplete="off"
                  required
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className={labelClass}>Model</span>
                <input
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="Model"
                  autoComplete="off"
                  required
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className={labelClass}>Year</span>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                  className={`${fieldClass} appearance-none`}
                  style={selectStyle}
                >
                  <option value="">Year</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className={labelClass}>Phone</span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="Phone"
                  autoComplete="tel"
                  inputMode="tel"
                  className={fieldClass}
                />
              </label>
            </div>
            <label className="mt-2.5 block">
              <span className={labelClass}>Condition</span>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                required
                className={`${fieldClass} appearance-none`}
                style={selectStyle}
              >
                <option value="">Select condition</option>
                {CONDITIONS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
            <datalist id="makes">
              {MAKES.map((m) => (
                <option key={m} value={m} />
              ))}
            </datalist>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="mt-3 border-0 p-0" style={{ animation: "fade-up .35s ease" }}>
            <legend className="mb-2 font-display text-lg font-extrabold uppercase">Book Your Pickup Time</legend>
            <label className="block">
              <span className={labelClass}>Phone</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Phone"
                autoComplete="tel"
                inputMode="tel"
                required
                className={fieldClass}
              />
            </label>
            <div className="mt-2.5 grid grid-cols-2 gap-2.5">
              {SLOTS.map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={slot === s}
                  onClick={() => setSlot(s)}
                  className={`border-2 border-ink px-3.5 py-2.5 text-center font-display text-base font-bold uppercase tracking-wide transition-colors ${
                    slot === s ? "bg-navy text-white shadow-[0_8px_20px_-6px_rgba(242,169,59,0.6)]" : "bg-white text-ink hover:bg-[#FFF3DE]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        <p role="alert" className="mt-1.5 min-h-[16px] font-mono text-xs text-red">
          {error}
        </p>

        <div className="mt-2 flex gap-2.5">
          {step > 1 && (
            <button
              type="button"
              onClick={goBack}
              className="rounded-full border-2 border-ink bg-white px-5 py-2.5 font-body text-[15px] font-bold text-ink transition-transform hover:-translate-y-0.5"
            >
              Back
            </button>
          )}
          {step < TOTAL_STEPS ? (
            <button
              type="button"
              onClick={goNext}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-navy px-5 py-2.5 font-body text-[15px] font-bold text-white shadow-[0_10px_30px_-10px_rgba(13,63,130,0.8)] transition-transform hover:-translate-y-0.5"
            >
              Next <Icon name="arrow" className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-red px-5 py-2.5 font-body text-[15px] font-bold text-white shadow-[0_10px_30px_-10px_rgba(189,20,30,0.8)] transition-transform hover:-translate-y-0.5"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Get Quote
            </button>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between gap-2 border-t-2 border-dashed border-[#b9b2a2] pt-3 font-mono text-xs text-[#6b6556]">
          <span
            aria-hidden="true"
            className="h-5 w-24 bg-[length:4px_100%] opacity-80"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--color-ink) 0 2px, transparent 2px 4px, var(--color-red) 4px 6px, transparent 6px 8px)",
            }}
          />
          <a href={business.phoneHref} className="font-bold text-ink">
            Call Now · {business.phone}
          </a>
        </div>
      </form>
    </div>
  );
}
