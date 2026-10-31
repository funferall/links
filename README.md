# Commonplace

A small public shelf of links worth going back to: https://funferall.github.io/links/

The store is `links.json`:

```json
{ "updated":"2026-10-31T01:30:00Z",
  "links": [ { "id":"librepaper", "url":"https://librepaper.org/", "title":"LibrePaper",
               "domain":"librepaper.org", "note":"why it is here",
               "tags":["writing"], "added":"2026-10-31" } ] }
```

Ask Thoth in Discord (“save this”) and it gets committed here. The page fetches the JSON
with a cache-buster so edits appear immediately rather than after GitHub's 10-minute CDN
cache; it sorts by `added`, newest first, and filters by tag and free text.
