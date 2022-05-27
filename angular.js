module.exports = {
  extends: [],
  overrides: [
    {
      files: ["*.ts"],
      extends: ["./typescript/typescript", "./rxjs", "./angular/angular.eslintrc"],
    },
    {
      files: ["*.html"],
      extends: ["./angular/angular-template.eslintrc"],
    },
  ],
  rules: {},
};
