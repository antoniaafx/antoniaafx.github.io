// The design-process layer — invisible on load, only ever visible through
// the cursor-following circular mask applied by its parent in HeroCanvas.
// Nothing here is unexplained decoration: the grid and guide read as "a
// Figma file," the measurement and footprints are specific, named ideas
// from the brief (attention to spacing; the journey that led here), and
// the portrait placeholder + text bars are what the finished layer looks
// like before the work is done.
//
// `contentPadding` must equal the finished layer's own padding exactly —
// passed in as a prop from HeroCanvas rather than duplicated here, so
// there's one source of truth and the two layers can't quietly drift out
// of alignment. The portrait-placeholder and text-bar block below use the
// same width/rotation/spacing values as HeroPortrait and the real text,
// for the same reason: whatever the cursor is hovering should reveal the
// correct wireframe underneath it, not a misaligned one.
function HeroWireframeLayer({ contentPadding }) {
  return (
    <div className="relative h-full w-full bg-paper">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <span className="absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-ink-muted/50" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-ink-muted/50" />

      <span className="absolute left-1/2 top-5 h-5 w-px -translate-x-1/2 border-l border-dashed border-ink-muted/50" />

      <div className="absolute bottom-6 left-6 flex flex-col items-center gap-1 text-ink-muted">
        <span className="h-4 w-px border-l border-dashed border-current" />
        <span className="text-[0.5625rem] font-medium tabular-nums">24px</span>
      </div>

      <div className="absolute bottom-5 right-8">
        <span className="block h-4 w-2.5 -rotate-12 rounded-full bg-ink-muted/40" />
        <span className="ml-3 mt-1 block h-4 w-2.5 rotate-12 rounded-full bg-ink-muted/40" />
      </div>

      <div className={`relative flex flex-col items-center ${contentPadding}`}>
        <div className="flex w-full justify-start">
          <div className="w-24 -rotate-3 sm:w-28">
            <div className="aspect-[3/4] rounded-sm border border-line bg-paper-muted" />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <span className="h-2.5 w-24 rounded-full bg-line" />
          <span className="mt-2 h-2 w-20 rounded-full bg-line" />
          <div className="mt-5 space-y-2">
            <span className="block h-2 w-56 rounded-full bg-line" />
            <span className="block h-2 w-48 rounded-full bg-line" />
            <span className="block h-2 w-40 rounded-full bg-line" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroWireframeLayer
