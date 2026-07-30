import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import ImageGallery from './ImageGallery'

// Numbered, connected sequence — shared by the case study Process section
// and the About page's experience/education timeline. Each item supports
// { label, meta, description, image, details }; all fields but `label` are
// optional.
//
// `details` is the one addition Process steps never use (their data has no
// such field, so they render exactly as before) — About's timeline passes
// pre-built responsibilities/achievements/courses markup through it,
// rendered as expand-on-demand rather than always-visible. That's what
// lets the compact chronological view stay the default read, while the
// full resume-style detail is still there for anyone who wants it, instead
// of repeating as a second, separate section further down the page.
function Timeline({ items = [], markerColor = 'bg-ink-muted' }) {
  const shouldReduceMotion = useReducedMotion()
  const [openIndex, setOpenIndex] = useState(null)

  if (items.length === 0) return null

  return (
    <ol className="space-y-10">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <li key={item.label ?? index} className="flex gap-6">
            <div className="flex flex-col items-center">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${markerColor} text-sm font-semibold text-paper`}
              >
                {index + 1}
              </span>
              {index < items.length - 1 && <span className="mt-2 w-px flex-1 bg-line" aria-hidden="true" />}
            </div>
            <div className="flex-1 pb-2">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl sm:text-2xl">{item.label}</h3>
                {item.meta && (
                  <span className="text-caption font-medium uppercase tracking-wide text-ink-muted">{item.meta}</span>
                )}
              </div>
              {item.description && <p className="mt-2 max-w-2xl text-ink-soft">{item.description}</p>}
              {item.image && (
                <div className="mt-5 max-w-2xl">
                  <ImageGallery images={[{ src: item.image, caption: item.label }]} />
                </div>
              )}

              {item.details && (
                <>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="mt-3 inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-accent-dark underline-offset-4 hover:underline"
                  >
                    {isOpen ? 'Show less' : 'Show more'}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 12 8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-2.5 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M1 1.5L6 6.5L11 1.5" />
                    </svg>
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
                        <div className="mt-4 max-w-2xl">{item.details}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default Timeline
