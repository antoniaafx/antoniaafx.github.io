// Used by About's timeline and its Experience/Education detail sections —
// editing here updates all of them. Dates are left as placeholders where the
// exact date isn't set yet; nothing here is an invented achievement.
//
// `sortDate` (ISO year-month) is a plain sort key, not shown anywhere — it's
// what lets the combined timeline in ExperienceTimeline order education and
// experience entries chronologically instead of grouping by type.

export const experience = [
  {
    id: 'tallinn-university-cultural-heritage',
    title: 'Interactive Environments for Virtualization of Cultural Heritage',
    role: 'Tallinn University · Tallinn, Estonia',
    dates: 'Oct 2025 – Dec 2025',
    sortDate: '2025-10',
    responsibilities: [
      'Measuring user interaction through eye-tracking theory and facial expression analysis',
      'Analyzing user behavior to optimize interaction logic and usability',
      'Designing interactive environments that enable real-time engagement, learning, and participation',
    ],
    achievements: [],
  },
  {
    id: 'air-balloon-internship',
    title: 'Air Balloon Digital Studio',
    role: 'UX Researcher & UI/UX Designer Intern',
    dates: 'May 2026 — July 2026',
    sortDate: '2026-05',
    responsibilities: [
      'Conducted competitor analysis and user research to inform design decisions',
      'Collaborated with designers on UX improvements',
      'Created wireframes and high-fidelity prototypes',
      'Designed responsive interfaces and built reusable UI components and visual systems',
    ],
    achievements: [],
  },
]

export const education = [
  {
    id: 'bachelors-degree',
    degree: "Bachelor's Degree in Communications and Internet Studies",
    institution: 'Cyprus University of Technology',
    dates: 'September 2023 – Present',
    sortDate: '2023-09',
    courses: ['Human-Centered Design', 'Human-Computer Interaction'],
  },
]
