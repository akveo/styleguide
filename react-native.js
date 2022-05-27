module.exports = {
  extends: [
    './typescript/rules-typescript',
    './react-native/rules',
  ].map(require.resolve),
  rules: {}
};
