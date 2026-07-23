import Section from '../Section'
import SectionTitle from '../SectionTitle'
import ImageGallery from './ImageGallery'

function ProcessSection({ intro, steps = [] }) {
  return (
    <Section background="muted">
      <SectionTitle title="Design process" subtitle={intro} />
      {steps.length > 0 && (
        <ol className="mt-12 space-y-10">
          {steps.map((step, index) => (
            <li key={step.label} className="flex gap-6">
              <div className="flex flex-col items-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent-dark">
                  {index + 1}
                </span>
                {index < steps.length - 1 && <span className="mt-2 w-px flex-1 bg-line" aria-hidden="true" />}
              </div>
              <div className="flex-1 pb-2">
                <h3 className="text-xl sm:text-2xl">{step.label}</h3>
                {step.description && <p className="mt-2 max-w-2xl text-ink-soft">{step.description}</p>}
                {step.image && (
                  <div className="mt-5 max-w-2xl">
                    <ImageGallery images={[{ src: step.image, caption: step.label }]} />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}
    </Section>
  )
}

export default ProcessSection
