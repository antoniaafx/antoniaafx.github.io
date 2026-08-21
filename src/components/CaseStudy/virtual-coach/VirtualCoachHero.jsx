import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Section from '../../Section'
import Badge from './Badge'
import { fadeInUp, staggerContainer } from '../../../lib/motion'
import { hero } from '../../../data/virtualCoach'

// Same mount-triggered stagger CaseHero uses (this is the first thing
// visible on load, not scrolled into) — a custom hero rather than reusing
// CaseHero itself, because this project needs a positioning badge and a
// Team field CaseHero has no slot for. The hero image itself now follows
// CaseHero's own image-block recipe (rounded-panel/border-line/
// shadow-lifted, full container width) instead of a separate treatment —
// `hero.image` is a single finished three-phone composite, not a live
// screenshot, so there's no portrait-vs-desktop mismatch to design around
// the way the old layered-PhoneScreen composition had to.
function VirtualCoachHero() {
  const shouldReduceMotion = useReducedMotion()
  const containerMotion = shouldReduceMotion
    ? {}
    : { initial: 'hidden', animate: 'visible', variants: staggerContainer(0.12, 0.1) }
  const itemMotion = shouldReduceMotion ? {} : { variants: fadeInUp }

  return (
    <Section animate={false} spacing="hero">
      <motion.div {...containerMotion}>
        <motion.div {...itemMotion}>
          <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-ink">
            <span aria-hidden="true">←</span>
            Back to projects
          </Link>
        </motion.div>

        <motion.div {...itemMotion} className="mt-6">
          <Badge>{hero.positioning}</Badge>
        </motion.div>

        <motion.h1 {...itemMotion} className="mt-4 max-w-3xl text-display-md sm:text-display-lg">
          {hero.title}
        </motion.h1>
        <motion.p {...itemMotion} className="mt-6 max-w-2xl text-lg text-ink-soft">
          {hero.subtitle}
        </motion.p>

        <motion.dl {...itemMotion} className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          <div>
            <dt className="text-caption font-medium uppercase tracking-wide text-ink-muted">Role</dt>
            <dd className="mt-1 text-sm text-ink-soft">{hero.role}</dd>
          </div>
          <div>
            <dt className="text-caption font-medium uppercase tracking-wide text-ink-muted">Focus</dt>
            <dd className="mt-1 text-sm text-ink-soft">{hero.focus}</dd>
          </div>
          <div>
            <dt className="text-caption font-medium uppercase tracking-wide text-ink-muted">Tools</dt>
            <dd className="mt-1 text-sm text-ink-soft">{hero.tools}</dd>
          </div>
          <div>
            <dt className="text-caption font-medium uppercase tracking-wide text-ink-muted">Team</dt>
            <dd className="mt-1 text-sm text-ink-soft">{hero.team}</dd>
          </div>
        </motion.dl>

        {/* Full container width, same as CaseHero's own image block — the
            composite is the hero's dominant visual, not a supporting
            device mockup. `aspect-[3/2]` matches the source image's real
            ratio exactly (1536×1024), so object-cover never has to crop
            into the three phones or the food styling around them. */}
        <motion.div
          {...itemMotion}
          className="mt-10 overflow-hidden rounded-panel border border-line bg-paper-muted shadow-lifted"
        >
          <div className="aspect-[3/2]">
            <img
              src={hero.image}
              alt={hero.imageAlt}
              width={hero.imageWidth}
              height={hero.imageHeight}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default VirtualCoachHero
