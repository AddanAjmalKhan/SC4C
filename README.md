# Scrap Cars 4 Cash — four homepage designs

Four responsive, red-themed client review designs. The original logo and photographic URLs remain on scrapcars4cash.ca. No changes were made to the live website.

| Design | Source | Vercel URL path |
| --- | --- | --- |
| 1 · Night Shift (main homepage) | `index.html` | `/` |
| 2 · Editorial | `variation-2-editorial.html` | `/variation-2-editorial` |
| 3 · Dispatch | `variation-3-dispatch.html` | `/variation-3-dispatch` |
| 4 · Fresh Start (previous homepage) | `variation-4.html` | `/variation-4` |

Each footer includes links to all four options. The previous Night Shift URL redirects to the homepage. The original logo colours are preserved; page accents, buttons and brand surfaces use red. Headings are approximately 12–15% smaller in the first three designs, with body type and related spacing reduced more gently. Variation 4 has a smaller adjustment to its already compact layout. Form fields stay at 16px for mobile usability.

## Preview locally

```sh
npm run dev
```

Open http://127.0.0.1:4173. Restart the preview or run `npm run build` after source edits. No dependencies or framework are required. The pages can also be opened directly, with their `assets` folder beside them. Internet access is required for remote images, Google Fonts, maps and external contact apps.

## Deploy on Vercel

1. Import this repository into Vercel.
2. Set **Root Directory** to the folder containing this README and `vercel.json`. If the repository itself is `scrapcar4cash`, leave Root Directory at its default. If importing the parent `Scrap-Car` folder, choose `scrapcar4cash`.
3. Use framework preset **Other**. The checked-in configuration sets build command `node scripts/build.cjs`, output directory `dist`, and clean URLs.
4. Deploy and share the four paths in the table above.

`npm run build` generates only four HTML pages and their required assets. Source scripts, documentation, QA screenshots and repository metadata are excluded from the public output. The Vercel configuration was checked against its official configuration schema. No deployment or account changes have been made by this task.

The pages have `noindex, nofollow` metadata and response headers for client review. For an approved production launch, remove those deliberately, update canonical/social URLs as needed, and verify the published business claims and enquiry workflow.

## Enquiry behaviour

The first three designs prepare a WhatsApp message using the entered vehicle details. Variation 4 offers WhatsApp and email drafts. Visitors send the request in the chosen app; no enquiry backend or booking service is connected. Calls use the original business number. QA intercepts message links so tests never send enquiries.

## Files and maintenance

- The first three designs keep their original embedded styles and scripts.
- `assets/variation-4.css` and `assets/variation-4.js` support the previous homepage.
- `assets/review.css` contains the shared review links and final colour/accessibility refinements.
- `scripts/build.cjs` generates the deployable `dist/` directory.
- `scripts/preview.cjs` serves the build with clean URL support.
- `scripts/qa.cjs` checks the four designs at desktop, laptop and mobile widths. Use an installed Playwright package (`PLAYWRIGHT_PATH` can point to it) and Chrome; run the preview server first, then `npm test`.

Generated `dist/`, `preview/` and local Vercel metadata are ignored by Git. The obsolete standalone client copy, old screenshots, duplicate Night Shift filename, root-level CSS/JS and old packaging script were removed.
