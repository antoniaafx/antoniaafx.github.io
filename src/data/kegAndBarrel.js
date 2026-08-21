// Full case-study content for Keg & Barrel — Phase 1 structural refactor.
// Card/hero-level fields (title, role, timeline, tools, responsibilities,
// heroImage) stay in projects.js; everything below is the deep case-study
// content, restructured from the old six-section overview/research/
// process/uiDesign/results/reflection shape into the approved blueprint's
// eight chapters. Every fact here is moved/trimmed from that original
// content, not invented — see the per-field notes below for where each
// piece came from and why it moved.
//
// Chapter 04 ("From wireframes to visual direction") did NOT survive as
// its own chapter: the repo has no real wireframe/early-draft/iteration
// assets for this project (only hero.webp exists — verified against
// src/assets/images/projects/keg-and-barrel/ before writing this file).
// Per the approved blueprint, that chapter only stands alone if such
// assets genuinely exist. They don't, so its one useful piece of content —
// the "design iterations" story (early neutral drafts → the pub's actual
// bolder identity) — folds into `designingExperience` below instead, where
// it explains *how* the visual direction below was reached.

export const challenge = {
  // Unchanged — the case study's one big problem statement.
  problem:
    "Keg & Barrel, a local sports pub, had no website at all — no way for visitors to see the menu, check what games were showing, or find the venue online before walking in. For a bar competing directly with other sports pubs in the same area, that's a real disadvantage: people choose the venues they can find and preview online.",
  // Was its own "Target users" card in the old Project Overview — folded
  // into a single line of context here instead, since it's one fact, not
  // a parallel list that needs its own container.
  context:
    'Mainly tourists and visitors looking for a lively spot to watch live sport — Premier League matches, Rugby World Cup-level events — plus regular local pub-goers.',
  // Unchanged content, four goals, same order.
  goals: [
    'Give the pub a real online presence for the first time, built entirely from scratch',
    'Make the menu and live-sports schedule easy to find at a glance',
    "Capture the pub's actual atmosphere — casual, friendly, built around live sport — rather than a generic bar template",
    'Make the site work well for tourists searching on their phones',
  ],
  // "Responsibilities" no longer repeats here — it moved to the hero's
  // own metadata row (see projects.js `responsibilities` + CaseHero.jsx).
}

export const understanding = {
  // Was `research.intro`.
  intro:
    'No formal user interviews were part of this project. Research centered on how Keg & Barrel actually compares to the sports pubs people already choose between locally, and on established patterns for bar and venue websites more broadly.',
  research: {
    heading: 'Comparative & best-practice research',
    body: "Rather than looking at polished cocktail-bar sites — the wrong tone entirely for a sports pub — I focused on what actually matters for a venue like this: a design that mirrors the real atmosphere, strong imagery of the interior, exterior, and drinks, easy navigation, mobile optimization, a clear detailed menu, and contact information that's easy to find.",
  },
  // The finding and what it meant for the design were already written as
  // one thought each ("needed to lead with X", "the right feeling to aim
  // for was Y") — kept exactly as-is; the structural fix is that this
  // insight now lives in the same section as the evidence above it and
  // the competitor evidence below it, not that the wording needed to
  // change.
  insight: {
    heading: 'Key insight',
    items: [
      'The homepage needed to lead with what actually sells the venue: big screens, match-day photography, and the outdoor seating area',
      "The right feeling to aim for was 'what's on tonight' — simple and immediate — not polished cocktail-bar minimalism",
    ],
  },
  competitors: {
    heading: 'Competitor analysis',
    items: [
      {
        name: 'Crocodile Pub',
        note: 'Irish-themed sports bar on Danaes Avenue, also screens Premier League and Rugby World Cup matches.',
      },
      {
        name: 'Pegasus Pub',
        note: 'Frequently mentioned alongside Keg & Barrel and Crocodile Pub in local reviews.',
      },
    ],
  },
}

export const structuring = {
  // Was `process.intro`, trimmed of its wireframing clause — wireframing
  // is now discussed in `designingExperience` below, so this chapter can
  // stay focused on the flow/IA decision alone.
  intro:
    'With a clear point of reference, the next step was structure: a simple, deliberate flow from homepage to menu to contact.',
  flow: ['Home', 'Menu', 'Contact'],
  // Was `process.steps[0]` ("User flow") — this chapter's only real
  // content, now standing on its own instead of being the first of three
  // items inside a generic Process timeline.
  description:
    'Mapped a single, focused path — Home → Menu → Contact — matching how someone would actually use the site: land on the homepage to get a feel for the place, check the menu, then find contact and location details.',
}

