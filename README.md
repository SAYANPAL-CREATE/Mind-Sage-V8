# Mind-sage | A personal wellbeing space

Mind-sage is an education-adaptive, bilingual (English/Bengali), privacy-conscious wellbeing web application for students and families. This distribution retains the existing functionality and adds a photographic, substantially redesigned interface, improved menu organisation, hover/keyboard effects, and maintenance fixes.

**The application does not display a release number.** The same DM Sans, Manrope, and Noto Sans Bengali typography, plus the existing green/cream colour family, are retained.

## What's included

- **Five educational pathways**: Primary school (parent/guardian observer), high school, undergraduate, postgraduate, and Ph.D. scholars. The existing **20 stage-and-feeling questionnaires, each with 10 core questions** (200 core prompts), remain in `v4-questions.js`, with an additional contextual item during assessment. Primary-school reports are labelled guardian-observed.
- **Personal spaces**: Mind Compass, Academic Pressure, Guardian Care, Wellbeing Timeline, Mind Journal, Mood Diary, Mind Garden, Emotion Landscape, Life Journey, relaxing exercises, Bro-minD, a personal care plan, and accessible insight pages.
- **Educational content**: Literacy Centre, guided video reflection, the curated Watch & Learn links, and the established **18 sourced Bengali Swami Vivekananda Vani** selections. The YouTube links open externally on demand and are not embedded or played automatically.
- **Reports and controls**: on-device PDF summary, optional adult CSV exports, privacy information and voluntary usability feedback. Adults may save private entries within the same browser profile. Guardian/child entries are session-only under the included workflow.
- **Fresh visual interface**: photo-led landing page, easily identifiable learning-stage choices, featured photographic cards, redesigned grouped sidebar, subtle hover/focus effects, refreshed page shadows, and responsive layouts.

### Photographic assets

- `student-mindful-portrait.webp` is optimized from the photograph supplied for this website update.
- `student-calm-sunset.webp` and `parent-child-reflection.webp` are assets retained from the previous site.
- `students-supporting-each-other.webp` and `campus-conversation.webp` are illustrative generated images made for this design.
- `vivekananda-portrait.webp` is the retained artistic illustration of Swami Vivekananda, not an authentic historical photograph.

Use only imagery that you are authorized to publish. Keep all these files in the project root, next to `index.html`.

## Deploy safely to GitHub Pages

**Recommended: keep your finalised prior site intact and create a separate repository for the redesign.** For example, use `Mind-Sage-Next`; the repo name is your choice. The interface itself remains named Mind-sage.

1. Extract the ZIP. Do not upload the ZIP as one file.
2. Create a **public** GitHub repository and upload the extracted website files to its **root** (the same folder as `index.html`). Preserve all filenames and relative paths.
3. In the repository open **Settings → Pages → Build and deployment**. Select **Deploy from a branch**, branch `main`, folder `/(root)`, and Save.
4. Visit the Pages URL GitHub displays. Check the home image, `#/compass`, `#/videos`, `#/vani`, `#/guardian`, and the complete assessment workflow.
5. If the old site persists, force-refresh (**Ctrl+Shift+R**) or close and reopen any installed web app. The service-worker cache identifier has changed to encourage updates. Clearing site data can erase saved entries, so back up any adult personal data before doing so.

The same files can also be deployed as a static folder to Cloudflare Pages or Netlify. No Render instance, database or API key is required.

## What was fixed or improved

- **Direct-link startup order:** some previous pages could attempt to render before their supporting scripts were loaded when opened by a direct hash route. The app now starts after deferred scripts have completed, avoiding that failure.
- **PDF header:** the exported summary no longer shows an obsolete numbered-release label.
- **Date filenames:** downloads now use the visitor's **local date** instead of UTC.
- **PWA cache:** the new shell, CSS/JS and image resources have a new cache name.
- **Navigation:** a long single list became four expandable, context-aware groups; mobile navigation retains its overlay, and active links remain visible.
- **On-device entry separation:** browser storage names for this distribution use a unique descriptive namespace so old and redesigned deployments hosted under the same GitHub Pages origin do not silently share saved records.

This distribution does **not** automatically migrate adult diary records from earlier deployments. Use the previous application's private-data export first if you need an archive. It also does not add remote data collection, authenticated accounts, clinical diagnostics, or a live AI/chat backend.

## Check the released website

1. Open Home and check that the supplied student photograph, guardian illustration and the two campus-scene illustrations load.
2. Navigate using the left grouped sidebar. On mobile, use the menu button and close the overlay.
3. Test all five student stages. For **primary school**, verify that the adult relationship and guardian confirmation are mandatory.
4. Test an intentionally incorrect CAPTCHA, then a valid one.
5. Finish any 10-question check-in plus its contextual item and download the PDF summary.
6. Verify `#/vani` still shows the 18 Vani selections and `#/videos` retains the curated links and audience filters.
7. Test the new direct URLs `#/compass`, `#/guardian`, `#/literacy`, `#/timeline`, `#/evaluation` and `#/videos` in a fresh browser tab.
8. Verify Bengali, mobile scrolling, focus states and the browser's reduced-motion preference.
9. For adult users, test any opt-in encrypted backup on a deployed **HTTPS** site; backup encryption is for the downloaded file only, not the site's local browser storage.

## Site architecture

`index.html` loads the original application scripts and styles in order, then `visual-refresh.js` and `visual-refresh.css`. The new visual layer is deliberately separate, so the established assessment and wellbeing logic remains intact. `sw.js` and `manifest.webmanifest` enable installable/offline behavior where supported. `SOURCES.md` covers references; `ASSESSMENT-METHODS.md` describes interpretation and research limitations.

## Important boundaries

- The response index describes selected questionnaire answers. It is **not** the probability of a disorder, a diagnosis, a medical prescription, or clinical validation.
- Guardian observations cannot be treated as equivalent to a child's self-report. A caregiver may not observe everything a child experiences.
- Browser storage is not a secure central medical-record system. Anyone with access to the same browser profile may see locally saved adult entries. On shared devices use session-only functionality or clear data when appropriate.
- Building research-grade assessment instruments and clinician collaboration requires ethics approval, age-appropriate validity evaluation, secure infrastructure and permission workflows.
- External Google Fonts, original source links, support sites and YouTube require online access. Standard fallback fonts remain available if fonts cannot be loaded.
