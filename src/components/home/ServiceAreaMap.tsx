"use client";

// Pin positions and municipal boundary cells below are derived from real
// GTA geography: Ontario's official "Municipal Bnd Lower And Single" open
// dataset (Land Information Ontario, under the Open Government Licence –
// Ontario), reprojected from lat/lng into this 600x400 viewBox. 15 of the
// 19 pickup zones are their own municipality and get a real boundary cell;
// Scarborough / North York / Etobicoke / Downtown Toronto sit inside the
// single amalgamated City of Toronto boundary (they stopped being separate
// municipalities in 1998), and Bolton sits inside the Town of Caledon.
const PINS: Record<string, [number, number]> = {
  Toronto: [305.4, 190.9],
  Mississauga: [224.5, 244.7],
  Brampton: [184.6, 178.2],
  Vaughan: [260.4, 128.9],
  Markham: [328.2, 120],
  "Richmond Hill": [293.3, 107.6],
  "North York": [289.9, 164.2],
  Etobicoke: [250.8, 219.3],
  Scarborough: [357.6, 157.2],
  Oakville: [209.8, 301.4],
  Burlington: [172.2, 367.7],
  Ajax: [435, 122.5],
  Pickering: [412.6, 128.3],
  Whitby: [461.2, 100.7],
  Oshawa: [488.1, 100.9],
  Aurora: [284.5, 49.8],
  Newmarket: [286.4, 25.2],
  Bolton: [194.6, 111.5],
  "Downtown Toronto": [311.3, 215.7],
};

const HQ: [number, number] = [264, 169.2]; // 66 Milvan Dr, North York (approx.)

const LEFT = new Set(["Mississauga", "Brampton", "Etobicoke", "Oakville", "Burlington", "Bolton"]);

// Per-city label nudges for the two places where real pins land close
// together (the amalgamated Toronto cluster, and the Durham strip of
// Pickering/Ajax/Whitby/Oshawa), so labels don't collide.
const LABEL_OFFSET: Record<string, { dx?: number; dy?: number }> = {
  "North York": { dy: -11 },
  Toronto: { dy: -9 },
  "Downtown Toronto": { dy: 10 },
  Pickering: { dy: -8 },
  Ajax: { dy: 11 },
  Whitby: { dy: -8 },
  Oshawa: { dy: 11 },
};

