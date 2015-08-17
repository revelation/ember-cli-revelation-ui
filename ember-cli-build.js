/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // NOTE: Options go here.
  });

  // NOTE: Import syntax examples below.
  // app.import("file1.js");
  // app.import("file2.js");

  return app.toTree();
};
