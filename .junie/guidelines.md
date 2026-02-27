# Project Development Guidelines (template-nextjs)

This document captures project-specific information to streamline development, testing, and troubleshooting. It assumes familiarity with Next.js, TypeScript, Jest, Cypress, ESLint, and Docker.

## Project Overview

- Purpose: A production-ready Next.js template that demonstrates modern app patterns with App Router, internationalization, authentication, theming, testing, and Dockerized deployment.
- Architecture:
  - App Router with localized segments: `src/app/[locale]/(public|secured)/...`.
  - UI Provider centralizes Chakra UI, color mode, and app-wide theming at `src/components/ui/provider` and is wired in public/secured layouts.
  - Internationalization with `next-intl`; locales are defined in a single routing source and used across middleware and app routes.
  - Authentication with NextAuth (Auth0 provider compatible). Public/secured route groups allow gated content patterns.
  - State management with `zustand`; data utilities include `dayjs`, `uuid`, and `@tanstack/react-table` for tables.
  - Styling/UI: Chakra UI, Inter variable font, and `next-themes` for color mode.
  - Optional data layer: `mongodb` driver included (provide `DATABASE_URL` to enable runtime usage).
- Tooling & Developer Experience:
  - Testing: Jest for unit/logic tests; Cypress for E2E and component testing; Storybook for UI development.
  - Linting/formatting: ESLint flat config with strong import and style rules.
  - Git hygiene: Husky hooks (pre-commit runs tests), Commitlint with Conventional Commits and enforced Jira-style scope.
- Build & Deployment:
  - Docker multi-stage image using Next.js standalone output for small runtime images.
  - Node.js >= 20.11 recommended. Environment variables are used for auth, database, and public client configs (`NEXT_PUBLIC_*`).
- Key directories/files:
  - `src/app/[locale]/(public|secured)/...` — route groups with localized segments.
  - `src/components/ui/provider` — Chakra UI/theming provider.
  - `src/i18n/*` — i18n utilities (routing, request helpers).
  - `middleware.ts` — locale/auth handling (if present in the project root or `src/`).


## 1) Build and Configuration

- Node.js runtime
  - Recommend Node >= 20.11 (ESLint config relies on `import.meta.dirname`, available since Node 20.11). Next.js 15 also supports Node 18.18+, but Node 20.11+ is safest.
- Package manager
  - Use npm (package-lock.json is committed; Docker uses `npm ci`).
- Next.js configuration
  - `next.config.mjs` uses `next-intl/plugin` and `output: 'standalone'` for Docker.
  - Experimental: `optimizePackageImports: ["@chakra-ui/react"]`.
  - Webpack externals are added client-side to avoid bundling optional native deps: `bufferutil`, `utf-8-validate`.
- TypeScript
  - Path alias `@/*` => `./src/*` (see tsconfig.json). Next/Jest is aware of Next config and TS paths via `next/jest`.
- i18n and App Router
  - Route segment: `src/app/[locale]/...` with `generateStaticParams()` from `routing.locales`.
  - `setRequestLocale(locale)` and `NextIntlClientProvider` are used in layouts. Keep `routing.ts` as the single source of supported locales.
- Scripts (package.json)
  - Dev: `npm run dev` (Next dev with `--turbo`). If Turbo causes issues, use `npm run dev:old`.
  - Build: `npm run build`; Start: `npm start`.
  - Lint: `npm run lint` and `npm run lint:fix`.
  - Storybook: `npm run storybook`.
- Env vars (not exhaustive, see Dockerfile ARGS/ENVs)
  - `GOOGLE_CLOUD_PROJECT_ID`, `NEXTAUTH_SECRET`, `AUTH0_*`, `NEXTAUTH_URL`, `DATABASE_URL`.
  - `NEXT_PUBLIC_BACKEND_*` for client-side endpoints. Ensure public envs are prefixed with `NEXT_PUBLIC_`.

### Docker

