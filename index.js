/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-revelation-ui',
  // https://github.com/aexmachina/ember-cli-sass#addon-usage
  included: function(app) {
    this._super.included(app);
  },
  // Automatically rebuilds on change
  isDevelopingAddon: function() {
    return true;
  }
};
