import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section'
import SectionTitle from './SectionTitle'
import { fadeInUp } from '../lib/motion'

// Same four connected sentences, same two artefacts (a notebook page, a
// wireframe/canvas) as the previous pass — this round is layout
// refinement only, not a new concept. `gapBefore` is the space between
// this beat and the one above it (empty on the first beat, since the
// section's own top margin already handles that) — two tiers, not three:
// a consistent gap for beats that continue the same thought, and one
// deliberately larger gap marking the shift into the closing reflection.
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
    gapBefore: 'mt-10 sm:mt-12',
  },
  {
    text: 'Right now, that means an internship at Air Balloon Digital Studio, and building this portfolio end to end.',
    artefact: 'canvas',
    side: 'left',
    gapBefore: 'mt-10 sm:mt-12',
  },
  {
    text: 'And it means still learning — mostly, to share rough work earlier instead of waiting until it feels ready.',
    artefact: null,
    gapBefore: 'mt-16 sm:mt-20',
  },
]

const STORY_VIEWPORT = { once: true, amount: 0.6 }

// Straightened — no rotation on either artefact. A slight tilt read as
// "casually placed" rather than "aligned with the paragraph," which is
// the opposite of what this pass is asking for; a real design artefact
// (a notebook page, a wireframe) sitting square with the text it
// illustrates reads as more intentional, not less authentic. A touch
// larger than the previous pass too (see the w-28/32 sizing on the
// wrapper below) — big enough to read as real content, still small
// enough to stay secondary to the text.

// A notebook page — the exact ruled-paper technique already used for the
// contact form's message field (repeating-linear-gradient on --color-line).
// One small piece of tape, the same device already used on the hero
// portrait and the contact panel — reused, not reinvented.
function NotebookArtefact() {
  return (
    <div aria-hidden="true" className="relative">
      <span className="pointer-events-none absolute -top-1.5 left-1/2 h-3.5 w-11 -translate-x-1/2 rotate-2 bg-line/80 shadow-soft" />
      <div className="rounded-sm border border-line/70 bg-paper p-2 shadow-soft">
        <div
          className="aspect-[4/3]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(var(--color-line) 0px, var(--color-line) 1px, transparent 1px, transparent 12px)',
          }}
        />
      </div>
    </div>
  )
}

// A rough wireframe/canvas — the same placeholder language ProjectCard.jsx
// already uses for a project with no hero image yet (a dashed content
// block plus line bars), with small corner guides so it still reads as
// "a frame on a canvas". Monochromatic — paper/line/ink tones only.
function CanvasArtefact() {
  return (
    <div aria-hidden="true">
      <div className="relative rounded-sm border border-line/70 bg-paper p-2 shadow-soft">
        <span className="absolute left-1 top-1 h-2.5 w-2.5 border-l-2 border-t-2 border-ink-muted/40" />
        <span className="absolute bottom-1 right-1 h-2.5 w-2.5 border-b-2 border-r-2 border-ink-muted/40" />
        <div className="aspect-[4/3] space-y-1.5 p-2">
          <div className="h-1.5 w-1/2 rounded-full bg-line" />
          <div className="h-6 rounded-sm border border-dashed border-line" />
        </div>
      </div>
    </div>
  )
}

const ARTEFACTS = { notebook: NotebookArtefact, canvas: CanvasArtefact }

// The artefact is a floated element inside the same block as its
// paragraph (not a sibling column beside it), so the paragraph's own
// lines wrap around it — text and artefact read as one unit, not two
// things placed near each other. The same gap (mr-6/ml-6) separates text
// from artefact on both sides, and the artefact's own top edge lines up
// with the paragraph's first line (no extra offset margin), so it reads
// as aligned with its specific sentence rather than placed approximately
// near it. Floating is disabled below `sm:` — wrapping a handful of
// words per line around a small image on a narrow phone screen reads as
// cramped, not editorial, so on mobile the artefact sits above the text
// in normal flow instead.
function Beat({ text, artefact, side, gapBefore, shouldReduceMotion }) {
  const Artefact = artefact ? ARTEFACTS[artefact] : null
  const floatClass = side === 'left' ? 'mb-4 sm:float-left sm:mr-6' : 'mb-4 sm:float-right sm:ml-6'

  return (
    <div className={gapBefore}>
      <motion.div
        initial={shouldReduceMotion ? undefined : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'visible'}
        viewport={STORY_VIEWPORT}
        variants={fadeInUp}
        className="max-w-md"
      >
        {Artefact && (
          <div className={`w-28 sm:w-32 ${floatClass}`}>
            <Artefact />
          </div>
        )}
        <p className="text-base leading-relaxed text-ink">{text}</p>
      </motion.div>
    </div>
  )
}

// The story used to have no width constraint of its own beyond each
// paragraph's individual max-w-md — inside the section's full-width
// (max-w-6xl, matching the rest of the site) container, that left most
// of the row empty on the right. `max-w-3xl` here (the same "narrow"
// token Container.jsx already defines, not a new value) frames the whole
// story as one deliberately-sized block — wide enough that the artefacts
// have real room to sit beside their paragraphs without the section
// reading as mostly empty space, narrower than the full site container so
// it doesn't stretch into a bare, unbalanced expanse either.
function AboutBackground() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section background="muted">
      <SectionTitle eyebrow="Where I Started" title="My Story" />
      <div className="mt-12 max-w-3xl">
        {BEATS.map((beat, index) => (
          <Beat key={index} {...beat} shouldReduceMotion={shouldReduceMotion} />
        ))}
      </div>
    </Section>
  )
}

export default AboutBackground
