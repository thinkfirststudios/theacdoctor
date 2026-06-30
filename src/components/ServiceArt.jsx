// Monoline service illustrations, drawn to match the supplied icon set.
// All use currentColor so they inherit the brand blue, and scale crisply.

const svg = {
  viewBox: '0 0 128 104',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

// vertical "air / heat" wiggle starting at (x, y), ~30px tall
const wave = (x, y) => `M${x} ${y} q 5 5 0 10 q -5 5 0 10 q 5 5 0 10`

// Wall-mounted A/C unit + sun  ->  A/C Repair & Installation
export function ArtAcRepair({ className }) {
  return (
    <svg {...svg} className={className} role="presentation">
      <path d={wave(46, 16)} />
      <path d={wave(58, 16)} />
      <path d={wave(70, 16)} />
      <rect x="24" y="50" width="80" height="32" rx="7" />
      <line x1="24" y1="63" x2="104" y2="63" />
      <line x1="33" y1="72" x2="45" y2="72" />
      <rect x="55" y="69" width="17" height="7" rx="2.5" />
      <circle cx="90" cy="56" r="4.5" />
      <line x1="90" y1="47" x2="90" y2="49.5" />
      <line x1="90" y1="62.5" x2="90" y2="65" />
      <line x1="81" y1="56" x2="83.5" y2="56" />
      <line x1="96.5" y1="56" x2="99" y2="56" />
    </svg>
  )
}

// Furnace / heater + heat waves  ->  Heating Services
export function ArtHeating({ className }) {
  return (
    <svg {...svg} className={className} role="presentation">
      <path d={wave(50, 12)} />
      <path d={wave(64, 12)} />
      <path d={wave(78, 12)} />
      <rect x="34" y="50" width="60" height="40" rx="8" />
      <line x1="44" y1="62" x2="84" y2="62" />
      <line x1="44" y1="70" x2="84" y2="70" />
      <line x1="44" y1="78" x2="84" y2="78" />
    </svg>
  )
}

// Fan in a ring  ->  Mini-Split A/C Units
export function ArtFan({ className }) {
  const blade = 'M0 -7 C 9 -12 10 -25 0 -29 C -10 -25 -9 -12 0 -7 Z'
  return (
    <svg {...svg} className={className} role="presentation">
      <circle cx="64" cy="52" r="34" />
      <g transform="translate(64 52)">
        <path d={blade} />
        <path d={blade} transform="rotate(120)" />
        <path d={blade} transform="rotate(240)" />
        <circle r="5" />
      </g>
    </svg>
  )
}

// Wall unit + snowflake  ->  Maintenance & Tune-Ups
export function ArtMaintenance({ className }) {
  return (
    <svg {...svg} className={className} role="presentation">
      <rect x="24" y="40" width="80" height="32" rx="7" />
      <line x1="24" y1="53" x2="104" y2="53" />
      <line x1="33" y1="62" x2="45" y2="62" />
      <rect x="53" y="59" width="17" height="7" rx="2.5" />
      {/* snowflake */}
      <g transform="translate(89 56)">
        <line x1="0" y1="-9" x2="0" y2="9" />
        <line x1="-7.8" y1="-4.5" x2="7.8" y2="4.5" />
        <line x1="-7.8" y1="4.5" x2="7.8" y2="-4.5" />
      </g>
      <path d={wave(50, 80)} />
      <path d={wave(64, 80)} />
      <path d={wave(78, 80)} />
    </svg>
  )
}

// Ribbed round duct pipe  ->  Duct Cleaning & Repair
export function ArtDuct({ className }) {
  return (
    <svg {...svg} className={className} role="presentation">
      {/* tube body */}
      <path d="M30 38h66a14 14 0 0 1 0 28H30a14 14 0 0 1 0-28Z" />
      {/* open bore on the right end */}
      <ellipse cx="96" cy="52" rx="5.5" ry="14" />
      {/* ribs */}
      <line x1="44" y1="40" x2="44" y2="64" />
      <line x1="56" y1="40" x2="56" y2="64" />
      <line x1="68" y1="40" x2="68" y2="64" />
      <line x1="80" y1="40" x2="80" y2="64" />
    </svg>
  )
}

// Outdoor condenser unit, fan + dual heat/cool  ->  Heat Pump Service
export function ArtHeatPump({ className }) {
  const blade = 'M0 -4 C 6 -7 7 -15 0 -18 C -7 -15 -6 -7 0 -4 Z'
  return (
    <svg {...svg} className={className} role="presentation">
      {/* sun (heat) + snowflake (cool) above the unit */}
      <g transform="translate(48 22)">
        <circle r="4" />
        <line x1="0" y1="-7.5" x2="0" y2="-5.5" />
        <line x1="0" y1="5.5" x2="0" y2="7.5" />
        <line x1="-7.5" y1="0" x2="-5.5" y2="0" />
        <line x1="5.5" y1="0" x2="7.5" y2="0" />
      </g>
      <g transform="translate(80 22)">
        <line x1="0" y1="-7.5" x2="0" y2="7.5" />
        <line x1="-6.5" y1="-3.75" x2="6.5" y2="3.75" />
        <line x1="-6.5" y1="3.75" x2="6.5" y2="-3.75" />
      </g>
      {/* outdoor unit */}
      <rect x="36" y="38" width="56" height="50" rx="8" />
      <line x1="44" y1="48" x2="84" y2="48" />
      {/* fan grille */}
      <circle cx="64" cy="66" r="15" />
      <g transform="translate(64 66)">
        <path d={blade} />
        <path d={blade} transform="rotate(120)" />
        <path d={blade} transform="rotate(240)" />
        <circle r="3" />
      </g>
    </svg>
  )
}

// Lightning bolt  ->  Emergency Repairs
export function ArtEmergency({ className }) {
  return (
    <svg {...svg} className={className} role="presentation">
      <path d="M74 16 L44 58 H61 L54 90 L86 46 H67 L74 16 Z" />
    </svg>
  )
}

// Toolbox + tools  ->  Maintenance Services
export function ArtToolbox({ className }) {
  return (
    <svg {...svg} className={className} role="presentation">
      <path d="M28 50h72v30a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V50Z" />
      <path d="M28 50l6-10h60l6 10" />
      <path d="M52 40v-6a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v6" />
      <rect x="56" y="50" width="16" height="9" rx="2" />
      <line x1="64" y1="59" x2="64" y2="84" />
    </svg>
  )
}
