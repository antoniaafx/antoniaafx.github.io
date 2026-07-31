import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Section from './Section'
import SectionTitle from './SectionTitle'
import { fadeInUp } from '../lib/motion'

// Content is unchanged from the previous pass — same four sentences, same
// two artefacts, same pairing and order. Only how this is presented
// changes in this pass, not what it says.
const BEATS = [
  {
    text: 'It started unexpectedly, somewhere in my degree — I kept getting pulled toward the problem-solving part of every project, more than the visuals.',
    artefact: null,
  },
  {
    text: 'That noticing became a direction: making things clean and accessible without ever feeling generic, because useful and good-looking were never supposed to compete.',
    artefact: 'notebook',
    side: 'right',
  },
  {
    text: 'Right now, that means an internship at Air Balloon Digital Studio, and building this portfolio end to end.',
    artefact: 'canvas',
    side: 'left',
  },
  {
    text: "And it means still learning — mostly, to share rough work earlier instead of waiting until it feels ready.",
    artefact: null,
  },
]

const STORY_VIEWPORT = { once: true, amount: 0.6 }

// Unchanged — same ruled-notebook and wireframe-canvas illustrations as
// the previous pass.
function NotebookArtefact() {
  return (
    <div aria-hidden="true" className="relative">
      <span className="pointer-events-none absolute -top-2 left-1/2 h-4 w-14 -translate-x-1/2 rotate-2 bg-line/80 shadow-soft" />
      <div className="rounded-sm border border-line/70 bg-paper p-3 shadow-soft">
        <div
          className="aspect-[4/3]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(var(--color-line) 0px, var(--color-line) 1px, transparent 1px, transparent 18px)',
          }}
        />
      </div>
    </div>
  )
}

function CanvasArtefact() {
  return (
    <div aria-hidden="true">
      <div className="relative rounded-sm border border-line/70 bg-paper p-3 shadow-soft">
        <span className="absolute left-1.5 top-1.5 h-3 w-3 border-l-2 border-t-2 border-ink-muted/40" />
        <span className="absolute bottom-1.5 right-1.5 h-3 w-3 border-b-2 border-r-2 border-ink-muted/40" />
        <div className="aspect-[4/3] space-y-2 p-3">
          <div className="h-2 w-1/2 rounded-full bg-line" />
          <div className="h-9 rounded-sm border border-dashed border-line" />
        </div>
      </div>
    </div>
  )
}

const ARTEFACTS = { notebook: NotebookArtefact, canvas: CanvasArtefact }

// Same paper this section already borrows compositionally from
// FeaturedProjectCard, now borrowed visually too: the one shared
// torn-edge clip-path (index.css's .card-torn-edge, not a new tear),
// the same paper grain texture, and a drop-shadow rather than a
// box-shadow for the same reason FeaturedProjectCard uses one — a
// box-shadow ignores clip-path entirely and would sit as a plain
// rectangle behind the torn silhouette. One piece of tape, reusing the
// exact device/colour FeaturedProjectCard's first card already uses,
// so this doesn't introduce a new physical idiom, just the site's
// existing one.
const PAPER_CLASS =
  'card-torn-edge bg-paper bg-texture-paper relative -rotate-[0.4deg] drop-shadow-[0_10px_24px_rgba(30,24,64,0.16)]'

function PaperTape() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -top-2.5 left-1/2 z-10 h-5 w-16 -translate-x-1/2 -rotate-2 bg-paper-muted shadow-soft"
    />
  )
}

// One fixed "stage" every beat sits inside, centred in the paper's own
// padded content area — not the 12-column, near-full-width grid the
// illustrated beats used to stretch across while text-only beats sat in a
// much narrower, differently-centred column. Same max-w-3xl measure
// already used for the site's other "quiet reference" columns (Project
// Overview, Research), so every beat now shares one left/right edge and
// one horizontal centre, regardless of whether it's a single reflection
// or an illustration+text pair.
const STAGE_CLASS = 'mx-auto w-full max-w-3xl'

