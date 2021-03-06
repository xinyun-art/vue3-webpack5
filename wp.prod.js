const { merge } = require('webpack-merge')
const common = require('./wp.common')

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
})
