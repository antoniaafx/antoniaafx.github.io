import { motion, useReducedMotion } from 'framer-motion'
import Container from './Container'
import { fadeInUp, revealOnce } from '../lib/motion'

// The `ink` value carries two background-image layers on top of the flat
// `bg-ink` colour: a soft light-from-above glow (like a monitor's own
// backlight) and a wide vignette that only darkens toward the outer edges
// — real content sits well inside that radius, so this doesn't touch the
// contrast of anything actually on the page, just gives the section
// depth instead of reading as one flat dark rectangle. Values only, on
// the existing `ink` entry — every current `background="ink"` caller
// (Featured Project, both Contact sections) picks this up automatically.
const INK_DEPTH =
  'bg-[radial-gradient(120%_60%_at_50%_0%,rgba(255,255,255,0.05),transparent_55%),radial-gradient(140%_120%_at_50%_50%,transparent_55%,rgba(0,0,0,0.18)_100%)]'

const BACKGROUNDS = {
  default: 'bg-paper',
  muted: 'bg-paper-muted',
  ink: `bg-ink text-paper ${INK_DEPTH}`,
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
  artwork = null,
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
    <MotionTag
      id={id}
      className={`${artwork ? 'relative overflow-hidden' : ''} ${PADDING[spacing]} ${BACKGROUNDS[background]} ${className}`}
      {...revealProps}
      {...props}
    >
      {artwork}
      {/* When artwork is present, content needs its own stacking context
          above it — an absolutely-positioned sibling with z-index:auto
          paints above static in-flow siblings regardless of DOM order
          (a CSS stacking quirk), so without this the artwork could paint
          over the real content instead of behind it. No-op — same
          `content` node as before — when artwork is null, so every
          existing caller renders byte-for-byte identically. */}
      {artwork ? <div className="relative z-10">{content}</div> : content}
    </MotionTag>
  )
}

export default Section
