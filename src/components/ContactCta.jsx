import Section from './Section'
import Button from './Button'

// Now only used at the end of a case study (Home has its own full
// AboutContact section instead of this shorter CTA — see Home.jsx).
// Links to /#contact — the homepage's Contact section (AboutContact,
// id="contact"), the site's one real contact destination now that About
// is hidden from primary navigation.
function ContactCta({ eyebrow }) {
  return (
    <Section background="ink">
      <div className="mx-auto max-w-2xl text-center">
        {eyebrow && <p className="text-caption font-medium uppercase tracking-wide text-paper/80">{eyebrow}</p>}
        <h2 className={`text-display-sm text-paper sm:text-display-md ${eyebrow ? 'mt-3' : ''}`}>
          Let's build something great together.
        </h2>
        {/* No subtitle here — that copy (internship/junior-role framing)
            lives once, on AboutContact, the page this button actually
            lands on. Repeating it here made Home's CTA a duplicate of
            About's closing section instead of a short prompt toward it. */}
        <div className="mt-8 flex justify-center">
          <Button to="/#contact" variant="inverse" size="lg">
            Contact Me
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default ContactCta
