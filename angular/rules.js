const rules = {
  '@angular-eslint/component-max-inline-declarations': 'error',
  '@angular-eslint/contextual-decorator': 'error',
  '@angular-eslint/no-attribute-decorator': 'error',
  '@angular-eslint/no-lifecycle-call': 'error',
  '@angular-eslint/no-queries-metadata-property': 'error',
  '@angular-eslint/prefer-on-push-component-change-detection': 'error',
  '@angular-eslint/prefer-output-readonly': 'error',
  '@angular-eslint/relative-url-prefix': 'error',
  '@angular-eslint/use-component-selector': 'error',
  '@angular-eslint/use-component-view-encapsulation': 'error',

  '@angular-eslint/directive-selector': [
    'error',
    { 'type': 'attribute', 'prefix': 'app', 'style': 'camelCase' },
  ],
  '@angular-eslint/component-selector': [
    'error',
    { 'type': 'element', 'prefix': 'app', 'style': 'kebab-case' },
  ],
};

module.exports = {
  rules,
  extends: [
    'plugin:@angular-eslint/recommended',
  ],
};
