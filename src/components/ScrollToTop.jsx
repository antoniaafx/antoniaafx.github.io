import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router's own recommended pattern for plain <BrowserRouter> setups
// (no built-in scroll behavior ships for this case — that's only available
// via the newer data-router APIs, which this app doesn't use). Explicitly
// `behavior: 'instant'` — the site sets `html { scroll-behavior: smooth }`
// globally (for in-page anchor scrolling), which also intercepts plain
// `window.scrollTo(0, 0)` calls and animates them. A route change is a new
// page, not an in-page jump, so it should land at the top immediately like
// a normal page load, not glide there.
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default ScrollToTop
