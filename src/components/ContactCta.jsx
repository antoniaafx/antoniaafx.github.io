import Section from './Section'
import Button from './Button'

function ContactCta() {
  return (
    <Section background="ink">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-display-sm text-paper sm:text-display-md">Let's build something great together.</h2>
        <p className="mt-4 text-lg text-paper/80">
          I'm currently looking for UX/UI internship and junior design opportunities. If my work looks like a fit,
          I'd love to hear from you.
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/contact" variant="inverse" size="lg">
            Contact Me
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default ContactCta
