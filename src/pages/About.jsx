import PageMeta from '../components/PageMeta'
import AboutHero from '../components/AboutHero'
import AboutBackground from '../components/AboutBackground'
import AboutPhilosophy from '../components/AboutPhilosophy'
import AboutSkills from '../components/AboutSkills'
import ExperienceTimeline from '../components/ExperienceTimeline'
import AboutContact from '../components/AboutContact'

// The site's single final destination — the standalone Contact page was
// removed and merged in here (AboutContact, at the end). Ordered as one
// four-chapter story, numbered on each chapter's own SectionTitle so the
// arc is visible while scrolling, not just implied by the copy: 01 Where I
// started (AboutBackground) → 02 How I design (AboutPhilosophy,
// AboutSkills) → 03 What I learned (ExperienceTimeline — the former
// separate AboutExperience/AboutEducation sections now live as each
// entry's own expand-on-demand detail, instead of repeating the same
// responsibilities/courses a second time as static cards right below) →
// 04 Where I'm going (AboutContact — resume download + contact details +
// invitation to reach out). The old /resume URL and every "Contact Me"
// button on the site both land on AboutContact.
function About() {
  return (
    <>
      <PageMeta
        title="About"
        description="Learn about Antonia's background, design philosophy, and how to get in touch."
        path="/about"
      />
      <AboutHero />
      <AboutBackground />
      <AboutPhilosophy />
      <AboutSkills />
      <ExperienceTimeline />
      <AboutContact />
    </>
  )
}

export default About
