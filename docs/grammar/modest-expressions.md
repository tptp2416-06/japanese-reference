---
title: Extra Modest Expressions (show respect by lowering your own status)
tags:
  - N4-Upper
  - humble
---
 
# Extra Modest Expressions
 
 
---




<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Extra Modest Expressions (謙譲語 I) — N3 Grammar Guide</title>
<style>
  :root {
    --bg: #fdfdfb;
    --surface: #ffffff;
    --text: #1f1f23;
    --text-muted: #5a5a66;
    --border: #e3e3e8;
    --accent: #7c3aed;
    --accent-soft: #ede9fe;
    --table-header: #f4f2fb;
    --table-stripe: #faf9fd;
    --ruby-color: #6b6b75;

    --tip-bg: #e8f6ee;
    --tip-border: #2e8b57;
    --tip-text: #1d5c3a;

    --warn-bg: #fdecec;
    --warn-border: #c0392b;
    --warn-text: #7a1f16;

    --note-bg: #e7f0fb;
    --note-border: #2e6fd1;
    --note-text: #1b3f80;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #161619;
      --surface: #1f1f24;
      --text: #ececf0;
      --text-muted: #a4a4b0;
      --border: #33333a;
      --accent: #b79dff;
      --accent-soft: #2a2240;
      --table-header: #26222f;
      --table-stripe: #1c1c22;
      --ruby-color: #a8a8b4;

      --tip-bg: #1a2e22;
      --tip-border: #4caf7b;
      --tip-text: #a6e3c1;

      --warn-bg: #3a1d1a;
      --warn-border: #e57368;
      --warn-text: #f4b8b0;

      --note-bg: #1a2638;
      --note-border: #6ba3ec;
      --note-text: #bcd4f4;
    }
  }

  * { box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    font-family: "Noto Sans JP", "Hiragino Sans", "Yu Gothic", "Meiryo", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.75;
    margin: 0;
    padding: 2rem 1rem;
    font-size: 16px;
  }

  main {
    max-width: 860px;
    margin: 0 auto;
    background: var(--surface);
    padding: 2.5rem 2rem;
    border: 1px solid var(--border);
    border-radius: 12px;
  }

  h1 {
    font-size: 2rem;
    margin-top: 0;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid var(--accent);
    line-height: 1.3;
  }

  h2 {
    font-size: 1.45rem;
    margin-top: 2.5rem;
    padding-left: 0.75rem;
    border-left: 5px solid var(--accent);
    line-height: 1.3;
  }

  h3 {
    font-size: 1.15rem;
    margin-top: 1.75rem;
    color: var(--accent);
  }

  p { margin: 0.75em 0; }

  ruby rt {
    font-size: 0.6em;
    color: var(--ruby-color);
    font-weight: normal;
    letter-spacing: 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0 1.5rem;
    font-size: 0.95rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
  }

  th, td {
    padding: 0.7rem 0.85rem;
    text-align: left;
    border-bottom: 1px solid var(--border);
    vertical-align: top;
  }

  th {
    background: var(--table-header);
    font-weight: 600;
    color: var(--text);
  }

  tbody tr:nth-child(even) { background: var(--table-stripe); }
  tbody tr:last-child td { border-bottom: none; }

  .jp { font-size: 1.05em; }

  .callout {
    margin: 1.25rem 0;
    padding: 0.9rem 1.1rem 0.9rem 3rem;
    border-left: 5px solid;
    border-radius: 6px;
    position: relative;
  }

  .callout::before {
    position: absolute;
    left: 0.85rem;
    top: 0.85rem;
    font-size: 1.3rem;
    line-height: 1;
  }

  .callout p:first-child { margin-top: 0; }
  .callout p:last-child { margin-bottom: 0; }

  .tip {
    background: var(--tip-bg);
    border-color: var(--tip-border);
    color: var(--tip-text);
  }
  .tip::before { content: "💡"; }

  .warning {
    background: var(--warn-bg);
    border-color: var(--warn-border);
    color: var(--warn-text);
  }
  .warning::before { content: "⚠️"; }

  .context-note {
    background: var(--note-bg);
    border-color: var(--note-border);
    color: var(--note-text);
  }
  .context-note::before { content: "ℹ️"; }

  .example-block {
    margin: 1rem 0;
    padding: 0.9rem 1.1rem;
    background: var(--accent-soft);
    border-radius: 8px;
  }

  .example-label {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 0.35rem;
  }

  .example-jp {
    font-size: 1.1em;
    font-weight: 500;
    margin: 0.2em 0;
  }

  .example-en {
    color: var(--text-muted);
    font-style: italic;
    margin: 0.2em 0;
  }

  ol.drill { padding-left: 1.5rem; }
  ol.drill > li { margin-bottom: 1rem; }

  .prompt {
    font-weight: 500;
    color: var(--text);
  }

  .answer-key {
    margin-top: 1rem;
    padding: 1.25rem 1.5rem;
    background: var(--table-stripe);
    border: 1px dashed var(--border);
    border-radius: 8px;
  }

  .answer-key h3 { margin-top: 1rem; }
  .answer-key h3:first-child { margin-top: 0; }

  .answer-jp {
    font-size: 1.05em;
    font-weight: 500;
    margin: 0.2em 0;
  }

  .answer-explanation {
    color: var(--text-muted);
    font-size: 0.92em;
    margin: 0.2em 0 0.5em;
  }

  strong { color: var(--accent); font-weight: 600; }

  code {
    background: var(--table-header);
    padding: 0.1em 0.4em;
    border-radius: 4px;
    font-size: 0.92em;
  }

  @media (max-width: 600px) {
    body { padding: 1rem 0.5rem; font-size: 15px; }
    main { padding: 1.5rem 1rem; }
    h1 { font-size: 1.5rem; }
    h2 { font-size: 1.2rem; }
    table { font-size: 0.88rem; }
    th, td { padding: 0.5rem 0.5rem; }
  }
