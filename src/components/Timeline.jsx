import ImageGallery from './ImageGallery'

// Numbered, connected sequence — shared by the case study Process section
// and the About page's experience/education timeline. Each item supports
// { label, meta, description, image }; all fields but `label` are optional.
function Timeline({ items = [] }) {
  if (items.length === 0) return null

  return (
    <ol className="space-y-10">
      {items.map((item, index) => (
        <li key={item.label ?? index} className="flex gap-6">
          <div className="flex flex-col items-center">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent-dark">
              {index + 1}
            </span>
            {index < items.length - 1 && <span className="mt-2 w-px flex-1 bg-line" aria-hidden="true" />}
          </div>
          <div className="flex-1 pb-2">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl sm:text-2xl">{item.label}</h3>
              {item.meta && (
                <span className="text-caption font-medium uppercase tracking-wide text-ink-muted">{item.meta}</span>
              )}
            </div>
            {item.description && <p className="mt-2 max-w-2xl text-ink-soft">{item.description}</p>}
            {item.image && (
              <div className="mt-5 max-w-2xl">
                <ImageGallery images={[{ src: item.image, caption: item.label }]} />
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}

export default Timeline
