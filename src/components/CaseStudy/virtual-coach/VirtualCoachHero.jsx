import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Section from '../../Section'
import Badge from './Badge'
import PhoneScreen from './PhoneScreen'
import { fadeInUp, staggerContainer } from '../../../lib/motion'
import { hero, screens } from '../../../data/virtualCoach'

// Home, Levels and Achievements are each one long scroll capture (Home is
// 1771px tall at 390px wide). A standard phone-screen window (9:19.5,
// pinned to the top of the source image with no vertical shift) happens
// to land on exactly the right content for a hero teaser in all three:
// Home's streak/friends/quick-links block, Levels' intro + first two
// levels, Achievements' badge shelf + first few rows — without needing a
// separate cropped asset.
const HERO_CROP = { aspect: '9/19.5', focus: 0 }

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

        <motion.div {...itemMotion} className="mx-auto mt-12 max-w-md">
          {/* Desktop: Home centred and largest, Levels/Achievements
              layered behind it at a restrained rotation — composition
              guidance from the brief, not a literal device-mockup effect.
              Only shown at `lg:` — below that there isn't reliably enough
              width for three screens without crowding the margins. */}
          <div className="relative hidden items-center justify-center py-4 lg:flex">
            <div className="pointer-events-none absolute left-0 top-8 -rotate-6">
              <PhoneScreen screen={screens.levels} size="md" crop={HERO_CROP} />
            </div>
            <div className="relative z-10">
              <PhoneScreen screen={screens.home} size="lg" crop={HERO_CROP} priority />
            </div>
            <div className="pointer-events-none absolute right-0 top-12 rotate-6">
              <PhoneScreen screen={screens.achievements} size="md" crop={HERO_CROP} />
            </div>
          </div>

          {/* Tablet/mobile: Home alone reads clearest at this width — no
              layered siblings competing for a narrower measure — with a
              small supporting pair underneath rather than nothing at all,
              so the gamified-levels/achievements idea still comes through
              on a phone. Two small screens, not three crowded ones. */}
          <div className="flex justify-center lg:hidden">
            <PhoneScreen screen={screens.home} size="lg" crop={HERO_CROP} priority />
          </div>
          <div className="mt-5 flex justify-center gap-4 lg:hidden">
            <PhoneScreen screen={screens.levels} size="sm" crop={HERO_CROP} className="-rotate-3" />
            <PhoneScreen screen={screens.achievements} size="sm" crop={HERO_CROP} className="rotate-3" />
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default VirtualCoachHero
