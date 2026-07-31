import Section from '../Section'
import SectionTitle from '../SectionTitle'
import ImageGallery from '../ImageGallery'

function ResultsSection({ summary, improvements = [], images = [] }) {
  return (
    <Section background="muted">
      <SectionTitle title="Project outcome" subtitle={summary} />

      {improvements.length > 0 && (
        <div className="mt-12 max-w-3xl">
          <ul className="grid gap-6 sm:grid-cols-2">
            {improvements.map((item, index) => (
              <li key={index} className="flex gap-3 rounded-panel border border-line p-4 text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {images.length > 0 && (
        <div className={`${improvements.length > 0 ? 'mt-16 border-t border-line pt-10 sm:mt-20' : 'mt-12'}`}>
          <ImageGallery images={images} />
        </div>
      )}
    </Section>
  )
}

export default ResultsSection
