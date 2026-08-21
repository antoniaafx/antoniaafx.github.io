import PhoneScreen from './PhoneScreen'
import { screens } from '../../../data/virtualCoach'

// Same top-pinned phone-window crop the hero uses — a compact, readable
// screen shape rather than the full scroll-length source image.
const THUMB_CROP = { aspect: '9/19.5', focus: 0 }

// Composed from the real screens via CSS (per the brief's explicit
// preference over a separate flattened composite asset) — Home front and
// centre, Levels and Achievements layered behind at a restrained
// rotation. Deliberately allowed to run past the card's own edges;
// ProjectCard's `overflow-hidden` cover slot crops them, which is the
// intended "screens spilling off the workspace" composition, not a bug.
// `aria-hidden` + empty `alt` on every layer: this is a decorative cover
// for the card's own "Virtual Coach" title + "Open Project" link (the
// card's one real interactive target — see ProjectCard's stretched-link
// comment), not independent content of its own.
function VirtualCoachThumbnail() {
  return (
    <div aria-hidden="true" className="relative h-full w-full">
      <div className="absolute left-[8%] top-[26%] -rotate-6">
        <PhoneScreen screen={{ ...screens.levels, alt: '' }} size="sm" crop={THUMB_CROP} />
      </div>
      <div className="absolute right-[8%] top-[30%] rotate-6">
        <PhoneScreen screen={{ ...screens.achievements, alt: '' }} size="sm" crop={THUMB_CROP} />
      </div>
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 -rotate-2">
        <PhoneScreen screen={{ ...screens.home, alt: '' }} size="md" crop={THUMB_CROP} priority />
      </div>
    </div>
  )
}

export default VirtualCoachThumbnail
