module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'react-native/no-inline-styles': 'off',
    'react-hooks/exhaustive-deps': 'off',
    semi: 'off',
  },
};
