import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section'
import SectionTitle from './SectionTitle'
import { fadeInUp } from '../lib/motion'

// Same four connected sentences, same two artefacts (a notebook page, a
// wireframe/canvas) as every previous pass — only the composition changes
// here, not the content. `gapBefore` is the space between this beat and
// the one above it (empty on the first beat, since the section's own top
// margin already handles that) — a consistent gap for beats that continue
// the same thought, one deliberately larger gap marking the shift into
// the closing reflection.
const BEATS = [
  {
    text: 'It started unexpectedly, somewhere in my degree — I kept getting pulled toward the problem-solving part of every project, more than the visuals.',
    artefact: null,
    gapBefore: '',
  },
  {
    text: 'That noticing became a direction: making things clean and accessible without ever feeling generic, because useful and good-looking were never supposed to compete.',
    artefact: 'notebook',
    side: 'right',
    gapBefore: 'mt-10 sm:mt-14',
  },
  {
    text: 'Right now, that means an internship at Air Balloon Digital Studio, and building this portfolio end to end.',
    artefact: 'canvas',
    side: 'left',
    gapBefore: 'mt-10 sm:mt-14',
  },
  {
    text: 'And it means still learning — mostly, to share rough work earlier instead of waiting until it feels ready.',
    artefact: null,
    gapBefore: 'mt-16 sm:mt-20',
  },
]

const STORY_VIEWPORT = { once: true, amount: 0.6 }

// Same aesthetic as every previous pass (ruled-paper notebook page,
// dashed-block wireframe/canvas, monochrome paper/line/ink tones, one
// piece of tape) — internal padding/line-spacing scaled up slightly to
// stay proportionate now that these sit in a real column instead of a
// small floated corner.
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

// The structural fix: a real second column, the same idea
// FeaturedProjectCard.jsx already uses for its own image+text rows
// (lg:w-1/2 / lg:w-1/2, alternating sides), applied here at 6/5 columns
// out of 12 rather than an even half — text stays at its own comfortable
// max-w-md measure *inside* its column, it doesn't need the whole column
// width, but the row itself now spans close to the section's full
// container the same way a FeaturedProjectCard row does, instead of one
// narrow strip with a small decoration stuck to its edge. Below `lg:` the
// grid collapses to one column and the artefact sits above its text in
// normal flow — the same responsive behaviour FeaturedProjectCard's own
// rows already have.
function Beat({ text, artefact, side, gapBefore, shouldReduceMotion }) {
  const Artefact = artefact ? ARTEFACTS[artefact] : null
  const reversed = side === 'left'

  const textCol = Artefact ? (reversed ? 'lg:col-span-6 lg:col-start-7' : 'lg:col-span-6 lg:col-start-1') : 'lg:col-span-6'
  const artefactCol = reversed ? 'lg:col-span-5 lg:col-start-1' : 'lg:col-span-5 lg:col-start-8'

  return (
    <div className={gapBefore}>
      <div className={Artefact ? 'lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-10' : ''}>
        {Artefact && (
          <motion.div
            initial={shouldReduceMotion ? undefined : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={STORY_VIEWPORT}
            variants={fadeInUp}
            className={`mb-6 w-40 sm:w-48 lg:mb-0 lg:w-56 xl:w-64 ${artefactCol}`}
          >
            <Artefact />
          </motion.div>
        )}
        <motion.p
          initial={shouldReduceMotion ? undefined : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={STORY_VIEWPORT}
          variants={fadeInUp}
          className={`max-w-md text-base leading-relaxed text-ink ${textCol}`}
        >
          {text}
        </motion.p>
      </div>
    </div>
  )
}

function AboutBackground() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section background="muted">
      <SectionTitle eyebrow="Where I Started" title="My Story" />
      <div className="mt-12">
        {BEATS.map((beat, index) => (
          <Beat key={index} {...beat} shouldReduceMotion={shouldReduceMotion} />
        ))}
      </div>
    </Section>
  )
}

export default AboutBackground
