"use client";

const PINS: Record<string, [number, number]> = {
  Toronto: [310, 212],
  Mississauga: [180, 240],
  Brampton: [120, 174],
  Vaughan: [245, 122],
  Markham: [330, 113],
  "Richmond Hill": [282, 98],
  "North York": [295, 160],
  Etobicoke: [218, 214],
  Scarborough: [385, 155],
  Oakville: [150, 300],
  Burlington: [96, 352],
  Ajax: [488, 112],
  Pickering: [452, 130],
  Whitby: [528, 98],
  Oshawa: [566, 84],
  Aurora: [262, 50],
  Newmarket: [272, 24],
  Bolton: [136, 104],
  "Downtown Toronto": [320, 224],
};

const LEFT = new Set(["Brampton", "Bolton", "Burlington", "Oakville", "Mississauga", "Etobicoke", "Vaughan", "Oshawa", "Toronto"]);

// Voronoi tessellation of the pins above, clipped to the 0..600 x 0..400 viewBox,
// so every city gets its own bordered region (cells meet with no gaps or overlaps).
const CELLS: Record<string, string> = {
  Toronto: "265,259.7 263.7,197.2 341,174.9 351,188",
  Mississauga: "110.6,242.8 171.8,187.2 259.5,315.5 259.8,317.4",
  Brampton: "184.1,151.8 185.2,154.4 171.8,187.2 110.6,242.8 55.5,255.9 0,248.4 0,109.7",
  Vaughan: "246.9,84.4 277.3,131.3 246.2,172.3 185.2,154.4 184.1,151.8 197.2,72.7",
  Markham: "406.1,0 407.9,0 396.3,83.1 340,157 299.4,126.7 321.8,54.9",
  "Richmond Hill": "321.8,54.9 299.4,126.7 277.3,131.3 246.9,84.4 315.8,55.8",
  "North York": "341,174.9 263.7,197.2 246.2,172.3 277.3,131.3 299.4,126.7 340,157",
  Etobicoke: "263.7,197.2 265,259.7 259.5,315.5 171.8,187.2 185.2,154.4 246.2,172.3",
  Scarborough: "351,188 341,174.9 340,157 396.3,83.1 481.3,310.8",
  Oakville: "296.7,400 194.3,400 55.5,255.9 110.6,242.8 259.8,317.4",
  Burlington: "194.3,400 0,400 0,248.4 55.5,255.9",
  Ajax: "409.5,0 471.3,0 600,367.9 600,381",
  Pickering: "407.9,0 409.5,0 600,381 600,400 544.8,400 481.3,310.8 396.3,83.1",
  Whitby: "471.2,0 513.5,0 600,234.9 600,367.9",
  Oshawa: "513.5,0 600,0 600,234.9",
  Aurora: "166,0 170.8,0 315.8,55.8 246.9,84.4 197.2,72.7",
  Newmarket: "170.8,0 406.1,0 321.8,54.9 315.8,55.8",
  Bolton: "0,0 166,0 197.2,72.7 184.1,151.8 0,109.7",
  "Downtown Toronto": "544.8,400 296.7,400 259.8,317.4 259.5,315.5 265,259.7 351,188 481.3,310.8",
};

export const cityNames = Object.keys(PINS);

