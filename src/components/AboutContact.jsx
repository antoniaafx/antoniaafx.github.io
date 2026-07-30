import Section from './Section'
import SectionTitle from './SectionTitle'
import Button from './Button'
import ContactOptions from './ContactOptions'
import ContactForm from './ContactForm'

// The page's closing section — merged in from the removed standalone
// Contact page (its hero heading and contact options, reused as-is). Its
// form was dropped at the time since it had no real backend — ContactForm
// below is that functionality finally added back in, appended after the
// existing resume button and contact list rather than changing anything
// about how those already present. `id="resume"` is the redirect target
// for the old /resume URL (see App.jsx and ScrollToTop.jsx) — it's also,
// now, the resume-download + contact destination that every "Contact Me"
// button on the site points to.
function AboutContact() {
  return (
    <Section id="resume" background="ink">
      <SectionTitle
        eyebrow="Where I'm Going"
        title="Let's build something great together."
        subtitle="I'm currently looking for UX/UI internship and junior design opportunities. If my work looks like a fit, I'd love to hear from you."
        onDark
      />
      {/* Two columns at lg: — the same pattern AboutHero.jsx already uses
          for its own text+visual split, just `items-start` instead of
          `items-center` since these two columns have very different
          content heights (a short link list vs. a full form). Source
          order already has links before the form, so mobile keeps the
          same stacking with no extra work. */}
      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <div>
            <Button href="/Antonia_Afxentiou_CV.pdf" download variant="inverse" size="lg">
              Download Resume
            </Button>
          </div>
          <div className="mt-10">
            <ContactOptions onDark />
          </div>
        </div>

        {/* The pinned-page treatment (tape + paper panel) is unchanged —
            just moved beside the links instead of underneath them. */}
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute -top-2.5 left-1/2 h-5 w-16 -translate-x-1/2 -rotate-2 bg-line/80 shadow-soft"
          />
          {/* -rotate-[0.3deg]: a barely-there natural warp, not a
              scrapbook tilt — the requested "slight irregularity" without
              paper texture, ripped edges, or anything that would compete
              with the section's own dark, textured background. */}
          <div className="-rotate-[0.3deg] rounded-panel border border-line bg-paper p-6 shadow-soft sm:p-8">
            <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">Leave me a note</p>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutContact
