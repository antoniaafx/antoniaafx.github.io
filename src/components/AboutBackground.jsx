import Section from './Section'
import SectionTitle from './SectionTitle'

// Education and Experience used to have their own brief blurbs here — both
// now have their own fuller detail further down the page (as each
// ExperienceTimeline entry's expandable "Show more"), so repeating a short
// version of the same facts here would just be duplication.
const BLOCKS = [
  {
    label: 'UX/UI journey',
    text: "My interest in UX/UI design grew out of my degree — I found myself consistently drawn to the parts of any project that involved solving problems and making digital experiences easier and more intuitive to use. That interest turned into a deliberate focus on design, research, and building interfaces people actually enjoy using.",
  },
  {
    label: 'Design interests',
    text: "I'm especially drawn to interfaces that are clean, accessible, and easy to use without feeling generic — design that's user-centered and visually engaging at the same time, not one at the expense of the other.",
  },
]

// Deliberately not a card grid, unlike every other section on this page —
// this is a personal narrative, not a set of parallel/enumerable items, so
// it reads as continuous prose instead. The left rule (the same device a
// notebook's margin line or a pulled quote would use) is what visually
// marks it as "chapter one" of the story rather than another box.
function AboutBackground() {
  return (
    <Section background="muted">
      <SectionTitle chapter="01" eyebrow="Where I Started" title="My Story" />
      <div className="mt-10 max-w-3xl space-y-8 border-l-2 border-line pl-6 sm:pl-8">
        {BLOCKS.map((block) => (
          <div key={block.label}>
            <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{block.label}</p>
            <p className="mt-2 text-lg leading-relaxed text-ink-soft">{block.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default AboutBackground
