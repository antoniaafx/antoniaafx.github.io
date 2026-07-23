import Hero from '../components/Hero'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'

function Home() {
  return (
    <Section animate={false}>
      <Hero title="Antonia" subtitle="UX/UI Designer" />
      <div className="mt-8 flex flex-wrap gap-4">
        <Button to="/projects" variant="primary">
          View projects
        </Button>
        <Button to="/contact" variant="secondary">
          Get in touch
        </Button>
      </div>
    </Section>
  )
}

export default Home
