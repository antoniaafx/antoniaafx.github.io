// All narrative content + screen assets for the Virtual Coach case study.
// Kept separate from projects.js (which only carries the grid/homepage
// card fields) because this project's case study doesn't fit the generic
// overview/research/process/uiDesign/results/reflection shape the other
// projects use — see VirtualCoachCaseStudy.jsx for why it gets its own
// page rather than being forced into a shared renderer.
//
// Collaboration note: this was a four-person university group project.
// "I" is used for Antonia's personal design contribution (UI redesign,
// Coach V visual identity, interface decisions); "we" is used for
// collective project work (research, evaluation, group decisions). Do not
// flatten that distinction when editing this copy.
//
// Redesign note: the screens referenced below are Antonia's *independent*
// redesign, done after the academic project was complete — not the
// original Genially prototype. Only the "Testing the original prototype"
// section describes the original prototype; every other screen mention is
// the redesign unless stated otherwise.
//
// Research accuracy: the original evaluation had 13 participants. Every
// figure below is copied from that source data, not invented. Findings
// from section `testing` describe the *original prototype* specifically
// and must stay labelled as such — never attribute them to the redesign.
//
// PHASE 1 STRUCTURAL REFACTOR — most exports below keep their original
// shape and wording (moving *where* content renders, not rewriting it).
// The exceptions, each noted at the field itself, are:
//   `context.facts`   — 6 → 3, dropping facts already stated in `hero`
//   `coachV.states`    — 3 → 2, Streak removed (now shown once, in
//                         Building Progression; Coach V's celebratory role
//                         is already covered in `coachV.roles` as text)
//   `showcase`         — reshaped from a 3-tier, 15-screen gallery into a
//                         single curated anchor + a small supporting group,
//                         per the approved screen-usage rules (see the
//                         Phase 1 report for the full before/after map)
//   `nextSteps.items`  — 7 → 4, folding the dropped items' substance into
//                         the closest remaining theme rather than deleting
//                         them outright

import vcHome from '../assets/images/projects/virtual-coach/home.png'
import vcLevels from '../assets/images/projects/virtual-coach/levels.png'
import vcLevel2 from '../assets/images/projects/virtual-coach/level-2.png'
import vcAchievements from '../assets/images/projects/virtual-coach/achievements.png'
import vcStreak from '../assets/images/projects/virtual-coach/streak.png'
import vcRecipes from '../assets/images/projects/virtual-coach/recipes.png'
import vcHabits from '../assets/images/projects/virtual-coach/habits.png'
import vcFriends from '../assets/images/projects/virtual-coach/FRIENDS.png'
import vcLeaderboard from '../assets/images/projects/virtual-coach/leaderboard.png'
import vcProfile from '../assets/images/projects/virtual-coach/profile.png'
import vcEditProfile from '../assets/images/projects/virtual-coach/edit-profile.png'
import vcLogin from '../assets/images/projects/virtual-coach/login.png'
import vcIntroduction from '../assets/images/projects/virtual-coach/coach-introduction.png'
import vcWelcome from '../assets/images/projects/virtual-coach/welcome.png'
import vcSplash from '../assets/images/projects/virtual-coach/splash.png'
import vcCard from '../assets/images/projects/virtual-coach/virtual-coach-card.png'

