var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: { path: path.resolve(__dirname,'dist'),
		    filename: 'index_bundle.js'
		    },
	module : {
		rules : [ 
			{test:/\.(js)$/, use:'babel-loader'} , 
			{
				test: /\.css$/,
        		use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        	},
        	{
			  test: /\.(gif|png|jpe?g|svg)$/i,
			  use: [
			    {
			      loader: 'image-webpack-loader',
			      options: {
			        bypassOnDebug: true, // webpack@1.x
			        disable: true, // webpack@2.x and newer
			      },
			    },
			  ],
			}
			]
		},
	mode: 'development',
	plugins: [ 
		new HtmlWebpackPlugin(
			{ template: './src/index.html' }
			) 
	]
}