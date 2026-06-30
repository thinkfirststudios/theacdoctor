import { useEffect, useRef, useState } from 'react'

// Scroll-reveal wrapper. Fades/slides children in when they enter the viewport.
// Usage: <Reveal delay={120} className="...">...</Reveal>
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${shown ? 'in-view' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
