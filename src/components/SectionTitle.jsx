// `eyebrow` is optional and only used where a page needs to label which
// stage of a larger narrative a section belongs to (e.g. About's journey
// structure) — same text-caption treatment already used for eyebrows
// elsewhere (Hero, CaseHero, AboutHero), just centralized here since
// multiple sections on one page need it. Every other caller is unaffected.
//
// `chapter` is optional on top of that — a small numbered tile (same
// visual device as SkillBadge's index tiles) that only makes sense next to
// an eyebrow that's actually one stage of a longer story, e.g. About's
// "Where I Started" / "How I Design" / "What I Learned" / "Where I'm
// Going" arc. It turns four sections that already had this structure in
// their copy into something a visitor can actually see and track while
// scrolling, instead of four section headings that read as unrelated.
function SectionTitle({ eyebrow, chapter, title, subtitle }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <div className="flex items-center gap-2.5">
          {chapter && (
            <span
              aria-hidden="true"
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-control bg-accent-soft text-[0.625rem] font-semibold text-accent-dark"
            >
              {chapter}
            </span>
          )}
          <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{eyebrow}</p>
        </div>
      )}
      <h2 className={eyebrow ? 'mt-3 text-display-sm' : 'text-display-sm'}>{title}</h2>
      {subtitle && <p className="mt-3 text-lg text-ink-soft">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
