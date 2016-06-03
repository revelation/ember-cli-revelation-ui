/* jshint node: true */
'use strict'

module.exports = function(/* environment, appConfig */) {
  var ENV = {
    modulePrefix: 'ember-cli-revelation-ui',
    podModulePrefix: 'ember-cli-revelation-ui/pods',

    flashMessageDefaults: {
      extendedTimeout: 0,
      preventDuplicates: true,
      priority: 200,
      showProgress: false,
      sticky: false,
      timeout: 3000,
      type: 'info',
      types: [ 'success', 'warning', 'danger', 'info' ]
    }
  }

  return ENV
}
