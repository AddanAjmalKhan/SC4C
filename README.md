# Scrap Cars 4 Cash

This repo holds two separate things, kept intentionally apart:

- **[`design/`](design/)** — the live client-review site: four static homepage variations (`index.html`, `variation-2-editorial.html`, `variation-3-dispatch.html`, `variation-4.html`) with a shared switcher, built and deployed via its own `package.json`/`vercel.json`. See [design/README.md](design/README.md). This is what `main` deploys — don't touch it from here.
- **Everything else at the root** — the new Next.js rebuild, developed on the `development` branch.

## Next.js app

Bootstrapped with `create-next-app` (TypeScript, App Router, `src/` dir, Tailwind CSS v4, ESLint, `@/*` import alias).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

- `src/app/` — routes (App Router)
- `public/` — static assets
- `next.config.ts`, `eslint.config.mjs`, `tsconfig.json` — project config

```bash
npm run build   # production build
npm run lint    # eslint
```
