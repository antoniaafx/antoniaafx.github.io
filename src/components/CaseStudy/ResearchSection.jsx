import Section from '../Section'
import SectionTitle from '../SectionTitle'
import ImageGallery from '../ImageGallery'

// Research content varies a lot project to project, so blocks are typed
// rather than fixed fields: 'text' (interviews/methodology), 'insights'
// (a scannable findings list), 'gallery'/'image' (screenshots, charts
// exported as images), 'comparison' (competitor/reference entries where
// the point being made is carried by name + why-it-matters text, not a
// photo — image optional per item rather than required, since a bare
// image gallery with no photos yet is two empty boxes and zero
// information; see items[].src below).
//
// Width is no longer set per block type — 'text' used to carry its own
// max-w-3xl while 'insights'/'comparison' stretched full width. Now every
// type shares the one measure set once on ResearchSection's outer wrapper,
// so the section can't drift narrow-then-wide as block types change.
function ResearchBlock({ block }) {
  if (block.type === 'text') {
    return (
      <div>
        {block.heading && <h3 className="text-xl sm:text-2xl">{block.heading}</h3>}
        {block.body && <p className="mt-3 text-ink-soft">{block.body}</p>}
      </div>
    )
  }

  // Deliberately unboxed: this is the research's actual conclusion, not a
  // supporting exhibit, so it reads as a direct, confident statement
  // rather than a bordered card competing for the same "this is a data
  // point" attention as the comparison evidence below it.
  if (block.type === 'insights') {
    return (
      <div>
        {block.heading && <h3 className="text-xl sm:text-2xl">{block.heading}</h3>}
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {(block.items ?? []).map((item, index) => (
            <li key={index} className="flex gap-3 text-ink-soft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
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
  // Design/Results, rather than a separate, flatter component. The
  // top rule on the text area only appears once there's an image above it
  // to separate from — mirrors ImageGallery's own figcaption behaviour
  // rather than showing a stray rule on the image-less items today.
  if (block.type === 'comparison') {
    return (
      <div>
        {block.heading && <h3 className="text-xl sm:text-2xl">{block.heading}</h3>}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {(block.items ?? []).map((item, index) => (
            <div
              key={item.name ?? index}
              className="overflow-hidden rounded-panel border border-line bg-paper-muted shadow-soft"
            >
              {item.src && (
                <div className="aspect-[4/3]">
                  <img src={item.src} alt={item.name ?? ''} className="h-full w-full object-cover" />
                </div>
              )}
              <div className={item.src ? 'border-t border-line p-4' : 'p-4'}>
                {item.name && <p className="font-medium text-ink">{item.name}</p>}
                {item.note && <p className="mt-1 text-sm text-ink-soft">{item.note}</p>}
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

// Spacing rhythm, not a uniform space-y: 'insights' sits close to whatever
// argument precedes it — it's that argument's conclusion, not a new topic
// — while 'comparison' gets a deliberately larger gap plus the same thin
// rule already used in ProjectOverview to mark "narrative just ended,
// here's the reference tier." Everything else keeps the original gap.
function blockSpacing(type, index) {
  if (index === 0) return ''
  if (type === 'insights') return 'mt-8'
  if (type === 'comparison') return 'mt-16 border-t border-line pt-10 sm:mt-20'
  return 'mt-10'
}

function ResearchSection({ intro, blocks = [] }) {
  return (
    <Section>
      <SectionTitle title="Research" subtitle={intro} />
      {blocks.length > 0 && (
        <div className="mt-10 max-w-3xl">
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
