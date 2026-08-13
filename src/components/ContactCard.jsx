// A single contact option — email, LinkedIn, etc.
//
// `onDark` — new, for use inside a Section on the dark `ink` background
// (About Contact). border-line/text-ink-muted/text-ink were tuned for a
// light card and don't hold up against dark ink; onDark swaps to
// paper-based tones instead. Defaults to false — Home's ContactCta uses
// its own markup, not ContactCard, so this only affects About Contact
// once wired up there.
function ContactCard({ label, value, href, onDark = false }) {
  const isExternal = href?.startsWith('http')
  const border = onDark ? 'border-paper/20' : 'border-line'
  const borderHover = onDark ? 'hover:border-paper/50' : 'hover:border-ink'
  const labelColor = onDark ? 'text-paper/60' : 'text-ink-muted'
  const valueColor = onDark ? 'text-paper' : 'text-ink'
  const arrowColor = onDark ? 'text-paper/60' : 'text-ink-muted'
  const arrowHover = onDark ? 'group-hover:text-paper' : 'group-hover:text-ink'

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`group flex items-center justify-between gap-4 rounded-panel border ${border} p-5 transition-colors duration-200 ${borderHover}`}
    >
      <div>
        <p className={`text-caption font-medium uppercase tracking-wide ${labelColor}`}>{label}</p>
        <p className={`mt-1 font-medium ${valueColor}`}>
          {value}
          {isExternal && <span className="sr-only"> (opens in new tab)</span>}
        </p>
      </div>
      <span
        aria-hidden="true"
        className={`${arrowColor} transition-transform duration-200 group-hover:translate-x-1 ${arrowHover}`}
      >
        →
      </span>
    </a>
  )
}

export default ContactCard
