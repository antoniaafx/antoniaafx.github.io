import { motion, useReducedMotion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import { fadeInUp, staggerContainer, revealOnce } from '../lib/motion'
import projects from '../data/projects'

// Extracted from the standalone Projects page so the homepage's Work
// section and the legacy /projects page render the exact same heading +
// grid from one implementation, not two copies that can drift apart.
// `headingLevel` exists only because the two callers need different
// semantics for the identical-looking heading: an h1 when this is a
// page's own title (Projects.jsx), an h2 when it's one section among
// several on the homepage (Home.jsx) — SectionTitle already supports
// this via its own `as` prop, just threaded through here.
//
// `onDark` and `showSubtitle` exist for the same reason: Home's Work
// section restores the old Featured Work section's dark/grain
// background (see Home.jsx) and drops the supporting paragraph, while
// the standalone /projects page keeps its original paper background and
// subtitle exactly as before — one implementation, two intentionally
// different presentations, not two copies.
//
// Every project gets identical treatment — same card component, same
// grid, same size. No featured/spotlight project: with only a handful of
// projects, singling one out would overstate how "done" the collection
// is, not communicate quality.
function ProjectsGrid({ headingLevel = 'h2', onDark = false, showSubtitle = true }) {
  const shouldReduceMotion = useReducedMotion()
  const introMotion = shouldReduceMotion ? {} : { initial: 'hidden', animate: 'visible', variants: fadeInUp }

  return (
    <>
      <motion.div {...introMotion}>
        <SectionTitle
          as={headingLevel}
          title="Projects"
          subtitle={
            showSubtitle
              ? 'A working record of how I approach a problem — research, structure, and interface design, from first questions to shipped product. Not a gallery of finished screens, but the explorations behind them.'
              : undefined
          }
          onDark={onDark}
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
    </>
  )
}

export default ProjectsGrid
