import PageMeta from '../components/PageMeta'
import Hero from '../components/Hero'
import Section from '../components/Section'
import ProjectsGrid from '../components/ProjectsGrid'
import AboutPreview from '../components/AboutPreview'
import ExperienceTimeline from '../components/ExperienceTimeline'
import AboutSkills from '../components/AboutSkills'
import AboutContact from '../components/AboutContact'

// The primary portfolio experience: one page, four anchors (Hero → Work →
// About → Contact — see Navbar.jsx's NAV_LINKS), each `scroll-mt-16` so a
// jump/click never lands with the section title tucked under the sticky
// header, and each `tabIndex={-1}` so ScrollToTop can move real
// keyboard/screen-reader focus there after an anchor jump, not just the
// scroll position.
//
// Work replaces the old "Featured Work" rail (FeaturedProjects/
// FeaturedProjectCard — both removed, no longer used anywhere) with the
// exact same grid the standalone /projects page uses (ProjectsGrid) —
// every project gets identical visual weight, no spotlighted first
// project, matching the small, still-growing collection of work this
// portfolio actually has. It keeps the old section's dark/grain
// background (`background="ink"`, the same treatment ContactCta/
// AboutContact already use elsewhere) and drops the supporting
// paragraph — both restored/removed here only, not on the standalone
// /projects page, via ProjectsGrid's own `onDark`/`showSubtitle` props.
//
// About reuses three of the standalone About page's own sections
// (AboutPreview, ExperienceTimeline, AboutSkills) rather than a new
// implementation — AboutHero is the one section intentionally left out
// here, since Home's own Hero above already covers "who I am" at the top
// of the page; repeating a second portrait+intro block mid-page would be
// redundant. ExperienceTimeline ("journey / experience") is new to Home
// specifically — it only lived on /about before — added because a
// recruiter should be able to see it without leaving this page, per the
// brief for this pass.
//
// Contact reuses AboutContact as-is (id="contact" lives on that
// component itself — see AboutContact.jsx).
function Home() {
  return (
    <>
      <PageMeta
        description="UX/UI Designer portfolio showcasing product design, UX research, and prototyping work."
        path="/"
      />
      <Hero />

      <Section id="work" background="ink" className="scroll-mt-16" tabIndex={-1}>
        <ProjectsGrid onDark showSubtitle={false} />
      </Section>

      <div id="about" className="scroll-mt-16" tabIndex={-1}>
        <AboutPreview />
        <ExperienceTimeline />
        <AboutSkills />
      </div>

      <AboutContact />
    </>
  )
}

export default Home
