import Section from './Section'
import SectionTitle from './SectionTitle'
import Button from './Button'
import ContactOptions from './ContactOptions'
import ContactForm from './ContactForm'
import EnvironmentalArtwork from './EnvironmentalArtwork'

// The page's closing section — merged in from the removed standalone
// Contact page (its hero heading and contact options, reused as-is). Its
// form was dropped at the time since it had no real backend — ContactForm
// below is that functionality finally added back in, appended after the
// existing resume button and contact list rather than changing anything
// about how those already present. `id="resume"` is the redirect target
// for the old /resume URL (see App.jsx and ScrollToTop.jsx) — it's also,
// now, the resume-download + contact destination that every "Contact Me"
// button on the site points to.
function AboutContact() {
  return (
    <Section id="resume" background="ink" artwork={<EnvironmentalArtwork variant="contact" />}>
      <SectionTitle
        eyebrow="Where I'm Going"
        title="Let's build something great together."
        subtitle="I'm currently looking for UX/UI internship and junior design opportunities. If my work looks like a fit, I'd love to hear from you."
        onDark
      />
      <div className="mt-8">
        <Button href="/Antonia_Afxentiou_CV.pdf" download variant="primary" size="lg">
          Download Resume
        </Button>
      </div>
      <div className="mt-10 max-w-2xl">
        <ContactOptions onDark />
      </div>
      {/* The form's own container, not just the field styling, is what
          used to make it read as a bolted-on web form — it just sat
          there, unrelated to anything else on the page. Framing it as a
          pinned page (same washi-tape device as the hero portrait, a
          different physical touch than My Story's paper clip so the two
          don't repeat) makes it read as the notebook's actual last page,
          not a form appended after the notebook ends. */}
      <div className="relative mt-12 max-w-2xl">
        <span
          aria-hidden="true"
          className="absolute -top-2.5 left-1/2 h-5 w-16 -translate-x-1/2 -rotate-2 bg-line/80 shadow-soft"
        />
        <div className="rounded-panel border border-line bg-paper p-6 shadow-soft sm:p-8">
          <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">
            The last page — leave me a note
          </p>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutContact
