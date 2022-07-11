const rules = {
  'rxjs/no-compat': 'error',
  'rxjs/no-ignored-observable': 'error',
  'rxjs/no-exposed-subjects': ['error', { allowProtected: true }],
  'rxjs/no-topromise': 'error',
  'rxjs/no-cyclic-action': 'error',
  'rxjs/no-unsafe-catch': 'error',
  'rxjs/no-unsafe-first': 'error',
  'rxjs/no-unsafe-switchmap': 'error',
};
  
module.exports = {
  rules,
  plugins: ['rxjs'],
  extends: [
    'plugin:rxjs/recommended',
  ],
};
  