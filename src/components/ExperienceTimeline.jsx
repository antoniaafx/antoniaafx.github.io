import Section from './Section'
import SectionTitle from './SectionTitle'
import Timeline from './Timeline'
import { experience, education } from '../data/experience'

const timelineItems = [
  ...experience.map((item) => ({ label: item.title, meta: item.dates, description: item.role })),
  ...education.map((item) => ({ label: item.degree, meta: item.dates, description: item.institution })),
]

function ExperienceTimeline() {
  return (
    <Section>
      <SectionTitle
        title="Experience & education"
        subtitle="Placeholder milestones — reorder and edit these to match your real history."
      />
      <div className="mt-12">
        <Timeline items={timelineItems} />
      </div>
    </Section>
  )
}

export default ExperienceTimeline
