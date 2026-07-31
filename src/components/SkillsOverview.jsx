import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section'
import SectionTitle from './SectionTitle'
import SkillBadge from './SkillBadge'
import EnvironmentalArtwork from './EnvironmentalArtwork'
import { staggerContainer, fadeInUp, revealOnce } from '../lib/motion'
import { research, design, tools } from '../data/skills'

// A condensed preview of About's own Skills & tools section — two items
// from each real category (research/design/tools), not a separately
// maintained list. This used to be its own hardcoded array that had
// drifted from About's: two entries ("Responsive Design", "User Testing")
// didn't exist in the canonical data at all, so a recruiter clicking
// between Home and About would see two different skill sets for the same
// person. Deriving from the same source data/skills.js that About already
// uses makes that drift structurally impossible going forward.
const SKILLS = [...research.slice(0, 2), ...design.slice(0, 2), ...tools.slice(0, 2)]

function SkillsOverview() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section background="muted" animate={false} artwork={<EnvironmentalArtwork variant="skills" />}>
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
