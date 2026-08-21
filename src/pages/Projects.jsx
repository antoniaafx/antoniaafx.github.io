import PageMeta from '../components/PageMeta'
import ProjectsGrid from '../components/ProjectsGrid'
import Section from '../components/Section'

// Legacy standalone route — the homepage's "Work" section (id="work" on
// Home.jsx) is the primary path to this same content now, sharing this
// exact heading/grid via ProjectsGrid rather than duplicating it. Kept
// mounted and fully functional for anyone who lands here directly or via
// an existing external link; just no longer linked from primary nav (see
// Navbar.jsx).
function Projects() {
  return (
    <Section animate={false} spacing="hero">
      <PageMeta
        title="Projects"
        description="A working archive of UX/UI design explorations — research, problems, and the interfaces that came from them."
        path="/projects"
      />
      <ProjectsGrid headingLevel="h1" />
    </Section>
  )
}

export default Projects
