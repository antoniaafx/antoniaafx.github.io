// Large, single-stroke line compositions reused across sections — the
// approved "UX Blueprint Environments" pass, ported from artifact to real
// markup. Every mural is pure geometry (rect/line/circle/path, one stroke
// weight, no fills, no embedded text) built from the vocabulary of the job
// itself: browser frames, mobile frames, prototype connectors, journey
// maps, ruled pages. Purely decorative throughout: absolutely positioned,
// pointer-events-none, aria-hidden, low opacity, never part of layout.
//
// Production colour rule from the approved pass: white line-work on the
// two dark sections (Featured Project, Contact), accent-coloured
// line-work on bright/tinted sections. Each variant below is wired to the
// one colour its approved section actually uses — a variant only ever
// appears on the section it was designed for, so there's no need for a
// separate colour prop.
//
// `skills` and `philosophy` deliberately stay on the quieter grid-field /
// corner-guide devices from the earlier Environmental Storytelling pass
// instead of getting a dedicated mural — "five murals, not seven" was the
// explicit rule that pass landed on, since both those sections are
// already visually busy with their own cards.
const STROKE = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 }

function HeroMural() {
  return (
    <svg viewBox="0 0 600 400" {...STROKE} className="block h-full w-full">
      <rect x="20" y="20" width="560" height="360" rx="12" />
      <line x1="20" y1="62" x2="580" y2="62" />
      <circle cx="42" cy="41" r="4" />
      <circle cx="60" cy="41" r="4" />
      <circle cx="78" cy="41" r="4" />
      <rect x="44" y="90" width="512" height="26" rx="4" />
      <rect x="44" y="150" width="260" height="16" />
      <rect x="44" y="176" width="180" height="16" />
      <rect x="44" y="212" width="320" height="10" />
      <rect x="44" y="232" width="280" height="10" />
      <rect x="44" y="252" width="300" height="10" />
      <rect x="44" y="284" width="110" height="38" rx="6" />
      <rect x="168" y="284" width="110" height="38" rx="6" />
      <rect x="360" y="150" width="196" height="172" rx="8" />
      <line x1="360" y1="150" x2="556" y2="322" />
      <line x1="556" y1="150" x2="360" y2="322" />
    </svg>
  )
}

function FeaturedMural() {
  return (
    <svg viewBox="0 0 700 420" {...STROKE} className="block h-full w-full">
      <rect x="40" y="50" width="320" height="210" rx="10" />
      <line x1="40" y1="84" x2="360" y2="84" />
      <circle cx="58" cy="67" r="3" />
      <circle cx="72" cy="67" r="3" />
      <circle cx="86" cy="67" r="3" />
      <rect x="58" y="100" width="284" height="18" rx="3" />
      <rect x="58" y="132" width="130" height="90" rx="4" />
      <rect x="200" y="132" width="142" height="90" rx="4" />
      <rect x="470" y="60" width="150" height="290" rx="18" />
      <line x1="520" y1="332" x2="570" y2="332" />
      <rect x="490" y="90" width="110" height="70" rx="4" />
      <rect x="490" y="172" width="110" height="14" />
      <rect x="490" y="194" width="80" height="14" />
      <path d="M362 155 C 410 155, 420 155, 462 155" strokeDasharray="4 5" />
      <path d="M456 148 L468 155 L456 162" />
      <circle cx="362" cy="155" r="4" />
      <rect x="40" y="300" width="90" height="70" rx="4" />
      <line x1="40" y1="300" x2="130" y2="370" />
      <line x1="130" y1="300" x2="40" y2="370" />
      <rect x="150" y="300" width="90" height="70" rx="4" />
      <line x1="150" y1="300" x2="240" y2="370" />
      <line x1="240" y1="300" x2="150" y2="370" />
    </svg>
  )
}

function MyStoryMural() {
  return (
    <svg viewBox="0 0 640 380" {...STROKE} className="block h-full w-full">
      <rect x="20" y="20" width="280" height="340" rx="6" />
      <rect x="340" y="20" width="280" height="340" rx="6" />
      <path d="M300 10 L340 10 L340 40 L320 30 L300 40 Z" />
      <rect x="50" y="50" width="70" height="60" transform="rotate(-6 85 80)" />
      <line x1="50" y1="140" x2="230" y2="140" />
      <line x1="50" y1="164" x2="200" y2="164" />
      <line x1="50" y1="188" x2="240" y2="188" />
      <line x1="50" y1="212" x2="180" y2="212" />
      <line x1="50" y1="236" x2="220" y2="236" />
      <line x1="50" y1="290" x2="160" y2="290" />
      <line x1="50" y1="314" x2="210" y2="314" />
      <path d="M370 90 L420 130 L460 90 L510 150 L560 110" strokeLinejoin="round" />
      <circle cx="370" cy="90" r="6" />
      <circle cx="420" cy="130" r="6" />
      <circle cx="460" cy="90" r="6" />
      <circle cx="510" cy="150" r="6" />
      <circle cx="560" cy="110" r="6" />
      <line x1="370" y1="200" x2="560" y2="200" />
      <line x1="370" y1="224" x2="520" y2="224" />
      <line x1="370" y1="248" x2="550" y2="248" />
      <line x1="370" y1="290" x2="500" y2="290" />
    </svg>
  )
}

