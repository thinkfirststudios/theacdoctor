import { MapPin } from './Icons'

const CITIES = [
  'San Bernardino',
  'Rancho Cucamonga',
  'Fontana',
  'Ontario',
  'Rialto',
  'Redlands',
  'Chino',
  'Upland',
  'Pomona',
  'Riverside',
  'Pasadena',
  'Los Angeles',
]

export default function ServiceArea() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 animate-gradient bg-navy-glow [background-size:200%_200%]" />
      <div className="section relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow text-brand-red">Service Area</span>
          <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Proudly Serving San Bernardino &amp; LA County
          </h2>
          <p className="mt-4 max-w-md text-white/80">
            From single-family homes to commercial properties, we cover San Bernardino
            County, Los Angeles County, and the surrounding areas with fast, reliable
            HVAC service.
          </p>

          <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {CITIES.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm font-medium text-white/85">
                <MapPin className="h-4 w-4 shrink-0 text-brand-blue" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Stylized map block */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-blue/15 ring-1 ring-white/10">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
                backgroundSize: '36px 36px',
              }}
            />
            {/* abstract county pins */}
            {[
              { t: '32%', l: '28%', big: true, label: 'San Bernardino' },
              { t: '58%', l: '62%' },
              { t: '46%', l: '48%' },
              { t: '68%', l: '34%' },
              { t: '38%', l: '70%' },
            ].map((p, i) => (
              <span
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: p.t, left: p.l }}
              >
                <span
                  className={`flex items-center justify-center rounded-full ${
                    p.big ? 'h-5 w-5 animate-pulsering bg-warm' : 'h-3.5 w-3.5 bg-brand-bluelight'
                  } ring-4 ring-white/20`}
                >
                  {p.big && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                </span>
                {p.big && (
                  <span className="absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-1 text-[11px] font-bold text-brand-navy shadow">
                    {p.label}
                  </span>
                )}
              </span>
            ))}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-xs font-bold text-brand-navy shadow">
              <MapPin className="h-4 w-4 text-brand-orange" />
              2 counties covered
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
