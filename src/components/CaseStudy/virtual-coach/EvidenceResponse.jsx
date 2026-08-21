// Phase 2 — replaces ArrowPair's bordered-card treatment with a row-based
// editorial composition: no container around each pair, just a hairline
// rule between rows and a responsive two/three-column split. Desktop:
// evidence | connector | response, side by side. Mobile: evidence, then
// response, stacked — the connector glyph itself switches between → and ↓
// by breakpoint (both rendered, one hidden each way) rather than the
// layout relying on it for meaning; the "Design response" label text is
// what actually carries the relationship, so the connector stays purely
// decorative (aria-hidden) at both sizes.
//
// `visual` is optional — a small supporting image for one specific pair
// (e.g. the Recipes screen next to the finding it responds to), rendered
// beside the response text rather than off in its own section.
function Connector() {
  return (
    <span aria-hidden="true" className="flex items-center justify-center text-ink-muted">
      <span className="sm:hidden">↓</span>
      <span className="hidden sm:inline">→</span>
    </span>
  )
}

function EvidenceResponse({ pairs }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {pairs.map((pair) => (
        <div
          key={pair.evidenceText}
          className="grid gap-3 py-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6"
        >
          <div>
            <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{pair.evidenceLabel}</p>
            <p className="mt-1 text-ink-soft">{pair.evidenceText}</p>
          </div>
          <Connector />
          <div className="flex items-center gap-4">
            <div className="min-w-0">
              <p className="text-caption font-medium uppercase tracking-wide text-accent-dark">{pair.responseLabel ?? 'Design response'}</p>
              <p className="mt-1 font-medium text-ink">{pair.responseText}</p>
            </div>
            {pair.visual && <div className="shrink-0">{pair.visual}</div>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default EvidenceResponse
