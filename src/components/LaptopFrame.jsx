// Decorative laptop chassis — bezel, camera dot, base — built from design
// tokens only, no images or new dependencies. A styled shell around
// `children` (the screen surface): `children` renders normally, not
// hidden, since real hero content lives there now. Only the chassis's own
// decorative bits (camera dot, base, ground shadow) are aria-hidden.
//
// No max-width cap — the laptop fills whatever width Hero's Section/
// Container already gives it (max-w-6xl). The bezel itself is kept
// deliberately thin, though — this is a window into the workspace, not a
// device to admire, so the frame should recede and let the screen's own
// content carry the composition.
function LaptopFrame({ children }) {
  return (
    <div className="relative mx-auto w-full">
      {/* Ground shadow — a soft, wide blur beneath the base, the "resting
          slightly above the page" depth cue. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-[6%] -bottom-3 h-8 rounded-full bg-ink/25 blur-2xl sm:-bottom-4 sm:h-12"
      />

      <div className="relative rounded-t-2xl border border-line bg-ink p-2 shadow-lifted sm:p-2.5">
        <div aria-hidden="true" className="mx-auto mb-2 h-1.5 w-1.5 rounded-full bg-ink-soft" />
        {children}
      </div>
      <div aria-hidden="true" className="relative h-2.5 rounded-b-xl bg-ink-soft sm:h-3" />
    </div>
  )
}

export default LaptopFrame
