import Section from './Section'
import SectionTitle from './SectionTitle'
import { education } from '../data/experience'

// Moved in from the removed Resume page — same card content as before, now
// under the standard Section rhythm used across the rest of About instead
// of the Resume page's denser, unpadded ResumeSection wrapper.
function AboutEducation() {
  return (
    <Section>
      <SectionTitle title="Education" />
      <div className="mt-10 space-y-6">
        {education.map((item) => (
          <div key={item.id} className="rounded-panel border border-line p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl">{item.degree}</h3>
              {item.dates && (
                <span className="text-caption font-medium uppercase tracking-wide text-ink-muted">{item.dates}</span>
              )}
            </div>
            {item.institution && <p className="mt-1 text-sm font-medium text-ink-soft">{item.institution}</p>}
            {item.courses?.length > 0 && (
              <p className="mt-4 text-ink-soft">
                <span className="text-caption font-medium uppercase tracking-wide text-ink-muted">
                  Relevant courses:{' '}
                </span>
                {item.courses.join(' · ')}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

export default AboutEducation
