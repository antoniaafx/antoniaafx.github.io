// The design-process layer — invisible on load, only ever visible through
// the cursor-following circular mask applied by its parent in HeroCanvas.
// This is meant to read as an actual low-fi file for the finished layer,
// not a generic placeholder screen: every wrapper below reuses the exact
// className (size/position/rotation/spacing) of its finished-layer
// counterpart in HeroCanvas — only what's rendered INSIDE each slot
// changes — so the two are provably the same composition, just two
// fidelities of it. The two measurement callouts cite real values from
// this file (the 24px background grid unit, the 32px portrait↔column
// gap — see `sm:gap-8` below) rather than invented numbers.
//
// `contentPadding` must equal the finished layer's own padding exactly —
// passed in as a prop from HeroCanvas rather than duplicated here, so
// there's one source of truth and the two layers can't quietly drift out
// of alignment.
function HeroWireframeLayer({ contentPadding }) {
  return (
    <div className="relative h-full w-full bg-paper">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <span className="absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-ink-muted/50" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-ink-muted/50" />

      <span className="absolute left-1/2 top-5 h-5 w-px -translate-x-1/2 border-l border-dashed border-ink-muted/50" />

      {/* Alignment spine — the same left margin the portrait, name,
          headline and buttons all share in the finished layer (matches
          CONTENT_PADDING's own left inset exactly, so it sits right where
          those elements actually start). */}
      <span
        aria-hidden="true"
        className="absolute left-6 top-4 bottom-4 w-px border-l border-dashed border-ink-muted/30 sm:left-10 sm:top-6 sm:bottom-6"
      />

      <div className="absolute bottom-6 left-6 flex flex-col items-center gap-1 text-ink-muted">
        <span className="h-4 w-px border-l border-dashed border-current" />
        <span className="text-[0.5625rem] font-medium tabular-nums">24px</span>
      </div>

      <div className="absolute right-6 top-6 flex flex-col items-end gap-1 text-ink-muted">
        <span className="text-[0.5625rem] font-medium tabular-nums">32px</span>
        <span className="h-4 w-px border-l border-dashed border-current" />
      </div>

      <div className="absolute bottom-5 right-8">
        <span className="block h-4 w-2.5 -rotate-12 rounded-full bg-ink-muted/40" />
        <span className="ml-3 mt-1 block h-4 w-2.5 rotate-12 rounded-full bg-ink-muted/40" />
      </div>

      <div className={`relative flex flex-col items-start ${contentPadding}`}>
        <div className="flex w-full flex-col items-start gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div className="w-32 shrink-0 -rotate-3 sm:w-48">
            {/* Image placeholder — corner-to-corner X, simple border, a
                small mountain/photo glyph. No colour, no gradient: this is
                what reads instantly as "this becomes an image," the same
                convention every design tool uses for an empty image slot. */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-line bg-paper-muted">
              <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full text-ink-muted/25"
              >
                <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-ink-muted/40 sm:h-7 sm:w-7"
                >
                  <rect x="3" y="4" width="18" height="16" rx="1.5" />
                  <circle cx="8.5" cy="9.5" r="1.25" />
                  <path d="M4.5 17l4.5-4.5 3 3 4-5 4.5 5" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start pt-1">
            {/* Each placeholder sits on an invisible copy of its real-layer
                text (same font/size/weight/line-height/breakpoints) so the
                block takes up exactly the same height the real text does
                at any screen size — that's what keeps the bar directly
                under its real counterpart, and everything after it (the
                headline, the buttons) landing in the right place too,
                rather than drifting once the real text wraps differently
                than a fixed-height bar would. */}
            <div className="relative">
              <p aria-hidden="true" className="invisible font-display text-xl font-semibold tracking-tight sm:text-2xl">
                Antonia Afx
              </p>
              <span className="absolute left-0 top-0 h-3.5 w-20 rounded-full bg-line sm:h-4" />
            </div>

            <div className="relative mt-1">
              <p aria-hidden="true" className="invisible text-[0.6875rem] font-semibold uppercase tracking-wide sm:text-xs">
                UX/UI Designer
              </p>
              <span className="absolute left-0 top-0 h-2 w-16 rounded-full bg-line" />
            </div>

            <span className="mt-2.5 h-px w-8 bg-line" />

            <div className="relative mt-6 max-w-md">
              <h1
                aria-hidden="true"
                className="invisible font-display text-lg font-semibold leading-snug sm:text-xl md:text-2xl lg:text-display-sm"
              >
                I design thoughtful digital experiences through research, strategy, and human-centred design.
              </h1>
              <div className="absolute left-0 top-0 space-y-2">
                <span className="block h-2 w-56 rounded-full bg-line" />
                <span className="block h-2 w-48 rounded-full bg-line" />
                <span className="block h-2 w-40 rounded-full bg-line" />
              </div>
            </div>

            {/* Wireframe buttons — an outlined control with a placeholder
                label line inside, not an empty rectangle. */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <div className="flex h-11 w-32 items-center justify-center rounded-control border border-line">
                <span className="h-2 w-20 rounded-full bg-line" />
              </div>
              <div className="flex h-11 w-28 items-center justify-center rounded-control border border-line">
                <span className="h-2 w-16 rounded-full bg-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroWireframeLayer
