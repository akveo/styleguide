module.exports = {
  extends: [
    '../typescript/rules',
    '../react/rules',
  ].map(require.resolve),
  rules: {},
};
