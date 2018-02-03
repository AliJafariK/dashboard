// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var $ = require('jquery');
// require( 'datatables.net-dt' )( window, $ );
var jQuery = require('jquery');
// var dt      = require( 'datatables.net' )();
// var buttons = require( 'datatables.net-buttons' )()
// var dt      = require( 'datatables.net' )( window, $ );
// var buttons = require( 'datatables.net-buttons' )( window, $ );

module.exports = {
	entry: './src/index.js',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: '.',
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader' // creates style nodes from JS strings
					},
					{
						loader: 'css-loader' // translates CSS into CommonJS
					},
					{
						loader: 'sass-loader' // compiles Sass to CSS
					}
				]
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|svg|jpg|gif|ico)$/,
				use: [ 'file-loader' ]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [ 'file-loader' ]
			},
			{
				test: /\.(csv|tsv)$/,
				use: [ 'csv-loader' ]
			},
			{
				test: /\.xml$/,
				use: [ 'xml-loader' ]
			}
		],
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: [ 'react', 'es2015', 'stage-0' ],
					plugins: [ 'react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties' ]
				}
			},
			{
				test: /\.css$/,
				loaders: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.png$/,
				loader: 'url-loader?limit=100000'
			},
			{
				test: /\.jpg$/,
				loader: 'file-loader'
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader: 'file-loader'
			}
		]
	},

	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	],
	output: {
		filename: 'middle.js',
		publicPath: '/'
	}
};
