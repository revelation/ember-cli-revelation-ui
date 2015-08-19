/* jshint node: true */
/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // NOTE: Options go here.

    // sassOptions required to compile sass in addons
    // https://github.com/aexmachina/ember-cli-sass#using-in-addons
    sassOptions: {
      extension: "sass"
    }
  });

  // NOTE: Import syntax examples below.
  // app.import("file1.js");
  // app.import("file2.js");

  return app.toTree();
};
