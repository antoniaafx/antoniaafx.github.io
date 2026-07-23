import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

function Projects() {
  return (
    <main>
      <SectionTitle title="Projects" />
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </main>
  )
}

export default Projects
