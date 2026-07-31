import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section'
import SectionTitle from './SectionTitle'
import FeaturedProjectCard from './FeaturedProjectCard'
import { staggerContainer, revealOnce } from '../lib/motion'
import projects from '../data/projects'

// `featured` alone used to be enough to appear here, which meant this —
// the homepage's single strongest showcase — could include projects with
// no actual case study yet (just a "coming soon" placeholder). Requiring
// `overview` too (the marker of a published case study — see this data
// file's own header comment) keeps Home's Featured Work limited to
// finished work, without hiding unfinished projects from the /projects
// grid, which still lists every project regardless of this flag.
const featuredProjects = projects.filter((project) => project.featured && project.overview)

function FeaturedProjects() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section background="ink" animate={false}>
      <SectionTitle
        title="Featured work"
        subtitle="A closer look at how I move from problem to shipped product — research, structure, and interface design."
        onDark
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
