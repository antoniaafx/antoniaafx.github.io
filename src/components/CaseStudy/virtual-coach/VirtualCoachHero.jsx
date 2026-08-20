import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Section from '../../Section'
import Badge from './Badge'
import PhoneScreen from './PhoneScreen'
import { fadeInUp, staggerContainer } from '../../../lib/motion'
import { hero, screens } from '../../../data/virtualCoach'

// Same mount-triggered stagger CaseHero uses (this is the first thing
// visible on load, not scrolled into) — a custom hero rather than reusing
// CaseHero itself, because this project needs a positioning badge, a
// Team field, and a layered 3-screen composition instead of CaseHero's
// single 16:9 desktop screenshot, which doesn't fit a portrait mobile UI.
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

        {/* Home centred and largest; Levels/Achievements layered behind it
            at a restrained rotation — composition guidance from the brief,
            not a literal device-mockup effect. Side screens only appear at
            `lg:` — below that there isn't reliably enough width for three
            screens without crowding the margins (see the tablet/mobile
            verification notes in the implementation report), so tablet and
            mobile get a single, clean Home screen instead of a compressed
            version of the desktop composition. */}
        <motion.div {...itemMotion} className="relative mx-auto mt-12 flex max-w-md items-center justify-center py-4">
          <div className="pointer-events-none absolute left-0 top-8 hidden -rotate-6 lg:block">
            <PhoneScreen screen={screens.levels} size="md" />
          </div>
          <div className="relative z-10">
            <PhoneScreen screen={screens.home} size="lg" priority />
          </div>
          <div className="pointer-events-none absolute right-0 top-12 hidden rotate-6 lg:block">
            <PhoneScreen screen={screens.achievements} size="md" />
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default VirtualCoachHero
