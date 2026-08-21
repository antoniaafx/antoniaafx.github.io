// Single source of truth for every project on the site — the /projects
// grid, the homepage's Featured Work rail, and each full case study page
// at /projects/:id all read from this one array.
//
// Minimum fields for a project to appear in the grid/homepage:
//   id, title, description, category, role, tools, heroImage, featured
//
// `responsibilities` is optional — a short scope/ownership line CaseHero
// folds into its own metadata row (see CaseHero.jsx). Kept here rather than
// in the full case-study data file since it's a hero-level fact, the same
// tier as role/timeline/tools.
//
// This file only carries card + hero-level fields now — the full case-study
// content (research, process, final result, reflection, etc.) lives in its
// own dedicated data file per project:
//   Keg & Barrel  → src/data/kegAndBarrel.js
//   Virtual Coach → src/data/virtualCoach.js
// and is rendered by that project's own component in
// src/components/CaseStudy/<project>/ — see CaseStudy.jsx's CASE_STUDIES
// map. A project id with no entry there, or with no full data file wired
// up, falls back to a "not published yet" page instead of a blank/broken
// route — that's the current placeholder state for any future project
// added here with only card fields filled in.
//
// To add a new project: copy the keg-and-barrel entry below as a template.
// A new full case study needs a data file + component + one line in
// CaseStudy.jsx's CASE_STUDIES map — this array alone is never enough to
// publish more than the grid card.

import kegAndBarrelHero from '../assets/images/projects/keg-and-barrel/hero.webp'
import virtualCoachCard from '../assets/images/projects/virtual-coach/virtual-coach-card.png'

const projects = [
  {
    id: 'keg-and-barrel',
    title: 'Keg & Barrel Website Design',
    // Trimmed of the "built solo as unpaid freelance work" clause that
    // used to close this sentence — that fact now lives once, in
    // `responsibilities` below, instead of here and again in the case
    // study's Challenge chapter.
    description:
      'A from-scratch website design and build for a local sports pub, taken from competitive research through to a live, deployed site.',
    // Short, card-friendly version of the case study's problem statement —
    // same fact, condensed, not a new claim.
    problemStatement:
      'A local sports pub had no online presence — no way to see the menu or what was on before walking in.',
    category: 'Web Design',
    role: 'UX/UI Designer',
    timeline: '9 weeks',
    tools: ['Notion', 'Miro', 'Figma', 'VS Code'],
    responsibilities:
      'Led solo, end to end — research through a live Vercel build — as unpaid freelance work.',
    heroImage: kegAndBarrelHero,
    featured: true,
  },

  // Card/grid fields only, deliberately — the full case study for each of
  // these two projects lives in its own data file (see the header comment
  // above), not in this object.
  {
    id: 'virtual-coach',
    title: 'Virtual Coach',
    description:
      'A gamified nutrition-learning app exploring educational UX, gamification and user research — originally a four-person university project, later redesigned independently.',
    problemStatement: 'Turning nutrition education into an interactive learning journey.',
    category: 'UX/UI Design',
    role: 'Project Lead & Lead UX/UI Designer',
    tools: ['Figma', 'FigJam', 'Genially', 'Google Forms'],
    heroImage: virtualCoachCard,
    featured: false,
  },

]

export default projects
