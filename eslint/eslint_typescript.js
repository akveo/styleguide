const caseRules = {
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: [ 'class', 'interface', 'enum', 'typeParameter' ],
      format: [ 'PascalCase' ],
    },
    {
      selector: [
        'classMethod',
        'classProperty',
        'typeProperty',
        'typeMethod',
        'enumMember',
        'typeAlias',
        'parameter',
      ],
      format: [ 'camelCase' ],
    },
    {
      selector: 'function',
      format: [ 'camelCase', 'PascalCase' ],
    },
    {
      selector: 'variable',
      format: [ 'camelCase', 'PascalCase', 'UPPER_CASE' ],
    },
  ],
};

const rules = {
  ...caseRules,
  semi: 'off',
  'brace-style': 'off',
  'no-redeclare': 'off',
  'no-extra-semi': 'off',
  'no-unused-vars': 'off',
  'no-empty-function': 'off',
  'no-duplicate-imports': 'off',
  'func-call-spacing': 'off',
  'comma-dangle': 'off',
  'quotes': 'off',
  'lines-between-class-members': 'off',
  'init-declarations': 'off',
  'key-spacing': 'off',
  'comma-spacing': 'off',
  'padding-line-between-statements': 'off',
  'indent': 'off',
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      accessibility: 'explicit',
      overrides: {
        constructors: 'no-public',
      },
    },
  ],
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/ban-ts-comment':
    [ 'error', { 'ts-ignore': 'allow-with-description' } ],
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/typedef': [ 'error', {
    'arrowParameter': true,
    'parameter': true,
  } ],
  '@typescript-eslint/no-type-alias': [ 'error', {
    'allowAliases': 'in-unions-and-intersections',
  } ],
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/explicit-function-return-type': [ 'error', { allowExpressions: true } ],
  '@typescript-eslint/brace-style': 'error',
  '@typescript-eslint/comma-dangle': [ 'error', {
    'arrays': 'only-multiline',
    'objects': 'only-multiline',
    'imports': 'only-multiline',
    'exports': 'only-multiline',
    'functions': 'only-multiline',
  } ],
  '@typescript-eslint/comma-spacing':
    [ 'error', {
      before: false,
      after: true,
    } ],
  '@typescript-eslint/init-declarations': [ 'error', 'always' ],
  '@typescript-eslint/keyword-spacing': [ 'error', { before: true } ],
  '@typescript-eslint/lines-between-class-members':
    [ 'error', 'always', { 'exceptAfterOverload': true } ],
  '@typescript-eslint/member-delimiter-style': [ 'error', {
    'multiline': {
      'delimiter': 'none',
      'requireLast': true,
    },
    'singleline': {
      'delimiter': 'comma',
      'requireLast': false,
    },
    'multilineDetection': 'brackets',
  } ],
  '@typescript-eslint/no-duplicate-imports': 'error',
  '@typescript-eslint/no-empty-function': 'error',
  '@typescript-eslint/no-empty-interface': [
    'error',
    {
      'allowSingleExtends': false,
    },
  ],
  '@typescript-eslint/no-extra-semi': 'error',
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-meaningless-void-operator': [
    'error',
    {
      'checkNever': false,
    },
  ],
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      'checksVoidReturn': false,
    },
  ],
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-redeclare': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/padding-line-between-statements': [
    'error',
    {
      'blankLine': 'always',
      'prev': '*',
      'next':
        [ 'interface', 'type', 'return', 'if', 'function', 'export' ],
    },
  ],
  '@typescript-eslint/prefer-enum-initializers': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/quotes': [ 'error', 'single' ],
  '@typescript-eslint/semi': [ 'error', 'always' ],
  '@typescript-eslint/restrict-plus-operands':
    [ 'error', { 'checkCompoundAssignments': true } ],
  '@typescript-eslint/type-annotation-spacing': 'error',
  '@typescript-eslint/indent': [ 'error', 2 ],
  '@typescript-eslint/no-inferrable-types': 'off',
  '@typescript-eslint/no-shadow': 'error',
};

module.exports = {
  plugins: [ '@typescript-eslint' ],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  rules,
};