export const designingExperience = {
  // Folded in from `process.steps[1]` ("Wireframes") and `process.steps[2]`
  // ("Design iterations") — the old Process section's other two steps.
  // Placed here, not in Structuring the Website, because both are about
  // arriving at the *visual* direction (hierarchy, then styling), not the
  // site's information architecture.
  process:
    'Wireframes locked in the hierarchy first — leading with the sports-bar atmosphere, then the menu, then practical details — before any visual design began. Early drafts leaned more neutral and generic; through iteration, the direction shifted deliberately toward the pub\'s actual identity — bolder use of the maroon brand color, warmer imagery placement, and a tone that read as \'sports pub\' rather than a generic bar template.',
  // Was `uiDesign.intro`, unchanged.
  system:
    'Two typefaces carry the whole site — Fraunces for headings, Geist for everything else — paired with a single confident brand color (a deep maroon) used well beyond just buttons, plus a neutral charcoal for text with no warm tint. Every button, card, shadow, and motion curve follows the same small set of rules — pill-shaped buttons with a consistent hover/tap scale, a clear size-to-radius convention across cards and badges, two shadow strengths reused everywhere, and one easing curve site-wide — rather than one-off choices per section.',
  // Only the menu-page slot stays here — the two homepage shots that used
  // to sit in this section's gallery (desktop + mobile) moved to
  // `finalWebsite` below, since they're the same live site the Final
  // Website chapter now shows once, not twice. Still a placeholder (no
  // real asset exists yet) — kept as a single, clearly-scoped slot rather
  // than removed outright, since it's a genuine future asset need.
  images: [{ src: '', caption: 'Menu page' }],
}

export const finalWebsite = {
  // Split from the old `results.summary`, which used to bundle "here's the
  // finished product" and "here's the honest outcome" into one paragraph.
  // This chapter keeps only the product half; the honest-outcome half
  // moved to `outcome` below, so each fact is stated exactly once.
  intro:
    'Taken all the way to a real, working website — built and deployed live on Vercel, not just Figma mockups.',
  // Merges what used to be two separate placeholder pairs (UI Design's
  // "Homepage — desktop / wide" + "Homepage — mobile", and Results'
  // "Final homepage — wide") into one pair describing the same live site,
  // shown once instead of split across two sections.
  images: [
    { src: '', caption: 'Homepage — desktop', span: 'wide' },
    { src: '', caption: 'Homepage — mobile' },
  ],
}

export const outcome = {
  // The honest-outcome half of the old `results.summary`, kept verbatim —
  // reordered slightly now that it stands alone (leading with the honest
  // fact rather than trailing it), but not reworded or softened.
  summary:
    "Presented directly to the pub's manager for review. Being fully transparent about the outcome: the business ultimately decided not to move forward with adopting the site — but the project was completed end to end as real, functioning software, from research through a deployed build.",
  // Unchanged, four items, same order.
  improvements: [
    "A fully responsive, deployed website that reflects the pub's real sports-bar identity, not a generic template",
    'A clear, easy-to-scan menu and live-sports schedule, front and center on the homepage',
    'Touch-friendly spacing and layout adjustments for a genuinely usable mobile experience',
    'A consistent design system — typography, color, buttons, spacing, motion — carried across every page',
  ],
}

export const reflection = {
  // Unchanged.
  challenges:
    'Working solo for nine weeks was the biggest challenge — there was no team to check in with, so structuring the process end to end fell entirely on me. I used Notion and Miro to keep research, wireframes, and iterations organized without that built-in team structure.',
  learned:
    'Working solo for nine weeks meant learning to be my own project manager — using Notion and Miro to stay organized instead of relying on team check-ins to keep momentum. Taking the project all the way from Figma to a deployed Vercel build also pushed me to think about design decisions in terms of what was actually feasible to build, not just what looked good in a mockup.',
  improve:
    "If I were starting this project again, I'd bring the pub's manager into the process earlier — sharing wireframes or early drafts for feedback before investing time in high-fidelity design and a full build, rather than presenting a finished product at the end. That would make it easier to catch misalignment on expectations sooner.",
}
