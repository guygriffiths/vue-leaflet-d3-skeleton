module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/essential', '@vue/prettier'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prefer-arrow-callback': 'warn',
		'prefer-template': 'warn',
		'no-unused-vars': 'warn'
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