export function ServiceAreaMap({ hovered, onHoverCity }: { hovered: string | null; onHoverCity: (city: string | null) => void }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute left-3.5 top-3 z-[2] font-mono text-xs tracking-[0.1em] text-amber"
      >
        GTA DISPATCH · <b className="text-white">UNITS ACTIVE</b>
      </div>
      <svg
        viewBox="0 0 600 400"
        preserveAspectRatio="none"
        role="img"
        aria-label="Stylized dispatch map of Scrap Cars 4 Cash service cities across the GTA"
        className="relative block h-full w-full"
      >
        <defs>
          <linearGradient id="lake" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0D3F82" />
            <stop offset="1" stopColor="#071F40" />
          </linearGradient>
          <radialGradient id="sw" cx="0" cy="0" r="1">
            <stop offset="0" stopColor="#F2A93B" stopOpacity="0.35" />
            <stop offset="1" stopColor="#F2A93B" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g>
          {Object.entries(CELLS).map(([city, points], i) => {
            const hot = hovered === city;
            return (
              <polygon
                key={city}
                points={points}
                className="cursor-pointer transition-colors duration-150"
                fill={hot ? "rgba(242,169,59,0.16)" : i % 2 === 0 ? "rgba(255,255,255,0.028)" : "rgba(255,255,255,0.055)"}
                stroke={hot ? "var(--color-amber)" : "#4a7ab8"}
                strokeWidth={hot ? 1.5 : 1}
                strokeOpacity={hot ? 0.9 : 0.4}
                onMouseEnter={() => onHoverCity(city)}
                onMouseLeave={() => onHoverCity(null)}
              />
            );
          })}
        </g>

        <path
          d="M60 400 L100 378 L160 326 L200 268 L255 236 L310 230 L360 214 L405 196 L455 158 L492 142 L532 132 L600 118 L600 400 Z"
          fill="url(#lake)"
          stroke="#F2A93B"
          strokeWidth="2"
          strokeDasharray="6 5"
        />
        <text x="430" y="248" fontFamily="var(--font-mono)" fontSize="12" fill="#6f8ec2" letterSpacing="3">
          LAKE ONTARIO
        </text>

        <g fill="none" stroke="#3b6bb0" strokeWidth="3" opacity="0.7">
          <path d="M100 210 C180 190 260 165 300 160 S440 150 600 112" />
          <path d="M120 300 C180 270 240 245 310 228" />
          <path d="M250 400 L262 260 L265 0" />
          <path d="M330 0 L322 160" />
        </g>
        <g fill="none" stroke="#5a86c7" strokeWidth="1" strokeDasharray="3 4" opacity="0.6">
          <path d="M120 174 L225 165 L295 160" />
          <path d="M225 165 L245 122 L270 22" />
          <path d="M225 165 L180 240 L100 362" />
        </g>

        <g style={{ transformOrigin: "225px 165px", animation: "spin-slow 6s linear infinite" }}>
          <path d="M225 165 L225 15 A150 150 0 0 1 355 90 Z" fill="url(#sw)" />
        </g>
        <circle cx="225" cy="165" r="150" fill="none" stroke="#F2A93B" strokeOpacity="0.18" />
        <circle cx="225" cy="165" r="90" fill="none" stroke="#F2A93B" strokeOpacity="0.18" />

        <g>
          {Object.entries(PINS).map(([city, [x, y]]) => {
            const hot = hovered === city;
            return (
              <g
                key={city}
                className="cursor-pointer"
                onMouseEnter={() => onHoverCity(city)}
                onMouseLeave={() => onHoverCity(null)}
              >
                <circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill="none"
                  stroke="var(--color-amber)"
                  strokeWidth="1.5"
                  style={hot ? { animation: "ping 1.6s ease-out infinite", transformBox: "fill-box", transformOrigin: "center" } : { opacity: 0 }}
                />
                <circle cx={x} cy={y} r="5" fill={hot ? "var(--color-red)" : "var(--color-amber)"} stroke="var(--color-ink)" strokeWidth="2" />
              </g>
            );
          })}
          {Object.entries(PINS).map(([city, [x, y]]) => (
            <text
              key={city}
              x={LEFT.has(city) ? x - 9 : x + 9}
              y={y + 3.5}
              textAnchor={LEFT.has(city) ? "end" : "start"}
              fontFamily="var(--font-mono)"
              fontSize="12"
              fill="#dfe7f5"
              letterSpacing="0.5"
              style={{ textTransform: "uppercase" }}
            >
              {city}
            </text>
          ))}
        </g>

        {/* HQ */}
        <g>
          <circle cx="225" cy="165" r="9" fill="none" stroke="var(--color-red)" strokeWidth="2" style={{ animation: "hq-ping 2.6s ease-out infinite", transformBox: "fill-box", transformOrigin: "center" }} />
          <circle cx="225" cy="165" r="9" fill="none" stroke="var(--color-red)" strokeWidth="2" style={{ animation: "hq-ping 2.6s ease-out .9s infinite", transformBox: "fill-box", transformOrigin: "center" }} />
          <rect x="216" y="156" width="18" height="18" fill="var(--color-red)" stroke="var(--color-ink)" strokeWidth="2.5" transform="rotate(45 225 165)" />
          <text x="238" y="186" fontFamily="var(--font-mono)" fontSize="12" fill="var(--color-amber)" fontWeight={700} letterSpacing="0.5">
            HQ · 66 MILVAN DR
          </text>
        </g>
      </svg>

      <div
        aria-hidden="true"
        className="absolute bottom-3 left-3 z-[2] flex flex-wrap items-center gap-3.5 border border-[#2a3a56] bg-[#0a1a30]/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-[#9fb3d6] backdrop-blur-sm"
      >
        <span className="inline-flex items-center gap-1.5">
          <i className="inline-block h-2 w-2 rounded-full bg-amber" />
          Pickup Zone
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="inline-block h-2.5 w-2.5 rotate-45 bg-red" />
          HQ
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="inline-block h-[2px] w-3.5 bg-[#5a86c7]" />
          Route
        </span>
      </div>
    </>
  );
}
