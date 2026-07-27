import { Link } from 'react-router-dom'

// Same 5-stage methodology on every card — a consistent "how I work" badge
// row, not a per-project claim about which stages were actually documented
// for that specific project (several of these cards don't have a full case
// study yet, so nothing here asserts project-specific facts).
const PROCESS_STAGES = ['Research', 'Strategy', 'Wireframes', 'UI Design', 'Prototype']

function ProjectCard({ index = 0, id, title, description, problemStatement, heroImage, category }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    // Two paper sheets behind the card. Root cause of the last pass not
    // reading as visible: this wrapper was `relative` with no z-index, so
    // it never established its own stacking context — the sheets'
    // negative z-index was being compared against ancestors far beyond
    // this card (Section backgrounds, sibling grid cells), not reliably
    // "just behind" it. Fixed with an explicit, self-contained hierarchy:
    // the wrapper gets `relative z-0` (an explicit, non-auto z-index is
    // what actually creates a stacking context — `relative` alone does
    // not), and every layer inside it uses positive z-index (0/1/2)
    // scoped to that one context, so paint order is guaranteed regardless
    // of what's around it in the grid. `overflow-visible` is explicit
    // too, even though nothing here currently clips it.
    //
    // Sheets/card all respond to one named hover group (`group/file`, on
    // this wrapper) rather than the article's own unnamed `group` (kept
    // only for its existing image-zoom effect), since the sheets are the
    // article's siblings, not descendants of it. `group-focus-within/file:`
    // mirrors every `group-hover/file:` state so keyboard focus on the
    // "View case study" link reveals the same effect hover does. Sheets
    // are `pointer-events-none` and stay well inside the grid's own
    // gap-8, so nothing here can be clicked, shift layout, or overlap a
    // neighbouring card.
    <div className="group/file relative z-0 overflow-visible">
      {/* Back sheet — a pale purple tint (accent-soft), already used
          elsewhere in the palette (::selection, skill badges) rather than
          a new colour. Border is ink-muted at partial opacity, not the
          near-invisible `line` token — paper-on-paper needs a visible
          edge, not just a fill-colour difference, to actually read as a
          separate sheet. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 translate-x-1 -translate-y-1 rounded-panel border border-ink-muted/25 bg-accent-soft shadow-soft transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] lg:translate-x-2 lg:-translate-y-1.5 lg:-rotate-2 group-hover/file:translate-x-2 group-hover/file:-translate-y-2 group-focus-within/file:translate-x-2 group-focus-within/file:-translate-y-2 lg:group-hover/file:translate-x-4 lg:group-hover/file:-translate-y-3.5 lg:group-hover/file:-rotate-3 lg:group-focus-within/file:translate-x-4 lg:group-focus-within/file:-translate-y-3.5 lg:group-focus-within/file:-rotate-3"
      />
      {/* Middle sheet — a warmer/darker off-white (paper-muted), same
          border treatment. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] -translate-x-0.5 -translate-y-0.5 rounded-panel border border-ink-muted/25 bg-paper-muted shadow-soft transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] lg:-translate-x-1 lg:-translate-y-1 lg:rotate-2 group-hover/file:-translate-x-1.5 group-hover/file:-translate-y-1.5 group-focus-within/file:-translate-x-1.5 group-focus-within/file:-translate-y-1.5 lg:group-hover/file:-translate-x-2.5 lg:group-hover/file:-translate-y-2.5 lg:group-hover/file:rotate-3 lg:group-focus-within/file:-translate-x-2.5 lg:group-focus-within/file:-translate-y-2.5 lg:group-focus-within/file:rotate-3"
      />

      <article className="group relative z-[2] rounded-panel border border-line bg-paper p-6 shadow-soft transition-[transform,box-shadow] duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:shadow-lifted group-hover/file:-translate-y-1 group-hover/file:shadow-lifted group-focus-within/file:-translate-y-1 group-focus-within/file:shadow-lifted">
        {heroImage ? (
          <div className="mb-5 aspect-[4/3] overflow-hidden rounded-control bg-paper-muted">
            <img
              src={heroImage}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>
        ) : (
          // No photo yet — a loose wireframe sketch instead of a blank box,
          // reading as "still being explored" rather than a missing image.
          <div
            aria-hidden="true"
            className="mb-5 flex aspect-[4/3] flex-col justify-center gap-2 rounded-control border border-line bg-paper-muted p-4"
          >
            <span className="h-1.5 w-2/3 rounded-full bg-line" />
            <span className="h-1.5 w-1/2 rounded-full bg-line" />
            <span className="mt-2 h-10 rounded-control border border-dashed border-line" />
          </div>
        )}

        <div className="flex items-start justify-between gap-4">
          <span className="font-display text-2xl font-semibold text-line">
            <span className="sr-only">Project </span>
            {number}
          </span>
          {category && (
            <span className="mt-1 inline-block rounded-control bg-sage px-2.5 py-1 text-xs font-medium text-sage-dark">
              {category}
            </span>
          )}
        </div>

        <h3 className="mt-3 text-xl">{title}</h3>
        {(problemStatement || description) && (
          <p className="mt-2 text-ink-soft">{problemStatement || description}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
          {PROCESS_STAGES.map((stage) => (
            <span
              key={stage}
              className="flex items-center gap-1 text-[0.625rem] font-medium uppercase tracking-wide text-ink-muted"
            >
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-sage-dark" />
              {stage}
            </span>
          ))}
        </div>

        {/* Stretched-link pattern: the whole card is hoverable (image zoom,
            shadow) so the whole card should be clickable, not just this text —
            a single real anchor whose hit area is expanded via ::after rather
            than wrapping the card in a second, nested link. */}
        <Link
          to={`/projects/${id}`}
          className="mt-5 flex w-fit items-center gap-1.5 text-sm font-medium text-accent-dark underline-offset-4 hover:underline after:absolute after:inset-0 after:content-['']"
        >
          View case study
          <span aria-hidden="true">→</span>
        </Link>
      </article>
    </div>
  )
}

export default ProjectCard
