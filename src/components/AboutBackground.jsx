import Section from './Section'
import SectionTitle from './SectionTitle'

const BLOCKS = [
  { label: 'Education', text: 'Placeholder — your degree, school, and graduation year (or expected).' },
  { label: 'UX/UI journey', text: 'Placeholder — how you got into design and what drew you to UX/UI specifically.' },
  { label: 'Design interests', text: 'Placeholder — the kinds of problems or products you most enjoy designing for.' },
  {
    label: 'Experience',
    text: 'Placeholder — a brief note on relevant experience so far (internships, freelance, coursework).',
  },
]

function AboutBackground() {
  return (
    <Section background="muted">
      <SectionTitle title="Background" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
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

export default AboutBackground
