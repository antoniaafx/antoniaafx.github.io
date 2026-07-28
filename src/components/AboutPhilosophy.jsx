import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Section from './Section'
import SectionTitle from './SectionTitle'

// `headline` is new — a short, punchy distillation of `text` below, drawn
// near-verbatim from the sentence already doing the real work in each
// paragraph (nothing invented). `text` is the exact same paragraph this
// page already had; it's just no longer shown by default. Showing the
// principle, not explaining it, is the point — recruiters scanning get
// the headline in half a second, anyone curious can still read the rest.
const BLOCKS = [
  {
    label: 'How I approach problems',
    headline: 'Good design starts with a clear problem, not a blank canvas.',
    text: 'I start by making sure I actually understand the problem and the people affected by it before jumping into solutions — asking what users genuinely need, not just what looks good. Good design, to me, starts with a clear problem, not a blank canvas.',
  },
  {
    label: 'Simple, accessible design',
    headline: 'Simple, and built for everyone.',
    text: "I care about keeping interfaces simple and easy to use, and about accessibility not being an afterthought — clear hierarchy, readable typography, and enough contrast and structure that the experience works for as many people as possible.",
  },
  {
    label: 'Collaboration & growth',
    headline: 'Design gets better through feedback, not in isolation.',
    text: "I see design as something that improves through feedback, not something to get perfect alone — I'm comfortable sharing early, imperfect work and iterating on it. I'm early in my career, and I want to keep learning from designers with more experience than me.",
  },
]

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

// Numbered tile kept from the previous version (same SkillBadge-style
// numbering device, same reasoning: three enumerable principles are what
// a grid is for). Each card manages its own open state independently —
// three separate instances of the same expand/collapse pattern used
// elsewhere on this page, with no shared id/state between them, so there's
// nothing for three simultaneous instances to collide on.
function PrincipleCard({ index, label, headline, text }) {
  const shouldReduceMotion = useReducedMotion()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="rounded-panel border border-line p-6">
      <span className="flex h-8 w-8 items-center justify-center rounded-control bg-accent-soft text-caption font-semibold text-accent-dark">
        {String(index + 1).padStart(2, '0')}
      </span>
      <p className="mt-4 text-caption font-medium uppercase tracking-wide text-ink-muted">{label}</p>
      <p className="mt-2 text-lg font-semibold leading-snug text-ink">{headline}</p>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="mt-3 inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-accent-dark underline-offset-4 hover:underline"
      >
        {isOpen ? 'Show less' : 'Show more'}
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
            <p className="mt-3 text-ink-soft">{text}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function AboutPhilosophy() {
  return (
    <Section>
      <SectionTitle eyebrow="How I Design" title="Design philosophy" />
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {BLOCKS.map((block, index) => (
          <PrincipleCard key={block.label} index={index} {...block} />
        ))}
      </div>
    </Section>
  )
}

export default AboutPhilosophy
