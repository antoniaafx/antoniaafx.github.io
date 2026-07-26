import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/motion'

// Same 5-stage methodology row as the /projects grid's ProjectCard — ties
// the homepage rail to the same "this is a UX investigation" language
// instead of reading as a separate, purely visual showcase.
const PROCESS_STAGES = ['Research', 'Strategy', 'Wireframes', 'UI Design', 'Prototype']

// Deliberately not the grid ProjectCard used on /projects — a large
// alternating image/content row reads as storytelling, where a grid of
// small cards reads as a generic portfolio template. The slight rotation,
// paper clip, and gentle vertical offset (alternating with `reversed`) are
// meant to read as "pieces placed on a workspace" — small, singular,
// deliberate touches, not overlap or clutter. Nothing here obscures
// content or breaks the read order; it's all still one image, then one
// text column, same as before.
function FeaturedProjectCard({ index = 0, id, title, description, heroImage, role, tools = [] }) {
  const reversed = index % 2 === 1

  return (
    <motion.article
      variants={fadeInUp}
      className={`group relative flex flex-col gap-8 lg:items-center lg:gap-16 ${
        reversed ? 'lg:flex-row-reverse lg:mt-6' : 'lg:flex-row'
      }`}
    >
      {/* Rotation and the paper clip live on this outer wrapper, not the
          overflow-hidden image box below — a paper clip pinned "on top of"
          the photo needs to sit outside that box's clipped edges.
          `pointer-events-none` on the whole wrapper: it's decorative, same
          as in the original card, so every click (including in the small
          sliver where the clip's negative offset pokes past the image box)
          passes through to the stretched link below, not this wrapper. */}
      <div className={`pointer-events-none relative lg:w-1/2 ${reversed ? 'rotate-1' : '-rotate-1'}`}>
        <span aria-hidden="true" className="absolute -left-2 -top-3 z-10 h-9 w-4 rotate-[12deg]">
          <span className="absolute inset-x-0 top-0 h-9 w-3 rounded-full border-[1.5px] border-ink-muted/70" />
          <span className="absolute left-1 top-1.5 h-6 w-3 rounded-full border-[1.5px] border-ink-muted/70" />
        </span>

        <div className="overflow-hidden rounded-panel border border-line bg-paper-muted shadow-soft transition-shadow duration-200 group-hover:shadow-lifted">
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
      </div>

      <div className="lg:w-1/2">
        <p className="text-caption font-medium uppercase tracking-wide text-accent-dark">
          Case Study {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mt-3 text-2xl sm:text-3xl">{title}</h3>
        {description && <p className="mt-3 text-ink-soft">{description}</p>}

        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
          {PROCESS_STAGES.map((stage) => (
            <span
              key={stage}
              className="flex items-center gap-1 text-[0.625rem] font-medium uppercase tracking-wide text-ink-muted"
            >
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-sage-dark" />
              {stage}
            </span>
          ))}
        </div>

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
            clickable too, via one real anchor with an expanded hit area.
            `after:z-20` makes sure it wins over the paper clip's own z-10,
            including in the small sliver where the clip's negative offset
            extends past the image box's own edge. */}
        <Link
          to={`/projects/${id}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-dark underline-offset-4 hover:underline after:absolute after:inset-0 after:z-20 after:content-['']"
        >
          View case study
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </motion.article>
  )
}

export default FeaturedProjectCard
