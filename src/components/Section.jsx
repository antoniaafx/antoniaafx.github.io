import { motion, useReducedMotion } from 'framer-motion'
import Container from './Container'
import { fadeInUp, revealOnce } from '../lib/motion'

const BACKGROUNDS = {
  default: 'bg-paper',
  muted: 'bg-paper-muted',
  ink: 'bg-ink text-paper',
}

// 'default' is the normal inter-section rhythm. 'hero' is for whichever
// section sits first on a page, directly under the sticky nav — the same
// bottom padding (still needs to separate from whatever follows), but a
// reduced top (the nav's own height/border already provides separation, so
// a full section's worth of top padding on top of that reads as an
// oversized gap rather than intentional breathing room).
const PADDING = {
  default: 'py-20 sm:py-28',
  hero: 'pt-12 sm:pt-16 pb-20 sm:pb-28',
}

function Section({
  id,
  as = 'section',
  background = 'default',
  containerSize = 'content',
  container = true,
  animate = true,
  spacing = 'default',
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
    <MotionTag id={id} className={`${PADDING[spacing]} ${BACKGROUNDS[background]} ${className}`} {...revealProps} {...props}>
      {content}
    </MotionTag>
  )
}

export default Section
