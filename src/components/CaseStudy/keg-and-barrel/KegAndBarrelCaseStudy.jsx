import Section from '../../Section'
import Container from '../../Container'
import SectionTitle from '../../SectionTitle'
import CaseHero from '../CaseHero'
import ReflectionSection from '../ReflectionSection'
import ImagePlaceholder from '../../ImagePlaceholder'
import ContactCta from '../../ContactCta'
import projects from '../../../data/projects'
import { challenge, understanding, structuring, designingExperience, finalWebsite, outcome, reflection } from '../../../data/kegAndBarrel'

// PHASE 2 — VISUAL HIERARCHY & EDITORIAL SYSTEM. Phase 1 fixed the story
// order (see the Phase 1 report); this pass is about how the reader
// experiences it — width rhythm, typographic hierarchy, and a real
// site-flow diagram — without touching the section order, the copy, or
// any asset. Section order is unchanged from Phase 1:
//   Hero → Challenge → Understanding the Experience → Structuring the
//   Website → Designing the Experience → Final Website → Outcome →
//   Reflection
//
// Width rhythm (via each Section's `containerSize`): Narrow (Challenge,
// Outcome — reading/reflective moments) → Standard (Understanding,
// Structuring — mixed text + evidence) → Wide (Designing the Experience —
// building visual momentum) → Breakout (Final Website — the one visual
// climax) → Narrow (Outcome) → Standard (Reflection). Chapter numbers
// (SectionTitle's existing `eyebrow` prop, e.g. "01 — The Challenge") stop
// after the climax — Outcome and Reflection are the closing beat, not
// another numbered chapter, the same way a magazine feature's numbering
// stops once the story has landed.
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
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-ink-soft">
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
          <div className="flex-1 rounded-control border border-line bg-paper px-6 py-4 text-center shadow-soft">
            <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">Step {index + 1}</p>
            <p className="mt-1 font-display text-xl font-semibold text-ink sm:text-2xl">{step}</p>
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

      {/* 01 — The Challenge. NARROW — a focused reading moment. The
          problem statement is the section's one large pull-statement
          (labelled "The problem," matching the small-label-then-large-
          statement pattern the brief asked for), target-user context
          folds into one supporting line beneath it, and goals stay a
          plain list — three short parallel phrases were never a card's
          worth of content. */}
      <Section background="muted" containerSize="narrow">
        <SectionTitle eyebrow="01 — The Challenge" title="The Challenge" />
        <div className="mt-10">
          <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">The problem</p>
          <p className="mt-3 text-2xl text-ink sm:text-3xl">{challenge.problem}</p>
          <p className="mt-6 text-ink-soft">{challenge.context}</p>
        </div>
        <div className="mt-10">
          <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">Goals</p>
          <div className="mt-3">
            <DotList items={challenge.goals} />
          </div>
        </div>
      </Section>

      {/* 02 — Understanding the Experience. STANDARD. The research
          context stays a normal paragraph; "Key insight" is promoted to
          the same pull-statement scale as the problem statement above —
          it's the payoff of the section, not another sentence to skim
          past. Competitor evidence gets its own, wider moment below a
          rule, styled as one shared comparison (a single divider between
          the two references) rather than two separate gallery cards. */}
      <Section containerSize="content">
        <SectionTitle eyebrow="02 — Understanding the Experience" title="Understanding the Experience" subtitle={understanding.intro} />
        <div className="mt-12 max-w-3xl">
          <h3 className="font-sans font-medium tracking-normal text-ink">{understanding.research.heading}</h3>
          <p className="mt-3 text-ink-soft">{understanding.research.body}</p>

          <div className="mt-10">
            <p className="text-caption font-medium uppercase tracking-wide text-accent-dark">{understanding.insight.heading}</p>
            <div className="mt-4 space-y-5">
              {understanding.insight.items.map((item) => (
                <p key={item} className="text-xl leading-snug text-ink sm:text-2xl">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 max-w-5xl border-t border-line pt-10">
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
      </Section>

      {/* 03 — Structuring the Website. STANDARD. The three-step site flow
          is now a real (small, deliberately simple) diagram instead of a
          typographic line — see SiteFlowDiagram above. */}
      <Section containerSize="content">
        <SectionTitle eyebrow="03 — Structuring the Website" title="Structuring the Website" subtitle={structuring.intro} />
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
          `container={false}` + two explicit Containers: the chapter
          eyebrow/heading anchors to the same `content` width/left-edge the
          homepage and every Standard section use, while the two-column
          body below gets the wider `wide` column for the image to sit in
          — so the heading doesn't jump to Wide's own (further-left) edge
          the way a single ambient Container would force it to. Same
          pattern at every other Wide/Breakout section below. */}
      <Section background="muted" containerSize="wide" container={false}>
        <Container size="content">
          <SectionTitle eyebrow="04 — Designing the Experience" title="Designing the Experience" />
        </Container>
        <Container size="wide">
          <div className="mt-10 grid gap-12 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
            <div className="max-w-xl space-y-6">
              <p className="text-ink-soft">{designingExperience.process}</p>
              <p className="text-ink-soft">{designingExperience.system}</p>
            </div>
            {designingExperience.images.map((image) => (
              <div key={image.caption} className="overflow-hidden rounded-panel border border-line bg-paper shadow-soft">
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
          <SectionTitle eyebrow="05 — Final Website" title="Final Website" subtitle={finalWebsite.intro} />
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

      {/* 06 — Outcome. NARROW — deliberately back to a calm reading width
          straight after the climax. No chapter number: this and
          Reflection are the closing beat, not another numbered chapter. */}
      <Section background="muted" containerSize="narrow">
        <SectionTitle title="Outcome" />
        <div className="mt-10">
          <p className="text-2xl text-ink sm:text-3xl">{outcome.summary}</p>
        </div>
        <div className="mt-10">
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
