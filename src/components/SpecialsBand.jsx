import { Snowflake, Gauge, Check } from './Icons'
import Reveal from './Reveal'

const OFFERS = [
  {
    icon: Snowflake,
    headline: '$250 OFF',
    sub: 'any new A/C installation',
    grad: 'bg-cool',
  },
  {
    icon: Gauge,
    headline: 'Tune-Up Special',
    sub: 'Full system $99, A/C unit only $49',
    grad: 'bg-warm',
  },
]

export default function SpecialsBand() {
  return (
    <section className="py-16 md:py-20">
      <div className="section">
        <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-6 py-10 shadow-card sm:px-10 md:py-14">
          {/* animated brand glow */}
          <div className="pointer-events-none absolute inset-0 animate-gradient bg-navy-glow [background-size:180%_180%]" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 animate-floaty rounded-full bg-brand-blue/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 animate-floaty rounded-full bg-brand-orange/20 blur-2xl [animation-delay:1.2s]" />

          <div className="relative">
            <div className="text-center">
              <span className="eyebrow text-brand-orange">Current Specials</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                Comfort That Fits Your Budget
              </h2>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {OFFERS.map(({ icon: Icon, headline, sub, grad }, i) => (
                <Reveal
                  key={headline}
                  delay={i * 120}
                  className="group flex items-center gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cardhover"
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-300 group-hover:scale-110 ${grad}`}
                  >
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <div className="text-2xl font-extrabold leading-tight text-brand-navy">
                      {headline}
                    </div>
                    <div className="text-sm font-medium text-brand-slate">{sub}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <p className="flex items-center gap-2 text-base font-semibold text-white">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-warm shadow-sm">
                  <Check className="h-4 w-4 text-white" />
                </span>
                Free diagnostic on every service call
              </p>
              <a href="#contact" className="btn-red text-base">
                Claim This Offer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