- Image is multi-stage and uses the Next.js standalone output.
- Build example (pass required args or provide defaults):
  - `docker build -t template-nextjs:local --build-arg NEXTAUTH_SECRET=dev_secret --build-arg NEXTAUTH_URL=http://localhost:3000 .`
- Run: `docker run -p 3000:3000 template-nextjs:local`
- Telemetry is disabled during build (`NEXT_TELEMETRY_DISABLED=1`); at runtime you can disable by setting `NEXT_TELEMETRY_DISABLED=1`.
- Note: For production, prefer injecting secrets as environment variables at runtime (e.g., `docker run -e NEXTAUTH_SECRET=...`) or via your orchestrator/secrets manager, rather than build-time ARGs.

## 2) Testing

### 2.1 Jest (unit/logic tests)

- Config: `jest.config.mjs` uses `next/jest` with `testEnvironment: 'jest-environment-jsdom'`.
- Command: `npm test` runs in CI mode, collects coverage and passes with no tests (`--passWithNoTests`).
- Test locations: Jest will pick up `**/*.test.{ts,tsx,js,jsx,mjs}` by default. Place tests under `tests/` or beside sources.
- TypeScript and path alias: `next/jest` loads Next.js config and TS settings, so `@/` imports work without extra mapping in most cases. If you add non-standard aliases, add `moduleNameMapper` in `jest.config.mjs` accordingly.
- DOM APIs: jsdom is active. For React component tests, consider Cypress Component Testing or add a Jest setup file with React Testing Library if needed.

#### Creating and running a simple Jest test (verified)

During preparation of this guide, we validated the Jest pipeline by adding a temporary test at `tests/demo.temp.test.ts`:

```ts
describe('demo temp test', () => {
  it('adds numbers correctly', () => {
    expect(1 + 1).toBe(2);
  });

  it('works with async/await', async () => {
    const value = await Promise.resolve('ok');
    expect(value).toBe('ok');
  });
});
```

- Run: `npm test`
- Result: the suite passed locally. The file was then removed to keep the repo clean, as it was only for demonstration.

Tips:
- If you need setup (e.g., RTL, custom matchers), add `setupFilesAfterEnv` in `jest.config.mjs` and point to a `jest.setup.ts`.
- When testing code that reads `process.env`, define envs in the test or mock them.

### 2.2 Cypress (E2E and Component)

- Config: `cypress.config.ts` includes both e2e and component testing. Component testing uses `framework: 'next'` and `bundler: 'webpack'`.
- E2E commands:
  - Interactive: `npm run e2e` (uses `start-server-and-test` to boot dev server and open Cypress in e2e mode).
  - Headless: `npm run e2e:headless`.
- Component testing commands:
  - Interactive: `npm run component`
  - Headless: `npm run component:headless`
- Spec locations:
  - E2E: place specs under `cypress/e2e/**/*.cy.{ts,tsx}` (create folder if missing).
  - Component: place under `cypress/component/**/*.cy.{ts,tsx}` or as configured in the Cypress init wizard.

Minimal E2E example you can add locally:
```ts
// cypress/e2e/smoke.cy.ts
it('opens home page', () => {
  cy.visit('http://localhost:3000');
  cy.contains('body', /.+/); // basic smoke assertion
});
```
Run `npm run e2e` to verify.

## 3) Linting, Style, and Conventions

- ESLint flat config is in `eslint.config.mjs` with Next, TypeScript, React, Storybook, and import rules.
- Notable rules:
  - `@typescript-eslint/no-unused-vars`: error
  - `no-console`: only `console.error` and `console.info` allowed
  - `max-len`: 160
  - `object-curly-spacing`: always; `object-curly-newline`: consistent, with thresholds
  - `import/order` with alphabetical sort and `@/**` grouped as external; `sort-imports` enabled
  - `ignorePatterns: ['.next/*']`
  - Note: Avoid conflicts between `import/order` and `sort-imports`; prefer `import/order` with `alphabetize` or configure them carefully.
