import Section from '../../Section'
import Container from '../../Container'
import SectionTitle from '../../SectionTitle'
import CaseHero from '../CaseHero'
import ReflectionSection from '../ReflectionSection'
import ImagePlaceholder from '../../ImagePlaceholder'
import ContactCta from '../../ContactCta'
import projects from '../../../data/projects'
import { challenge, understanding, structuring, designingExperience, finalWebsite, outcome, reflection } from '../../../data/kegAndBarrel'

// PHASE 4 — HIERARCHY, TYPOGRAPHY & BACKGROUND-RHYTHM CORRECTION.
//
// Heading tiers, page-wide (three tiers, no new ones introduced):
//   1. Major chapter — SectionTitle's h2 (text-display-sm). Every chapter
//      gets exactly one: Project Foundations, Understanding the
//      Experience, Structuring the Website, Designing the Experience,
//      Final Website, Outcome, Reflection.
//   2. Category/subsection — plain `<h3 className="font-sans font-medium
//      tracking-normal text-ink">` (16px). Used wherever a chapter splits
//      into peer subsections: Project Foundations' The Challenge / Target
//      audience / Goals, and Understanding's "Comparative & best-practice
//      research" / "Competitor analysis".
//   3. Callout — Key Insight's `text-caption uppercase text-accent-dark`
//      label + `text-lg font-medium text-ink` statement. accent-dark here
//      is the same token CaseHero's "CASE STUDY" eyebrow and Virtual
//      Coach's StatCallout/EvidenceResponse already use for finding/
//      callout labels — not a one-off color.
//
// The Challenge / Target audience / Goals are three peer categories under
// one chapter (Project Foundations), not a chapter-with-subsections in
// their own right — so all three render at tier 2 (h3) with the same
// muted `text-ink-soft` body copy beneath them, and none of the three gets
// its own SectionTitle/h2 or heavier paragraph treatment. An earlier pass
// gave "The Challenge" its own h2 and a heavier lead paragraph, which made
// Target audience and Goals read as subsections underneath it instead of
// peers beside it.
//
// Background rhythm is a plain, gap-free alternation between the two
// existing Section tokens (`default` = bg-paper, `muted` = bg-paper-muted)
// — no new colors. Section boxes sit directly adjacent with no margin
// between them, so a background change happens exactly at the shared
// edge, with each section's own bg-texture-* gradient intact right up to
// that line — never a gap that exposes the plain body background as a
// seam. Sequence (see the top-to-bottom list at each Section below):
//   Hero(unstyled) → Challenge(muted) → Understanding(default) →
//   Structuring(muted) → Designing(default) → Final Website(muted) →
//   Outcome(default) → Reflection(muted) → ContactCta(ink, fixed sitewide).
// Structuring now differs from both neighbors, which is what actually
// signals "new chapter" — the extra margin tried in an earlier pass is
// gone; the section-to-section gap is back to each Section's own plain
// py-20/sm:py-28.
function Dot() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" aria-hidden="true" />
}

