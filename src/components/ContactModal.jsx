import { useEffect, useRef, useState } from 'react'

function ContactModal({ onClose, onSubmit, email }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const dialogRef = useRef(null)
  const firstFieldRef = useRef(null)
  const mountRef = useRef(Date.now())
  useEffect(() => {
    if (firstFieldRef.current) firstFieldRef.current.focus()
  }, [])
  useEffect(() => {
    function trap(e) {
      if (!dialogRef.current) return
      if (e.key === 'Tab') {
        const f = dialogRef.current.querySelectorAll(
          'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
        )
        const list = Array.from(f).filter(el => !el.disabled && el.offsetParent !== null)
        if (!list.length) return
        const first = list[0]
        const last = list[list.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', trap)
    return () => document.removeEventListener('keydown', trap)
  }, [])

  function close(e) {
    if (e) e.preventDefault()
    if (submitting) return
    onClose && onClose()
  }

  function submit(e) {
    e.preventDefault()
    if (submitting) return
    if (!firstName.trim() || !lastName.trim() || !message.trim()) return
    setSubmitting(true)
    onSubmit({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      phone: phone.trim(),
      message: message.trim(),
      email,
    })
    setTimeout(() => setSubmitting(false), 800)
  }

  function overlayClick(e) {
    if (e.target !== e.currentTarget) return
    if (Date.now() - mountRef.current < 120) return
    close()
  }

  const disabled = !firstName.trim() || !lastName.trim() || !message.trim() || submitting
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/70 p-4 backdrop-blur-md"
      role="presentation"
      onClick={overlayClick}
    >
      <div
        className="animate-in fade-in zoom-in relative w-full max-w-lg scale-100 rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        ref={dialogRef}
      >
        <div className="absolute -right-2 -top-2 h-32 w-32 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 opacity-50 blur-3xl" />

        <button
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-all hover:rotate-90 hover:bg-gray-100 hover:text-gray-900"
          aria-label="Close"
          onClick={close}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative mb-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            Let's Work Together
          </div>
          <h2 id="contact-title" className="mb-2 font-display text-3xl font-bold text-gray-900">
            Start Your Project
          </h2>
          <p className="text-gray-600">
            Enter a few details and your email client will open with everything prefilled.
          </p>
        </div>

        <form className="space-y-5" onSubmit={submit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-gray-900">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                ref={firstFieldRef}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-all focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500/10"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
                autoComplete="given-name"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-gray-900">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-all focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500/10"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                required
                autoComplete="family-name"
                placeholder="Doe"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-900">
              Phone <span className="text-xs text-gray-400">(optional)</span>
            </label>
            <input
              id="phone"
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-all focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500/10"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              autoComplete="tel"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-900">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-all focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500/10"
              rows={5}
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              placeholder="Tell me about your project..."
            />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              className="rounded-full border-2 border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
              onClick={close}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
              disabled={disabled}
            >
              <span className="relative z-10">{submitting ? 'Opening...' : 'Open Email'}</span>
              <svg
                className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactModal
