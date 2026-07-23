import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section'
import SectionTitle from './SectionTitle'
import FeaturedProjectCard from './FeaturedProjectCard'
import { staggerContainer, revealOnce } from '../lib/motion'
import projects from '../data/projects'

const featuredProjects = projects.filter((project) => project.featured)

function FeaturedProjects() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section background="muted" animate={false}>
      <SectionTitle
        title="Featured work"
        subtitle="A closer look at how I move from problem to shipped product — research, structure, and interface design."
      />
      <motion.div
        initial={shouldReduceMotion ? undefined : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'visible'}
        viewport={revealOnce}
        variants={shouldReduceMotion ? undefined : staggerContainer(0.15)}
        className="mt-14 flex flex-col gap-16 sm:gap-20"
      >
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard key={project.id} index={index} {...project} />
        ))}
      </motion.div>
    </Section>
  )
}

export default FeaturedProjects
