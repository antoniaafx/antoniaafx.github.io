import Button from './Button'
import contact from '../data/contact'

function ResumeHeader() {
  return (
    <div className="flex flex-col gap-6 border-b border-line pb-10 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">Resume</p>
        <h1 className="mt-3 text-display-sm sm:text-display-md">Antonia</h1>
        <p className="mt-2 text-lg text-ink-soft">UX/UI Designer</p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {contact.map((item) => {
            const isExternal = item.href?.startsWith('http')
            return (
              <a
                key={item.label}
                href={item.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="text-sm font-medium text-accent-dark underline-offset-4 hover:underline"
              >
                {item.label}
                {isExternal && <span className="sr-only"> (opens in new tab)</span>}
              </a>
            )
          })}
        </div>
      </div>

      <Button href="/Antonia_Afxentiou_CV.pdf" download variant="primary" size="lg">
        Download Resume
      </Button>
    </div>
  )
}

export default ResumeHeader
