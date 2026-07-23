import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import ContactHero from '../components/ContactHero'
import ContactOptions from '../components/ContactOptions'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <>
      <ContactHero />
      <Section background="muted">
        <SectionTitle title="Get in touch" />
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <ContactOptions />
          <ContactForm />
        </div>
      </Section>
    </>
  )
}

export default Contact
