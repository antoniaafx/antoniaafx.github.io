import { useParams } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Section from '../components/Section'
import Button from '../components/Button'
import KegAndBarrelCaseStudy from '../components/CaseStudy/keg-and-barrel/KegAndBarrelCaseStudy'
import VirtualCoachCaseStudy from '../components/CaseStudy/virtual-coach/VirtualCoachCaseStudy'
import projects from '../data/projects'

// Every published case study gets its own dedicated component reading its
// own data file (src/data/kegAndBarrel.js, src/data/virtualCoach.js) —
// neither project's story fit a single generic overview/research/process/
// uiDesign/results/reflection template (that renderer, and the six
// section components behind it, were retired in the Phase 1 structural
// refactor once Keg & Barrel moved off it too). Adding a project's full
// case study means adding it here, not filling in more fields on the
// projects.js entry.
const CASE_STUDIES = {
  'keg-and-barrel': KegAndBarrelCaseStudy,
  'virtual-coach': VirtualCoachCaseStudy,
}

function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((item) => item.id === slug)
  const CaseStudyComponent = CASE_STUDIES[slug]

  if (CaseStudyComponent) {
    return (
      <>
        <PageMeta title={project.title} description={project.description} path={`/projects/${project.id}`} />
        <CaseStudyComponent />
      </>
    )
  }

  // Projects can exist in data/projects.js (and link from /projects or the
  // homepage) before their full case study is written — show a clean
  // placeholder rather than a blank or broken page.
  return (
    <Section spacing="hero">
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
          <Button to="/#work" variant="primary">
            Back to work
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default CaseStudy
