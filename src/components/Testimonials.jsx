import { useState } from 'react'
import { Star, ArrowRight } from './Icons'

const REVIEWS = [
  {
    name: 'Rono',
    text: 'Daniel is quick, honest, and good at what he does. Came out the same day and fixed up my A/C system. Professional and trustworthy, and his prices are reasonable.',
  },
  {
    name: 'Tricia Arroyo',
    text: 'Sunday evening in the dead of the heat, our A/C went out. Our warranty company couldn’t come for four days. The A/C Doctor got us taken care of fast.',
  },
  {
    name: 'Cameron Cacananta',
    text: 'They did a full HVAC system replacement and did an excellent job. Went through our options thoroughly and was honest about all the positives and negatives.',
  },
  {
    name: 'Mar M',
    text: 'Highly knowledgeable and will explain everything to you. He’s legit, not a scammer who just takes your money. Very professional. Look no further.',
  },
  {
    name: 'Zee Truss',
    text: 'The technician was on time, friendly, and fixed my AC quickly. Pricing was fair with no hidden fees. I’d definitely recommend The A/C Doctor.',
  },
  {
    name: 'Kevin Wendland',
    text: 'Daniel gave an estimate in line with what I researched. Communication was excellent, and he actually honored the quote when I came back later.',
  },
]

function Card({ name, text }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-2xl ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex text-brand-orange" aria-label="5 out of 5 stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-brand-slate">
        "{text}"
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brandmix text-sm font-bold text-white shadow-sm">
          {name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-bold text-brand-navy">{name}</span>
          <span className="block text-xs font-medium text-brand-slate">Google Review</span>
        </span>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const pages = Math.ceil(REVIEWS.length / 2)

  const go = (dir) => setPage((p) => (p + dir + pages) % pages)

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-brand-navy py-16 text-white md:py-24"
    >
      {/* animated brand glow to lift the cards */}
      <div className="pointer-events-none absolute inset-0 animate-gradient bg-navy-glow [background-size:200%_200%]" />
      <div className="section relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-white shadow-sm ring-1 ring-white/20 backdrop-blur">
            <span className="flex text-brand-orange">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4" />
              ))}
            </span>
            Rated 5 stars on Google
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Words From <span className="gradient-text-warm">Real Customers</span>
          </h2>
        </div>

        {/* Mobile: horizontal snap scroll */}
        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {REVIEWS.map((r) => (
            <div key={r.name} className="w-[85%] shrink-0 snap-center">
              <Card {...r} />
            </div>
          ))}
        </div>

        {/* Desktop: 2-up carousel */}
        <div className="mt-10 hidden md:block">
          <div className="grid grid-cols-2 gap-6">
            {REVIEWS.slice(page * 2, page * 2 + 2).map((r) => (
              <div key={r.name} className="animate-fadeup">
                <Card {...r} />
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/25 text-white transition-colors hover:border-brand-orange hover:bg-brand-orange hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange/40"
              aria-label="Previous reviews"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>

            <div className="flex gap-2">
              {[...Array(pages)].map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === page ? 'w-7 bg-brand-orange' : 'w-2.5 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to reviews page ${i + 1}`}
                  aria-current={i === page}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/25 text-white transition-colors hover:border-brand-orange hover:bg-brand-orange hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange/40"
              aria-label="Next reviews"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
