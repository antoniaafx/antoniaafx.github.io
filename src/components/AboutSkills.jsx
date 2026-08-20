import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section'
import SectionTitle from './SectionTitle'
import SkillBadge from './SkillBadge'
import EnvironmentalArtwork from './EnvironmentalArtwork'
import { staggerContainer, fadeInUp, revealOnce } from '../lib/motion'
import { research, design, tools } from '../data/skills'

const GROUPS = [
  { label: 'Research', items: research },
  { label: 'Design', items: design },
  { label: 'Tools', items: tools },
]

function SkillGroup({ label, items }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div>
      <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{label}</p>
      <motion.ul
        initial={shouldReduceMotion ? undefined : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'visible'}
        viewport={revealOnce}
        variants={shouldReduceMotion ? undefined : staggerContainer(0.06)}
        className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3"
      >
        {items.map((item) => (
          <motion.li key={item} variants={fadeInUp}>
            <SkillBadge label={item} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

function AboutSkills() {
  return (
    <Section background="muted" animate={false} artwork={<EnvironmentalArtwork variant="skills" />}>
      <SectionTitle title="Skills & tools" subtitle="What I bring to a design process, end to end." />
      <div className="mt-12 space-y-12">
        {GROUPS.map((group) => (
          <SkillGroup key={group.label} {...group} />
        ))}
      </div>
    </Section>
  )
}

export default AboutSkills
