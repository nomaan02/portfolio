// All copy for /work/canvasser/logger/. Layout lives in src/pages/work/canvasser/logger.astro.
// Approved in Figma: file EHxBRxJZGVAU1MuSU59RTH, frame "D2D Logger · Design deep-dive" (348:3270).
// Images live in src/assets/logger/. Every file named here must exist there.

export type Shot = { file: string; alt: string; label?: string };
export type Note = { kind: 'plus' | 'minus'; text: string };

export const meta = {
  title: 'Logger deep-dive · D2D case study · Nomaan Akram',
  description:
    "How tap heatmaps from five canvassers, thumb-reach research and three design passes turned the D2D Logger's four buttons into one press, drag and release gesture.",
};

export const hero = {
  crumb: 'D2D canvasser platform / Logger deep-dive',
  back: { label: 'Full D2D case study', href: '/work/canvasser/' },
  tag: 'UX deep-dive · 5 min read',
  titleLines: ['One thumb,', 'one mark per door.'],
  lead: "Heatmaps from five canvassers showed V1's outcome buttons sat in the thumb's stretch zone. This page is how four buttons became one gesture.",
  facts: [
    { term: 'Role', detail: 'Research, design, build' },
    { term: 'Input', detail: 'Heatmaps · 5 canvassers' },
    { term: 'Scope', detail: 'Logger screen · 6 states' },
    { term: 'Status', detail: 'Designed · field test next' },
  ],
  before: {
    file: 'v1.png',
    label: 'Before · V1 (shipped)',
    alt: "The shipped V1 Logger: door 71 in large type, today's stats in a list, and four outcome buttons stacked down the right edge (Lead, Contact, Rented or council and Not in), with Other beside them.",
  },
  after: {
    file: 'v21-rest.png',
    label: 'After · V2.1',
    alt: 'The V2.1 Logger at rest: door 71 in large type, one row of counts, and a round outcome dial low in the centre with Contact at the top, Lead on the right, Not in at the bottom and Rented on the left.',
  },
  legendTitle: 'How to read this page',
  legend: [
    { kind: 'step', label: 'Step' },
    { kind: 'decision', label: 'Decision' },
    { kind: 'input', label: 'Research input' },
    { kind: 'flow', label: 'Flow' },
    { kind: 'rejected', label: 'Rejected path' },
  ],
};

export const observe = {
  eyebrow: 'Observe',
  title: 'Logging is the most repeated thing a canvasser does.',
  intro:
    'V1 put four outcome buttons down the right edge. It worked. But every door is a log, so any extra reach repeats all shift.',
  cards: [
    { label: 'Frequency', value: 'Every door, all shift' },
    { label: 'Light', value: 'Outdoors, often in glare' },
    { label: 'Signal', value: 'Patchy, so logs queue' },
    { label: 'Grip', value: 'One thumb, on the move' },
  ],
};

export const measure = {
  eyebrow: 'Measure',
  tag: 'Field research',
  title: 'Where do thumbs actually land?',
  intro:
    'Five canvassers on V1. Each session was set to how they held the phone and how far their thumb could move, then every tap was logged.',
  raw: {
    file: 'heatmap.png',
    label: 'A · Tap heatmap, V1',
    alt: 'Tap heatmap over the V1 Logger. The hottest spots sit on the four outcome buttons down the right edge and on the map. Smaller spots land on the door number, Add note, Other and the tab bar.',
  },
  overlay: {
    file: 'heatmap-reach.png',
    label: 'B · + one-handed reach',
    alt: 'The same heatmap with one-handed reach zones laid over it: hard reach across the top, a stretch band through the middle and a comfort zone low down. Pin 1 marks Lead, the top outcome button, in the stretch band. Pin 2 marks the outcome column on the right edge. Pin 3 marks the read-only stats in the comfort zone.',
  },
  findingsTitle: 'What the overlay showed',
  findings: [
    'Lead, the outcome that pays, sits highest: in the stretch band.',
    'Taps stack down the right edge. Every outcome is a different aim point.',
    'The easiest spot, low and central, holds read-only stats.',
  ],
  gripTitle: 'How people hold phones',
  grip: [
    { value: '49%', label: 'one hand' },
    { value: '36%', label: 'cradled' },
    { value: '15%', label: 'two hands' },
  ],
  gripSource: 'Hoober · 1,333 street observations · 2013',
  note: 'Reach zones are approximate: right hand, after Hoober (2013).',
};

export const decide = {
  eyebrow: 'Decide',
  title: 'Move the buttons, or change the input?',
  intro: 'Two ways out of the stretch zone.',
  options: [
    {
      key: 'A',
      status: 'Rejected',
      title: 'Bigger buttons, lower down',
      body: 'Still four aim points. Still eyes on the screen to pick one.',
    },
    {
      key: 'B',
      status: 'Chosen',
      title: 'Directional input',
      body: 'Aim with direction, not distance. One start point and the same short move for every door.',
    },
  ],
  next: 'Check it against research',
};

