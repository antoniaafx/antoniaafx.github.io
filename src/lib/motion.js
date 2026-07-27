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

export function staggerContainer(staggerChildren = 0.12, delayChildren = 0) {
  return {
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  }
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