// `tone` defaults to 'text-ink' — Outcome's call site doesn't pass it, so
// it renders exactly as before. Goals (Project Foundations) passes
// 'text-ink-soft' explicitly, to match the muted body-copy color used by
// the rest of that section, without changing Outcome's unrelated bullets.
function DotList({ items, tone = 'text-ink' }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex gap-2 ${tone}`}>
          <Dot />
          {item}
        </li>
      ))}
    </ul>
  )
}

// A small, deliberately simple site-flow diagram — three nodes, one
// direction, no branching. Not the same component as Virtual Coach's
// VirtualCoachUserFlow (a genuinely different, hub-and-spoke shape) —
// forcing one shared "flow diagram" component across two structurally
// different diagrams would need more configuration surface than either
// one actually needs. A real `<ol>` (this is a genuine sequence, not
// decorative numbering) with the connector glyph switching between ↓
// (mobile, stacked) and → (sm+, row) the same way EvidenceResponse's
// connector does — decorative, aria-hidden, the node labels themselves
// carry the meaning.
function SiteFlowDiagram({ steps }) {
  return (
    <ol className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
      {steps.map((step, index) => (
        <li key={step} className="flex flex-col items-stretch gap-3 sm:flex-1 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center justify-center rounded-control border border-line bg-paper px-6 py-6 text-center shadow-soft">
            <p className="font-display text-xl font-semibold text-ink sm:text-2xl">{step}</p>
          </div>
          {index < steps.length - 1 && (
            <span aria-hidden="true" className="flex items-center justify-center text-lg text-ink-muted">
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </span>
          )}
        </li>
      ))}
    </ol>
  )
}

function KegAndBarrelCaseStudy() {
  const project = projects.find((item) => item.id === 'keg-and-barrel')

  return (
    <>
      <CaseHero {...project} />

      {/* 01 — Project Foundations. The major-chapter heading uses the same
          SectionTitle/h2 treatment as every other chapter. Under it, The
          Challenge / Target audience / Goals are three peer categories, all
          at the h3 category tier (see the top-of-file note), all at the
          same mt-10 rhythm, all in the shared `content`-width container
          with prose held to max-w-3xl so this section's left edge and line
          length match every other section. "The Challenge" no longer has
          its own SectionTitle/h2 — that's what previously made Target
          audience and Goals read as subsections underneath it instead of
          peers beside it. All three category paragraphs now share the same
          muted `text-ink-soft` body treatment too — the Challenge statement
          no longer gets its own heavier text-lg/font-medium/text-ink
          styling, so none of the three categories outweighs the others. */}
      <Section background="muted" containerSize="content">
        <SectionTitle title="Project Foundations" />
        <div className="mt-10 max-w-3xl">
          <h3 className="font-sans font-medium tracking-normal text-ink">The Challenge</h3>
          <p className="mt-3 text-ink-soft">{challenge.problem}</p>
        </div>
        <div className="mt-10 max-w-3xl">
          <h3 className="font-sans font-medium tracking-normal text-ink">Target audience</h3>
          <p className="mt-3 text-ink-soft">{challenge.context}</p>
        </div>
        <div className="mt-10 max-w-3xl">
          <h3 className="font-sans font-medium tracking-normal text-ink">Goals</h3>
          <div className="mt-4">
            <DotList items={challenge.goals} tone="text-ink-soft" />
          </div>
        </div>
      </Section>

      {/* 02 — Understanding the Experience. One research narrative, read
          top to bottom: introductory context (the SectionTitle subtitle),
          the comparative/best-practice research explanation, the
          competitor evidence that backs it up (grouped directly beneath
          the research it supports, not detached behind its own rule), and
          finally Key Insight — the section's one pull-statement, styled
          as the conclusion of everything above it, set off by a single
          rule rather than another mid-section block. */}
      <Section containerSize="content">
        <SectionTitle title="Understanding the Experience" subtitle={understanding.intro} />
        <div className="mt-12 max-w-3xl">
          <h3 className="font-sans font-medium tracking-normal text-ink">{understanding.research.heading}</h3>
          <p className="mt-3 text-ink-soft">{understanding.research.body}</p>
        </div>

        <div className="mt-8 max-w-5xl">
          <h3 className="font-sans font-medium tracking-normal text-ink">{understanding.competitors.heading}</h3>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-line">
            {understanding.competitors.items.map((item, index) => (
              <div key={item.name} className={index === 0 ? 'sm:pr-8' : 'sm:pl-8'}>
                <div className="overflow-hidden rounded-panel bg-paper-muted">
                  <div className="aspect-[4/3]">
                    {item.src ? (
                      <img src={item.src} alt={`${item.name} website screenshot`} className="h-full w-full object-cover" />
                    ) : (
                      <ImagePlaceholder label={`${item.name} — screenshot coming soon`} />
                    )}
                  </div>
                </div>
                <p className="mt-3 font-medium text-ink">{item.name}</p>
                <p className="mt-1 text-ink-soft">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 max-w-3xl border-t border-line pt-10">
          <p className="text-caption font-medium uppercase tracking-wide text-accent-dark">{understanding.insight.heading}</p>
          <div className="mt-4 space-y-3">
            {understanding.insight.items.map((item) => (
              <p key={item} className="text-lg font-medium leading-snug text-ink">
                {item}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* 03 — Structuring the Website. The three-step site flow is a real
          (small, deliberately simple) diagram — see SiteFlowDiagram above —
          with the "Step N" labels removed so each node reads as a plain
          named stop (Home → Menu → Contact) rather than a numbered
          procedure; the node text is centered in a taller card so nothing
          looks like it's missing.
          `background="muted"` (differs from Understanding's `default`
          right above it) is what marks this as a new chapter — no extra
          margin needed. The two Section boxes sit directly adjacent, so
          the color change happens right at their shared edge with no
          exposed body-background gap. */}
      <Section background="muted" containerSize="content">
        <SectionTitle title="Structuring the Website" />
        <div className="mt-10 max-w-3xl">
          <SiteFlowDiagram steps={structuring.flow} />
          <p className="mt-6 text-ink-soft">{structuring.description}</p>
        </div>
      </Section>

      {/* 04 — Designing the Experience. Text stays in a readable column on
          one side; the eventual Menu screenshot gets a real, dedicated
          column of its own (not a small gallery cell) so it will carry
          genuine presence once the real asset lands — still a placeholder
          today, per the strict no-fabrication rule.
          Single `content` Container for the whole section (heading AND the
          two-column body) — an earlier pass split these across a
          `content` Container for the heading and a wider `wide` Container
          for the body, meant to give the image extra room. `content`
          (max-w-6xl/1152px) and `wide` (max-w-[74rem]/1184px) are each
          independently centered, so above ~1184px they land at different
          left edges — a 16px drift between the heading and the paragraph
          below it. The image is already capped at max-w-sm regardless of
          the column's actual width, so `wide` was never load-bearing here;
          one shared Container removes the drift at the source instead of
          patching it with an offset. `lg:items-start` (not `items-center`)
          keeps the text column flush with the top of the row, right under
          the heading. Text column width is max-w-3xl, the same readable
          measure Understanding/Structuring's intro paragraphs use — the
          grid's own 0.62fr allocation already renders narrower than that at
          this ratio, so the cap is a consistency match, not a visible
          change. Background is `default` (not muted) to differ from
          Structuring right before it — see the top-of-file alternation
          note. */}
      <Section containerSize="content">
        <SectionTitle title="Designing the Experience" />
        <div className="mt-10 grid gap-12 lg:grid-cols-[0.62fr_0.38fr] lg:items-start">
          <div className="max-w-3xl space-y-6">
            <p className="text-ink-soft">{designingExperience.process}</p>
            <p className="text-ink-soft">{designingExperience.system}</p>
          </div>
          {designingExperience.images.map((image) => (
            <div key={image.caption} className="mx-auto w-full max-w-sm overflow-hidden rounded-panel border border-line bg-paper shadow-soft">
              <div className="aspect-[3/4]">
                {image.src ? (
                  <img src={image.src} alt={image.caption} className="h-full w-full object-cover" />
                ) : (
                  <ImagePlaceholder label="Menu page coming soon" />
                )}
              </div>
              <p className="border-t border-line p-4 text-sm text-ink-soft">{image.caption}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 05 — Final Website. BREAKOUT — the visual climax. A large desktop
          frame dominates, with the mobile companion overlapping its
          bottom-right corner at sm+ (a controlled, single overlap — not
          device chrome or a perspective mockup) and simply stacking below
          it on mobile, where an absolute overlap would just look cramped.
          Both are still placeholders — see the Phase 2 report for the
          exact composition these are designed around. Background is
          `muted` (not default) to differ from Designing right before it —
          see the top-of-file alternation note. */}
      <Section background="muted" containerSize="breakout" container={false}>
        <Container size="content">
          <SectionTitle title="Final Website" subtitle={finalWebsite.intro} />
        </Container>
        <Container size="breakout">
          <div className="relative mt-14 sm:mt-16 sm:pb-16">
            <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-panel border border-line bg-paper shadow-lifted">
              <div className="aspect-[16/10]">
                {finalWebsite.images[0]?.src ? (
                  <img
                    src={finalWebsite.images[0].src}
                    alt={finalWebsite.images[0].caption}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <ImagePlaceholder label="Homepage — desktop, coming soon" />
                )}
              </div>
            </div>
            <div className="mx-auto -mt-8 w-40 overflow-hidden rounded-panel border border-line bg-paper shadow-lifted sm:absolute sm:bottom-0 sm:right-[8%] sm:mt-0 sm:w-56">
              <div className="aspect-[9/19.5]">
                {finalWebsite.images[1]?.src ? (
                  <img
                    src={finalWebsite.images[1].src}
                    alt={finalWebsite.images[1].caption}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <ImagePlaceholder label="Homepage — mobile, coming soon" />
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 06 — Outcome. Same `content`-width container as the rest of the
          case study, prose held to max-w-3xl. No summary paragraph — the
          outcome bullets carry the section on their own, the same closing
          beat as before, just without a lead-in restating what they
          already say. No chapter number: this and Reflection are the
          closing beat, not another numbered chapter. Background is
          `default` (not muted) to differ from Final Website right before
          it; Reflection right after keeps its existing `muted`, so the
          two still differ from each other too — see the top-of-file
          alternation note. */}
      <Section containerSize="content">
        <SectionTitle title="Outcome" />
        <div className="mt-10 max-w-3xl">
          <DotList items={outcome.improvements} />
        </div>
      </Section>

      {/* 'muted' — differs from Outcome right before it, continuing the
          alternation through to the end of the page (see the top-of-file
          note). */}
      <ReflectionSection {...reflection} background="muted" />
      <ContactCta />
    </>
  )
}

export default KegAndBarrelCaseStudy
