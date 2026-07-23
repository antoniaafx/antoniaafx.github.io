import { useParams } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Section from '../components/Section'
import Button from '../components/Button'
import ContactCta from '../components/ContactCta'
import CaseHero from '../components/CaseStudy/CaseHero'
import ProjectOverview from '../components/CaseStudy/ProjectOverview'
import ResearchSection from '../components/CaseStudy/ResearchSection'
import ProcessSection from '../components/CaseStudy/ProcessSection'
import UIDesignSection from '../components/CaseStudy/UIDesignSection'
import ResultsSection from '../components/CaseStudy/ResultsSection'
import ReflectionSection from '../components/CaseStudy/ReflectionSection'
import projects from '../data/projects'

function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((item) => item.id === slug)

  // Projects can exist in data/projects.js (and link from /projects or the
  // homepage) before their full case study is written — show a clean
  // placeholder rather than a blank or broken page.
  if (!project?.overview) {
    return (
      <Section>
        <PageMeta
          title="Case Study"
          description="This case study isn't published yet."
          path={`/projects/${slug}`}
          noindex
        />
        <div className="mx-auto max-w-xl text-center">
          <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">Case study</p>
          <h1 className="mt-4 text-display-sm">This case study isn't published yet.</h1>
          <p className="mt-4 text-lg text-ink-soft">Check back soon, or explore the rest of the work.</p>
          <div className="mt-8 flex justify-center">
            <Button to="/projects" variant="primary">
              Back to projects
            </Button>
          </div>
        </div>
      </Section>
    )
  }

  return (
    <>
      <PageMeta title={project.title} description={project.description} path={`/projects/${project.id}`} />
      <CaseHero {...project} />
      <ProjectOverview {...project.overview} />
      <ResearchSection {...project.research} />
      <ProcessSection {...project.process} />
      <UIDesignSection {...project.uiDesign} />
      <ResultsSection {...project.results} />
      <ReflectionSection {...project.reflection} />
      <ContactCta />
    </>
  )
}

export default CaseStudy
