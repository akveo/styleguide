const rules = {
  /* JS */
  'prettier/prettier': 'off',
  'curly': 'error',
  'operator-linebreak': [ 'error', 'after' ],
  'semi-style': [ 'error', 'last' ],
  'semi-spacing': 'error',
  'comma-style': [ 'error', 'last' ],
  'max-len': [ 'error', { code: 120 } ],
  'space-infix-ops': 'error',
  'space-unary-ops': 'error',
  'space-in-parens': [ 'error', 'never' ],
  'no-new-wrappers': 'error',
  'no-new-object': 'error',
  'no-new-func': 'error',
  'prefer-template': 'error',
  'no-useless-concat': 'error',
  'no-array-constructor': 'error',
  'no-var': 'error',
  'prefer-const': 'error',
  'no-throw-literal': 'error',
  'default-case': 'error',
  'eqeqeq': [ 'error', 'smart' ],
  'func-style': [ 'error', 'declaration', { 'allowArrowFunctions': true } ],
  'prefer-arrow-callback': 'error',
  'array-callback-return': 'error',
  // TODO: Rule has much more options. It's worth to adjust them.
  'no-unneeded-ternary': 'error',
  'no-restricted-syntax': [
    'error',
    {
      'selector': 'ExportDefaultDeclaration',
      'message': 'Prefer named exports',
    },
  ],
  'no-template-curly-in-string': 'error',
  'no-constructor-return': 'error',
  'no-extra-bind': 'error',
  'no-floating-decimal': 'error',
  'no-iterator': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-multi-spaces': 'error',
  'no-multi-str': 'error',
  'no-new': 'error',
  'no-self-compare': 'error',
  'no-useless-call': 'error',
  'func-call-spacing': 'error',

  'key-spacing': 'error',
 
  'array-bracket-spacing': [
    'error',
    'always',
  ],
  'object-curly-spacing': [
    'error',
    'always',
  ],
  /* TS */
  '@typescript-eslint/prefer-readonly': 'off',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/ban-ts-comment': [ 'error', { 'ts-ignore': 'allow-with-description' } ],

  // TODO: add to styleguide exception regarding args starting with '_'
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],

  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-explicit-any': [ 'error' ],
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/explicit-function-return-type': [ 'error', { allowExpressions: true } ],

  '@typescript-eslint/brace-style': [ 'error' ],

  '@typescript-eslint/comma-spacing': [ 'error' ],

  '@typescript-eslint/keyword-spacing': [ 'error', { before: true } ],

  '@typescript-eslint/member-delimiter-style': 'error',

  '@typescript-eslint/no-duplicate-imports': 'error',

  '@typescript-eslint/no-empty-function': 'error',

  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-floating-promises': 'error',

  '@typescript-eslint/no-extra-semi': 'error',

  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-redeclare': 'error',

  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-enum-initializers': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',


  '@typescript-eslint/semi': [ 'error', 'always' ],

  '@typescript-eslint/restrict-plus-operands': [ 'error', { checkCompoundAssignments: true } ],
  '@typescript-eslint/type-annotation-spacing': 'error',


  '@typescript-eslint/indent': [ 'error', 2 ],

  '@typescript-eslint/no-shadow': 'error',


  '@typescript-eslint/comma-dangle': [ 'error', 'always-multiline' ],


  '@typescript-eslint/quotes': [ 'error', 'single' ],


  '@typescript-eslint/padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: 'import',
      next: '*',
    },
    {
      blankLine: 'any',
      prev: 'import',
      next: 'import',
    },
  ],


  '@typescript-eslint/no-invalid-this': 'error',

  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: [
        'class',
        'interface',
        'enum',
        'typeParameter',
        'typeAlias',
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
      selector: [ 'typeAlias' ],
      format: [
        'PascalCase',
        'camelCase',
      ],
    },
    {
      selector: [ 'enumMember' ],
      format: [
        'UPPER_CASE',
        'PascalCase',
      ],
    },
    {
      selector: 'function',
      format: [
        'camelCase',
        'PascalCase',
      ],
    },
    {
      selector: 'variable',
      format: [
        'camelCase',
        'UPPER_CASE',
      ],
    },
  ],
};

module.exports = {
  plugins: [ '@typescript-eslint' ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended', 
  ],
  rules,
};
