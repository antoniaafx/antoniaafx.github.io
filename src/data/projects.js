// Single source of truth for every project on the site — the /projects
// grid, the homepage's Featured Work rail, and each full case study page
// at /projects/:id all read from this one array.
//
// Minimum fields for a project to appear in the grid/homepage:
//   id, title, description, category, role, tools, heroImage, featured
//
// To publish the full case study (not just a grid card), also fill in:
//   overview, research, process, uiDesign, results, reflection
// A project missing those renders a "not published yet" page at its URL —
// see ux-research-project and mobile-app-design below for that state.
//
// To add a new project: copy the keg-and-barrel entry below as a template
// and replace every "Placeholder — " value. No component or route changes
// are needed — CaseStudy.jsx and the grid/homepage read this array directly.
//
// Every unfinished value is prefixed "Placeholder — " so it's easy to find
// (search the file for that string). Nothing here is a fabricated research
// finding, quote, or metric — where real content is missing, it says so
// instead of inventing a plausible-sounding result.

const projects = [
  {
    id: 'keg-and-barrel',
    title: 'Keg & Barrel Website Design',
    description:
      'A from-scratch website design and build for a local sports pub, taken from competitive research through to a live, deployed site — built solo as unpaid freelance work.',
    category: 'Web Design',
    role: 'UX/UI Designer',
    timeline: '9 weeks',
    tools: ['Notion', 'Miro', 'Figma', 'VS Code'],
    heroImage: '',
    featured: true,

    overview: {
      problem:
        "Keg & Barrel, a local sports pub, had no website at all — no way for visitors to see the menu, check what games were showing, or find the venue online before walking in. For a bar competing directly with other sports pubs in the same area, that's a real disadvantage: people choose the venues they can find and preview online.",
      goals: [
        'Give the pub a real online presence for the first time, built entirely from scratch',
        'Make the menu and live-sports schedule easy to find at a glance',
        "Capture the pub's actual atmosphere — casual, friendly, built around live sport — rather than a generic bar template",
        'Make the site work well for tourists searching on their phones',
      ],
      targetUsers:
        'Mainly tourists and visitors looking for a lively spot to watch live sport — Premier League matches, Rugby World Cup-level events — plus regular local pub-goers.',
      responsibilities: [
        'Led the project solo, end to end: research, wireframing, UI design, and prototyping',
        'Built and deployed the final site myself (Figma through to a live Vercel build), not just static mockups',
      ],
    },

    research: {
      intro:
        'No formal user interviews were part of this project. Research centered on how Keg & Barrel actually compares to the sports pubs people already choose between locally, and on established patterns for bar and venue websites more broadly.',
      blocks: [
        {
          type: 'text',
          heading: 'Comparative & best-practice research',
          body: "Rather than looking at polished cocktail-bar sites — the wrong tone entirely for a sports pub — I focused on what actually matters for a venue like this: a design that mirrors the real atmosphere, strong imagery of the interior, exterior, and drinks, easy navigation, mobile optimization, a clear detailed menu, and contact information that's easy to find.",
        },
        {
          type: 'insights',
          heading: 'Key insight',
          items: [
            'The homepage needed to lead with what actually sells the venue: big screens, match-day photography, and the outdoor seating area',
            "The right feeling to aim for was 'what's on tonight' — simple and immediate — not polished cocktail-bar minimalism",
          ],
        },
        {
          type: 'gallery',
          heading: 'Competitor analysis',
          images: [
            {
              src: '',
              caption: 'Crocodile Pub — Irish-themed sports bar on Danaes Avenue, also screens Premier League and Rugby World Cup matches',
            },
            {
              src: '',
              caption: 'Pegasus Pub — frequently mentioned alongside Keg & Barrel and Crocodile Pub in local reviews',
            },
          ],
        },
      ],
    },

    process: {
      intro:
        'With a clear point of reference, the next step was structure: a simple, deliberate flow from homepage to menu to contact, wireframed before any visual design began.',
      steps: [
        {
          label: 'User flow',
          description:
            'Mapped a single, focused path — Home → Menu → Contact — matching how someone would actually use the site: land on the homepage to get a feel for the place, check the menu, then find contact and location details.',
          image: '',
        },
        {
          label: 'Wireframes',
          description:
            'Wireframed the core pages before moving into high-fidelity design, to lock in hierarchy — leading with the sports-bar atmosphere, then the menu, then practical details — before layering in visual design.',
          image: '',
        },
        {
          label: 'Design iterations',
          description:
            "Early drafts leaned more neutral and generic. Through iteration, the design shifted deliberately toward the pub's actual identity — bolder use of the maroon brand color, warmer imagery placement, and a tone that read as 'sports pub' rather than a generic bar template.",
          image: '',
        },
      ],
    },

    uiDesign: {
      intro:
        'Two typefaces carry the whole site — Fraunces for headings, Geist for everything else — paired with a single confident brand color (a deep maroon) used well beyond just buttons, plus a neutral charcoal for text with no warm tint. Every button, card, shadow, and motion curve follows the same small set of rules — pill-shaped buttons with a consistent hover/tap scale, a clear size-to-radius convention across cards and badges, two shadow strengths reused everywhere, and one easing curve site-wide — rather than one-off choices per section.',
      images: [
        { src: '', caption: 'Homepage — desktop', span: 'wide' },
        { src: '', caption: 'Menu page' },
        { src: '', caption: 'Homepage — mobile' },
      ],
    },

    results: {
      summary:
        "The final design was taken all the way to a real, working website — built and deployed live on Vercel, not just Figma mockups — and presented directly to the pub's manager for review. Being fully transparent about the outcome: the business ultimately decided not to move forward with adopting the site, but the project was completed end to end as real, functioning software, from research through a deployed build.",
      improvements: [
        "A fully responsive, deployed website that reflects the pub's real sports-bar identity, not a generic template",
        'A clear, easy-to-scan menu and live-sports schedule, front and center on the homepage',
        'Touch-friendly spacing and layout adjustments for a genuinely usable mobile experience',
        'A consistent design system — typography, color, buttons, spacing, motion — carried across every page',
      ],
      images: [{ src: '', caption: 'Final homepage', span: 'wide' }],
    },

    reflection: {
      challenges:
        'Working solo for nine weeks was the biggest challenge — there was no team to check in with, so structuring the process end to end fell entirely on me. I used Notion and Miro to keep research, wireframes, and iterations organized without that built-in team structure.',
      // Drafted from the real facts of this project rather than given directly —
      // read this and edit it so it actually sounds like you before it goes live.
      learned:
        'Working solo for nine weeks meant learning to be my own project manager — using Notion and Miro to stay organized instead of relying on team check-ins to keep momentum. Taking the project all the way from Figma to a deployed Vercel build also pushed me to think about design decisions in terms of what was actually feasible to build, not just what looked good in a mockup.',
      improve:
        "If I were starting this project again, I'd bring the pub's manager into the process earlier — sharing wireframes or early drafts for feedback before investing time in high-fidelity design and a full build, rather than presenting a finished product at the end. That would make it easier to catch misalignment on expectations sooner.",
    },
  },

  // Grid/homepage entry only — no case study written yet. Add overview,
  // research, process, uiDesign, results, and reflection (following the
  // keg-and-barrel shape above) to publish its full case study page.
  {
    id: 'ux-research-project',
    title: 'UX Research Project',
    description: 'Full case study coming soon.',
    category: 'UX Research',
    role: 'UX Researcher',
    tools: ['Figma', 'Maze'],
    heroImage: '',
    featured: true,
  },

  // Grid/homepage entry only — same as above, case study not written yet.
  {
    id: 'mobile-app-design',
    title: 'Mobile App Design',
    description: 'Full case study coming soon.',
    category: 'Mobile',
    role: 'UX/UI Designer',
    tools: ['Figma', 'Principle'],
    heroImage: '',
    featured: true,
  },
]

export default projects