// ---------------------------------------------------------------------
// SCREENS — the real redesign screens, added to
// src/assets/images/projects/virtual-coach/. `width`/`height` are each
// file's real pixel dimensions (not arbitrary) — passed through to the
// rendered <img> so the browser can reserve the correct box before the
// image loads, preventing layout shift on a page with this many screens.
// Unchanged in Phase 1 — the registry itself doesn't need to change, only
// which sections reference which entries (see the Phase 1 report's screen
// usage map for the full before/after).
//
// `level-1.png` is intentionally not wired in here: it's labelled "Level
// 1: The Basics" but its task copy is an unedited copy of Level 2's
// Protein content (down to the same "prtotein" typo) — using it would
// visibly expose that mismatch. Level 2 already covers the "from lesson
// to challenge" story on its own, per the brief. See the implementation
// report for the full source-UI issue list.
//
// Login and Splash are no longer referenced by any section as of Phase 1
// (see `screen usage rules`) — a normal login form and a splash screen
// don't carry design-thinking weight on their own, and neither performs a
// specific narrative role elsewhere in this case study. Left in this
// registry rather than deleted: the underlying image assets are still
// real project artifacts, and removing the export entries here doesn't
// delete the files or reduce the app's asset footprint, so there's no
// benefit to removing them versus simply not referencing them.
// ---------------------------------------------------------------------
export const screens = {
  home: {
    src: vcHome,
    width: 390,
    height: 1771,
    alt: "Virtual Coach home screen showing a daily streak tracker, friends' progress, and quick links to Levels, Recipes and Habits.",
  },
  levels: {
    src: vcLevels,
    width: 390,
    height: 2265,
    alt: 'Virtual Coach Levels screen showing completed, current and locked nutrition learning levels, leading up to a final Boss Battle.',
  },
  level2: {
    src: vcLevel2,
    width: 390,
    height: 1839,
    alt: 'Virtual Coach Level 2: Protein screen showing the Watch, Compare, Recipe and Boss Battle task sequence.',
  },
  achievements: {
    src: vcAchievements,
    width: 390,
    height: 1263,
    alt: 'Virtual Coach Achievements screen showing level badges and earned or in-progress learning badges with progress toward each one.',
  },
  streak: {
    src: vcStreak,
    width: 390,
    height: 844,
    alt: 'Virtual Coach Streak screen showing a 1-day streak, a weekly progress row, and a Claim Reward button.',
  },
  recipes: {
    src: vcRecipes,
    width: 390,
    height: 844,
    alt: 'Virtual Coach Recipes screen showing Breakfast, Lunch, Dinner and Snacks meal categories.',
  },
  habits: {
    src: vcHabits,
    width: 390,
    height: 844,
    alt: 'Virtual Coach Habit Tracker showing completed and incomplete nutrition habits, with tabs for Nutrition, Learning and Goals.',
  },
  friends: {
    src: vcFriends,
    width: 390,
    height: 844,
    alt: 'Virtual Coach Friends screen showing a searchable friends list and pending friend requests.',
  },
  leaderboard: {
    src: vcLeaderboard,
    width: 390,
    height: 844,
    alt: "Virtual Coach Leaderboard screen showing local rankings and each friend's points.",
  },
  profile: {
    src: vcProfile,
    width: 390,
    height: 844,
    alt: "Virtual Coach Profile screen showing a user's avatar, followers and friends count.",
  },
  editProfile: {
    src: vcEditProfile,
    width: 390,
    height: 844,
    alt: 'Virtual Coach Edit Profile screen with name, username and password fields.',
  },
  login: {
    src: vcLogin,
    width: 390,
    height: 844,
    alt: 'Virtual Coach Login screen with username and password fields.',
  },
  introduction: {
    src: vcIntroduction,
    width: 390,
    height: 844,
    alt: "Coach V introducing itself and asking the user to introduce themselves before starting.",
  },
  welcome: {
    src: vcWelcome,
    width: 390,
    height: 844,
    alt: 'Coach V welcoming a returning user back by name.',
  },
  splash: {
    src: vcSplash,
    width: 390,
    height: 844,
    alt: 'Virtual Coach splash screen showing the Coach V logo mark.',
  },
}

// ---------------------------------------------------------------------
// CONTENT
// ---------------------------------------------------------------------

export const hero = {
  title: 'Virtual Coach',
  subtitle: 'Turning nutrition education into an interactive learning journey.',
  positioning: 'Academic Group Project → Independent Redesign',
  role: 'Project Lead & Lead UX/UI Designer',
  focus: 'UX/UI Design · UX Research · Gamification',
  tools: 'Figma · FigJam · Genially · Google Forms',
  team: '4 students',
  // The finished three-phone composite (Profile/Achievements, daily
  // streak, Levels) also used as the project-grid card cover (see
  // projects.js) — one real pixel dimension (3:2), so its aspect-ratio
  // box matches the source exactly with no cropping.
  image: vcCard,
  imageAlt: 'Virtual Coach nutrition app shown across achievements, daily streak, and learning levels screens',
  imageWidth: 1536,
  imageHeight: 1024,
}

