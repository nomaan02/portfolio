export type Card = { eyebrow?: string; title: string; body: string };
export type Decision = { index: number; title: string; decision: string; why: string; tradeoff: string };

export const meta = {
  title: 'D2D case study · Nomaan Akram',
  description:
    'How I designed and built an offline-first field app for a door-to-door sales team. Used daily by 60+ canvassers across 5 South West branches.',
};

export const hero = {
  eyebrow: 'Case study · First Home Improvements · 2026',
  title: 'D2D: taking a door-to-door sales team from paper surveys to live data',
  lead:
    'I knocked doors on this team, and I designed and built the tool it now runs on. Over four months I took it from a paper sketch to an offline-first platform: a phone app that logs every door in one tap, and a web dashboard that plans areas, generates walking routes and shows results.',
  stats: [
    { value: '+40%', label: 'average leads per week, 5-week pilot' },
    { value: '+2', label: 'pitches per canvasser per week' },
    { value: '60+', label: 'canvassers using it daily' },
    { value: '5', label: 'South West branches, live since October 2026' },
  ],
  facts: [
    { term: 'Role', detail: 'Sole designer and developer: field research, UX/UI, data engineering, full-stack build, rollout' },
    { term: 'Timeline', detail: 'July to October 2026. Planned and designed in July, live since October' },
    { term: 'Worked with', detail: 'The canvassing team (field testers and route annotations) and the regional manager (stakeholder and buyer)' },
    { term: 'Platform', detail: 'Mobile web app for canvassers (offline-first). Responsive admin for managers' },
  ],
  stack: [
    'Next.js 15', 'TypeScript', 'Tailwind', 'Supabase', 'Postgres + PostGIS', 'Row-level security',
    'MapLibre GL JS', 'MapTiler', 'Dexie / IndexedDB', 'Vercel + Cron', 'OpenStreetMap',
    'OS Open UPRN', 'EPC open data', 'Figma',
  ],
};

export const tldr = [
  { term: 'Problem', detail: 'Areas were planned from memory and circled on WhatsApp. Every knock was written on paper. Nobody could answer "we knocked this area six weeks ago: which doors are left?"' },
  { term: 'What I built', detail: 'A canvasser app that logs a door in one tap, works with no signal and follows a generated walking route. A manager dashboard to draw areas, allocate teams, see coverage and coach from real numbers. The company CRM syncs back in every night.' },
  { term: 'How', detail: "I worked the job myself, wrote down the team's unwritten rules (how they walk a street, what counts as a contact), designed in Figma, and shipped in tested phases with AI-assisted delivery, accelerated by batch scripting and manual checks and corrections." },
  { term: 'Result', detail: 'Live across 5 South West branches, used daily by 60+ canvassers. Leads per week up 40% on average in a 5-week pilot. Talks about expanding further are under way.' },
];

export const context = {
  title: 'The job, and why I was the one to fix it',
  intro:
    'A Bristol home-improvements firm (windows, doors, conservatories) finds its sales appointments by knocking doors. Teams of one to three canvassers work an area, called a prop, for about five hours a shift, six days a week. I was one of those canvassers. I also design and build software, so I could see the problem from the pavement and fix it from the keyboard.',
  beforeTitle: 'How it worked before',
  before: [
    { eyebrow: '01', title: 'Areas picked from memory', body: "A manager chose today's props from memory of what was knocked recently, circled them on a map screenshot and sent them to each team on WhatsApp." },
    { eyebrow: '02', title: 'Every knock on paper', body: 'Canvassers wrote a house number and an outcome on a paper survey: contact, lead, not in, rented. Sheets came back with missing house numbers and street names.' },
    { eyebrow: '03', title: 'No memory between visits', body: 'Nothing linked a door to its history. Bad areas got a reputation ("that area\'s dead") instead of a plan.' },
  ] satisfies Card[],
  question: {
    eyebrow: 'The question nobody could answer',
    text: '"We knocked Bishopston six weeks ago. Which doors are left, and when were they last hit?"',
    note: "This sentence became the first line of the build brief. Anything that didn't help answer it was out of scope.",
  },
  insiderTitle: "An insider's brief",
  insider:
    'Building for a job I do every day meant I didn\'t have to guess at the field conditions: rain on the screen, one hand free, patchy signal, a partner leapfrogging ahead of me. It also meant I knew the team\'s unwritten rules, like what actually counts as a "contact" (someone you could book, not just anyone who opened the door). Those rules became hard requirements later.',
};

