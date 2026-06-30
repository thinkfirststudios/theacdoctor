import { ArrowRight } from './Icons'
import Reveal from './Reveal'
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
    <section
      id="services"
      className="bg-gradient-to-br from-brand-bluelight via-brand-blue to-[#0a4f88] py-16 md:py-24"
    >
      <div className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-brand-orangelight">What We Do</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            The Right Prescription for Your{' '}
            <span className="text-brand-orange">Home's Comfort</span>
          </h2>
          <p className="mt-4 text-lg text-white/85">
            Residential and commercial HVAC, diagnosed and fixed by a pro who
            stands behind the work.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ art: Art, title, copy }, i) => (
            <Reveal
              as="article"
              key={title}
              delay={(i % 3) * 110}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cardhover"
            >
              {/* gradient top accent reveals on hover */}
              <span className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1 scale-x-0 bg-brandmix transition-transform duration-300 group-hover:scale-x-100" />
              <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-offwhite to-[#e7eef7] p-8">
                {/* shimmer sweep on hover */}
                <span className="pointer-events-none absolute -inset-x-1/3 inset-y-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:animate-shimmer group-hover:opacity-100" />
                <Art className="relative h-28 w-auto text-brand-blue transition-all duration-300 group-hover:scale-110 group-hover:text-brand-orange" />
              </div>
              <div className="flex flex-1 flex-col border-t border-slate-100 p-6">
                <h3 className="text-lg font-bold text-brand-navy transition-colors group-hover:text-brand-blue">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-slate">{copy}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-red transition-all hover:gap-2.5 hover:text-brand-orange"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
