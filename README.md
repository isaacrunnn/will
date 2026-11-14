# Will. 4.0

A private, mobile-first daily-inspiration and journaling app (PWA). Personal use only.

## What changed in 4.0 (from 3.8)

- **New quote library** (`library.json`): 3,059 quotations, each with an author, a source/locator, a theme and a 0–100 score.
  3,027 come from about 600 authors and each was kept after editorial review (10,092 candidates read, about 30% kept).
  The other 32 are verified film lines. The 31 original curated quotes stay in rotation too.
- **Removed** the live Hugging Face / jsDelivr imports. They delivered ~10,500 mostly unusable quotes, of which only
  the 31 built-in ones ever reached your daily set. The library now ships with the app and works offline.
- **Films:** The Odyssey (8), Free Guy (5), Remember the Titans (11), Megamind (5), Hit Man (3). These are opt-in themes,
  and every film quote shows *Character · Film*.
- **Rotation:** never-shown quotes come first, then the least recently shown. No quote repeats within 7 days. The set
  is balanced across your chosen themes, with at most one quote per author per day. "Get a fresh set now" gives an entirely
  new set. The day's set stays the same when you reopen the app (3.8 could change it on reload).
- **Honest diagnostics** (Settings): library size, how many quotes match your themes, how many you haven't seen yet, and the app/library version.
- **Small source line** under each quote (book/chapter, speech, or film).
- **GitHub Pages ready:** all paths are relative, the manifest scope is `./`, and the service worker is versioned
  (network-first for the page and the library, so updates appear without reinstalling).
- **Your data:** still stored under the same `still_v1` key. Journal, Library, custom quotes, settings and seen history
  are untouched. Old numeric Library ids still resolve, and each is snapshotted as text.

## Score (0–100), threshold 60

| Part | Points | How it's measured |
|---|---|---|
| Meaning | 35 | Editorial review: excellent = 35, good = 28 (rejected = not in library) |
| Theme relevance | 25 | Weighted theme vocabulary plus reviewer theme corrections |
| Author | 15 | Influential thinkers 15, other notable authors 11, others 7 |
| Provenance | 15 | Exact book/chapter or cited source 15, Wikiquote Quote of the Day 12, section only 11 |
| Memorability | 10 | Shorter, quotable lines score higher |

Every quote in the library scores 62 or more (average 78). The score is transparent and documented. It is not an AI
"truth" score. Attribution relies on Wikiquote's *sourced* sections and on the public-domain books themselves (Project Gutenberg/Wikisource).

## Move from Netlify to GitHub Pages (keeps your journal)

Browser storage belongs to one web address, so the new address starts empty until you restore:

1. On the **old** app: Settings → Your data → **Download backup**.
2. Open the **new** address and tap Begin.
3. Settings → Your data → **Restore backup**, then choose the file. Your journal, Library and settings come back.
4. Install the new address to your home screen (Chrome menu → Install app). Keep the old app until you've checked everything.

## Deploying an update

Replace the changed files in the repository (usually `library.json`, `index.html` and `sw.js`). Bump `VERSION` in `sw.js`
whenever `index.html` or `sw.js` changes. GitHub Pages republishes within about a minute. Never clear site data to "fix" an update.

## Files

`index.html` (app), `library.json` (quotes), `sw.js` (offline/updates), `manifest.webmanifest` + `manifest.json`,
`icon-192.png`, `icon-512.png`, `quotes.json` and `original-reflections.json` (legacy, kept for old Library ids), `.nojekyll`.
