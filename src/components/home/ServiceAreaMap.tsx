const REGIONS: { name: string; x: number; y: number; w: number; h: number; labelX?: number; labelY?: number; small?: boolean }[] = [
  { name: "Burlington", x: 40, y: 480, w: 110, h: 80 },
  { name: "Oakville", x: 150, y: 420, w: 110, h: 100 },
  { name: "Mississauga", x: 190, y: 330, w: 170, h: 130 },
  { name: "Brampton", x: 180, y: 190, w: 160, h: 140 },
  { name: "Etobicoke", x: 330, y: 400, w: 110, h: 100, small: true },
  { name: "Vaughan", x: 340, y: 210, w: 140, h: 150 },
  { name: "North York", x: 440, y: 300, w: 120, h: 120, small: true },
  { name: "Richmond Hill", x: 440, y: 150, w: 100, h: 110, small: true },
  { name: "Markham", x: 540, y: 170, w: 140, h: 150 },
  { name: "Toronto", x: 440, y: 420, w: 100, h: 80, small: true },
  { name: "East York", x: 540, y: 390, w: 60, h: 60, small: true },
  { name: "Downtown Toronto", x: 470, y: 500, w: 90, h: 40, small: true, labelY: 4 },
  { name: "Scarborough", x: 600, y: 290, w: 200, h: 170 },
];

const DOTS: { name: string; x: number; y: number; labelPos?: "left" | "right" }[] = [
  { name: "Bolton", x: 150, y: 150 },
  { name: "Aurora", x: 480, y: 90 },
  { name: "Newmarket", x: 490, y: 40 },
  { name: "Pickering", x: 830, y: 280 },
  { name: "Ajax", x: 880, y: 270 },
  { name: "Whitby", x: 930, y: 230 },
  { name: "Oshawa", x: 980, y: 210, labelPos: "left" },
];

const HIGHWAYS: { label: string; d: string; lx: number; ly: number; rotate?: number }[] = [
  { label: "401", d: "M60 440 L950 400", lx: 130, ly: 455 },
  { label: "400", d: "M415 40 L415 440", lx: 430, ly: 150, rotate: -90 },
  { label: "404", d: "M505 60 L505 420", lx: 520, ly: 100, rotate: -90 },
  { label: "427", d: "M405 440 L370 600", lx: 395, ly: 530, rotate: -74 },
  { label: "QEW", d: "M95 560 L345 455", lx: 140, ly: 580, rotate: -18 },
];

export function ServiceAreaMap() {
  return (
    <svg viewBox="0 0 1040 660" className="h-full w-full" role="img" aria-label="Stylized map of Scrap Cars 4 Cash service areas across the GTA">
      <defs>
        <radialGradient id="map-sw" cx="0" cy="0" r="1" gradientTransform="translate(520 330) scale(520)">
          <stop offset="0" stopColor="var(--color-amber)" stopOpacity="0.08" />
          <stop offset="1" stopColor="var(--color-amber)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="1040" height="660" fill="url(#map-sw)" />

      {/* highways */}
      {HIGHWAYS.map((hwy) => (
        <g key={hwy.label}>
          <path d={hwy.d} fill="none" stroke="#3a4454" strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
          <text
            x={hwy.lx}
            y={hwy.ly}
            fill="#5b6778"
            fontFamily="var(--font-mono)"
            fontSize="12"
            letterSpacing="1"
            transform={hwy.rotate ? `rotate(${hwy.rotate} ${hwy.lx} ${hwy.ly})` : undefined}
          >
            {hwy.label}
          </text>
        </g>
      ))}

      {/* regions */}
      {REGIONS.map((r) => (
        <g key={r.name}>
          <rect
            x={r.x}
            y={r.y}
            width={r.w}
            height={r.h}
            rx={10}
            fill="#2c4061"
            stroke="#5a7fb5"
            strokeWidth="1.5"
          />
          <text
            x={r.x + r.w / 2}
            y={r.y + r.h / 2 + (r.labelY ?? 0)}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#fff"
            fontFamily="var(--font-display)"
            fontSize={r.small ? 12 : 14}
            letterSpacing="0.5"
            style={{ textTransform: "uppercase" }}
          >
            {r.name.length > 14 ? (
              <>
                <tspan x={r.x + r.w / 2} dy="-0.5em">
                  {r.name.split(" ")[0]}
                </tspan>
                <tspan x={r.x + r.w / 2} dy="1.1em">
                  {r.name.split(" ").slice(1).join(" ")}
                </tspan>
              </>
            ) : (
              r.name
            )}
          </text>
        </g>
      ))}

      {/* named-no-page dots */}
      {DOTS.map((d) => (
        <g key={d.name}>
          <circle cx={d.x} cy={d.y} r="16" fill="var(--color-amber)" fillOpacity="0.18" stroke="var(--color-amber)" strokeWidth="2" strokeDasharray="4 3" />
          <circle cx={d.x} cy={d.y} r="4" fill="var(--color-amber)" />
          <text
            x={d.labelPos === "left" ? d.x - 22 : d.x}
            y={d.y - 24}
            textAnchor={d.labelPos === "left" ? "end" : "middle"}
            fill="#e8ecf2"
            fontFamily="var(--font-display)"
            fontSize="11"
            letterSpacing="0.5"
            style={{ textTransform: "uppercase" }}
          >
            {d.name}
          </text>
        </g>
      ))}

      {/* downtown marker */}
      <circle cx="515" cy="520" r="5" fill="#8fb4ff" stroke="#fff" strokeWidth="1.5" />

      <text x="230" y="600" fill="#45536b" fontFamily="var(--font-display)" fontSize="20" letterSpacing="6" transform="rotate(-6 230 600)" style={{ textTransform: "uppercase" }}>
        Lake Ontario
      </text>
    </svg>
  );
}
