import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'
import projects from '../data/projects'

function Projects() {
  return (
    <Section animate={false}>
      <SectionTitle title="Projects" />
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
