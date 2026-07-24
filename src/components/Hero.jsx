import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section'
import Button from './Button'
import { fadeInUp, staggerContainer } from '../lib/motion'

// Mount-triggered stagger, not Section's default scroll reveal — this is
// the first thing visible on page load, so it should animate in immediately
// rather than waiting for a scroll-into-view trigger.
function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const containerMotion = shouldReduceMotion
    ? {}
    : { initial: 'hidden', animate: 'visible', variants: staggerContainer(0.12, 0.1) }
  const itemMotion = shouldReduceMotion ? {} : { variants: fadeInUp }

  return (
    <Section animate={false} spacing="hero">
      <motion.div {...containerMotion} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.p {...itemMotion} className="text-caption font-medium uppercase tracking-wide text-ink-muted">
            Antonia · UX/UI Designer
          </motion.p>
          <motion.h1 {...itemMotion} className="mt-4 text-display-md sm:text-display-lg">
            I design clear, confident digital products people enjoy using.
          </motion.h1>
          <motion.p {...itemMotion} className="mt-6 max-w-md text-lg text-ink-soft">
            Currently seeking UX/UI internship and junior design roles — I turn ambiguous problems into usable,
            well-crafted interfaces.
          </motion.p>
          <motion.div {...itemMotion} className="mt-8 flex flex-wrap gap-4">
            <Button to="/projects" variant="primary" size="lg">
              View Projects
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Decorative — an abstract wireframe motif rather than a stock
            illustration, built from design tokens only. */}
        <motion.div {...itemMotion} aria-hidden="true" className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-panel border border-line bg-accent-soft sm:block" />
          <div className="relative rounded-panel border border-line bg-paper p-6 shadow-lifted">
            <div className="h-2.5 w-16 rounded-full bg-accent-soft" />
            <div className="mt-5 aspect-[4/3] rounded-control bg-paper-muted" />
            <div className="mt-5 space-y-2">
              <div className="h-2.5 w-3/4 rounded-full bg-line" />
              <div className="h-2.5 w-1/2 rounded-full bg-line" />
            </div>
            <div className="mt-5 h-9 w-28 rounded-control bg-ink" />
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default Hero
