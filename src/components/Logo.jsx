import logoMark from '../assets/logo.avif'

// A/C Doctor logo lockup: the company logo mark + wordmark.
export default function Logo({ dark = false }) {
  const word = dark ? 'text-white' : 'text-brand-navy'
  return (
    <a href="#home" className="group flex items-center gap-2.5" aria-label="The A/C Doctor home">
      <img
        src={logoMark}
        alt="The A/C Doctor logo"
        className="h-11 w-auto shrink-0 transition-transform group-hover:scale-105"
        width="1200"
        height="1362"
      />
      <span className="leading-none">
        <span className={`block font-heading text-lg font-extrabold tracking-tight ${word}`}>
          The A/C Doctor
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue">
          Heating &amp; Air Conditioning
        </span>
      </span>
    </a>
  )
}
