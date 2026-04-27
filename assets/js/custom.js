/* ============================================================
   CUSTOM JS — Japanese Reference
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  // ── Sync MkDocs dark mode to Anki night_mode class ──
  // MkDocs Material uses data-md-color-scheme on <body>
  // The CSS already handles this via attribute selectors,
  // but this also adds .night_mode for any legacy Anki classes
  // that use that selector directly.

  function syncNightMode() {
    const scheme = document.body.getAttribute("data-md-color-scheme");
    if (scheme === "slate") {
      document.body.classList.add("night_mode");
    } else {
      document.body.classList.remove("night_mode");
    }
  }

  // Run on load
  syncNightMode();

  // Watch for theme toggle changes
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName === "data-md-color-scheme") {
        syncNightMode();
      }
    });
  });

  observer.observe(document.body, { attributes: true });
});
