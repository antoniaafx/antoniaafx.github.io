import Section from './Section'
import SectionTitle from './SectionTitle'
import Timeline from './Timeline'
import { experience, education } from '../data/experience'

const timelineItems = [
  ...education.map((item) => ({ label: item.degree, meta: item.dates, description: item.institution })),
  ...experience.map((item) => ({ label: item.title, meta: item.dates, description: item.role })),
]

function ExperienceTimeline() {
  return (
    <Section>
      <SectionTitle title="Experience & education" subtitle="A snapshot of my design journey so far." />
      <div className="mt-12">
        <Timeline items={timelineItems} />
      </div>
    </Section>
  )
}

export default ExperienceTimeline