export const problem = {
  title: "Make every door count, without changing how the team works",
  intro:
    'The goal: replace memory and paper with data, so managers can plan areas from history and canvassers can log faster than they could write. The hard part was the list of things the tool was not allowed to do.',
  usersTitle: "Who it's for",
  users: [
    { eyebrow: 'Canvasser', title: 'Logs every door, outdoors', body: "One hand, often gloves or rain. Signal drops between streets. Has seconds between doors, and won't use anything slower than a pen." },
    { eyebrow: 'Manager', title: 'Plans areas, coaches people', body: "Needs to know what's been worked, what's left and who converts. Numbers-first and non-technical, so it has to be clear without explanation." },
    { eyebrow: 'Office', title: 'Settles what happens to leads', body: 'Confirms appointments and records sales and pitch-and-miss results in the company CRM.' },
  ] satisfies Card[],
  constraintsTitle: 'Constraints that shaped every decision',
  constraints: [
    { eyebrow: 'Compliance', title: 'No Cold Calling Zones are a hard exclusion', body: 'Bristol has 26 zones covering 13,270 properties. Doors inside them can never appear on a list, a map or in a count. No resident names anywhere: property-level data only.' },
    { eyebrow: 'Data', title: 'There was no clean address list', body: 'OS Open UPRN gives 424,952 Bristol doors as points with no addresses. Energy certificates gave a house number to only about 31% of them, so the app had to work when a door has no number.' },
    { eyebrow: 'Field', title: 'Offline first, one-handed', body: 'Every tap has to work with no signal and sync later without duplicates. Tap targets of 44px or more, actions at the bottom of the screen.' },
    { eyebrow: 'People', title: 'Canvassers are self-employed', body: 'Location features needed a defined purpose, the least intrusive design, a visible indicator and a one-tap stop (ICO guidance on monitoring workers).' },
    { eyebrow: 'Licensing', title: 'Terms ruled out the obvious tools', body: "Mapbox's terms needed a paid commercial licence and forbid storing route results, so the maps run on MapLibre and MapTiler. Address fields from public data carry their own reuse limits, so they sit in a separate, removable table." },
    { eyebrow: 'Adoption', title: "Don't redesign the job", body: '"A tool that changes how a team knocks gets abandoned in week two." Routes, outcomes and team behaviour had to match how people already work.' },
  ] satisfies Card[],
  successTitle: 'What success looked like',
  success: [
    'Logging a door is faster than writing it down: one tap, no confirmation step.',
    'Zero lost knocks offline: re-syncing the same event twice changes nothing.',
    'The generated route matches how the team actually walks a street.',
    'A manager can see coverage and per-person numbers without asking anyone.',
  ],
};

export const logger = {
  title: 'Seven versions of one screen',
  intro:
    'The Logger is where a canvasser spends their whole shift: one door, one tap, next door. It went from a pencil sketch to the shipped screen through seven rounds, each changed by something seen on a real street.',
  roundsTitle: 'The seven rounds',
  rounds: [
    'Pencil sketch',
    'First Figma concepts',
    'Annotated interaction model',
    'First field build',
    'Revamp explorations',
    'Circles and the door scroll',
    'Shipped, then tuned in the field',
  ],
  landedTitle: 'Where it landed',
  landed: [
    'One tap logs. No confirmation, a 400 ms double-tap guard, a 60-second Undo.',
    "The door number is the hero. When it's unknown, the canvasser can type the number they can see.",
    'Counts only (doors, contacts, leads), never rates or rankings, so nobody cherry-picks doors.',
    'Works with no signal. Every tap is queued on the phone and synced exactly once.',
  ],
};

export const routes = {
  title: 'Routes that walk the way the team walks',
  intro:
    'A route that\'s already drawn when you arrive removes the 10 to 15 minute "who goes where" conversation at the start of every shift. Getting it right took two attempts, and the second came from the team\'s own drawings.',
  stepsTitle: 'How the route generator came together',
  steps: [
    'Draw the area, keep only knockable doors',
    'Attempt 1: a textbook traversal',
    "Attempt 2: a walker built from the team's rules",
    'Make the route readable at a glance',
    'On the street',
  ],
  tradeoff: {
    eyebrow: 'Trade-off',
    text: "Deterministic beats clever, for now. The routes are not optimised for walking pace or lead yield, because there wasn't enough visit history to do that honestly. Optimising too early would also break the thing that makes visit 4 comparable to visit 1. The one shift we measured showed 26% backtracking, so that's the number optimisation will go after once the data exists.",
  },
};

