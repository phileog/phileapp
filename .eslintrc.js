module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'airbnb',
    // Add prettier rules at the end to overrule airbnb
    'prettier',
    'prettier/react',
    // flow
    'plugin:flowtype/recommended',
  ],
  plugins: ['flowtype', 'jest'],
  rules: {
    'no-debugger': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }], // Accepts .js and .jsx as jsx containing files
    'react/forbid-prop-types': ['warn', { forbid: ['any', 'array'] }],
    'no-param-reassign': ['error', { props: false }], // cannot reassign a function param, except object properties (as const do)
    'no-var': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'react/sort-comp': [
      'warn',
      { order: ['static-methods', 'lifecycle', 'everything-else', 'render'] },
    ],
  },
};
