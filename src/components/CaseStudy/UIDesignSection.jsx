import Section from '../Section'
import SectionTitle from '../SectionTitle'
import ImageGallery from '../ImageGallery'

// Not in the original example tree, but the spec calls for a distinct
// section for high-fidelity screens/responsive views — different purpose
// from ProcessSection (evolution/wireframes) and ResultsSection (outcomes).
function UIDesignSection({ intro, images = [] }) {
  return (
    <Section containerSize="wide">
      <SectionTitle title="UI design" subtitle={intro} />
      {images.length > 0 && (
        <div className="mt-12">
          <ImageGallery images={images} />
        </div>
      )}
    </Section>
  )
}

export default UIDesignSection
