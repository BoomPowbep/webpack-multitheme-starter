const Encore = require('@symfony/webpack-encore');
const path = require('path');

const assets_path = path.resolve('./src');
const output_path = path.resolve('./public/build');
const public_path = '/build';
const js_path = path.join(assets_path, './js');
const scss_core_path = path.join(assets_path, './scss/core');
const scss_dark_path = path.join(assets_path, './scss/variants/dark');
const scss_light_path = path.join(assets_path, './scss/variants/light');

Encore
    .setOutputPath(output_path)
    .setPublicPath(public_path)

    .addEntry('app', [
        path.join(js_path, '/main.js'),
        path.join(scss_core_path, '/style.scss'),
    ])

    .addStyleEntry('dark', [
        path.join(scss_dark_path, '/style.scss')
    ])

    .addStyleEntry('light', [
        path.join(scss_light_path, '/style.scss')
    ])

    .enableSassLoader()

    .enableSingleRuntimeChunk()
    .enableSourceMaps(Encore.isProduction())
    .enableVersioning(false)
    .configureFilenames({
        images: 'images/[name].[ext]'
    })
;

let config = Encore.getWebpackConfig();
config.watchOptions = {poll: true, ignored: /node_modules/};

module.exports = config;
