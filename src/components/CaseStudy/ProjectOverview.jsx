import Section from '../Section'
import SectionTitle from '../SectionTitle'

// The problem and target users are one narrative beat — "what's wrong"
// immediately followed by "who it's wrong for" — so they now share one
// reading column and a tight gap, both using the same label-then-text
// pattern instead of target users getting its own one-off border device.
// Goals and Responsibilities are a second, separate beat — the quick
// reference facts, not the story — so they sit below a deliberately large
// gap and a single thin rule that marks "the narrative just ended, here's
// the summary." They're genuinely parallel to each other (what I set out
// to do vs. what I was on the hook for), so they stay a two-column
// pairing, but without the bordered-card treatment: a full bordered box
// was the heaviest thing on the page for the least important content,
// which is exactly backwards. Same max-w-3xl as the column above, so the
// whole section shares one right edge instead of a narrow paragraph
// sitting above an unrelated full-width grid.
function ProjectOverview({ problem, goals = [], targetUsers, responsibilities = [] }) {
  const sideBlocks = [
    goals.length > 0 && { label: 'Goals', items: goals },
    responsibilities.length > 0 && { label: 'My responsibilities', items: responsibilities },
  ].filter(Boolean)

  return (
    <Section background="muted">
      <SectionTitle title="Project overview" />

      <div className="mt-12 max-w-3xl">
        {problem && (
          <div>
            <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">The problem</p>
            <p className="mt-3 text-xl text-ink sm:text-2xl">{problem}</p>
          </div>
        )}

        {targetUsers && (
          <div className="mt-6">
            <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">Target users</p>
            <p className="mt-2 font-display text-lg text-ink-soft sm:text-xl">{targetUsers}</p>
          </div>
        )}
      </div>

      {sideBlocks.length > 0 && (
        <div className="mt-16 max-w-3xl border-t border-line pt-10 sm:mt-20">
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {sideBlocks.map((block) => (
              <div key={block.label}>
                <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{block.label}</p>
                <ul className="mt-3 space-y-2">
                  {block.items.map((item, index) => (
                    <li key={index} className="flex gap-2 text-ink-soft">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}

export default ProjectOverview
