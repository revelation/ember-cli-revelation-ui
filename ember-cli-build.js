/* jshint node: true */
/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-addon');
var iconFontPath = 'bower_components/font-awesome/fonts/';
var bootstrapPath = 'bower_components/bootstrap-sass/assets/javascripts/bootstrap/'

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // NOTE: Options go here.

    // sassOptions required to compile sass in addons
    // https://github.com/aexmachina/ember-cli-sass#using-in-addons
    sassOptions: {
      extension: "sass"
    }
  });

  app.import(iconFontPath + 'fontawesome-webfont.eot', { destDir: 'assets/fonts' });
  app.import(iconFontPath + 'fontawesome-webfont.svg', { destDir: 'assets/fonts' });
  app.import(iconFontPath + 'fontawesome-webfont.ttf', { destDir: 'assets/fonts' });
  app.import(iconFontPath + 'fontawesome-webfont.woff', { destDir: 'assets/fonts' });
  app.import(iconFontPath + 'fontawesome-webfont.woff2', { destDir: 'assets/fonts' });

  app.import(bootstrapPath + 'button.js', { type: 'vendor' });
  app.import(bootstrapPath + 'collapse.js', { type: 'vendor' });
  app.import(bootstrapPath + 'dropdown.js', { type: 'vendor' });
  app.import(bootstrapPath + 'modal.js', { type: 'vendor' });
  app.import(bootstrapPath + 'tooltip.js', { type: 'vendor' });
  app.import(bootstrapPath + 'popover.js', { type: 'vendor' });

  return app.toTree();
};
