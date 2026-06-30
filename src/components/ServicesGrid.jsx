import Placeholder from './Placeholder'
import { Snowflake, Flame, Wind, Gauge, Wrench, Bolt, ArrowRight } from './Icons'

const SERVICES = [
  {
    icon: Snowflake,
    title: 'A/C Repair & Installation',
    copy: 'Repairs, replacements, and new installs. We diagnose the real problem and give you straight options, never upsell.',
    photo: 'Photo: A/C condenser unit being repaired',
  },
  {
    icon: Flame,
    title: 'Heating Services',
    copy: 'Furnace repair to heat pump installation. We keep your home warm through every cold snap.',
    photo: 'Photo: Technician inspecting a home furnace',
  },
  {
    icon: Wind,
    title: 'Mini-Split A/C Units',
    copy: 'Efficient, precise cooling for homes and additions. Expert install and reliable performance.',
    photo: 'Photo: Wall-mounted mini-split A/C unit',
  },
  {
    icon: Gauge,
    title: 'Maintenance & Tune-Ups',
    copy: 'Routine care that boosts efficiency, prevents breakdowns, and extends the life of your system.',
    photo: 'Photo: HVAC maintenance checkup in progress',
  },
  {
    icon: Wrench,
    title: 'Duct Cleaning & Repair',
    copy: 'Better airflow and cleaner air. We seal, repair, and clean your ductwork.',
    photo: 'Photo: Air duct cleaning and sealing',
  },
  {
    icon: Bolt,
    title: 'Emergency Repairs',
    copy: 'A/C or heat out at the worst time? We respond fast and get your comfort back.',
    photo: 'Photo: Emergency HVAC service call',
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-brand-offwhite py-16 md:py-24">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What We Do</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            The Right Prescription for Your Home's Comfort
          </h2>
          <p className="mt-4 text-lg text-brand-slate">
            Residential and commercial HVAC, diagnosed and fixed by a pro who
            stands behind the work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, copy, photo }) => (
            <article
              key={title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-cardhover"
            >
              <div className="relative">
                <Placeholder label={photo} ratio="aspect-[16/10]" className="rounded-none ring-0" />
                <span className="absolute -bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue text-white shadow-md ring-4 ring-white">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 pt-8">
                <h3 className="text-lg font-bold text-brand-navy">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-slate">{copy}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-red transition-all hover:gap-2.5"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
