import { useEffect } from 'react'

const SITE_NAME = 'Antonia'
const SITE_URL = 'https://antoniaafx.github.io'

// Updates the browser tab title, the meta description, and the canonical
// link for whichever page mounts it. This is a client-only SPA with no
// server rendering, so this genuinely helps: the visible tab title/browser
// history, bookmarks, and JS-executing crawlers (Google indexes the
// rendered DOM). It does NOT help social-media link-unfurling — Facebook,
// LinkedIn, Twitter/X, Slack etc. don't run JS, so they only ever see
// index.html's static Open Graph tags, regardless of which page's link was
// shared. True per-page social previews would need prerendering/SSR.
//
// `noindex` is for thin/placeholder pages (e.g. an unpublished case study)
// that shouldn't be offered up for indexing — best-effort only, since a
// JS-injected robots tag isn't as reliable as one present in the initial
// HTML, but reasonable given this app has no server-rendering step.
function PageMeta({ title, description, path, noindex = false }) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — UX/UI Designer`

    if (description) {
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', description)
    }

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${SITE_URL}${path}`)

    let robots = document.querySelector('meta[name="robots"]')
    if (!robots) {
      robots = document.createElement('meta')
      robots.setAttribute('name', 'robots')
      document.head.appendChild(robots)
    }
    robots.setAttribute('content', noindex ? 'noindex, follow' : 'index, follow')
  }, [title, description, path, noindex])

  return null
}

export default PageMeta
