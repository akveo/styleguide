module.exports = {
  extends: [],
  overrides: [
    {
      files: [ '*.ts' ],
      extends: [ './typescript/rules', './angular/rules.js', 'plugin:@angular-eslint/recommended', 'plugin:rxjs/recommended' ],
    },
    {
      files: [ '*.html' ],
      extends: [ './angular/rules-template.js', 'plugin:@angular-eslint/template/recommended' ],
    },
   
  ],
  rules: {},
};
