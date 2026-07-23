import ResumeSection from './ResumeSection'
import ExperienceCard from './ExperienceCard'
import { experience } from '../data/experience'

function ResumeExperience() {
  return (
    <ResumeSection title="Experience">
      <div className="space-y-6">
        {experience.map((item) => (
          <ExperienceCard key={item.id} {...item} />
        ))}
      </div>
    </ResumeSection>
  )
}

export default ResumeExperience
