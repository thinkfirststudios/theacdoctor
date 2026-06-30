import { Check } from './Icons'
import whyUsImage from '../assets/whyus_image.avif'

const REASONS = [
  'Free diagnostic and free estimates on every visit',
  'Honest, upfront pricing with no hidden fees',
  'Same-day service available',
  'Easy pay plans and financing options',
  'Licensed and insured, CA License #1124257',
  'Residential and commercial',
  'Owner-operated by Daniel, who treats your home like his own',
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-16 md:py-24">
      <div className="section grid items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <img
            src={whyUsImage}
            alt="The A/C Doctor technicians servicing a rooftop air conditioning unit"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
            loading="lazy"
            width="1173"
            height="896"
          />
          <div className="absolute -left-3 bottom-3 max-w-[12.5rem] rounded-xl bg-brand-blue/95 p-3.5 text-white shadow-card backdrop-blur-sm sm:-left-4 sm:bottom-4">
            <p className="text-[13px] font-semibold leading-snug">
              "We send the technician who does the work, not a salesperson"
            </p>
            <p className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-white/80">
              Daniel, Owner
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="eyebrow">Why Us</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Why San Bernardino Homeowners Call The A/C Doctor
          </h2>

          <ul className="mt-7 space-y-3.5">
            {REASONS.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red/10">
                  <Check className="h-4 w-4 text-brand-red" />
                </span>
                <span className="text-base font-medium text-brand-navy">{r}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border-l-4 border-brand-red bg-brand-offwhite p-5">
            <p className="text-base leading-relaxed text-brand-slate">
              Most companies send a salesperson. The A/C Doctor sends Daniel, the
              technician who actually does the work and stands behind it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