</style>
</head>
<body>
<main>

<h1>Extra Modest Expressions<br><small style="font-size:1rem; font-weight:normal; color:var(--text-muted);">謙<rt>けん</rt>譲<rt>じょう</rt>語<rt>ご</rt> I (Kenjōgo) — N3 Grammar</small></h1>

<!-- SECTION 1: OVERVIEW -->
<h2>1. Overview &amp; Nuance</h2>

<p><strong>Extra Modest Expressions</strong> (<ruby>謙<rt>けん</rt></ruby><ruby>譲<rt>じょう</rt></ruby><ruby>語<rt>ご</rt></ruby>) are a category of <ruby>敬<rt>けい</rt></ruby><ruby>語<rt>ご</rt></ruby> (honorific language) used when speaking about <em>your own actions</em> — or the actions of your in-group — in order to show respect to the listener. Rather than elevating the listener directly (which is the job of <strong>Sonkeigo</strong>), humble speech works by <em>lowering the speaker</em>, creating vertical social distance that flatters the listener by comparison.</p>

<p>The psychological intent is crucial: you are <strong>symbolically bowing</strong> through language. By choosing a verb form that means "I humbly do X" instead of simply "I do X," you communicate awareness of the other person's higher status (in age, position, or social role such as "customer").</p>

<h3>How it differs from <ruby>丁<rt>てい</rt></ruby><ruby>寧<rt>ねい</rt></ruby><ruby>語<rt>ご</rt></ruby> (Polite <code>-masu</code> form)</h3>

<table>
  <thead>
    <tr><th>Form</th><th>Purpose</th><th>Direction of Respect</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Teineigo (<code>-masu</code>)</td>
      <td>General politeness; neutral distance</td>
      <td>Flat — simply polite</td>
    </tr>
    <tr>
      <td>Kenjōgo (Extra Modest)</td>
      <td>Lower yourself to elevate the listener</td>
      <td>↓ Speaker goes down</td>
    </tr>
    <tr>
      <td>Sonkeigo (Honorific)</td>
      <td>Directly elevate the listener's actions</td>
      <td>↑ Listener goes up</td>
    </tr>
  </tbody>
</table>

<p>A simple way to think about it: <code>-masu</code> is <em>polite neutrality</em>. Kenjōgo is <em>a verbal bow</em>. If Teineigo is business casual, Kenjōgo is a pressed suit.</p>

<!-- SECTION 2: CONJUGATION RULES -->
<h2>2. Conjugation Rules</h2>

<h3>2a. Special Modest Verbs</h3>

<p>Several high-frequency verbs have <strong>completely irregular humble forms</strong> that must be memorized. These are the ones you will encounter most often in real life — in customer service, business, and formal introductions.</p>

<table>
  <thead>
    <tr>
      <th>Plain Verb</th>
      <th>Meaning</th>
      <th>Humble Form (Kenjōgo)</th>
      <th>With <code>-masu</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="jp"><ruby>行<rt>い</rt></ruby>く / <ruby>来<rt>く</rt></ruby>る</td>
      <td>to go / to come</td>
      <td class="jp"><ruby>参<rt>まい</rt></ruby>る</td>
      <td class="jp"><ruby>参<rt>まい</rt></ruby>ります</td>
    </tr>
    <tr>
      <td class="jp">いる</td>
      <td>to be / exist (animate)</td>
      <td class="jp">おる</td>
      <td class="jp">おります</td>
    </tr>
    <tr>
      <td class="jp">する</td>
      <td>to do</td>
      <td class="jp"><ruby>致<rt>いた</rt></ruby>す</td>
      <td class="jp"><ruby>致<rt>いた</rt></ruby>します</td>
    </tr>
    <tr>
      <td class="jp"><ruby>言<rt>い</rt></ruby>う</td>
      <td>to say</td>
      <td class="jp"><ruby>申<rt>もう</rt></ruby>す</td>
      <td class="jp"><ruby>申<rt>もう</rt></ruby>します</td>
    </tr>
    <tr>
      <td class="jp"><ruby>食<rt>た</rt></ruby>べる / <ruby>飲<rt>の</rt></ruby>む</td>
      <td>to eat / to drink</td>
      <td class="jp">いただく</td>
      <td class="jp">いただきます</td>
    </tr>
    <tr>
      <td class="jp"><ruby>知<rt>し</rt></ruby>っている</td>
      <td>to know</td>
      <td class="jp"><ruby>存<rt>ぞん</rt></ruby>じております</td>
      <td class="jp"><ruby>存<rt>ぞん</rt></ruby>じております</td>
    </tr>
    <tr>
      <td class="jp"><ruby>見<rt>み</rt></ruby>る</td>
      <td>to see / look</td>
      <td class="jp"><ruby>拝<rt>はい</rt></ruby><ruby>見<rt>けん</rt></ruby>する</td>
      <td class="jp"><ruby>拝<rt>はい</rt></ruby><ruby>見<rt>けん</rt></ruby>します</td>
    </tr>
  </tbody>
</table>

<h3>2b. The Pattern: <code>お + Verb Stem + する/いたす</code></h3>

<p>For verbs that <em>don't</em> have a special humble form, Japanese provides a productive template. It's a three-step process:</p>

<ol>
  <li><strong>Step 1 — Take the <code>-masu</code> stem.</strong> Remove <code>ます</code> from the polite form.
    <br>例: <ruby>書<rt>か</rt></ruby>き<span style="opacity:0.5">ます</span> → <ruby>書<rt>か</rt></ruby>き
  </li>
  <li><strong>Step 2 — Add <code>お</code> before the stem.</strong> This prefix is a respect marker.
    <br>例: お<ruby>書<rt>か</rt></ruby>き
  </li>
  <li><strong>Step 3 — Attach <code>する</code> (or the more formal <code>いたす</code>) after the stem.</strong>
    <br>例: お<ruby>書<rt>か</rt></ruby>きする → お<ruby>書<rt>か</rt></ruby>きいたします
  </li>
