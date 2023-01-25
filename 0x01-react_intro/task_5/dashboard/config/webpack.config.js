// Webpack uses this to work with directories
const path = require('path');

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {

    // Path to your entry point. From this file Webpack will begin its work
    entry: './src/index.js',

    // Default mode for Webpack is production.
    // Depending on mode Webpack will apply different things
    // on the final bundle. For now, we don't need production's JavaScript 
    // minifying and other things, so let's set mode to development
    mode: 'development',
    devtool: "inline-source-map",

    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    output: {
        path: path.resolve('./dist'),
        publicPath: '',
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        contentBase: path.resolve("./dist"),
        compress: true,
        port: 8564,
    },
    performance: {
        maxAssetSize: 1000000,
        maxEntrypointSize: 1000000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
        ],
    },
};