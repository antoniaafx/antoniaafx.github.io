import Section from './Section'
import SectionTitle from './SectionTitle'
import ExperienceCard from './ExperienceCard'
import { experience } from '../data/experience'

// Moved in from the removed Resume page — the fuller detail (responsibilities,
// achievements) behind ExperienceTimeline's compact chronological view above
// it on this page.
function AboutExperience() {
  return (
    <Section background="muted">
      <SectionTitle title="Experience" />
      <div className="mt-10 space-y-6">
        {experience.map((item) => (
          <ExperienceCard key={item.id} {...item} />
        ))}
      </div>
    </Section>
  )
}

export default AboutExperience
