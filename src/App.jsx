import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Projects from './pages/Projects'
import CaseStudy from './pages/CaseStudy'
import About from './pages/About'
import { pageTransition } from './lib/motion'

function App() {
  const location = useLocation()
  const shouldReduceMotion = useReducedMotion()

  // The standalone Resume and Contact pages were both removed — their
  // content lives in AboutContact, which About.jsx still renders (that
  // page is preserved, just hidden from primary navigation) and which
  // Home.jsx now also renders directly as its own closing section. This
  // redirects to Home's copy, the one a visitor actually reaches through
  // the current navigation. Redirected here, before the animated route
  // tree below, rather than as a normal <Route element={<Navigate .../>}>
  // entry: that would still mount and key into AnimatePresence for a
  // "page" that never renders anything, playing a full exit/enter
  // transition cycle for a blank flash before landing on Home. This
  // redirects instantly instead.
  if (location.pathname === '/resume' || location.pathname === '/contact') {
    return <Navigate to="/#resume" replace />
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-control focus-visible:bg-ink focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-paper"
      >
        Skip to content
      </a>
      <Navbar />
      {/* Note: <Routes> deliberately does NOT take an explicit `location`
          prop here. That's the usual recipe for animating route exits (so
          the outgoing route keeps matching while it plays its exit
          animation), but in this app + dependency versions it left
          client-side navigation stuck showing the previous page forever
          (URL updated, content didn't — confirmed by bisecting down to
          this exact prop). Without it, Routes re-renders reactively off
          router context as normal; the only cost is the outgoing page
          unmounts a beat before its exit animation finishes, which reduced
          motion already disables and full motion barely shows given the
          brief duration. */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main-content"
          key={location.pathname}
          className="flex-1"
          initial={shouldReduceMotion ? false : 'initial'}
          animate="animate"
          exit={shouldReduceMotion ? undefined : 'exit'}
          variants={pageTransition.variants}
          transition={pageTransition.transition}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<CaseStudy />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
