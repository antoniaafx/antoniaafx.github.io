import Section from './Section'
import SectionTitle from './SectionTitle'

const BLOCKS = [
  {
    label: 'How I approach problems',
    text: 'Placeholder — describe how you break down an ambiguous problem before jumping to solutions.',
  },
  {
    label: 'User-centered mindset',
    text: 'Placeholder — describe how you keep real user needs at the center of your decisions.',
  },
  {
    label: 'Collaboration approach',
    text: 'Placeholder — describe how you work with developers, PMs, or other designers.',
  },
]

function AboutPhilosophy() {
  return (
    <Section>
      <SectionTitle title="Design philosophy" />
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {BLOCKS.map((block) => (
          <div key={block.label} className="rounded-panel border border-line p-6">
            <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{block.label}</p>
            <p className="mt-3 text-ink-soft">{block.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default AboutPhilosophy
