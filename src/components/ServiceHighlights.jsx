import { Wrench, Gauge, Snowflake } from './Icons'

const CARDS = [
  {
    icon: Wrench,
    title: 'Repair',
    copy: 'Fast, honest fixes done right the first time',
  },
  {
    icon: Gauge,
    title: 'Maintenance',
    copy: 'Tune-ups that prevent breakdowns and lower bills',
  },
  {
    icon: Snowflake,
    title: 'Installation',
    copy: 'New systems sized and installed to last',
  },
]

export default function ServiceHighlights() {
  return (
    <section className="relative z-10 -mt-4 md:-mt-10">
      <div className="section grid gap-5 sm:grid-cols-3">
        {CARDS.map(({ icon: Icon, title, copy }) => (
          <div
            key={title}
            className="group flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-cardhover"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-base font-bold text-brand-navy">{title}</h3>
              <p className="mt-1 text-sm leading-snug text-brand-slate">{copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
