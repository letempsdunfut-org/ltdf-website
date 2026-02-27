const scopeRg = /^PRJ-[0-9]+$/;
const ERROR_NO_SCOPE = 'You must provide a scope';
const ERROR_SCOPE_BAD_PATTERN = `The scope must match PRJ-[0-9]+`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  extends: [
    '@commitlint/config-conventional',
  ],
  plugins: [
    'commitlint-plugin-function-rules'
  ],
  rules: {
    'scope-case': [2, 'always', ['upper-case']],
    'scope-enum': [0],
    'body-max-line-length':[2, 'always', 300],
    'function-rules/scope-enum': [
      2,
      'always',
      (parsed) => {
        const hasScope = !!parsed.scope;
        const scopeMatch = hasScope && scopeRg.test(parsed.scope);
        return [
          scopeMatch,
          hasScope ? ERROR_SCOPE_BAD_PATTERN : ERROR_NO_SCOPE,
        ]
      },
    ],
  },
};
