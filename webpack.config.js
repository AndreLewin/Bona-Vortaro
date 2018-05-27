// Config for the bundle in public, public ready to be hosted in the production server

require('dotenv').load();

module.exports = {
    entry: {
        app: './client/index.jsx'
    },
    output: {
        filename: '[name].js',
        // Specifies the name of each output file on disk
        path: __dirname+'/public',
        // The location on disk the files are written to
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              loaders: 'babel-loader',
              exclude: /node_modules/,
              query: {
                // Note: Uglify from the babel package can't understand ES6
                presets: ['react', 'stage-0', 'babel-preset-es2015']
              }
            },
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"]},
            {test: /\.(png|jpg|gif)$/, use: ["file-loader"]},
        ]
    }
};