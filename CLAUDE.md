# my-blog — Alex Mezquita Portfolio Site

## What this is

A personal portfolio/landing page (single page, `/` only) for Alex Mezquita, a
full-stack web developer. It showcases featured projects (Billcrest, an
e-commerce template, a movie search app), a career/learning timeline, skills,
and a CV download. Bilingual (English/French) with persisted dark mode.

There is no backend, no routing, and no data layer — it's a static
Create React App build that reads/writes only `localStorage` (theme + language
preference).

## Tech stack

- **React 18** (function components + hooks only, no class components)
- **Create React App** (`react-scripts`) — not Vite, not Next.js
- **JavaScript** — no TypeScript anywhere in this repo
- **Tailwind CSS** (v3, via `tailwind.config.js`, `darkMode: "class"`) for
  almost all styling
- **MUI** (`@mui/material`, `@mui/icons-material`) — used for icons only
  (`Launch`, `GitHub`, `LightMode`/`DarkMode`, `FileDownload`, etc.)
- **styled-components** + `@mui/styled-engine-sc` — present in deps but
  barely used; Tailwind is the dominant styling approach
- **i18next** / **react-i18next** for EN/FR translations
- **react-vertical-timeline-component** for the career timeline UI
- Testing libs (`@testing-library/react`, `jest-dom`, `user-event`) are
  installed via CRA defaults but **no test files currently exist** in `src/`.
  Testing is not a practiced convention here — don't assume tests are
  required for changes.

## Key commands

```bash
npm start    # dev server, http://localhost:3000, hot reload
npm run build  # production build to /build
npm test     # CRA/Jest watch mode (no test files exist yet, but the runner works)
```

There is no separate lint/typecheck script — ESLint runs as part of CRA's
dev/build pipeline using the `eslintConfig` block in `package.json`
(`react-app`, `react-app/jest`). There is no Prettier config in this repo.

## Architecture rules (do not violate)

- **State management is React Context only** — `ModeContext` (dark mode) and
  `LanContext` (language) are both created and provided in `src/App.js`.
  There is no Redux/Zustand/etc. despite a `redux.svg` skill icon existing in
  assets — that icon is decorative (lists a skill), not a dependency in use.
  - `src/contexts/lanContext.js` is dead code — it's an empty file left over
    from a previous approach. The real `LanContext` lives in `App.js`. Don't
    import from `contexts/lanContext.js`; don't add code there. If you're
    touching language/theme state, do it in `App.js` alongside the existing
    contexts.
- **No data fetching layer** — there is no `api/` folder, no `fetch`/`axios`
  usage anywhere. This is a static showcase site; don't introduce a fetch
  layer unless the user explicitly asks for one.
- **Styling is Tailwind-first.** Use utility classes in `className`, matching
  the existing dark-mode pattern (`dark:` variants paired with light
  defaults, e.g. `dark:bg-[#1f252e] bg-white`). Don't introduce new
  styled-components for new work — it's a legacy dependency, not the
  convention to extend.
- **Project "popup" pattern**: each showcased project has two files —
  `src/components/projects/<name>.js` (the modal/overlay shell, takes
  `open`/`close` props) and `src/components/projects/<name>Content.js` (the
  actual content rendered inside it). Follow this split for any new project
  added to the portfolio.
- **Card pattern**: `src/components/globals/Card.js` is the shared project
  card component, driven entirely by props (`title`, `techs`, `image`,
  `handlePopup`, `liveUrl`, `githubUrl`, `featured`). Don't fork a new card
  component for a new project — add props to `Card.js` if new behavior is
  needed.
- **Translations**: any user-facing copy must go through `t("key")` from
  `react-i18next`, with matching keys added to **both**
  `src/i18n/locales/en/translations.json` and
  `src/i18n/locales/fr/translations.json`. Never hardcode user-facing English
  strings in components (existing exceptions like literal "Billcrest" in
  `billcrest.js` are legacy, not the pattern to copy).
- **File naming**: most component files are lowercase (`welcome.js`,
  `topbar.js`, `billcrestContent.js`); `globals/Card.js` is the one
  capitalized exception. Match the lowercase convention for new files unless
  you're adding to `globals/` where `Card.js` already sets a capitalized
  precedent — prefer lowercase by default.
- **Assets** live under `src/components/assets/` (icons in
  `assets/icons/`, per-project screenshots in their own subfolder, e.g.
  `assets/billcrest/`). Keep new project images in a similarly named
  subfolder rather than dumping into `icons/`.

## Directory structure

```
public/                  CRA static assets, index.html (meta tags, theme-flash script)
src/
  App.js                 Root component — owns ModeContext/LanContext, page layout
  index.js               ReactDOM entry point
  index.css              Global styles, Tailwind directives, custom animations
  i18n/
    config.js            i18next setup (EN/FR resources)
    locales/en|fr/translations.json
  contexts/
    lanContext.js         Dead/empty — see Architecture rules
  components/
    index/                Page sections: welcome, project, timeline, footer,
                           topbar, title, language, switcher (theme toggle)
    projects/              Per-project modal + content pairs (billcrest,
                           ecommerce, movieSearch)
    globals/                Shared pieces: Card.js, developmentTag.js
    assets/                 Images/icons, grouped by project or "icons/"
tailwind.config.js
package.json
```

## Git workflow

- Single-branch workflow: commits go **directly to `main`**, no feature
  branches or PR process in practice (history confirms this — two old
  branches `new`/`new2` exist but are stale/abandoned, not an active
  convention).
- Commit messages in this repo are short, lowercase, imperative/descriptive
  phrases (e.g. `renamed icons`, `colors fixed based on feedback`, `hover on
  touch screens disabled`). Match that tone — no Conventional Commits
  prefixes (`feat:`, `fix:`) are used here.
- Push to `origin/main` directly when a change is ready; there's no CI gate
  to wait on.

## Testing

- No test files exist in `src/`. `@testing-library/react`, `jest-dom`, and
  `user-event` are installed (CRA defaults) and `npm test` works, but writing
  tests is not an established convention for this project — don't add test
  files unless the user asks for them.
