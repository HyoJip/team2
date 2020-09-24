const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'front'),
	entry: {
		index: './index.js',
		reserveForm: './js/reservationForm.js',
		roomReserveList: './js/roomReserveList.js',
		userReserveList: './js/userReserveList.js',
		reserveDetail: './js/reserveDetail.js'
	},
	output: {
		path: path.resolve(__dirname, 'webapp/resources'),
		filename: '[name].js',
		publicPath: '/resources/',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpg)$/,
				use: 'file-loader'
			}
		]
	},
};