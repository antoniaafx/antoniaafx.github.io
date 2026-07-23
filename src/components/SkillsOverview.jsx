import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section'
import SectionTitle from './SectionTitle'
import { staggerContainer, fadeInUp, revealOnce } from '../lib/motion'

const SKILLS = ['Figma', 'UX Research', 'Wireframing', 'Prototyping', 'Responsive Design', 'User Testing']

function SkillsOverview() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section background="muted" animate={false}>
      <SectionTitle title="Skills & tools" subtitle="The core of how I work, from early research to final interface." />
      <motion.ul
        initial={shouldReduceMotion ? undefined : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'visible'}
        viewport={revealOnce}
        variants={shouldReduceMotion ? undefined : staggerContainer(0.08)}
        className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3"
      >
        {SKILLS.map((skill, index) => (
          <motion.li
            key={skill}
            variants={fadeInUp}
            className="rounded-panel border border-line bg-paper p-5 transition-shadow duration-200 hover:shadow-soft"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-control bg-accent-soft text-caption font-semibold text-accent-dark">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="mt-4 font-medium text-ink">{skill}</p>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}

export default SkillsOverview
