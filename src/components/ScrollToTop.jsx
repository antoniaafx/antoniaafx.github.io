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
//
// A location with a hash (currently only /#resume, the redirect target
// for the removed /resume page) scrolls that element into view instead of
// the top, also instant for the same reason. React has already committed
// the destination page's DOM by the time this effect runs (effects fire
// after the whole tree commits), so the target element exists immediately —
// deliberately not deferred via requestAnimationFrame, which a backgrounded
// or non-visible tab can throttle indefinitely, silently dropping the scroll.
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant', block: 'start' })
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default ScrollToTop
