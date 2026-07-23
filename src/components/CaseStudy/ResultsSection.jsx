import Section from '../Section'
import SectionTitle from '../SectionTitle'
import ImageGallery from '../ImageGallery'

function ResultsSection({ summary, improvements = [], images = [] }) {
  return (
    <Section background="muted">
      <SectionTitle title="Final result" subtitle={summary} />

      {improvements.length > 0 && (
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {improvements.map((item, index) => (
            <li key={index} className="flex gap-3 rounded-panel border border-line p-4 text-ink-soft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {images.length > 0 && (
        <div className="mt-10">
          <ImageGallery images={images} />
        </div>
      )}
    </Section>
  )
}

export default ResultsSection
