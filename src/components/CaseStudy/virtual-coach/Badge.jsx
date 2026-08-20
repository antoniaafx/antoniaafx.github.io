// A small bordered pill for context labels that aren't quite the section
// eyebrow ("Academic Group Project → Independent Redesign", "Original
// academic prototype · 13 participants") — same text-caption/uppercase/
// tracking-wide treatment used for every other label on the site, just
// wrapped in a border-line pill so it reads as a status tag rather than a
// heading.
function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line px-3 py-1 text-caption font-medium uppercase tracking-wide text-ink-muted">
      {children}
    </span>
  )
}

export default Badge
