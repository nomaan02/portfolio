import type { Card, Decision, FigureCopy } from './canvasser';

export type FlowItem = {
  eyebrow?: string;
  title: string;
  body?: string;
  mono?: string;
  list?: string[];
  variant?: 'default' | 'soft' | 'accent' | 'dashed';
  via?: string;
};

export type Level = { title: string; body: string };
export type TableData = { caption: string; columns: string[]; rows: string[][] };
export type Bar = { label: string; value: number; note: string };
export type Overrule = Decision & { label: string };

export const meta = {
  title: 'AI workflow case study · Nomaan Akram',
  description:
    'How I ran AI agents on a trading platform: one job per model, pinned context, two human approval gates, and no agent ever near the broker keys.',
};

export const hero = {
  eyebrow: 'Case study · QuantTrader · 2026',
  title: 'The AI workflow behind QuantTrader',
  lead:
    'Over five months my business partner and I built QuantTrader, a futures research and trading platform. He did the research and the strategy maths. I built and ran everything else, mostly by directing AI agents. This page is about how I set that up: which model did which job, what each one could see and touch, and how I checked the work before it reached a live account.',
  stats: [
    { value: '709', label: 'commits across three repos, March to July 2026' },
    { value: '586', label: 'test files across the two trading systems' },
    { value: '87', label: 'spec-versus-code audit findings, every one sorted and fixed' },
    { value: '0', label: 'AI agents with broker keys, merge rights or release rights' },
  ],
  facts: [
    { term: 'Role', detail: 'AI workflow and implementation lead: code, infrastructure, operations and the whole agent setup' },
    { term: 'Timeline', detail: 'February to July 2026. Research control in February, then 709 commits from March to July' },
    { term: 'Worked with', detail: 'My business partner, who led the research and strategy maths and wrote the briefs I built from' },
    { term: 'Platform', detail: 'Captain on local Linux towers. SimLab: a cloud research brain plus a local edge that alone can place orders' },
  ],
  stack: [
    'Claude Code', 'Claude Opus', 'Claude Sonnet', 'Cursor Composer', 'GPT-5.5', 'Gemini Pro', 'MCP',
    'Obsidian', 'QuantConnect', 'Ollama', 'Qdrant', 'Python', 'Redis Streams', 'QuestDB',
    'Docker Compose', 'React + TypeScript', 'ProjectX API',
  ],
};

export const tldr = [
  { term: 'Problem', detail: "Two people, six months and a real broker API. AI could write code fast, but in trading one wrong tick size or a stale signal doesn't throw an error. It places the wrong order." },
  { term: 'My setup', detail: 'Specs before prompts. Every model had one job, a narrow set of tools and no broker keys. Each task got a fresh, pinned context instead of a long chat.' },
  { term: 'How I checked', detail: 'A read-only plan first, then my approval, then a build in an isolated worktree, tests, a review by a different model family and my sign-off before release.' },
  { term: 'Result', detail: 'Two live-capable systems, 586 test files and a full audit trail. No agent could place an order, merge its own work or change a risk rule.' },
];

export const context = {
  title: 'He wrote the research. I turned it into work agents could build safely.',
  intro:
    "My business partner isn't a developer. He worked out the strategy maths and handed me detailed briefs. My job was everything else: sorting those briefs into specs, building the system, running it and keeping it safe. With two of us and a lot to build, AI had to do most of the typing. So the real work was deciding what it was allowed to do.",
  flowLabel: 'From research brief to agent task',
  flow: [
    { eyebrow: '01 · His brief', title: 'Research brief', body: 'The idea, the maths and the rules he wanted tested.' },
    { eyebrow: '02 · My spec', title: 'Typed spec', body: 'Requirements, acceptance tests and a logged decision for each brief.', variant: 'soft' },
    { eyebrow: '03 · Agent task', title: 'Bounded task', body: 'A goal, an owner, a risk tier and a list of things the agent must not touch.', variant: 'soft' },
  ] satisfies FlowItem[],
  flowCaption: 'Research stayed his call. Turning it into something a model could build without guessing was mine.',
  why: {
    eyebrow: 'Why it mattered',
    title: 'Small shared assumptions, big consequences',
    body: "In trading code a wrong point value, tick size, session time or bracket rule doesn't crash. It quietly places the wrong order. AI makes that kind of mistake confidently, so speed alone was never the goal.",
  } satisfies Card,
  rule: {
    eyebrow: 'The one rule',
    text: 'AI could speed up thinking and building. An unchecked model output was never the final word on strategy, money or a production change.',
  },
};

