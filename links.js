/* Commonplace — the store of links.
   Add an entry: {id, url, title, domain, note, tags:[], added:'YYYY-MM-DD'}
   Newest first on the page; the page sorts by `added`. */
window.LINKS = [
  {
    id: 'ambitious-with-models',
    url: 'https://felixrieseberg.com/how-to-be-more-ambitious-a-tutorial-for-humans-with-models/',
    title: 'How to be more ambitious: a tutorial for humans with models',
    domain: 'felixrieseberg.com',
    note: 'Felix Rieseberg (works on Claude) splits ambition into Speed, Altitude, Depth and Range. Altitude: ask for the outcome, not the task — “keep our apps crash-free”, not “fix this crash”; tell left for when you’d otherwise have meetings about it. Depth: insist on the instruments real experts use (databases and statistical models, not markdown tables), set an unreasonable target and call it reasonable, and make the model adversarially re-derive what you believe from raw data. Not model-specific.',
    tags: ['ai', 'agents', 'workflow', 'reading'],
    added: '2026-10-31'
  },
  {
    id: 'librepaper',
    url: 'https://librepaper.org/',
    title: 'LibrePaper',
    domain: 'librepaper.org',
    note: 'Collaborative writing in HTML, LaTeX, Typst, Markdown, Quarto and Calepin: real-time cursors, threaded comments, tracked changes, version history. MIT and self-hostable, and it brings your own AI agent (Claude Code, Codex, opencode) into the document rather than selling you one. Free tier is limited by storage.',
    tags: ['writing', 'latex', 'collaboration', 'open source', 'ai'],
    added: '2026-10-31'
  },
  {
    id: 'beadmeupscotty',
    url: 'https://beadmeupscotty.com/',
    title: 'Bead Me Up, Scotty',
    domain: 'beadmeupscotty.com',
    note: 'Human-facing viewer and editor for Beads — Steve Yegge’s Dolt-backed graph issue tracker built for AI agents. Saved 26 Oct 2026, still unread.',
    tags: ['agents', 'issue tracking'],
    added: '2026-10-26'
  }
];
