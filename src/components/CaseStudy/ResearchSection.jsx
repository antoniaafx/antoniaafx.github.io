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
function ResearchBlock({ block }) {
  if (block.type === 'text') {
    return (
      <div className="max-w-3xl">
        {block.heading && <h3 className="text-xl sm:text-2xl">{block.heading}</h3>}
        {block.body && <p className="mt-3 text-ink-soft">{block.body}</p>}
      </div>
    )
  }

  if (block.type === 'insights') {
    return (
      <div>
        {block.heading && <h3 className="text-xl sm:text-2xl">{block.heading}</h3>}
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {(block.items ?? []).map((item, index) => (
            <li key={index} className="flex gap-3 rounded-panel border border-line p-4 text-ink-soft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-dark" aria-hidden="true" />
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

  if (block.type === 'comparison') {
    return (
      <div>
        {block.heading && <h3 className="text-xl sm:text-2xl">{block.heading}</h3>}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {(block.items ?? []).map((item, index) => (
            <div key={item.name ?? index} className="overflow-hidden rounded-panel border border-line bg-paper">
              {item.src && (
                <div className="aspect-[4/3]">
                  <img src={item.src} alt={item.name ?? ''} className="h-full w-full object-cover" />
                </div>
              )}
              <div className="p-4">
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

function ResearchSection({ intro, blocks = [] }) {
  return (
    <Section>
      <SectionTitle title="Research" subtitle={intro} />
      {blocks.length > 0 && (
        <div className="mt-10 space-y-12">
          {blocks.map((block, index) => (
            <ResearchBlock key={block.heading ?? index} block={block} />
          ))}
        </div>
      )}
    </Section>
  )
}

export default ResearchSection