export const research = {
  eyebrow: 'Research',
  tag: 'Input',
  title: 'Then I checked the idea against the research.',
  intro: "Each finding had to change something on screen, or it didn't make the cut.",
  decisionLabel: 'So on screen',
  rows: [
    {
      source: 'Callahan, Hopkins, Weiser & Shneiderman · 1988',
      finding: 'Pie menus were about 15% faster than linear menus, with fewer errors. Distance is fixed; only direction changes.',
      decision: 'Every outcome sits the same distance from the thumb.',
    },
    {
      source: 'Kurtenbach & Buxton · 1993',
      finding: 'Experts stayed under 10% error with four items per level, even four levels deep.',
      decision: 'Four outcomes, one level, one per axis.',
    },
    {
      source: 'Kurtenbach, Sellen & Buxton · 1993',
      finding: 'Novices pop the menu up. Experts make the same mark without waiting for it.',
      decision: 'The drag is the same whether you look or not.',
    },
    {
      source: 'Kurtenbach & Buxton · 1994',
      finding: 'Marks were 3.5× faster than picking from the menu, yet experts still flipped back to check it.',
      decision: 'Labels never hide, and any label can be tapped.',
    },
    {
      source: 'Hoober · 2013  /  Clark · 2015',
      finding: '49% hold one-handed and thumbs do about 75% of taps. Left and right reach overlap mid-screen.',
      decision: "Dial centred and low, inside both hands' reach.",
    },
  ],
  caveatLabel: 'Caveat',
  caveat: 'Mostly desk studies with pens and mice. They justify trying a dial, not a promised speed-up on a phone, outdoors.',
};

export const iterate = {
  eyebrow: 'Iterate',
  title: 'Three main passes to get there.',
  intro: 'Each pass fixed what the last one exposed.',
  joints: ['merge', 'polish'],
  passes: [
    {
      label: 'Pass 1 · Rough sketch',
      file: 'sketch.png',
      alt: 'Rough Figma sketch on a dotted board: four outlined circles around an empty centre, with Lead at the top, Contact on the right, Rented or council at the bottom and Not in on the left. Below it, a drag state with a blue trail from the centre up towards Lead.',
      title: 'Four circles, swipe from centre',
      notes: [
        { kind: 'plus', text: 'Direction, not distance' },
        { kind: 'minus', text: 'Still four separate targets' },
        { kind: 'minus', text: 'Wide spread, near the edges' },
      ],
    },
    {
      label: 'Pass 2 · V2',
      file: 'v2-rest.png',
      alt: 'V2 Logger at rest: the four outcomes merged into one ring around a dark centre puck, with Contact at the top, Lead on the right, Not in at the bottom and Rented on the left. The counts sit in one row above the dial.',
      title: 'One ring, one puck',
      notes: [
        { kind: 'plus', text: 'Targets merged into a radial layout' },
        { kind: 'plus', text: 'Up and down are the shortest thumb moves, so the most-logged outcomes moved there' },
        { kind: 'plus', text: 'Screen layout finalised' },
        { kind: 'minus', text: 'Labels fade to 25% mid-drag: lost in sunlight' },
        { kind: 'minus', text: 'Margins drift: 20 / 16 / 28' },
      ],
    },
    {
      label: 'Pass 3 · V2.1',
      file: 'v21-rest.png',
      alt: 'V2.1 Logger at rest: the same dial after the polish pass, with even margins, neutral labels and a shadow only on the centre puck.',
      title: 'Polish for the street',
      notes: [
        { kind: 'plus', text: 'Labels go neutral at 4.6:1, not faint' },
        { kind: 'plus', text: 'Shadows on three things only' },
        { kind: 'plus', text: 'One 20 px margin; radius 24 / 16 / 12' },
      ],
    },
  ] satisfies { label: string; file: string; alt: string; title: string; notes: Note[] }[],
};

export const interact = {
  eyebrow: 'Interact',
  title: 'Press, drag, release.',
  intro: 'Direction is the outcome. The mark is the same at every door, so it gets quicker with practice.',
  keyTitle: 'Direction key',
  key: [
    { dir: 'up', label: 'Contact' },
    { dir: 'right', label: 'Lead' },
    { dir: 'down', label: 'Not in' },
    { dir: 'left', label: 'Rented' },
  ],
  joints: ['drag', 'release'],
  steps: [
    {
      title: 'At rest',
      file: 'v21-rest.png',
      alt: 'The V2.1 Logger at rest on door 71, with the outcome dial low in the centre and every label in colour.',
      caption: 'Four outcomes, labelled and always visible.',
    },
    {
      title: 'Dragging to Lead',
      file: 'v21-dragging.png',
      alt: 'Mid-drag towards Lead: a green "Release · Lead" readout sits above the dial, the Lead arc is bold, the other labels have turned grey and the top of the screen dims.',
      caption: 'Readout sits above the thumb. Other labels go neutral.',
    },
    {
      title: 'Logged',
      file: 'v21-logged.png',
      alt: 'After release: the door number has moved on to 73 and a dark toast reads "Door 71 logged, Lead, now on 73" with an Undo button.',
      caption: 'Door moves on. Undo waits in the toast for 60 s.',
    },
  ],
};

