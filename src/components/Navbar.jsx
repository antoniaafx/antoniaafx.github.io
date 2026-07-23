import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Container from './Container'
import { EASE } from '../lib/motion'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

const desktopLinkClasses = ({ isActive }) =>
  `inline-block py-2 text-sm font-medium transition-colors ${isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'}`

const mobileLinkClasses = ({ isActive }) =>
  `block py-2.5 text-base font-medium transition-colors ${isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'}`

function Navbar() {
  const { pathname } = useLocation()
  const shouldReduceMotion = useReducedMotion()
  const [open, setOpen] = useState(false)

  // Five items no longer fit a plain horizontal row below `sm` (measured:
  // zero margin left at ~420px, genuine overflow under ~375px) — below
  // `sm` this collapses to a toggleable list instead of shrinking further.
  // Closed directly from each mobile link's click (not derived from
  // pathname via an Effect or render-time adjustment) — doing it that way
  // raced with AnimatePresence's exit lifecycle and left the panel stuck
  // at opacity:0 while still occupying its full layout height.
  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          <NavLink to="/" className="font-display text-lg font-semibold tracking-tight text-ink">
            Antonia
          </NavLink>

          <ul className="hidden items-center gap-6 sm:flex">
            {NAV_LINKS.map((link) => {
              const isActive = link.to === '/' ? pathname === '/' : pathname.startsWith(link.to)
              return (
                <li key={link.to} className="relative">
                  <NavLink to={link.to} className={desktopLinkClasses} end={link.to === '/'}>
                    {link.label}
                  </NavLink>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-accent"
                      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: EASE }}
                    />
                  )}
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex min-h-11 items-center rounded-control px-3 text-sm font-medium text-ink sm:hidden"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="border-b border-line bg-paper sm:hidden"
          >
            <Container>
              <ul className="flex flex-col py-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <NavLink to={link.to} className={mobileLinkClasses} end={link.to === '/'} onClick={closeMenu}>
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
