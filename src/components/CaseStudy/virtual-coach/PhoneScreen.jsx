import ImagePlaceholder from '../../ImagePlaceholder'

// Simple rounded screen framing (the site's existing rounded-panel/
// border-line/shadow-soft image-frame recipe — same one CaseHero and
// ImageGallery already use) rather than a photorealistic device mockup,
// per the portfolio's existing visual language.
//
// No src yet → a fixed aspect-[9/19.5] box holding ImagePlaceholder (a
// reasonable phone proportion for the empty state). Once a src is set,
// the image renders at its own natural height instead of being forced
// into that ratio — real screenshots are never stretched or cropped to
// fit an assumed aspect ratio.
const SIZES = {
  sm: 'w-32 sm:w-36',
  md: 'w-44 sm:w-52',
  lg: 'w-56 sm:w-64',
}

function PhoneScreen({ screen, size = 'md', priority = false, className = '' }) {
  const { src, alt } = screen ?? {}

  return (
    <div
      className={`overflow-hidden rounded-panel border border-line bg-paper-muted shadow-soft ${SIZES[size]} ${className}`}
    >
      {src ? (
        <img src={src} alt={alt ?? ''} loading={priority ? 'eager' : 'lazy'} className="h-auto w-full" />
      ) : (
        <div className="aspect-[9/19.5]">
          <ImagePlaceholder label="Screen coming soon" />
        </div>
      )}
    </div>
  )
}

export default PhoneScreen
