module.exports = {
	extends: [
		'./typescript/typescript',
		'./react-native/react-native',
	].map(require.resolve),
	rules: {}
};