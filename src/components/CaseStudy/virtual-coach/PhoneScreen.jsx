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
// Phase 2 adds `xs` (compact secondary-support mentions — Streak, Habits,
// Friends/Leaderboard — paired inline with a caption rather than standing
// as their own block) and `xl` (the one breakout-climax anchor, "The
// redesigned interface"). `sm`/`md`/`lg` are unchanged from Phase 1.
const SIZES = {
  xs: 'w-20 sm:w-24',
  sm: 'w-32 sm:w-36',
  md: 'w-44 sm:w-52',
  lg: 'w-56 sm:w-64',
  xl: 'w-72 sm:w-80 lg:w-96',
}

// `crop` — several of the real screens are one long scroll capture (Home,
// Levels, Level 2, Achievements), tall enough that showing the whole
// thing at hero/detail scale isn't practical everywhere. `crop` shows a
// windowed portion of the same source image instead of a separate
// cropped asset: `{ aspect, focus }`, where `aspect` is the window's CSS
// aspect-ratio and `focus` (0–100, default 0) is how far down the SOURCE
// image that window starts, as a percentage of the image's own height.
// That's applied via `translateY`, not `top`/`object-position` — a
// transform percentage is relative to the element's OWN size, so it
// scales correctly however wide the crop is rendered; `top`/
// `object-position` percentages are relative to the *container*, which
// has a different aspect ratio here on purpose, so they'd drift.
function PhoneScreen({ screen, size = 'md', priority = false, crop, className = '' }) {
  const { src, alt, width, height } = screen ?? {}
  const frame = `overflow-hidden rounded-panel border border-line bg-paper-muted shadow-soft ${SIZES[size]} ${className}`

  if (!src) {
    return (
      <div className={frame}>
        <div className={crop ? undefined : 'aspect-[9/19.5]'} style={crop ? { aspectRatio: crop.aspect } : undefined}>
          <ImagePlaceholder label="Screen coming soon" />
        </div>
      </div>
    )
  }

  if (crop) {
    return (
      <div className={`relative ${frame}`} style={{ aspectRatio: crop.aspect }}>
        {/* The img also gets its OWN aspect-ratio (from the source file's
            real dimensions, not the crop window's), so its box is correct
            immediately rather than depending on load state.
            Always eager, never `loading="lazy"`, regardless of `priority`:
            verified live (see implementation report) that at least one of
            these real screens never triggers native lazy-loading at all
            in this exact setup — absolutely positioned, cropped via
            transform, inside a rotated/overflow-hidden ancestor — while
            visually identical siblings load fine, with no discernible
            per-image cause. Every crop instance on this page is a
            relatively small, compact composition (not the large
            full-length galleries, which do stay lazy below), so eager
            loading everywhere here trades a small amount of unneeded
            prefetch for the certainty that nothing silently fails to
            render. */}
        <img
          src={src}
          alt={alt ?? ''}
          className="absolute left-0 top-0 w-full"
          style={{
            aspectRatio: width && height ? `${width} / ${height}` : undefined,
            transform: `translateY(-${crop.focus ?? 0}%)`,
          }}
        />
      </div>
    )
  }

  return (
    <div className={frame}>
      <img
        src={src}
        alt={alt ?? ''}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        className="h-auto w-full"
      />
    </div>
  )
}

export default PhoneScreen
