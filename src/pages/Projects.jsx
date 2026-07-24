import PageMeta from '../components/PageMeta'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'
import projects from '../data/projects'

function Projects() {
  return (
    <Section animate={false} spacing="hero">
      <PageMeta
        title="Projects"
        description="Selected UX/UI case studies covering research, structure, and interface design, from problem to shipped product."
        path="/projects"
      />
      <SectionTitle
        title="Projects"
        subtitle="Selected case studies covering research, structure, and interface design, from problem to shipped product."
      />
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
