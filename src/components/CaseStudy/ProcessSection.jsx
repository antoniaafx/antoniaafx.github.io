import Section from '../Section'
import SectionTitle from '../SectionTitle'
import Timeline from '../Timeline'

function ProcessSection({ intro, steps = [] }) {
  return (
    <Section background="muted">
      <SectionTitle title="Design process" subtitle={intro} />
      <div className="mt-12">
        <Timeline items={steps} />
      </div>
    </Section>
  )
}

export default ProcessSection
