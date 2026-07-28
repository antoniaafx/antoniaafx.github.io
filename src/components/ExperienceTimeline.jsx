import Section from './Section'
import SectionTitle from './SectionTitle'
import Timeline from './Timeline'
import EnvironmentalArtwork from './EnvironmentalArtwork'
import { experience, education } from '../data/experience'

function DetailList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2 text-ink-soft">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-dark" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

// Builds each entry's expandable content — the exact same responsibilities/
// achievements/courses markup that used to live in the separate, always-
// visible AboutExperience and AboutEducation sections, just relocated here
// as the timeline's own "Show more" detail instead of repeating the same
// facts a second time further down the page. Returns null when an entry
// has nothing to expand into, so Timeline correctly skips the toggle for
// it (e.g. an experience entry with no achievements listed).
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
    label: item.degree,
    meta: item.dates,
    description: item.institution,
    details: educationDetails(item),
  })),
  ...experience.map((item) => ({
    label: item.title,
    meta: item.dates,
    description: item.role,
    details: experienceDetails(item),
  })),
]

function ExperienceTimeline() {
  return (
    <Section artwork={<EnvironmentalArtwork variant="timeline" />}>
      <SectionTitle
        eyebrow="What I Learned"
        title="Experience & education"
        subtitle="A snapshot of my design journey so far — expand any entry for the full detail."
      />
      <div className="mt-12">
        <Timeline items={timelineItems} />
      </div>
    </Section>
  )
}

export default ExperienceTimeline
