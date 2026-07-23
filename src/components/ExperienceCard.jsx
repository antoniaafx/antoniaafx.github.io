// Reusable card for one entry in the Resume page's Experience section —
// internship, freelance project, or relevant work.
function ExperienceCard({ title, role, dates, responsibilities = [], achievements = [] }) {
  return (
    <article className="rounded-panel border border-line p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl">{title}</h3>
        {dates && <span className="text-caption font-medium uppercase tracking-wide text-ink-muted">{dates}</span>}
      </div>
      {role && <p className="mt-1 text-sm font-medium text-ink-soft">{role}</p>}

      {responsibilities.length > 0 && (
        <ul className="mt-4 space-y-2">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex gap-2 text-ink-soft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {achievements.length > 0 && (
        <div className="mt-4">
          <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">Key achievements</p>
          <ul className="mt-2 space-y-2">
            {achievements.map((item, index) => (
              <li key={index} className="flex gap-2 text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-dark" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

export default ExperienceCard
