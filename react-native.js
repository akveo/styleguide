module.exports = {
	extends: [
		'./rules/javascript',
		'./rules/react-native',
	].map(require.resolve),
	rules: {}
};