# Japanese Reference — CLAUDE.md

Personal MkDocs-based Japanese grammar reference site. Tokyo casual register, targeting N3–N4 level. Hosted via GitHub Pages.

## Stack

- **MkDocs** with **Material theme** (`mkdocs.yml`)
- **Plugins**: search (ja+en), tags, glightbox, git-revision-date-localized, minify, awesome-pages, section-index
- **Custom CSS**: `docs/assets/css/japanese-reference.css` (design tokens, component styles)
- **Dev server**: `mkdocs serve -a localhost:8001`
- **Deploy**: push to `main` on GitHub — Pages builds automatically

## Directory structure

```
docs/
  grammar/
    index.md                  ← Grammar section landing
    verbs/                    ← Verb forms & conjugation
    particles/                ← Particles (で, も, …)
    expressions/              ← Grammar expressions & constructions (N4/N3)
    te-iru-related/           ← 〜ている family
    test/                     ← AI comparison versions only (not canonical content)
  vocabulary/                 ← Near-synonyms, nuanced words
  patterns/                   ← Pragmatic patterns & register moves
  dialogues/                  ← Mini-dialogues with card breakdowns
  questions/                  ← Deep dives on specific grammar questions
  assets/
    css/custom.css
    css/japanese-reference.css
    js/custom.js
```

## Adding a new grammar page

### 1. Create the file

Place it in the appropriate folder. Name it descriptively in kebab-case, suffixed with the AI source if it's a primary version (e.g., `youni-youninaru-kimi.md`, `speed-vs-change-deepseek.md`). Canonical pages go in the section folder; AI comparison versions go in `grammar/test/`.

### 2. Frontmatter

```yaml
---
title: "〜expression — Short English Description"
tags:
  - N4-Upper        # JLPT level tag (N5-Foundation, N4-Core, N4-Upper, N3-Mid, etc.)
  - topic-tag       # Grammar topic (verb-conjugation, particles, modality, etc.)
  - Kimi-2.6        # AI source tag if applicable
---
```

Tags defined in `mkdocs.yml` under `extra.tags` must be registered there before use (currently: N3, Casual, Polite, Romantic, Pragmatics).

### 3. Add to `mkdocs.yml` nav

Find the correct section and add the entry. The `expressions/` section is grouped by N-level and sub-category with YAML comments as headers:

```yaml
- 〜expression — Short Label: grammar/expressions/filename.md
```

### 4. Add to the section's `index.md`

Every canonical page must appear in its section's `index.md`. Follow the existing HTML list pattern (see below). AI comparison versions in `grammar/test/` do **not** need to appear in any index.

---

## Index page format (`jp-home` pattern)

All `index.md` files use a consistent HTML structure. Do not use plain Markdown headings/lists for index pages.

**Section landing pages** (e.g., `grammar/index.md`) use a flat card list — one entry per sub-section:

```html
<a href="sub-section/" style="display: flex; align-items: baseline; justify-content: space-between; padding: 1.25rem 0; border-top: 0.5px solid var(--md-default-fg-color--lightest); text-decoration: none; color: inherit;">
  <div style="display: flex; align-items: baseline; gap: 16px;">
    <span style="font-size: 24px; color: var(--md-default-fg-color--lighter); font-weight: 400; min-width: 32px;">漢</span>
    <div>
      <p style="font-size: 16px; font-weight: 500; margin: 0;">Section Title</p>
      <p style="font-size: 13px; color: var(--md-default-fg-color--lighter); margin: 4px 0 0;">One-line description</p>
    </div>
  </div>
  <span style="font-size: 16px; color: var(--md-default-fg-color--lighter);">›</span>
</a>
```

The **last entry only** adds `border-bottom: 0.5px solid var(--md-default-fg-color--lightest);` to its `<a>` style.

**Sub-section index pages** (e.g., `expressions/index.md`) group links under N-level and category headings:

```html
<p style="font-size: 12px; ... text-transform: uppercase;">Category Name</p>
<div style="border-top: 0.5px solid var(--md-default-fg-color--lightest);">
  <a href="filename/" style="display: block; padding: 0.6rem 0; border-bottom: 0.5px solid var(--md-default-fg-color--lightest); text-decoration: none; color: inherit; font-size: 14px;">〜expression — Label</a>
</div>
```

### Kanji icon conventions

Each section uses a single kanji as its visual icon. Established assignments:

| Section | Kanji |
|---|---|
| Grammar | 文 |
| Verbs | 動 |
| Particles | 助 |
| Expressions | 表 |
| 〜ている Related | 居 |
| Vocabulary | 語 |
| Patterns | 型 |
| Dialogues | 話 |
| Questions | 問 |

For individual page entries within a sub-section index, use a kanji or kana that represents the expression itself (e.g., 甘 for 甘える, で for the で particle).

---

## Content page conventions

- Use `<ruby>漢字<rt>よみ</rt></ruby>` for furigana — not MkDocs extensions
- Use MkDocs Material admonitions (`!!! tip`, `!!! abstract`, `!!! note`, etc.) for summaries and callouts
- Tables are common for comparing forms, nuance tiers, or example sentences
- Section anchors follow the pattern `{#section-name}` on headings
- JLPT level tier tables (showing where the target form sits in a progression) are a recurring pattern — follow the format in `expressions/n-da-kimi.md`

---

## Workflow

```bash
# Dev server
mkdocs serve -a localhost:8001

# Deploy
git add .
git commit -m "Add [grammar point] page"
git push
```

The commit message convention for new pages is `"Add [grammar point] page"`.

## Folder growth plan

- `grammar/expressions/` is expected to grow to ~40 pages before sub-folders are considered
- Sub-folder split targets when that threshold is reached: `foundations/`, `explanatory/`, `aspect/`, `modality/`, `register/`
