import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Section from './Section'
import SectionTitle from './SectionTitle'

// A conversational Q&A, not a notebook spread — the physical-page metaphor
// read as another wall of text with a prop attached to it, so it's gone.
// Every answer here is either distilled from what used to sit in the old
// "UX/UI journey"/"Design interests" paragraphs, or drawn from real facts
// already stated elsewhere on the site (the Air Balloon internship, the
// Keg & Barrel reflection) — nothing invented. The one exception is marked
// as a placeholder rather than guessed at, matching the same convention
// data/projects.js already uses for unfinished content.
const QUESTIONS = [
  {
    question: 'Why UX?',
    answer:
      "It grew out of my degree — I kept getting pulled toward the parts of any project that were about solving problems and making things easier to use. That pull turned into a deliberate focus on design, research, and building interfaces people actually enjoy.",
  },
  {
    question: 'What gets you most excited about a project?',
    answer:
      "Interfaces that are clean and accessible without feeling generic — where being genuinely useful and looking good aren't in competition with each other.",
  },
  {
    question: 'What are you working on right now?',
    answer:
      "Right now it's split between an internship at Air Balloon Digital Studio — research, wireframes, prototypes, the whole process — and building this portfolio itself, end to end.",
  },
  {
    question: "What's something you're still figuring out?",
    answer:
      "Bringing people into the process earlier. On my last project, I only got feedback from the client near the end — next time, I want to share rough, unfinished work sooner instead of waiting for something polished.",
  },
  {
    question: 'Outside of design, what inspires you?',
    answer: 'Placeholder — replace with a real answer.',
  },
]

// Chevron affordance — same mark Timeline.jsx already uses for its own
// expand/collapse toggle, reused here rather than drawn twice.
function Chevron({ isOpen }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-2.5 w-3 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
    >
      <path d="M1 1.5L6 6.5L11 1.5" />
    </svg>
  )
}

// One question/answer pair. Interaction mechanics mirror Timeline.jsx's
// already-proven expand/collapse exactly (local open state, aria-expanded,
// AnimatePresence height/opacity, reduced-motion respected) — a fresh,
// smaller instance of that same pattern, not a shared component, since
// Timeline's numbered circles and connector lines are specific to a
// chronological sequence and don't belong in a Q&A.
function QAItem({ item, isOpen, onToggle }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="border-b border-line py-5 first:pt-0 last:border-b-0 last:pb-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
      >
        <span className="font-display text-lg font-semibold text-ink sm:text-xl">{item.question}</span>
        <Chevron isOpen={isOpen} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// First question open by default — shows visitors how the pattern works
// without requiring an initial click, same reasoning as which item starts
// expanded anywhere else interaction like this is used on the site.
function AboutBackground() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section background="muted">
      <SectionTitle eyebrow="Where I Started" title="My Story" />
      <div className="mt-10 max-w-2xl">
        {QUESTIONS.map((item, index) => (
          <QAItem
            key={item.question}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </Section>
  )
}

export default AboutBackground
