# Will. 4.0: quote library quality report (2026-11-14)

## Pipeline and counts

| Stage | Count |
|---|---|
| Raw candidates (Wikiquote author, work, topic and Quote-of-the-Day pages; 31 public-domain books; Seneca's Letters) | 149,760 |
| Passed structural and content filters (length, fragments, verse, narration, religious, political, harsh, anecdote, duplicates) | 11,816 |
| Individually read and judged by the editor | 10,092 |
| Kept after review (excellent 840 / good 2,226) | 3,066 |
| Removed in final QA (near-duplicate translations, misattribution, weak sourcing, religious source titles, fragments) | 39 |
| **In `library.json`**: 3,027 reviewed + 32 film lines (the app also keeps the 31 original curated quotes) | **3,059** |

Hard exclusions: explicitly religious or devotional language; partisan politics (modern partisan politicians are
excluded on all sides alike); violence, sexual content and slurs; reported speech inside books (to avoid misattribution);
song lyrics and modern poetry; fiction dialogue (except the opt-in films).

## Sources in the final library

- Public-domain books, quoted with book/chapter: 1,471 (Marcus Aurelius trans. Long; Epictetus trans. Crossley/Higginson/Long;
  Seneca's *Moral Letters* trans. Gummere; Dhammapada trans. Müller; Tao Te Ching trans. Legge; Confucius trans. Lyall;
  Emerson; Thoreau; Samuel Smiles; O. S. Marden; W. G. Jordan; James Allen; Theodore Roosevelt; Gibran's *The Prophet*; and others)
- Wikiquote author and work pages, sourced sections: 836
- Wikiquote topic pages (Courage, Perseverance, Habit, Gratitude…), entries with a citation: 665
- Wikiquote Quote of the Day: 55
- Film dialogue (Wikiquote/IMDb): 32. The Odyssey 8, Free Guy 5, Remember the Titans 11, Megamind 5, Hit Man 3

## Theme coverage (a quote can carry up to 3 themes)

Positivity 694 · Mental toughness 665 · Reflection 621 · Personal growth 619 · Resilience 412 · Purpose 370 ·
Discipline 307 · Self-worth 229. With all eight themes selected, about 3,056 quotes are eligible. At 15 a day, that's
over 200 days before the app runs out of never-shown quotes, and it never repeats a quote within 7 days. A 60-day
simulation showed 897 distinct quotes in 900 slots.

## Independent random sample (100 quotes drawn from the final library)

93/100 judged good: meaningful, on-theme, secular, correctly attributed. The 7 problems were removed, and a sweep
of the whole library for the same kinds of problem removed 5 more:
1 common misattribution (a proverb credited to the person who repeated it), 1 film-character line credited to a
director, 2 sourced only to Goodreads, 1 with a devotional source title, 1 meta sentence about a book, and 1 obscure online author.

## Known limitations

- Wikiquote attributions are taken from *sourced* sections but were not re-verified against every original edition.
- About 14% of quotes come from O. S. Marden (on-theme success writing from around 1900), and Samuel Smiles and Seneca
  come next. The daily limit of one quote per author keeps any one writer from dominating.
- Film lines are short excerpts from fan-maintained transcriptions (Wikiquote/IMDb). The Odyssey (2026) lines come from Wikiquote.
- Theme labels come from weighted vocabulary plus reviewer corrections. A few quotes sit in a neighbouring theme.