// Real municipal boundaries (lat/lng -> SVG, see note above). Only the 15
// pickup zones that are their own municipality get a cell; the rest render
// as pins only, inside their parent municipality's cell.
const CELLS: Record<string, string> = {
  Oakville:
    "286.2,351.1 230.9,295 224.9,301.5 224.4,304.1 218.6,311 217.3,314.5 213,318.3 210.4,325.3 208.8,326.5 208.4,331.1 202.3,336.5 199.6,344.3 201.4,346.3 199.5,344.5 197.4,346.1 229.1,378.6",
  Burlington:
    "168.2,316.7 165,320.8 139.9,297.2 118.1,324.9 151.6,357.7 151.2,360.2 147,365.3 143.5,365.9 133.9,375.7 142.4,384.2 143.7,383.3 144.6,384.5 142.8,385.3 148.8,386 155.5,379.3 167.7,373.4 170.3,374.7 171.8,378.3 170.4,379.6 171.3,381.1 174.9,378.8 172.9,378.3 171.8,370.3 183.5,361.2 187.4,355.6 197.4,346.1",
  Pickering:
    "426,48.6 367.6,66.5 390.8,139.6 396.2,142.5 396.3,145.8 399.7,146.1 401.1,148.6 403.3,148.6 411,140.5 417.9,140.9 417.9,143.3 418.3,142.1 420.4,142.4 418.4,143.4 421.3,143.4 421.4,141.9 428.9,138.8 424.5,124.9 421.4,126.5 419.4,120.6 417.9,121.5 415.5,113.5 418.4,111.1 415.6,102.1 414,103 412.2,97.6 439.1,89.1",
  Vaughan: "297.2,130.1 288.5,132.6 280.6,88.2 202,111.5 226.1,169.6 300.1,147.1",
  Whitby: "481.8,121.7 478.1,121.6 475,125 463.8,122.4 461,124.8 455.4,126.4 451.8,130.6 489.1,253.1 517.6,239.1",
  Ajax: "489.1,253.1 451.8,130.6 448.6,133.2 443,133.7 433.9,138.8 428.9,138.8 467.5,263.7",
  Newmarket: "299.8,21.1 299,14 269.8,23.2 273.4,45.4 302.8,36.3",
  Aurora: "309.1,63.4 307.8,54.6 304.9,49.2 302.8,36.3 273.4,45.4 278,72.9",
  Markham: "384.4,120.3 368.5,70.3 310.2,88.9 316.5,124.3 297.2,130.1 300.1,147.1",
  Toronto:
    "440.8,276.5 403.2,148.6 390.4,165.2 382.6,167.8 371.9,177 366.3,184.6 365.6,189.5 364.5,187 363.1,189.4 364.6,190.7 363,189.7 362.4,192.3 361.8,190.6 355.6,195.2 348.2,205.9 338.5,210.2 337.8,214.3 338.3,212.8 334.6,211.1 336.2,212.5 333.9,216.8 332.7,231.6 332.1,229.3 328.2,229.6 326,233.5 325.5,229.5 328,229 327.3,225.9 330.1,227.5 329.5,229.2 332.4,229 331.4,226.9 332.6,227.2 332.9,224 330.2,227.4 331,225.2 328.3,225.8 331.7,224.7 333.3,218.7 330.7,222.3 332.1,218.3 330.6,216.7 324.8,224.1 322.7,221.8 332.1,214.6 322.4,221.3 322.9,219.1 321,219 322.3,217.3 320.2,217.5 306.1,225.1 304,224.2 303.2,226.8 300.6,227.1 301.8,227.3 299.3,226 303.4,225.1 297.5,225.7 287.5,222.2 281,226.2 280.3,229.3 283.5,229 281.6,230.8 279.4,229.4 281.6,231.3 280.9,232.9 278.9,233.8 280.3,231.6 278.4,231.2 275.6,238.6 269.5,242.5 270,245.5 266.8,243.9 259.1,247 300.9,343.9",
  Oshawa: "510.6,114.9 504.3,113.9 498.8,119.2 485.9,122.8 481.8,121.7 517.6,239.1 544.3,226.1",
  "Richmond Hill": "310.2,88.9 309.1,63.4 278,72.9 288.5,132.6 316.5,124.3",
  Mississauga:
    "229.2,176.4 227.9,177.4 226.1,175.6 214.7,189.7 214.9,192.5 208.8,207.5 203,214.5 194.5,221 185,232.8 179.3,235.2 175.3,238.7 176,239.4 172,240.9 168.5,245 190.1,267.8 196.3,272.1 206.5,282.4 211.8,275.6 230.9,295 234,291.9 236.1,293.8 234.1,291.4 235.2,289 237.2,287.9 238.5,289.6 237.2,287.9 239,281.7 238.6,275.3 240.1,269.3 244.4,265.3 245.3,266 246,263.8 247.3,263.8 245.4,262 247.4,263.2 245.9,261.5 257.3,250.5 259.1,247 256.4,244.1 256.7,241.9 255,241.6 254.1,238.4 250.4,235.3 251.5,233.6 250,232.9 251.6,226.6 247.9,227.7 244.3,226.1 243.2,219.6 236.4,217.9 243.2,209.4",
  Caledon:
    "180.2,57.7 80.7,87.8 82.1,90 80.3,92.3 76.6,89.5 75.1,91.3 76.4,92.6 74.6,94.9 72.8,97.2 71.5,95.9 55.7,116 141.9,204.6 161.7,179.5 159.8,177.5 163.4,173 165.2,174.8 207.4,123.1",
  Brampton:
    "226.1,169.6 207.2,123.8 165.2,174.8 163.4,173 159.8,177.5 161.7,179.5 141.9,204.6 175.3,238.7 179.3,235.2 185,232.8 194.5,221 203,214.5 208.8,207.5 214.9,192.5 214.7,189.7 226.1,175.6 227.9,177.4 229.2,176.4",
};

