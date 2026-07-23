import PageMeta from '../components/PageMeta'
import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import AboutPreview from '../components/AboutPreview'
import SkillsOverview from '../components/SkillsOverview'
import ContactCta from '../components/ContactCta'

function Home() {
  return (
    <>
      <PageMeta
        description="UX/UI Designer portfolio showcasing product design, UX research, and prototyping work."
        path="/"
      />
      <Hero />
      <FeaturedProjects />
      <AboutPreview />
      <SkillsOverview />
      <ContactCta />
    </>
  )
}

export default Home
