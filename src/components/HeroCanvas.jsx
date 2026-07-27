import { useState } from 'react'
import { motion, useMotionValue, useSpring, useMotionTemplate, useReducedMotion } from 'framer-motion'
import Button from './Button'
import HeroPortrait from './HeroPortrait'
import HeroWireframeLayer from './HeroWireframeLayer'
import { fadeInUp } from '../lib/motion'

// Both layers need this to match exactly, or the wireframe layer's
// portrait/text placeholders won't line up with the real ones above them.
// Defined once here and passed down, rather than duplicated, so the two
// can't quietly drift apart.
const CONTENT_PADDING = 'px-6 py-10 sm:px-10 sm:py-14'

// "Inside the Designer's Workspace." On load this is a completely finished
// interface — no wireframe visible anywhere. A soft circular reveal
// follows the cursor: wherever it passes, a masked window opens onto the
// wireframe layer sitting underneath, then closes again once the cursor
// moves on or leaves. Outside that window, the finished design is all
// there ever is. The mask is a spring-smoothed radial-gradient position
// (Framer Motion's useMotionValue/useSpring/useMotionTemplate — the
// documented pattern for a cursor-following CSS mask), which is what
// gives the "follows the cursor, but isn't 1:1 rigid" quality without
// needing a hand-rolled requestAnimationFrame loop.
//
// Buttons are part of the finished layer only — there is no wireframe
// button anywhere in HeroWireframeLayer's content, so nothing about them
// ever changes regardless of where the cursor is, and the wireframe layer
// itself is `pointer-events-none`, so it can never intercept a click.
//
// Under prefers-reduced-motion the whole mechanism is skipped — no mouse
// listeners attached, the wireframe layer isn't even rendered — visitors
// simply see the finished design, full stop, per the brief's explicit
// instruction to disable the effect rather than offer a static fallback.
function HeroCanvas() {
  const shouldReduceMotion = useReducedMotion()
  const entranceMotion = shouldReduceMotion
    ? {}
    : { initial: 'hidden', animate: 'visible', variants: fadeInUp }

  const [isRevealing, setIsRevealing] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 30, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 260, damping: 30, mass: 0.4 })
  const maskImage = useMotionTemplate`radial-gradient(150px circle at ${springX}px ${springY}px, black 30%, transparent 70%)`

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }

  const hoverHandlers = shouldReduceMotion
    ? {}
    : {
        onMouseMove: handleMouseMove,
        onMouseEnter: () => setIsRevealing(true),
        onMouseLeave: () => setIsRevealing(false),
      }

  return (
    <motion.div {...entranceMotion} className="mx-auto w-full max-w-3xl">
      <div
        className="relative grid overflow-hidden rounded-panel border border-line bg-paper shadow-soft"
        {...hoverHandlers}
      >
        {/* Finished layer — the hero as it appears on load. */}
        <div className={`relative z-10 flex flex-col items-center [grid-area:1/1] ${CONTENT_PADDING}`}>
          <div className="flex w-full justify-start">
            <HeroPortrait />
          </div>

          <div className="mt-6 flex flex-col items-center text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink sm:text-sm">Antonia Afx</p>
            <p className="mt-1.5 text-[0.6875rem] font-medium uppercase tracking-wide text-ink-muted sm:text-xs">
              UX/UI Designer
            </p>
            <h1 className="mt-4 max-w-md font-display text-lg font-semibold leading-snug text-ink sm:text-xl md:text-2xl lg:text-display-sm">
              I design thoughtful digital experiences through research, strategy, and human-centred design.
            </h1>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button to="/projects" variant="primary" size="md">
              View Projects
            </Button>
            <Button to="/about" variant="secondary" size="md">
              About Me
            </Button>
          </div>
        </div>

        {/* Wireframe layer — invisible except through the cursor's mask. */}
        {!shouldReduceMotion && (
          <motion.div
            aria-hidden="true"
            animate={{ opacity: isRevealing ? 1 : 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{ WebkitMaskImage: maskImage, maskImage }}
            className="pointer-events-none z-20 [grid-area:1/1]"
          >
            <HeroWireframeLayer contentPadding={CONTENT_PADDING} />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default HeroCanvas
