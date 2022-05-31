const rules = {
  'react/jsx-uses-react': 'error',
  'react/jsx-uses-vars': 'error',
  'react/no-multi-comp': ['error', { ignoreStateless: true }],
  'react/jsx-filename-extension': ['error', { 'extensions': ['.tsx', '.jsx'] }],
  'react/jsx-curly-spacing': ['error', { 'when': 'never' }],
  'react/jsx-closing-bracket-location': 'error',
  'react/jsx-closing-tag-location': 'error',
  'react/jsx-boolean-value': [ 'error', 'always' ],
  'react/jsx-curly-brace-presence':
    [
      'error',
      {
        props: 'never',
        children: 'never',
      },
    ],
  'react/require-render-return': 'error',
  'react/jsx-curly-newline': 'error',
  'react/jsx-first-prop-new-line': 'error',
  'react/jsx-fragments': [ 'error', 'syntax' ],
  'react/jsx-indent-props': [ 'error', 2 ],
  'react/jsx-key': 'error',
  'react/jsx-max-props-per-line': ['error', { 'maximum': 1 }],
  'react/jsx-no-bind': ['error', { 'allowArrowFunctions': true }],
  'react/jsx-no-constructed-context-values': 'error',
  'react/jsx-no-duplicate-props': 'error',
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-one-expression-per-line': 'error',
  'react/jsx-pascal-case': 'error',
  'react/jsx-props-no-multi-spaces': 'error',
  'react/jsx-tag-spacing': [
    'error',
    {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'never',
    },
  ],
  'react/jsx-wrap-multilines': [
    'error',
    {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    },
  ],
  'react/no-access-state-in-setstate': 'error',
  'react/no-children-prop': 'error',
  'react/no-deprecated': 'error',
  'react/no-direct-mutation-state': 'error',
  'react/no-find-dom-node': 'error',
  'react/no-is-mounted': 'error',
  'react/no-namespace': 'error',
  'react/no-redundant-should-component-update': 'error',
  'react/no-render-return-value': 'error',
  'react/no-string-refs': 'error',
  'react/no-this-in-sfc': 'error',
  'react/no-unknown-property': 'error',
  'react/prefer-es6-class': 'error',
  'react/self-closing-comp': 'error',
  'react/style-prop-object': 'error',
};

module.exports = {
  rules,
  plugins: [ 'react' ],
  extends: [
    'plugin:react/recommended',
    // INFO: For React 17.0 version and higher
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true,
    },
  },
};