export const rules = {
  title: 'Rules first, then agents',
  intro: 'Before adding any agent I wrote down six rules. Every later choice on this page traces back to one of them.',
  items: [
    { eyebrow: '01 · Authority', title: 'Written down beats remembered', body: "A versioned decision record outranks a chat message, a summary or my memory. If it isn't recorded, it isn't a requirement." },
    { eyebrow: '02 · Evidence', title: 'Proof over confidence', body: "Every gate is pass or fail. A model saying it's confident is not a check." },
    { eyebrow: '03 · Access', title: 'Only what the task needs', body: 'Each agent gets the tools, files and permissions for one task. No broker keys, ever.' },
    { eyebrow: '04 · Replay', title: 'Every run can be repeated', body: 'Runs are pinned to a commit, data snapshot, config and model ID, so I can rerun them exactly.' },
    { eyebrow: '05 · Fail closed', title: 'Unsure means stop', body: 'Missing, stale or conflicting input stops the work. Nothing on the money path is allowed to guess.' },
    { eyebrow: '06 · Separation', title: 'A proposal is not an order', body: "The cloud side can suggest a trade. Only the trader's own machine can decide to place one." },
  ] satisfies Card[],
  boundaryLabel: 'The trust boundary',
  boundary: [
    {
      eyebrow: "Cloud · can calculate, can't trade",
      title: 'Research, knowledge and orchestration',
      list: [
        'Research: data, features, backtests, regime checks',
        'Knowledge: specs, decisions, broker docs, runbooks',
        'Orchestration: tasks, agents, tests, approvals',
      ],
      variant: 'dashed',
    },
    {
      eyebrow: "Local edge · trader's own PC",
      title: 'Checks it, then builds the order itself',
      list: ['Signed, fresh and not a replay?', 'Allowed by local risk policy?', 'Account, session and market data OK?'],
      variant: 'accent',
      via: 'Signed proposal',
    },
    { eyebrow: 'Broker', title: 'ProjectX API', body: 'Orders, fills and positions.', via: 'Order' },
  ] satisfies FlowItem[],
  boundaryCaption:
    "Agents and cloud services never hold broker credentials. A cloud proposal can't set size, stops or limits. The edge works those out from its own policy, and anything unknown or stale fails closed.",
};

