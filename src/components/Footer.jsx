import Logo from './Logo'
import { Phone, Mail, Clock, MapPin } from './Icons'

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES = [
  'A/C Repair & Installation',
  'Heating Services',
  'Mini-Split A/C Units',
  'Maintenance & Tune-Ups',
  'Duct Cleaning & Repair',
  'Emergency Repairs',
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white/75">
      <div className="section grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo dark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Honest, professional HVAC service across San Bernardino and LA County.
            Diagnosed and fixed by a pro who stands behind the work.
          </p>
          <p className="mt-4 text-sm font-semibold text-white/90">CA License #1124257</p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s}>
                <a href="#services" className="transition-colors hover:text-white">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="tel:+18775843223" className="flex items-start gap-2.5 transition-colors hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                <span>
                  (877) 584-3223
                  <span className="block text-xs text-white/55">(877) 5-THE-ACDR</span>
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:Daniel@theacdoc.com" className="flex items-start gap-2.5 transition-colors hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                Daniel@theacdoc.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
              <span>
                Mon to Sat
                <span className="block text-xs text-white/55">9:00 AM to 5:00 PM</span>
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
              San Bernardino &amp; LA County
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row">
          <p>© 2025 The A/C Doctor Heating and Air Conditioning</p>
          <p>
            Website by{' '}
            <span className="font-semibold text-white/80">ThinkFirst Studios</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
