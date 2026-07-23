import Section from '../Section'
import SectionTitle from '../SectionTitle'

function ReflectionSection({ challenges, learned, improve }) {
  const blocks = [
    challenges && { label: 'Challenges', text: challenges },
    learned && { label: 'What I learned', text: learned },
    improve && { label: "What I'd improve", text: improve },
  ].filter(Boolean)

  if (blocks.length === 0) return null

  return (
    <Section>
      <SectionTitle title="Reflection" />
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {blocks.map((block) => (
          <div key={block.label} className="rounded-panel border border-line p-6">
            <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{block.label}</p>
            <p className="mt-3 text-ink-soft">{block.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default ReflectionSection
