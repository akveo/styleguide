const rules = {
  'react-native/no-unused-styles': 0, //this rule doesn't work well with UI Kitten yet
  'react-native/no-inline-styles': 2,
  'react-native/no-raw-text': 2,
  'react-native/no-single-element-style-arrays': 2,
};

module.exports = {
  plugins: [ 'react-native' ],
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  settings: {
    //this thing doesn't work properly: https://github.com/Intellicode/eslint-plugin-react-native/issues/283
    'react-native/style-sheet-object-names': [ 'StyleService' ],
  },
  rules,
};
