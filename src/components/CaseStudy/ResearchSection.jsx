import Section from '../Section'
import SectionTitle from '../SectionTitle'
import ImageGallery from '../ImageGallery'
import ImagePlaceholder from '../ImagePlaceholder'

// Research content varies a lot project to project, so blocks are typed
// rather than fixed fields: 'text' (interviews/methodology), 'insights'
// (a scannable findings list), 'gallery'/'image' (screenshots, charts
// exported as images), 'comparison' (competitor/reference entries where
// the point being made is carried by name + why-it-matters text, not a
// photo — image optional per item rather than required, since a bare
// image gallery with no photos yet is two empty boxes and zero
// information; see items[].src below).
//
// Width is set once on ResearchSection's outer wrapper, not per block —
// every type shares the same measure, so the section can't drift
// narrow-then-wide as block types change.
//
// One typographic scale for every sub-heading in this section, not a
// separate size per block: font-medium text-ink at the same base size as
// body copy — the exact recipe the competitor cards' own `item.name`
// already uses further down this file, not a new combination. Deliberately
// not the small uppercase caption treatment (too small to read comfortably
// at heading length) and deliberately not a larger display size either
// (that's what introduced a second scale that didn't match the rest of
// the portfolio). Hierarchy between "Comparative research," "Key insight,"
// and "Competitor analysis" now comes entirely from the spacing rhythm
// below — every label is this same font-medium text-ink treatment, and
// every paragraph beneath a label is text-ink-soft, the same body colour
// Project Overview, Design Process, Final Result, and Reflection all use.
function ResearchBlock({ block }) {
  if (block.type === 'text') {
    return (
      <div>
        {block.heading && <p className="font-medium text-ink">{block.heading}</p>}
        {block.body && <p className={`text-ink-soft ${block.heading ? 'mt-3' : ''}`}>{block.body}</p>}
      </div>
    )
  }

  // The hero of the section, but at the same body text size AND the same
  // body text colour (text-ink-soft) as every other paragraph in Research
  // and every equivalent paragraph in Project Overview, Design Process,
  // Final Result, and Reflection. Hierarchy comes only from the label
  // above it and the space blockSpacing reserves around it — not from a
  // different font size and not from a different text colour.
  if (block.type === 'insights') {
    return (
      <div>
        {block.heading && <p className="font-medium text-ink">{block.heading}</p>}
        <div className={`space-y-6 ${block.heading ? 'mt-4' : ''}`}>
          {(block.items ?? []).map((item, index) => (
            <p key={index} className="text-ink-soft">
              {item}
            </p>
          ))}
        </div>
      </div>
    )
  }

  if (block.type === 'gallery') {
    return (
      <div>
        {block.heading && <h3 className="text-xl sm:text-2xl">{block.heading}</h3>}
        <div className="mt-4">
          <ImageGallery images={block.images ?? []} />
        </div>
      </div>
    )
  }

  // Same material language as ImageGallery (bg-paper-muted, border-line,
  // shadow-soft, rounded-panel) so a future competitor screenshot reads as
  // the same category of evidence as the screenshots in Process/UI
  // Design/Results. The image slot is now always present — using the
  // site's existing ImagePlaceholder (the same "not yet available" state
  // already shown in Process/UI Design/Results today), not a new graphic
  // — so the layout already reads as "this holds a screenshot" rather
  // than becoming a photo frame only once one is added later.
  if (block.type === 'comparison') {
    return (
      <div>
        {block.heading && <p className="font-medium text-ink">{block.heading}</p>}
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {(block.items ?? []).map((item, index) => (
            <div
              key={item.name ?? index}
              className="overflow-hidden rounded-panel border border-line bg-paper-muted shadow-soft"
            >
              <div className="aspect-[4/3]">
                {item.src ? (
                  <img src={item.src} alt={item.name ?? ''} className="h-full w-full object-cover" />
                ) : (
                  <ImagePlaceholder label="Screenshot coming soon" />
                )}
              </div>
              <div className="border-t border-line p-4">
                {item.name && <p className="font-medium text-ink">{item.name}</p>}
                {item.note && <p className="mt-1 text-ink-soft">{item.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (block.type === 'image') {
    return (
      <div>
        {block.heading && <h3 className="text-xl sm:text-2xl">{block.heading}</h3>}
        <div className="mt-4">
          <ImageGallery images={[{ src: block.image, caption: block.caption }]} />
        </div>
      </div>
    )
  }

  return null
}

// Three distinct gap sizes, not one uniform rhythm: the comparative-
// research note sits flush against the intro above it (index 0 — it's
// supporting the intro's framing, not starting a new thought). Key
// insight gets a deliberate build-up (mt-12) — enough space to announce
// "here's the payoff" without the full chapter-break treatment. Only
// comparison, the shift from "what the research concluded" to "the
// evidence behind it," gets the large gap plus the thin rule already
// used in Project Overview for the same narrative-to-reference-tier
// transition.
function blockSpacing(type, index) {
  if (index === 0) return ''
  if (type === 'insights') return 'mt-12'
  if (type === 'comparison') return 'mt-16 border-t border-line pt-10 sm:mt-20'
  return 'mt-10'
}

function ResearchSection({ intro, blocks = [] }) {
  return (
    <Section>
      <SectionTitle title="Research" subtitle={intro} />
      {blocks.length > 0 && (
        <div className="mt-12 max-w-3xl">
          {blocks.map((block, index) => (
            <div key={block.heading ?? index} className={blockSpacing(block.type, index)}>
              <ResearchBlock block={block} />
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}

export default ResearchSection
