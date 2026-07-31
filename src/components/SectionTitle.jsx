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
//
// `as` — every page has its own real h1 elsewhere (Home's hero tagline,
// About's "Hi, I'm Antonia.", the case study's title) except Projects,
// which used to render its page title through this component's default h2
// — leaving that page with no h1 at all. Defaults to 'h2' (every other
// caller is unaffected); Projects passes `as="h1"` since this is its only
// page-level heading. Visual size is unchanged either way (text-display-sm
// is set directly, not inherited from the tag), so this is a semantic fix
// only, not a redesign.
function SectionTitle({ eyebrow, title, subtitle, onDark = false, as: Heading = 'h2' }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className={`text-caption font-medium uppercase tracking-wide ${onDark ? 'text-paper/70' : 'text-ink-muted'}`}>
          {eyebrow}
        </p>
      )}
      <Heading className={`${eyebrow ? 'mt-3 ' : ''}text-display-sm ${onDark ? 'text-paper' : ''}`}>{title}</Heading>
      {subtitle && <p className={`mt-3 text-lg ${onDark ? 'text-paper/80' : 'text-ink-soft'}`}>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
