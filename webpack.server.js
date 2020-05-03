const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports ={
	target: 'node',
	entry: './server.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/build'
	},
	module:{
		rules:[{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/./node_modules/',
			options: {
				presets:[
					'react',
					'stage-0',
					['env', {
						target:{browers: ['last 2 versions']}
					}]
				]
			}
		},
		{
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
		]
	},
	externals: [webpackNodeExternals()]
}