export const decisions = {
  title: 'Five decisions, and what each one cost',
  intro:
    'Most of the design work here was deciding what not to build. Each decision was written into the build brief as a hard rule, with a dated note whenever it changed, so it couldn\'t drift session to session. These are 5 of the 12.',
  items: [
    { index: 2, title: 'No scores or rankings in the canvasser app', decision: 'Scoring and ranking stay on the manager side. Canvassers see the door order and their own counts.', why: 'If canvassers can see which doors score well, they cherry-pick them, and the coverage data stops meaning anything.', tradeoff: "The prototype's scoring work only reaches managers. A sales leaderboard was later added to the field app as a deliberate, owner-approved exception." },
    { index: 4, title: 'One offline sync queue, safe to repeat', decision: 'Every tap is queued on the phone with an ID created there, and synced exactly once. Undo happens inside the same queue.', why: 'Signal drops between streets. With a client-made ID, re-sending the same knock is harmless, and a 60-second Undo never touches the server.', tradeoff: 'I built and tested the queue before any feature wrote through it. That was a slower start, but no knocks have been lost.' },
    { index: 5, title: 'Routes copy the team, not a textbook', decision: "The generator follows the eight walking rules from the team's drawings, and it's deterministic.", why: 'Adoption. A route that changes how people knock gets ignored. Fixed rules also keep visits comparable over time.', tradeoff: "It isn't the shortest possible route. 26% backtracking was measured and left for later, data-driven optimisation." },
    { index: 8, title: 'No door claiming between partners', decision: 'Removed the claim, reserve and "Take" system I\'d already built.', why: 'Partners leapfrog to the next free door. Locking doors to one person fought how the job works.', tradeoff: 'Two offline phones can log the same door now and then. The app flags it after sync, and coverage counts distinct doors.' },
    { index: 10, title: 'Live location: current position only', decision: 'Managers see where teams are right now. There is no trail and no history, ever.', why: "Canvassers are self-employed, and ICO guidance on monitoring workers asks for the least intrusive means. So there's a visible Sharing pill and a one-tap Stop that changes nothing else.", tradeoff: "Managers can't replay a day. A DPIA and a legitimate-interests assessment are required before wider rollout." },
  ] satisfies Decision[],
};

export const outcome = {
  title: 'Adopted across the region',
  intro:
    'The pilot started in one office. The app is now used daily by 60+ canvassers across every branch in the South West, and talks about expanding further are under way.',
  changedTitle: 'What changed day to day',
  changed: [
    { eyebrow: 'For managers', title: 'Props planned from history', body: 'Instead of "that area\'s dead", a slow prop becomes a plan: rotate the start, return to a good area, finish what was missed last time.' },
    { eyebrow: 'For managers', title: 'Coaching from real numbers', body: 'Contact-to-lead ratios per person turn "pick it up" into specific coaching, framed as support, not policing.' },
    { eyebrow: 'For canvassers', title: 'No more "who goes where"', body: 'The route is drawn before the team arrives. New starters follow it instead of shadowing someone for weeks.' },
    { eyebrow: 'For the office', title: 'Complete survey data', body: 'The tap is the address: no missing house numbers or street names, and lead outcomes flow back from the CRM every night.' },
  ] satisfies Card[],
  measurement: {
    eyebrow: 'How this was measured',
    text: 'Measured over a 5-week pilot. Leads per week were up 40% on average against both the team\'s average before the app and a control branch that normally matches our office but hadn\'t adopted it yet. Sources: the app\'s knock log, the company CRM and call-back records. A pitch means a rep reached the appointment and pitched for at least 45 minutes, sale or not. Most of the lift came from planning props from history and from canvassers being able to call leads back easily.',
  },
};

export const reflections = {
  title: "What I'd do differently",
  intro: 'Being the user and the builder was the advantage, and occasionally the blind spot.',
  items: [
    { eyebrow: 'Next time', title: 'Start with the job, not the data', body: 'The scoring prototype answered a question nobody was asking. A week of writing down what was actually slow would have pointed straight at memory and logging.' },
    { eyebrow: 'Next time', title: 'Ask how people walk before writing an algorithm', body: 'I built a textbook traversal first, and only then asked the team to draw their routes. Their drawings were the spec all along.' },
    { eyebrow: 'Next time', title: 'Do the privacy paperwork alongside the feature', body: "Location sharing shipped with strong technical limits but ahead of its written assessment. That's fine for a pilot, but not for a national rollout." },
  ] satisfies Card[],
  summary: {
    eyebrow: 'The short version',
    text: 'I found a problem from inside the job, wrote down the rules nobody had written, designed around them, and shipped a product a region of salespeople now runs their day on.',
  },
};

export const toc = [
  { href: '#tldr', label: 'TL;DR' },
  { href: '#context', label: 'Context' },
  { href: '#problem', label: 'Problem' },
  { href: '#logger', label: 'The Knock Logger' },
  { href: '#routes', label: 'Routes' },
  { href: '#decisions', label: 'Decisions' },
  { href: '#outcome', label: 'Outcome' },
  { href: '#reflections', label: 'Reflections' },
];

