// A large-number research finding — typography carrying the hierarchy
// (size + weight + accent-dark) rather than another bordered card, per the
// portfolio's "don't overuse cards" direction for this case study.
// Inter, not the display serif: statistics are data, not an editorial
// statement heading — font-semibold at this size reads plenty strong
// without the serif, and tabular-nums keeps the digits aligned, matching
// the numeric convention already used elsewhere on the site (see the
// measurement callouts in HeroWireframeLayer).
function StatCallout({ value, label, note }) {
  return (
    <div>
      <p className="font-sans text-4xl font-semibold tabular-nums text-accent-dark sm:text-5xl">{value}</p>
      <p className="mt-2 text-ink-soft">{label}</p>
      {note && <p className="mt-2 text-sm font-medium text-ink">{note}</p>}
    </div>
  )
}

export default StatCallout
