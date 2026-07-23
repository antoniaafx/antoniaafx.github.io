import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/motion'

// Deliberately not the grid ProjectCard used on /projects — a large
// alternating image/content row reads as storytelling, where a grid of
// small cards reads as a generic portfolio template.
function FeaturedProjectCard({ index = 0, id, title, description, heroImage, role, tools = [] }) {
  const reversed = index % 2 === 1

  return (
    <motion.article
      variants={fadeInUp}
      className={`group relative flex flex-col gap-8 lg:items-center lg:gap-16 ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
    >
      <div className="overflow-hidden rounded-panel border border-line bg-paper-muted shadow-soft transition-shadow duration-200 group-hover:shadow-lifted lg:w-1/2">
        <div className="aspect-[4/3]">
          {heroImage ? (
            <img
              src={heroImage}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-caption text-ink-muted">
              Preview coming soon
            </div>
          )}
        </div>
      </div>

      <div className="lg:w-1/2">
        <p className="text-caption font-medium uppercase tracking-wide text-accent-dark">
          Case Study {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mt-3 text-2xl sm:text-3xl">{title}</h3>
        {description && <p className="mt-3 text-ink-soft">{description}</p>}

        {(role || tools.length > 0) && (
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {role && (
              <div>
                <dt className="text-caption font-medium uppercase tracking-wide text-ink-muted">Role</dt>
                <dd className="mt-1 text-sm text-ink-soft">{role}</dd>
              </div>
            )}
            {tools.length > 0 && (
              <div>
                <dt className="text-caption font-medium uppercase tracking-wide text-ink-muted">Tools</dt>
                <dd className="mt-1 text-sm text-ink-soft">{tools.join(' · ')}</dd>
              </div>
            )}
          </dl>
        )}

        {/* Stretched-link pattern — see ProjectCard for the same treatment
            and reasoning: the whole row is hoverable, so it should be
            clickable too, via one real anchor with an expanded hit area. */}
        <Link
          to={`/projects/${id}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-dark underline-offset-4 hover:underline after:absolute after:inset-0 after:content-['']"
        >
          View case study
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </motion.article>
  )
}

export default FeaturedProjectCard
