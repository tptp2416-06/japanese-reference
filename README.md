# 日本語 Reference — MkDocs Project

A Japanese grammar reference site, built with MkDocs. `docs/deck/` is
generated from the `jp-deck` project's card data by `scripts/build_site.py`
and is never hand-edited — its content comes from `jp-deck/data/`, not from
this repo. The rest of `docs/` (grammar, vocabulary, patterns, dialogues,
questions) is legacy hand-authored content, most of which was retired or
absorbed into the generated deck pages on 2026-08-21 per
`jp-deck/reports/legacy_triage_20260821_COWORK.csv`; what remains is being
absorbed on the same schedule.

## Build

```bash
mkdocs build
# → output in /site — open site/index.html in any browser
```

`mkdocs serve` previews locally with live reload at `http://localhost:8000`.

## The one durable fact worth keeping

The built `/site` output is plain static HTML with no runtime dependency on
MkDocs — it will work in any browser forever regardless of what happens to
the MkDocs tooling itself.