- Commands:
  - Lint: `npm run lint`
  - Auto-fix: `npm run lint:fix`

## 4) Project Structure and Conventions

- Source directory: `src/`
  - App Router: `src/app/[locale]/(public|secured)/...`
  - UI Provider at `src/components/ui/provider` integrates Chakra UI and theming.
  - i18n utilities under `src/i18n/` (e.g., `routing.ts`, `request.ts`). Keep locales in sync with routing and middleware.
- Routing and locales
  - `generateStaticParams()` maps locales for SSG.
  - Ensure `middleware.ts` and `routing.ts` agree on locales and default locale.

## 5) Troubleshooting / Pitfalls

- Node version mismatch can break ESLint due to `import.meta.dirname`. Use Node >= 20.11.
- `next dev --turbo` is enabled by default. If you see dev instability, switch to `npm run dev:old`.
- Optional native deps warnings (`bufferutil`, `utf-8-validate`) are ignored on client via webpack externals; do not import them in client code.
- When adding Jest React component tests, consider jsdom limitations and install React Testing Library, or prefer Cypress Component Testing for SSR/App Router cases.
- If adding custom TS path aliases, update Jest `moduleNameMapper` and possibly Cypress TS path registration.

## 6) Releasing / CI (notes)

- Jest is configured for CI (`--ci --coverage`). If you add tests, ensure they are deterministic and do not rely on network by default.
- Docker `output: 'standalone'` keeps images small. Ensure any runtime envs are provided via container environment variables.

---

This document is maintained under `.junie/guidelines.md`. Keep it updated when tooling or conventions change.


## 7) Git hooks and Commit Message Conventions

- Husky
  - Installation: Husky is wired via the package.json script "prepare": "husky". Running `npm install` will set up hooks under `.husky/`. ✓
  - Hooks configured:
    - pre-commit: runs `npm test` (Jest in CI mode with coverage). With `--passWithNoTests` enabled, commits will not be blocked if there are no tests yet. Keep tests deterministic and fast to avoid slowing down commits. ✓
    - commit-msg: runs `npx --no -- commitlint --edit $1` to validate the commit message. ✓

- Commitlint
  - Base config: extends `@commitlint/config-conventional` (Conventional Commits). ✓
  - Regex/casing enforcement is implemented via `commitlint-plugin-function-rules` in the configuration. ✓
  - Required scope: Scope is mandatory and must match the regex `^PRJ-[0-9]+$` (e.g., `PRJ-123`). Scope is enforced as upper-case (`scope-case: upper-case`). If missing or malformed, commitlint will fail with helpful messages. ✓
  - Allowed types (from conventional): `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`. ✓
  - Format: `type(scope): short subject`
  - Examples:
    - `feat(PRJ-123): add login page with Auth0`
    - `fix(PRJ-204): handle null user session in middleware`
    - `chore(PRJ-999): bump Next.js to 15.4.5`
  - Breaking changes: use `type!` (e.g., `feat!(PRJ-321): drop deprecated API`) and/or add a footer `BREAKING CHANGE: <details>`. ✓

- Running commitlint manually
  - Validate a single message: `echo "feat(PRJ-123): message" | npx --no -- commitlint`
  - Validate recent commits: `npx --no -- commitlint --from=HEAD~5 --to=HEAD`

- Bypassing hooks (discouraged)
  - `git commit -m "..." --no-verify` skips Husky hooks. Use only in emergencies and consider following up with a compliant commit. ✓

- Troubleshooting
  - If hooks don’t run after cloning: execute `npm install` (triggers `prepare`) or run `npx husky init` to reinitialize. Ensure your Git client honors hooks. On CI, hooks typically don’t run; rely on PR checks if you want server-side enforcement. ✓

## 8) Chakra UI Theming — Tokens & Semantic Tokens

This section consolidates how we structure Chakra UI System v3 design tokens and semantic tokens in this project, with real examples and usage. It replaces the standalone page previously under docs/chakra-theme-tokens.md.

