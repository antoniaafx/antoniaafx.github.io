import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import CaseStudy from './pages/CaseStudy'
import Contact from './pages/Contact'
import { pageTransition } from './lib/motion'

function App() {
  const location = useLocation()
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-control focus-visible:bg-ink focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-paper"
      >
        Skip to content
      </a>
      <Navbar />
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
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<CaseStudy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
