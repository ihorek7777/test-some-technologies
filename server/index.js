const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

const app = express();

var args = process.argv;

args = args.map(arg => {
    if (arg.split('=').length === 2) {
        return {
            field: arg.split('=')[0],
            value: arg.split('=')[1]
        }
    }
});

const argENV = args.filter(arg => {
    if (arg) {
        return arg.field === 'ENV';
    } else {
        return false;
    }
})[0];

if (argENV.value === 'all') {

    const compiler = webpack(webpackConfig); // if you want to start frontend with start server
    // if you want to start frontend separately - need to change

    app.use(webpackDevMiddleware(compiler, {
        publicPath: "/" // Same as `output.publicPath` in most cases.
    }));

} else {

}

app.listen(3000, function () {
    console.log('listening on port 3000!');
});