import Section from '../Section'
import SectionTitle from '../SectionTitle'

// Goals and Responsibilities are genuinely parallel (both "my side" of the
// brief — what I set out to do, and what I was on the hook for), so they
// stay a card pairing. Target users used to sit in that same grid as a
// third, identical card — pulled out here into its own editorial aside
// instead: it answers a different kind of question ("who is this for,"
// not "what did I do"), and having it break the grid is what keeps this
// section from reading as the exact same component as ReflectionSection
// further down the page — two sections that shouldn't feel
// interchangeable, since one opens the story and the other closes it.
function ProjectOverview({ problem, goals = [], targetUsers, responsibilities = [] }) {
  const sideBlocks = [
    goals.length > 0 && { label: 'Goals', items: goals },
    responsibilities.length > 0 && { label: 'My responsibilities', items: responsibilities },
  ].filter(Boolean)

  return (
    <Section background="muted">
      <SectionTitle title="Project overview" />

      {problem && (
        <div className="mt-10 max-w-3xl">
          <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">The problem</p>
          <p className="mt-3 text-xl text-ink sm:text-2xl">{problem}</p>
        </div>
      )}

      {targetUsers && (
        <div className="mt-8 max-w-3xl border-l-2 border-line pl-6">
          <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">Target users</p>
          <p className="mt-2 font-display text-lg text-ink-soft sm:text-xl">{targetUsers}</p>
        </div>
      )}

      {sideBlocks.length > 0 && (
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {sideBlocks.map((block) => (
            <div key={block.label} className="rounded-panel border border-line p-6">
              <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{block.label}</p>
              <ul className="mt-3 space-y-2">
                {block.items.map((item, index) => (
                  <li key={index} className="flex gap-2 text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-dark" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}

export default ProjectOverview
