# Design QA

## Comparison target

- Source visual truth: `/Users/janspanel/Documents/Codex/2026-10-28/https-www-figma-com-design-nklzfeqkfuxewvvsd3pc4j/work/figma-reference.png` (Figma node `0:1`, 1440 × 1277 PNG).
- Implementation: browser-rendered local prototype at `http://127.0.0.1:4173/`.
- Desktop comparison state: top of page, default nav state, 1440 × 1277 CSS viewport requested; browser capture reviewed after image load.
- Mobile comparison state: top of page and expanded navigation, 390 × 844 CSS viewport; browser capture reviewed after image load.
- Density normalization: source is 1× exported Figma render; browser captures were evaluated at matching CSS viewport, without device framing.

## Full-view and focused comparison evidence

The full source view and browser-rendered desktop view were inspected for composition, hero crop, overlay, header, partner strip, and card region. Focused review covered the hero copy/image overlap, header controls, logo row, and the three reason cards. The browser capture is transient in this environment, so its stable evidence location is the local implementation URL above rather than a persisted PNG file.

## Findings and comparison history

### Iteration 1 — fixed

- [P1] Hero copy was painted below the photo at wide desktop width.
  - Evidence: initial desktop browser capture clipped the right side of the headline where it overlapped the hero image.
  - Fix: established a stacking context for `.hero-copy` and placed `.hero-image` beneath it.
  - Post-fix: headline, description, and CTA group render fully above the intended dark image overlay.

- [P1] Mobile hero image collapsed because it could shrink in the flex stack.
  - Evidence: initial 390px browser capture showed only a thin image strip above the headline.
  - Fix: made `.hero-image` a non-shrinking 390px flex item on mobile.
  - Post-fix: mobile capture shows the full hero portrait followed by readable stacked content.

## Required fidelity surfaces

- Fonts and typography: Inter is used throughout, with compact medium-weight nav text, 50px desktop display type, and responsive mobile wrapping. The headline hierarchy, copy size, CTA labels, and card type are preserved.
- Spacing and layout rhythm: the 68px desktop header, two-column hero, copy/image overlap, partner strip, 3-column cards, margins, and card radii match the source composition. Mobile intentionally stacks the source content without overlap.
- Colors and visual tokens: black canvas, off-white type/buttons, deep navy cards, bright blue icon circles, fine dividers, and the dark photo edge treatment are mapped from the source.
- Image quality and asset fidelity: the original Figma hero portrait and provided partner-logo assets are used locally. No hero, logo, or illustration was redrawn with CSS or inline SVG.
- Copy and content: all visible Czech copy from the source was preserved; the added contact area only supplies an endpoint for the source contact controls.

## Interactions and resilience checked

- Hero CTAs and navigation smoothly move to their relevant sections.
- Mobile menu opens and exposes all five navigation actions.
- Desktop 1440px, medium layout, and 390px mobile layout were browser-tested.
- Browser console error check returned no errors.
- Production build and Sites package test both passed.

## Follow-up polish

- [P3] The supplied partner logo bitmaps vary in native aspect ratio, so their optical size is normalized with constrained wrappers; swapping in SVG originals would further sharpen the smallest marks.

## Implementation checklist

- [x] Use original Figma hero and logo assets.
- [x] Implement responsive header, hero, CTA behavior, partner strip, and benefit cards.
- [x] Fix wide-screen hero stacking and mobile hero sizing.
- [x] Verify browser interactions, console, production build, and package tests.

final result: passed
