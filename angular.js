module.exports = {
  extends: [],
  overrides: [
    {
      files: ["*.ts"],
      extends: ["./typescript/rules-typescript", "./angular/rules.js"],
    },
    {
      files: ["*.html"],
      extends: ["./angular/rules-template.js"],
    },
   
  ],
  rules: {},
};
