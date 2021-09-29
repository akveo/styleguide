/*
 * USAGE REQUIREMENTS:
 * yarn add -D eslint-plugin-react eslint-plugin-react-native
 */

/*
 * Additional information:
 * https://github.com/yannickcr/eslint-plugin-react
 * https://www.npmjs.com/package/eslint-plugin-react-native
 */

const rules = {
	'react/jsx-uses-react': 'error',
	'react/jsx-uses-vars': 'error',
	'react/boolean-prop-naming':
    [ 'error', { 'validateNested': true,
    	'rule': '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
	'react/no-multi-comp': [ 'error', { 'ignoreStateless': true }],
	'react/jsx-filename-extension':
    [ 'error', { 'extensions': [ '.tsx', '.jsx' ] }],
	'react/no-unstable-nested-components': [
		'error',
		{ 'allowAsProps': true }
	],
	'react/jsx-curly-spacing': [ 2, { 'when': 'never' }],
	'react/jsx-closing-bracket-location':
		[ 'error', { selfClosing: 'after-props' }],
	'react/jsx-closing-tag-location': 'error',
	'react/jsx-boolean-value': [ 'error', 'always' ],
	'react/jsx-curly-brace-presence':
		[ 'error', { props: 'never', children: 'never' }],
	'react/require-render-return': 'error',
	'react/jsx-curly-newline': 'error',
	'react/jsx-first-prop-new-line': [ 'error', 'multiline' ],
	'react/jsx-fragments': [ 'error', 'syntax' ],
	'react/jsx-indent-props': [ 'error', 2 ],
	'react/jsx-key': 'error',
	'react/jsx-max-props-per-line':
		[ 'error', { maximum: 3 }],
	'react/jsx-no-bind': 'error',
	'react/jsx-no-constructed-context-values': 'error',
	'react/jsx-no-duplicate-props': 'error',
	'react/jsx-no-useless-fragment': 'error',
	'react/jsx-one-expression-per-line': [ 'error', { allow: 'literal' }],
	'react/jsx-pascal-case': 'error',
	'react/jsx-props-no-multi-spaces': 'error',
	'react/jsx-space-before-closing': [ 'error', 'always' ],
	'react/jsx-tag-spacing':
		[ 'error',
			{ 'closingSlash': 'never',
				'beforeSelfClosing': 'always',
				'afterOpening': 'never',
				'beforeClosing': 'never',
			}
		],
	'react/jsx-wrap-multilines': 'error',
	'react/no-access-state-in-setstate': 'error',
	'react/no-children-prop': 'error',
	'react/no-deprecated': 'error',
	'react/no-direct-mutation-state': 'error',
	'react/no-find-dom-node': 'error',
	'react/no-is-mounted': 'error',
	'react/no-namespace': 'error',
	'react/no-redundant-should-component-update': 'error',
	'react/no-render-return-value': 'error',
	'react/no-string-refs': 'error',
	'react/no-this-in-sfc': 'error',
	'react/no-unknown-property': 'error',
	'react/prefer-es6-class': 'error',
	'react/prefer-stateless-function': 'error',
	'react/self-closing-comp': 'error',
	'react/style-prop-object': 'error',
	'react-native/no-unused-styles': 2,
	'react-native/no-inline-styles': 2,
	'react-native/no-raw-text': 2,
	'react-native/no-single-element-style-arrays': 2,
};

module.exports = {
	plugins: [ 'react', 'react-native' ],
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime', // For React 17.0 version and higher
	],
	parserOptions: {
		'ecmaFeatures': {
			'jsx': true
		}
	},
	settings: {
		'react-native/style-sheet-object-names': [ 'StyleService' ]
	},
	rules,
};
