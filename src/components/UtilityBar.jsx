import { Phone, Mail, MapPin, Shield } from './Icons'

export default function UtilityBar() {
  return (
    <div className="hidden bg-brand-navy text-white/85 md:block">
      <div className="section flex h-10 items-center justify-between text-[13px]">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-brand-blue" />
            Serving San Bernardino &amp; LA County
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5 text-brand-blue" />
            CA License #1124257
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="mailto:Daniel@theacdoc.com"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Mail className="h-3.5 w-3.5 text-brand-blue" />
            Daniel@theacdoc.com
          </a>
          <a
            href="tel:+18775843223"
            className="flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-brand-blue"
          >
            <Phone className="h-3.5 w-3.5 text-brand-blue" />
            (877) 584-3223
          </a>
        </div>
      </div>
    </div>
  )
}
