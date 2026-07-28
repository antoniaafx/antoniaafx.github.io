import { Link } from 'react-router-dom'

// A pivot away from the "physical file" language of the previous few
// passes — no folder tab, no stacked sheets, no resting-state tilt. This
// reads as an editorial cover instead: a calm, evenly-aligned grid where
// the only physicality comes from proportion and a refined shadow, not
// from a permanently skewed card. Rotation now only happens as a hover
// micro-interaction (see the article's own hover:/focus-within: classes
// below), not as a fixed per-card identity.
//
// Reduced to exactly what was asked for — image, title, one line, "Open
// Project →" — nothing else. The project number, category tab, and every
// other field this card used to carry now live only on the case study
// page itself.
function ProjectCard({ id, title, description, problemStatement, heroImage }) {
  const summary = problemStatement || description

  return (
    // The article is the whole object now — no outer wrapper needed once
    // there's no separate tab/sheet elements to keep in sync with it.
    // Its own hover:/focus-within: (not a `group-hover` from a parent)
    // drive the lift/rotate/shadow directly, since this element itself
    // is what's hovered or focused-within. `overflow-hidden` is what
    // makes the image sit full-bleed at the top while still respecting
    // the card's own rounded corners.
    <article className="group relative overflow-hidden rounded-panel bg-paper shadow-[0_1px_2px_rgba(30,24,64,0.08),0_10px_24px_-14px_rgba(30,24,64,0.18)] transition-[transform,box-shadow] duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:rotate-[1.5deg] hover:shadow-[0_4px_10px_rgba(30,24,64,0.1),0_26px_44px_-18px_rgba(30,24,64,0.26)] focus-within:-translate-y-1 focus-within:rotate-[1.5deg] focus-within:shadow-[0_4px_10px_rgba(30,24,64,0.1),0_26px_44px_-18px_rgba(30,24,64,0.26)]">
      {heroImage ? (
        // Full-bleed, edge to edge — a cover image, not a thumbnail
        // sitting inside a second bordered box. The very slight
        // independent scale + drift on the image (distinct from the
        // card's own lift) is the "gentle parallax" — the cover and the
        // image underneath it moving at a faint, different rate.
        <div className="aspect-[3/2] overflow-hidden">
          <img
            src={heroImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.035]"
          />
        </div>
      ) : (
        // No photo yet — a plain, quiet placeholder rather than a busy
        // sketch; the calmer aesthetic this pass asks for doesn't want a
        // decorative wireframe drawing here either.
        <div
          aria-hidden="true"
          className="flex aspect-[3/2] items-center justify-center bg-paper-muted"
        >
          <span className="text-caption font-medium uppercase tracking-wide text-ink-muted">Preview coming soon</span>
        </div>
      )}

      <div className="p-5 sm:p-6">
        <h3 className="text-xl">{title}</h3>
        {/* `line-clamp-1`, not 2 — "one concise sentence" is a hard rule
            here, enforced in CSS with an ellipsis fallback rather than
            relying on every project's copy happening to already be short
            enough. */}
        {summary && <p className="mt-1.5 line-clamp-1 text-ink-soft">{summary}</p>}

        {/* Stretched-link pattern: the whole cover is hoverable, so the
            whole cover should be clickable — one real anchor whose hit
            area is expanded via ::after rather than a second, nested
            link wrapping the card. */}
        <Link
          to={`/projects/${id}`}
          className="mt-4 flex w-fit items-center gap-1.5 text-sm font-medium text-accent-dark underline-offset-4 hover:underline after:absolute after:inset-0 after:content-['']"
        >
          Open Project
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard
