import PageMeta from '../components/PageMeta'
import Section from '../components/Section'
import ResumeHeader from '../components/ResumeHeader'
import ResumeExperience from '../components/ResumeExperience'
import ResumeEducation from '../components/ResumeEducation'
import ResumeSkills from '../components/ResumeSkills'

// Deliberately quieter than the rest of the site — one Section, a single
// fade-in, no mount-stagger. Recruiters scanning a resume want speed, not
// a homepage-style entrance.
function Resume() {
  return (
    <Section containerSize="narrow">
      <PageMeta
        title="Resume"
        description="Antonia's resume — experience, education, and skills as a Junior UX/UI Designer."
        path="/resume"
      />
      <ResumeHeader />
      <div className="mt-12 space-y-12">
        <ResumeExperience />
        <ResumeEducation />
        <ResumeSkills />
      </div>
    </Section>
  )
}

export default Resume
