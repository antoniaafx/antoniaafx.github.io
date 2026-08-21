import Section from './Section'
import SectionTitle from './SectionTitle'
import ContactOptions from './ContactOptions'
import ContactForm from './ContactForm'

// Originally About's own closing section — merged in from the removed
// standalone Contact page (its hero heading and contact options, reused
// as-is), later joined by ContactForm. Now also rendered directly by
// Home.jsx as the homepage's own Contact section (id="contact") — reused
// as the same component rather than duplicated, so both places share one
// implementation. `id="contact"` is the target for the primary nav's
// Contact link (see Navbar.jsx), the legacy /resume and /contact URL
// redirects (App.jsx), and the "Contact Me" CTA elsewhere on the site
// (ContactCta.jsx) — Resume itself moved to the hero as a recruiter-facing
// download, not a step in this section's own hierarchy.
function AboutContact() {
  return (
    // scroll-mt-16 matches the sticky navbar's height (h-16 in Navbar.jsx)
    // so scrolling/jumping to #contact lands with this section's top clear
    // of the fixed header instead of tucked under it. tabIndex={-1}: not
    // part of the normal tab order, but focusable via ScrollToTop's
    // post-scroll `.focus()` call so keyboard/screen-reader users actually
    // land here, not silently still on whatever link triggered the jump.
    <Section id="contact" background="ink" className="scroll-mt-16" tabIndex={-1}>
      {/* Heading/description/links share the SAME grid row as the note
          (`items-start`), so both columns get one shared, natural top edge
          with no manual offsets. ~40/60 left/note via `fr` units (not raw
          %, which doesn't account for `gap` the way `fr` does) — the right
          column is wider than the left, but that width is spent as
          breathing room around the note (max-width, centred below), not
          on stretching the note itself. Source order — heading/
          description, then links, then the note — is also exactly the
          stacking order needed below `lg:`, so mobile falls out for
          free. */}
      <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
        <div>
          {/* No eyebrow — SectionTitle only reserves space for one (the
              heading's own `mt-3`) when a truthy `eyebrow` is passed, so
              omitting it here leaves no gap. */}
          <SectionTitle
            title="Let's build something great together."
            subtitle="I'm currently looking for UX/UI internship and junior design opportunities. If my work looks like a fit, I'd love to hear from you."
            onDark
          />
          {/* Direct communication options close out the column right
              under the intro — mt-8 is the same "into a contact row"
              gap the previous layout used here. */}
          <div className="mt-8">
            <ContactOptions onDark />
          </div>
        </div>

        {/* Below `lg:` there's no column to breathe against — heading,
            links and note are one stacked column — so the note keeps its
            previous, wider max-w-xl there (mobile is narrower than that
            anyway, so it still fills the available width per-breakpoint).
            Only at `lg:`, once the two-column split is live, does it drop
            to max-w-md and centre in its (wider) column — the extra
            column width becomes negative space around the note instead of
            stretching it edge-to-edge. */}
        <div className="w-full max-w-xl lg:max-w-md lg:mx-auto">
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -top-2.5 left-1/2 h-5 w-16 -translate-x-1/2 -rotate-2 bg-line/80 shadow-soft"
            />
            {/* -rotate-[0.3deg]: a barely-there natural warp, not a
                scrapbook tilt — the requested "slight irregularity"
                without paper texture, ripped edges, or anything that would
                compete with the section's own dark, textured
                background. */}
            <div className="-rotate-[0.3deg] rounded-panel border border-line bg-paper p-5 shadow-soft sm:p-6">
              <p className="text-caption font-medium uppercase tracking-wide text-ink-muted">Leave me a note</p>
              <div className="mt-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutContact
