import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section'
import Button from './Button'
import { fadeInUp, staggerContainer } from '../lib/motion'
import profilePhoto from '../assets/images/antonia-profile.jpg'

// Mount-triggered stagger, same pattern as the homepage Hero and CaseHero.
// Two-column text + visual layout mirrors the homepage Hero exactly, just
// with a real portrait in place of the decorative graphic.
function AboutHero() {
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
            About
          </motion.p>
          <motion.h1 {...itemMotion} className="mt-4 text-display-md sm:text-display-lg">
            Hi, I'm Antonia.
          </motion.h1>
          <motion.p {...itemMotion} className="mt-2 text-xl font-medium text-ink">
            Junior UX/UI Designer
          </motion.p>
          <motion.p {...itemMotion} className="mt-6 max-w-md text-lg text-ink-soft">
            I'm currently studying Communications and Internet Studies at Cyprus University of Technology. I care
            about solving real problems and building digital experiences that feel intuitive and easy to use.
          </motion.p>

          <motion.div {...itemMotion} className="mt-8">
            <Button href="/Antonia_Afxentiou_CV.pdf" download variant="secondary" size="md">
              Download Resume
            </Button>
          </motion.div>
        </div>

        {/* aspect-[4/5], not the site's usual aspect-[3/4] portrait crop —
            a touch shorter so the image no longer towers over the text
            column beside it at this width. */}
        <motion.div {...itemMotion} className="relative mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-panel border border-line shadow-lifted">
            <div className="aspect-[4/5]">
              <img
                src={profilePhoto}
                alt="Portrait of Antonia, Junior UX/UI Designer"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default AboutHero
