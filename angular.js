module.exports = {
  extends: [],
  overrides: [
    {
      files: ["*.ts"],
      extends: ["./typescript/typescript", "./angular/angular.js"],
    },
    {
      files: ["*.html"],
      extends: ["./angular/angular-template.js"],
    },
   
  ],
  rules: {},
};
