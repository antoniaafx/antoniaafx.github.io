import Section from './Section'
import SectionTitle from './SectionTitle'
import ExperienceCard from './ExperienceCard'
import { experience } from '../data/experience'

// Moved in from the removed Resume page — the fuller detail (responsibilities,
// achievements) behind ExperienceTimeline's compact chronological view above
// it on this page. `id="resume"` is the redirect target for the old /resume
// URL (see App.jsx and ScrollToTop.jsx) — it's the closest thing on this page
// to "the resume," so that's where a stale bookmark/link should land.
function AboutExperience() {
  return (
    <Section id="resume" background="muted">
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
