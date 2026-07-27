import Section from './Section'
import SectionTitle from './SectionTitle'

const BLOCKS = [
  {
    label: 'How I approach problems',
    text: 'I start by making sure I actually understand the problem and the people affected by it before jumping into solutions — asking what users genuinely need, not just what looks good. Good design, to me, starts with a clear problem, not a blank canvas.',
  },
  {
    label: 'Simple, accessible design',
    text: "I care about keeping interfaces simple and easy to use, and about accessibility not being an afterthought — clear hierarchy, readable typography, and enough contrast and structure that the experience works for as many people as possible.",
  },
  {
    label: 'Collaboration & growth',
    text: "I see design as something that improves through feedback, not something to get perfect alone — I'm comfortable sharing early, imperfect work and iterating on it. I'm early in my career, and I want to keep learning from designers with more experience than me.",
  },
]

// Numbered tiles reuse SkillBadge's own numbering device (same classes) —
// three parallel, enumerable principles are exactly what a grid is for,
// unlike AboutBackground's narrative just above; the numbers make the
// count ("three ways I think about design") legible at a glance instead
// of visitors having to read all three to realise that's the shape of it.
function AboutPhilosophy() {
  return (
    <Section>
      <SectionTitle eyebrow="How I Design" title="Design philosophy" />
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {BLOCKS.map((block, index) => (
          <div key={block.label} className="rounded-panel border border-line p-6">
            <span className="flex h-8 w-8 items-center justify-center rounded-control bg-accent-soft text-caption font-semibold text-accent-dark">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="mt-4 text-caption font-medium uppercase tracking-wide text-ink-muted">{block.label}</p>
            <p className="mt-3 text-ink-soft">{block.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default AboutPhilosophy
