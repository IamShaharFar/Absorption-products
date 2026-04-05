# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hebrew-language (RTL) e-commerce product catalog for "רום שיווק" (Rom Shivuk) — an adult absorption/incontinence products retailer. Static product data, no backend API. Deployed to AWS S3 as a static site at `rom-shivuk.co.il`.

## Commands

- `npm start` — dev server
- `npm run build` — production build
- `npm test` — run tests (Jest + React Testing Library)
- `CI=false npm run build` — build ignoring warnings (used in CI)

## Architecture

**Create React App** project with React 18, using **HashRouter** (not BrowserRouter) for S3 static hosting compatibility.

### State Management
Redux Toolkit with a single `products` slice. All product data is hardcoded in `src/redux/productsSlice.js` (no API calls). The store is configured in `src/store.js`.

### Routing
Two routes defined in `App.js`:
- `/` — Home page (product grid)
- `/products/:id` — Single product view

### Key Patterns
- **Search/filter** lives in `App.js` as local state (`filteredProductes`), filtering the Redux product list by name and passing results down to `Home`.
- **NavBar** has its own duplicate search filtering logic (used for a commented-out search results dropdown).
- Category navigation buttons in NavBar are currently non-functional (no filtering wired up).
- Uses `accessibility-react` library for an accessibility widget.
- Uses `react-bootstrap` and `react-multi-carousel` for UI components.

### Styling
Component-specific CSS files in `src/components/styles/`. RTL direction is set per-element (e.g., `dir="rtl"` on inputs).

## Deployment

GitHub Actions workflow (`.github/workflows/main.yml`) on push to `main`:
1. Builds with Node 18.14
2. Syncs `./build` to S3 bucket `s3://rom-shivuk.co.il/` (eu-west-1)

AWS credentials are stored as GitHub secrets (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`).

## Notes

- The `build/` directory is committed to the repo.
- Product images are hosted externally on Wix static media URLs.
- Product data includes Hebrew text — search is substring-based (`String.includes`), not fuzzy.
