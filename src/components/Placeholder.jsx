// Neutral image placeholder, sized for a real photo swap later.
// Renders as an accessible image (role="img" + aria-label = future alt text).
export default function Placeholder({ label, className = '', icon: Icon, ratio = 'aspect-[4/3]' }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative ${ratio} overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 ring-1 ring-slate-200 ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-400">
        {Icon && <Icon className="h-10 w-10" />}
        <span className="px-6 text-center text-xs font-medium uppercase tracking-wider">
          {label}
        </span>
      </div>
      {/* faint grid texture so it reads as a media slot */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(circle at center, black, transparent 75%)',
        }}
      />
    </div>
  )
}
