import { Link } from 'react-router-dom'

// Same 5-stage methodology on every card — a consistent "how I work" badge
// row, not a per-project claim about which stages were actually documented
// for that specific project (several of these cards don't have a full case
// study yet, so nothing here asserts project-specific facts).
const PROCESS_STAGES = ['Research', 'Strategy', 'Wireframes', 'UI Design', 'Prototype']

function ProjectCard({ index = 0, id, title, description, problemStatement, heroImage, category }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <article className="group relative rounded-panel border border-line bg-paper p-6 shadow-soft transition-shadow duration-200 hover:shadow-lifted">
      {/* Corner brackets — the same "selected frame" chrome as the hero
          laptop screen, carried into the grid so the whole page reads as
          one workspace, not a hero gimmick. */}
      <span aria-hidden="true" className="absolute left-3 top-3 h-2.5 w-2.5 border-l-2 border-t-2 border-line" />
      <span aria-hidden="true" className="absolute bottom-3 right-3 h-2.5 w-2.5 border-b-2 border-r-2 border-line" />

      {heroImage ? (
        <div className="mb-5 aspect-[4/3] overflow-hidden rounded-control bg-paper-muted">
          <img
            src={heroImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
      ) : (
        // No photo yet — a loose wireframe sketch instead of a blank box,
        // reading as "still being explored" rather than a missing image.
        <div
          aria-hidden="true"
          className="mb-5 flex aspect-[4/3] flex-col justify-center gap-2 rounded-control border border-line bg-paper-muted p-4"
        >
          <span className="h-1.5 w-2/3 rounded-full bg-line" />
          <span className="h-1.5 w-1/2 rounded-full bg-line" />
          <span className="mt-2 h-10 rounded-control border border-dashed border-line" />
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <span className="font-display text-2xl font-semibold text-line">
          <span className="sr-only">Project </span>
          {number}
        </span>
        {category && (
          <span className="mt-1 inline-block rounded-control bg-sage px-2.5 py-1 text-xs font-medium text-sage-dark">
            {category}
          </span>
        )}
      </div>

      <h3 className="mt-3 text-xl">{title}</h3>
      {(problemStatement || description) && (
        <p className="mt-2 text-ink-soft">{problemStatement || description}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
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

      {/* Stretched-link pattern: the whole card is hoverable (image zoom,
          shadow) so the whole card should be clickable, not just this text —
          a single real anchor whose hit area is expanded via ::after rather
          than wrapping the card in a second, nested link. */}
      <Link
        to={`/projects/${id}`}
        className="mt-5 flex w-fit items-center gap-1.5 text-sm font-medium text-accent-dark underline-offset-4 hover:underline after:absolute after:inset-0 after:content-['']"
      >
        View case study
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}

export default ProjectCard
