import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Container from './Container'
import { EASE } from '../lib/motion'

// The portfolio is now a one-page homepage (Hero → Work → About →
// Contact) with case studies as separate pages — Home/Projects/About as
// standalone nav destinations are gone. `/projects` and `/about` still
// exist as real routes (src/pages/Projects.jsx, src/pages/About.jsx,
// still mounted in App.jsx), just no longer linked from primary nav.
// Every link here always targets a `/#id` on the homepage, from any
// route, per its own comment below.
const NAV_LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
const SECTION_IDS = NAV_LINKS.map((link) => link.id)

const desktopLinkClasses = (isActive) =>
  `inline-block py-2 text-sm font-medium transition-colors ${isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'}`

// Left-edge accent bar marks the active item (a colored index-tab flag,
// not an underline) — `border-transparent` on every other state so the
// border-width itself never changes and nothing shifts horizontally when
// the active section changes. Hover gets a quieter neutral edge in the same
// gutter, distinct from the solid accent used for "you are here".
// py-3 (up from py-2.5) brings the tap target from 44px to 48px — text
// size/line-height are untouched, only the padding grew, so this is a
// larger hit area with no visual size change to the label itself.
const mobileLinkClasses = (isActive) =>
  `block border-l-2 py-3 pl-5 text-base font-medium transition-colors ${
    isActive ? 'border-accent text-ink' : 'border-transparent text-ink-muted hover:border-line hover:text-ink'
  }`

// Lightweight scroll-spy — only active while on "/" (elsewhere these
// section ids don't exist in the DOM, so the observer would just find
// nothing forever). Re-attaches on every route change so navigating back
// to "/" reconnects to the freshly-mounted sections rather than reusing
// stale observer state from a previous visit. No reset-to-null branch for
// `!enabled`: the caller only ever reads `active` alongside its own
// `isHome` check (`isHome && activeSection === link.id`), so a stale value
// sitting unused while disabled is harmless — and skipping that branch
// avoids calling setState synchronously from inside the effect body.
function useActiveSection(ids, enabled) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!enabled) return undefined

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length === 0) return
        const topMost = visible.reduce((a, b) => (a.boundingClientRect.top <= b.boundingClientRect.top ? a : b))
        setActive(topMost.target.id)
      },
      // Counts a section "active" once it's crossed just below the sticky
      // header and before it's scrolled past the upper half of the
      // viewport — reads as "this is what you're currently looking at"
      // rather than triggering the instant a section's top pixel appears.
      { rootMargin: '-96px 0px -55% 0px', threshold: 0 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `ids` is a module-level constant array
  }, [enabled])

  return active
}

