import Section from './Section'
import SectionTitle from './SectionTitle'

// Four short, always-visible conversation topics — no accordion, nothing
// hidden behind a click. Trimmed to 2-4 lines each. The fifth topic from
// the previous version ("outside of design") is dropped rather than kept
// as a visible placeholder — there's no real answer for it yet, and
// showing "Placeholder — replace with a real answer" as permanent, always
// visible copy isn't something worth shipping; better to add it once
// there's something real to say.
const TOPICS = [
  {
    question: 'Why UX?',
    answer:
      'It grew out of my degree — I kept getting pulled toward the parts of any project about solving problems and making things easier to use.',
  },
  {
    question: 'What excites me about a project?',
    answer: "Interfaces that are clean and accessible without feeling generic. Useful and good-looking shouldn't be a trade-off.",
  },
  {
    question: "What I'm working on right now",
    answer: 'An internship at Air Balloon Digital Studio, plus building this portfolio end to end.',
  },
  {
    question: "What I'm still figuring out",
    answer: 'Bringing people into the process earlier — sharing rough work sooner instead of waiting for something polished.',
  },
]

// A very small, alternating rotation on two of the four panels only — not
// every one — for a natural "placed" feel rather than a mechanically
// identical grid, kept deliberately restrained. These are plain divs with
// no motion element between them and this rotation, so there's no risk of
// the Framer Motion transform-takeover conflict found (and fixed)
// elsewhere on this site.
const PANEL_ROTATION = ['', 'rotate-[0.4deg]', '', '-rotate-[0.4deg]']

function TopicPanel({ question, answer, rotation, className = '' }) {
  return (
    <div className={`rounded-panel border border-line bg-paper p-6 shadow-soft sm:p-7 ${rotation} ${className}`}>
      <p className="font-display text-lg font-semibold text-ink">{question}</p>
      <p className="mt-2 text-ink-soft">{answer}</p>
    </div>
  )
}

// Uneven column spans (7/5, then 5/7 on the row below) instead of a
// uniform card grid — an editorial rhythm rather than four repeats of the
// same component. Everything here is visible on load; there is nothing to
// click to "get" the section.
function AboutBackground() {
  return (
    <Section background="muted">
      <SectionTitle
        eyebrow="Get to Know Me"
        title="Over coffee"
        subtitle="A few things that would probably come up if we sat down for a coffee."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-12">
        <TopicPanel {...TOPICS[0]} rotation={PANEL_ROTATION[0]} className="sm:col-span-7" />
        <TopicPanel {...TOPICS[1]} rotation={PANEL_ROTATION[1]} className="sm:col-span-5" />
        <TopicPanel {...TOPICS[2]} rotation={PANEL_ROTATION[2]} className="sm:col-span-5" />
        <TopicPanel {...TOPICS[3]} rotation={PANEL_ROTATION[3]} className="sm:col-span-7" />
      </div>
    </Section>
  )
}

export default AboutBackground
