// Lightweight section wrapper for the Resume page — a border-top divider
// instead of the full Section padding/background system, since a resume
// should read as one dense, scannable page rather than a series of
// heavily-spaced marketing sections.
function ResumeSection({ title, children, className = '' }) {
  return (
    <section className={`border-t border-line pt-10 first:border-t-0 first:pt-0 ${className}`}>
      <h2 className="text-display-sm">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}

export default ResumeSection
