const path = require('path');

module.exports = {
    entry: './singlefileentry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'singleFileY.js',
        library: {
            name: 'Y',
            type: 'var',
        },
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
};