export const context = {
  intro: [
    'Virtual Coach began as a four-person university project exploring how interactive technology and gamification could make nutrition education easier to understand and more engaging.',
    'I served as Project Lead and Lead UX/UI Designer, leading the interface design and contributing extensively across research, user flows, prototyping, gamification, educational content, testing and evaluation.',
    "After completing the academic project, I independently returned to the concept and redesigned the interface to apply what I'd learned since.",
  ],
  // 6 → 3: "Original context", "Team" and "My role" are dropped — the
  // hero already states the team size (`hero.team`) and role
  // (`hero.role`), and "University group project" is already the first
  // sentence of `intro` above and the hero's own positioning badge. The 3
  // remaining facts are the ones not already stated elsewhere on this
  // page.
  facts: [
    { label: 'Original prototype', value: 'Genially' },
    { label: 'Current redesign', value: 'Figma' },
    { label: 'Evaluation', value: '13 participants' },
  ],
}

export const challenge = {
  body: 'Nutrition information can be difficult to understand and even harder to translate into everyday habits. We explored whether nutrition education could become more approachable by combining learning with interactive, gamified experiences.',
  question:
    'How might we make learning about nutrition feel less like studying and more like progressing through an experience?',
  objectives: [
    { label: 'Understand', body: 'Recognise key macronutrients and the roles they play.' },
    { label: 'Balance', body: 'Understand why different food groups matter within a balanced diet.' },
    { label: 'Identify', body: 'Categorise foods and distinguish healthier choices.' },
  ],
}

export const users = {
  intro:
    'We developed two personas to ground the design in real behavioural differences rather than a single, generic user.',
  personas: [
    {
      label: 'Persona direction 1',
      title: 'Balancing everyday life',
      points: ['Nutrition goals', 'Family responsibilities', 'Limited preparation time', 'Social situations', 'Convenience'],
    },
    {
      label: 'Persona direction 2',
      title: 'Building healthier habits',
      points: ['Sugar cravings', 'Motivation', 'Consistency', 'Building healthier habits'],
    },
  ],
  needsIntro: 'Across both directions, the same underlying needs kept surfacing:',
  needs: [
    'Practical meal guidance',
    'Understandable nutrition education',
    'Motivation',
    'Progress visibility',
    'Habit support',
    'Flexible choices',
    'Personalisation',
  ],
}

// Unchanged data — now rendered inside ONE section ("What the research
// told me") together with `decisions` below, instead of two separate
// sections doing the same evidence-to-decision job in two different
// visual languages back-to-back. See VirtualCoachCaseStudy.jsx.
export const research = {
  intro:
    'We evaluated the concept with 13 participants before building the prototype. Rather than reporting every result, these are the findings that connected most directly to product decisions.',
  stats: [
    {
      value: '46.2%',
      label: 'of participants selected meal suggestions as the most useful potential feature.',
      note: '→ Helped support the Recipes direction.',
    },
    {
      value: '11 of 13',
      label: 'participants reported no previous experience with nutrition applications.',
      note: '→ Reinforced the need for approachable, guided onboarding.',
    },
    {
      value: 'Varied needs',
      label: 'Participants mentioned allergies, lactose intolerance and food preferences.',
      note: '→ Highlighted the importance of future personalisation and dietary filtering.',
    },
  ],
}

