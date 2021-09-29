/*
 * USAGE REQUIREMENTS:
 * make sure that eslint is installed or run:
 * yarn add -D eslint
 */

/*
 * Additional information:
 * https://github.com/eslint/eslint
 */

/*
 * Update overrides property if path was changed or config was not provided
 */

const rules = {
	'prettier/prettier': 0,
	curly: 'error',
	'object-curly-spacing': [ 'error', 'always' ],
	'operator-linebreak': [ 'error', 'after' ],
	'semi-style': [ 'error', 'last' ],
	'semi-spacing': 'error',
	'comma-style': [ 'error', 'last' ],
	'max-len': [ 'error', { code: 80 }],
	'keyword-spacing': [ 'error', { before: true }],
	'array-bracket-spacing': [ 'error', 'always', { objectsInArrays: false }],
	'space-infix-ops': 'error',
	'space-unary-ops': 'error',
	'space-in-parens': [ 'error', 'never' ],
	'no-new-wrappers': 'error',
	'no-new-object': 'error',
	'no-new-func': 'error',
	'prefer-template': 'error',
	'no-array-constructor': 'error',
	'no-var': 'error',
	'prefer-const': 'error',
	'no-throw-literal': 'error',
	'new-cap': [ 'error', { 'newIsCap': true }],
	'default-case': 'error',
	'eqeqeq': [ 'error', 'smart' ],
	'func-style': [ 'error', 'expression', { 'allowArrowFunctions': true }],
	'prefer-arrow-callback': 'error',
	'class-methods-use-this': 'error',
	'array-callback-return': 'error',
	'jsx-quotes': [ 'error', 'prefer-single' ],
	'indent': [ 'error', 2 ],
	'no-unneeded-ternary': 'error',
	'no-restricted-syntax': [ 'error', {
		'selector': 'ExportDefaultDeclaration',
		'message': 'Prefer named exports',
	}],
	'no-template-curly-in-string': 'error',
	'no-constructor-return': 'error',
	'no-extra-bind': 'error',
	'no-floating-decimal': 'error',
	'no-invalid-this': 'error',
	'no-iterator': 'error',
	'no-labels': 'error',
	'no-lone-blocks': 'error',
	'no-multi-spaces': 'error',
	'no-multi-str': 'error',
	'no-new': 'error',
	'no-self-compare': 'error',
	'no-useless-call': 'error',
	'no-useless-concat': 'error',
	semi: [ 'error', 'always' ],
	'brace-style': 'error',
	'no-redeclare': 'error',
	'no-extra-semi': 'error',
	'no-unused-vars': 'error',
	'no-empty-function': 'error',
	'no-duplicate-imports': 'error',
	'func-call-spacing': [ 'error', 'never' ],
	'comma-dangle': [ 'error', {
		'arrays': 'only-multiline',
		'objects': 'only-multiline',
		'imports': 'only-multiline',
		'exports': 'only-multiline',
		'functions': 'never'
	}],
	'quotes': [ 'error', 'single' ],
	'lines-between-class-members': [ 'error', 'always' ],
	'init-declarations': [ 'error', 'always' ],
	'key-spacing': 'error',
	'comma-spacing': [ 'error', { before: false, after: true }],
	'padding-line-between-statements': [
		'error',
		{
			blankLine: 'always',
			prev: '*',
			next: [ 'return', 'if', 'function', 'export' ]
		}
	],
};

module.exports = {
	root: true,
	rules,
	extends: [
		'eslint:recommended',
		'@react-native-community',
	],
	overrides: [
		{
			files: [ '*.ts', '*.tsx' ],
			extends: [ './eslint_typescript.js' ], // typescript config path
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: 'tsconfig.json',
			},
		},
		{
			files: [ '*.jsx', '*.tsx' ],
			extends: [ './eslint_react_native.js' ], // react config path
		}
	]
};
