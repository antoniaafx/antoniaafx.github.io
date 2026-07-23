// Shared by ResearchSection, ProcessSection, UIDesignSection, and
// ResultsSection — anywhere a case study needs to show one or more images.
// Pass `span: 'wide'` on an item to let it take the full row.
function ImageGallery({ images = [] }) {
  if (images.length === 0) return null

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {images.map((img, index) => (
        <figure
          key={img.caption ?? index}
          className={`overflow-hidden rounded-panel border border-line bg-paper-muted shadow-soft ${
            img.span === 'wide' ? 'sm:col-span-2' : ''
          }`}
        >
          <div className={img.span === 'wide' ? 'aspect-[16/9]' : 'aspect-[4/3]'}>
            {img.src ? (
              <img src={img.src} alt={img.alt ?? img.caption ?? ''} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-caption text-ink-muted">
                Image coming soon
              </div>
            )}
          </div>
          {img.caption && (
            <figcaption className="border-t border-line px-4 py-3 text-sm text-ink-soft">{img.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}

export default ImageGallery
