# Mind-sage — personal details in assessment reports

The existing Mind-sage interface, font choices, green-and-cream design, approved imagery, Vani, video resources, guardian assessments, and interactive wellbeing modules are preserved.

## New report fields

After selecting one of the five educational categories, users enter:
- Student/child full name (required)
- Date of birth (already present; age calculated automatically)
- Gender (already present, including a prefer-not-to-disclose option)
- School or university/institution (optional)
- Class, course, or study year (optional)
- For primary school only: parent/guardian full name (required) and relationship to the child (required)

The details appear in the on-screen assessment report and the locally downloaded PDF, alongside the report date and assessment category. The participant may edit the details from the report screen. The existing questionnaire scores have not been changed.

## Important privacy behaviour

- Personal names, institution, class/year and DOB are retained in the active tab's JavaScript memory, not added to localStorage, the saved mood diary, or research CSV exports.
- Reloading or closing the tab clears the personal identifiers. Saved summary entries, where applicable, are not retroactively linked to names.
- PDF reports **do contain** names and related personal details. Treat downloaded PDFs as sensitive files and do not download them to a shared device without permission.
- GitHub Pages runs this code in visitors' browsers. This update does not create a backend or a central patient-record database.
- The percentage is a descriptive response index and does not establish a medical diagnosis.

## Updating GitHub Pages

1. Extract the ZIP.
2. Upload all extracted files to the root of your Mind-sage repository, replacing matching filenames.
3. Commit and wait for GitHub Pages to publish.
4. Reload the site with a hard refresh, or reopen the installed app after its service worker updates.
5. Test the student and primary-school guardian journeys, download a PDF, and verify the displayed names and ages.

The new files are `personal-details.js` and `personal-details.css`; `index.html` and `sw.js` are updated to load/cache them. No changes to the existing fonts, images or other feature scripts were needed.