export const routing = {
  title: 'The right model for each job',
  intro:
    "I didn't ask one model to do everything. I picked by the kind of thinking a task needed, how much context it needed, and how bad a mistake would be.",
  ladderLabel: 'Low risk and fast, to high risk and deep',
  ladder: [
    { eyebrow: 'Find', title: 'Search the repo', mono: 'Haiku (Explore)', body: 'Finds candidate files. Never edits.' },
    { eyebrow: 'Build', title: 'Write code and tests', mono: 'Claude Sonnet, Cursor Composer 2', body: 'Scoped writes inside one worktree.' },
    { eyebrow: 'Think', title: 'Plan, audit, debug', mono: 'Claude Opus, Claude Code (OpusPlan), Claude.ai', body: 'Read-only on the money path.', variant: 'soft' },
    { eyebrow: 'Challenge', title: 'Independent review', mono: 'GPT-5.5, Gemini Pro', body: "A different model family. Can block, can't edit.", variant: 'soft' },
    { eyebrow: 'Decide', title: 'Approve and release', mono: 'Me', body: 'The only one who can accept the risk.', variant: 'accent' },
  ] satisfies FlowItem[],
  table: {
    caption: 'Each tool, its job and the limit I put on it',
    columns: ['Tool', 'Job', 'Limit'],
    rows: [
      ['Claude.ai', 'Planning, reading specs, talking through designs and test or live results.', 'Decisions get written back to versioned records, not left in a chat.'],
      ['Claude Code (OpusPlan)', 'Plan with a reasoning model, then build with a faster one.', 'The plan is a file. Building is limited to approved tasks.'],
      ['Cursor Composer 2', 'Focused coding inside the repo.', 'One issue per session, in its own branch or worktree.'],
      ['Claude Opus', 'Architecture, money-path audits and incident analysis.', "Read-only. Returns ranked findings, can't approve."],
      ['Claude Sonnet', 'Day-to-day building and test writing.', 'Tools limited to the task and the files it affects.'],
      ['Haiku (Explore)', 'Fast search for the right files.', 'Finds only. I open and check the source before anything is built.'],
      ['GPT-5.5', 'A second opinion on Claude-written critical code.', 'Reviews against requirements, tests and failure modes. Not a rubber stamp.'],
      ['Gemini Pro', 'Consistency checks across long specs and the code.', 'Every finding cites a file and line, and I check it.'],
      ['MCP servers', 'Tool access to QuantConnect and the Obsidian spec vault.', 'Allowlisted tools, logged calls, read or write set per task.'],
    ],
  } satisfies TableData,
  rule: {
    eyebrow: 'Routing rule',
    text: 'Use the smallest model that can do the job reliably. Step up for unclear specs, statistics, broker behaviour and anything on the money path. Log the model, prompt version and tool calls for critical work.',
  },
};

export const memory = {
  title: 'Pinned context, not long chats',
  intro:
    'Long chats drift. Agents forget rules or pick up old ones. So the unit of memory was a context pack: built fresh for one task, pinned to exact versions and saved with the run.',
  ladderLabel: 'What outranks what',
  levels: [
    { title: 'Risk policy', body: 'Account limits, instruments, sessions and kill conditions' },
    { title: 'Decision records', body: 'Accepted decisions with an owner, a reason and what they replace' },
    { title: 'Specs', body: 'Requirements, state machines, schemas and acceptance tests' },
    { title: 'Typed contracts', body: 'Interfaces, JSON schemas and database rules that enforce the specs' },
    { title: 'Code and tests', body: "Proof it was built, not proof it's right" },
    { title: 'AI summaries', body: 'Handy views only. Never a rule by default' },
  ] satisfies Level[],
  ladderCaption: 'A higher level always wins. AI summaries sit at the bottom, so a handy note can never quietly become a requirement.',
  table: {
    caption: 'What goes into a context pack',
    columns: ['Layer', "What's in it", 'Priority'],
    rows: [
      ['Task contract', "Goal, risk tier, owner, acceptance tests, files in scope and what's off limits.", 'Must have'],
      ['Authority bundle', 'The exact versions of the policy, decisions and spec sections that apply.', 'Must have'],
      ['Repo slice', 'Only the relevant files, interfaces and tests at the pinned commit. Never the whole repo.', 'High'],
      ['Evidence', 'Cited search results, broker API docs and past incidents.', 'High'],
      ['Run manifest', 'Commit, branch, model ID, prompt version, tool permissions and token budget.', 'Must have'],
      ['Past notes', 'Earlier attempts and handovers, clearly marked as not authoritative.', 'Low'],
    ],
  } satisfies TableData,
  cards: [
    { eyebrow: 'Second brain', title: 'An Obsidian spec vault', body: 'Specs, decisions, broker docs and runbooks lived in Obsidian. Agents read it through an MCP server, with read or write access set per task.' },
    { eyebrow: 'Retrieval', title: 'Search that cites its sources', body: 'Local embeddings (Ollama with nomic-embed-text) in Qdrant, plus keyword and exact-symbol search. Every result names its file and version. Stale or replaced sources are dropped.' },
    { eyebrow: 'Handover', title: 'A manifest, not a memory', body: 'When a session ended, the next one started from a written list of what was included, excluded and still open.' },
  ] satisfies Card[],
  code: {
    file: 'context_pack.json',
    code: `{
  "task_id": "QT-EDGE-014",
  "base_commit": "4e91...",
  "authority": ["RISK-POLICY@v12", "SPEC-EDGE@v8"],
  "repo_slice": ["edge/validator.py", "edge/risk.py"],
  "evidence": ["ADR-042#L12-L34", "INC-009#L8-L19"],
  "excluded": ["superseded/edge-rules-v5.md"],
  "model": "pinned-model-id",
  "permissions": ["read:repo", "write:worktree"],
  "sha256": "..."
}`,
    caption: "One task's context pack. If a patch looks wrong, I can see which spec version, files, evidence, model and permissions shaped it.",
  },
};

