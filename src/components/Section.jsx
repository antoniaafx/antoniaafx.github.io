import { motion, useReducedMotion } from 'framer-motion'
import Container from './Container'
import { fadeInUp, revealOnce } from '../lib/motion'

// Every background variant carries the same underlying idea: one implied
// light source from above, and a wide vignette that only darkens toward
// the outer edges — real content sits well inside that radius everywhere,
// so none of this touches the contrast of anything actually on the page.
// `ink` had this from the previous materiality pass (glow + vignette);
// `default`/`muted` get the same treatment here, at a much lower intensity
// since paper is already near-white and only needs a whisper of it — the
// point is that every section reads as one consistently-lit room instead
// of separate flat colour blocks. Values only, on the same three existing
// keys — no new Section prop, no component touched.
const PAPER_LIGHT =
  'bg-[radial-gradient(130%_70%_at_50%_-10%,rgba(255,255,255,0.55),transparent_50%),radial-gradient(150%_130%_at_50%_60%,transparent_60%,rgba(30,24,64,0.025)_100%)]'
const PAPER_MUTED_LIGHT =
  'bg-[radial-gradient(130%_70%_at_50%_-10%,rgba(255,255,255,0.4),transparent_50%),radial-gradient(150%_130%_at_50%_60%,transparent_60%,rgba(30,24,64,0.035)_100%)]'
// The original two ink layers are untouched from the previous pass — the
// third layer here is new: a faint diagonal sheen (a highlight band, not
// a stronger version of the existing glow/vignette) standing in for a
// matte monitor surface catching light at an angle.
const INK_DEPTH =
  'bg-[radial-gradient(120%_60%_at_50%_0%,rgba(255,255,255,0.05),transparent_55%),radial-gradient(140%_120%_at_50%_50%,transparent_55%,rgba(0,0,0,0.18)_100%),linear-gradient(115deg,rgba(255,255,255,0.035)_0%,transparent_35%)]'

const BACKGROUNDS = {
  default: `bg-paper ${PAPER_LIGHT}`,
  muted: `bg-paper-muted ${PAPER_MUTED_LIGHT}`,
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
