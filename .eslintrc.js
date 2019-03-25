module.exports = {
  env: {
    browser: true,
    commonjs: true,
  },
  extends: ['eslint:recommended', 'react-app', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