</ol>

<table>
  <thead>
    <tr>
      <th>Plain Verb</th>
      <th><code>-masu</code> Stem</th>
      <th>Standard Humble</th>
      <th>Extra Formal Humble</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="jp"><ruby>持<rt>も</rt></ruby>つ (to carry)</td>
      <td class="jp"><ruby>持<rt>も</rt></ruby>ち</td>
      <td class="jp">お<ruby>持<rt>も</rt></ruby>ちする</td>
      <td class="jp">お<ruby>持<rt>も</rt></ruby>ちいたします</td>
    </tr>
    <tr>
      <td class="jp"><ruby>送<rt>おく</rt></ruby>る (to send)</td>
      <td class="jp"><ruby>送<rt>おく</rt></ruby>り</td>
      <td class="jp">お<ruby>送<rt>おく</rt></ruby>りする</td>
      <td class="jp">お<ruby>送<rt>おく</rt></ruby>りいたします</td>
    </tr>
    <tr>
      <td class="jp"><ruby>待<rt>ま</rt></ruby>つ (to wait)</td>
      <td class="jp"><ruby>待<rt>ま</rt></ruby>ち</td>
      <td class="jp">お<ruby>待<rt>ま</rt></ruby>ちする</td>
      <td class="jp">お<ruby>待<rt>ま</rt></ruby>ちいたします</td>
    </tr>
    <tr>
      <td class="jp"><ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>する (to call)</td>
      <td class="jp"><ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby></td>
      <td class="jp">お<ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>…❌</td>
      <td class="jp">お<ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>…❌</td>
    </tr>
  </tbody>
</table>

<div class="callout context-note">
<p><strong>Note on Sino-Japanese verbs:</strong> For <code>〜する</code> verbs with Chinese-origin nouns (like <ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>する, <ruby>連<rt>れん</rt></ruby><ruby>絡<rt>らく</rt></ruby>する, <ruby>説<rt>せつ</rt></ruby><ruby>明<rt>めい</rt></ruby>する), the prefix changes from <code>お</code> to <code>ご</code>, and you skip the <code>-masu</code> stem logic entirely: <strong>ご + noun + する/いたす</strong>. Example: <span class="jp">ご<ruby>連<rt>れん</rt></ruby><ruby>絡<rt>らく</rt></ruby>いたします</span> = "I (humbly) will contact you."</p>
</div>

<!-- SECTION 3: USAGE LADDER -->
<h2>3. Progressive Usage Ladder</h2>

<p>The following 10 examples escalate in social weight. Notice how the same grammar is recycled across vastly different contexts — the grammar itself is fixed; what changes is <em>who you're talking to</em>.</p>

<h3>Level 1 — Strict / Formal (Interview, Ceremonial Self-Introduction)</h3>

<div class="example-block">
<span class="example-label">Example 1 · Self-Introduction</span>
<p class="example-jp jp"><ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>と<ruby>申<rt>もう</rt></ruby>します。アメリカから<ruby>参<rt>まい</rt></ruby>りました。</p>
<p class="example-en">"My name is Tanaka. I have come from America."</p>
<p><small>Classic job interview opener. <code>申します</code> replaces <code>言います</code>; <code>参りました</code> replaces <code>来ました</code>.</small></p>
</div>

<div class="example-block">
<span class="example-label">Example 2 · Interview Statement</span>
<p class="example-jp jp"><ruby>現<rt>げん</rt></ruby><ruby>在<rt>ざい</rt></ruby>、ABC<ruby>会<rt>がい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>いております。</p>
<p class="example-en">"I am currently working at ABC Company."</p>
<p><small><code>おる</code> is used in its <code>-te iru</code> form → <code>〜ており(ます)</code>, which is the humble equivalent of the progressive/ongoing state <code>〜ている</code>.</small></p>
</div>

<div class="example-block">
<span class="example-label">Example 3 · Showing Respect for Expertise</span>
<p class="example-jp jp">お<ruby>名<rt>な</rt></ruby><ruby>前<rt>まえ</rt></ruby>は<ruby>以<rt>い</rt></ruby><ruby>前<rt>ぜん</rt></ruby>から<ruby>存<rt>ぞん</rt></ruby>じております。</p>
<p class="example-en">"I have known your name for some time."</p>
<p><small><code>存じております</code> is the humble form of <code>知っています</code>. Crucial in first meetings with someone famous/senior.</small></p>
</div>

<h3>Level 2 — Business Polite (Client, Superior, Customer Service)</h3>

<div class="example-block">
<span class="example-label">Example 4 · Phone / Email</span>
<p class="example-jp jp"><ruby>明<rt>あ</rt></ruby><ruby>日<rt>した</rt></ruby>、<ruby>資<rt>し</rt></ruby><ruby>料<rt>りょう</rt></ruby>をお<ruby>送<rt>おく</rt></ruby>りいたします。</p>
<p class="example-en">"I will send the documents tomorrow."</p>
<p><small>Textbook example of the <code>お + stem + いたす</code> pattern. Standard in client email.</small></p>
</div>

<div class="example-block">
<span class="example-label">Example 5 · Offering Help</span>
<p class="example-jp jp">お<ruby>荷<rt>に</rt></ruby><ruby>物<rt>もつ</rt></ruby>、お<ruby>持<rt>も</rt></ruby>ちしましょうか。</p>
<p class="example-en">"Shall I carry your luggage (for you)?"</p>
<p><small>The humble pattern naturally combines with <code>〜ましょうか</code> to make humble offers. Very common in hotels and stores.</small></p>
</div>

