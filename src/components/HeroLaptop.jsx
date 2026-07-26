import { motion, useReducedMotion } from 'framer-motion'
import Button from './Button'
import LaptopFrame from './LaptopFrame'
import LaptopScreen from './LaptopScreen'
import { EASE, fadeIn, sequenceGroup } from '../lib/motion'

// Slightly larger offset than the shared fadeInUp, to read clearly at the
// laptop's now much bigger scale, but still a shorter duration — it only
// needs to settle into place, not the fuller slide used for page-level
// content, and the whole entrance needs to fit inside about a second
// alongside the screen content that follows it.
const frameMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

// The hero laptop: a window into a UX designer's workspace, not a device
// mockup or a screenshot of the real site. Real content (name, role,
// headline, buttons) sits directly on the screen's canvas — no card, no
// background fill of its own — framed by a thin selection-box outline with
// corner handles instead, reading as "the frame currently selected in the
// file" rather than a floating panel. Only the chassis and the wireframe
// scaffolding around it are aria-hidden (see LaptopFrame/LaptopScreen/
// WireframeElements); the selection box and cursor here are decorative too.
//
// Full "opening a design file" sequence (~1s total): frame settles (this
// component) → screen/grid activates and the research cluster appears
// (WireframeElements, delayChildren 0.15/0.3) → the wireframe cluster
// reveals (WireframeElements, delayChildren 0.45) → hero content appears
// last (this component, delayChildren 0.55) → process labels close it out
// (WireframeElements, delayChildren 0.72). Collapses to an instant,
// motionless appearance under prefers-reduced-motion, same pattern used
// everywhere else in this app.
function HeroLaptop() {
  const shouldReduceMotion = useReducedMotion()

  const outerMotion = shouldReduceMotion ? {} : { initial: 'hidden', animate: 'visible', variants: frameMotion }
  const contentMotion = shouldReduceMotion
    ? {}
    : { initial: 'hidden', animate: 'visible', variants: sequenceGroup(0.55, 0.08) }
  const pieceMotion = shouldReduceMotion ? {} : { variants: fadeIn }

  return (
    <motion.div {...outerMotion}>
      <LaptopFrame>
        <LaptopScreen>
          <motion.div
            {...contentMotion}
            className="relative z-10 flex w-full max-w-xs flex-col items-center px-5 py-4 text-center sm:max-w-sm sm:px-8 sm:py-6 md:max-w-md"
          >
            {/* Selection box — a thin outline with corner handles, the same
                visual language as the screen's own corner brackets, rather
                than a card floating on top of the canvas. */}
            <motion.div
              variants={pieceMotion}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 border border-accent/70"
            >
              <span className="absolute -left-[3px] -top-[3px] h-1.5 w-1.5 bg-accent" />
              <span className="absolute -right-[3px] -top-[3px] h-1.5 w-1.5 bg-accent" />
              <span className="absolute -bottom-[3px] -left-[3px] h-1.5 w-1.5 bg-accent" />
              <span className="absolute -bottom-[3px] -right-[3px] h-1.5 w-1.5 bg-accent" />
            </motion.div>

            {/* Cursor + alignment guide — "someone is actively working in
                this file" rather than a static screenshot. */}
            <motion.div
              variants={pieceMotion}
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-7 -right-10 hidden sm:block"
            >
              <span className="absolute left-2.5 top-1 h-px w-9 border-t border-dashed border-accent/50" />
              <span className="block h-0 w-0 -rotate-[20deg] border-b-[11px] border-r-[7px] border-b-accent border-r-transparent" />
            </motion.div>

            <motion.p
              variants={pieceMotion}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-ink sm:text-sm"
            >
              Antonia Afx
            </motion.p>
            <motion.p
              variants={pieceMotion}
              className="mt-1.5 text-[0.6875rem] font-medium uppercase tracking-wide text-ink-muted sm:text-xs"
            >
              UX/UI Designer
            </motion.p>
            <motion.h1
              variants={pieceMotion}
              className="mt-4 font-display text-lg font-semibold leading-snug text-ink sm:text-xl md:text-2xl lg:text-display-sm"
            >
              I design thoughtful digital experiences through research, strategy, and human-centred design.
            </motion.h1>
            <motion.div variants={pieceMotion} className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button to="/projects" variant="primary" size="md">
                View Projects
              </Button>
              <Button to="/about" variant="secondary" size="md">
                About Me
              </Button>
            </motion.div>
          </motion.div>
        </LaptopScreen>
      </LaptopFrame>
    </motion.div>
  )
}

export default HeroLaptop
