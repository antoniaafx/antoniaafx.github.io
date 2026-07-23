import PageMeta from '../components/PageMeta'
import AboutHero from '../components/AboutHero'
import AboutBackground from '../components/AboutBackground'
import AboutPhilosophy from '../components/AboutPhilosophy'
import AboutSkills from '../components/AboutSkills'
import ExperienceTimeline from '../components/ExperienceTimeline'
import ContactCta from '../components/ContactCta'

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
      <AboutPhilosophy />
      <AboutSkills />
      <ExperienceTimeline />
      <ContactCta />
    </>
  )
}

export default About
