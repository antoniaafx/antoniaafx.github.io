import ResumeSection from './ResumeSection'
import { uxSkills, uiSkills, tools, softSkills } from '../data/skills'

const GROUPS = [
  { label: 'UX Skills', items: uxSkills },
  { label: 'UI Skills', items: uiSkills },
  { label: 'Tools', items: tools },
  { label: 'Soft Skills', items: softSkills },
]

function SkillPillGroup({ label, items }) {
  return (
    <div>
      <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">{label}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="rounded-control bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent-dark">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ResumeSkills() {
  return (
    <ResumeSection title="Skills">
      <div className="grid gap-8 sm:grid-cols-2">
        {GROUPS.map((group) => (
          <SkillPillGroup key={group.label} {...group} />
        ))}
      </div>
    </ResumeSection>
  )
}

export default ResumeSkills
