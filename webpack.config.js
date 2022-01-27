const path = require('path');
const { bundler, styles } = require( '@ckeditor/ckeditor5-dev-utils' );

module.exports = {
    entry: './src/footnote.js',
    output: {
        filename: 'footnote.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
    },
    mode: 'production',

    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [ 'raw-loader' ]
            },
            {
                test: /\.css$/,
                use: ['css-loader',]
            }
        ]
    }
};
