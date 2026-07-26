import PageMeta from '../components/PageMeta'
import AboutHero from '../components/AboutHero'
import AboutBackground from '../components/AboutBackground'
import ExperienceTimeline from '../components/ExperienceTimeline'
import AboutExperience from '../components/AboutExperience'
import AboutEducation from '../components/AboutEducation'
import AboutPhilosophy from '../components/AboutPhilosophy'
import AboutSkills from '../components/AboutSkills'
import ContactCta from '../components/ContactCta'

// Ordered as a four-stage journey — Where I started (AboutBackground) → What
// I learned (ExperienceTimeline, then the fuller Experience/Education detail
// moved in from the removed Resume page) → How I design (AboutPhilosophy,
// AboutSkills) → Where I'm going (ContactCta) — per DESIGN_DIRECTION.md.
// Now the complete personal profile page: the standalone /resume route
// redirects to /about#resume (see App.jsx).
function About() {
  return (
    <>
      <PageMeta
        title="About"
        description="Learn about Antonia's background, design philosophy, and journey into UX/UI design."
        path="/about"
      />
      <AboutHero />
      <AboutBackground />
      <ExperienceTimeline />
      <AboutExperience />
      <AboutEducation />
      <AboutPhilosophy />
      <AboutSkills />
      <ContactCta eyebrow="Where I'm Going" />
    </>
  )
}

export default About
