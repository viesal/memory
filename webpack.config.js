import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import', '@babel/plugin-proposal-class-properties'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				},

				test: /\.js$/
			},
			{
				test: /\.css$/,

				use: [
					{
						loader: 'style-loader',

						options: {
							sourceMap: true
						}
					},
					{
						loader: 'css-loader'
					}
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
						},
					},
				],
			},
		]
	},

	entry: {
		index: './src/index'
	},

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './')
	},

	mode: 'development',

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},
	plugins: [
		//   new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'memory'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, './'),
		compress: true,
		port: 9000,
		open: true
	}
};
