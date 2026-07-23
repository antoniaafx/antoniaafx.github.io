import Section from './Section'
import SectionTitle from './SectionTitle'

const BLOCKS = [
  {
    label: 'Education',
    text: "Currently pursuing a Bachelor's degree in Communications and Internet Studies at Cyprus University of Technology (2023 – Present).",
  },
  {
    label: 'UX/UI journey',
    text: "My interest in UX/UI design grew out of my degree — I found myself consistently drawn to the parts of any project that involved solving problems and making digital experiences easier and more intuitive to use. That interest turned into a deliberate focus on design, research, and building interfaces people actually enjoy using.",
  },
  {
    label: 'Design interests',
    text: "I'm especially drawn to interfaces that are clean, accessible, and easy to use without feeling generic — design that's user-centered and visually engaging at the same time, not one at the expense of the other.",
  },
  {
    label: 'Experience',
    text: 'I completed my internship at Air Balloon Digital Studio, working on UX research, UI design, wireframing, prototyping, competitor analysis, responsive design, and digital marketing tasks across real client projects. One of my strongest projects from that time is the Keg & Barrel website, where I designed and built a modern, responsive site from research through to the final interface.',
  },
]

function AboutBackground() {
  return (
    <Section background="muted">
      <SectionTitle title="My Story" />
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
