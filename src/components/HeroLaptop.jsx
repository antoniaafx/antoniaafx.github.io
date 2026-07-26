import { motion, useReducedMotion } from 'framer-motion'
import Button from './Button'
import LaptopFrame from './LaptopFrame'
import LaptopScreen from './LaptopScreen'
import HeroPortrait from './HeroPortrait'
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

// The hero laptop: a window into a UX designer's workspace ("this is where
// I think"), not a device mockup or a screenshot of a finished product.
// Real content (portrait, name, role, headline, buttons) sits directly on
// the screen's canvas — no card, no bounding box, no background fill of
// its own — distinguished from the surrounding wireframe scaffolding
// purely by scale and hierarchy, not by a containing shape. Only the
// chassis and the wireframe scaffolding around it are aria-hidden (see
// LaptopFrame/LaptopScreen/WireframeElements).
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
            <motion.div variants={pieceMotion}>
              <HeroPortrait />
            </motion.div>

            <motion.p
              variants={pieceMotion}
              className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink sm:text-sm"
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
