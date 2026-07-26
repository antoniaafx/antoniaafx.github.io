import { motion, useReducedMotion } from 'framer-motion'
import PageMeta from '../components/PageMeta'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'
import { fadeInUp, staggerContainer, revealOnce } from '../lib/motion'
import projects from '../data/projects'

// Mount-triggered fade for the intro (same "first thing on the page"
// treatment as every other page's hero section), then a scroll-triggered
// stagger for the grid itself — same pattern FeaturedProjects already uses
// for its own card list, just applied to this page's grid instead of a
// vertical rail.
function Projects() {
  const shouldReduceMotion = useReducedMotion()
  const introMotion = shouldReduceMotion
    ? {}
    : { initial: 'hidden', animate: 'visible', variants: fadeInUp }

  return (
    <Section animate={false} spacing="hero">
      <PageMeta
        title="Projects"
        description="A working archive of UX/UI design explorations — research, problems, and the interfaces that came from them."
        path="/projects"
      />
      <motion.div {...introMotion}>
        <SectionTitle
          eyebrow="Design Archive"
          title="Projects"
          subtitle="A working record of how I approach a problem — research, structure, and interface design, from first questions to shipped product. Not a gallery of finished screens, but the explorations behind them."
        />
      </motion.div>
      <motion.div
        initial={shouldReduceMotion ? undefined : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'visible'}
        viewport={revealOnce}
        variants={shouldReduceMotion ? undefined : staggerContainer(0.1)}
        className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div key={project.id} variants={shouldReduceMotion ? undefined : fadeInUp}>
            <ProjectCard index={index} {...project} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

export default Projects
