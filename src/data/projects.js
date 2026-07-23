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
      'Placeholder — replace with a one- to two-sentence overview of the problem this project solved and the outcome.',
    category: 'Web Design',
    role: 'UX/UI Designer',
    timeline: 'Placeholder — e.g. "6 weeks · 2024"',
    tools: ['Figma', 'FigJam'],
    heroImage: '',
    featured: true,

    // Project overview / Problem statement / Goals
    overview: {
      problem:
        'Placeholder — describe the core problem the business or users were facing before this project.',
      goals: [
        "Placeholder goal — e.g. improve the online ordering flow",
        "Placeholder goal — e.g. strengthen the brand's visual identity",
        'Placeholder goal — e.g. make the site usable on mobile',
      ],
      targetUsers: 'Placeholder — who is this product for, and what do they need from it?',
      responsibilities: [
        'Placeholder responsibility — e.g. led user research and testing',
        'Placeholder responsibility — e.g. designed wireframes and high-fidelity UI',
      ],
    },

    // Research / Competitor analysis / User insights — blocks are typed
    // ('text' | 'insights' | 'gallery' | 'image') so this can hold whatever
    // mix of research artifacts a given project actually has.
    research: {
      intro: 'Placeholder — introduce the research approach used for this project.',
      blocks: [
        {
          type: 'text',
          heading: 'User interviews',
          body: 'Placeholder — summarize who you talked to and what you were trying to learn.',
        },
        {
          type: 'insights',
          heading: 'User insights',
          items: [
            'Placeholder — insight drawn from research (1)',
            'Placeholder — insight drawn from research (2)',
            'Placeholder — insight drawn from research (3)',
          ],
        },
        {
          type: 'gallery',
          heading: 'Competitor analysis',
          images: [
            { src: '', caption: 'Placeholder — competitor 1' },
            { src: '', caption: 'Placeholder — competitor 2' },
          ],
        },
      ],
    },

    // UX process — includes wireframes as one of the steps, alongside
    // flows and later iterations, so the page reads as one evolution
    // rather than disconnected sections.
    process: {
      intro: 'Placeholder — introduce the design process, from structure to first drafts.',
      steps: [
        {
          label: 'User flows',
          description: 'Placeholder — describe the core flow(s) mapped out for this product.',
          image: '',
        },
        {
          label: 'Wireframes',
          description: 'Placeholder — describe the low-fidelity exploration before visual design began.',
          image: '',
        },
        {
          label: 'Design iterations',
          description: 'Placeholder — describe what changed between drafts and why.',
          image: '',
        },
      ],
    },

    // UI design — the image gallery for high-fidelity/responsive screens.
    uiDesign: {
      intro: 'Placeholder — introduce the high-fidelity UI and how it expresses the brand.',
      images: [
        { src: '', caption: 'Homepage — desktop', span: 'wide' },
        { src: '', caption: 'Menu page' },
        { src: '', caption: 'Homepage — mobile' },
      ],
    },

    // Final outcome
    results: {
      summary: 'Placeholder — describe the shipped result. Only include real feedback/metrics if you have them.',
      improvements: [
        'Placeholder improvement — e.g. clearer navigation',
        'Placeholder improvement — e.g. faster path to ordering',
      ],
      images: [{ src: '', caption: 'Final homepage', span: 'wide' }],
    },

    reflection: {
      challenges: 'Placeholder — what was hardest about this project?',
      learned: "Placeholder — what did you learn that you didn't know going in?",
      improve: 'Placeholder — what would you do differently next time?',
    },
  },

  // Grid/homepage entry only — no case study written yet. Add overview,
  // research, process, uiDesign, results, and reflection (following the
  // keg-and-barrel shape above) to publish its full case study page.
  {
    id: 'ux-research-project',
    title: 'UX Research Project',
    description:
      'Placeholder — replace with a one- to two-sentence overview of the problem this project solved and the outcome.',
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
    description:
      'Placeholder — replace with a one- to two-sentence overview of the problem this project solved and the outcome.',
    category: 'Mobile',
    role: 'UX/UI Designer',
    tools: ['Figma', 'Principle'],
    heroImage: '',
    featured: true,
  },
]

export default projects