function TimelineMural() {
  return (
    <svg viewBox="0 0 220 500" {...STROKE} className="block h-full w-full">
      <line x1="110" y1="30" x2="110" y2="470" />
      <circle cx="110" cy="65" r="9" />
      <line x1="119" y1="65" x2="160" y2="65" />
      <rect x="160" y="49" width="32" height="32" rx="4" />
      <circle cx="110" cy="175" r="9" />
      <line x1="101" y1="175" x2="60" y2="175" />
      <rect x="28" y="159" width="32" height="32" rx="4" />
      <circle cx="110" cy="285" r="9" />
      <line x1="119" y1="285" x2="160" y2="285" />
      <rect x="160" y="269" width="32" height="32" rx="4" />
      <circle cx="110" cy="395" r="9" />
      <line x1="101" y1="395" x2="60" y2="395" />
      <rect x="28" y="379" width="32" height="32" rx="4" />
      <circle cx="110" cy="460" r="9" />
      <line x1="119" y1="460" x2="160" y2="460" />
      <rect x="160" y="444" width="32" height="32" rx="4" />
    </svg>
  )
}

function ContactMural() {
  return (
    <svg viewBox="0 0 500 400" {...STROKE} className="block h-full w-full">
      <line x1="40" y1="40" x2="460" y2="40" />
      <line x1="40" y1="76" x2="460" y2="76" />
      <line x1="40" y1="112" x2="460" y2="112" />
      <line x1="40" y1="148" x2="460" y2="148" />
      <line x1="40" y1="184" x2="460" y2="184" />
      <line x1="40" y1="220" x2="460" y2="220" />
      <line x1="40" y1="256" x2="460" y2="256" />
      <line x1="40" y1="292" x2="460" y2="292" />
      <line x1="40" y1="328" x2="460" y2="328" />
      <path d="M420 60 L440 60 L440 96 L420 96" />
      <path d="M60 200 L60 184 L44 184" />
      <path d="M50 178 L44 184 L50 190" />
    </svg>
  )
}

// The hero wireframe's own grid paper, extended to a section background —
// a CSS gradient rather than an SVG scene, since it's a literal tiled
// pattern, not a one-time composition.
function GridField() {
  return (
    <div
      className="absolute inset-0 text-accent opacity-[0.05]"
      style={{
        backgroundImage:
          'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    />
  )
}

// The same "selected frame" bracket already used for card focus/hover
// framing elsewhere, applied once at the section level.
function CornerGuides() {
  return (
    <div className="absolute inset-6 text-accent opacity-[0.16] sm:inset-10">
      <span className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-current" />
      <span className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-current" />
    </div>
  )
}

// Each mural entry: which scene, the aspect ratio its viewBox defines, and
// where it sits — chosen per section so its densest area falls in an empty
// margin rather than under a heading or the real content column.
const MURALS = {
  hero: {
    render: HeroMural,
    // Hidden below `lg`: at that width the card is nearly full-bleed, so
    // there's no real margin to show a composition in anyway — see brief
    // §6, hiding secondary elements on smaller viewports is the intended
    // behaviour, not a shortfall.
    className: 'hidden lg:block -right-[6%] top-1/2 w-[640px] -translate-y-1/2 aspect-[600/400] text-accent opacity-[0.07]',
  },
  featured: {
    render: FeaturedMural,
    className:
      'hidden sm:block -right-[8%] -bottom-[10%] w-[420px] md:w-[560px] lg:w-[760px] aspect-[700/420] text-paper opacity-[0.06]',
  },
  myStory: {
    render: MyStoryMural,
    className:
      'hidden sm:block -right-[8%] top-1/2 w-[420px] md:w-[520px] lg:w-[620px] -translate-y-1/2 aspect-[640/380] text-accent opacity-[0.07]',
  },
  timeline: {
    render: TimelineMural,
    // Content column (numbers + text) sits left-anchored and caps at
    // max-w-2xl inside a max-w-6xl section — this lives in the open
    // right-hand margin that leaves, never under the markers or copy.
    className: 'hidden lg:block -right-[4%] top-1/2 w-[180px] -translate-y-1/2 aspect-[220/500] text-accent opacity-[0.08]',
  },
  contact: {
    render: ContactMural,
    className:
      'hidden sm:block left-1/2 top-1/2 w-[520px] lg:w-[720px] -translate-x-1/2 -translate-y-1/2 aspect-[500/400] text-paper opacity-[0.06]',
  },
}

// `variant` selects one of the five approved murals (hero / featured /
// myStory / timeline / contact) or one of the two quieter devices
// (skills / philosophy). Always absolutely positioned, pointer-events-
// none, aria-hidden, never in the accessibility tree, never affecting
// layout — Section only ever renders this inside a `relative
// overflow-hidden` wrapper (see Section.jsx's `artwork` prop), so it can
// never cause horizontal scroll or sit over a click target at any
// viewport size, by construction, regardless of how it's positioned here.
function EnvironmentalArtwork({ variant }) {
  if (variant === 'skills') {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <GridField />
      </div>
    )
  }

  if (variant === 'philosophy') {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <CornerGuides />
      </div>
    )
  }

  const mural = MURALS[variant]
  if (!mural) return null
  const Mural = mural.render

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${mural.className}`}>
      <Mural />
    </div>
  )
}

export default EnvironmentalArtwork
