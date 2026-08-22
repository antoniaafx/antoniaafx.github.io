import Section from './Section'
import SectionTitle from './SectionTitle'
import Timeline from './Timeline'
import { experience, education } from '../data/experience'

function DetailList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2 text-ink-soft">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

// Builds each entry's detail content — the responsibilities/achievements/
// courses markup rendered as part of the timeline entry itself. Returns
// null when an entry has nothing to show (e.g. an experience entry with no
// achievements listed), so Timeline skips rendering the details block.
function experienceDetails(item) {
  const hasResponsibilities = item.responsibilities?.length > 0
  const hasAchievements = item.achievements?.length > 0
  if (!hasResponsibilities && !hasAchievements) return null

  return (
    <div className="space-y-4">
      {hasResponsibilities && <DetailList items={item.responsibilities} />}
      {hasAchievements && (
        <div>
          <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">Key achievements</p>
          <div className="mt-2">
            <DetailList items={item.achievements} />
          </div>
        </div>
      )}
    </div>
  )
}

function educationDetails(item) {
  if (!item.courses?.length) return null
  return (
    <p className="text-ink-soft">
      <span className="text-caption font-medium uppercase tracking-wide text-ink-muted">Relevant courses: </span>
      {item.courses.join(' · ')}
    </p>
  )
}

const timelineItems = [
  ...education.map((item) => ({
    sortDate: item.sortDate,
    label: item.degree,
    meta: item.dates,
    description: item.institution,
    details: educationDetails(item),
  })),
  ...experience.map((item) => ({
    sortDate: item.sortDate,
    label: item.title,
    meta: item.dates,
    description: item.role,
    details: experienceDetails(item),
  })),
].sort((a, b) => a.sortDate.localeCompare(b.sortDate))

function ExperienceTimeline() {
  return (
    <Section>
      <SectionTitle title="Experience & education" />
      <div className="mt-10">
        <Timeline items={timelineItems} markerColor="bg-raspberry" />
      </div>
    </Section>
  )
}

export default ExperienceTimeline
