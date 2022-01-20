const rules = {
  'react-native/no-inline-styles': 'error',
  'react-native/no-color-literals': 'error',
  'react-native/no-raw-text': 'error',
  'react-native/no-single-element-style-arrays': 'error',
}

module.exports = {
  rules,
  plugins: [
    'react',
    'react-native'
  ],
  extends: [
    './react.js',
  ],
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  env:{
    'react-native/react-native': true,
  }
}
