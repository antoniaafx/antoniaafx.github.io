import { NavLink, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Container from './Container'
import { EASE } from '../lib/motion'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const linkClasses = ({ isActive }) =>
  `inline-block py-2 text-sm font-medium transition-colors ${isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'}`

function Navbar() {
  const { pathname } = useLocation()
  const shouldReduceMotion = useReducedMotion()

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          <NavLink to="/" className="font-display text-lg font-semibold tracking-tight text-ink">
            Antonia
          </NavLink>
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = link.to === '/' ? pathname === '/' : pathname.startsWith(link.to)
              return (
                <li key={link.to} className="relative">
                  <NavLink to={link.to} className={linkClasses} end={link.to === '/'}>
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
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