function Navbar() {
  const { pathname } = useLocation()
  const shouldReduceMotion = useReducedMotion()
  const [open, setOpen] = useState(false)
  const isHome = pathname === '/'
  const activeSection = useActiveSection(SECTION_IDS, isHome)

  // Five items no longer fit a plain horizontal row below `sm` (measured:
  // zero margin left at ~420px, genuine overflow under ~375px) — below
  // `sm` this collapses to a toggleable list instead of shrinking further.
  // Closed directly from each mobile link's click (not derived from
  // pathname via an Effect or render-time adjustment) — doing it that way
  // raced with AnimatePresence's exit lifecycle and left the panel stuck
  // at opacity:0 while still occupying its full layout height.
  const closeMenu = () => setOpen(false)

  // Standard subscribe-to-an-external-event Effect (not the render-time
  // setState pattern above) — only fires setState from within a real
  // keydown callback, so it doesn't touch AnimatePresence's lifecycle.
  useEffect(() => {
    if (!open) return undefined
    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  // Clicking the wordmark while already home should feel like "take me
  // back to the top," not a full navigation — Link's own default behavior
  // for a `to="/"` that matches the current location doesn't reliably
  // produce that (no location change to react to, so nothing re-runs).
  // Explicitly handled here instead; every other route still gets a real
  // navigation to "/" (ScrollToTop's normal instant-landing behavior for
  // a fresh page).
  function handleWordmarkClick(event) {
    if (!isHome) return
    event.preventDefault()
    window.scrollTo({ top: 0, left: 0, behavior: shouldReduceMotion ? 'instant' : 'smooth' })
  }

  return (
    // The mobile panel below is a sibling of <header>, not a child of it —
    // deliberately. <header> has `backdrop-blur` (backdrop-filter), and a
    // backdrop-filter ancestor establishes a new containing block for
    // `position: fixed` descendants, the same way `transform` does. With
    // the panel nested inside <header>, its "fixed" positioning was being
    // resolved against the header's own ~64px box instead of the
    // viewport — collapsing it to near-zero height and making it
    // invisible however state/animation and every other class computed
    // correctly. Moving it out from under the filtered ancestor is the
    // actual fix; nothing else about the header changes.
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <Container>
          <nav className="flex h-16 items-center justify-between" aria-label="Primary">
            {/* font-medium, not the h1/h2 default of font-bold/font-semibold
                — a deliberate identity element, not a heading; kept
                lighter so it doesn't compete with the hero headline it
                sits above. See the font-weight convention in index.css. */}
            <Link
              to="/"
              onClick={handleWordmarkClick}
              className="font-display text-lg font-medium tracking-tight text-ink"
            >
              Antonia Afx
            </Link>

            {/* Thin hairline dividers between items (not the first) — organised
                sections rather than a plain evenly-gapped row, the closest
                this gets to "notebook dividers": structure and line-work, no
                literal tab/folder shape. The active tick sits on its own
                inline wrapper around just the link text, not the <li> (which
                also carries the divider's left padding) — so it never
                stretches into that empty gutter. */}
            <ul className="hidden items-center sm:flex">
              {NAV_LINKS.map((link, index) => {
                const isActive = isHome && activeSection === link.id
                return (
                  <li key={link.id} className={index > 0 ? 'ml-6 border-l border-line pl-6' : ''}>
                    <span className="relative inline-block">
                      <Link to={`/#${link.id}`} className={desktopLinkClasses(isActive)} aria-current={isActive ? 'true' : undefined}>
                        {link.label}
                      </Link>
                      {isActive && (
                        <motion.span
                          aria-hidden="true"
                          layoutId="nav-active-tick"
                          className="absolute inset-x-0 -bottom-px h-px bg-accent"
                          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: EASE }}
                        />
                      )}
                    </span>
                  </li>
                )
              })}
            </ul>

            {/* Icon-only now that the panel below is a full-screen overlay
                rather than a text dropdown — "Menu"/"Close" as visible copy
                only made sense next to a small inline panel. The three bars
                morph into an X in place (translate + rotate on each bar,
                transform-only so nothing reflows) rather than swapping to a
                separate icon, so the toggle itself reads as one continuous
                object across the state change. */}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative z-50 inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-control text-ink sm:hidden"
            >
              <span aria-hidden="true" className="relative block h-4 w-5">
                <motion.span
                  className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current"
                  animate={open ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.25, ease: EASE }}
                />
                <motion.span
                  className="absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current"
                  animate={{ opacity: open ? 0 : 1 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.15, ease: EASE }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current"
                  animate={open ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.25, ease: EASE }}
                />
              </span>
            </button>
          </nav>
        </Container>
      </header>

      {/* Full-screen panel, not a dropdown — fills every pixel below the
          sticky header (which stays put, with the toggle now reading as a
          close X) rather than a partial-height overlay. Slides in/out from
          the same edge as the toggle it opens from, transform-only (`x`)
          so the animation stays smooth without touching layout. A sibling
          of <header>, deliberately — see the comment above. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={shouldReduceMotion ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={shouldReduceMotion ? undefined : { x: '100%' }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-paper sm:hidden"
          >
            <Container>
              <ul className="flex flex-col pb-3 pt-4">
                {NAV_LINKS.map((link, index) => {
                  const isActive = isHome && activeSection === link.id
                  return (
                    <li key={link.id} className={index > 0 ? 'border-t border-line' : ''}>
                      <Link
                        to={`/#${link.id}`}
                        className={mobileLinkClasses(isActive)}
                        aria-current={isActive ? 'true' : undefined}
                        onClick={closeMenu}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
