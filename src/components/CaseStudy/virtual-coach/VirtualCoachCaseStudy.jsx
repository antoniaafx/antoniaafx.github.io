import Section from '../../Section'
import Container from '../../Container'
import SectionTitle from '../../SectionTitle'
import Timeline from '../../Timeline'
import ReflectionSection from '../ReflectionSection'
import ContactCta from '../../ContactCta'
import VirtualCoachHero from './VirtualCoachHero'
import VirtualCoachUserFlow from './VirtualCoachUserFlow'
import PhoneScreen from './PhoneScreen'
import StatCallout from './StatCallout'
import EvidenceResponse from './EvidenceResponse'
import Badge from './Badge'
import {
  context,
  challenge,
  users,
  research,
  decisions,
  flow,
  learningSystem,
  lesson,
  coachV,
  motivation,
  beyondLesson,
  social,
  testing,
  prototypeLimitations,
  revisit,
  showcase,
  nextSteps,
  reflection,
  screens,
} from '../../../data/virtualCoach'

// PHASE 2 — VISUAL HIERARCHY & EDITORIAL SYSTEM. Phase 1 fixed the story
// order and removed repetition (see the Phase 1 report); this pass is
// about how the reader experiences that story — width rhythm, a real
// evidence → response pattern, two new diagrams, and a genuinely curated
// composition for the two densest sections (Building Progression, the
// redesigned-interface showcase). Section order, content, and screen
// usage are UNCHANGED from Phase 1:
//   Hero → Where it started → The challenge → Understanding the users →
//   What the research told me → Mapping the experience → Designing how
//   users learn → Building progression → From lesson to challenge → Meet
//   Coach V → Testing the original prototype → Original → Redesign → The
//   redesigned interface → What I'd test next → Reflection / Contact
//
// VirtualCoachUserFlow is untouched — same import, same component, same
// internal logic. Only its surrounding Section now uses `containerSize=
// "wide"` so the diagram gets more room, from the outside, without
// touching the diagram itself.
//
// Chapter numbers (SectionTitle's `eyebrow`) run 01–13, stopping at the
// redesigned-interface climax — "What I'd test next" and "Reflection" are
// the closing beat, not more numbered chapters.
//
// Background rhythm groups sections by narrative beat instead of
// alternating every single one: Challenge + Understanding the users share
// a background (both are "framing the problem"), Research + Mapping share
// one (both are "what we found/mapped"), the Learning loop + Building
// progression share one (both are "how the system works"), and What I'd
// test next + Reflection share the closing background.
//
// Chapter heading → first content block follows the sitewide two-tier
// rhythm (same convention Keg & Barrel's chapters use): no subtitle → mt-10
// (Where it started, The challenge, Revisiting Virtual Coach); subtitle
// present → mt-12, since the reader has already read one paragraph before
// reaching the next content block (Understanding the users, What the
// research told me, Designing how users learn, From lesson to challenge,
// Meet Coach V, Building progression, What I'd test next). The redesigned
// interface's climax visual is the one deliberate exception (mt-14 sm:16),
// matching Keg & Barrel's own Final Website climax spacing.
function Dot() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" aria-hidden="true" />
}

function DotList({ items, textColor = 'text-ink-soft' }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className={`flex gap-2 ${textColor}`}>
          <Dot />
          {item}
        </li>
      ))}
    </ul>
  )
}

// Crop windows into the same real screens — see PhoneScreen's own comment
// for how `focus` maps to a position in the source image.
const LESSON_CROPS = [
  { aspect: '3/4', focus: 10 }, // Learn — "What is Protein?"
  { aspect: '3/4', focus: 49 }, // Apply — Recipe
  { aspect: '3/4', focus: 71 }, // Test — Fight the Protein Boss
]

