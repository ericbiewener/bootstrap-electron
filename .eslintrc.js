module.exports = {
  extends: 'ericbiewener',
  env: {
    node: true,
    es6: true,
    browser: false,
  },
  overrides: [
    {
      files: ['src/**/*.{ts,tsx}'],
      extends: 'ericbiewener-typescript',
    },
    {
      files: ['src/renderer/**/*.{ts,tsx}'],
      env: {
        browser: true,
      },
    },
  ],
}