- Theme file: src/shared/theme.ts
- Chakra Provider: src/components/ui/provider.tsx
- App Router integration: src/app/[locale]/(public)/layout.tsx (html class="chakra-theme" and ChakraProvider)

### 8.1 Tokens (theme.tokens)
Design tokens are the raw values (colors, spacing, radii, shadows, fonts…). They are context-free and referenced by semantic tokens and components.

We use these categories:
- colors
  - Brand palette colors.brand.{1…12} with brand.9 as the default solid/base shade.
  - Brand overlay colors: colors.brand.overlay.light|dark.
- spacing: a small scale 1…10.
- radii: sm|md|lg|xl|full.
- shadows: sm|md|lg.
- fonts: body|heading|mono (Inter Variable loaded).

Example (simplified from src\shared\theme.ts):
```ts
import { defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          overlay: { light: { value: '#1A3A5A' }, dark: { value: '#0B1220' } },
          1: { value: '#F2F3F8' }, 2: { value: '#E6E8F2' }, /* … */ 9: { value: '#000035' },
        },
      },
      spacing: { 1: { value: '0.25rem' }, 2: { value: '0.5rem' } /* … */ },
      radii: { sm: { value: '4px' }, md: { value: '8px' } /* … */ },
      shadows: { sm: { value: '0 1px 2px 0 rgba(0,0,0,.05)' } /* … */ },
      fonts: {
        body: { value: 'Inter Variable, …' },
        heading: { value: 'Inter Variable, …' },
        mono: { value: 'ui-monospace, …' },
      },
    },
  },
})
```

### 8.2 Semantic Tokens (theme.semanticTokens)
Semantic tokens are usage-oriented aliases that map automatically to light/dark modes. Example: color="fg.default" or bg="bg.default".

Base set we use/recommend:
- colors.fg: default | muted | subtle | inverse
- colors.bg: canvas | default | muted | subtle | overlay
- colors.border: default | subtle | strong
- colors.focus.ring
- colors.colorPalette: solid | contrast (for colorPalette="brand")
- fontSizes.md (non-color example)

Example (simplified from src/shared/theme.ts):
```ts
const exampleConfig = {
  semanticTokens: {
    colors: {
      bg: {
        canvas:  { value: { base: '#FFFFFF', _dark: '#0B1220' } },
        default: { value: { base: '#FFFFFF', _dark: '#0F172A' } },
        muted:   { value: { base: '#F9FAFB', _dark: '#111827' } },
        subtle:  { value: { base: '#F3F4F6', _dark: '#1F2937' } },
        overlay: { value: { base: '{colors.brand.overlay.light}', _dark: '{colors.brand.overlay.dark}' } },
      },
      colorPalette: {
        solid:    { value: { base: '{colors.brand.9}', _dark: '{colors.brand.1}' } },
        contrast: { value: { base: '#D1D5DB', _dark: '#4B5563' } },
      },
    },
  },
}
```

Naming conventions:
- Prefer intent-based names: fg.default, bg.muted, border.subtle, focus.ring.
- Group by usage (fg/bg/border/focus), not by raw color.
- For overlays, reference colors.brand.overlay.light|dark.
- Component prop: use colorPalette (not colorScheme) to align with Chakra v3.

### 8.3 Usage examples
- Text and background colors
```tsx
<Box bg="bg.default" color="fg.default" borderColor="border.subtle" borderWidth="1px" p={4}>
  Content
</Box>
```
- Overlays/modals
```tsx
<Box bg="bg.overlay" color="fg.inverse" p={6} borderRadius="md">Overlay</Box>
```
- Focus ring
```tsx
<Button
  colorPalette="brand"
  _focusVisible={{ outline: '2px solid', outlineColor: 'focus.ring' }}
>
  Action
</Button>
```
- Brand palette variants (Chakra v3)
```tsx
<Button colorPalette="brand" variant="solid">Primary</Button>
<Button colorPalette="brand" variant="subtle">Secondary</Button>
```
- Non-color token
```tsx
<Text sx={{ fontSize: 'fonts.size.md' }}>Heading</Text>
```

