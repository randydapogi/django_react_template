module.exports = {
    module: {
        rules: [
            {
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			  },
			  {
				test: /\.(css|scss)$/,
				use: [
				  "style-loader",
				  "css-loader",
				  "sass-loader"
				]
			  },
			{
			  test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
			  loaders: ["file-loader"]
			},
			{
			  test: /\.(png|jpg|gif|svg)$/,
			  loader: 'file-loader',
			  options: {
				name: '[name].[ext]',
				useRelativePath: true,
			  },
			},
        ]
    }
};