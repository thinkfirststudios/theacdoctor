import { ArrowRight } from './Icons'
import {
  ArtAcRepair,
  ArtFan,
  ArtHeatPump,
  ArtHeating,
  ArtToolbox,
  ArtEmergency,
} from './ServiceArt'

const SERVICES = [
  {
    art: ArtAcRepair,
    title: 'A/C Repair and Installation',
    copy: 'Repairs, replacements, and new installs. We diagnose the real problem and give you straight options, never upsell.',
  },
  {
    art: ArtFan,
    title: 'Mini-Split A/C Units',
    copy: 'Efficient, precise cooling for homes and additions. Expert install and reliable performance.',
  },
  {
    art: ArtHeatPump,
    title: 'Heat Pump Service',
    copy: 'Heating and cooling in one efficient system. Expert install, repair, and service for year-round comfort.',
  },
  {
    art: ArtHeating,
    title: 'Heating Services',
    copy: 'Furnace repair to heat pump installation. We keep your home warm through every cold snap.',
  },
  {
    art: ArtToolbox,
    title: 'Maintenance Services',
    copy: 'Routine care that boosts efficiency, prevents breakdowns, and extends the life of your system.',
  },
  {
    art: ArtEmergency,
    title: 'Emergency Repairs',
    copy: 'A/C or heat out at the worst time? We respond fast and get your comfort back.',
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
          {SERVICES.map(({ art: Art, title, copy }) => (
            <article
              key={title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-cardhover"
            >
              <div className="flex items-center justify-center bg-gradient-to-br from-brand-offwhite to-slate-100 p-8">
                <Art className="h-28 w-auto text-brand-blue transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col border-t border-slate-100 p-6">
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
