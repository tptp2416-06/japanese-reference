# Prose for the generated deck pages

One file per page, named by the page's slug — the same name as the generated
file in `docs/deck/grammar/`. These files are **outside `docs/` on purpose**:
MkDocs never publishes them raw; `jp-deck/scripts/build_site.py` merges them
into the generated scaffolds.

Format (`jp-deck/reference-site/PAGE-SPEC.md` §4):

- Text before any marker → the page intro, directly under the H1.
- A line `@@ <anchor>` starts the prose for that section. Anchors are the
  `Anchor` values in `jp-deck/data/reference_pages.csv`.
- The generator refuses a file that matches no page, and a `@@` marker that
  names no anchor of its page — a renamed page or anchor must have its prose
  moved consciously, never lost silently.
- No sentences from the deck (`#192`). General explanation only; anything
  about one card's sentence belongs in that card's note.
