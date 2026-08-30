# los ZonderPan de Peniche — Design System

A weight tracker with a fintech-grade chassis. One number a day, a seven-day average drawn
through the noise, and no opinions offered. The visual system is built on a deep-charcoal ink,
a single teal CTA, and a gradient-mesh wash across the upper third of every marketing surface.

## Sources

| Source | Detail |
|---|---|
| `uploads/Los ZonderPan de Peniche Design System.md` | The complete brand spec (colors, type, spacing, radii, elevation, component definitions, do's/don'ts, responsive rules). **This file is the ground truth for every value in this system.** |
| Company description (chat) | "Weight tracker — los ZonderPan de Peniche" |

No codebase, Figma file, deck, screenshot, logo, font binary or icon set was supplied. Everything
here is derived from the spec above; substitutions and gaps are flagged under **Gaps &
substitutions**.

## Products

1. **Marketing site** — gradient-mesh hero, feature bands on the cool off-white, a cream interlude,
   4-up pricing with an inverted featured tier. `ui_kits/marketing/`
2. **Tracker app (dashboard track)** — the polarity flip: a deep-charcoal app shell with white cards,
   a weigh-in composer, trend chart, history table and settings. `ui_kits/tracker_app/`

## Content fundamentals

**Voice.** Dry, plain, faintly Northern-European. The product's whole promise is that it does not
nag, so the copy never cheers, never scolds, and never uses exclamation marks. It states a fact and
stops.

