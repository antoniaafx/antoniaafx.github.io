import profilePhoto from '../assets/images/antonia-profile.jpg'

// A portrait pinned into the workspace, not a decorative flourish — it's
// who this workspace belongs to. Hovering reveals the placeholder behind
// the finished photo: a flat, filled avatar-placeholder shape (head circle
// + shoulders), the kind an empty avatar slot shows in Figma or a
// wireframe kit — not a hand-drawn sketch. The point isn't "here's a cute
// doodle," it's "this image existed before the final photo was added."
//
// Plain CSS transition + Tailwind's `group-hover`, not Framer Motion —
// same reasoning as Button.jsx's own hover feedback: simpler for a
// straightforward crossfade, and avoids coordinating two separately
// hover-tracked motion elements stacked on top of each other. The site's
// global reduced-motion rule in index.css already collapses this
// transition to near-instant, so no separate handling is needed here.
function HeroPortrait() {
  return (
    <div className="group relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-line shadow-soft sm:h-24 sm:w-24">
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-0 h-full w-full bg-paper-muted">
        <circle cx="50" cy="38" r="18" fill="var(--color-line)" />
        <path d="M20 96 C20 69 33 56 50 56 C67 56 80 69 80 96 Z" fill="var(--color-line)" />
      </svg>
      <img
        src={profilePhoto}
        alt="Portrait of Antonia, Junior UX/UI Designer"
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out group-hover:opacity-0"
      />
    </div>
  )
}

export default HeroPortrait
