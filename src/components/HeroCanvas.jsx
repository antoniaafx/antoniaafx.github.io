import { motion, useReducedMotion } from 'framer-motion'
import Button from './Button'
import HeroPortrait from './HeroPortrait'
import HeroWireframeLayer from './HeroWireframeLayer'
import { fadeInUp } from '../lib/motion'

// "Inside the Designer's Workspace" — not a device to admire, a canvas to
// look into. Two layers occupy the exact same space (CSS grid's
// stack-in-one-cell trick, `[grid-area:1/1]` on both), so the relationship
// between them reads immediately: underneath is a plain wireframe version
// of this same text, hidden behind the finished copy at full opacity.
// Hovering the canvas fades the finished layer down (never to zero — a
// legible trace stays, so it reads as "peeling back," not "vanishing"),
// revealing the wireframe beneath. The portrait has its own separate,
// independent hover (see HeroPortrait) rather than being tied to the same
// trigger — each piece of the workspace responds to being looked at
// specifically, not as one blanket on/off switch.
//
// Buttons stay inside the same hoverable region for layout simplicity, but
// never change appearance or lose interactivity themselves — only the
// wireframe-adjacent text above them does. Plain CSS `group-hover`, not
// Framer Motion, for the same reason as HeroPortrait: a straightforward
// opacity crossfade doesn't need spring physics, and the site's global
// reduced-motion rule in index.css already collapses the transition
// automatically. The one-time entrance (mount only, not hover) still uses
// the shared Framer Motion fadeInUp preset like every other page's hero.
function HeroCanvas() {
  const shouldReduceMotion = useReducedMotion()
  const entranceMotion = shouldReduceMotion
    ? {}
    : { initial: 'hidden', animate: 'visible', variants: fadeInUp }

  return (
    <motion.div {...entranceMotion} className="mx-auto w-full max-w-3xl">
      <div className="group/canvas relative overflow-hidden rounded-panel border border-line bg-paper shadow-soft">
        <HeroWireframeLayer />

        <div className="relative z-10 flex flex-col items-center px-6 py-10 text-center sm:px-10 sm:py-14">
          <HeroPortrait />

          <div className="relative mt-5 grid place-items-center">
            {/* Wireframe text — always rendered, sits behind the finished
                copy until hover fades that layer down. */}
            <div className="flex flex-col items-center [grid-area:1/1]">
              <span className="h-2.5 w-24 rounded-full bg-line" />
              <span className="mt-2 h-2 w-20 rounded-full bg-line" />
              <div className="mt-5 space-y-2">
                <span className="block h-2 w-56 rounded-full bg-line" />
                <span className="block h-2 w-48 rounded-full bg-line" />
                <span className="block h-2 w-40 rounded-full bg-line" />
              </div>
            </div>

            {/* Finished copy — fades on canvas hover to reveal the
                wireframe layer above. Opacity floors at 0.06, not 0, so it
                reads as translucent/underneath, not gone. */}
            <div className="flex flex-col items-center opacity-100 transition-opacity duration-500 ease-out [grid-area:1/1] group-hover/canvas:opacity-[0.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink sm:text-sm">Antonia Afx</p>
              <p className="mt-1.5 text-[0.6875rem] font-medium uppercase tracking-wide text-ink-muted sm:text-xs">
                UX/UI Designer
              </p>
              <h1 className="mt-4 max-w-md font-display text-lg font-semibold leading-snug text-ink sm:text-xl md:text-2xl lg:text-display-sm">
                I design thoughtful digital experiences through research, strategy, and human-centred design.
              </h1>
            </div>
          </div>

          <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button to="/projects" variant="primary" size="md">
              View Projects
            </Button>
            <Button to="/about" variant="secondary" size="md">
              About Me
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default HeroCanvas
