import Section from './Section'

// Home's own "About Me" section, not a preview linking out to a separate
// page anymore — About is hidden from primary navigation, so this is now
// the only place this introduction lives for a public visitor. Merges
// what used to be two overlapping intros (AboutHero's "currently
// studying..." line and this component's old two-paragraph version) into
// one short paragraph. Kept deliberately brief — the case studies do the
// work of showing process; this just introduces.
//
// Uses Section's default ("content", max-w-6xl) container — same as
// AboutSkills/AboutContact below it — rather than the narrower "narrow"
// (max-w-3xl) it used before, so its left edge lines up with the other
// sections instead of reading as a centered, disconnected block. Heading
// + paragraph share one `max-w-2xl` wrapper (rather than SectionTitle's
// own separately-capped title) so the two read as a single grouped
// composition instead of floating pieces.
//
// The short accent line above the heading is this section's one
// deliberate bit of editorial character — no label text (that read as
// its own UI chip rather than a quiet detail). Projects (above) and
// Experience (below) still carry more visual/informational weight by
// design, so this stays understated.
function AboutPreview() {
  return (
    <Section>
      <div className="max-w-2xl">
        <span aria-hidden="true" className="block h-0.5 w-10 rounded-full bg-accent" />
        <h2 className="mt-4 text-display-sm">A little about me</h2>
        <p className="mt-3 text-lg text-ink-soft">
          I'm a UX/UI designer studying Communications and Internet Studies at Cyprus University of Technology. I focus
          on turning real problems into clear, intuitive digital experiences, combining research-driven decisions with
          thoughtful visual design.
        </p>
      </div>
    </Section>
  )
}

export default AboutPreview
