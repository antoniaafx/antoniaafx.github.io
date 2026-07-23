import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section'
import { fadeInUp, staggerContainer } from '../lib/motion'

// Mount-triggered stagger, same pattern as the homepage Hero and CaseHero.
function AboutHero() {
  const shouldReduceMotion = useReducedMotion()
  const containerMotion = shouldReduceMotion
    ? {}
    : { initial: 'hidden', animate: 'visible', variants: staggerContainer(0.12, 0.1) }
  const itemMotion = shouldReduceMotion ? {} : { variants: fadeInUp }

  return (
    <Section animate={false}>
      <motion.div {...containerMotion} className="max-w-2xl">
        <motion.p {...itemMotion} className="text-caption font-medium uppercase tracking-wide text-ink-muted">
          About
        </motion.p>
        <motion.h1 {...itemMotion} className="mt-4 text-display-md sm:text-display-lg">
          Hi, I'm Antonia.
        </motion.h1>
        <motion.p {...itemMotion} className="mt-6 text-lg text-ink-soft">
          Placeholder — a short, personal introduction: who you are, what kind of design work energizes you, and
          what you're looking for next.
        </motion.p>
      </motion.div>
    </Section>
  )
}

export default AboutHero
