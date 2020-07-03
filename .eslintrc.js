module.exports = {
  extends: 'ericbiewener-typescript',
  env: {
    browser: false,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['*.js', '**/__tests__/**/*.{ts,tsx}'],
      extends: 'ericbiewener',
    },
  ],
}