export const stress = {
  eyebrow: 'Stress-test',
  title: 'Then I tried to break it.',
  intro: 'The app already caches offline and syncs later. These states just have to say so, clearly, in the street.',
  cases: [
    {
      question: 'First door of the shift?',
      file: 'v21-first-door.png',
      alt: 'Start of shift: door 1 with door 3 next, every count at 00 and no previous door. The dial is unchanged.',
      caption: 'Counts at zero, no previous door. Nothing new to learn.',
    },
    {
      question: 'GPS drops?',
      file: 'v21-gps-lost.png',
      alt: 'GPS lost: the location marker is grey, the chip reads "Last known 82 · 83" and an amber line reads "GPS lost, showing your last known door". Logging carries on at door 71.',
      caption: 'Marker greys and the line says why. Logging carries on from the last known door.',
    },
    {
      question: 'Signal drops?',
      file: 'v21-offline.png',
      alt: 'Offline: an amber line reads "Offline, 3 waiting to send" and a toast reads "Door 71 saved offline" with an Undo button. The door has moved on to 73.',
      caption: 'Toast says saved, not sent. Glyph and words change, never colour alone.',
    },
  ],
  detailsTitle: 'Details the street forced',
  details: [
    {
      tag: 'Sunlight',
      title: 'Neutral, not faint',
      body: 'Mid-drag, the other labels lose colour but keep full contrast. Faded text vanishes first outdoors.',
      file: 'dial-sunlight.png',
      alt: 'The dial mid-drag to Lead: the Lead arc is bold green and the other three labels are grey but still dark enough to read.',
    },
    {
      tag: 'Fallback',
      title: 'Every outcome is one tap',
      body: 'Tap a label to log without dragging. Nobody has to learn the gesture on day one.',
      file: 'dial-fallback.png',
      alt: 'The dial with the Contact quarter tapped and highlighted, and a "Release · Contact" readout above it.',
    },
    {
      tag: 'Undo',
      title: 'Next to what it undoes',
      body: 'The floating undo ring moved into the confirmation. One place to look, for 60 seconds.',
      file: 'undo-toast.png',
      alt: 'The log toast: a green tick, "Door 71 logged, Lead, now on 73" and an Undo button on the right.',
    },
  ],
};

export const next = {
  eyebrow: 'Next',
  title: "What's still wrong, and how I'll know it worked.",
  issuesTitle: 'Open issues',
  issues: [
    'Outcome arcs reach 2.4 to 3.05:1 on white. Graphics need 3:1, so the outcome tokens go darker.',
    'The undo countdown is a 2 px bar. V1 chose text over a bar because of glare. Revisit.',
    "A dial has to be learned; four buttons don't. Labels and tap stay as the safety net.",
  ],
  planTitle: 'Field test plan',
  planLead: 'Same five canvassers. V1 vs a V2.1 prototype, one shift each.',
  measures: [
    { term: 'Time per log', detail: 'Is it actually faster?' },
    { term: 'Undo rate', detail: 'Stand-in for mis-logs' },
    { term: 'Tap vs drag', detail: 'Is the gesture being learned?' },
    { term: 'Heatmap re-run', detail: 'Did taps move into comfort?' },
  ],
  shipRule: 'Ship if logs are no slower and undos drop.',
  loop: 'Loop back to 02 · Measure, with V2.1',
};

export const references = {
  title: 'References',
  items: [
    {
      text: 'Callahan, Hopkins, Weiser & Shneiderman (1988). An empirical comparison of pie vs. linear menus. CHI ’88.',
      href: 'https://sites.umiacs.umd.edu/node/16962',
    },
    {
      text: 'Kurtenbach & Buxton (1993). The limits of expert performance using hierarchic marking menus. INTERCHI ’93.',
      href: 'https://www.billbuxton.com/MMExpert.html',
    },
    {
      text: 'Kurtenbach, Sellen & Buxton (1993). An empirical evaluation of some articulatory and cognitive aspects of marking menus. Human-Computer Interaction 8(1).',
      href: 'https://billbuxton.com/PieMenus.html',
    },
    {
      text: 'Kurtenbach & Buxton (1994). User learning and performance with marking menus. CHI ’94.',
      href: 'https://billbuxton.com/MMUserLearn.html',
    },
    {
      text: 'Hoober (2013). How do users really hold mobile devices? UXmatters.',
      href: 'https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php',
    },
    {
      text: 'Clark (2015). How we hold our gadgets. A List Apart, from Designing for Touch.',
      href: 'https://alistapart.com/article/how-we-hold-our-gadgets/',
    },
  ],
  back: {
    eyebrow: 'Back to',
    title: 'The full D2D case study',
    body: 'Research, routes, build and outcomes',
    href: '/work/canvasser/',
  },
};
