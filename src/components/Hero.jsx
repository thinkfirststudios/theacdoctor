import Placeholder from './Placeholder'
import { Phone, Check, Star, Snowflake } from './Icons'

const TRUST = ['Same-day service', 'Licensed CA #1124257', '5-star rated']

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-offwhite">
      {/* soft cooling accent */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-blue/5" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-brand-red/5" />

      <div className="section grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
        <div className="animate-fadeup">
          <span className="eyebrow flex items-center gap-2">
            <Snowflake className="h-4 w-4" />
            Home of the Free Diagnostic
          </span>

          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-navy sm:text-5xl lg:text-[3.4rem]">
            Heating &amp; A/C Service
            <span className="block text-brand-blue">You Can Actually Trust</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-slate">
            Free estimates, easy pay plans, and honest pricing with no hidden fees.
            Repair, maintenance, and installation across San Bernardino and LA County.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-red text-base">
              Get a Free Quote
            </a>
            <a href="tel:+18775843223" className="btn-outline-blue text-base">
              <Phone className="h-5 w-5" />
              Call (877) 584-3223
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-brand-navy">
            {TRUST.map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-red/10">
                  <Check className="h-3.5 w-3.5 text-brand-red" />
                </span>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative animate-fadeup [animation-delay:120ms]">
          <Placeholder
            label="Photo: A/C Doctor technician servicing an outdoor HVAC unit"
            ratio="aspect-[4/3]"
            className="shadow-card"
          />
          {/* floating rating badge */}
          <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-card ring-1 ring-slate-100">
            <div className="flex flex-col">
              <div className="flex text-brand-red">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </div>
              <span className="mt-0.5 text-xs font-semibold text-brand-navy">
                5-star rated on Google
              </span>
            </div>
          </div>
          {/* floating license badge */}
          <div className="absolute -right-3 top-5 hidden rounded-xl bg-brand-navy px-4 py-3 text-white shadow-card sm:block">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-brand-blue">
              Licensed &amp; Insured
            </span>
            <span className="text-sm font-bold">CA #1124257</span>
          </div>
        </div>
      </div>
    </section>
  )
}
