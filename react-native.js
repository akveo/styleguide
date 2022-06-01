module.exports = {
  extends: [
    './typescript/rules',
    './react-native/rules',
  ].map(require.resolve),
  rules: {},
};
