// Reconstructed from the surviving screens rather than the lost FigJam
// export (see the implementation report for the evidence behind every
// connection) — but drawn as an actual UX flow diagram (rounded nodes,
// short labels, connectors), not a screenshot gallery. The real screens
// already appear throughout the rest of this case study; repeating them
// inside the diagram just made it tall and heavy without adding
// information a plain node/label doesn't already carry.
//
// Three connector meanings, encoded by line STYLE (not colour alone, so
// the distinction survives for colour-blind readers and in print):
//   solid   — navigation directly shown by a visible button/control
//   dashed  — navigation reasonably inferred, but not proven by a button
//   dotted  — a conceptual "contributes to" relationship, never a
//             literal navigation step
const CONNECTOR_BORDER = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
}

const onboarding = [
  { label: 'Splash' },
  { label: 'Welcome', desc: 'Returning-user greeting' },
  { label: 'Coach V', desc: 'Guide introduces itself' },
  { label: 'Login' },
]

// Each group's own top-level connector from Home reflects the weakest
// link in that branch's evidence — e.g. Wellbeing is "solid" because
// Home's own screen has literal Habits/Recipes buttons; Social and
// Profile are "dashed" because Home doesn't have a matching button for
// either, only supporting content (the Friends Progress card) or a
// conventional persistent access point.
const groups = [
  {
    id: 'learning',
    label: 'Learning',
    connector: 'solid',
    emphasis: true,
    chain: [
      { label: 'Levels' },
      { label: 'Select level' },
      { label: 'Level 2: Protein', tasks: ['Watch', 'Compare', 'Apply', 'Battle'], note: '→ contributes to Achievements' },
    ],
  },
  {
    id: 'wellbeing',
    label: 'Wellbeing',
    connector: 'solid',
    siblings: [
      { label: 'Habits', note: '→ contributes to Streak' },
      { label: 'Recipes' },
    ],
  },
  {
    id: 'social',
    label: 'Social',
    connector: 'dashed',
    siblings: [{ label: 'Friends' }, { label: 'Leaderboard' }],
  },
  {
    id: 'progress',
    label: 'Progress',
    connector: 'dashed',
    siblings: [{ label: 'Streak' }],
  },
  {
    id: 'profile',
    label: 'Profile',
    connector: 'dashed',
    parent: { label: 'Profile' },
    children: [{ label: 'Edit Profile' }, { label: 'Achievements' }],
  },
]

function VConnector({ type = 'solid', className = 'h-4' }) {
  return <div aria-hidden="true" className={`mx-auto w-0 border-l-2 ${CONNECTOR_BORDER[type]} border-ink-muted/50 ${className}`} />
}

// A compact FigJam-style card — short label, optional one-line descriptor,
// optional inline task sequence, optional conceptual-relationship note.
// No image slot: this diagram is about structure, not UI appearance.
function FlowNode({ label, desc, tasks, note, emphasis }) {
  return (
    <div
      className={`w-full rounded-control border px-2.5 py-1.5 text-center ${
        emphasis ? 'border-accent/50 bg-accent-soft/20' : 'border-line bg-paper'
      }`}
    >
      <p className="text-xs font-semibold text-ink sm:text-sm">{label}</p>
      {desc && <p className="text-[0.6875rem] text-ink-soft">{desc}</p>}
      {tasks && <p className="mt-0.5 text-[0.625rem] font-medium uppercase tracking-wide text-ink-muted">{tasks.join(' → ')}</p>}
      {note && <p className="mt-1 border-t border-dotted border-ink-muted/40 pt-1 text-[0.625rem] text-ink-muted">{note}</p>}
    </div>
  )
}

