const path = require('path');

module.exports = {
    context: path.resolve(__dirname, '../app/assets/js'),
    entry: './main.js',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../app/public/js'),
        filename: './[name].js',
    },
    resolve: {
        extensions:['.ts','.js','.json']
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'eslint-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test:/\.ts$/,
                exclude: /node_modules/,
                loader:'awesome-typescript-loader'
            }
        ]
    }
}