- **Person.** Second person for instructions to the user ("Weigh at the same hour", "Your data,
  leaving"); first-person plural for what the product does ("We smooth it, show the direction, and
  stay out of the way"). Never "I".
- **Casing.** Sentence case everywhere — headlines, buttons, table headers, nav. The only uppercase
  is the 10px `micro-cap` eyebrow (`WEEKLY AVERAGE`, `METHOD`, `NEW`).
- **Brand name.** Always `los ZonderPan de Peniche` — lowercase `los`, capital `ZonderPan`,
  lowercase `de`. In lockups the middle word carries weight 400 while the rest stays 300.
- **Length.** Headlines under nine words. Body paragraphs two sentences, three at most.
- **Numbers.** Always numerals, always tabular, one decimal for weight (`80.6 kg`), two for rates
  (`−0.14 / week`). Use the true minus sign `−` (U+2212), not a hyphen. Currency as `€6`.
- **Emoji.** None. Ever. Status is carried by a `PillTag` or a Lucide glyph.
- **Punctuation.** Em-dash for asides, `·` as a separator in captions and legal lines. No ALL-CAPS
  emphasis, no bold inside body copy.

Examples that are on-brand:

> Weigh in. Then get on with your day.
> A body is not a spreadsheet, but it does keep records.
> Four of the last seven daily numbers went up. The average went down. Read the average.
> Cheaper than the scale you already own.
> Renews 3 Sep. Cancel in two clicks.

Off-brand: "You've got this! 🎉", "Crush your goals", "Oops — something went wrong!", "SAVE 50%".

## Visual foundations

**Colour.** Two roles carry the system. Teal `--primary` `#0d9488` is the CTA and link colour and
appears sparingly — one filled pill per band. Deep charcoal `--ink` `#111827` is universal body text;
`--brand-dark-900` `#0f172a` fills the featured pricing tier and the whole app shell. Rose, magenta
and amber exist only inside the gradient mesh and as chart accents; they are never buttons and never
type at body size. Maximum two background colours per surface: white plus either `--canvas-soft`
(cool) or `--canvas-cream` (warm).

**Type.** Inter Variable, weight 300 for everything display through body, weight 400 only for
buttons, captions and eyebrows. Negative tracking is the signature: −1.4px at 56px scaling to −0.2px
at 20px, zero at body sizes. `font-feature-settings: "ss01"` is set globally on `body`; `"tnum"` is
applied per-element to every numeric cell. Never push display weight to 400 — the editorial air
collapses.

**Backgrounds.** The gradient mesh is the brand's one decorative device: cream → amber → seafoam →
teal → rose → magenta, blurred across the upper third, edge-to-edge, fading out at 62% height. It is
atmospheric colour, not a hero image — there is no photography programme, no illustration set, no
repeating pattern or texture, and no grain. Below the mesh the page returns to flat white. Product
mockups, not pictures, carry every feature argument.

**Spacing & layout.** 8px base with 2/4/12 sub-tokens. Marketing sections 64–96px vertical padding,
app surfaces 32–48px. Content centres in a 1200px container while the mesh runs edge-to-edge. Cards
pad 32px; mockup shells 24px. The app shell is a fixed 232px sidebar plus a fluid main column with a
sticky-feeling top bar; nothing else is fixed or floating.

**Shape.** Radii 4 / 6 / 8 / 12 / 16 / pill. Buttons and tags are always full pills at exactly
8px 16px padding. Inputs 6px. Cards 12px. Mockup chrome 16px. Rounded rectangles are never
substituted for pills.

**Cards.** White fill, 1px `--hairline` border, 12px radius, optional Level 1 lift. The cream card
drops the border. The featured pricing card and the app shell invert to charcoal with a hairline of
`rgba(255,255,255,0.08)`. Mockup panels always carry the Level 2 shadow — they are the only elements
that read as floating.

**Elevation.** Level 0 flat · Level 1 `rgba(15,23,42,.08) 0 1px 3px` for card lift · Level 2
`rgba(15,23,42,.08) 0 8px 24px, rgba(15,23,42,.04) 0 2px 6px` for mockups and floating panels ·
Level 3 is the mesh itself. There are no inner shadows and no glows.

**Borders & dividers.** 1px only. `--hairline` `#e2e8f0` on cards and tables, `--hairline-input`
`#94a3b8` on form fields (cooler and darker so fields read as interactive), swapping to
`--primary` on focus.

**Transparency & blur.** Blur exists in exactly one place: the mesh (38–40px). On dark surfaces,
depth is made with white at 3–10% opacity rather than a second grey. No frosted-glass panels, no
backdrop-filter chrome, no protection gradients — text always sits on a solid fill, so capsules and
scrims are unnecessary.

**Motion.** Restrained and short: 160ms colour/border transitions on interactive elements, standard
ease. Nothing bounces, nothing springs, nothing scales on press, and there are no entrance
animations, parallax or scroll-triggered reveals. The mesh is static.

**Hover & press.** Hover deepens rather than lightens: `--primary` → `--primary-deep`; secondary
buttons fill with `--primary-bg-subdued-hover`; ghost items pick up `--canvas-soft`; dark-shell nav
items pick up `rgba(255,255,255,.07)`. Press deepens once more to `--primary-press`. No opacity
fades, no transforms. Disabled is 40% opacity with `not-allowed`.

**Imagery vibe.** If a photograph must appear (logo strip, rare case study) it is cool, flat and
inset 4:3 with no shadow. Everything else is UI: charcoal panels, teal trend lines, tabular numbers.

## Iconography

No icon font, sprite or SVG set was supplied with the brand material, and the spec does not name one.

- **Substitution (flagged):** the system uses **Lucide** (via CDN, `lucide-static@0.544.0`) — a 24px
  grid, 2px round-cap stroke set that matches the thin, unfussy type. The `Icon` component masks the
  CDN SVG so the glyph inherits `currentColor` and can be tinted with any token.
- Icons are functional only: sidebar navigation, inline metric affordances (`trending-down` beside a
  delta), and button leading glyphs. They are never decorative and never coloured outside
  `currentColor` / `--primary` / `--primary-soft`.
- Sizes: 14px inside `sm` buttons and captions, 16–18px in navigation and lists, 20–22px as a
  feature-card marker. Stroke weight is never changed.
- **Emoji are never used.** Unicode is used only for typographic characters — `−` (true minus), `·`
  (separator), `→` (link affordance), `Δ` (delta column header) — not as icons.
- **Logo:** none was supplied. The brand appears as a type wordmark (`guidelines/wordmark.card.html`)
  and `assets/` therefore contains no mark. Do not draw one.

## Gaps & substitutions

1. **Fonts** — no binaries supplied. `Inter Variable` is loaded from Google Fonts. Drop the licensed
   files into `assets/fonts/` and point `tokens/fonts.css` at them when available.
2. **Icons** — Lucide substituted for an undefined icon set (see above).
3. **Logo / brand mark** — absent by design; wordmark only.
4. **Gradient mesh** — the spec says the real mesh is SVG/blob artwork. Approximated as layered
   blurred radial gradients in `--mesh-backdrop`. Replace with `url(...)` when the artwork arrives.
5. **Semantic palette** — the spec declares none for marketing; `--ruby` stands in for negative
   deltas inside the app only.
6. **Screen content** — with no codebase or Figma file, the UI kits are faithful to the spec's rules
   but their content is representative, not a copy of a shipped view.

## Intentional additions

- `Icon` — a wrapper for the substituted Lucide set; nothing in the spec covers glyph rendering.
- `PricingCard` — a composition of the spec's `card-pricing` / `card-pricing-featured` definitions,
  so the tier layout (name → tabular price → feature list → pinned CTA) is not re-derived per use.
- `MockupFrame` — the spec's "Composited Dashboard Mockup" signature component, given a shell.

Everything else maps 1:1 to a named component in the spec.

## Index

**Root**
- `styles.css` — the single entry point consumers link (`@import` list only).
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skills wrapper.
- `readme.md` — this file.

**Tokens** (`tokens/`) — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` ·
`radius.css` · `elevation.css` · `base.css`

**Components**
- `components/actions/` — **Button**, **TextLink**
- `components/forms/` — **TextInput**
- `components/surfaces/` — **Card**, **PricingCard**
- `components/navigation/` — **NavBar**, **Footer**
- `components/tags/` — **PillTag**
- `components/media/** — **Icon**
- `components/signature/` — **GradientMesh**, **MockupFrame**

**UI kits**
- `ui_kits/marketing/` — Home · Pricing · Method
- `ui_kits/tracker_app/` — Today · Trend · History · Settings

**Foundation cards** (`guidelines/`) — colour (primary, ink, surface, accent), type (display,
heading, body, tabular, eyebrow), spacing (scale, in-use, radii, elevation), brand (mesh, wordmark,
states).

**Assets** (`assets/`) — see `assets/README.md`. No logo or icon binaries were supplied.
