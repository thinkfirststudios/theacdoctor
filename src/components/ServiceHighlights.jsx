import { Wrench, Gauge, Snowflake } from './Icons'
import Reveal from './Reveal'

const CARDS = [
  {
    icon: Wrench,
    title: 'Repair',
    copy: 'Fast, honest fixes done right the first time',
    grad: 'bg-warm',
  },
  {
    icon: Gauge,
    title: 'Maintenance',
    copy: 'Tune-ups that prevent breakdowns and lower bills',
    grad: 'bg-cool',
  },
  {
    icon: Snowflake,
    title: 'Installation',
    copy: 'New systems sized and installed to last',
    grad: 'bg-brandmix',
  },
]

export default function ServiceHighlights() {
  return (
    <section className="relative z-10 -mt-4 md:-mt-10">
      <div className="section grid gap-5 sm:grid-cols-3">
        {CARDS.map(({ icon: Icon, title, copy, grad }, i) => (
          <Reveal
            key={title}
            delay={i * 110}
            className="group relative flex items-start gap-4 overflow-hidden rounded-xl border border-slate-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cardhover"
          >
            {/* gradient sheen on hover */}
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1 scale-x-0 bg-warm transition-transform duration-300 group-hover:scale-x-100" />
            <span
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white shadow-sm transition-transform duration-300 group-hover:scale-110 ${grad}`}
            >
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-base font-bold text-brand-navy">{title}</h3>
              <p className="mt-1 text-sm leading-snug text-brand-slate">{copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
