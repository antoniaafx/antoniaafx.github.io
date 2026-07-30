import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/motion'

// Same 5-stage methodology row as the /projects grid's ProjectCard — ties
// the homepage rail to the same "this is a UX investigation" language
// instead of reading as a separate, purely visual showcase.
const PROCESS_STAGES = ['Research', 'Strategy', 'Wireframes', 'UI Design', 'Prototype']

// One physical detail per card, never the same one twice, so three sheets
// pinned to the same workspace don't read as one repeated component.
// Sits on the outer (unclipped) wrapper, outside the paper's own torn
// edge, since a piece of tape or a clip is a thing attaching the sheet to
// the surface behind it — it has to overlap that edge, not stop at it.
// `pointer-events-none` + `aria-hidden`: purely decorative, same as
// every other physical touch already used across the site.
function Attachment({ index }) {
  if (index === 0) {
    return (
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2.5 left-10 z-10 h-5 w-16 -rotate-2 bg-paper-muted shadow-soft sm:left-14"
      />
    )
  }
  if (index === 1) {
    return (
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2.5 right-10 z-10 h-5 w-20 rotate-3 bg-accent-soft/90 shadow-soft sm:right-14"
      />
    )
  }
  // The small binder clip — the same device the old per-image treatment
  // used, reused here as this card's attachment instead of repeating tape
  // a third time.
  return (
    <span aria-hidden="true" className="pointer-events-none absolute -left-2 -top-3 z-10 h-9 w-4 rotate-[12deg]">
      <span className="absolute inset-x-0 top-0 h-9 w-3 rounded-full border-[1.5px] border-ink-muted/70" />
      <span className="absolute left-1 top-1.5 h-6 w-3 rounded-full border-[1.5px] border-ink-muted/70" />
    </span>
  )
}

// Extremely restrained, as specified — one card dead straight, the other
// two barely off it. Index-based, not tied to `reversed`, so rotation
// direction doesn't have to track which side the image lands on.
const SHEET_ROTATION = ['', 'rotate-[1deg]', '-rotate-[1deg]']

// Each case study is now one physical object — a sheet of printed,
// torn-edged paper pinned to the dark workspace behind it — rather than an
// image and a text column floating separately on that background. The
// internal layout (image beside copy, alternating sides) is unchanged;
// what's new is that both now sit inside one shared paper container
// instead of directly on the section background. Since content now sits
// on paper (light) instead of directly on the dark section, it uses the
// site's normal ink-on-paper text colours — the `onDark` treatment this
// component used to need (when it sat straight on the dark section) no
// longer applies and has been removed.
function FeaturedProjectCard({ index = 0, id, title, description, heroImage, role, tools = [] }) {
  const reversed = index % 2 === 1
  const sheetRotation = SHEET_ROTATION[index % SHEET_ROTATION.length]

  return (
    <motion.article variants={fadeInUp} className="group relative">
      {/* The static per-card rotation lives on this plain wrapper, not on
          the motion.article above — Framer Motion takes exclusive control
          of the `transform` property via inline styles on any element it
          animates, which would silently override (not combine with) a
          Tailwind `rotate-*` class on that same element. Rotating this
          inner, non-motion div instead keeps the tilt working without
          touching how the article's own entrance animation is driven. */}
      <div className={`relative ${sheetRotation}`}>
        <Attachment index={index} />

        {/* The paper sheet itself: torn-edge clip-path, the site's paper
            texture (reused as-is from the section-background materiality
            pass, not a new recipe), and a drop-shadow (not box-shadow —
            see the .card-torn-edge comment in index.css for why) standing
            in for the sheet's own thickness resting on the workspace.
            `relative` makes this the positioning context for the
            stretched link below, so the whole sheet is the click target
            — matching exactly what the old invisible-container version
            already did. */}
        <div
          className={`card-torn-edge bg-paper bg-texture-paper relative flex flex-col gap-8 p-6 drop-shadow-[0_10px_24px_rgba(30,24,64,0.16)] sm:p-8 lg:gap-16 lg:p-10 ${
            reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } lg:items-center`}
        >
          <div className="lg:w-1/2">
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
                <span key={stage} className="flex items-center gap-1 text-[0.625rem] font-medium uppercase tracking-wide text-ink-muted">
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink-muted" />
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

            {/* Stretched-link pattern — see ProjectCard for the same
                treatment and reasoning: the whole sheet is hoverable, so
                it should be clickable too, via one real anchor with an
                expanded hit area. `after:z-20` keeps it above the
                attachment device's own z-10 in the small sliver where a
                tape/clip overlaps the sheet's top edge. */}
            <Link
              to={`/projects/${id}`}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-dark underline-offset-4 hover:underline after:absolute after:inset-0 after:z-20 after:content-['']"
            >
              View case study
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default FeaturedProjectCard
