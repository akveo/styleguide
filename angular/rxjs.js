// Before use:
// - set up eslint for typescript (if not already done)
// - run `npm i -D eslint-plugin-rxjs`
// - run `npm install eslint-plugin-rxjs-angular -D`
  rules = {
    'rxjs/no-compat': 'error',
    'rxjs/no-ignored-observable': 'error',
    'rxjs/no-exposed-subjects': ['error', { allowProtected: true }],
    'rxjs/no-topromise': 'error',
    'rxjs/no-cyclic-action': 'error',
    'rxjs/no-unsafe-catch': 'error',
    'rxjs/no-unsafe-first': 'error',
    'rxjs/no-unsafe-switchmap': 'error',
    'rxjs-angular/prefer-takeuntil': [
      'error',
      {
        checkDecorators: ['Component', 'Directive', 'Pipe', 'Injectable'],
        checkDestroy: false,
      },
    ],
  };

  module.exports = {
    rules,
    extends: ['plugin:rxjs/recommended'],
  };