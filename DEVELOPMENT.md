# Development Documentation

This guide provides specific details for developers working on the `@gregboero/template-nextjs` project.

## 🛠 Build & Configuration

### Setup
1.  **Install dependencies**:
    ```bash
    npm install
    ```
    *Note: The project uses strict dependency versions to ensure consistency across environments.*

2.  **Environment Variables**:
    -   Copy `.env.sample` to `.env`.
    -   Configure necessary variables (e.g., MongoDB URI, NextAuth secret).

### Key Scripts
-   **Development Server**: `npm run dev` (Uses Turbopack: `next dev --turbopack`).
-   **Production Build**: `npm run build`
-   **Production Start**: `npm run start`
-   **Linting**: `npm run lint` or `npm run lint:fix`
-   **Type Checking**: `npx tsc --noEmit`

## 🎨 UI & Components

### Component Gallery
The project includes a comprehensive gallery of UI components and templates located at:
`src/app/[locale]/(public)/gallery`

You can explore them by navigating to `/gallery` in your browser. This gallery showcases:
-   **Marketing**: Landing pages, hero sections, features, pricing, etc.
-   **Application**: Dashboards, forms, data tables, stats.
-   **E-commerce**: Product lists, filters, shopping charts.
-   **Authentication**: Login, signup, password reset pages.

### Chakra UI 3
We use Chakra UI 3 for styling. Custom theme configurations can be found in `src/shared/theme.ts`.
Reusable UI components are located in `src/components/ui`.

## 🧪 Testing Strategy

### Jest (Unit & Integration)
-   **Configuration**: `jest.config.mjs`
-   **Execution**: `npm test`
-   **Coverage**: Enabled by default in CI mode. Reports are generated in the `coverage/` directory.

### Cypress (E2E & Component)
We use Cypress for both end-to-end and component testing.

-   **Interactive Mode**:
    -   E2E: `npm run e2e`
    -   Component: `npm run component`
-   **Headless Mode**:
    -   E2E: `npm run e2e:headless`
    -   Component: `npm run component:headless`

*Note: Cypress is configured to support Cucumber/Gherkin syntax for BDD.*

### Storybook
Storybook is used for developing and documenting components in isolation.
-   **Start**: `npm run storybook`
-   **Build**: `npm run build-storybook`

## 🌍 Internationalization (i18n)

The project uses `next-intl` for internationalization.
-   **Messages**: Located in `src/messages/`.
-   **Configuration**: `src/i18n/` contains the routing and setup logic.
-   **Usage**: Use the `useTranslations` hook from `next-intl` to handle localized strings.

## 🧹 Code Quality

-   **Commit Quality**: Enforced via `commitlint` and `husky`. Follow [Conventional Commits](https://www.conventionalcommits.org/).
-   **Formatting**: Handled by ESLint and Prettier.
-   **Git Hooks**: A pre-commit hook runs linting and potentially tests to ensure code quality before pushing.

## 🐞 Debugging

-   **Node.js Debugging**: `npm run dev:debug` or `npm run dev:debug-turbo`.
-   **Next.js Debugging**: Refer to the [Next.js debugging documentation](https://nextjs.org/docs/app/building-your-application/configuring/debugging).
