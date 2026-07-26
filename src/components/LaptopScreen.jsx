import WireframeElements from './WireframeElements'

// The laptop's screen surface: a relative canvas with the wireframe
// scaffolding as a decorative backdrop layer (z-auto, so it stacks behind)
// and the real hero content — passed as `children` — composited on top via
// an explicit z-10, reading as "the screen being prototyped" sitting
// within the surrounding workspace canvas. The faint accent-tinted glow is
// a static depth cue (not animated — the grid backdrop already carries the
// "powers on" moment), kept deliberately soft to avoid any neon feeling.
function LaptopScreen({ children }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-paper p-3 shadow-[0_0_80px_-40px_var(--color-accent)] sm:aspect-[16/10] sm:p-6">
      {/* Toolbar */}
      <div aria-hidden="true" className="relative z-10 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
        <span className="ml-2 h-1.5 flex-1 rounded-full bg-paper-muted" />
      </div>

      <WireframeElements />

      <div className="relative z-10 flex h-[calc(100%-1.5rem)] flex-col items-center justify-center px-2 pb-8 text-center sm:h-[calc(100%-2rem)] sm:pb-10">
        {children}
      </div>
    </div>
  )
}

export default LaptopScreen
