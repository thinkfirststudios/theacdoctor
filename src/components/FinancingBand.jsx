import { Check } from './Icons'

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
        <div className="grid items-center gap-10 rounded-3xl bg-brand-blue px-7 py-12 text-white shadow-card sm:px-12 md:grid-cols-2 md:py-14">
          <div>
            <span className="eyebrow text-white/80">Flexible Payment</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Finance Your Home Comfort Project
            </h2>
            <p className="mt-4 max-w-md text-white/85">
              Spread the cost of a repair or new system into easy monthly payments,
              with terms that work for your budget.
            </p>
            <a
              href="#contact"
              className="btn mt-7 bg-white px-7 py-3.5 text-base text-brand-blue shadow-sm hover:-translate-y-0.5 hover:bg-brand-offwhite"
            >
              See My Options
            </a>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 md:gap-4">
            {POINTS.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl bg-white/10 p-4 ring-1 ring-white/15"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white">
                  <Check className="h-4 w-4 text-brand-blue" />
                </span>
                <span className="text-sm font-semibold leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
