# Alpha Phi Alpha Fraternity, Inc. — Alpha Theta Chapter website

A static website: plain HTML, CSS and JavaScript. It has no build step and no dependencies. You can open `index.html` directly in a browser, or upload the whole folder to any static host (GitHub Pages, Netlify, the university's web space, etc.).

## File structure

```
index.html          Home
members.html        Current Members
history.html        Chapter History
membership.html     Becoming a Member
activities.html     Activities
css/styles.css      All styles. Brand colors and fonts are defined as variables at the top.
js/site.js          Mobile menu, plus code that builds member and activity cards from /data
data/members.js     ← EDIT: Executive Board, active brothers, historical directory
data/activities.js  ← EDIT: events, news and ongoing programs
images/             Photos and the Coat of Arms
```

## Routine updates (no coding needed)

| To change…                       | Edit this file                         |
|----------------------------------|----------------------------------------|
| Officers or the member roster    | `data/members.js`                      |
| Roster year (e.g. "2026–2027")   | `CHAPTER_ROSTER_TERM` in `data/members.js` |
| Events, news, programs           | `data/activities.js`. Dates can be a full date, a month (`2025-11`) or a year (`2014`); the archive groups them by year automatically. |
| Recognition on the home page     | `index.html` (look for `CHAPTER UPDATE`) |
| UIowa membership policies        | `membership.html`, section `#uiowa`. Re-check against fsl.uiowa.edu each year. |
| Timeline milestones, presidents  | `history.html` (look for `CHAPTER UPDATE`) |
| Chapter contact email            | The footer of each `.html` page (look for `CHAPTER UPDATE`) |

To find every spot that still needs chapter input, search the project for `CHAPTER UPDATE` and `To be added`.

**Member photos:** save square images (400×400 or larger) in `images/members/` and set `photo` and `alt` on that member's entry. Get each brother's consent before you post his photo (Brand Guidelines, Social Media: Privacy).

**Activity photos:** Instagram images are not bundled with the site. Save the chapter's own photo in `images/activities/` and set `image` and `alt` on the entry.

## Brand compliance notes

The site follows the Alpha Phi Alpha Brand Guidelines (April 2025):

- **Colors:** Old Gold `#B8860B` and Black are the primary colors. White and Cream `#FAF0BE` are the complementary colors. All four are CSS variables in `css/styles.css`.
- **Contrast:** Old Gold is used for text only on black, where its contrast ratio is about 6.6:1. On white it falls below the WCAG AA requirement for body text, so on light backgrounds it is limited to accents (rules, borders, button fills with black text).
- **Typography:** Gotham is the primary typeface and Adobe Caslon the secondary. Both are licensed fonts, so the site falls back to Montserrat and Libre Caslon Text from Google Fonts. If the chapter has web licenses, load them and the font stacks will use them automatically.
- **Logo:** the Coat of Arms is shown only on black, an official color. It is never outlined, recolored, or stretched. The Shield is reserved for the General Office and is not used.
- **Nomenclature:** the Fraternity's name always comes before the chapter name ("Alpha Phi Alpha Fraternity, Incorporated, Alpha Theta Chapter"). No monikers are attached to the chapter name. AΦA® and Alpha Phi Alpha Fraternity, Inc.® always carry the registration mark.
- **Content approval:** the guidelines call for a content-approval process before anything is published. Have the appropriate chapter officer review the site before launch.

## Sources

- *District of Iowa: History Book*, Volume 1 (2019), compiled by Brother Anthony Ferguson, Jr. This is the source for the history, the charter members, the presidents, the directory, and the historical photographs.
- https://apa1906.net/membership/ is the source for eligibility and intake.
- @atheta_alphas on Instagram is the source for activities posted from October 2025 through October 2026.
- The archived chapter website (web.archive.org, June 2024) supplied the home-page welcome text.