export type FigureCopy = {
  file: string;
  alt: string;
  caption: string;
  layout?: 'full' | 'narrow' | 'aside';
  text?: string;
};

// Each slot shows on the live site only when its file exists in src/assets/canvasser/ and alt is filled in.
export const figures = {
  hero: [
    {
      file: 'hero.png',
      alt: "The D2D manager dashboard on a laptop, showing today's doors, contacts and leads for three teams, next to the canvasser Logger on a phone, showing the current door in large type and the outcome buttons.",
      caption: '',
    },
  ],
  context: [
    {
      file: 'before-paper-survey.jpg',
      alt: "A cropped paper survey sheet: the canvasser's name, date and area, the shift totals written in at the top, and the first rows of handwritten house numbers.",
      text: 'The old way of tracking doors was slow, inefficient and unreliable.',
      caption: 'Every knock went on a paper sheet like this one, and sheets came back with missing house numbers and street names.',
      layout: 'aside',
    },
  ],
  logger: [
    {
      file: 'logger-sketch.png',
      alt: 'Pencil sketch on squared paper of the logging screen: a large door number, outcome buttons down the right edge and a notes box.',
      text: 'Round 1: the first paper sketch.',
      caption: 'One door, a huge number and big tap zones down the right edge, one for each outcome. That one-tap idea made it all the way to the shipped app.',
      layout: 'aside',
    },
    {
      file: 'logger-figma-concepts.png',
      alt: 'Early concepts: pencil sketches of the map and logging screens, a first Knock logger screen in Figma, the two-step tap and advance model, and the record each tap saves to the database.',
      caption: 'Round 2: the first Figma concepts, next to the sketches they came from and the record each tap would save.',
    },
    {
      file: 'logger-interaction-model.png',
      alt: 'Two annotated phone wireframes. Tapping an outcome on door 24 moves straight to door 25, and a Back button returns to the previous door.',
      caption: 'Round 3: the annotated interaction model. One tap logs the outcome and moves to the next door, with no confirmation step.',
    },
    {
      file: 'logger-door-scroll.png',
      alt: '',
      caption: 'Round 6: circles and the door scroll.',
    },
    {
      file: 'logger-shipped.png',
      alt: 'The shipped Logger on a phone: the current door number in large type with the doors either side, a directions banner, a mini map and big outcome buttons. Around it are specs for the location marker, the Near you chip, the Sharing pill and the Stop sheet.',
      caption: 'Round 7: shipped, then tuned in the field, with a directions banner added after a dry run. The specs around it cover location: the You marker, the Near you chip and the Sharing pill.',
    },
  ],
  routes: [
    {
      file: 'routes-walking-rules.png',
      alt: "Three route maps. Left, labelled existing (fail): the first generated route, crossing back and forth. Middle, labelled target: the team's hand-drawn route. Right: a simpler area with the rules written on it: go up one side, cross at the end, come back on the opposite side.",
      caption: "Attempt 1 next to the team's own drawings. Their rules (go up, cross at the end, come back the other side) became the spec for attempt 2.",
    },
    {
      file: 'routes-generated.png',
      alt: 'Three phone screens: a generated route drawn on the map from START to END past every door, the Logger following it with a turn banner, and a close-up of the route from its start.',
      caption: 'Attempt 2 on the street: the route is drawn before the team arrives, and the Logger follows it door by door.',
    },
  ],
  decisions: [
    {
      file: 'decision-sharing-pill.png',
      alt: "Location sharing specs: the You marker on light and dark maps, the Near you chip, the Sharing and Not sharing pills, a first-open notice with a Stop link, the Stop sharing sheet, and a team strip showing a partner's distance along the route.",
      caption: 'Decision 10 in the app: a visible Sharing pill, one tap to stop, and partners shown as a distance along the route, not a pin on a map.',
    },
  ],
  outcome: [
    {
      file: 'outcome-dashboard.png',
      alt: "The manager dashboard: today's doors, contacts and leads, a card for each team showing doors worked and left, and a Live now panel showing each canvasser's current position and when it last updated.",
      caption: 'The manager view. Live now shows current position only, overwritten every 30 seconds and never kept as a trail.',
    },
    {
      file: 'manager-flows.png',
      alt: 'Eight manager flows, each shown as a row of steps: plan tomorrow, draw a new prop, monitor today, change a visit, clear stale visits, review canvassers, find props that are due, and settle a lead.',
      caption: 'The manager flows. Each one starts from a main tab, and only drawing a prop and checking coverage need the map.',
    },
  ],
} satisfies Record<string, FigureCopy[]>;

export const homeCardImage = {
  file: 'hero.png',
  alt: 'The D2D manager dashboard on a laptop next to the canvasser Logger on a phone.',
};