export const decisions = {
  intro:
    "Not every mechanism below came directly from a survey response — where it did, it's marked as a research insight; where it reflects a broader strategy we set for sustaining engagement, it's marked as a design goal.",
  pairs: [
    { top: 'Insight', topText: 'Users wanted practical meal guidance.', bottomText: 'Recipes' },
    { top: 'Insight', topText: 'Nutrition information needed to feel approachable.', bottomText: 'Guided learning with Coach V' },
    { top: 'Insight', topText: 'Users needed support beyond passive information.', bottomText: 'Habits + practical tasks' },
    {
      top: 'Design goal',
      topText: 'Maintain motivation throughout learning.',
      bottomText: 'Levels + XP + achievements + streaks + boss battles',
    },
  ],
}

// Unchanged data. Rendered as a compact single-line sequence in "Mapping
// the experience" now (not a full Timeline) — this is early planning
// context for the diagram that follows, not a second major artifact in
// its own right.
export const flow = {
  intro: 'Before building the prototype, we mapped the application flow in FigJam.',
  steps: [
    { label: 'Coach V introduction' },
    { label: 'Name + age' },
    { label: 'User goals' },
    { label: 'Pre-test' },
    { label: 'Personalised learning direction' },
    { label: 'Home' },
  ],
}

// Unchanged data shape — `loop` renders alone in "Designing how users
// learn" (06); `levelsIntro`/`levelsList`/`levelsCallouts` render in
// "Building progression" (07). Splitting these into two sections is a
// composition change (see VirtualCoachCaseStudy.jsx), not a data change.
export const learningSystem = {
  intro: 'Every level in Virtual Coach follows the same underlying loop — the logic behind the product, independent of any single screen.',
  loop: [
    { label: 'Learn', description: 'Educational content and interactive video introduce the concept.' },
    { label: 'Practice', description: 'A mini-game reinforces it.' },
    { label: 'Apply', description: 'A real-world task connects it to everyday choices.' },
    { label: 'Test', description: 'A Boss Battle checks understanding.' },
    { label: 'Reward', description: 'XP, stars and progress mark completion.' },
  ],
  levelsIntro: 'The learning experience is structured into six major levels, each building on the last.',
  levelsList: ['The Basics', 'Protein', 'Fats', 'Carbohydrates', 'Fiber', 'Water'],
  levelsCallouts: [
    'Visible progression',
    'Completed, current and locked states',
    'Star performance',
    'Coach V guidance throughout',
    'A final Boss Battle to close the path',
  ],
}

export const lesson = {
  intro: 'Level 2: Protein demonstrates the learning architecture particularly well — moving well beyond passive consumption.',
  steps: [
    { label: 'Watch', description: 'Learn the concept.' },
    { label: 'Compare', description: 'Use "This or That" to actively identify the higher-protein option.' },
    { label: 'Apply', description: 'Find a real recipe high in protein.' },
    { label: 'Battle', description: 'Complete the Protein Boss challenge.' },
    { label: 'Progress', description: 'Earn XP and continue through the learning journey.' },
  ],
  // Level 2's screen is one long scroll capture — these are labelled CSS
  // crops of that same image (see VirtualCoachCaseStudy.jsx), not
  // separate assets, so a recruiter can see the task structure without
  // scanning the full-length screenshot for tiny text.
  detailCrops: [
    { caption: 'Learn', description: '"What is Protein?" — the intro video task.' },
    { caption: 'Apply', description: 'Find a real recipe high in protein.' },
    { caption: 'Test', description: 'Fight the Protein Boss.' },
  ],
}

export const coachV = {
  subtitle: 'A guide through the learning journey.',
  intro: "Coach V isn't just a mascot layered on top of the interface — I designed it to carry specific functional jobs throughout the experience:",
  roles: [
    'Welcome users',
    'Introduce the experience',
    'Guide progression',
    'Communicate encouragement',
    'Celebrate streaks',
    'Contextualise learning',
  ],
  // 3 → 2: the Streak screen no longer appears here — it now appears once,
  // in Building Progression, where it belongs alongside the rest of the
  // progression system rather than being shown a second time to illustrate
  // "celebration." Coach V's celebratory role is still stated in `roles`
  // above ("Celebrate streaks"), in text, per the approved Phase 1 rule.
  states: [
    { key: 'welcome', caption: 'Welcome' },
    { key: 'introduction', caption: 'Guide' },
  ],
}

