// The "not yet available" state for any image slot on the site — used
// wherever a gallery or hero image doesn't have a src yet. Reuses the
// exact corner-to-corner-X + image-glyph convention already established
// on the homepage hero's wireframe layer, so an empty slot reads as an
// intentional, on-brand placeholder rather than a generic broken box —
// worth having as its own component now that case study pages can have
// several empty slots showing at once before real work is uploaded.
function ImagePlaceholder({ label = 'Image coming soon' }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-paper-muted">
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full text-ink-muted/25"
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" />
      </svg>
      <div className="relative flex flex-col items-center gap-2 text-ink-muted">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
        >
          <rect x="3" y="4" width="18" height="16" rx="1.5" />
          <circle cx="8.5" cy="9.5" r="1.25" />
          <path d="M4.5 17l4.5-4.5 3 3 4-5 4.5 5" />
        </svg>
        <span className="text-caption">{label}</span>
      </div>
    </div>
  )
}

export default ImagePlaceholder
