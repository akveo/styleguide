module.exports = {
	extends: [
		'./rxjs/rxjs.eslintrc',
		'./rxjs/rxjs-angular.eslintrc',
		'./rxjs/rxjs-with-store.eslintrc',
	].map(require.resolve),
	rules: {}
};