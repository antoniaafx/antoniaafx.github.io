function ProjectCard({ title, description, image, tags = [] }) {
  return (
    <article>
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {tags.length > 0 && (
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default ProjectCard
