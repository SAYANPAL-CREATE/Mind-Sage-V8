# Mind-sage: Assessment Design & Research Considerations

## Questionnaire architecture

The application separates users into five stages: primary-school guardians, high-school students, undergraduate students, postgraduate students and doctoral scholars. Each stage has separate sets of ten prompts for the user's selected concern: anxious, depressed/low mood, stressed or confused. The sets are in English and Bengali. A final stage- and response-context-sensitive follow-up is not included in the numerical index.

### Original reflection responses

The current ten core prompts use four response options scored 0–3. The user-facing index is `sum(item responses) / 30 × 100`, rounded to the nearest integer. Its percentages reflect response frequency only. The three descriptive groups are partitions of the ten items, not independently validated subscales. Do not interpret these values as the probability that someone has a disorder, a diagnosis, a medical treatment indication or a direct comparison across stage-specific instruments.

### Guardian observations

For primary-school children, an adult guardian confirms their relationship and answers regarding observed behaviours over the previous two weeks. Guardians may not know a child's private feelings. Guardian responses are not interchangeable with self-report, and no scores should be compared directly across reporters without separate measurement research.

### Academic Pressure Reflection

Six additional stage-specific prompts use 0–4 frequency responses (never, rarely, sometimes, often, very often) about the previous two weeks. The bar-chart values are individual item frequencies, not a clinical scale, diagnostic test, learned prediction or validated total severity score. An optional daily care recommendation is generated from the most frequently indicated domain through visible deterministic rules, not a trained AI model. These prompts are new, developer-authored content requiring expert and participant review.

### Usability Evaluation

Eight original statements use 1–5 agreement choices to assess website navigation, comprehension, clarity, transparency, privacy and comfort. The simple exported mean is descriptive only. The checklist is not SUS or any other standardized validated scale. CSV is generated locally only for an adult, and the site does not receive or aggregate responses.

## Validation tasks before an academic study

1. Define constructs, intended populations, use context, reporters, scoring, languages and intended claims.
2. Have qualified experts independently assess item relevance, coverage, clarity, age appropriateness and safety.
3. Conduct cognitive interviews with representatives of each stage and with guardians, ensuring assent and guardian permission where required.
4. Translate, back-translate or otherwise evaluate cross-language equivalence, including Bengali comprehension.
5. Pre-register the proposed study and define sampling, comparisons, missing-data rules and exclusion criteria.
6. Test reliability, content validity, factor structure and discriminant/convergent properties where warranted and supported by sample size.
7. Consider a separately reviewed comparison with recognized age-appropriate instruments if seeking any clinical screening claims.
8. Audit accessibility (e.g. WCAG 2.2), safeguarding, privacy and support escalation.
9. Obtain institutional ethics approval and appropriate consent/assent before collecting any participant data, particularly from minors.
10. Disclose uncertainty and limitations in reports; avoid generalizing from self-selected website visitors.

## Data handling

The default site stores no participant data on a server. Adults can selectively save entries in local browser storage; the primary-school child profile and other minors use session-only personal state. Browser storage is not a secure medical-record database. Adult encrypted backup export protects the download with a user-chosen passphrase, but does not encrypt browser-local data at rest. Exported files are under user control and may be shared externally at their discretion.

## Public support

In India, Tele-MANAS is accessible at 14416 for round-the-clock support; emergency service number 112 and Child Helpline 1098 are also shown. Users with urgent safety concerns should receive clear human-support options.
