import Section from '../../Section'
import SectionTitle from '../../SectionTitle'
import Timeline from '../../Timeline'
import ReflectionSection from '../ReflectionSection'
import ContactCta from '../../ContactCta'
import VirtualCoachHero from './VirtualCoachHero'
import VirtualCoachUserFlow from './VirtualCoachUserFlow'
import PhoneScreen from './PhoneScreen'
import StatCallout from './StatCallout'
import ArrowPair from './ArrowPair'
import FactCard from './FactCard'
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

// A dedicated case-study page rather than the generic CaseStudy.jsx
// renderer (overview/research/process/uiDesign/results/reflection) every
// other project uses — that renderer assumes a single desktop 16:9 hero
// shot and a fixed six-section shape, neither of which fits a mobile app
// with a gamified learning loop, level structure, and a distinct
// original-prototype-vs-redesign story to tell. Still routed through the
// same /projects/:slug architecture (see CaseStudy.jsx) and still built
// entirely from the site's existing Section/SectionTitle/Timeline/
// ReflectionSection/ContactCta components plus the same rounded-panel/
// border-line card recipe used throughout — nothing here is a new design
// system, just new content arranged with the existing one.
//
// A dot-bullet list is reused often below — same recipe ProjectOverview
// and ResultsSection already use for exactly this.
function Dot() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" aria-hidden="true" />
}

// Crop windows into the same real screens, reused across a few sections —
// see PhoneScreen's own comment for how `focus` maps to a position in the
// source image. `focus` values below were chosen by eye against each
// source screen's actual layout (see the implementation report for the
// full breakdown); they're not exact pixel measurements.
const TOP_CROP = { aspect: '9/19.5', focus: 0 }
const LEVELS_PROGRESS_CROP = { aspect: '9/19.5', focus: 11 }
const LESSON_CROPS = [
  { aspect: '3/4', focus: 10 }, // Learn — "What is Protein?"
  { aspect: '3/4', focus: 49 }, // Apply — Recipe
  { aspect: '3/4', focus: 71 }, // Test — Fight the Protein Boss
]

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

