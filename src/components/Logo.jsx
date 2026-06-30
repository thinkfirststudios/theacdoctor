import { Cross } from './Icons'

// A/C Doctor wordmark with a small cross/plus mark.
export default function Logo({ dark = false }) {
  const word = dark ? 'text-white' : 'text-brand-navy'
  return (
    <a href="#home" className="group flex items-center gap-2.5" aria-label="The A/C Doctor home">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue shadow-sm transition-transform group-hover:scale-105">
        <Cross className="h-4 w-4 text-white" />
        <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-brand-red ring-2 ring-white">
          <Cross className="h-2 w-2 text-white" />
        </span>
      </span>
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
