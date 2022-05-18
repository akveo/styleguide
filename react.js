module.exports = {
	extends: [
		'./rules/javascript',
		'./rules/react',
	].map(require.resolve),
	rules: {}
};