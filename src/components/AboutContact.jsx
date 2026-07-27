import Section from './Section'
import SectionTitle from './SectionTitle'
import Button from './Button'
import ContactOptions from './ContactOptions'
import ContactForm from './ContactForm'

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
    <Section id="resume" background="muted">
      <SectionTitle
        chapter="04"
        eyebrow="Where I'm Going"
        title="Let's build something great together."
        subtitle="I'm currently looking for UX/UI internship and junior design opportunities. If my work looks like a fit, I'd love to hear from you."
      />
      <div className="mt-8">
        <Button href="/Antonia_Afxentiou_CV.pdf" download variant="primary" size="lg">
          Download Resume
        </Button>
      </div>
      <div className="mt-10 max-w-2xl">
        <ContactOptions />
      </div>
      <div className="mt-10 max-w-2xl">
        <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">Or send a message directly</p>
        <div className="mt-4">
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}

export default AboutContact
