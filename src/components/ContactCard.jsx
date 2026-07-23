// A single contact option — email, LinkedIn, GitHub, etc.
function ContactCard({ label, value, href }) {
  const isExternal = href?.startsWith('http')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="group flex items-center justify-between gap-4 rounded-panel border border-line p-5 transition-colors duration-200 hover:border-ink"
    >
      <div>
        <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{label}</p>
        <p className="mt-1 font-medium text-ink">{value}</p>
      </div>
      <span
        aria-hidden="true"
        className="text-ink-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-ink"
      >
        →
      </span>
    </a>
  )
}

export default ContactCard
