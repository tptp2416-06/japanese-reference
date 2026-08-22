/* ============================================================
   deck.js — PRESENTATION-SPEC §7 sidebar furniture and §8
   toggles, ticks, keys and shuffle.

   THE CONTRACT IS DEGRADATION. Everything here is additive: with
   JavaScript off the sidebar is a plain working list of links, the
   breakdowns are <details> the browser opens on its own, no ruby is
   hidden and no English is blurred. Nothing this file does is the
   only way to reach anything.

   All state is localStorage, this device only, and every read is
   wrapped — Safari in private mode throws on localStorage rather
   than returning null, and an exception here would take the whole
   sidebar with it.
   ============================================================ */

(function () {
  "use strict";

  var KEY_FURIGANA = "deck.furigana.hidden";
  var KEY_ENGLISH  = "deck.english.hidden";
  var KEY_READ     = "deck.read";
  var GRAMMAR_PATH = "/deck/grammar/";

  /* ---------------------------------------------------- storage */

  function get(key, fallback) {
    try {
      var v = window.localStorage.getItem(key);
      return v === null ? fallback : v;
    } catch (e) {
      return fallback;
    }
  }

  function set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) { /* private mode, quota — the UI still works this session */ }
  }

  function readSet() {
    var raw = get(KEY_READ, "");
    var out = {};
    raw.split(",").forEach(function (s) { if (s) { out[s] = true; } });
    return out;
  }

  function writeSet(obj) {
    set(KEY_READ, Object.keys(obj).filter(function (k) { return obj[k]; }).join(","));
  }

  /* ------------------------------------------------ the deck index
     Baked at build time by jp-deck's scripts/build_site.py. Absent on
     a site built before IB-2, so every reader below tolerates it. */

  var INDEX = window.DECK_INDEX || { total: 0, groups: {}, levels: {}, shuffle: [] };

  /* Material publishes its own base path in the config blob it already
     emits; deriving it from the current URL would only work on pages that
     are themselves under /deck/. */
  function baseUrl() {
    var el = document.getElementById("__config");
    try {
      return new URL(JSON.parse(el.textContent).base + "/", window.location.href);
    } catch (e) {
      return new URL("/", window.location.href);
    }
  }

  /* The slug of a generated grammar page, or null. Matched on the PATH, so a
     link that merely contains the words cannot pass. */
  function slugOf(href) {
    var path;
    try {
      path = new URL(href, window.location.href).pathname;
    } catch (e) {
      return null;
    }
    var at = path.indexOf(GRAMMAR_PATH);
    if (at === -1) { return null; }
    var rest = path.slice(at + GRAMMAR_PATH.length).replace(/\/$/, "");
    if (!rest || rest.indexOf("/") !== -1 || rest === "index") { return null; }
    return rest;
  }

  /* ------------------------------------------------------ toggles */

  function applyToggle(cls, key, on) {
    document.body.classList.toggle(cls, on);
    set(key, on ? "1" : "0");
    document.querySelectorAll('[data-deck-toggle="' + key + '"] .st')
      .forEach(function (el) { el.textContent = on ? "OFF" : "ON"; });
  }

  function toggleFurigana(force) {
    var on = force === undefined
      ? !document.body.classList.contains("deck-hide-furigana") : force;
    applyToggle("deck-hide-furigana", KEY_FURIGANA, on);
  }

  function toggleEnglish(force) {
    var on = force === undefined
      ? !document.body.classList.contains("deck-hide-english") : force;
    applyToggle("deck-hide-english", KEY_ENGLISH, on);
  }

  /* --------------------------------------------- sidebar furniture */

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) { n.className = cls; }
    if (text !== undefined) { n.textContent = text; }
    return n;
  }

  function toolButton(label, key, handler) {
    var b = el("button", null);
    b.type = "button";
    b.setAttribute("data-deck-toggle", key);
    b.appendChild(document.createTextNode(label));
    b.appendChild(el("span", "st", "ON"));
    b.addEventListener("click", handler);
    return b;
  }

  /* No sidebar brand. It was the mock's, and it stopped earning its place the
     moment the branding moved into the header (bigger logo tile, the wordmark
     in pixel Latin) — two wordmarks one above the other is one too many.
     Tim's call, after seeing both in the canvas. */
  function buildFurniture(host) {
    var tools = el("div", "deck-tools");
    tools.appendChild(toolButton("ふりがな", KEY_FURIGANA, function () { toggleFurigana(); }));
    tools.appendChild(toolButton("ENGLISH", KEY_ENGLISH, function () { toggleEnglish(); }));

    if (INDEX.shuffle && INDEX.shuffle.length) {
      var shuffle = el("button", null, "SHUFFLE ▸ RANDOM PAGE");
      shuffle.type = "button";
      shuffle.addEventListener("click", function () {
        var pool = INDEX.shuffle;
        var pick = pool[Math.floor(Math.random() * pool.length)];
        window.location.href =
          new URL("deck/grammar/" + pick + "/", baseUrl()).href;
      });
      tools.appendChild(shuffle);
    }
    host.appendChild(tools);

    var count = el("div", "deck-count");
    count.id = "deck-count";
    host.appendChild(count);
    host.appendChild(el("div", "deck-dots"));
  }

  function renderCount() {
    var node = document.getElementById("deck-count");
    if (!node || !INDEX.total) { return; }
    var n = Object.keys(readSet()).length;
    node.textContent = "";
    node.appendChild(el("b", null, String(n)));
    node.appendChild(document.createTextNode(
      " / " + INDEX.total + " READ · THIS DEVICE"));
  }

  /* ------------------------------------------------- the nav rows

     Two jobs, and the first one is a rule, not a nicety. The nav title is
     the FULL bilingual page title, because MkDocs makes a nav title the
     page's <title> and PAGE-SPEC §2 keeps those bilingual. The sidebar
     shows the Japanese half and keeps the whole string as the R32 hover
     tooltip — so the mock's sidebar and §2 hold at the same time. */

  /* A GROUP or a PAGE? Decided by the <li>, never by whether the row has an
     href — and that distinction is the whole bug this replaced.

     `navigation.prune` renders an unvisited group NOT as a label with a
     collapsed subtree but as an ANCHOR POINTING AT THE GROUP'S FIRST PAGE, so
     it stays reachable. Those rows therefore have a `/deck/grammar/<slug>/`
     href, matched the page path, and were decorated as pages: 原因・理由 got a
     read-tick that would have marked ので as read, and wore ので's N5 chip as
     if it were the group's level. They also never reached decorateGroup, which
     is why the English sub-label appeared on the open group only.

     `md-nav__item--nested` is true for a group in BOTH renderings. */
  function isGroup(link) {
    var li = link.closest("li.md-nav__item");
    return !!li && li.classList.contains("md-nav__item--nested");
  }

  function decorateRow(link) {
    var slug = slugOf(link.getAttribute("href"));
    if (!slug) { return; }
    var item = link.parentElement;
    if (!item || link.closest(".deck-rowline")) { return; }

    /* The tick and the link go into a wrapper of their own, NOT into the <li>.
       Material renders the CURRENT page's item as three siblings — a
       `<label for="__toc">` that expands the table of contents on narrow
       screens, the `<a>`, and the TOC `<nav>` — and making the <li> a flex
       row laid all three out side by side AND overrode the `display:none`
       that hides the label at desktop width. Measured, not guessed: the
       label computed to `display:flex`, 114px wide, at 1440px. */
    var line = el("span", "deck-rowline");
    item.insertBefore(line, link);
    line.appendChild(link);

    var full = link.textContent.trim();
    var jp = full.split(" — ")[0];
    link.textContent = "";
    var label = el("span", null, jp);
    label.setAttribute("lang", "ja");
    link.appendChild(label);
    if (!link.getAttribute("title") && full !== jp) {
      link.setAttribute("title", full);
    }

    var level = INDEX.levels && INDEX.levels[slug];
    if (level) {
      link.appendChild(el("span", "deck-lv", level));
    }

    var read = readSet();
    var tick = el("span", "deck-tick" + (read[slug] ? " on" : ""),
                  read[slug] ? "✓" : "");
    tick.setAttribute("role", "checkbox");
    tick.setAttribute("tabindex", "0");
    tick.setAttribute("aria-checked", read[slug] ? "true" : "false");
    tick.setAttribute("aria-label", "Mark " + jp + " as read");
    function flip(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      var now = readSet();
      now[slug] = !now[slug];
      writeSet(now);
      tick.classList.toggle("on", !!now[slug]);
      tick.textContent = now[slug] ? "✓" : "";
      tick.setAttribute("aria-checked", now[slug] ? "true" : "false");
      renderCount();
    }
    tick.addEventListener("click", flip);
    tick.addEventListener("keydown", function (ev) {
      if (ev.key === " " || ev.key === "Enter") { flip(ev); }
    });
    line.insertBefore(tick, link);
  }

  /* The group heading's English sub-label — read from the build-time index,
     never derived here.

     It used to be the `Function` slug's first segment, computed in this file.
     That was fine while it was decoration and wrong the moment Tim's R57 made
     the sidebar SORT on it: the sort runs in Python at build time and the
     caption was invented in JavaScript at read time, so the list would have
     been ordered by one string and labelled with another — a list that is
     sorted and looks unsorted. It is a column on `function_vocab.csv` now, and
     `INDEX.groups` carries exactly the string the row displays. */
  function decorateGroup(link) {
    var label = link.querySelector(".md-ellipsis") || link;
    var jp = label.textContent.trim();
    var fn = INDEX.groups && INDEX.groups[jp];
    if (!fn || link.querySelector(".en")) { return; }
    link.setAttribute("lang", "ja");
    var sub = el("span", "en", fn);
    sub.setAttribute("lang", "en");
    /* Before Material's twisty icon, which must stay last in the row. */
    var icon = link.querySelector(".md-nav__icon");
    if (icon) { link.insertBefore(sub, icon); } else { link.appendChild(sub); }
  }

  /* ------------------------------------------- the gloss popovers

     PRESENTATION-SPEC §4's second affordance, positioned by CSS instead of
     by JavaScript. Material's `content.tooltips` measures the host with
     getBoundingClientRect() and writes the answer back into `top` / `left`.
     Those are the same coordinate space at zoom 1 and differ by --ui-scale
     under the root `zoom` of §1, so the card landed a fifth of the page
     below its term, and further off the further down you read. Measured on
     /deck/grammar/kanoukei-koto-ga-dekiru/: 見える at document y 726, its
     card drawn at 900.

     The fix is to stop measuring. Everything below is DOM shape; the
     placing is `position: absolute` against a relative wrapper, which the
     browser resolves in the term's own coordinate space at any zoom — and
     at no zoom, which is where jp-deck `#234` is heading. A compensation
     factor would have to be deleted again there.

     THE CARD IS A SIBLING OF THE TERM, NEVER A CHILD. Inside the <a> it
     would join the link's accessible name — "見える 見える — Be visible or
     come into view naturally". Outside it, with role="tooltip" and
     aria-describedby, it is a description, which is what it is.

     RUNS AT PARSE TIME, not from init(). It has to take `title` away before
     Material's own tooltip setup reads it, and that setup runs on
     DOMContentLoaded — after this file's own listener would. The script tag
     sits at the end of <body>, so the content is already parsed here.

     With JS off none of this happens, the `title` stays where the generator
     put it, and the browser draws its own tooltip. */

  var popSeq = 0;

  function glossPopovers() {
    document.querySelectorAll(
      ".md-content__inner a[title], .md-content__inner abbr[title]," +
      ".md-content__inner span[title]"
    ).forEach(function (host) {
      var text = host.getAttribute("title");
      var parent = host.parentNode;
      /* No re-entry guard is needed beyond this: the selector asks for
         `[title]` and the first thing done to a host is to take it away. */
      if (!text || !parent) { return; }
      host.removeAttribute("title");

      var wrap = el("span", "deck-pop-host");
      parent.insertBefore(wrap, host);
      wrap.appendChild(host);

      var pop = el("span", "deck-pop", text);
      pop.id = "deck-pop-" + (++popSeq);
      pop.setAttribute("role", "tooltip");
      wrap.appendChild(pop);
      host.setAttribute("aria-describedby", pop.id);

      wrap.addEventListener("mouseenter", function () { nudge(pop); });
      wrap.addEventListener("focusin", function () { nudge(pop); });
    });
  }

  /* THE ONE THING CSS CANNOT DO: keep a card centred on its term from
     running off a 375px screen. A term near the left of the column carries a
     240px card 56px past the edge, measured, and the first characters of
     every line are cut.

     There is no CSS clamp for it — `left` percentages resolve against the
     TERM, not the viewport, and anchor positioning is Chrome-only. So the
     shift is measured. What keeps this from being the bug it replaces is the
     UNIT: `--nudge` is a percentage OF THE CARD'S OWN WIDTH, and a ratio of
     two lengths measured in the same pass is the same number at zoom 1.2, at
     zoom 1, and at whatever `#234` leaves behind. Nothing here has to be
     revisited when the zoom goes; a px offset would have. */
  function nudge(pop) {
    pop.style.setProperty("--nudge", "0%");
    var r = pop.getBoundingClientRect();
    if (!r.width) { return; }
    var edge = 6;
    var vw = document.documentElement.clientWidth;
    var shift = 0;
    if (r.left < edge) { shift = edge - r.left; }
    else if (r.right > vw - edge) { shift = (vw - edge) - r.right; }
    if (shift) {
      pop.style.setProperty("--nudge", (shift / r.width * 100).toFixed(3) + "%");
    }
  }

  /* ----------------------------------------------------- keyboard */

  function typing(ev) {
    var t = ev.target;
    if (!t) { return false; }
    var tag = (t.tagName || "").toLowerCase();
    return tag === "input" || tag === "textarea" || tag === "select" ||
           t.isContentEditable;
  }

  function onKey(ev) {
    if (ev.metaKey || ev.ctrlKey || ev.altKey || typing(ev)) { return; }
    if (ev.key === "/") {
      var search = document.querySelector(".md-search__input");
      if (search) {
        ev.preventDefault();
        var toggle = document.querySelector("#__search");
        if (toggle) { toggle.checked = true; }
        search.focus();
      }
    } else if (ev.key === "e") {
      toggleEnglish();
    } else if (ev.key === "f") {
      toggleFurigana();
    }
  }

  /* ------------------------------------------------------- favicon

     Two artworks, one for a light browser chrome and one for a dark one.
     mkdocs.yml names the light PNG as the static `theme.favicon`, so a
     JS-off reader still gets an icon; this swaps in the dark artwork when
     the page is in dark mode and follows the palette toggle afterwards.
     Keyed on the PAGE's scheme rather than on `prefers-color-scheme`
     because the reader may have overridden it, and the tab should agree
     with what they are looking at. */

  var ICONS = {
    light: "assets/images/favicon-light.png",
    dark:  "assets/images/favicon-dark.png"
  };

  function syncFavicon() {
    var dark = document.body.getAttribute("data-md-color-scheme") === "slate";
    var href = new URL(ICONS[dark ? "dark" : "light"], baseUrl()).href;
    var link = document.querySelector('link[rel~="icon"]');
    if (link && link.getAttribute("href") !== href) {
      link.setAttribute("href", href);
    }
    /* The header logo is the same artwork and follows the same switch, so
       the tab and the header never disagree about which mode you are in. */
    var logo = document.querySelector('[data-md-component="logo"] img');
    if (logo && logo.getAttribute("src") !== href) {
      logo.setAttribute("src", href);
    }
  }

  /* --------------------------------------------------------- init */

  function init() {
    toggleFurigana(get(KEY_FURIGANA, "0") === "1");
    toggleEnglish(get(KEY_ENGLISH, "0") === "1");

    var host = document.querySelector(".md-sidebar--primary .md-sidebar__inner")
            || document.querySelector(".md-sidebar--primary .md-sidebar__scrollwrap");
    if (host) { buildFurniture(host); }

    document.querySelectorAll(".md-sidebar--primary .md-nav__link")
      .forEach(function (link) {
        if (isGroup(link)) { decorateGroup(link); }
        else if (link.getAttribute("href")) { decorateRow(link); }
      });

    renderCount();
    syncFavicon();
    new MutationObserver(syncFavicon).observe(document.body, {
      attributes: true, attributeFilter: ["data-md-color-scheme"]
    });
    document.addEventListener("keydown", onKey);

    /* PRINT: every breakdown open, then back as it was. The print stylesheet
       tries this in CSS too, but a closed <details> is hidden by the UA in a
       way that has changed twice (child `display:none`, then
       `::details-content` content-visibility), so the attribute is the only
       reliable lever. Restored afterwards — printing must not silently
       rearrange the page the reader is looking at. */
    var wasOpen = [];
    window.addEventListener("beforeprint", function () {
      wasOpen = [];
      document.querySelectorAll("details.ex-bd").forEach(function (d) {
        wasOpen.push(d.open);
        d.open = true;
      });
    });
    window.addEventListener("afterprint", function () {
      document.querySelectorAll("details.ex-bd").forEach(function (d, i) {
        d.open = !!wasOpen[i];
      });
    });
  }

  /* Before anything waits for DOMContentLoaded — see the note on
     glossPopovers(): Material's tooltip setup must not find a `title`. */
  glossPopovers();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
}());