<div class="example-block">
<span class="example-label">Example 6 · Customer Service</span>
<p class="example-jp jp"><ruby>少<rt>しょう</rt></ruby><ruby>々<rt></rt></ruby>お<ruby>待<rt>ま</rt></ruby>ちください。<ruby>担<rt>たん</rt></ruby><ruby>当<rt>とう</rt></ruby><ruby>者<rt>しゃ</rt></ruby>にご<ruby>連<rt>れん</rt></ruby><ruby>絡<rt>らく</rt></ruby>いたします。</p>
<p class="example-en">"Please wait a moment. I will contact the person in charge."</p>
<p><small>Notice the <code>ご + 連絡 + いたす</code> pattern for a Sino-Japanese verb.</small></p>
</div>

<div class="example-block">
<span class="example-label">Example 7 · Referring to In-Group</span>
<p class="example-jp jp"><ruby>社<rt>しゃ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>の<ruby>山<rt>やま</rt></ruby><ruby>田<rt>だ</rt></ruby>は<ruby>只<rt>ただ</rt></ruby><ruby>今<rt>いま</rt></ruby><ruby>席<rt>せき</rt></ruby>を<ruby>外<rt>はず</rt></ruby>しております。</p>
<p class="example-en">"Our president, Yamada, is currently away from his desk."</p>
<p><small>Even though Yamada is your boss, you use humble language about him to the <em>outside</em> customer. This is the uchi-soto rule in action.</small></p>
</div>

<h3>Level 3 — Social Context: Humble <code>-te</code> Form in Everyday Speech</h3>

<div class="callout context-note">
<p><strong>When does humble speech leak into casual life?</strong> The full <code>致します</code> register would feel stiff between friends. But the <code>〜ておる</code> and <code>お + stem + する</code> patterns appear in softer social contexts — introducing yourself at a PTA meeting, speaking to your partner's parents, or making a humble offer to a neighbor. You <em>lower the register</em> slightly but keep the humble posture.</p>
</div>

<div class="example-block">
<span class="example-label">Example 8 · Meeting a Partner's Parents</span>
<p class="example-jp jp"><ruby>東<rt>とう</rt></ruby><ruby>京<rt>きょう</rt></ruby>で<ruby>英<rt>えい</rt></ruby><ruby>語<rt>ご</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えております。</p>
<p class="example-en">"I teach English in Tokyo."</p>
<p><small><code>〜ております</code> softens a casual fact ("I teach English") into something appropriate for a respectful first meeting.</small></p>
</div>

<div class="example-block">
<span class="example-label">Example 9 · Polite Social Offer</span>
<p class="example-jp jp">タクシーをお<ruby>呼<rt>よ</rt></ruby>びしましょうか。</p>
<p class="example-en">"Shall I call a taxi (for you)?"</p>
<p><small>Works when hosting older guests at your home — not so formal as business speech, but more respectful than <code>タクシーを呼びましょうか</code>.</small></p>
</div>

<div class="example-block">
<span class="example-label">Example 10 · Expressing Gratitude</span>
<p class="example-jp jp">おいしいお<ruby>茶<rt>ちゃ</rt></ruby>をいただきました。ありがとうございます。</p>
<p class="example-en">"I received/drank delicious tea. Thank you very much."</p>
<p><small><code>いただく</code> is the quiet workhorse of humble speech — used constantly and perfectly natural even in moderately formal social situations.</small></p>
</div>

<!-- SECTION 4: COMPARISON TABLE -->
<h2>4. The Keigo Hierarchy — Side-by-Side Comparison</h2>

<p>This table shows the <em>same action</em> expressed at three levels. Memorizing these triplets is one of the fastest ways to cement the logic of keigo.</p>

<table>
  <thead>
    <tr>
      <th>Meaning</th>
      <th>Kenjōgo (Humble — self)</th>
      <th>Teineigo (Polite — neutral)</th>
      <th>Sonkeigo (Honorific — other)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>to be / exist</td>
      <td class="jp"><ruby>居<rt>お</rt></ruby>ります</td>
      <td class="jp">います</td>
      <td class="jp">いらっしゃいます</td>
    </tr>
    <tr>
      <td>to go / come</td>
      <td class="jp"><ruby>参<rt>まい</rt></ruby>ります</td>
      <td class="jp"><ruby>行<rt>い</rt></ruby>きます / <ruby>来<rt>き</rt></ruby>ます</td>
      <td class="jp">いらっしゃいます</td>
    </tr>
    <tr>
      <td>to do</td>
      <td class="jp"><ruby>致<rt>いた</rt></ruby>します</td>
      <td class="jp">します</td>
      <td class="jp">なさいます</td>
    </tr>
    <tr>
      <td>to say</td>
      <td class="jp"><ruby>申<rt>もう</rt></ruby>します</td>
      <td class="jp"><ruby>言<rt>い</rt></ruby>います</td>
      <td class="jp">おっしゃいます</td>
    </tr>
    <tr>
      <td>to eat / drink</td>
      <td class="jp">いただきます</td>
      <td class="jp"><ruby>食<rt>た</rt></ruby>べます / <ruby>飲<rt>の</rt></ruby>みます</td>
      <td class="jp"><ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がります</td>
    </tr>
    <tr>
      <td>to see</td>
      <td class="jp"><ruby>拝<rt>はい</rt></ruby><ruby>見<rt>けん</rt></ruby>します</td>
      <td class="jp"><ruby>見<rt>み</rt></ruby>ます</td>
      <td class="jp">ご<ruby>覧<rt>らん</rt></ruby>になります</td>
    </tr>
    <tr>
      <td>to know</td>
      <td class="jp"><ruby>存<rt>ぞん</rt></ruby>じております</td>
      <td class="jp"><ruby>知<rt>し</rt></ruby>っています</td>
      <td class="jp">ご<ruby>存<rt>ぞん</rt></ruby>じです</td>
    </tr>
  </tbody>
