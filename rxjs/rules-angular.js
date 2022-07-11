const rules = {
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
  plugins: ['rxjs', 'rxjs-angular'],
  extends: [
    'plugin:rxjs/recommended',
  ],
};
  