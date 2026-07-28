// A single numbered skill tile — shared by the homepage's Skills overview
// and the About page's grouped skills section.
// The numbered tile used to be accent-filled (bg-accent-soft/text-accent-dark)
// on every badge regardless of state — six identical accent marks on one
// screen reads as decoration, not signal, and dilutes what the accent means
// elsewhere (links, buttons, the one CTA per section). These are static
// display tiles, not links or buttons, so there's no interactive state to
// reserve the accent for here; the number now sits in the same neutral
// paper-muted/ink-muted pairing used for eyebrows and labels elsewhere.
function SkillBadge({ index = 0, label }) {
  return (
    <div className="rounded-panel border border-line bg-paper p-5 transition-shadow duration-200 hover:shadow-soft">
      <span className="flex h-8 w-8 items-center justify-center rounded-control bg-paper-muted text-caption font-semibold text-ink-muted">
        {String(index + 1).padStart(2, '0')}
      </span>
      <p className="mt-4 font-medium text-ink">{label}</p>
    </div>
  )
}

export default SkillBadge
