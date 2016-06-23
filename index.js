/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-revelation-ui',
  fingerprint: {
    enabled: true
  },

  included: function(app) {
    this._super.included(app);

    var iconFontPath = app.bowerDirectory + '/font-awesome/fonts/';
    var bootstrapPath = app.bowerDirectory + '/bootstrap/js/dist/';
    var tetherPath = app.bowerDirectory + '/tether/dist/js/';

    //Import Font-Awesome font files into asset directory
    app.import(iconFontPath + 'fontawesome-webfont.eot', { destDir: 'assets/fonts' });
    app.import(iconFontPath + 'fontawesome-webfont.svg', { destDir: 'assets/fonts' });
    app.import(iconFontPath + 'fontawesome-webfont.ttf', { destDir: 'assets/fonts' });
    app.import(iconFontPath + 'fontawesome-webfont.woff', { destDir: 'assets/fonts' });
    app.import(iconFontPath + 'fontawesome-webfont.woff2', { destDir: 'assets/fonts' });

    // Import Tether, Bootrap popover dependency
    app.import(tetherPath + 'tether.js', { type: 'vendor' });

    // Import Bootstrap JS Modules in vendor tree
    app.import(bootstrapPath + 'util.js', { type: 'vendor' });
    app.import(bootstrapPath + 'button.js', { type: 'vendor' });
    app.import(bootstrapPath + 'collapse.js', { type: 'vendor' });
    app.import(bootstrapPath + 'dropdown.js', { type: 'vendor' });
    app.import(bootstrapPath + 'modal.js', { type: 'vendor' });
    app.import(bootstrapPath + 'tooltip.js', { type: 'vendor' });
    app.import(bootstrapPath + 'popover.js', { type: 'vendor' });
  },

  // Automatically rebuilds on change
  isDevelopingAddon: function() {
    return true;
  },

  /**
    This code is taken from ember-cli-cors, but the way the addon loads, it
    cannot be loaded itself without being overwritten.  If this needs to be
    updated, reference:

    https://github.com/diploidgenomics/ember-cli-cors/blob/master/index.js
  **/
  serverMiddleware: function(config) {
    config.app.use(function(req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      next();
    });
  }
};
