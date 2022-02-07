const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);

  const { externals } = singleSpaWebpackConfig;

  singleSpaWebpackConfig.externals = {
    ...externals,
    rxjs: "rxjs",
    "rxjs/operators": "rxjs/operators",
    "@angular/animations": "@angular/animations",
    "@angular/animations/browser": "@angular/animations/browser",
    "@angular/common": "@angular/common",
    "@angular/common/http": "@angular/common/http",
    "@angular/compiler": "@angular/compiler",
    "@angular/core": "@angular/core",
    "@angular/forms": "@angular/forms",
    "@angular/platform-browser-dynamic": "@angular/platform-browser-dynamic",
    "@angular/platform-browser": "@angular/platform-browser",
    "@angular/platform-browser/animations": "@angular/platform-browser/animations",
    "@angular/router": "@angular/router",
    "single-spa": "single-spa",
    "mfe-lib-components": "mfe-lib-components",
    "@pdpj/fed-main": "@pdpj/fed-main",
  };

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig
}