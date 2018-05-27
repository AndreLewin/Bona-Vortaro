// Config for the webpack-dev-server, the output is not saved

require('dotenv').load();

module.exports = {
    entry: {
        app: './client/index.jsx'
    },
    output: {
        filename: '[name].js',
        // Specifies the name of each output file on disk
        path: '/',
        // The location on disk the files are written to
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true,
        port: process.env.PORT,
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              loaders: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ['react', 'stage-0']
              }
            },
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"]},
            {test: /\.(png|jpg|gif)$/, use: ["file-loader"]},
        ]
    }
};