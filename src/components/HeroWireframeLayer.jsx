// The workspace texture around the hero's content — grid paper, corner
// brackets, an alignment guide, a spacing measurement, a small "early
// version" annotation, and a pair of footprint marks suggesting the path
// that led here. All permanently present at low visual weight (this is
// what an in-progress Figma file looks like even before you touch
// anything), not hidden until hover — the hover-driven transformation is
// reserved for the content itself (text, portrait). Every piece maps to
// something the brief actually asked for; nothing here is unexplained
// decoration. Hidden below `md` to keep mobile calm and uncluttered.
function HeroWireframeLayer() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* Grid paper */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.3,
        }}
      />

      {/* Corner brackets — "this is a frame in the file" */}
      <span className="absolute left-4 top-4 hidden h-3 w-3 border-l-2 border-t-2 border-line md:block" />
      <span className="absolute bottom-4 right-4 hidden h-3 w-3 border-b-2 border-r-2 border-line md:block" />

      {/* Alignment guide */}
      <span className="absolute left-1/2 top-6 hidden h-5 w-px -translate-x-1/2 border-l border-dashed border-ink-muted/40 md:block" />

      {/* Spacing measurement */}
      <div className="absolute bottom-8 left-8 hidden flex-col items-center gap-1 text-ink-muted/70 md:flex">
        <span className="h-4 w-px border-l border-dashed border-current" />
        <span className="text-[0.5625rem] font-medium tabular-nums">24px</span>
      </div>

      {/* "Early version" annotation */}
      <div className="absolute right-8 top-8 hidden items-center gap-1.5 text-ink-muted/70 md:flex">
        <span className="text-[0.5625rem] font-medium uppercase tracking-wide">v1 draft</span>
        <span className="h-px w-5 border-t border-dashed border-current" />
      </div>

      {/* Footprints — the journey that led to this screen */}
      <div className="absolute bottom-6 right-10 hidden md:block">
        <span className="block h-4 w-2.5 -rotate-12 rounded-full bg-line" />
        <span className="ml-3 mt-1 block h-4 w-2.5 rotate-12 rounded-full bg-line" />
      </div>
    </div>
  )
}

export default HeroWireframeLayer