function VirtualCoachCaseStudy() {
  return (
    <>
      <VirtualCoachHero />

      {/* Where it started */}
      <Section background="muted">
        <SectionTitle title="Where it started" />
        <div className="mt-10 grid gap-12 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
          <div className="max-w-2xl space-y-4">
            {context.intro.map((paragraph) => (
              <p key={paragraph} className="text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {context.facts.map((fact) => (
              <FactCard key={fact.label} label={fact.label}>
                {fact.value}
              </FactCard>
            ))}
          </div>
        </div>
      </Section>

      {/* The challenge + learning objectives */}
      <Section>
        <SectionTitle title="The challenge" />
        <div className="mt-10 max-w-3xl">
          <p className="text-ink-soft">{challenge.body}</p>
          <p className="mt-8 border-l-2 border-accent pl-6 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {challenge.question}
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {challenge.objectives.map((objective) => (
            <div key={objective.label} className="rounded-panel border border-line p-6">
              <p className="text-caption font-medium uppercase tracking-wide text-accent-dark">{objective.label}</p>
              <p className="mt-2 text-ink-soft">{objective.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Understanding the users */}
      <Section background="muted">
        <SectionTitle title="Understanding the users" subtitle={users.intro} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {users.personas.map((persona) => (
            <div key={persona.label} className="rounded-panel border border-line p-6">
              <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{persona.label}</p>
              <h3 className="mt-2 text-xl">{persona.title}</h3>
              <div className="mt-4">
                <DotList items={persona.points} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-3xl border-t border-line pt-10">
          <p className="font-medium text-ink">{users.needsIntro}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {users.needs.map((need) => (
              <Badge key={need}>{need}</Badge>
            ))}
          </div>
        </div>
      </Section>

      {/* What the research told us */}
      <Section>
        <SectionTitle title="What the research told us" subtitle={research.intro} />
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {research.stats.map((stat) => (
            <StatCallout key={stat.value + stat.label} {...stat} />
          ))}
        </div>
      </Section>

      {/* Turning insights into decisions */}
      <Section background="muted">
        <SectionTitle title="Turning insights into decisions" subtitle={decisions.intro} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {decisions.pairs.map((pair) => (
            <ArrowPair
              key={pair.topText}
              topLabel={pair.top}
              topText={pair.topText}
              bottomLabel="Design response"
              bottomText={pair.bottomText}
            />
          ))}
        </div>
      </Section>

      {/* Mapping the experience */}
      <Section>
        <SectionTitle title="Mapping the experience" subtitle={flow.intro} />
        <div className="mt-12 max-w-2xl">
          <Timeline items={flow.steps} />
        </div>
        {/* The reconstructed flow needs its own full width for the
            hub-and-spoke layout below — a narrower two-column split (like
            the Timeline above uses) doesn't leave room for five branch
            columns. mt-8, tighter than the mt-12 above the Timeline: this
            diagram is a continuation of the same "mapping the experience"
            thought, not a new sub-topic that needs a full section-level
            gap of its own. */}
        <div className="mt-8">
          <VirtualCoachUserFlow />
        </div>
      </Section>

      {/* Designing how users learn + Levels */}
      <Section background="muted">
        <SectionTitle title="Designing how users learn" subtitle={learningSystem.intro} />
        <div className="mt-12 max-w-3xl">
          <Timeline items={learningSystem.loop} markerColor="bg-accent" />
        </div>

        <div className="mt-20 border-t border-line pt-16 sm:mt-24">
          <h3 className="text-2xl sm:text-3xl">Six levels, one learning path</h3>
          <p className="mt-3 max-w-2xl text-ink-soft">{learningSystem.levelsIntro}</p>
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
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
        </div>
      </Section>

      {/* From lesson to challenge */}
      <Section>
        <SectionTitle title="From lesson to challenge" subtitle={lesson.intro} />
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
          <Timeline items={lesson.steps} />
          <PhoneScreen screen={screens.level2} size="lg" className="mx-auto" />
        </div>

        {/* The full screen above shows the whole task sequence at once;
            these are labelled detail crops of that same image (not
            separate assets — see LESSON_CROPS) so the three key moments
            read clearly without hunting for tiny text in a long
            screenshot. */}
        <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-6">
          {lesson.detailCrops.map((detail, index) => (
            <div key={detail.caption}>
              <PhoneScreen
                screen={{ ...screens.level2, alt: '' }}
                size="sm"
                crop={LESSON_CROPS[index]}
                className="mx-auto"
              />
              <p className="mt-3 text-center font-medium text-ink">{detail.caption}</p>
              <p className="mt-1 text-center text-sm text-ink-soft">{detail.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Meet Coach V */}
      <Section background="muted">
        <SectionTitle title="Meet Coach V" subtitle={coachV.subtitle} />
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

      {/* Making progress visible */}
      <Section>
        <SectionTitle title="Making progress visible" subtitle={motivation.intro} />

        {/* Streak in full, plus a cropped detail of the Levels screen's
            star ratings — not the same full Levels/Achievements screens
            already shown in the hero and in their own sections below. */}
        <div className="mt-10 flex flex-wrap items-end justify-center gap-4">
          <PhoneScreen screen={screens.streak} size="sm" />
          <PhoneScreen screen={{ ...screens.levels, alt: '' }} size="md" crop={LEVELS_PROGRESS_CROP} />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {motivation.drivers.map((driver) => (
            <div key={driver.label}>
              <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{driver.label}</p>
              <p className="mt-1 font-medium text-ink">{driver.title}</p>
              <p className="mt-1 text-ink-soft">{driver.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-md border-t border-line pt-6">
          <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{motivation.social.label}</p>
          <p className="mt-1 font-medium text-ink">{motivation.social.title}</p>
          <p className="mt-1 text-ink-soft">{motivation.social.body}</p>
        </div>

        <div className="mt-16 border-t border-line pt-12 sm:mt-20">
          <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
            <PhoneScreen screen={screens.achievements} size="lg" className="mx-auto" />
            <div>
              <h3 className="text-2xl sm:text-3xl">Achievements</h3>
              <p className="mt-3 text-ink-soft">Specific accomplishments users can unlock along the way:</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {motivation.achievementsExamples.map((achievement) => (
                  <Badge key={achievement}>{achievement}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Learning beyond the lesson + Learning with others */}
      <Section background="muted">
        <SectionTitle title="Learning beyond the lesson" subtitle={beyondLesson.intro} />
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {beyondLesson.items.map((item, index) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <PhoneScreen screen={screens[index === 0 ? 'recipes' : 'habits']} size="md" />
              <p className="mt-4 font-medium text-ink">{item.label}</p>
              <p className="mt-1 max-w-xs text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-line pt-10 sm:mt-20">
          <h3 className="text-xl sm:text-2xl">Learning with others</h3>
          <p className="mt-3 max-w-2xl text-ink-soft">{social.intro}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <PhoneScreen screen={screens.friends} size="sm" />
            <PhoneScreen screen={screens.leaderboard} size="sm" />
          </div>
        </div>
      </Section>

      {/* Testing the original prototype + research limitations */}
      <Section>
        <SectionTitle title="Testing the original prototype" />
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
      </Section>

      {/* Where the original prototype fell short */}
      <Section background="muted">
        <SectionTitle title="Where the original prototype fell short" subtitle={prototypeLimitations.intro} />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {prototypeLimitations.pairs.map((pair) => (
            <ArrowPair
              key={pair.designed}
              topLabel="Designed"
              topText={pair.designed}
              bottomLabel="Prototype limitation"
              bottomText={pair.limitation}
            />
          ))}
        </div>
        <div className="mt-10 max-w-2xl border-t border-line pt-8">
          <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">
            Also planned, but not functional in the prototype
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {prototypeLimitations.extra.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
      </Section>

      {/* From university project to independent redesign */}
      <Section>
        <SectionTitle title="Revisiting Virtual Coach" />
        <div className="mt-10 max-w-2xl space-y-4">
          {revisit.body.map((paragraph) => (
            <p key={paragraph} className="text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
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

      {/* Redesigned UI showcase */}
      <Section background="muted">
        <SectionTitle title="The redesigned interface" subtitle={showcase.intro} />
        <div className="mt-12 space-y-14">
          {showcase.tiers.map((tier) => (
            <div key={tier.label}>
              <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{tier.label}</p>
              <div className="mt-4 flex flex-wrap gap-4">
                {tier.screens.map((item) => (
                  <PhoneScreen
                    key={item.key}
                    screen={item.crop ? { ...screens[item.key], alt: '' } : screens[item.key]}
                    size={item.size}
                    crop={item.crop ? TOP_CROP : undefined}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What I'd test next */}
      <Section>
        <SectionTitle title="What I'd test next" subtitle={nextSteps.intro} />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {nextSteps.items.map((question) => (
            <div key={question.label}>
              <p className="font-medium text-ink">{question.label}</p>
              <p className="mt-1 text-ink-soft">{question.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <ReflectionSection {...reflection} />
      <ContactCta />
    </>
  )
}

export default VirtualCoachCaseStudy