Tip: The <html class="chakra-theme"> is set in layout.tsx. Light/dark is handled by ColorModeProvider in src/components/ui/provider.tsx.

### 8.4 What’s missing (to be added)
- Status tokens: success.*, warning.*, info.*, danger.* (fg/bg/border) for messages, badges, alerts.
- Explicit accent tokens: accent.* if we want to separate "accent" from brand.
- Interaction states: hover.*, active.*, disabled.* for recurring elements.
- Extended typography scale via tokens/semantic tokens (beyond fonts.size.md).
- Typed border tokens: border.focus, border.input, border.separator.
- Accessibility documentation: note minimum AA/AAA contrast for recommended fg/bg pairs.

Proposed steps:
1) Define values in theme.semanticTokens.colors for each group above with base/_dark.
2) Add usage examples (Button, Alert, Badge) in Storybook.
3) Update this section with final mapping.

### 8.5 Template to add a new semantic token
```ts
// theme.semanticTokens.colors.success
const semanticTokenExample = {
  success: {
    fg:      { value: { base: '#065F46', _dark: '#D1FAE5' } },
    bg:      { value: { base: '#ECFDF5', _dark: '#064E3B' } },
    border:  { value: { base: '#A7F3D0', _dark: '#065F46' } },
  }
}
```
Usage: <Alert bg="success.bg" color="success.fg" borderColor="success.border" />

References:
- Chakra UI System v3 — Tokens & Semantic Tokens: https://chakra-ui.com/docs/styled-system/tokens
- Color Mode & CSS variables: https://chakra-ui.com/docs/styled-system/color-mode
- Project theme: src\shared\theme.ts | Provider: src\components\ui\provider.tsx


## 9) LLM Documentation — Using "doc llms.txt" files

This project includes concise LLM-oriented documentation files to help AI assistants answer questions accurately about our stack and conventions. These files are meant to be attached or referenced in prompts during AI-assisted development and reviews.

- Locations (relative to repo root):
  - .junie\nextjs_llms.txt — Next.js template specifics, routing, i18n, testing, Docker notes.
  - .junie\chakra_llms.txt — Chakra UI usage in this repo, theming, tokens, semantic tokens.
  - .junie\tanstack-table-llms.txt — TanStack Table usage in this repo (React adapter), patterns, and Chakra integration tips.

How to use with LLMs
- When starting an AI session, provide these files to the assistant:
  - Attach by FILE_PATH if your tool supports it (preferred): .junie\nextjs_llms.txt, .junie\chakra_llms.txt, and .junie\tanstack-table-llms.txt.
  - Or paste relevant sections of their content if file attachment is not supported.
- Use Windows-style paths in this project context (e.g., .junie\nextjs_llms.txt or .junie\tanstack-table-llms.txt).
- Do not use raw image bytes; provide FILE_PATH, direct URL, or plain text content.

Example prompt snippet
```text
You have access to the repository. Use the files .junie\nextjs_llms.txt, .junie\chakra_llms.txt, and .junie\tanstack-table-llms.txt to inform your answers.
Follow our ESLint, testing, theming, and table patterns described there. If something conflicts, prefer the project files over generic docs.
```

Maintenance & updating
- Update these files whenever we:
  - Bump major/minor versions of Next.js, Chakra UI, Jest/Cypress, or adjust architecture.
  - Change directory structure, theming tokens (see src\shared\theme.ts), or i18n routing.
- Keep them short, factual, and free of secrets. Prefer links to official docs when needed.
- Review after significant PRs that affect tooling, scripts (package.json), or provider setup.

Conventions
- Plain text format, one topic per file.
- Use the same terminology as this document (e.g., "App Router", "semantic tokens", "colorPalette").
- The phrase "doc llms.txt" refers collectively to these helper files under .junie\.
