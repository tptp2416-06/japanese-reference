---
title: Font Test
---

# Font Test Page

<style>
  .font-test-box {
    font-family: "Source Code Pro", monospace !important;
    font-size: 18px;
    padding: 20px;
    margin: 16px 0;
    border: 3px solid red;
    border-radius: 6px;
  }

  .font-current {
    font-size: 18px;
    padding: 20px;
    margin: 16px 0;
    border: 3px solid blue;
    border-radius: 6px;
  }
</style>

## Red box — hardcoded Source Code Pro

<div class="font-test-box">
  This text is hardcoded to Source Code Pro via an inline style tag. If this looks different from the blue box, Source Code Pro is loading correctly but being blocked elsewhere. If they look identical, the font is not loading at all.
  <br><br>
  abcdefghijklmnopqrstuvwxyz 0123456789
</div>

## Blue box — whatever the site is currently using

<div class="font-current">
  This text uses whatever font the site is currently rendering. Compare it to the red box above.
  <br><br>
  abcdefghijklmnopqrstuvwxyz 0123456789
</div>

## Inline hardcoded (highest possible specificity)

<p style="font-family: 'Source Code Pro', monospace !important; font-size: 18px; border: 3px solid green; padding: 12px; border-radius: 6px;">
  This paragraph uses an inline style attribute — the highest CSS specificity possible. If this still does not render in Source Code Pro, the font file itself is not loading from Google Fonts.
  <br><br>
  abcdefghijklmnopqrstuvwxyz 0123456789
</p>