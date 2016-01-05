var path = require("path");
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

// process.env.NODE_ENV  product or dev

var config = {
    devtool:false,
    entry: {
        app : path.resolve(__dirname, 'components/main'),
        // vendor: ['jquery', 'react', 'react-dom', 'material-ui', 'redux']
    },
    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: "[name].js" 
        ,publicPath: "/build/"
    },

    module: {
        loaders: [
            { 
                test: /\.js?$/, 
                loader: 'babel-loader',
                exclude: [node_modules_dir]
            },            
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx'] 
    },
    plugins: [  
        // new webpack.optimize.UglifyJsPlugin({
        //     mangle: {
        //         except: ['import', '$', 'export']
        //     },
        //     compress: {
        //         warnings: false
        //     }
        // }),
    ]
};
module.exports = config;