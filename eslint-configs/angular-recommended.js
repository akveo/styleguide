module.exports = {
  extends: [],
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        '../typescript/rules.js',
        '../angular/rules.js',
        './rxjs-recommended.js',
        '../rxjs/rules-angular.js',
      ],
    },
    {
      files: ['*.html'],
      extends: ['../angular/rules-template.js'],
    },

  ],
  rules: {},
};
