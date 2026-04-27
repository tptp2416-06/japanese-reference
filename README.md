# 日本語 Reference — MkDocs Project

Personal Japanese language reference built from Anki card notes.
Searchable, navigable, fully offline. All Anki CSS classes pre-wired.

---

## Setup

**Requirements:** Python 3.8+

```bash
# 1. Install dependencies (pinned — see requirements.txt for why)
pip install -r requirements.txt

# 2. Preview locally with live reload
mkdocs serve
# → open http://localhost:8000

# 3. Build static site
mkdocs build
# → output in /site folder — open site/index.html in any browser
```

---

## Project structure

```
japanese-reference/
├── mkdocs.yml              ← Site config, navigation, theme settings
├── requirements.txt        ← Pinned dependencies
├── docs/
│   ├── index.md            ← Home page
│   ├── assets/
│   │   ├── css/
│   │   │   ├── anki-cards.css   ← All Anki card CSS classes
│   │   │   └── custom.css       ← MkDocs theme overrides
│   │   └── js/
│   │       └── custom.js        ← Dark mode sync (night_mode class)
│   ├── grammar/
│   │   ├── index.md
│   │   ├── te-form.md      ← Sample card page
│   │   ├── tense-aspect.md
│   │   └── conditionals.md
│   ├── patterns/
│   │   ├── index.md
│   │   ├── softeners.md
│   │   ├── seeking-connection.md
│   │   └── emotional-register.md
│   └── dialogues/
│       ├── index.md
│       └── sample-dialogue.md
└── site/                   ← Built output (gitignore this)
```

---

## Adding a card

1. Open the relevant `.md` file (e.g. `docs/grammar/te-form.md`)
2. Paste your Anki HTML directly — raw HTML works in MkDocs markdown files
3. Run `mkdocs serve` to preview, or `mkdocs build` to rebuild

**Example:**

```html
<div class="sb-wrap">
  <div class="claude-header">Claude Sonnet 4.6 · 2026·04·27</div>
  <h1>Your sentence here with <ruby>漢<rt>かん</rt>字<rt>じ</rt></ruby></h1>
  ...
</div>
```

All `.sb-wrap` classes, ruby tags, dark mode variants, and semantic
color classes render exactly as they do in Anki.

---

## Adding a new section

1. Create a new `.md` file in the appropriate folder
2. Add front matter tags for search filtering:
   ```yaml
   ---
   title: Page Title
   tags:
     - N3
     - Casual
   ---
   ```
3. Add it to the `nav:` section in `mkdocs.yml`

---

## Dark mode

The site respects the user's system preference automatically.
A toggle button in the top-right switches between light and dark.
Dark mode maps to your Anki `night_mode` class — all card colors
adjust exactly as they do in Anki night mode.

---

## Dependency note (Feb 2026)

MkDocs 2.0 was announced as a ground-up rewrite with breaking changes
and no migration path. Material for MkDocs 9.7.5 explicitly pins to
`mkdocs<2` to protect existing projects. This project follows that pin.

Your built `/site` output is pure static HTML and has zero dependency
on MkDocs — it will work in any browser forever regardless of what
happens to the tooling.

---

## Search

Search is full-text and indexes Japanese text. Press `S` or `/` anywhere
on the site to open search. Results highlight matched terms on the page.