// Which pins' hover should highlight which cell (pins without their own
// municipality highlight their parent's cell instead).
const PIN_TO_CELL: Record<string, string> = {
  Toronto: "Toronto",
  "North York": "Toronto",
  Etobicoke: "Toronto",
  Scarborough: "Toronto",
  "Downtown Toronto": "Toronto",
  Bolton: "Caledon",
};
function cellForPin(city: string) {
  return PIN_TO_CELL[city] ?? city;
}

export const cityNames = Object.keys(PINS);

export function ServiceAreaMap({ hovered, onHoverCity }: { hovered: string | null; onHoverCity: (city: string | null) => void }) {
  const hoveredCell = hovered ? cellForPin(hovered) : null;

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
        aria-label="Map of Scrap Cars 4 Cash service municipalities across the GTA"
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

        {/* Lake Ontario, approximated in the open water south/east of the real municipal cells */}
        <path
          d="M165,400 L165,345 L232,296 L260,330 L302,345 L345,280 L402,150 L420,145 L452,132 L482,123 L511,116 L545,128 L600,145 L600,400 Z"
          fill="url(#lake)"
          stroke="#F2A93B"
          strokeWidth="2"
          strokeDasharray="6 5"
        />
        <text x="450" y="270" fontFamily="var(--font-mono)" fontSize="12" fill="#6f8ec2" letterSpacing="3">
          LAKE ONTARIO
        </text>

        <g>
          {Object.entries(CELLS).map(([city, points], i) => {
            const hot = hoveredCell === city;
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

        <g style={{ transformOrigin: `${HQ[0]}px ${HQ[1]}px`, animation: "spin-slow 6s linear infinite" }}>
          <path
            d={`M${HQ[0]} ${HQ[1]} L${HQ[0]} ${HQ[1] - 150} A150 150 0 0 1 ${HQ[0] + 130} ${HQ[1] - 75} Z`}
            fill="url(#sw)"
          />
        </g>
        <circle cx={HQ[0]} cy={HQ[1]} r="150" fill="none" stroke="#F2A93B" strokeOpacity="0.18" />
        <circle cx={HQ[0]} cy={HQ[1]} r="90" fill="none" stroke="#F2A93B" strokeOpacity="0.18" />

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
              x={(LEFT.has(city) ? x - 9 : x + 9) + (LABEL_OFFSET[city]?.dx ?? 0)}
              y={y + 3.5 + (LABEL_OFFSET[city]?.dy ?? 0)}
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
          <circle cx={HQ[0]} cy={HQ[1]} r="9" fill="none" stroke="var(--color-red)" strokeWidth="2" style={{ animation: "hq-ping 2.6s ease-out infinite", transformBox: "fill-box", transformOrigin: "center" }} />
          <circle cx={HQ[0]} cy={HQ[1]} r="9" fill="none" stroke="var(--color-red)" strokeWidth="2" style={{ animation: "hq-ping 2.6s ease-out .9s infinite", transformBox: "fill-box", transformOrigin: "center" }} />
          <rect x={HQ[0] - 9} y={HQ[1] - 9} width="18" height="18" fill="var(--color-red)" stroke="var(--color-ink)" strokeWidth="2.5" transform={`rotate(45 ${HQ[0]} ${HQ[1]})`} />
          <text x={HQ[0] - 60} y={HQ[1] + 26} fontFamily="var(--font-mono)" fontSize="12" fill="var(--color-amber)" fontWeight={700} letterSpacing="0.5">
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
