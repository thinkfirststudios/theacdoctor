import { Phone, Check, Star, Snowflake } from './Icons'
import logo from '../assets/logo.avif'

const TRUST = ['Same-day service', 'Licensed CA #1124257', '5-star rated']

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-blue to-brand-orange"
    >
      {/* animated accents */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 animate-floaty rounded-full bg-brand-bluelight/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 animate-floaty rounded-full bg-brand-orange/30 blur-3xl [animation-delay:1.5s]" />
      <div className="pointer-events-none absolute right-1/3 top-1/4 h-44 w-44 animate-floaty rounded-full bg-white/10 blur-3xl [animation-delay:0.8s]" />

      <div className="section relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
        <div className="animate-fadeup">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-bold uppercase tracking-wider text-white shadow-sm ring-1 ring-white/25 backdrop-blur">
            <Snowflake className="h-4 w-4 animate-spinslow text-brand-orangelight" />
            Home of the Free Diagnostic
          </span>

          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Heating &amp; A/C Service
            <span className="block text-brand-orangelight">You Can Actually Trust</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
            Free estimates, easy pay plans, and honest pricing with no hidden fees.
            Repair, maintenance, and installation across San Bernardino and LA County.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-red text-base">
              Get a Free Quote
            </a>
            <a href="tel:+18775843223" className="btn-outline text-base">
              <Phone className="h-5 w-5" />
              Call (877) 584-3223
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-white">
            {TRUST.map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-warm shadow-sm">
                  <Check className="h-3.5 w-3.5 text-white" />
                </span>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative animate-fadeup [animation-delay:120ms]">
          {/* brand backdrop for the logo illustration */}
          <div className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-white via-brand-offwhite to-[#eaf2fb] shadow-card ring-1 ring-slate-100">
            {/* rotating conic glow + soft blobs */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-[88%] w-[88%] animate-spinslow rounded-full bg-[conic-gradient(from_0deg,rgba(11,95,165,0.12),rgba(247,127,0,0.12),rgba(214,40,40,0.10),rgba(11,95,165,0.12))] blur-xl" />
            </div>
            <img
              src={logo}
              alt="The A/C Doctor, Heating and Air Conditioning logo"
              className="relative z-10 h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
              loading="eager"
              width="600"
              height="450"
            />
          </div>
          {/* floating rating badge */}
          <div className="absolute -bottom-5 left-5 flex animate-floaty items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-card ring-1 ring-slate-100">
            <div className="flex flex-col">
              <div className="flex text-brand-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </div>
              <span className="mt-0.5 text-xs font-semibold text-brand-navy">
                5-star rated on Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
