import { Link } from 'react-router-dom'

function ProjectCard({ id, title, description, heroImage, category }) {
  return (
    <article className="group relative rounded-panel border border-line bg-paper p-6 shadow-soft transition-shadow duration-200 hover:shadow-lifted">
      {heroImage && (
        <div className="mb-5 aspect-[4/3] overflow-hidden rounded-control bg-paper-muted">
          <img
            src={heroImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
      )}
      <h3 className="text-xl">{title}</h3>
      {description && <p className="mt-2 text-ink-soft">{description}</p>}
      {category && (
        <span className="mt-4 inline-block rounded-control bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent-dark">
          {category}
        </span>
      )}
      {/* Stretched-link pattern: the whole card is hoverable (image zoom,
          shadow) so the whole card should be clickable, not just this text —
          a single real anchor whose hit area is expanded via ::after rather
          than wrapping the card in a second, nested link. */}
      <Link
        to={`/projects/${id}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-dark underline-offset-4 hover:underline after:absolute after:inset-0 after:content-['']"
      >
        View case study
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}

export default ProjectCard
