import PageMeta from '../components/PageMeta'
import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import AboutPreview from '../components/AboutPreview'
import AboutSkills from '../components/AboutSkills'
import AboutContact from '../components/AboutContact'

// Now the site's primary public page — with About hidden from navigation,
// its two genuinely useful sections (Skills & tools, Contact) are reused
// directly here rather than duplicated: AboutSkills and AboutContact are
// the same components About.jsx still renders on its own (preserved,
// still reachable at /about, just not linked from the nav). Everything
// else About had — My Story, Experience & education, the full biography —
// stays on that page only; this is an introduction, not a second About.
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
      <AboutSkills />
      <AboutContact />
    </>
  )
}

export default Home
