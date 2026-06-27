/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports'],
  rules: {
    // Remove unused imports automatically
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'off', // handled by unused-imports
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
  overrides: [
    {
      // Enforce no hardcoded hex colors in styles.ts files (outside of tokens/)
      files: [
        'src/**/*.styles.ts',
        'src/**/styles.ts',
        'src/**/styled.ts',
        'src/**/style.ts',
      ],
      excludedFiles: [
        'src/design-system/tokens/**',
      ],
      rules: {
        // Warn when a literal hex color appears directly in a styled-component
        // (outside the design-system/tokens folder)
        'no-restricted-syntax': [
          'warn',
          {
            selector: 'Literal[value=/^#([0-9a-fA-F]{3,8})$/]',
            message:
              'Hardcoded hex color detected. Use a Design System token instead: theme.ds.color.* or theme.ds.primitive.*',
          },
        ],
      },
    },
  ],
};
