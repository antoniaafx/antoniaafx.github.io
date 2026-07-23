import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section'
import SectionTitle from './SectionTitle'
import SkillBadge from './SkillBadge'
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
          <motion.li key={skill} variants={fadeInUp}>
            <SkillBadge index={index} label={skill} />
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}

export default SkillsOverview