export const loop = {
  title: 'Every change takes the same path',
  intro:
    'A formatting fix took the short route. Anything touching ticks, sizing, stops, account rules, market data or the broker connection took the full one, with two points where only I could say yes.',
  stagesLabel: 'The full path',
  stages: [
    { eyebrow: '01', title: 'Register', body: 'Task contract validates' },
    { eyebrow: '02', title: 'Context', body: 'Sources pinned, no conflicts' },
    { eyebrow: '03', title: 'Plan', body: 'Read-only planner, numbered plan' },
    { eyebrow: 'Gate 1 · Me', title: 'Approve the plan', body: 'Scope and files agreed', variant: 'accent' },
    { eyebrow: '04', title: 'Build', body: 'Clean worktree, small patch' },
    { eyebrow: '05', title: 'Verify', body: 'Unit, property, contract, replay, security' },
    { eyebrow: '06', title: 'Review', body: 'Different model family, no high findings left' },
    { eyebrow: 'Gate 2 · Me', title: 'Sign the release', body: 'I accept the remaining risk', variant: 'accent' },
    { eyebrow: '07', title: 'Release', body: 'Commit, tests, approvals and model trace bundled' },
    { eyebrow: '08', title: 'Observe', body: 'Probe, reconcile, monitor, roll back' },
  ] satisfies FlowItem[],
  stagesNote: 'If review fails, the task goes back to a fresh, bounded build run. It never jumps straight to release.',
  rolesTitle: 'Who does what',
  roles: [
    { eyebrow: 'Planner', title: 'Read-only', body: 'Maps dependencies and writes a numbered plan.' },
    { eyebrow: 'Builder', title: 'Worktree only', body: 'Writes a patch in an isolated worktree.' },
    { eyebrow: 'Test engineer', title: 'Sandbox only', body: 'Adds tests and reproduces failures. No production.' },
    { eyebrow: 'Reviewer', title: "Can block, can't edit", body: 'Ranks findings by severity against the spec.' },
    { eyebrow: 'Release owner', title: 'Me, only me', body: 'Accepts or rejects the release.', variant: 'accent' },
  ] satisfies FlowItem[],
  permissions: {
    eyebrow: 'Permissions',
    text: 'No coding agent ever held broker credentials. No agent could approve its own plan, merge its own change or deploy. Issue text and retrieved docs were treated as data, never as instructions.',
  },
  code: {
    file: 'tasks/QT-EDGE-014.yaml',
    code: `id: QT-EDGE-014
objective: Reject stale or replayed strategy proposals
risk_tier: critical
owner: execution-engineering
authority: [SPEC-EDGE@v8, RISK-POLICY@v12]
acceptance:
  - expired proposal is rejected
  - duplicate sequence is rejected
  - valid proposal reaches risk evaluation only
  - no broker call occurs on rejection
prohibited:
  - changing risk limits
  - adding broker credentials to cloud services
required_tests: [unit, property, contract, replay, security]`,
    caption: 'No agent starts building until its task contract validates.',
  },
};