// Five steps arranged in a circle (desktop/tablet) — this content is a
// LOOP (Reward feeds back into the next level's Learn step), so a linear
// Timeline was the wrong shape for it even though Phase 1 correctly gave
// it its own section. Positions are plain trigonometry (no library): step
// 0 at the top, evenly spaced clockwise. The circle and its connectors are
// aria-hidden — decorative — while the step labels themselves are real,
// readable text at every breakpoint, and a single caption below (not
// hidden) states the loop-back relationship in words for anyone who can't
// see or infer it from the shape. Mobile drops the circle for a vertical
// numbered sequence with an explicit "loops back" marker at the end,
// rather than shrinking the circle to the point of being unreadable.
function LearningLoopDiagram({ steps }) {
  const n = steps.length
  const radius = 38

  return (
    <div>
      <ol className="relative mx-auto hidden aspect-square max-w-xs list-none sm:block md:max-w-sm">
        <div aria-hidden="true" className="pointer-events-none absolute inset-[16%] rounded-full border border-dashed border-line" />
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[6%] -translate-x-1/2 text-xl text-ink-muted">
          ↻
        </div>
        {steps.map((step, index) => {
          const angle = (index / n) * 2 * Math.PI - Math.PI / 2
          const left = 50 + radius * Math.cos(angle)
          const top = 50 + radius * Math.sin(angle)
          return (
            <li
              key={step.label}
              className="absolute w-24 -translate-x-1/2 -translate-y-1/2 text-center md:w-28"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <div className="rounded-control border border-line bg-paper px-2.5 py-2 shadow-soft">
                <span className="text-caption font-medium uppercase tracking-wide text-accent-dark">{index + 1}</span>
                <p className="mt-0.5 font-display text-sm font-semibold text-ink">{step.label}</p>
              </div>
            </li>
          )
        })}
      </ol>

      <ol className="max-w-md list-none space-y-0 sm:hidden">
        {steps.map((step, index) => (
          <li key={step.label} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-paper">
                {index + 1}
              </span>
              {index < n - 1 && <span aria-hidden="true" className="mt-1 w-px flex-1 bg-line" />}
            </div>
            <div className="pb-6">
              <p className="font-semibold text-ink">{step.label}</p>
              <p className="mt-1 text-ink-soft">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-4 text-sm text-ink-muted">
        <span aria-hidden="true">↻ </span>
        Reward leads back into the next level's Learn step.
      </p>
    </div>
  )
}

function VirtualCoachCaseStudy() {
  const recipesFinding = research.stats.find((stat) => stat.note.includes('Recipes'))
  const masteryDriver = motivation.drivers.find((driver) => driver.label === 'Mastery')
  const otherDrivers = motivation.drivers.filter((driver) => driver.label !== 'Mastery')

  const decisionPairs = decisions.pairs.map((pair) => ({
    evidenceLabel: pair.top,
    evidenceText: pair.topText,
    responseText: pair.bottomText,
    visual:
      pair.bottomText === 'Recipes' && recipesFinding ? (
        <div className="text-center">
          <PhoneScreen screen={screens.recipes} size="xs" />
        </div>
      ) : undefined,
  }))

  const limitationPairs = prototypeLimitations.pairs.map((pair) => ({
    evidenceLabel: 'Designed',
    evidenceText: pair.designed,
    responseLabel: 'Prototype limitation',
    responseText: pair.limitation,
  }))

  return (
    <>
      <VirtualCoachHero />

      {/* 01 — Where it started. STANDARD. Facts render as a compact,
          divider-separated list (dt/dd, matching the hero's own metadata
          pattern) instead of three bordered cards — this is light context,
          not content that needs a container. */}
      <Section background="muted" containerSize="content">
        <SectionTitle eyebrow="01 — Where It Started" title="Where it started" />
        <div className="mt-10 grid gap-12 lg:grid-cols-[0.6fr_0.4fr] lg:items-start">
          <div className="max-w-2xl space-y-4">
            {context.intro.map((paragraph) => (
              <p key={paragraph} className="text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>
          <dl className="divide-y divide-line border-y border-line sm:border-0 sm:divide-y-0 sm:space-y-4">
            {context.facts.map((fact) => (
              <div key={fact.label} className="py-3 sm:border-t sm:border-line sm:py-3 sm:first:border-t-0 sm:first:pt-0">
                <dt className="text-caption font-medium uppercase tracking-wide text-ink-muted">{fact.label}</dt>
                <dd className="mt-1 text-ink-soft">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* 02 — The challenge. NARROW. The "How might we" pull-quote is
          preserved exactly. Objectives drop their bordered-card treatment
          for a plain three-column list — three one-sentence items don't
          need a box each. */}
      <Section containerSize="narrow">
        <SectionTitle eyebrow="02 — The Challenge" title="The challenge" />
        <div className="mt-10">
          <p className="text-ink-soft">{challenge.body}</p>
          <p className="mt-8 border-l-2 border-accent pl-6 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {challenge.question}
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {challenge.objectives.map((objective) => (
            <div key={objective.label}>
              <p className="text-caption font-medium uppercase tracking-wide text-accent-dark">{objective.label}</p>
              <p className="mt-2 text-ink-soft">{objective.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 03 — Understanding the users. NARROW — same background-group as
          the Challenge above (both are "framing the problem"), so no
          background alternation between them. Personas lose their full
          bordered-card treatment for a left accent rule — enough to keep
          the two clearly separate without a box inside a box inside the
          section container. */}
      <Section containerSize="narrow">
        <SectionTitle eyebrow="03 — Understanding the Users" title="Understanding the users" subtitle={users.intro} />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {users.personas.map((persona) => (
            <div key={persona.label} className="border-l-2 border-line pl-5">
              <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{persona.label}</p>
              <h3 className="mt-2 text-xl">{persona.title}</h3>
              <div className="mt-4">
                <DotList items={persona.points} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-line pt-10">
          <p className="font-medium text-ink">{users.needsIntro}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {users.needs.map((need) => (
              <Badge key={need}>{need}</Badge>
            ))}
          </div>
        </div>
      </Section>

      {/* 04 — What the research told me. WIDE. StatCallout's big-number
          pattern is already the model "evidence looks like evidence"
          treatment (Phase 1 kept it); the decisions half now uses
          EvidenceResponse instead of ArrowPair's bordered cards, and the
          Recipes screen sits directly in its matching row's response
          column — not off in a corner — so it reads as proof of that one
          decision, not a product showcase.
          `container={false}` + two explicit Containers: the chapter
          eyebrow/heading/intro anchors to the same `content` width/left-
          edge as the homepage and every Standard section, while the
          evidence below keeps the wider `wide` column — otherwise a
          single ambient Wide Container drags the heading to Wide's own
          (further-left) edge too. Same pattern at every other Wide/
          Breakout section below. */}
      <Section background="muted" containerSize="wide" container={false}>
        <Container size="content">
          <SectionTitle eyebrow="04 — What The Research Told Me" title="What the research told me" subtitle={research.intro} />
        </Container>
        <Container size="wide">
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {research.stats.map((stat) => (
              <StatCallout key={stat.value + stat.label} {...stat} />
            ))}
          </div>

          <div className="mt-16 border-t border-line pt-10 sm:mt-20">
            <p className="max-w-2xl text-ink-soft">{decisions.intro}</p>
            <div className="mt-8">
              <EvidenceResponse pairs={decisionPairs} />
            </div>
          </div>
        </Container>
      </Section>

      {/* 05 — Mapping the experience. WIDE — the one change to this
          section is its container. VirtualCoachUserFlow itself, and the
          Section wrapping it, are otherwise untouched: same component,
          same desktop/tablet/mobile logic. The onboarding sequence stays
          compressed to one supporting line, as Phase 1 left it. */}
      <Section background="muted" containerSize="wide" container={false}>
        <Container size="content">
          <SectionTitle eyebrow="05 — Mapping The Experience" title="Mapping the experience" subtitle={flow.intro} />
          <p className="mt-6 max-w-2xl text-sm text-ink-muted">{flow.steps.map((step) => step.label).join(' → ')}</p>
        </Container>
        <Container size="wide">
          <div className="mt-8">
            <VirtualCoachUserFlow />
          </div>
        </Container>
      </Section>

      {/* 06 — Designing how users learn. WIDE — this content is a loop,
          so it's now a real loop diagram (see LearningLoopDiagram above)
          instead of a linear Timeline, which implied a one-way sequence
          it isn't. Same background group as Building progression below
          (both are "how the system works"). */}
      <Section containerSize="wide" container={false}>
        <Container size="content">
          <SectionTitle eyebrow="06 — Designing How Users Learn" title="Designing how users learn" subtitle={learningSystem.intro} />
        </Container>
        <Container size="wide">
          <div className="mt-12">
            <LearningLoopDiagram steps={learningSystem.loop} />
          </div>
        </Container>
      </Section>

      {/* 07 — Building progression. WIDE. Hierarchy is now explicit in
          scale, not just section order: Levels (Primary) gets the largest
          screen and the most space; the four motivation mechanics
          (Supporting) compress into one compact row, Streak included
          inline rather than as its own centred block; Achievements
          (Detail) is badges only, folded into Mastery; Habit Tracker and
          Friends/Leaderboard (Secondary support) close the section as the
          smallest, quietest items on the page — `xs`-sized screens, not
          `sm`. This is the section Phase 1 measured at ~3,167px on
          desktop; the goal here is the same information taking
          meaningfully less height and reading faster, not less
          information. */}
      <Section containerSize="wide" container={false}>
        <Container size="content">
          <SectionTitle eyebrow="07 — Building Progression" title="Building progression" subtitle={learningSystem.levelsIntro} />
        </Container>
        <Container size="wide">
          {/* Primary */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-center">
            <PhoneScreen screen={screens.levels} size="lg" className="mx-auto" />
            <div>
              <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {learningSystem.levelsList.map((level, index) => (
                  <li key={level} className="rounded-control border border-line px-3 py-2 text-sm text-ink-soft">
                    <span className="mr-1.5 text-ink-muted">{index + 1}.</span>
                    {level}
                  </li>
                ))}
              </ol>
              <div className="mt-6">
                <DotList items={learningSystem.levelsCallouts} />
              </div>
            </div>
          </div>

          {/* Supporting — compact mechanism row */}
          <div className="mt-14 border-t border-line pt-10">
            <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">Motivation mechanics</p>
            <p className="mt-2 max-w-2xl text-ink-soft">{motivation.intro}</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex min-w-0 items-start gap-3">
                <PhoneScreen screen={screens.streak} size="xs" className="shrink-0" />
                <div className="min-w-0">
                  <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">Consistency</p>
                  <p className="mt-1 font-medium text-ink">Daily streak</p>
                  <p className="mt-1 text-ink-soft">Encourages users to return.</p>
                </div>
              </div>
              {otherDrivers
                .filter((driver) => driver.label !== 'Consistency')
                .map((driver) => (
                  <div key={driver.label}>
                    <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{driver.label}</p>
                    <p className="mt-1 font-medium text-ink">{driver.title}</p>
                    <p className="mt-1 text-ink-soft">{driver.body}</p>
                  </div>
                ))}
              {masteryDriver && (
                <div>
                  <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{masteryDriver.label}</p>
                  <p className="mt-1 font-medium text-ink">{masteryDriver.title}</p>
                  <p className="mt-1 text-ink-soft">{masteryDriver.body}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {motivation.achievementsExamples.slice(0, 4).map((achievement) => (
                      <Badge key={achievement}>{achievement}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <p className="mt-6 max-w-md text-sm text-ink-soft">
              <strong className="font-medium text-ink">{motivation.social.title}</strong> — {motivation.social.body}
            </p>
          </div>

          {/* Secondary support — smallest, quietest tier */}
          <div className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
            <div className="flex min-w-0 gap-3">
              <PhoneScreen screen={screens.habits} size="xs" className="shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-medium text-ink">{beyondLesson.items[1].label}</p>
                <p className="mt-0.5 text-sm text-ink-soft">{beyondLesson.items[1].body}</p>
              </div>
            </div>
            <div className="flex min-w-0 gap-3">
              <div className="flex shrink-0 -space-x-4">
                <PhoneScreen screen={screens.friends} size="xs" />
                <PhoneScreen screen={screens.leaderboard} size="xs" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-ink">Friends + Leaderboard</p>
                <p className="mt-0.5 text-sm text-ink-soft">{social.intro}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 08 — From lesson to challenge. STANDARD. The three detail crops
          now sit directly under the full Level 2 screen they're drawn
          from — a main + detail relationship, not three items with equal
          weight to the full screen — and read as a stacked list on
          mobile (image left, caption right) rather than the fixed
          3-column grid the Phase 1 fix already moved away from. */}
      <Section background="muted" containerSize="content">
        <SectionTitle eyebrow="08 — From Lesson To Challenge" title="From lesson to challenge" subtitle={lesson.intro} />
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.5fr_0.5fr] lg:items-start">
          <Timeline items={lesson.steps} />
          <div>
            <PhoneScreen screen={screens.level2} size="lg" className="mx-auto" />
            <div className="mt-6 space-y-4 sm:flex sm:justify-center sm:gap-6 sm:space-y-0">
              {lesson.detailCrops.map((detail, index) => (
                <div key={detail.caption} className="flex items-center gap-3 sm:flex-col sm:text-center">
                  <PhoneScreen
                    screen={{ ...screens.level2, alt: '' }}
                    size="xs"
                    crop={LESSON_CROPS[index]}
                    className="mx-auto shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-medium text-ink">{detail.caption}</p>
                    <p className="mt-0.5 text-sm text-ink-soft">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 09 — Meet Coach V. STANDARD. Unchanged from Phase 1's structure —
          already a deliberate, restrained pair (Welcome + Introduction),
          UI-focused, no decorative additions. */}
      <Section background="muted" containerSize="content">
        <SectionTitle eyebrow="09 — Meet Coach V" title="Meet Coach V" subtitle={coachV.subtitle} />
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-ink-soft">{coachV.intro}</p>
            <div className="mt-5">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {coachV.roles.map((role) => (
                  <li key={role} className="flex gap-2 text-ink-soft">
                    <Dot />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            {coachV.states.map((state) => (
              <div key={state.key}>
                <PhoneScreen screen={screens[state.key]} size="sm" />
                <p className="mt-2 text-center text-caption font-medium uppercase tracking-wide text-ink-muted">
                  {state.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 10 — Testing the original prototype. STANDARD. The badge stays
          the persistent "this is the original prototype" label, placed
          before any finding. The platform-limitations half now uses
          EvidenceResponse instead of ArrowPair's cards, matching the
          research section's evidence treatment. */}
      <Section containerSize="content">
        <SectionTitle eyebrow="10 — Testing The Original Prototype" title="Testing the original prototype" />
        <div className="mt-6">
          <Badge>{testing.badge}</Badge>
        </div>
        <p className="mt-6 max-w-2xl text-ink-soft">{testing.intro}</p>
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {testing.stats.map((stat) => (
            <StatCallout key={stat.value} {...stat} />
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-muted">{testing.note}</p>

        <div className="mt-16 max-w-2xl border-t border-line pt-10 sm:mt-20">
          <h3 className="text-xl sm:text-2xl">{testing.limitationsHeading}</h3>
          <div className="mt-4">
            <DotList items={testing.limitations} />
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <h3 className="text-xl sm:text-2xl">Where the platform fell short</h3>
          <p className="mt-3 max-w-2xl text-ink-soft">{prototypeLimitations.intro}</p>
          <div className="mt-8">
            <EvidenceResponse pairs={limitationPairs} />
          </div>
          <div className="mt-10 max-w-2xl">
            <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">
              Also planned, but not functional in the prototype
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {prototypeLimitations.extra.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 11 — Original → Redesign (Then/Now). NARROW-to-standard, and
          deliberately more breathing room than an ordinary section (larger
          gap before the then/now grid) — this is the pivot: everything
          above is the original project, everything below is the response
          to it. Then/Now styling is UNCHANGED — same accent-tinted "Now"
          card, same content, per the brief. */}
      <Section background="muted" containerSize="content">
        <SectionTitle eyebrow="11 — Original → Redesign" title="Revisiting Virtual Coach" />
        <div className="mt-10 max-w-2xl space-y-4">
          {revisit.body.map((paragraph) => (
            <p key={paragraph} className="text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-16 grid gap-6 sm:mt-20 sm:grid-cols-2">
          <div className="rounded-panel border border-line p-6">
            <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{revisit.then.label}</p>
            <ul className="mt-3 space-y-2">
              {revisit.then.items.map((item) => (
                <li key={item} className="text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-panel border border-accent-dark/30 bg-accent-soft/30 p-6">
            <p className="text-caption font-medium uppercase tracking-wide text-accent-dark">{revisit.now.label}</p>
            <ul className="mt-3 space-y-2">
              {revisit.now.items.map((item) => (
                <li key={item} className="text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 12 — The redesigned interface (climax). BREAKOUT. Home is the
          one large, dominant screen (`xl`); Profile and Edit Profile sit
          smaller, overlapping its bottom edge at sm+ (the same controlled-
          overlap technique Keg & Barrel's Final Website uses — a shared
          visual language between the two case studies' climaxes without a
          shared component forcing it), and simply stack below it on
          mobile. Still exactly the curated set Phase 1 established — no
          screens added to fill the wider space. */}
      <Section background="muted" containerSize="breakout" container={false}>
        <Container size="content">
          <SectionTitle eyebrow="12 — The Redesigned Interface" title="The redesigned interface" subtitle={showcase.intro} />
        </Container>
        <Container size="breakout">
          <div className="relative mt-14 flex flex-col items-center sm:mt-16 sm:pb-10">
            <PhoneScreen screen={screens[showcase.anchor.key]} size="xl" priority />
            <div className="mt-8 flex justify-center gap-6 sm:absolute sm:bottom-0 sm:left-1/2 sm:mt-0 sm:-translate-x-1/2 sm:gap-10">
              {showcase.supporting.map((item) => (
                <div key={item.key} className="text-center">
                  <PhoneScreen screen={screens[item.key]} size="sm" />
                  <p className="mt-2 text-caption font-medium uppercase tracking-wide text-ink-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 13 — What I'd test next. NARROW. A compact numbered editorial
          list (top rule + number per item) instead of a card grid — still
          the same 4 themes Phase 1 curated. No chapter number of its own:
          from here on, this and Reflection are the closing beat. */}
      <Section containerSize="narrow">
        <SectionTitle title="What I'd test next" subtitle={nextSteps.intro} />
        <div className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {nextSteps.items.map((question, index) => (
            <div key={question.label} className="border-t border-line pt-4">
              <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{String(index + 1).padStart(2, '0')}</p>
              <p className="mt-1 font-medium text-ink">{question.label}</p>
              <p className="mt-1 text-ink-soft">{question.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* No background override — 'default' is already ReflectionSection's
          own default, matching "What I'd test next" right above it as the
          closing background group. */}
      <ReflectionSection {...reflection} />
      <ContactCta />
    </>
  )
}

export default VirtualCoachCaseStudy
