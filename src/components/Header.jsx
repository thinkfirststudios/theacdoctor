import { useEffect, useState } from 'react'
import Logo from './Logo'
import { Phone, Menu, X } from './Icons'

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-all duration-300 ${
        scrolled ? 'border-slate-200 py-2 shadow-sm' : 'border-transparent py-3.5'
      }`}
    >
      <div className="section flex items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative text-sm font-semibold text-brand-navy transition-colors hover:text-brand-blue after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-brand-red after:transition-all hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="tel:+18775843223"
            className="flex items-center gap-1.5 text-sm font-bold text-brand-blue sm:hidden"
            aria-label="Call The A/C Doctor"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a href="#contact" className="btn-red hidden text-sm sm:inline-flex">
            Schedule Service
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-brand-navy transition-colors hover:bg-slate-100 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="section flex flex-col gap-1 pb-4 pt-2" aria-label="Mobile">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-base font-semibold text-brand-navy transition-colors hover:bg-brand-offwhite hover:text-brand-blue"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-red mt-2 w-full"
          >
            Schedule Service
          </a>
        </nav>
      </div>
    </header>
  )
}
