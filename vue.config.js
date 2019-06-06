const path = require('path')

module.exports = {
	pages: {
		main: {
			entry: 'src/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		}
	},
	chainWebpack(config) {
		// This allows us to refer to custom libs by a nicer name
		config.resolve.alias.set(
			'LibraryName',
			path.resolve(__dirname, 'src/lib/library_path.js')
		)
	},
	lintOnSave: true
}
