// `eyebrow` is optional and only used where a page needs to label which
// stage of a larger narrative a section belongs to (e.g. About's journey
// structure) — same text-caption treatment already used for eyebrows
// elsewhere (Hero, CaseHero, AboutHero), just centralized here since
// multiple sections on one page need it. Every other caller is unaffected.
//
// A numbered "chapter" tile used to sit next to the eyebrow here — removed
// deliberately. It read as an arbitrary label rather than a real chapter
// marker; the story's sequence is carried by each section's own distinct
// treatment and by spacing/typography instead, not a counter.
//
// `onDark` is new — for the two sections that now sit on the dark `ink`
// background (Featured Project, About Contact). The site's global base
// style hard-codes every h1–h4 to `text-ink`, which is correct almost
// everywhere but invisible on a dark section, so it needs an explicit
// override here rather than relying on inheriting the section's own
// `text-paper`. Defaults to false — every existing caller is unaffected.
function SectionTitle({ eyebrow, title, subtitle, onDark = false }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className={`text-caption font-medium uppercase tracking-wide ${onDark ? 'text-paper/70' : 'text-ink-muted'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`${eyebrow ? 'mt-3 ' : ''}text-display-sm ${onDark ? 'text-paper' : ''}`}>{title}</h2>
      {subtitle && <p className={`mt-3 text-lg ${onDark ? 'text-paper/80' : 'text-ink-soft'}`}>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
