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
    },

    autoprefixer: {
      browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
    }

  });

  return app.toTree();
};