// Renders one branch's internal content — a linear `chain`, flat
// `siblings`, or a `parent` + `children` tree (Profile). Used identically
// inside both the desktop grid and the mobile stack below; only the
// wrapping layout differs between them.
function GroupBranch({ group }) {
  return (
    <div className="w-full max-w-[9.5rem]">
      <p className="mb-1.5 text-center text-caption font-medium uppercase tracking-wide text-ink-muted">{group.label}</p>

      {group.chain && (
        <div>
          {group.chain.map((node, index) => (
            <div key={node.label}>
              {index > 0 && <VConnector type="solid" />}
              <FlowNode {...node} emphasis={group.emphasis} />
            </div>
          ))}
        </div>
      )}

      {group.siblings && (
        <div className="space-y-1.5">
          {group.siblings.map((node) => (
            <FlowNode key={node.label} {...node} />
          ))}
        </div>
      )}

      {group.parent && (
        <div>
          <FlowNode {...group.parent} />
          <div className="mt-1.5 space-y-1.5">
            {group.children.map((node) => (
              <div key={node.label}>
                <VConnector type="solid" className="h-3" />
                <FlowNode {...node} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function Legend() {
  return (
    <p className="text-center text-[0.6875rem] text-ink-muted">
      <span className="mr-1 inline-block w-4 border-t-2 border-solid border-ink-muted/60 align-middle" aria-hidden="true" /> Confirmed
      <span className="mx-1.5 inline-block w-4 border-t-2 border-dashed border-ink-muted/60 align-middle" aria-hidden="true" /> Inferred
      <span className="mx-1.5 inline-block w-4 border-t-2 border-dotted border-ink-muted/60 align-middle" aria-hidden="true" /> Contributes to
    </p>
  )
}

function VirtualCoachUserFlow() {
  return (
    <figure className="rounded-panel border border-line bg-paper-muted p-4 sm:p-6">
      <Legend />

      {/* Onboarding — wraps naturally at any width, so it needs no
          separate mobile treatment of its own. */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
        {onboarding.map((node, index) => (
          <div key={node.label} className="flex items-center gap-2">
            {index > 0 && (
              <span aria-hidden="true" className="text-ink-muted/50">
                →
              </span>
            )}
            <div className="w-24">
              <FlowNode {...node} />
            </div>
          </div>
        ))}
      </div>

      <VConnector type="solid" />

      {/* Home — the hub every branch reads from. */}
      <div className="mx-auto w-32 rounded-control border-2 border-ink bg-paper p-2 text-center">
        <p className="font-display text-sm font-semibold text-ink">Home</p>
      </div>

      {/* Desktop: hub-and-spoke. A shared horizontal spine, not five
          diagonal lines — the standard, clean way to draw "one hub, many
          children" with plain CSS borders instead of hand-routed SVG
          paths that would need re-computing at every breakpoint. */}
      <div className="hidden lg:block">
        <VConnector type="solid" />
        <div aria-hidden="true" className="border-t border-line" />
        <div className="grid grid-cols-5 gap-3 pt-0">
          {groups.map((group) => (
            <div key={group.id} className="flex flex-col items-center">
              <VConnector type={group.connector} />
              <GroupBranch group={group} />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet: same content, wrapped into a 2–3 column flow instead of
          either the full 5-column spine or a single mobile column. */}
      <div className="hidden sm:grid sm:grid-cols-3 sm:gap-x-4 sm:gap-y-6 sm:pt-6 lg:hidden">
        {groups.map((group) => (
          <div key={group.id} className="flex flex-col items-center">
            <VConnector type={group.connector} />
            <GroupBranch group={group} />
          </div>
        ))}
      </div>

      {/* Mobile: a single vertical sequence — not the desktop diagram
          scaled down, a deliberately different, simpler composition. */}
      <div className="sm:hidden">
        <div className="space-y-6 pt-4">
          {groups.map((group) => (
            <div key={group.id} className="flex flex-col items-center">
              <VConnector type={group.connector} />
              <GroupBranch group={group} />
            </div>
          ))}
        </div>
      </div>

      <figcaption className="mt-6 text-center text-sm text-ink-soft">
        Virtual Coach's user flow, reconstructed from the redesign itself.
      </figcaption>
    </figure>
  )
}

export default VirtualCoachUserFlow