export const judgement = {
  title: 'Where I overruled the AI',
  intro: "Agents were fast and usually right. These are the times they weren't, or where I chose a different path on purpose.",
  items: [
    {
      index: 1,
      label: 'Overrule 01',
      title: 'The signal wanted to set its own size',
      decision: 'An agent wired quantity, stop and target from the cloud signal straight into the broker adapter. I moved that work to the local edge, which sizes the order from its own risk policy. The cloud only proposes.',
      why: 'A remote payload must never control risk. If the cloud side is wrong or compromised, the edge still holds the line.',
      tradeoff: 'More logic on the edge, plus a test that tries to force a 999-lot order through it.',
    },
    {
      index: 2,
      label: 'Overrule 02',
      title: 'Floats on the money path',
      decision: 'Generated code used ordinary floating-point numbers for prices and thresholds. I switched every money-path calculation to Decimal or whole ticks, and made off-grid prices fail instead of being rounded.',
      why: 'Float errors are tiny until a price lands off the tick grid and the order is rejected, or a wrong one goes through.',
      tradeoff: 'Slower to write. Every conversion is explicit and tested both ways.',
    },
    {
      index: 3,
      label: 'Overrule 03',
      title: 'One set of defaults for every contract',
      decision: 'Agents kept reaching for one global tick size and point value. I replaced that with an instrument registry: each contract has its own tick grid, point value, hours and roll rules, and an unknown one is blocked.',
      why: "A default that's right for one contract is quietly wrong for the next. Blocking is safer than guessing.",
      tradeoff: 'Ten instruments of metadata to keep up to date by hand.',
    },
    {
      index: 4,
      label: 'Caught 04',
      title: 'Green tests, wrong behaviour',
      decision: 'Agent reports said every test passed, but the code had drifted from the spec. I ran a read-only spec-versus-code audit with a different model family. It found 87 discrepancies, 15 of them high severity. The 41 that could be fixed straight away were fixed first. The 46 deferred ones went straight into a second agent pipeline that sorted them by category and fixed them.',
      why: 'A passing suite only proves what the tests check. The spec is the authority, not the test run.',
      tradeoff: 'Two full fix passes before any new features.',
    },
    {
      index: 5,
      label: 'Caught 05',
      title: 'A readiness score for going live',
      decision: 'An early pre-market check produced a single readiness score. I replaced it with a pass or fail check for every mandatory condition, each with a saved report.',
      why: "A score of 92% hides which 8% failed. Before a live session I need to know exactly what's wrong.",
      tradeoff: 'Less flattering output, and a lot more red on bad mornings.',
    },
  ] satisfies Overrule[],
};

export const outcome = {
  title: "What it delivered, and what it doesn't prove",
  intro: "Two live-capable systems and a lot of tests. I keep the claims tight, because a big test count isn't the same as a proven edge.",
  stats: [
    { value: '709', label: 'commits, March to July 2026' },
    { value: '155', label: 'test files in Captain' },
    { value: '431', label: 'test files in SimLab' },
    { value: '37/37', label: 'bracket order tests passing' },
  ],
  chartLabel: 'Commits per month, 709 in total',
  chart: [
    { label: 'Mar 2026', value: 81, note: 'Captain begins' },
    { label: 'Apr 2026', value: 212, note: 'Captain live, SimLab starts' },
    { label: 'May 2026', value: 104, note: 'Per-session risk budgets' },
    { label: 'Jun 2026', value: 118, note: 'Research and sealed-test wave' },
    { label: 'Jul 2026', value: 194, note: 'SimLab live, edge engine, handover' },
  ] satisfies Bar[],
  chartCaption: "February's research control lived in QuantConnect's own project history and isn't counted.",
  table: {
    caption: 'What each piece of evidence supports, and what it does not prove',
    columns: ['Evidence', 'What it supports', "What it doesn't prove"],
    rows: [
      ['Captain and SimLab repos', 'Real delivery across execution, research, UI, infrastructure and operations.', 'That every decision was optimal or every module is bug-free.'],
      ['37/37 bracket tests, 43 gateway tests', 'Focused checks of bracket orders and broker integration.', 'Every possible broker condition or live market state.'],
      ['A live SimLab run of about 12 hours', 'A bounded live session placed from the local edge.', 'Long-run reliability or meaningful live performance.'],
      ['One research candidate survived a sealed test', 'The selection process worked the way it was designed.', 'A profitable live edge.'],
    ],
  } satisfies TableData,
  numbers: {
    eyebrow: 'What the numbers mean',
    text: "Commit and test counts show scope and testing effort. They don't show profit, a lasting edge or long-run reliability, and I report backtest, paper and live evidence separately.",
  },
};

