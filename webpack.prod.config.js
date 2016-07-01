var skyuxPackage = require('blackbaud-skyux/package.json');
var skyuxSri = require('blackbaud-skyux/dist/sri.json');
var webpackConfig = require('./webpack.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var format = require('util').format;

const getCDN = (template, file) => {
  const url = format(
    'https://sky.blackbaudcdn.net/skyux/%s/%s',
    skyuxPackage.version,
    file
  );
  const integrity = format(
    'integrity="%s" crossorigin="anonymous"',
    skyuxSri['@dist/' + file].integrity
  );
  return format(template, url, integrity);
}

webpackConfig.plugins.push(
  new HtmlWebpackPlugin({
      title: 'Custom Template',
      template: './app/index_template.ejs',
      inject: 'body',
      skyCSS: getCDN('<link rel="stylesheet" href="%s" %s>', 'css/sky-bundle.css'),
      skyJS: getCDN('<script src="%s" %s></script>', 'js/sky-bundle.min.js')
  })
);

module.exports = webpackConfig;
