// A large-number research finding — typography carrying the hierarchy
// (font-display, accent-dark) rather than another bordered card, per the
// portfolio's "don't overuse cards" direction for this case study.
function StatCallout({ value, label, note }) {
  return (
    <div>
      <p className="font-display text-4xl font-semibold text-accent-dark sm:text-5xl">{value}</p>
      <p className="mt-2 text-ink-soft">{label}</p>
      {note && <p className="mt-2 text-sm font-medium text-ink">{note}</p>}
    </div>
  )
}

export default StatCallout
