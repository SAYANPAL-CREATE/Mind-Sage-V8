# Mind-sage | Design and verification notes

## Visual design

The brand palette remains forest green, jade, muted sage, cream and soft gold. Typography remains DM Sans, Manrope and Noto Sans Bengali. The new interface includes:

- A split photographic homepage hero with a user-provided mindful-student portrait.
- A guardian/child family strip and five prominent category cards.
- Four large photographic feature cards and a six-tool quick-access library.
- An editorial campus conversation image panel.
- A dedicated Vivekananda Vani introduction using the existing illustrative portrait.
- A four-group navigation system with responsive mobile drawer.
- Hover-lift, image zoom, inline arrows, active states, focus outlines, and reduced-motion fallback.

## Problems identified in the preceding codebase

1. **Direct route startup:** the earlier initial navigation could run before the video library or supplementary experience functions were defined, causing a reference error on a direct bookmark.
2. **Old PDF label:** the PDF header contained an outdated numbered edition despite the application not being labelled that way elsewhere.
3. **UTC filename date:** generated filenames could show the previous/following date around midnight depending on local timezone.
4. **Crowded navigation:** a long scrollable list made it difficult to discover features on desktop and mobile.
5. **PWA cache continuity:** previously cached frontend resources could lead to the appearance of an old release after new files were uploaded.

These items have targeted fixes; they are not a claim that every possible bug in the application has been eliminated.

## Locally tested

- Standalone JavaScript syntax checks for all JS files.
- Direct navigation rendering for home, compass, video library, Vani, Guardian Care, Academic Pressure, Wellbeing Timeline, Literacy Centre, Bro-minD, Journal and evaluation pages.
- Primary-school guardian-required onboarding, CAPTCHA regeneration and completion, an 11-step pathway and generation of a readable PDF file.
- Preservation of 18 Vani entries and the video library.
- Mobile menu operation, hover/focus states and absence of horizontal overflow on a 390px-wide test viewport.
- Full-page screenshot rendering of the redesigned homepage at desktop and mobile sizes.
- Archive integrity and local resource paths.

Tests were run using an isolated Chromium browser environment with inlined assets because direct localhost browser navigation is restricted in the test environment. A final live-site check on the target GitHub Pages deployment remains necessary.
