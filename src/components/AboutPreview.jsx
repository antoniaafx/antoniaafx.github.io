import { Link } from 'react-router-dom'
import Section from './Section'
import SectionTitle from './SectionTitle'

function AboutPreview() {
  return (
    <Section containerSize="narrow">
      <SectionTitle title="A little about me" />
      <p className="mt-6 text-lg text-ink-soft">
        I'm a UX/UI designer focused on turning ambiguous problems into clear, usable interfaces. I care as much
        about why a decision was made as how the final screen looks.
      </p>
      <p className="mt-4 text-lg text-ink-soft">
        My process pairs research-driven decision-making with close attention to visual craft — from early
        wireframes and user flows through to polished, accessible interfaces.
      </p>
      <Link
        to="/about"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-dark underline-offset-4 hover:underline"
      >
        Learn more about me
        <span aria-hidden="true">→</span>
      </Link>
    </Section>
  )
}

export default AboutPreview
