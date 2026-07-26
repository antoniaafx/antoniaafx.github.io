// `eyebrow` is optional and only used where a page needs to label which
// stage of a larger narrative a section belongs to (e.g. About's journey
// structure) — same text-caption treatment already used for eyebrows
// elsewhere (Hero, CaseHero, AboutHero), just centralized here since
// multiple sections on one page need it. Every other caller is unaffected.
function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{eyebrow}</p>}
      <h2 className={eyebrow ? 'mt-3 text-display-sm' : 'text-display-sm'}>{title}</h2>
      {subtitle && <p className="mt-3 text-lg text-ink-soft">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
