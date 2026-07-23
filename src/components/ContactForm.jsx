import Button from './Button'

const FIELD_CLASSES =
  'mt-2 block w-full rounded-control border border-line bg-paper px-4 py-2.5 text-ink placeholder:text-ink-muted'

function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault()
    // UI only for now — no backend/email service is connected yet.
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Your name"
          className={`${FIELD_CLASSES} min-h-11`}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className={`${FIELD_CLASSES} min-h-11`}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell me a bit about the role or project..."
          className={FIELD_CLASSES}
        />
      </div>

      <Button type="submit" variant="primary" size="lg">
        Send message
      </Button>
    </form>
  )
}

export default ContactForm
