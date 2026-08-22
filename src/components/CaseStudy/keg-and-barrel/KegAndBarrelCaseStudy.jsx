import Section from '../../Section'
import Container from '../../Container'
import SectionTitle from '../../SectionTitle'
import CaseHero from '../CaseHero'
import ReflectionSection from '../ReflectionSection'
import ImagePlaceholder from '../../ImagePlaceholder'
import ContactCta from '../../ContactCta'
import projects from '../../../data/projects'
import { challenge, understanding, structuring, designingExperience, finalWebsite, outcome, reflection } from '../../../data/kegAndBarrel'

// PHASE 3 — HIERARCHY & CONSISTENCY REFINEMENT. Chapter eyebrows
// ("01 — The Challenge" etc.) are removed site-wide on this page —
// headings now open each section directly. Section order is unchanged:
//   Hero → Challenge → Understanding the Experience → Structuring the
//   Website → Designing the Experience → Final Website → Outcome →
//   Reflection
//
// Every section (including Challenge and Outcome, previously on a
// narrower container) now shares the same `content` container width, with
// prose constrained to an inner max-w-3xl wrapper where needed — so every
// section's left edge and content width line up. Wide/Breakout stay wider
// only where evidence (Designing the Experience's image, Final Website's
// mockups) genuinely needs the extra room. Emphasis throughout comes from
// placement, spacing, and weight rather than one-off oversized text. The
// Challenge statement is the page's one true pull-statement; Key Insight
// sits one tier down, at the same text-lg scale SectionTitle's own
// subtitle already uses, so it reads as an important conclusion rather
// than competing with actual section headings.
//
// Background rhythm groups sections by narrative beat rather than
// alternating every single one (a `default,muted,default,muted...`
// pattern reads as mechanical striping at this length): Challenge on its
// own, Understanding + Structuring share a background (both are "the
// thinking"), Designing breaks from that, Final Website breaks again
// (the climax), Outcome + Reflection share the closing background.
function Dot() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" aria-hidden="true" />
}

function DotList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-ink">
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

      {/* 01 — The Challenge. Same `content`-width container as the rest of
          the case study, with prose held to an inner max-w-3xl so the
          section's left edge and line length match everywhere else. Three
          distinct subsections (the problem statement, Target audience,
          Goals) at the same mt-10 rhythm — Target audience gets the same
          caption-label treatment Goals already used, so all three read as
          separate, equally-weighted pieces of information rather than the
          audience line looking like a continuation of the problem
          paragraph. */}
      <Section background="muted" containerSize="content">
        <SectionTitle title="The Challenge" />
        <div className="mt-10 max-w-3xl">
          <p className="text-xl font-medium leading-snug text-ink sm:text-2xl">{challenge.problem}</p>
        </div>
        <div className="mt-10 max-w-3xl">
          <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">Target audience</p>
          <p className="mt-3 text-ink-soft">{challenge.context}</p>
        </div>
        <div className="mt-10 max-w-3xl">
          <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">Goals</p>
          <div className="mt-4">
            <DotList items={challenge.goals} />
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
          looks like it's missing. Extra `mt-8 sm:mt-14` on top of the
          Section's own standard padding widens the gap after Key Insight
          specifically — Understanding and Structuring share a background
          by design (see the top-of-file note), so this section needed its
          own stronger-than-usual lead-in to still read as a new chapter
          rather than borrowing the alternating-background cue every other
          chapter break in this page uses. */}
      <Section containerSize="content" className="mt-8 sm:mt-14">
        <SectionTitle title="Structuring the Website" subtitle={structuring.intro} />
        <div className="mt-10 max-w-3xl">
          <SiteFlowDiagram steps={structuring.flow} />
          <p className="mt-6 text-ink-soft">{structuring.description}</p>
        </div>
      </Section>

      {/* 04 — Designing the Experience. WIDE — the story is meant to feel
          increasingly visual here. Text stays in a readable column on one
          side; the eventual Menu screenshot gets a real, dedicated column
          of its own (not a small gallery cell) so it will carry genuine
          presence once the real asset lands — still a placeholder today,
          per the strict no-fabrication rule.
          `container={false}` + two explicit Containers: the heading
          anchors to the same `content` width/left-edge the homepage and
          every Standard section use, while the two-column body below gets
          the wider `wide` column for the image to sit in — so the heading
          doesn't jump to Wide's own (further-left) edge the way a single
          ambient Container would force it to. Same pattern at every other
          Wide/Breakout section below. `lg:items-start` (not `items-center`)
          keeps the text column flush with the top of the row, right under
          the heading, instead of vertically centering against the image
          column and reading as detached from it. The image column is
          capped at max-w-sm so the placeholder (and, later, the real
          screenshot) doesn't dominate the section — same aspect-[3/4]
          ratio, just a smaller frame. */}
      <Section background="muted" containerSize="wide" container={false}>
        <Container size="content">
          <SectionTitle title="Designing the Experience" />
        </Container>
        <Container size="wide">
          <div className="mt-10 grid gap-12 lg:grid-cols-[0.62fr_0.38fr] lg:items-start">
            <div className="max-w-xl space-y-6">
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
        </Container>
      </Section>

      {/* 05 — Final Website. BREAKOUT — the visual climax. A large desktop
          frame dominates, with the mobile companion overlapping its
          bottom-right corner at sm+ (a controlled, single overlap — not
          device chrome or a perspective mockup) and simply stacking below
          it on mobile, where an absolute overlap would just look cramped.
          Both are still placeholders — see the Phase 2 report for the
          exact composition these are designed around. */}
      <Section containerSize="breakout" container={false}>
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
          closing beat, not another numbered chapter. */}
      <Section background="muted" containerSize="content">
        <SectionTitle title="Outcome" />
        <div className="mt-10 max-w-3xl">
          <DotList items={outcome.improvements} />
        </div>
      </Section>

      {/* 'muted' — same closing background as Outcome, grouping them as
          one narrative beat rather than alternating for its own sake. */}
      <ReflectionSection {...reflection} background="muted" />
      <ContactCta />
    </>
  )
}

export default KegAndBarrelCaseStudy
