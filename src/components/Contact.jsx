import { useState } from 'react'
import { Phone, Mail, Clock, Shield, Check } from './Icons'

const DETAILS = [
  {
    icon: Phone,
    label: 'Call or text',
    value: '(877) 584-3223',
    sub: '(877) 5-THE-ACDR',
    href: 'tel:+18775843223',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'Daniel@theacdoc.com',
    href: 'mailto:Daniel@theacdoc.com',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Monday to Saturday',
    sub: '9:00 AM to 5:00 PM',
  },
  {
    icon: Shield,
    label: 'Licensed & insured',
    value: 'CA License #1124257',
  },
]

const INQUIRIES = ['Repair', 'Installation', 'Maintenance', 'Other']

const EMPTY = {
  name: '',
  phone: '',
  email: '',
  message: '',
  inquiry: 'Repair',
  newCustomer: false,
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [key]: val }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (!form.name.trim()) er.name = 'Please enter your name'
    if (!form.phone.trim()) er.phone = 'Please enter a phone number'
    else if (!/[\d().+\-\s]{7,}/.test(form.phone)) er.phone = 'Enter a valid phone number'
    if (!form.email.trim()) er.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'Enter a valid email'
    if (!form.message.trim()) er.message = 'Tell us how we can help'
    return er
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const er = validate()
    if (Object.keys(er).length) {
      setErrors(er)
      return
    }
    // Stubbed submit. Real send wired up later.
    setSent(true)
  }

  const fieldCls = (key) =>
    `w-full rounded-lg border bg-white px-4 py-3 text-brand-navy placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-4 focus:ring-brand-blue/20 ${
      errors[key] ? 'border-brand-red focus:border-brand-red' : 'border-slate-300 focus:border-brand-blue'
    }`

  return (
    <section id="contact" className="bg-brand-offwhite py-16 md:py-24">
      <div className="section grid gap-10 lg:grid-cols-5 lg:gap-12">
        {/* Left: details */}
        <div className="lg:col-span-2">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Book Your <span className="text-brand-orange">Free Diagnostic</span>
          </h2>
          <p className="mt-4 text-lg text-brand-slate">
            Tell us what is going on and Daniel will reach out to get your comfort
            back, fast. No hidden fees, ever.
          </p>

          <div className="mt-8 space-y-4">
            {DETAILS.map(({ icon: Icon, label, value, sub, href }) => {
              const inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cool text-white shadow-sm transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-brand-slate">
                      {label}
                    </span>
                    <span className="block text-base font-bold text-brand-navy">{value}</span>
                    {sub && <span className="block text-sm text-brand-slate">{sub}</span>}
                  </span>
                </>
              )
              return href ? (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={label}
                  className="group flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100"
                >
                  {inner}
                </div>
              )
            })}
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm font-bold text-brand-navy">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-warm shadow-sm">
              <Check className="h-4 w-4 text-white" />
            </span>
            Free diagnostic on every call
          </p>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100 sm:p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <span className="flex h-16 w-16 animate-pulsering items-center justify-center rounded-full bg-warm shadow-warm">
                  <Check className="h-8 w-8 text-white" />
                </span>
                <h3 className="mt-5 text-2xl font-extrabold text-brand-navy">
                  Thanks, Daniel will reach out shortly
                </h3>
                <p className="mt-2 max-w-sm text-brand-slate">
                  We received your request and will call you back during business hours.
                  Need help right now? Call us anytime.
                </p>
                <a href="tel:+18775843223" className="btn-red mt-6">
                  <Phone className="h-5 w-5" />
                  Call (877) 584-3223
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setForm(EMPTY)
                    setSent(false)
                  }}
                  className="mt-4 text-sm font-semibold text-brand-blue hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-navy">
                      Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={update('name')}
                      className={fieldCls('name')}
                      placeholder="Your full name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-err' : undefined}
                    />
                    {errors.name && (
                      <p id="name-err" className="mt-1 text-sm font-medium text-brand-red">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-brand-navy">
                      Phone <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      className={fieldCls('phone')}
                      placeholder="(909) 555-0123"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-err' : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-err" className="mt-1 text-sm font-medium text-brand-red">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-navy">
                    Email <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={update('email')}
                    className={fieldCls('email')}
                    placeholder="you@email.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-err' : undefined}
                  />
                  {errors.email && (
                    <p id="email-err" className="mt-1 text-sm font-medium text-brand-red">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="inquiry" className="mb-1.5 block text-sm font-semibold text-brand-navy">
                    Inquiry about
                  </label>
                  <select
                    id="inquiry"
                    value={form.inquiry}
                    onChange={update('inquiry')}
                    className={fieldCls('inquiry')}
                  >
                    {INQUIRIES.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-navy">
                    How can we help? <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    className={`${fieldCls('message')} resize-none`}
                    placeholder="Tell us what is going on with your system"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-err' : undefined}
                  />
                  {errors.message && (
                    <p id="message-err" className="mt-1 text-sm font-medium text-brand-red">
                      {errors.message}
                    </p>
                  )}
                </div>

                <label className="flex cursor-pointer items-center gap-3 rounded-lg bg-brand-offwhite p-3.5">
                  <input
                    type="checkbox"
                    checked={form.newCustomer}
                    onChange={update('newCustomer')}
                    className="h-5 w-5 rounded border-slate-300 text-brand-blue focus:ring-brand-blue/30"
                  />
                  <span className="text-sm font-semibold text-brand-navy">
                    I am a new customer
                  </span>
                </label>

                <button type="submit" className="btn-red w-full text-base">
                  Request My Free Quote
                </button>
                <p className="text-center text-xs text-brand-slate">
                  By submitting, you agree to be contacted about your request. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
