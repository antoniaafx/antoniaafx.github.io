// The same rounded-panel/border-line/p-6 "quick fact" card ProjectOverview
// and ReflectionSection already use elsewhere on the site — reused as-is
// rather than styled fresh, so these cards read as the same category of
// information as the rest of the portfolio's case studies.
function FactCard({ label, children }) {
  return (
    <div className="rounded-panel border border-line p-6">
      <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{label}</p>
      <div className="mt-3 text-ink-soft">{children}</div>
    </div>
  )
}

export default FactCard