</table>

<p><strong>The golden rule:</strong> <em>My actions</em> → Kenjōgo. <em>Their actions</em> → Sonkeigo. <em>Neutral / inanimate / general description</em> → Teineigo.</p>

<!-- SECTION 5: MISTAKE MONITOR -->
<h2>5. The Mistake Monitor</h2>

<div class="callout tip">
<p><strong>Social Pitfall — The Uchi-Soto Rule</strong></p>
<p>Humble speech is for <strong>you and your in-group (<ruby>内<rt>うち</rt></ruby>)</strong> — never for the listener or their group (<ruby>外<rt>そと</rt></ruby>). A common early mistake:</p>
<p>❌ <span class="jp">お<ruby>客<rt>きゃく</rt></ruby><ruby>様<rt>さま</rt></ruby>が<ruby>参<rt>まい</rt></ruby>りました。</span> ("The honored customer humbly came.")</p>
<p>This <em>lowers the customer</em> — the opposite of your intent. Correct: <span class="jp">お<ruby>客<rt>きゃく</rt></ruby><ruby>様<rt>さま</rt></ruby>がいらっしゃいました。</span> (Sonkeigo).</p>
<p>Conversely, when referring to <em>your own boss</em> while speaking to an outside client, use <strong>humble</strong> speech for your boss — because your boss is in <em>your</em> group relative to the outsider. This is counterintuitive for learners from hierarchical cultures that always elevate the boss.</p>
</div>

<div class="callout warning">
<p><strong>Grammatical Pitfall — Keigo Double-Dipping (<ruby>二<rt>に</rt></ruby><ruby>重<rt>じゅう</rt></ruby><ruby>敬<rt>けい</rt></ruby><ruby>語<rt>ご</rt></ruby>)</strong></p>
<p>Do not stack humble and honorific structures, or two honorific structures, onto one verb. The most common error is combining a special verb with the <code>お〜する</code> pattern:</p>
<p>❌ <span class="jp">お<ruby>申<rt>もう</rt></ruby>しいたします。</span> (<code>申す</code> is already humble — don't add <code>お〜いたす</code>.)</p>
<p>✅ <span class="jp"><ruby>申<rt>もう</rt></ruby>します。</span> / <span class="jp"><ruby>申<rt>もう</rt></ruby>し<ruby>上<rt>あ</rt></ruby>げます。</span></p>
<p>Another classic error: applying humble speech to the <em>listener's</em> action.</p>
<p>❌ <span class="jp"><ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>はコーヒーをいただきますか。</span> (uses humble "receive/eat" for the teacher)</p>
<p>✅ <span class="jp"><ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>はコーヒーを<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がりますか。</span> (Sonkeigo — elevating the teacher's action)</p>
</div>

<!-- SECTION 6: PRACTICE DRILL -->
<h2>6. Practice Drill</h2>

<p>Answer the five questions below. A mix of translation and conversion. Try to write your answers before scrolling to Section 7.</p>

<ol class="drill">
  <li>
    <p class="prompt"><strong>Translate to humble Japanese:</strong><br>"My name is Smith. I come from Canada." (formal self-introduction)</p>
  </li>
  <li>
    <p class="prompt"><strong>Translate to humble Japanese:</strong><br>"I will send the report by email tomorrow." (to a client)</p>
  </li>
  <li>
    <p class="prompt"><strong>Convert this polite sentence into an extra-modest one:</strong><br><span class="jp"><ruby>今<rt>いま</rt></ruby>、<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby><ruby>室<rt>しつ</rt></ruby>にいます。</span></p>
  </li>
  <li>
    <p class="prompt"><strong>Convert this polite sentence into an extra-modest one:</strong><br><span class="jp"><ruby>駅<rt>えき</rt></ruby>まで<ruby>車<rt>くるま</rt></ruby>で<ruby>送<rt>おく</rt></ruby>りましょうか。</span></p>
  </li>
  <li>
    <p class="prompt"><strong>Spot and fix the error:</strong><br><span class="jp"><ruby>部<rt>ぶ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>の<ruby>鈴<rt>すず</rt></ruby><ruby>木<rt>き</rt></ruby>はただいまいらっしゃいません。</span> (Said to an outside client)</p>
  </li>
</ol>

<!-- SECTION 7: ANSWER KEY -->
<h2>7. Answer Key</h2>

<div class="answer-key">

<h3>Question 1</h3>
<p class="answer-jp jp">スミスと<ruby>申<rt>もう</rt></ruby>します。カナダから<ruby>参<rt>まい</rt></ruby>りました。</p>
<p class="answer-explanation"><code>言う → 申す</code> for stating one's own name; <code>来る → 参る</code> for humbly "coming." The past tense <code>参りました</code> is correct because the arrival is a completed fact at the moment of speaking.</p>

<h3>Question 2</h3>
<p class="answer-jp jp"><ruby>明<rt>あ</rt></ruby><ruby>日<rt>した</rt></ruby>、レポートをメールでお<ruby>送<rt>おく</rt></ruby>りいたします。</p>
<p class="answer-explanation"><code>送る</code> has no special humble form, so use the productive pattern: <code>お + 送り (stem) + いたす</code>. Using <code>いたす</code> rather than <code>する</code> raises the register to business-appropriate. Both <code>お送りします</code> and <code>お送りいたします</code> are grammatically fine; the latter is more formal.</p>

<h3>Question 3</h3>
<p class="answer-jp jp"><ruby>今<rt>いま</rt></ruby>、<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby><ruby>室<rt>しつ</rt></ruby>におります。</p>
<p class="answer-explanation"><code>いる → おる</code>. The <code>-masu</code> form is <code>おります</code>. Used for describing your own location/state — common on the phone ("I'm in the meeting room right now").</p>

<h3>Question 4</h3>
<p class="answer-jp jp"><ruby>駅<rt>えき</rt></ruby>まで<ruby>車<rt>くるま</rt></ruby>でお<ruby>送<rt>おく</rt></ruby>りしましょうか。</p>
<p class="answer-explanation">Classic <code>お + stem + する</code> pattern combined with <code>〜ましょうか</code> to make a humble offer. Note: <code>送る</code> here is <em>semantically</em> doing a favor for the listener, which is the ideal situation for this pattern — humble pattern works best when your action benefits the listener.</p>

<h3>Question 5</h3>
<p class="answer-jp jp"><ruby>部<rt>ぶ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>の<ruby>鈴<rt>すず</rt></ruby><ruby>木<rt>き</rt></ruby>はただいま<ruby>席<rt>せき</rt></ruby>を<ruby>外<rt>はず</rt></ruby>しております。 / おりません。</p>
<p class="answer-explanation"><strong>Error:</strong> <code>いらっしゃいません</code> is Sonkeigo (honorific) — but Buchou Suzuki is <em>your in-group</em> relative to the outside client. You must switch to humble speech: <code>おりません</code>, or the more natural <code>席を外しております</code> ("is away from his desk"). This is the uchi-soto rule at its trickiest — elevating your own boss to an outsider is a social faux pas in Japanese.</p>

</div>

</main>
</body>
</html>

<br>


<br>
<hr>
<br>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mastering Extra Modest Expressions (Kenjougo I)</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #ffffff;
            --text-color: #1a1a1a;
            --primary-blue: #0056b3;
            --tip-bg: #e8f5e9;
            --tip-border: #2e7d32;
            --warning-bg: #ffebee;
            --warning-border: #c62828;
            --note-bg: #e3f2fd;
            --note-border: #1565c0;
            --table-border: #dddddd;
            --header-bg: #f8f9fa;
        }

        @media (prefers-color-scheme: dark) {
            :root {
                --bg-color: #121212;
                --text-color: #e0e0e0;
                --primary-blue: #64b5f6;
                --tip-bg: #1b2e1c;
                --tip-border: #4caf50;
                --warning-bg: #2c1a1a;
                --warning-border: #ef5350;
                --note-bg: #1a237e;
                --note-border: #42a5f5;
                --table-border: #333333;
                --header-bg: #1e1e1e;
            }
        }

        body {
            font-family: 'Noto Sans JP', sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--bg-color);
            max-width: 1000px;
            margin: 0 auto;
            padding: 2rem;
        }

        h1, h2, h3 {
            color: var(--primary-blue);
            border-bottom: 2px solid var(--primary-blue);
            padding-bottom: 0.5rem;
        }

        ruby rt {
            font-size: 0.65em;
            color: #888;
        }

        .callout {
            padding: 1rem;
            margin: 1.5rem 0;
            border-left: 5px solid;
            border-radius: 4px;
        }

        .tip {
            background-color: var(--tip-bg);
            border-color: var(--tip-border);
        }

        .tip::before { content: "💡 "; font-weight: bold; }

        .warning {
            background-color: var(--warning-bg);
            border-color: var(--warning-border);
        }

        .warning::before { content: "⚠️ "; font-weight: bold; }

        .context-note {
            background-color: var(--note-bg);
            border-color: var(--note-border);
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
        }

        th, td {
            border: 1px solid var(--table-border);
            padding: 0.75rem;
            vertical-align: top;
        }

        th {
            background-color: var(--header-bg);
        }

        .commentary-list {
            margin: 0.5rem 0 0 0;
            padding-left: 1.2rem;
            font-size: 0.85rem;
            color: var(--text-color);
            opacity: 0.9;
        }

        .drill-section {
            background: var(--header-bg);
            padding: 1.5rem;
            border-radius: 8px;
            margin-top: 2rem;
        }

        .answer-key {
            border-top: 2px dashed var(--table-border);
            margin-top: 3rem;
            padding-top: 1rem;
        }
    </style>
