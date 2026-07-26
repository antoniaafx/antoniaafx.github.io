import { motion, useReducedMotion } from 'framer-motion'
import { screenActivate, sequenceGroup, fadeInFast } from '../lib/motion'

// Decorative Figma-canvas scaffolding for the hero laptop screen — a
// research cluster (left, paper-inspired: a sticky note + a loose sketch
// mark) and a wireframe cluster (right, structured/digital: a frame with
// layout bars and a small accent "component" block), telling the paper-to-
// digital story spatially around the real hero content in the centre.
// Everything here is shapes and lines, never more readable text, so
// nothing competes with the real heading for attention — the process
// labels are the only literal words on the canvas.
//
// Each cluster fires on its own delay as part of "opening a design file"
// (research before wireframe — see HeroLaptop for the full sequence). The
// two clusters, the corner brackets, and the process-label row all drop
// below `md` to keep mobile screens simple and legible; the grid backdrop
// stays everywhere since it's a cheap background pattern, not discrete
// clutter competing with the real content.
const PROCESS_STEPS = ['01 Research', '02 Understanding', '03 Exploration', '04 Design', '05 Final Experience']

function WireframeElements() {
  const shouldReduceMotion = useReducedMotion()

  const gridMotion = shouldReduceMotion ? {} : { initial: 'hidden', animate: 'visible', variants: screenActivate }
  const researchMotion = shouldReduceMotion
    ? {}
    : { initial: 'hidden', animate: 'visible', variants: sequenceGroup(0.3) }
  const wireframeMotion = shouldReduceMotion
    ? {}
    : { initial: 'hidden', animate: 'visible', variants: sequenceGroup(0.45) }
  const labelsMotion = shouldReduceMotion
    ? {}
    : { initial: 'hidden', animate: 'visible', variants: sequenceGroup(0.72, 0.03) }
  const pieceMotion = shouldReduceMotion ? {} : { variants: fadeInFast }

  return (
    <>
      <motion.div
        {...gridMotion}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.35,
        }}
      />

      <span
        aria-hidden="true"
        className="absolute left-2 top-2 hidden h-3 w-3 border-l-2 border-t-2 border-line md:block"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-2 right-2 hidden h-3 w-3 border-b-2 border-r-2 border-line md:block"
      />

      {/* Research — left side: a sticky note (with a sage "human insight"
          tag) and a loose sketch mark, both deliberately rougher/rotated,
          reading as "paper" against the crisp wireframe on the right. */}
      <motion.div
        {...researchMotion}
        aria-hidden="true"
        className="absolute left-[4%] top-[14%] hidden w-28 md:block lg:w-32"
      >
        <motion.div
          variants={pieceMotion}
          className="-rotate-3 space-y-1.5 rounded-md border border-line bg-paper-muted p-2.5 shadow-soft"
        >
          <span className="block h-1 w-3/4 rounded-full bg-line" />
          <span className="block h-1 w-full rounded-full bg-line" />
          <span className="block h-1 w-1/2 rounded-full bg-line" />
          <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-sage-dark" />
        </motion.div>
        <motion.div
          variants={pieceMotion}
          className="ml-5 mt-3 h-8 w-8 rotate-6 rounded-full border-2 border-dashed border-ink-muted/50"
        />
        {/* User-flow annotation — a small dashed connector pointing toward
            the centre, "research leads to the final experience." */}
        <motion.div variants={pieceMotion} className="ml-9 mt-2.5 flex items-center gap-1 text-ink-muted/60">
          <span className="h-px w-4 border-t border-dashed border-current" />
          <span className="h-0 w-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-current" />
        </motion.div>
      </motion.div>

      {/* Wireframe — right side: a structured frame with layout bars and a
          small accent "component" block, crisp and unrotated. */}
      <motion.div
        {...wireframeMotion}
        aria-hidden="true"
        className="absolute right-[4%] top-[14%] hidden w-32 md:block lg:w-36"
      >
        <motion.div
          variants={pieceMotion}
          className="space-y-1.5 rounded-md border border-line bg-paper-muted p-2.5 shadow-soft"
        >
          <span className="block h-1 w-2/3 rounded-full bg-line" />
          <span className="block h-1 w-1/2 rounded-full bg-line" />
          <span className="mt-1.5 block h-3 w-10 rounded bg-accent" />
        </motion.div>
        {/* Figma-like alignment guide + spacing measurement — the dashed
            line is the "how far apart these are" guide a design tool draws
            between two frames; the number is what it's measuring. One
            detail, not two. */}
        <motion.div variants={pieceMotion} className="flex flex-col items-center text-ink-muted">
          <span className="h-3 w-px border-l border-dashed border-current" />
          <span className="mt-1 flex items-center gap-1.5">
            <span className="h-px w-3 bg-line" />
            <span className="text-[0.5625rem] font-medium tabular-nums">64px</span>
            <span className="h-px w-3 bg-line" />
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        {...labelsMotion}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-2 hidden items-center justify-center gap-3 px-3 md:flex"
      >
        {PROCESS_STEPS.map((step) => (
          <motion.span key={step} variants={pieceMotion} className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-sage-dark" />
            <span className="text-[0.625rem] font-medium uppercase tracking-wide text-ink-muted">{step}</span>
          </motion.span>
        ))}
      </motion.div>
    </>
  )
}

export default WireframeElements
