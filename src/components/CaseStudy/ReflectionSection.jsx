import Section from '../Section'
import SectionTitle from '../SectionTitle'

// `background` defaults to 'default' (Virtual Coach's odd content-section
// count already lands correctly on 'default' here) — Keg & Barrel passes
// 'muted' since its even content-section count would otherwise leave two
// 'default' sections adjacent (this one and the one before it). Optional,
// so every other existing caller renders exactly as before.
function ReflectionSection({ challenges, learned, improve, background = 'default' }) {
  const blocks = [
    challenges && { label: 'Challenges', text: challenges },
    learned && { label: 'What I learned', text: learned },
    improve && { label: "What I'd improve", text: improve },
  ].filter(Boolean)

  if (blocks.length === 0) return null

  return (
    <Section background={background}>
      <SectionTitle title="Reflection" />
      {/* md (768px), not lg (1024px) — this row is always exactly 3 short
          items, so it doesn't need to wait for desktop width to stop
          wasting the whole tablet range as a single stacked column
          (verified live in the case-study audit at 820px). */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
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
