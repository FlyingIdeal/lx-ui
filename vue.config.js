const path = require('path');

module.exports = {
	pages: {
		index: {
			entry: 'example/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		}
	},
	chainWebpack: config => {
		config.module
			.rule('js')
			.include.add(path.resolve(__dirname, 'package')).end()
			.use('babel')
			.loader('babel-loader')
			.tap(options => {
				return options
			})
	}
}