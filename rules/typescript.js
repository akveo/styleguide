const rules = {
  '@typescript-eslint/prefer-readonly': 'off',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],

  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // TODO: add to styleguide exception regarding args starting with _

  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }], // TODO: probably should warn
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],

  'brace-style': 'off',
  '@typescript-eslint/brace-style': ['error'],

  'comma-spacing': 'off',
  '@typescript-eslint/comma-spacing': ['error'],

  'keyword-spacing': 'off',
  '@typescript-eslint/keyword-spacing': ['error', {before: true}],

  'lines-between-class-members': 'off',
  '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

  '@typescript-eslint/member-delimiter-style': 'error',

  'no-duplicate-imports': 'off',
  '@typescript-eslint/no-duplicate-imports': 'error',

  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': 'error',

  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-floating-promises': 'error',

  'no-extra-semi': 'off',
  '@typescript-eslint/no-extra-semi': 'error',

  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': 'error',

  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-enum-initializers': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',

  'semi': 'off',
  '@typescript-eslint/semi': ['error', 'always'],

  '@typescript-eslint/restrict-plus-operands': ['error', {checkCompoundAssignments: true}],
  '@typescript-eslint/type-annotation-spacing': 'error',

  'indent': 'off',
  '@typescript-eslint/indent': ['error', 2],

  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': 'error',

  'padding-line-between-statements': 'off',
  '@typescript-eslint/padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: 'import',
      next: '*'
    },
    {
      blankLine: 'any',
      prev: 'import',
      next: 'import'
    }
  ]
}

module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    './javascript.js',
    'plugin:@typescript-eslint/recommended',
  ],
  rules,
};