// Unchanged data. `drivers` + `social` render together in "Building
// progression" (07) now; `achievementsExamples` renders there too, folded
// into the Mastery driver as a supporting detail instead of its own
// full sub-section.
export const motivation = {
  intro: 'Four mechanisms work together to keep the learning experience motivating.',
  drivers: [
    { label: 'Consistency', title: 'Daily streak', body: 'Encourages users to return.' },
    { label: 'Progress', title: 'Levels + XP', body: 'Makes advancement visible.' },
    { label: 'Mastery', title: 'Achievements', body: 'Rewards specific accomplishments.' },
    { label: 'Challenge', title: 'Boss Battles', body: 'Turns assessment into a milestone.' },
  ],
  social: {
    label: 'Social motivation',
    title: 'Leaderboards',
    body: 'An optional comparison with others — not every user is motivated by competition, so this sits alongside the other mechanisms rather than replacing them.',
  },
  achievementsExamples: [
    'Protein Master',
    'Quiz Whiz',
    'Meal Builder',
    'Balanced Plate',
    'Video Learner',
    'Consistency Champ',
    'Nutrition Nerd',
    'Top 3',
  ],
}

// Unchanged data. No longer its own section — `items[0]` (Recipes) now
// appears as a supporting visual next to the matching research finding in
// "What the research told me" (04); `items[1]` (Habit Tracker) now
// appears in "Building progression" (07), since it genuinely supports the
// progression/consistency story there.
export const beyondLesson = {
  intro: 'Nutrition knowledge becomes more useful when users can connect it to everyday behaviour.',
  items: [
    { label: 'Recipes', body: 'Turns nutrition guidance into practical meal inspiration.' },
    { label: 'Habit Tracker', body: 'Supports everyday actions related to nutrition, learning and personal goals.' },
  ],
}

// Unchanged data. No longer its own section — folds into "Building
// progression" (07) as one concise paired mention (Friends + Leaderboard
// together), per the approved screen-usage rules.
export const social = {
  intro:
    'The concept also explored social motivation through friends, shared progress, and local, global and friend-based ranking. It stays a smaller part of the experience — the learning journey remains the primary purpose.',
}

export const testing = {
  badge: 'Original academic prototype · 13 participants',
  intro:
    'The following findings came from testing the original academic prototype, not the independent UI redesign shown throughout this case study.',
  stats: [
    { value: '76.9%', label: 'rated the explanation of macronutrients as very or completely clear.' },
    { value: '61.5%', label: 'rated the mini-games as helping their understanding "very much," based on the original response scale.' },
    { value: '53.8%', label: 'reported that the experience had a significant influence on their dietary behaviour.' },
  ],
  note: 'Figures reflect self-reported participant ratings, not measured outcomes.',
  limitationsHeading: "What the evaluation couldn't tell us",
  limitations: [
    'Only 13 participants',
    'A broad age range',
    'Heavy reliance on self-reported data',
    "Some pre/post questions didn't measure identical constructs",
    'Limited behavioural observation',
    'No long-term retention measurement',
  ],
}

// Unchanged data. Now rendered inside the SAME section as `testing` above
// (10 — "Testing the original prototype") instead of its own separate
// "Where the original prototype fell short" section, so the case study
// makes its methodological point once, clearly, instead of running two
// visually similar "here's what was wrong" sections back to back.
export const prototypeLimitations = {
  intro:
    "The original prototype was built in Genially. Genially let us build an interactive learning experience, but it couldn't support several planned data-driven features.",
  pairs: [
    { designed: 'Habit tracking', limitation: 'No persistent user data' },
    { designed: 'Leaderboard', limitation: 'No dynamic database' },
    { designed: 'Personalised recipes', limitation: 'Limited dynamic input' },
  ],
  extra: [
    'Persistent login/account data',
    'A real user database',
    'Functional streak tracking',
    'Adding personal recipes',
    'Fully functional recipe search',
    'Dynamic dietary filters',
  ],
}

