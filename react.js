module.exports = {
	extends: [
		'./typescript/typescript',
		'./react/react',
	].map(require.resolve),
	rules: {}
};