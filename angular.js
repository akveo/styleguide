module.exports = {
	extends: [

	],
	overrides: [
		{
			files: ['*.ts'],
			extends: ['./rules/typescript', './rxjs', './angular/angular.eslintrc']
		},
		{
			files: ['*.html'],
			extends: ['./angular/angular-template.eslintrc']
		},
	],
	rules: {},
};