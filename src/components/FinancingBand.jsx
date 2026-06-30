import { Check } from './Icons'
import Reveal from './Reveal'

const POINTS = [
  'Checking your options won’t impact your credit score',
  'Competitive rates and terms',
  'No prepayment penalties',
  'Fast and easy',
]

export default function FinancingBand() {
  return (
    <section className="py-16 md:py-24">
      <div className="section">
        <Reveal className="relative grid items-center gap-10 overflow-hidden rounded-3xl bg-brandmix px-7 py-12 text-white shadow-cool [background-size:180%_180%] motion-safe:animate-gradient sm:px-12 md:grid-cols-2 md:py-14">
          {/* floating accents */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 animate-floaty rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 left-1/3 h-44 w-44 animate-floaty rounded-full bg-brand-orange/30 blur-2xl [animation-delay:1.4s]" />
          <div className="relative">
            <span className="eyebrow text-white/85">Flexible Payment</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Finance Your Home Comfort Project
            </h2>
            <p className="mt-4 max-w-md text-white/90">
              Spread the cost of a repair or new system into easy monthly payments,
              with terms that work for your budget.
            </p>
            <a
              href="#contact"
              className="btn mt-7 bg-white px-7 py-3.5 text-base text-brand-blue shadow-lg hover:-translate-y-0.5 hover:bg-brand-offwhite hover:text-brand-orange"
            >
              See My Options
            </a>
          </div>

          <ul className="relative grid gap-3 sm:grid-cols-2 md:gap-4">
            {POINTS.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white">
                  <Check className="h-4 w-4 text-brand-orange" />
                </span>
                <span className="text-sm font-semibold leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
