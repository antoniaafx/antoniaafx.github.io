// A single numbered skill tile — shared by the homepage's Skills overview
// and the About page's grouped skills section.
function SkillBadge({ index = 0, label }) {
  return (
    <div className="rounded-panel border border-line bg-paper p-5 transition-shadow duration-200 hover:shadow-soft">
      <span className="flex h-8 w-8 items-center justify-center rounded-control bg-accent-soft text-caption font-semibold text-accent-dark">
        {String(index + 1).padStart(2, '0')}
      </span>
      <p className="mt-4 font-medium text-ink">{label}</p>
    </div>
  )
}

export default SkillBadge
