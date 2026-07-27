import profilePhoto from '../assets/images/antonia-profile.jpg'

// The finished portrait — a printed photo pinned to the workspace, not a
// centred avatar. Rectangular, not circular: a circular crop reads as "app
// avatar," a plain rectangular print reads as "a physical reference
// someone attached to their desk," which is the object this is meant to
// be. A small strip of matte tape (not a yellow sticky note) holds it in
// place at a slight angle.
//
// This component only ever renders the finished state now — its wireframe
// counterpart lives in HeroWireframeLayer, positioned and rotated
// identically, revealed only through the cursor-following mask in
// HeroCanvas. Keeping "real photo" and "wireframe placeholder" as two
// separate, precisely-aligned elements (rather than one component
// swapping its own contents) is what lets a single shared mask reveal the
// correct thing no matter where in the hero the cursor happens to be.
function HeroPortrait() {
  return (
    <div className="relative w-24 -rotate-3 sm:w-28">
      <span
        aria-hidden="true"
        className="absolute -top-2 left-1/2 h-4 w-11 -translate-x-1/2 rotate-2 bg-line/80 shadow-soft"
      />
      <div className="aspect-[3/4] overflow-hidden rounded-sm border border-line bg-paper-muted shadow-lifted">
        <img
          src={profilePhoto}
          alt="Portrait of Antonia, Junior UX/UI Designer"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>
    </div>
  )
}

export default HeroPortrait
