import profilePhoto from '../assets/images/antonia-profile.jpg'

// The finished portrait — a printed photo pinned to the workspace, not a
// centred avatar. Rectangular, not circular: a circular crop reads as "app
// avatar," a plain rectangular print reads as "a physical reference
// someone attached to their desk," which is the object this is meant to
// be. A small strip of matte tape (not a yellow sticky note) holds it in
// place at a slight angle. Sized as a hero-weight element (~1.7x its
// original size at the sm+ breakpoint, a touch more conservative on the
// smallest phones to leave room for the identity block beside it).
//
// This component only ever renders the finished state now — its wireframe
// counterpart lives in HeroWireframeLayer, positioned and rotated
// identically at the same breakpoints, revealed only through the cursor-
// following mask in HeroCanvas. Keeping "real photo" and "wireframe
// placeholder" as two separate, precisely-aligned elements (rather than
// one component swapping its own contents) is what lets a single shared
// mask reveal the correct thing no matter where in the hero the cursor
// happens to be.
function HeroPortrait() {
  return (
    <div className="relative w-32 shrink-0 -rotate-3 sm:w-48">
      <span
        aria-hidden="true"
        className="absolute -top-2.5 left-1/2 h-5 w-16 -translate-x-1/2 rotate-2 bg-line/80 shadow-soft"
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
