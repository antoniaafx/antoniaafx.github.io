import Section from './Section'
import SectionTitle from './SectionTitle'
import Button from './Button'
import ContactOptions from './ContactOptions'

// The page's closing section — merged in from the removed standalone
// Contact page (its hero heading and contact options, reused as-is; its
// form is dropped, since it had no real backend behind it and wasn't part
// of what this section needs to include). `id="resume"` is the redirect
// target for the old /resume URL (see App.jsx and ScrollToTop.jsx) — it's
// also, now, the resume-download + contact destination that every
// "Contact Me" button on the site points to.
function AboutContact() {
  return (
    <Section id="resume" background="muted">
      <SectionTitle
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
    </Section>
  )
}

export default AboutContact
