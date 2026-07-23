import PageMeta from '../components/PageMeta'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import ContactHero from '../components/ContactHero'
import ContactOptions from '../components/ContactOptions'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <>
      <PageMeta
        title="Contact"
        description="Get in touch with Antonia for UX/UI internship and junior design opportunities."
        path="/contact"
      />
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
