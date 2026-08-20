// All narrative content + screen assets for the Virtual Coach case study.
// Kept separate from projects.js (which only carries the grid/homepage
// card fields) because this project's case study doesn't fit the generic
// overview/research/process/uiDesign/results/reflection shape the other
// projects use — see VirtualCoachCaseStudy.jsx for why it gets its own
// page rather than being forced into CaseStudy.jsx's generic renderer.
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

// ---------------------------------------------------------------------
// SCREENS — none of these image files exist in the repo yet. Every entry
// below intentionally has `src: undefined` so each screen slot falls back
// to the site's existing ImagePlaceholder (via PhoneScreen.jsx) instead of
// a broken <img>. To wire in the real redesign screens:
//
//   1. Add the exported images to src/assets/images/projects/virtual-coach/
//      using the filenames noted per screen below.
//   2. Import each one at the top of this file, e.g.
//        import vcHome from '../assets/images/projects/virtual-coach/virtual-coach-home.webp'
//   3. Set it as that screen's `src` below.
//
// Nothing else needs to change — every section already reads from this
// object.
// ---------------------------------------------------------------------
export const screens = {
  home: {
    src: undefined, // virtual-coach-home.webp
    alt: 'Virtual Coach Home screen showing the current lesson, streak, and quick access to levels and achievements.',
  },
  levels: {
    src: undefined, // virtual-coach-levels.webp
    alt: 'Virtual Coach Levels screen showing completed, current and locked nutrition learning levels.',
  },
  level2: {
    src: undefined, // virtual-coach-level-2.webp
    alt: 'Virtual Coach Level 2: Protein screen showing the Watch, Compare, Apply and Battle sequence.',
  },
  achievements: {
    src: undefined, // virtual-coach-achievements.webp
    alt: 'Virtual Coach Achievements screen showing earned badges such as Protein Master and Quiz Whiz.',
  },
  streak: {
    src: undefined, // virtual-coach-streak.webp
    alt: 'Virtual Coach Streak screen showing consecutive days of learning activity.',
  },
  recipes: {
    src: undefined, // virtual-coach-recipes.webp
    alt: 'Virtual Coach Recipes screen showing meal suggestions connected to the learning content.',
  },
  habits: {
    src: undefined, // virtual-coach-habits.webp
    alt: 'Virtual Coach Habit Tracker screen showing everyday nutrition-related tasks.',
  },
  friends: {
    src: undefined, // virtual-coach-friends.webp
    alt: 'Virtual Coach Friends screen showing connected users and shared progress.',
  },
  leaderboard: {
    src: undefined, // virtual-coach-leaderboard.webp
    alt: 'Virtual Coach Leaderboard screen showing local, global and friend rankings.',
  },
  profile: {
    src: undefined, // virtual-coach-profile.webp
    alt: "Virtual Coach Profile screen showing a user's progress, achievements and social connections.",
  },
  editProfile: {
    src: undefined, // virtual-coach-edit-profile.webp
    alt: 'Virtual Coach Edit Profile screen.',
  },
  login: {
    src: undefined, // virtual-coach-login.webp
    alt: 'Virtual Coach Login screen.',
  },
  introduction: {
    src: undefined, // virtual-coach-introduction.webp
    alt: 'Coach V introducing the Virtual Coach learning experience.',
  },
  welcome: {
    src: undefined, // virtual-coach-welcome.webp
    alt: 'Coach V welcoming a new user to Virtual Coach.',
  },
  video: {
    src: undefined, // virtual-coach-video.webp (Coach V "learning/video" state)
    alt: 'Coach V presenting an educational video within a lesson.',
  },
  splash: {
    src: undefined, // virtual-coach-splash.webp
    alt: 'Virtual Coach splash / onboarding screen.',
  },
  figjamFlow: {
    src: undefined, // virtual-coach-user-flow.png (FigJam export)
    alt: 'FigJam export of the Virtual Coach application flow, mapped before prototyping began.',
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
}

export const context = {
  intro: [
    'Virtual Coach began as a four-person university project exploring how interactive technology and gamification could make nutrition education easier to understand and more engaging.',
    'I served as Project Lead and Lead UX/UI Designer, leading the interface design and contributing extensively across research, user flows, prototyping, gamification, educational content, testing and evaluation.',
    "After completing the academic project, I independently returned to the concept and redesigned the interface to apply what I'd learned since.",
  ],
  facts: [
    { label: 'Original context', value: 'University group project' },
    { label: 'Team', value: '4 students' },
    { label: 'My role', value: 'Project Lead & Lead UX/UI Designer' },
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
  states: ['introduction', 'welcome', 'streak', 'video'],
}

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

export const beyondLesson = {
  intro: 'Nutrition knowledge becomes more useful when users can connect it to everyday behaviour.',
  items: [
    { label: 'Recipes', body: 'Turns nutrition guidance into practical meal inspiration.' },
    { label: 'Habit Tracker', body: 'Supports everyday actions related to nutrition, learning and personal goals.' },
  ],
}

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

export const showcase = {
  intro: 'A closer look at the independent redesign across the product.',
  tiers: [
    { label: 'Primary', screens: ['home', 'levels', 'achievements'] },
    { label: 'Learning', screens: ['levels', 'level2'] },
    { label: 'Behaviour', screens: ['recipes', 'habits'] },
    { label: 'Social', screens: ['friends', 'leaderboard'] },
    { label: 'Supporting', screens: ['profile', 'editProfile', 'login', 'splash', 'streak'] },
  ],
}

export const nextSteps = {
  intro: "The independent redesign hasn't been validated with users yet — these are the questions I'd want to answer first.",
  items: [
    { label: 'Navigation', body: 'Can users easily find and continue their current lesson?' },
    { label: 'Learning flow', body: 'Do users understand Learn → Practice → Apply → Test → Reward?' },
    { label: 'Gamification', body: 'Do users understand the difference between XP, stars, badges, streaks and leaderboard points?' },
    { label: 'Motivation', body: 'Which mechanisms genuinely encourage users to return?' },
    { label: 'Usability', body: 'Where do users hesitate or make mistakes?' },
    { label: 'Learning retention', body: 'Can users recall key concepts after several days or weeks?' },
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
