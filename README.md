# TESMUN XIV

Official conference website for The Excelsior School Model United Nations, session XIV.

## Stack

Vite + React + TypeScript + Tailwind CSS v4 + Framer Motion

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/` and is fully static. It does not require a server, database, API routes, or runtime environment variables.

## Cloudflare Pages

1. Push this repository to GitHub.
2. Create a Cloudflare Pages project and connect the repository.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Leave the environment-variable section empty unless you add your own integrations.

`public/_redirects` provides the SPA fallback needed for direct visits to React Router paths such as `/news`, `/press`, and `/committees/hrc`.

## GitHub Pages

Build the project with `npm run build`, then publish the generated `dist/` directory using a static-hosting workflow. Configure the host to serve `index.html` for unknown application routes so client-side routing continues to work.

## Project structure

```text
src/
  App.tsx
  main.tsx
  index.css
  components/
  lib/
  pages/
public/
  images/
  _redirects
```

All content and images are bundled as static assets. External image URLs in committee data are intentionally remote and require network access in the browser; replace them with local files in `public/images/` if a fully offline build is required.
