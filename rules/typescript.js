const rules = {
  '@typescript-eslint/prefer-readonly': 'off',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/ban-ts-comment': ['error', {'ts-ignore': 'allow-with-description'}],

  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': ['error', { 'ignoreRestSiblings': true }],

  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-explicit-any': ['error'],
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/explicit-function-return-type': ['error', {allowExpressions: true}],

  'brace-style': 'off',
  '@typescript-eslint/brace-style': ['error'],

  'comma-spacing': 'off',
  '@typescript-eslint/comma-spacing': ['error'],

  'keyword-spacing': 'off',
  '@typescript-eslint/keyword-spacing': ['error', {before: true}],

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

  'comma-dangle': 'off',
  '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

  'quotes': 'off',
  '@typescript-eslint/quotes': ['error', 'single'],

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
  ],

  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': 'error',

  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: [
        'class',
        'interface',
        'enum',
        'typeParameter',
        'typeAlias'
      ],
      format: [ 'PascalCase' ],
    },
    {
      selector: [
        'classMethod',
        'classProperty',
        'typeProperty',
        'typeMethod',
        'parameter',
      ],
      format: [ 'camelCase' ],
    },
    {
      selector: ['typeAlias'],
      format: [
        'PascalCase',
        'camelCase'
      ],
    },
    {
      selector: [ 'enumMember' ],
      format: [
        'UPPER_CASE',
        'PascalCase'
      ],
    },
    {
      selector: 'function',
      format: [
        'camelCase',
        'PascalCase'
      ],
    },
    {
      selector: 'variable',
      format: [
        'camelCase',
        'UPPER_CASE'
      ],
    },
  ],
}

module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    './javascript.js',
  ],
  rules,
};