export const reflections = {
  title: "What I'd do differently",
  intro: "The workflow held up. These are the things I'd change, or start earlier, on the next project.",
  items: [
    { eyebrow: 'Next time', title: 'Authority before agents', body: "The biggest gains came from decision records and specs, not from adding more agents. On a new team, that's where I'd start." },
    { eyebrow: 'Next time', title: 'Score the agents, not the vibe', body: 'Track first-pass acceptance, rework and escaped bugs per model and version, with a fixed set of test tasks. New model versions get checked before they touch critical work.' },
    { eyebrow: 'Next time', title: 'One reproducible task before a swarm', body: 'Get one task from spec to verified merge and replay it cleanly. Then automate the repeatable parts, and keep money and releases human.' },
  ] satisfies Card[],
  summary: {
    eyebrow: 'How I judge it',
    text: "I don't measure AI engineering by the number of agents or lines of generated code. I measure how much repeatable work is automated, how clearly the system explains its decisions, and how hard it is for an unsafe change to reach production.",
  },
};

export const toc = [
  { href: '#tldr', label: 'TL;DR' },
  { href: '#context', label: 'Two jobs' },
  { href: '#rules', label: 'Ground rules' },
  { href: '#routing', label: 'Model routing' },
  { href: '#memory', label: 'Pinned context' },
  { href: '#loop', label: 'Delivery loop' },
  { href: '#judgement', label: 'Overruling the AI' },
  { href: '#outcome', label: 'Outcome' },
  { href: '#reflections', label: 'Reflections' },
];

// Each slot shows on the live site only when its file exists in src/assets/ai-workflow/ and alt is filled in.
export const figures = {
  hero: [
    {
      file: 'hero.png',
      alt: 'A laptop showing the Captain trading dashboard on mock data: risk limits, a price chart, a signal and execution panel and a trade log. Behind it, two terminal windows show Captain starting up. Usernames and broker details are blurred.',
      caption: "Captain, the first version of QuantTrader, on mock data. The terminals behind show its services starting up.",
    },
  ],
  memory: [
    {
      file: 'obsidian-vault.png',
      alt: 'Obsidian graph view of the project vault: hundreds of linked notes in clusters. The sidebar lists folders for research, software guides, two system builds, specifications, validation, governance and a decision log.',
      caption: 'The spec vault the agents read through MCP. Each cluster is a group of linked specs, decisions or runbooks.',
    },
  ],
  loop: [
    {
      file: 'startup-log.png',
      alt: "Two terminal windows showing Captain's start-up log: database reachable, Redis connected, stream consumer groups ready, broker login, market data started for 10 contracts and positions reconciled. Usernames and broker names are blurred.",
      caption: "Captain's start-up log before a session. The database, message streams, broker login, market data and position check all report in before trading can start.",
    },
  ],
  judgement: [
    {
      file: 'cross-family-review.png',
      alt: 'A cross-model check report on Captain code. Claude wrote six claims about the code, and Gemini and ChatGPT re-read the same file. Two claims are marked Claude diverges, with both reviewers flagging them, one is a reviewer split and three are confirmed. Values and code are blurred.',
      caption: "A cross-model check on Captain's code. Claude made six claims about it. Gemini and ChatGPT re-read the same file and rejected two of them, so the code, not Claude's answer, was taken as the record.",
    },
  ],
  outcome: [
    {
      file: 'audit-tracker.png',
      alt: 'Summary table from the spec-versus-code audit: 15 high, 34 medium and 38 low severity findings, 87 in total. 41 are marked actionable now and 46 deferred.',
      caption: 'The audit summary. The 41 actionable findings were fixed first. The 46 deferred ones went straight into a second agent pipeline that sorted them by category and fixed them.',
    },
  ],
} satisfies Record<string, FigureCopy[]>;
