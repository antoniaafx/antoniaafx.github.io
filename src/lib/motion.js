// Shared Framer Motion presets. Reach for these instead of inventing new
// easing curves/durations per component, so motion feels consistent.

export const EASE = [0.16, 1, 0.3, 1]

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
}

// Snappier than fadeIn — for small decorative pieces (the hero laptop's
// wireframe scaffolding) that need to read as quick, deliberate reveals
// rather than a slow fade, and need to fit several of them inside a ~1s
// total sequence.
export const fadeInFast = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: EASE } },
}

// A single element fading in at a fixed delay — the hero laptop screen's
// "powers on" moment (the grid backdrop), distinct from a stagger group
// (which delays a set of children) or a plain fadeIn (which starts
// immediately).
export const screenActivate = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: EASE, delay: 0.15 } },
}

export function staggerContainer(staggerChildren = 0.12, delayChildren = 0) {
  return {
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  }
}

// Like staggerContainer, but named for its use case: several independent
// groups (research notes, then wireframe elements, then hero content) each
// need to start at a fixed, deliberately different offset from the same
// mount moment, rather than one list evenly spaced by index.
export function sequenceGroup(delayChildren, staggerChildren = 0.05) {
  return { hidden: {}, visible: { transition: { staggerChildren, delayChildren } } }
}

// Pass to `viewport` on a motion element for a reveal-once-on-scroll effect.
export const revealOnce = { once: true, amount: 0.2 }

// Page-level transition, used by App.jsx around route changes.
export const pageTransition = {
  variants: {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
  },
  transition: { duration: 0.35, ease: EASE },
}
