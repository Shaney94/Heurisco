# Heurisco

Heurisco is a Vite and React single-page site generated from a Figma Make prototype and prepared for local development and production builds.

## Project Structure

- `src/app/App.tsx` coordinates the preloader, hero, menu, and contact states.
- `src/app/components/` contains the main page sections and shared UI components.
- `src/app/hooks/` contains reusable React hooks.
- `src/styles/` contains Tailwind, font, and theme styles.
- `src/imports/` contains design reference exports from the prototype process.

## Development

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Run a production build:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

Run TypeScript checks:

```sh
npm run typecheck
```
