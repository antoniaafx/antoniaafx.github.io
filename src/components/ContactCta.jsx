import Section from './Section'
import Button from './Button'

// `eyebrow` is optional — only About's usage passes one, to close out its
// journey structure ("Where I'm Going"). Home and CaseStudy render this
// without it, unchanged.
//
// Links to /about#resume, not /contact — the standalone Contact page was
// removed and merged into About's own closing section (AboutContact),
// which is now the site's single "get in touch" destination everywhere
// this button appears.
function ContactCta({ eyebrow }) {
  return (
    <Section background="ink">
      <div className="mx-auto max-w-2xl text-center">
        {eyebrow && <p className="text-caption font-medium uppercase tracking-wide text-paper/80">{eyebrow}</p>}
        <h2 className={`text-display-sm text-paper sm:text-display-md ${eyebrow ? 'mt-3' : ''}`}>
          Let's build something great together.
        </h2>
        <p className="mt-4 text-lg text-paper/80">
          I'm currently looking for UX/UI internship and junior design opportunities. If my work looks like a fit,
          I'd love to hear from you.
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/about#resume" variant="inverse" size="lg">
            Contact Me
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default ContactCta