function BeatContent({ beat }) {
  const Artefact = beat.artefact ? ARTEFACTS[beat.artefact] : null
  const reversed = beat.side === 'left'

  if (!Artefact) {
    return (
      <div className={STAGE_CLASS}>
        <p className="mx-auto max-w-md text-center text-base leading-relaxed text-ink">{beat.text}</p>
      </div>
    )
  }

  // A true two-column grid (not a 12-column span) so the gap between the
  // two columns — the "midpoint" between illustration and text — always
  // lands at the stage's own centre, which is the paper's centre. Only
  // `order` changes with `side`; both columns keep the same width, gap,
  // and vertical centring either way, so left-illustration and
  // right-illustration beats read as the same layout mirrored, not two
  // different compositions.
  return (
    <div className={`${STAGE_CLASS} grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10`}>
      <div className={`mx-auto w-40 sm:w-48 lg:w-64 xl:w-72 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
        <Artefact />
      </div>
      <p
        className={`mx-auto max-w-md text-center text-base leading-relaxed text-ink lg:mx-0 lg:text-left ${
          reversed ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        {beat.text}
      </p>
    </div>
  )
}

// The static reading of the page — every beat stacked in normal document
// flow inside the paper, each fading in on its own as it scrolls into
// view. Used whenever the pinned/crossfade interaction below is switched
// off: below `lg:` (a tall pinned section is hard to size reliably
// against a mobile browser's own collapsing address-bar viewport, and
// there's much less benefit to it on a screen this narrow anyway), and
// under reduced-motion (no pin, no scroll-linked movement at all).
function StaticStory({ shouldReduceMotion }) {
  return (
    <div className={`${PAPER_CLASS} p-8 sm:p-12 lg:p-16`}>
      <PaperTape />
      <div className="space-y-10 sm:space-y-12">
        {BEATS.map((beat, index) => (
          <motion.div
            key={index}
            initial={shouldReduceMotion ? undefined : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={STORY_VIEWPORT}
            variants={fadeInUp}
          >
            <BeatContent beat={beat} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// One beat at a time, in the same spot on the same page, advancing as
// the reader scrolls — "one page, content progressing across it," not a
// new sheet per idea. `total` slices scroll progress into one window per
// beat; each window fades its beat in, holds it, then fades it out
// (the first beat starts already visible, the last stays visible through
// the end instead of fading right before the section unpins).
function ScrollBeat({ beat, index, total, scrollYProgress }) {
  const segment = 1 / total
  const start = index * segment
  const end = start + segment
  const settle = start + segment * 0.22
  const hold = end - segment * 0.22
  const isFirst = index === 0
  const isLast = index === total - 1

  const opacity = useTransform(
    scrollYProgress,
    [start, settle, hold, end],
    isFirst ? [1, 1, 1, 0] : isLast ? [0, 1, 1, 1] : [0, 1, 1, 0]
  )
  const y = useTransform(
    scrollYProgress,
    [start, settle, hold, end],
    isFirst ? [0, 0, 0, -14] : isLast ? [14, 0, 0, 0] : [14, 0, 0, -14]
  )

  // The fade above is a soft, continuous signal — during its own transition
  // a beat spends real time at partial opacity, which is exactly the
  // window in which it can still be read. Nothing was previously stopping
  // two beats from both sitting at a legible partial opacity at once (or
  // a paused/screenshotted scroll from catching that moment). `visibility`
  // and `zIndex` add a hard, binary gate on top of the same fade: outside
  // a beat's own window it is not just faint, it is fully removed from
  // paint. The gate's edges line up exactly with where opacity has already
  // reached 0, so it never clips the fade itself — it only guarantees that
  // whatever the fade is doing, at most one beat is ever paintable.
  const windowStart = isFirst ? Number.NEGATIVE_INFINITY : start
  const windowEnd = isLast ? Number.POSITIVE_INFINITY : end
  const isActive = (v) => v >= windowStart && v <= windowEnd
  const visibility = useTransform(scrollYProgress, (v) => (isActive(v) ? 'visible' : 'hidden'))
  const zIndex = useTransform(scrollYProgress, (v) => (isActive(v) ? 1 : 0))

  return (
    <motion.div
      style={{ opacity, y, visibility, zIndex }}
      className="pointer-events-none absolute inset-0 flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-16"
    >
      <BeatContent beat={beat} />
    </motion.div>
  )
}

function PinnedStory({ scrollYProgress }) {
  return (
    <div className={`${PAPER_CLASS} relative h-[68vh] overflow-hidden`}>
      <PaperTape />
      {BEATS.map((beat, index) => (
        <ScrollBeat key={index} beat={beat} index={index} total={BEATS.length} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  )
}

// Desktop-and-up only — see StaticStory's comment for why. Checked via a
// real media query (not a Tailwind class toggle) because which behaviour
// mounts changes which hooks/interaction actually run, not just how
// something is styled. The lazy useState initializer is a best-effort
// synchronous guess for the very first paint; the effect re-reads the
// real value immediately after mount and corrects it if that guess was
// ever wrong, instead of relying solely on a future 'change' event that
// only fires if the viewport later crosses the breakpoint.
function useIsDesktop() {
  const query = '(min-width: 1024px)'
  const [matches, setMatches] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches)

  useEffect(() => {
    const mql = window.matchMedia(query)
    setMatches(mql.matches)
    const onChange = () => setMatches(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return matches
}

function AboutBackground() {
  const shouldReduceMotion = useReducedMotion()
  const isDesktop = useIsDesktop()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const usePin = isDesktop && !shouldReduceMotion

  return (
    <Section background="muted">
      <SectionTitle eyebrow="Where I Started" title="My Story" />
      <div ref={containerRef} className={`mt-12 ${usePin ? 'lg:h-[240vh]' : ''}`}>
        {usePin ? (
          <div className="lg:sticky lg:top-20">
            <PinnedStory scrollYProgress={scrollYProgress} />
          </div>
        ) : (
          <StaticStory shouldReduceMotion={shouldReduceMotion} />
        )}
      </div>
    </Section>
  )
}

export default AboutBackground
