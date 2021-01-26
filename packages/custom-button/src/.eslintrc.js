module.exports = {
  env: {
    browser: true,
    commonjs: true,
  },
  extends: ['eslint:recommended', 'react-app', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react', 'prettier', 'simple-import-sort', 'import', 'typescript-sort-keys'],
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/sort': 'error',
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
  },
};
