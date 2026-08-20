// Insight → design response (and designed → prototype-limitation) pairs —
// the same rounded-panel/border-line/p-6 card recipe used by
// ProjectOverview/ReflectionSection elsewhere, with a connecting arrow to
// make the before/after relationship explicit at a glance.
function ArrowPair({ topLabel, topText, bottomLabel, bottomText }) {
  return (
    <div className="rounded-panel border border-line p-6">
      <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{topLabel}</p>
      <p className="mt-2 text-ink-soft">{topText}</p>
      <span aria-hidden="true" className="my-4 block text-lg text-ink-muted">
        ↓
      </span>
      <p className="text-caption font-medium uppercase tracking-wide text-accent-dark">{bottomLabel}</p>
      <p className="mt-2 font-medium text-ink">{bottomText}</p>
    </div>
  )
}

export default ArrowPair
