import Section from '../Section'
import SectionTitle from '../SectionTitle'

// The problem stays the section's hero: full width, no container, largest
// text on the page — unchanged from the previous pass. Everything else is
// supporting information about the project (who it's for, what the goals
// were, what I was responsible for), so it now reads as one row of three
// equal, parallel facts rather than target users sitting apart from
// Goals/Responsibilities. Same card recipe already used elsewhere on the
// site for exactly this kind of "quick facts" grouping (ReflectionSection
// uses the identical rounded-panel/border-line/p-6 combination) — reused
// as-is, not a new component. CSS Grid (not flex) is what gives the row
// equal-height cards for free: grid items stretch to the row's tallest
// child by default, so Target users' shorter paragraph still fills the
// same height as Goals' longer list, with its own content settling at the
// top and the extra space below it left as intentional breathing room.
function ProjectOverview({ problem, goals = [], targetUsers, responsibilities = [] }) {
  const infoBlocks = [
    targetUsers && { label: 'Target users', type: 'text', value: targetUsers },
    goals.length > 0 && { label: 'Goals', type: 'list', value: goals },
    responsibilities.length > 0 && { label: 'My responsibilities', type: 'list', value: responsibilities },
  ].filter(Boolean)

  return (
    <Section background="muted">
      <SectionTitle title="Project overview" />

      {problem && (
        <div className="mt-12 max-w-3xl">
          <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">The problem</p>
          <p className="mt-3 text-xl text-ink sm:text-2xl">{problem}</p>
        </div>
      )}

      {infoBlocks.length > 0 && (
        <div className="mt-16 grid gap-6 sm:mt-20 lg:grid-cols-3">
          {infoBlocks.map((block) => (
            <div key={block.label} className="rounded-panel border border-line p-6">
              <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{block.label}</p>
              {block.type === 'text' ? (
                <p className="mt-3 font-display text-lg text-ink-soft sm:text-xl">{block.value}</p>
              ) : (
                <ul className="mt-3 space-y-2">
                  {block.value.map((item, index) => (
                    <li key={index} className="flex gap-2 text-ink-soft">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" aria-hidden="true" />
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
