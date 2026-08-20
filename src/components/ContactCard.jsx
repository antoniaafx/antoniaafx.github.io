// A single contact link — email, LinkedIn, etc. — as a bordered, padded
// card (the whole card is the clickable `<a>`, not just the value text)
// so Email/LinkedIn read as two deliberate actions rather than plain
// inline text competing with the paragraph above them.
//
// `onDark` — for use inside a Section on the dark `ink` background (About
// Contact). bg-paper/border-line/text-ink-muted don't hold up against dark
// ink, so onDark swaps each for a paper-tinted, translucent equivalent —
// the same rounded-panel/border card idiom used elsewhere on the site
// (SkillBadge, ExperienceCard), just recoloured for a dark surface instead
// of a new shape. Defaults to false.
function ContactCard({ label, value, href, onDark = false }) {
  const isExternal = href?.startsWith('http')
  const labelColor = onDark ? 'text-paper/60' : 'text-ink-muted'
  const valueColor = onDark ? 'text-paper' : 'text-ink'
  const surface = onDark
    ? 'border-paper/15 bg-paper/5 hover:border-paper/30 hover:bg-paper/10'
    : 'border-line bg-paper hover:border-ink/30 hover:bg-paper-muted'

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`block cursor-pointer rounded-panel border p-4 transition-colors duration-150 sm:p-5 ${surface}`}
    >
      <p className={`text-caption font-medium uppercase tracking-wide ${labelColor}`}>{label}</p>
      <p className={`mt-1.5 break-words font-medium ${valueColor}`}>
        {value}
        {isExternal && <span className="sr-only"> (opens in new tab)</span>}
      </p>
    </a>
  )
}

export default ContactCard
