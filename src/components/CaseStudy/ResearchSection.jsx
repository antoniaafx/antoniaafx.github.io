import Section from '../Section'
import SectionTitle from '../SectionTitle'
import ImageGallery from './ImageGallery'

// Research content varies a lot project to project, so blocks are typed
// rather than fixed fields: 'text' (interviews/methodology), 'insights'
// (a scannable findings list), 'gallery'/'image' (screenshots, competitor
// audits, charts exported as images).
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
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
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
        <div className="mt-12 space-y-12">
          {blocks.map((block, index) => (
            <ResearchBlock key={block.heading ?? index} block={block} />
          ))}
        </div>
      )}
    </Section>
  )
}

export default ResearchSection
