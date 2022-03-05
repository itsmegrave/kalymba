module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },

  env: {
    browser: true,
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    '@typhonjs-fvtt/eslint-config-foundry.js',
  ],

  plugins: ['@typescript-eslint'],

  rules: {
    // Specify any specific ESLint rules.
  },

  overrides: [
    {
      files: ['./*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-shadow': ['error', { builtinGlobals: true, hoist: 'all', allow: ['event'] }],
      },
    },
  ],
};
