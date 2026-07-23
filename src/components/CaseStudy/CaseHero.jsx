import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Section from '../Section'
import { fadeInUp, staggerContainer } from '../../lib/motion'

// Mount-triggered stagger, same rationale as the homepage Hero — this is
// the first thing visible when the page loads, not something scrolled into.
function CaseHero({ title, summary, role, timeline, tools = [], heroImage }) {
  const shouldReduceMotion = useReducedMotion()
  const containerMotion = shouldReduceMotion
    ? {}
    : { initial: 'hidden', animate: 'visible', variants: staggerContainer(0.12, 0.1) }
  const itemMotion = shouldReduceMotion ? {} : { variants: fadeInUp }

  return (
    <Section animate={false}>
      <motion.div {...containerMotion}>
        <motion.div {...itemMotion}>
          <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-ink">
            <span aria-hidden="true">←</span>
            Back to projects
          </Link>
        </motion.div>

        <motion.p {...itemMotion} className="mt-6 text-caption font-medium uppercase tracking-wide text-accent-dark">
          Case Study
        </motion.p>
        <motion.h1 {...itemMotion} className="mt-3 max-w-3xl text-display-md sm:text-display-lg">
          {title}
        </motion.h1>
        {summary && (
          <motion.p {...itemMotion} className="mt-6 max-w-2xl text-lg text-ink-soft">
            {summary}
          </motion.p>
        )}

        <motion.dl {...itemMotion} className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          {role && (
            <div>
              <dt className="text-caption font-medium uppercase tracking-wide text-ink-muted">Role</dt>
              <dd className="mt-1 text-sm text-ink-soft">{role}</dd>
            </div>
          )}
          {timeline && (
            <div>
              <dt className="text-caption font-medium uppercase tracking-wide text-ink-muted">Timeline</dt>
              <dd className="mt-1 text-sm text-ink-soft">{timeline}</dd>
            </div>
          )}
          {tools.length > 0 && (
            <div>
              <dt className="text-caption font-medium uppercase tracking-wide text-ink-muted">Tools</dt>
              <dd className="mt-1 text-sm text-ink-soft">{tools.join(' · ')}</dd>
            </div>
          )}
        </motion.dl>

        <motion.div {...itemMotion} className="mt-10 overflow-hidden rounded-panel border border-line bg-paper-muted shadow-lifted">
          <div className="aspect-[16/9]">
            {heroImage ? (
              <img src={heroImage} alt={title} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-caption text-ink-muted">
                Hero image coming soon
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default CaseHero
