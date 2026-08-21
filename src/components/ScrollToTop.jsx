import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'

// React Router's own recommended pattern for plain <BrowserRouter> setups
// (no built-in scroll behavior ships for this case — that's only available
// via the newer data-router APIs, which this app doesn't use).
//
// Two distinct cases, both landing on a hash target:
//   - Same page, hash changed (e.g. clicking "Work" while already on "/")
//     — a real in-place jump the visitor should feel happen, so this
//     scrolls smoothly (respecting prefers-reduced-motion explicitly,
//     since a JS-specified `behavior` overrides the site's own
//     `scroll-behavior: smooth` CSS rather than deferring to it).
//   - Different page, landing on a hash (e.g. a case study's "Work" link,
//     a direct /#contact visit, or this component's own first-ever
//     mount) — this is a new page arriving already scrolled to a point,
//     the same way a normal page load would, so it's instant rather than
//     an animated glide from the top. `prevPathname` starts at `null`,
//     not the current pathname, specifically so this first-mount case
//     reads as "different page" (null !== '/') and gets instant, not
//     smooth — initializing it to the current pathname would make the
//     very first render always evaluate as "same page" by definition.
// No hash at all is always instant, for the same "new page" reasoning.
//
// Focus moves to the target section itself (`tabIndex={-1}` on each
// anchor target makes it programmatically focusable without joining the
// normal tab order) — otherwise focus silently stays on whatever nav
// link/button triggered the jump, which is disorienting for keyboard and
// screen-reader users on an in-page jump this large. Focused *before*
// scrolling, not after: focusing an off-screen element after an animated
// scrollIntoView is already under way risks the browser correcting scroll
// position for the newly-focused element mid-animation, which in testing
// reset the page to the top instead of landing on target. `preventScroll`
// makes the focus() call itself silent, so scrollIntoView right after it
// is the one real, final scroll operation.
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const shouldReduceMotion = useReducedMotion()
  const prevPathname = useRef(null)

  useEffect(() => {
    const samePage = prevPathname.current === pathname
    prevPathname.current = pathname

    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.focus({ preventScroll: true })
        target.scrollIntoView({ behavior: samePage && !shouldReduceMotion ? 'smooth' : 'instant', block: 'start' })
      }
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash, shouldReduceMotion])

  return null
}

export default ScrollToTop
