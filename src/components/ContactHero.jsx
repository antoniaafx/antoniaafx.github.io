import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section'
import { fadeInUp, staggerContainer } from '../lib/motion'

function ContactHero() {
  const shouldReduceMotion = useReducedMotion()
  const containerMotion = shouldReduceMotion
    ? {}
    : { initial: 'hidden', animate: 'visible', variants: staggerContainer(0.12, 0.1) }
  const itemMotion = shouldReduceMotion ? {} : { variants: fadeInUp }

  return (
    <Section animate={false}>
      <motion.div {...containerMotion} className="max-w-2xl">
        <motion.p {...itemMotion} className="text-caption font-medium uppercase tracking-wide text-ink-muted">
          Contact
        </motion.p>
        <motion.h1 {...itemMotion} className="mt-4 text-display-md sm:text-display-lg">
          Let's talk about your team.
        </motion.h1>
        <motion.p {...itemMotion} className="mt-6 text-lg text-ink-soft">
          I'm currently looking for UX/UI internship and junior design opportunities. Reach out directly, or use
          the form below — I'll get back to you as soon as I can.
        </motion.p>
      </motion.div>
    </Section>
  )
}

export default ContactHero
