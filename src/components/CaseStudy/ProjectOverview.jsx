import Section from '../Section'
import SectionTitle from '../SectionTitle'

function ProjectOverview({ problem, goals = [], targetUsers, responsibilities = [] }) {
  const blocks = [
    goals.length > 0 && { label: 'Goals', items: goals },
    targetUsers && { label: 'Target users', text: targetUsers },
    responsibilities.length > 0 && { label: 'My responsibilities', items: responsibilities },
  ].filter(Boolean)

  return (
    <Section background="muted">
      <SectionTitle title="Project overview" />

      {problem && (
        <div className="mt-8 max-w-3xl">
          <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">The problem</p>
          <p className="mt-3 text-xl text-ink sm:text-2xl">{problem}</p>
        </div>
      )}

      {blocks.length > 0 && (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block) => (
            <div key={block.label} className="rounded-panel border border-line p-6">
              <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{block.label}</p>
              {block.text && <p className="mt-3 text-ink-soft">{block.text}</p>}
              {block.items && (
                <ul className="mt-3 space-y-2">
                  {block.items.map((item, index) => (
                    <li key={index} className="flex gap-2 text-ink-soft">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}

export default ProjectOverview
