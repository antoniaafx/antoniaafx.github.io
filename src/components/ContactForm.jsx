import { useId, useState } from 'react'
import Button from './Button'

// Formspree is the standard way a static site (no backend) gets real form
// submissions emailed to an inbox. Sign up free at https://formspree.io,
// create a form pointed at your address, and paste its ID (the part after
// "/f/" in the URL Formspree gives you) in place of the placeholder below.
// Formspree form IDs aren't secret — they're meant to sit in client-side
// code — so there's no env-var indirection needed here, just this constant.
const FORMSPREE_FORM_ID = 'YOUR_FORM_ID'
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`
const CONTACT_EMAIL = 'antoniaafxentiou@gmail.com'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialValues = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Enter your email.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Write a short message.'
  return errors
}

// No red anywhere in this palette — deliberately not introducing one just
// for form errors. An outlined warning glyph plus darkened ink text and a
// darkened field border carries the same "something's wrong here" signal
// without a new hue, and (unlike color alone) still works for anyone who
// can't distinguish the color in the first place.
function WarningIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 shrink-0"
    >
      <path d="M8 1.5l7 12.5H1z" />
      <path d="M8 6.25v3" />
      <circle cx="8" cy="11.75" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FieldError({ id, message }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 flex items-center gap-1.5 text-sm text-ink">
      <WarningIcon />
      {message}
    </p>
  )
}

// Underline fields, not boxed ones — a page a visitor is signing/writing
// on, not a generic web form's input boxes. Thin at rest, thickening to
// a solid accent line while focused — a clear, deliberate "you're writing
// here now" state rather than a faint colour shift. The message field is
// the one exception: a multi-line field needs a visible boundary to read
// as a field at all, so it keeps a border, softened (bg-transparent
// rather than a second bg-paper box sitting inside the already-bg-paper
// panel) — a clean, minimal box, no ruled-paper lines (removed per
// explicit request) and no manual resize handle (`resize-none`), so its
// height stays exactly what `rows` sets at every screen size.
//
// Focus state is tracked in real React state (see `focusedField` below),
// not `:focus-visible` — a plain `focus-visible:border-accent` variant
// wasn't reliably showing as applied when checked live in the dev
// environment's browser pane (border-*-width changes via the same variant
// pattern did apply correctly; only the colour swap didn't), and that
// pane is already known (from earlier work this session) to sometimes
// misreport paint-only computed style for interaction-driven state rather
// than layout-affecting ones. Rather than ship a CSS-variant approach I
// couldn't fully re-verify, driving both the border colour and width from
// one JS boolean is deterministic and easy to confirm directly (the
// className itself, not just a computed paint value). The sitewide
// `:focus-visible` outline (index.css) still applies on top of this
// independently for keyboard users — this isn't a replacement for that,
// just an additional, reliable signal.
const lineFieldClasses = 'mt-2 w-full border-0 bg-transparent px-1 pb-2.5 pt-1.5 text-ink placeholder:text-ink-muted/70 transition-colors focus:outline-none'

function lineFieldBorder(hasError, isFocused) {
  if (hasError) return 'border-b-2 border-ink'
  if (isFocused) return 'border-b-2 border-accent'
  return 'border-b-[1.5px] border-line'
}

function messageFieldBorder(hasError, isFocused) {
  if (hasError) return 'border-2 border-ink'
  if (isFocused) return 'border-2 border-accent'
  return 'border border-line/70'
}

// Fields, validation, submit states (idle/submitting/success/error) and a
// hidden honeypot field for basic spam filtering — everything a working
// contact form needs. The one thing this can't include is a live
// Formspree form ID, since creating that account is a step only the site
// owner can take; wired up and ready the moment that ID is dropped in.
function ContactForm() {
  const nameId = useId()
  const emailId = useId()
  const messageId = useId()
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [focusedField, setFocusedField] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev))
  }

  function handleFocus(event) {
    setFocusedField(event.target.name)
  }

  function handleBlur() {
    setFocusedField(null)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    // Honeypot: a field real visitors never see or fill in. A non-empty
    // value here means a bot filled every field it could find — silently
    // pretend it worked instead of giving that feedback any signal back.
    if (event.target.elements._gotcha.value) {
      setStatus('success')
      return
    }

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.target),
      })
      if (!response.ok) throw new Error('Form submission failed')
      setStatus('success')
      setValues(initialValues)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-panel border border-line bg-paper p-6">
        <p className="flex items-center gap-2.5 font-medium text-ink">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-5 w-5 shrink-0 text-sage-dark"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 10.5l4 4 8-9" />
          </svg>
          Message sent — thank you! I'll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-xl space-y-5">
      <input
        type="text"
        name="_gotcha"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      <input type="hidden" name="_subject" value="New message from your portfolio" />

      <div>
        <label htmlFor={nameId} className="text-caption font-medium uppercase tracking-wide text-ink-muted">
          Your name
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${nameId}-error` : undefined}
          className={`${lineFieldClasses} ${lineFieldBorder(Boolean(errors.name), focusedField === 'name')}`}
        />
        <FieldError id={`${nameId}-error`} message={errors.name} />
      </div>

      <div>
        <label htmlFor={emailId} className="text-caption font-medium uppercase tracking-wide text-ink-muted">
          Your email
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${emailId}-error` : undefined}
          className={`${lineFieldClasses} ${lineFieldBorder(Boolean(errors.email), focusedField === 'email')}`}
        />
        <FieldError id={`${emailId}-error`} message={errors.email} />
      </div>

      <div>
        <label htmlFor={messageId} className="text-caption font-medium uppercase tracking-wide text-ink-muted">
          Your message
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${messageId}-error` : undefined}
          className={`mt-2 w-full resize-none rounded-sm bg-transparent px-3 py-2.5 text-ink placeholder:text-ink-muted/70 transition-colors focus:outline-none ${messageFieldBorder(
            Boolean(errors.message),
            focusedField === 'message',
          )}`}
        />
        <FieldError id={`${messageId}-error`} message={errors.message} />
      </div>

      {status === 'error' && (
        <p role="alert" className="flex items-start gap-1.5 text-sm text-ink">
          <span className="mt-0.5">
            <WarningIcon />
          </span>
          Something went wrong sending your message. Please try again, or email me directly at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-dark underline-offset-4 hover:underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}

      <Button type="submit" variant="primary" size="md" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send it my way'}
      </Button>
    </form>
  )
}

export default ContactForm
