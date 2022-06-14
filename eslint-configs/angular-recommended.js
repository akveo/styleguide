module.exports = {
  extends: [],
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        '../typescript/rules.js',
        '../angular/rules.js',
      ],
    },
    {
      files: ['*.html'],
      extends: ['../angular/rules-template.js'],
    },

  ],
  rules: {},
};
