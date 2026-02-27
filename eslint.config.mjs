import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";


const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,

})

const eslintConfig = [
  {
    ignores: [
      "node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts", ".storybook/**", "commitlint.config.mjs", "service/**", "_legacy_backup/**"
    ]
  },
  // Import resolvers for TS paths ("@/*") and Node subpath exports
  {
    settings: {
      "import/resolver": {
        typescript: { project: true },
        node: true,
      },
    },
  },
  // Convert legacy shareable configs into flat config entries first
  ...compat.extends(
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ),
  // Then apply our project rules
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "class-methods-use-this": "off",
      "import/prefer-default-export": "off",
      "@typescript-eslint/no-namespace": "off",
      "import/namespace": "off",
      // React 17+ / Next.js automatic JSX runtime: these rules must be off
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      "import/order": "off",

      "lines-around-directive": 0,

      "no-console": ["error", {
        allow: ["error", "info"],
      }],

      "no-empty-pattern": ["error", {
        allowObjectPatternsAsParameters: true,
      }],

      "object-curly-spacing": "off",

      "object-curly-newline": "off",

      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": "off",

      "sort-imports": "off",

      "no-underscore-dangle": ["error", {
        allow: ["_id"],
      }],
      "quotes": "off",
      "spaced-comment": ["error", "always"],
      "space-in-parens": ["error", "never"],
      "max-len": "off",
      "camelcase": ["error", { properties: "always" }],
    }
  },
  // Data files overrides - ignore camelCase and max-len for mock data
  {
    files: ["**/*/data.ts", "**/*/data.tsx", "**/data.ts", "**/data.tsx"],
    rules: {
      "camelcase": "off",
      "@typescript-eslint/no-unused-vars": "off"
    }
  },
  // Content placeholder overrides
  {
    files: ["**/content-placeholder.tsx"],
    rules: {
      "max-len": "off",
      "@typescript-eslint/no-empty-object-type": "off"
    }
  },
  // Stories override
  {
    files: ["**/*.stories.tsx"],
    rules: {
      "import/no-extraneous-dependencies": ["error", {
        devDependencies: true,
      }],
    },
  }
]

export default eslintConfig;
