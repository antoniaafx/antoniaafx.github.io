import Section from './Section'
import SectionTitle from './SectionTitle'

// Home's own "About Me" section, not a preview linking out to a separate
// page anymore — About is hidden from primary navigation, so this is now
// the only place this introduction lives for a public visitor. Merges
// what used to be two overlapping intros (AboutHero's "currently
// studying..." line and this component's old two-paragraph version) into
// one short paragraph. Kept deliberately brief — the case studies do the
// work of showing process; this just introduces.
//
// Uses Section's default ("content", max-w-6xl) container — same as
// FeaturedProjects/AboutSkills/AboutContact below it — rather than the
// narrower "narrow" (max-w-3xl) it used before. That narrower container
// still centers via `mx-auto`, but at wide viewports it's noticeably
// inset from where the other sections' left edge sits, which is what
// made this read as a centered, disconnected block. The paragraph itself
// keeps a readable measure via `max-w-2xl` — the same width SectionTitle
// already caps its own heading/subtitle at — instead of stretching to
// the full container.
function AboutPreview() {
  return (
    <Section>
      <SectionTitle title="A little about me" />
      <p className="mt-6 max-w-2xl text-lg text-ink-soft">
        I'm a UX/UI designer studying Communications and Internet Studies at Cyprus University of Technology. I focus
        on turning real problems into clear, intuitive digital experiences, combining research-driven decisions with
        thoughtful visual design.
      </p>
    </Section>
  )
}

export default AboutPreview
