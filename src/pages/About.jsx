import PageMeta from '../components/PageMeta'
import AboutHero from '../components/AboutHero'
// AboutBackground ("My Story") is intentionally not rendered — kept as a
// working component (src/components/AboutBackground.jsx) in case it's
// wanted again later, just not invoked here. Removing it from the page
// flow is what re-ordered ExperienceTimeline ahead of AboutSkills below,
// so the page still reads as one arc with no gap where it used to sit.
import AboutSkills from '../components/AboutSkills'
import ExperienceTimeline from '../components/ExperienceTimeline'
import AboutContact from '../components/AboutContact'

// This page is intentionally preserved but hidden from primary navigation
// (see Navbar.jsx) — not deleted, not deprecated. The route stays mounted
// in App.jsx and everything below still renders in full for anyone who
// reaches /about directly. Two of its sections, AboutSkills and
// AboutContact, are also reused directly on Home.jsx now (Home is the
// site's primary public page); they're the same components, not copies,
// so this page and Home never drift apart. Ordered as one story: 01 Get
// to know me (AboutHero) → 02 What I learned (ExperienceTimeline — the
// former separate AboutExperience/AboutEducation sections now live as
// each entry's own expand-on-demand detail, instead of repeating the same
// responsibilities/courses a second time as static cards right below) →
// 03 What I bring (AboutSkills) → 04 Where I'm going (AboutContact —
// resume download + contact details + invitation to reach out). The old
// /resume URL and every "Contact Me" button on the site land on
// AboutContact (Home's copy of it, specifically — see App.jsx).
//
// Design Philosophy (the former AboutPhilosophy section) is intentionally
// not rendered here — removed for reading as generic/skippable, but its
// content is preserved at src/data/philosophy.js, not deleted.
function About() {
  return (
    <>
      <PageMeta
        title="About"
        description="Learn about Antonia's background, how she works, and how to get in touch."
        path="/about"
      />
      <AboutHero />
      <ExperienceTimeline />
      <AboutSkills />
      <AboutContact />
    </>
  )
}

export default About
