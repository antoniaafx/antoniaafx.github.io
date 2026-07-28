import Section from './Section'
import SectionTitle from './SectionTitle'
import EnvironmentalArtwork from './EnvironmentalArtwork'

// Education and Experience used to have their own brief blurbs here — both
// now have their own fuller detail further down the page (as each
// ExperienceTimeline entry's expandable "Show more"), so repeating a short
// version of the same facts here would just be duplication.
const BLOCKS = [
  {
    label: 'UX/UI journey',
    text: "My interest in UX/UI design grew out of my degree — I found myself consistently drawn to the parts of any project that involved solving problems and making digital experiences easier and more intuitive to use. That interest turned into a deliberate focus on design, research, and building interfaces people actually enjoy using.",
  },
  {
    label: 'Design interests',
    text: "I'm especially drawn to interfaces that are clean, accessible, and easy to use without feeling generic — design that's user-centered and visually engaging at the same time, not one at the expense of the other.",
  },
]

// A two-page spread, not a card grid and not sticky notes — deliberately.
// Sticky notes would add a sixth container/card style to a page that
// already leans on them everywhere else (Philosophy, Skills, Timeline,
// Contact), and they suit short scattered fragments better than two full
// paragraphs. A spread is a layout device, not a container one: one panel,
// a single center gutter standing in for a book's fold, each side a
// natural home for one paragraph — and it reads as visually distinct from
// every grid-of-cards section around it, which is the rhythm break this
// page needed most. Kept deliberately modern, not skeuomorphic: no paper
// texture or color, just a hairline divider and page-margin padding. The
// one physical touch is a small paper clip (the same device already used
// on the homepage's featured project cards) pinning the two pages
// together at the seam.
function AboutBackground() {
  return (
    <Section background="muted" artwork={<EnvironmentalArtwork variant="myStory" />}>
      <SectionTitle eyebrow="Where I Started" title="My Story" />
      <div className="relative mt-10 max-w-3xl">
        <span aria-hidden="true" className="absolute -top-3 left-1/2 z-10 h-9 w-4 -translate-x-1/2 rotate-6">
          <span className="absolute inset-x-0 top-0 h-9 w-3 rounded-full border-[1.5px] border-ink-muted/70" />
          <span className="absolute left-1 top-1.5 h-6 w-3 rounded-full border-[1.5px] border-ink-muted/70" />
        </span>

        <div className="grid divide-y divide-line overflow-hidden rounded-panel border border-line bg-paper shadow-soft sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {BLOCKS.map((block) => (
            <div key={block.label} className="p-6 sm:p-8">
              <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{block.label}</p>
              <p className="mt-3 leading-relaxed text-ink-soft">{block.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default AboutBackground
