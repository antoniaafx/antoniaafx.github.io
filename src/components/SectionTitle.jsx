function SectionTitle({ title, subtitle }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-display-sm">{title}</h2>
      {subtitle && <p className="mt-3 text-lg text-ink-soft">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
