import PageMeta from '../components/PageMeta'
import AboutHero from '../components/AboutHero'
import AboutBackground from '../components/AboutBackground'
import AboutPhilosophy from '../components/AboutPhilosophy'
import AboutSkills from '../components/AboutSkills'
import ExperienceTimeline from '../components/ExperienceTimeline'
import AboutExperience from '../components/AboutExperience'
import AboutEducation from '../components/AboutEducation'
import AboutContact from '../components/AboutContact'

// The site's single final destination — the standalone Contact page was
// removed and merged in here (AboutContact, at the end). Ordered as one
// story: Where I started (AboutBackground) → How I design (AboutPhilosophy,
// AboutSkills) → What I learned (ExperienceTimeline, AboutExperience,
// AboutEducation) → Where I'm going (AboutContact — resume download +
// contact details + invitation to reach out). The old /resume URL and
// every "Contact Me" button on the site both land on AboutContact.
function About() {
  return (
    <>
      <PageMeta
        title="About"
        description="Learn about Antonia's background, design philosophy, and how to get in touch."
        path="/about"
      />
      <AboutHero />
      <AboutBackground />
      <AboutPhilosophy />
      <AboutSkills />
      <ExperienceTimeline />
      <AboutExperience />
      <AboutEducation />
      <AboutContact />
    </>
  )
}

export default About
