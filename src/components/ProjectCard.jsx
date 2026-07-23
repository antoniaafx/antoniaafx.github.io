function ProjectCard({ title, description, image, tags = [] }) {
  return (
    <article className="group rounded-panel border border-line bg-paper p-6 shadow-soft transition-shadow duration-200 hover:shadow-lifted">
      {image && (
        <div className="mb-5 aspect-[4/3] overflow-hidden rounded-control bg-paper-muted">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
      )}
      <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
      {description && <p className="mt-2 text-ink-soft">{description}</p>}
      {tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="rounded-control bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent-dark">
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default ProjectCard
