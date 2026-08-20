// A single skill tile — shared by the About page's grouped skills section
// (now also reused directly on Home). Used to show a numbered tile
// (01, 02, ...) — removed for a cleaner, less busy grid; the label alone
// is enough, grouped under its category heading in AboutSkills.
function SkillBadge({ label }) {
  return (
    <div className="rounded-panel border border-line bg-paper p-5 transition-shadow duration-200 hover:shadow-soft">
      <p className="font-medium text-ink">{label}</p>
    </div>
  )
}

export default SkillBadge
