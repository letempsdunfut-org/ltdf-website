# @gregboero/template-nextjs

A modern, high-performance **Next.js 16** starter template focused on developer experience, visual excellence, and scalability.

## ✨ Key Features

-   **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) with [Turbopack](https://nextjs.org/docs/app/api-reference/turbopack-cli) for lightning-fast builds.
-   **Styling**: [Chakra UI 3](https://chakra-ui.com/) (v3.30.0) for a robust and accessible component system.
-   **State Management**: [Zustand](https://github.com/pmndrs/zustand) for lightweight and flexible state handling.
-   **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/) for seamless multi-language support.
-   **Component Gallery**: Built-in showcase of UI components and templates.
-   **Testing**: 
    -   [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit/integration tests.
    -   [Cypress](https://www.cypress.io/) for End-to-End and Component testing.
-   **Documentation**: [Storybook](https://storybook.js.org/) for isolated component development.
-   **Quality Tools**: ESLint, Prettier, Husky, and Commitlint (Conventional Commits).
-   **Database**: [MongoDB](https://www.mongodb.com/) driver integrated.

## 🛠 Tech Stack

-   **Core**: React 19, Next.js 16, TypeScript
-   **UI**: Chakra UI 3, Recharts, React Icons
-   **Utilities**: Day.js, UUID, @uidotdev/usehooks
-   **Testing**: Jest, Cypress, Cucumber (Cypress preprocessor)
-   **Development**: Storybook, Turbopack, Husky, Commitlint

## 🚀 Getting Started

### Prerequisites

-   Node.js (v24 or later)
-   npm

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/gregboero/template-nextjs.git
    cd template-nextjs
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Setup**:
    Copy the sample environment file and adjust values:
    ```bash
    cp .env.sample .env
    ```

### Running Locally

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📖 Development Guide

Check the [DEVELOPMENT.md](file:///c:/Users/Gregory/wokspace/perso/template-nextjs/DEVELOPMENT.md) for detailed information on:
-   Advanced configuration
-   Available scripts
-   Testing strategies
-   Code style and linting
-   Working with the Component Gallery

## 🐳 Docker

A `Dockerfile` is provided for containerized deployment.

```bash
docker build -t template-nextjs .
docker run -p 3000:3000 template-nextjs
```

## 🤖 CI/CD

Generic GitHub Actions workflow is available in `.github/workflows/pr.yml` which handles linting, testing, and building on every Pull Request.

## 🤝 Contributing

Contributions are welcome! Please ensure you follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for your commit messages.

## 📄 License

This project is private and intended for internal use.