export const revisit = {
  body: [
    'The original project gave me the opportunity to explore educational UX, gamification and user evaluation.',
    "After completing it, I returned to Virtual Coach independently. Rather than treating the original prototype as finished, I used what I'd learned since to reconsider the interface and create a more consistent, intentional mobile experience.",
    'The screens shown throughout this case study represent this independent redesign unless labelled otherwise.',
  ],
  then: {
    label: 'Then · Academic prototype',
    items: ['Genially', 'Platform-constrained interactions', 'Early UX/UI system', 'Limited data functionality', 'Initial evaluation'],
  },
  now: {
    label: 'Now · Independent redesign',
    items: ['Figma', 'Refined interface system', 'Clearer hierarchy', 'Stronger visual consistency', 'Product thinking informed by reflection'],
  },
}

// Reshaped for Phase 1 — was a 3-tier, 15-screen gallery ("Hero screens" /
// "Important UX screens" / "Supporting ecosystem"). Per the approved
// screen-usage rules, Home, Levels, Achievements, Level 2, Streak,
// Recipes, Habits, Friends, Leaderboard, Welcome and Introduction have all
// already appeared meaningfully earlier in the page by the time a reader
// reaches this section — repeating them here again was the old showcase's
// core problem, not a strength. Login and Splash never carried real
// design-thinking weight. What's actually left to curate into a "here's
// the redesigned product, together" moment is: one full anchor view of
// Home (the only screen that legitimately earns a second, larger
// appearance — hero teaser vs. full reveal are genuinely different jobs),
// plus Profile and Edit Profile as a small, low-priority supporting group
// (they show the app is a complete product without pretending they carry
// the same design-thinking weight as the learning/progression screens).
// This is deliberately a smaller set than the blueprint's own "3–5
// supporting screens" estimate — per the blueprint's own explicit
// allowance, the right curated set here is smaller, because the
// deduplication work elsewhere already did its job.
export const showcase = {
  intro: 'A closer look at the independent redesign across the product.',
  anchor: { key: 'home', size: 'lg' },
  supporting: [
    { key: 'profile', size: 'sm', label: 'Profile' },
    { key: 'editProfile', size: 'sm', label: 'Edit profile' },
  ],
}

// 7 → 4. The dropped items' substance isn't deleted — it's folded into
// the closest remaining theme:
//   "Gamification" (XP/stars/badges/streaks/leaderboard comprehension)
//     → folded into Usability
//   "Motivation" (which mechanisms encourage return) and
//   "Learning retention" (recall after days/weeks)
//     → folded into Learning flow
export const nextSteps = {
  intro: "The independent redesign hasn't been validated with users yet — these are the questions I'd want to answer first.",
  items: [
    { label: 'Navigation', body: 'Can users easily find and continue their current lesson?' },
    {
      label: 'Learning flow',
      body: 'Do users understand Learn → Practice → Apply → Test → Reward — and which mechanisms genuinely encourage them to return, or help them recall key concepts after days or weeks?',
    },
    {
      label: 'Usability',
      body: 'Where do users hesitate or make mistakes — including whether they understand the difference between XP, stars, badges, streaks and leaderboard points?',
    },
    { label: 'Accessibility', body: 'Can the interface support different visual, motor and cognitive needs?' },
  ],
}

export const reflection = {
  challenges:
    'Leading a four-person academic project while also owning the UX/UI meant balancing group decision-making with a clear, consistent design direction — not always straightforward when research, content and design were moving at the same time.',
  learned:
    "Virtual Coach taught me that designing an educational experience isn't simply about presenting information clearly. Motivation, feedback, progression and interaction all influence how users engage with learning. Revisiting the project later also let me see earlier design and research decisions more critically, and apply what I'd learned since.",
  improve:
    'Revisiting Virtual Coach reminded me that design is rarely finished. As my understanding of UX grew, so did my ability to question earlier decisions, identify limitations and design with greater intention.',
}
