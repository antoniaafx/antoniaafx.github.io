// `wide` and `breakout` are used only by the two case-study pages (verified
// via repo-wide search — no other caller), so both are tuned for that
// context specifically, not general "full-bleed" use. Their original
// values (7xl/1280px and 96rem/1536px) exceed real desktop viewports
// (1280–1536px) almost everywhere they render, which collapses their
// outer margin down to the bare `px-8` safe-gutter (32px) instead of an
// actual visible frame — the case studies ended up reading as edge-to-
// edge at exactly the widths most readers use. Both are now hard-capped
// well below that range so a real, growing margin exists at 1280px and
// up, while still sitting clearly wider than `content` (1152px) so the
// Wide/Breakout width rhythm remains visible.
const WIDTHS = {
  narrow: 'max-w-3xl', // body copy / prose
  content: 'max-w-6xl', // default page width
  wide: 'max-w-[74rem]', // case-study diagrams/evidence — wider than content, still framed
  breakout: 'max-w-[78rem]', // case-study climax media — widest tier, still never edge-to-edge
}

function Container({ size = 'content', className = '', children, ...props }) {
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${WIDTHS[size]} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container
