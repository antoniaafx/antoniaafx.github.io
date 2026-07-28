// The five UX-blueprint murals (Hero, Featured Project, My Story, Timeline,
// Contact) and the Design Philosophy corner-guides were removed in a
// follow-up cleanup pass — this grid field is the one environmental device
// that survived it, kept because it read as the strongest, calmest
// environmental element on the site. A CSS gradient, not an SVG, since it's
// a literal tiled pattern rather than a one-time composition.
function GridField() {
  return (
    <div
      className="absolute inset-0 text-accent opacity-[0.05]"
      style={{
        backgroundImage:
          'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    />
  )
}

// `skills` is the only supported variant now. Always absolutely
// positioned, pointer-events-none, aria-hidden, never in the accessibility
// tree, never affecting layout — Section only ever renders this inside a
// `relative overflow-hidden` wrapper (see Section.jsx's `artwork` prop).
function EnvironmentalArtwork({ variant }) {
  if (variant !== 'skills') return null

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <GridField />
    </div>
  )
}

export default EnvironmentalArtwork
