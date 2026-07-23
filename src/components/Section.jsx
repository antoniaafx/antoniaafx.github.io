import { motion, useReducedMotion } from 'framer-motion'
import Container from './Container'
import { fadeInUp, revealOnce } from '../lib/motion'

const BACKGROUNDS = {
  default: 'bg-paper',
  muted: 'bg-paper-muted',
  ink: 'bg-ink text-paper',
}

function Section({
  id,
  as = 'section',
  background = 'default',
  containerSize = 'content',
  container = true,
  animate = true,
  className = '',
  children,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion[as]
  const content = container ? <Container size={containerSize}>{children}</Container> : children

  const revealProps =
    animate && !shouldReduceMotion
      ? {
          initial: 'hidden',
          whileInView: 'visible',
          viewport: revealOnce,
          variants: fadeInUp,
        }
      : {}

  return (
    <MotionTag id={id} className={`py-20 sm:py-28 ${BACKGROUNDS[background]} ${className}`} {...revealProps} {...props}>
      {content}
    </MotionTag>
  )
}

export default Section