</head>
<body>

    <header>
        <h1>【 <ruby>謙<rt>けん</rt>譲<rt>じょう</rt>語<rt>ご</rt></ruby> I: Extra Modest Expressions 】</h1>
        <p>A comprehensive guide for the ambitious N3 learner.</p>
    </header>

    <section>
        <h2>【 1. Overview and Nuance 】</h2>
        <p>
            In Japanese society, respect is often expressed through the concept of "distance." <strong>Extra Modest Expressions</strong> (Kenjougo I) allow you to show respect by <strong>lowering your own status</strong> (and the status of your "in-group" or <em>Uchi</em>). By making yourself appear "smaller," you effectively elevate the person you are speaking to (the <em>Soto</em> or outside group).
        </p>
        <p>
            This isn't about being weak; it's about being culturally intelligent. Using these forms demonstrates that you understand the social hierarchy and your place within it.
        </p>
        <ul>
            <li><strong>Vs. Polite (Teineigo):</strong> <em>Masu</em> forms (like <em>Ikimasu</em>) are polite but neutral. Modest forms (like <em>Mairimasu</em>) add a layer of deep humility specifically for formal settings.</li>
            <li><strong>Vs. Honorific (Sonkeigo):</strong> While Honorifics elevate the <strong>other person's</strong> actions, Modest speech lowers <strong>your own</strong> actions.</li>
            <li><strong>The Intent:</strong> You use this when performing an action that involves, benefits, or is directed toward a superior (boss, teacher, client).</li>
        </ul>
    </section>

    <section>
        <h2>【 2. Conjugation Rules 】</h2>
        
        <h3>Special Modest Verbs</h3>
        <table>
            <thead>
                <tr>
                    <th>Dictionary Form</th>
                    <th>Extra Modest Form (Masu)</th>
                    <th>Core Meaning</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>いる</td>
                    <td><ruby>居<rt>お</rt></ruby>ります</td>
                    <td>To be / exist (animate)</td>
                </tr>
                <tr>
                    <td>ある</td>
                    <td>ございます</td>
                    <td>To exist (inanimate)</td>
                </tr>
                <tr>
                    <td>です</td>
                    <td>でございます</td>
                    <td>To be (Copula)</td>
                </tr>
                <tr>
                    <td><ruby>行<rt>い</rt></ruby>く / <ruby>来<rt>く</rt></ruby>る</td>
                    <td><ruby>参<rt>まい</rt></ruby>ります</td>
                    <td>To go / come</td>
                </tr>
                <tr>
                    <td>する</td>
                    <td><ruby>致<rt>いた</rt></ruby>します</td>
                    <td>To do</td>
                </tr>
                <tr>
                    <td>ている</td>
                    <td>ております</td>
                    <td>(Continuous action)</td>
                </tr>
                <tr>
                    <td><ruby>言<rt>い</rt></ruby>う</td>
                    <td><ruby>申<rt>もう</rt></ruby>します / <ruby>申<rt>もう</rt></ruby>し<ruby>上<rt>あ</rt></ruby>げます</td>
                    <td>To say</td>
                </tr>
                <tr>
                    <td><ruby>食<rt>た</rt></ruby>べる / <ruby>飲<rt>の</rt></ruby>む / もらう</td>
                    <td><ruby>頂<rt>いただ</rt></ruby>きます</td>
                    <td>To eat / drink / receive</td>
                </tr>
                <tr>
                    <td><ruby>見<rt>み</rt></ruby>る</td>
                    <td><ruby>拝見<rt>はいけん</rt></ruby>します</td>
                    <td>To look at</td>
                </tr>
            </tbody>
        </table>

        <h3>The General Pattern: お + Verb Stem + する</h3>
        <p>If a verb doesn't have a special "shortcut" form above, use this formula:</p>
        <div class="callout context-note">
            <strong>Formula:</strong> お + [Verb Stem] + する / <ruby>致<rt>いた</rt></ruby>す<br>
            <em>Example:</em> <ruby>持<rt>も</rt></ruby>つ (to hold) → お<ruby>持<rt>も</rt></ruby>ちします ⟦I will carry it for you⟧
        </div>
    </section>

    <section>
        <h2>【 3. Progressive Usage Ladder 】</h2>
        <table>
            <thead>
                <tr>
                    <th>Japanese (Ruby)</th>
                    <th>Natural English Translation / Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <ruby>田中<rt>たなか</rt></ruby>と<ruby>申<rt>もう</rt></ruby>します。<br>
                        よろしくお<ruby>願<rt>ねが</rt></ruby>い<ruby>致<rt>いた</rt></ruby>します。
                    </td>
                    <td>
                        I am called Tanaka. I look forward to working with you.
                        <ul class="commentary-list">
                            <li>Level 1: The gold standard for professional self-introductions.</li>
                            <li>Using <em>mousu</em> and <em>itasu</em> shows you are ready for a business environment.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        ただいま<ruby>参<rt>まい</rt></ruby>りました。
                    </td>
                    <td>
                        I have just arrived.
                        <ul class="commentary-list">
                            <li>Level 1: Replaces "Kimashita" in a formal setting.</li>
                            <li>Used immediately upon reaching a client's office or meeting spot.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ruby>三時<rt>さんじ</rt></ruby>まで<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>居<rt>お</rt></ruby>ります。
                    </td>
                    <td>
                        I will be at the office until 3 o'clock.
                        <ul class="commentary-list">
                            <li>Level 1: <em>Oru</em> replaces <em>iru</em> to lower your own existence.</li>
                            <li>Essential for stating your availability to a superior.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        お<ruby>荷物<rt>にもつ</rt></ruby>をお<ruby>持<rt>も</rt></ruby>ちします。
                    </td>
                    <td>
                        Let me carry your bags for you.
                        <ul class="commentary-list">
                            <li>Level 2: Demonstrates the humble "O + Stem + Suru" pattern.</li>
                            <li>Specifically used when <em>your</em> action provides a service to the listener.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ruby>一生<rt>いっしょう</rt>懸命<rt>けんめい</rt></ruby>、<ruby>努力<rt>どりょく</rt></ruby><ruby>致<rt>いた</rt></ruby>すつもりです。
                    </td>
                    <td>
                        I intend to put forth my humble best effort.
                        <ul class="commentary-list">
                            <li>Level 2: A powerful phrase for job interviews.</li>
                            <li><em>Itasu</em> replaces <em>suru</em> for a high-impact professional tone.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ruby>明日<rt>あした</rt></ruby>、お<ruby>会<rt>あ</rt></ruby>いするのを<ruby>楽<rt>たの</rt></ruby>しみにしています。
                    </td>
                    <td>
                        I am looking forward to meeting you tomorrow.
                        <ul class="commentary-list">
                            <li>Level 2: "O + Ai + suru" lowers your act of meeting the important person.</li>
                            <li>Warm yet professional for business partners.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        私がご<ruby>案内<rt>あんない</rt></ruby><ruby>致<rt>いた</rt></ruby>します。
                    </td>
                    <td>
                        I will guide you / show you the way.
                        <ul class="commentary-list">
                            <li>Level 2: <em>Annai</em> is a Kanji noun, so it uses "Go" instead of "O".</li>
                            <li>Commonly heard in high-end hotels or offices.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ruby>連絡<rt>れんらく</rt></ruby>をお<ruby>待<rt>ま</rt></ruby>ちしております。
                    </td>
                    <td>
                        I am humbly awaiting your contact.
                        <ul class="commentary-list">
                            <li>Level 3: Uses <em>te-orimasu</em> (the modest <em>te-iru</em>).</li>
                            <li>Perfect for closing emails where you are waiting for a decision or reply.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        そのメールは、もう<ruby>拝見<rt>はいけん</rt></ruby>しました。
                    </td>
                    <td>
                        I have already humbly looked at that email.
                        <ul class="commentary-list">
                            <li>Level 3: <em>Haiken</em> is the modest version of "looking" or "reading."</li>
                            <li>Shows you've paid careful attention to the superior's message.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ruby>教<rt>おし</rt></ruby>えて<ruby>頂<rt>いただ</rt></ruby>けませんか？
                    </td>
                    <td>
                        Could I receive the favor of you teaching me?
                        <ul class="commentary-list">
                            <li>Level 3: Uses <em>itadaku</em> (modest receive) in the potential form.</li>
                            <li>Very polite way to ask a teacher for help.</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>

    <section>
        <h2>【 4. The Comparison Table 】</h2>
        <table>
            <thead>
                <tr>
                    <th>Verb</th>
                    <th>Polite (Teineigo)</th>
                    <th>Honorific (Sonkeigo)</th>
                    <th>Modest (Kenjougo)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Vibe</strong></td>
                    <td>⟦Equality/Courtesy⟧</td>
                    <td>⟦Elevating Others⟧</td>
                    <td>⟦Lowering Yourself⟧</td>
                </tr>
                <tr>
                    <td><strong>いる</strong></td>
                    <td>います</td>
                    <td>いらっしゃる</td>
                    <td>おります</td>
                </tr>
                <tr>
                    <td><strong>行く・来る</strong></td>
                    <td>行きます・来ます</td>
                    <td>いらっしゃる</td>
                    <td>参ります</td>
                </tr>
                <tr>
                    <td><strong>する</strong></td>
                    <td>します</td>
                    <td>なさる</td>
                    <td>致します</td>
                </tr>
                <tr>
                    <td><strong>ある</strong></td>
                    <td>あります</td>
                    <td>N/A</td>
                    <td>ございます</td>
                </tr>
                <tr>
                    <td><strong>です</strong></td>
                    <td>です</td>
                    <td>N/A</td>
                    <td>でございます</td>
                </tr>
            </tbody>
        </table>
    </section>

    <section>
        <h2>【 5. The Mistake Monitor 】</h2>
        <table>
            <thead>
                <tr>
                    <th>❌ Incorrect Usage</th>
                    <th>Why it fails / Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <ruby>先生<rt>せんせい</rt></ruby>、どこに<ruby>参<rt>まい</rt></ruby>りますか？
                    </td>
                    <td>
                        <ul class="commentary-list">
                            <li><strong>Uchi-Soto Fail:</strong> You used a humble verb for your teacher's action.</li>
                            <li>This accidentally "insults" the teacher by forcing them into a lower status.</li>
                            <li>Use <em>irassharu</em> (Honorific) instead for the teacher.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        お<ruby>食<rt>た</rt></ruby>べします。
                    </td>
                    <td>
                        <ul class="commentary-list">
                            <li><strong>Grammar Fail:</strong> Don't use "O + Stem + Suru" if a special verb exists.</li>
                            <li>Eating/Drinking/Receiving must always use <em>itadaku</em>.</li>
                            <li>"Keigo double-dipping" or using the wrong pattern sounds unnatural.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ruby>友達<rt>ともだち</rt></ruby>に<ruby>致<rt>いた</rt></ruby>しました。
                    </td>
                    <td>
                        <ul class="commentary-list">
                            <li><strong>Social Mismatch:</strong> Extra Modest forms are for business/formal gaps.</li>
                            <li>Using this with friends creates a "cold distance" (<em>yoso-yososhii</em>).</li>
                            <li>Stick to casual or standard polite speech with peers.</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="callout tip">
            <strong>Social Pitfall (Uchi-Soto):</strong> Remember that Modest speech is for <em>your</em> side. Use it for your boss when talking to a client about your boss, but use Honorific speech when talking directly <em>to</em> your boss.
        </div>
    </section>

    <section class="drill-section">
        <h2>【 6. Practice Drill 】</h2>
        <ol>
            <li><strong>Convert:</strong> 「どこにいますか？」 ⟦Talking about your current location to a boss on the phone⟧</li>
            <li><strong>Translate:</strong> "I will wait for you at the station." ⟦Using <em>matsu</em> and the Modest pattern⟧</li>
            <li><strong>Convert:</strong> 「ジュースを飲みます。」 ⟦Accepting a drink from a formal host⟧</li>
            <li><strong>Translate:</strong> "My name is [Your Name]." ⟦Using the special modest verb for <em>iu</em>⟧</li>
            <li><strong>Convert:</strong> 「田中さんが言いました。」 ⟦You are Tanaka, speaking to a client about what you said earlier⟧</li>
        </ol>
    </section>

    <section class="answer-key">
        <h2>【 7. Answer Key 】</h2>
        <ul>
            <li><strong>1. どこに居りますか？</strong> ⟦Lowering your own location/existence for the boss.⟧</li>
            <li><strong>2. <ruby>駅<rt>えき</rt></ruby>でお<ruby>待<rt>ま</rt></ruby>ちします。</strong> ⟦Using the standard humble pattern for the act of waiting.⟧</li>
            <li><strong>3. ジュースを<ruby>頂<rt>いただ</rt></ruby>きます。</strong> ⟦<em>Itadaku</em> is the humble form for both eating and drinking.⟧</li>
            <li><strong>4. [Name]と<ruby>申<rt>もう</rt></ruby>します。</strong> ⟦The essential phrase for formal self-introductions.⟧</li>
            <li><strong>5. <ruby>田中<rt>たなか</rt></ruby>が<ruby>申<rt>もう</rt></ruby>しました。</strong> ⟦Crucial: Drop the "-san" from your name when being modest to outsiders!⟧</li>
        </ul>
    </section>

</body>
</html>