/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-revelation-ui',
  // https://github.com/aexmachina/ember-cli-sass#addon-usage
  included: function(app) {
    this._super.included(app);

    var iconFontPath = app.bowerDirectory + '/font-awesome/fonts/';
    var bootstrapPath = app.bowerDirectory + '/bootstrap/js/dist/'

    //Import Font-Awesome font files into asset directory
    app.import(iconFontPath + 'fontawesome-webfont.eot', { destDir: 'assets/fonts' });
    app.import(iconFontPath + 'fontawesome-webfont.svg', { destDir: 'assets/fonts' });
    app.import(iconFontPath + 'fontawesome-webfont.ttf', { destDir: 'assets/fonts' });
    app.import(iconFontPath + 'fontawesome-webfont.woff', { destDir: 'assets/fonts' });
    app.import(iconFontPath + 'fontawesome-webfont.woff2', { destDir: 'assets/fonts' });

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
  }
};
