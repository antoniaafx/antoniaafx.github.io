import profilePhoto from '../assets/images/antonia-profile.jpg'

// A small portrait pinned into the workspace, not a decorative flourish —
// it's who this workspace belongs to. Hovering reveals the "research
// sketch" behind the finished photo: a simple, deliberately rough
// head-and-shoulders abstraction in the same pose, standing in for "how
// this started" the same way the surrounding wireframe cluster's own
// sketch mark does. Not a traced likeness (that isn't something to fake) —
// an honest, generic sketch abstraction, same dashed/loose line language
// as the rest of the workspace's paper-inspired details.
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
      <img
        src={profilePhoto}
        alt="Portrait of Antonia, Junior UX/UI Designer"
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ease-out group-hover:opacity-0"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full bg-paper-muted p-3 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
      >
        <circle
          cx="50"
          cy="34"
          r="16"
          fill="none"
          stroke="var(--color-ink-soft)"
          strokeWidth="2"
          strokeDasharray="3 3"
          strokeLinecap="round"
        />
        <path
          d="M22 92 C22 66 34 54 50 54 C66 54 78 66 78 92"
          fill="none"
          stroke="var(--color-ink-soft)"
          strokeWidth="2"
          strokeDasharray="3 3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default HeroPortrait
