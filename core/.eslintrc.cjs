module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:typescript-enum/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'prettier',
    'simple-import-sort',
    'import',
    'react-hooks',
    '@typescript-eslint',
    'typescript-enum',
  ],
  rules: {
    indent: ['error', 2],
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/prefer-readonly': 'error',
    'no-empty-pattern': 0,
    '@typescript-eslint/sort-type-constituents': 'error',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'signature',
          'field',
          'constructor',
          'method',
        ],
      },
    ],
  },
};
