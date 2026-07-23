import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import AboutPreview from '../components/AboutPreview'
import SkillsOverview from '../components/SkillsOverview'
import ContactCta from '../components/ContactCta'

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AboutPreview />
      <SkillsOverview />
      <ContactCta />
    </>
  )
}

export default Home
