# The A/C Doctor

Marketing website for **The A/C Doctor, Heating and Air Conditioning** (San Bernardino & LA County).
Single-page React app built with Vite and Tailwind CSS.

## Local development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Deployment

The production build is published to GitHub Pages from the `gh-pages` branch.

```bash
npm run deploy   # build + push dist/ to the gh-pages branch
```

In the repo, set **Settings to Pages to Source: Deploy from a branch to `gh-pages` / root**
(one-time). The site then serves at https://thinkfirststudios.github.io/theacdoctor/

The Vite `base` is set to `./` (relative paths), so the build runs correctly on a
GitHub Pages project subpath, a custom domain, or any static host.

### Optional: automated deploys via GitHub Actions

For push-to-deploy via CI, add a Pages workflow under `.github/workflows/`. Pushing
workflow files requires a Personal Access Token with the `workflow` scope.

## Notes for going live

- Swap the placeholder image slots for real photos (they use descriptive `alt` text).
- Wire the contact form to a real endpoint (currently a stubbed success state).
- Replace the financing CTA with the real Synchrony application link.
- Verify the Google review quotes before publishing.

---

Website by ThinkFirst Studios
