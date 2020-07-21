const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    output:{
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebPackPlugin()
    ]
}