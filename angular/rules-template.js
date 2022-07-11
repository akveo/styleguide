const rules = {
  '@angular-eslint/template/accessibility-valid-aria': 'error',
  '@angular-eslint/template/conditional-complexity': 'error',
  '@angular-eslint/template/cyclomatic-complexity': 'error',
  '@angular-eslint/template/no-call-expression': 'error',
  '@angular-eslint/template/no-duplicate-attributes': 'error',
  '@angular-eslint/template/no-positive-tabindex': 'error',
  '@angular-eslint/template/use-track-by-function': 'error',
};
module.exports = {
  rules,
  extends: ['plugin:@angular-eslint/template/recommended'],
};
