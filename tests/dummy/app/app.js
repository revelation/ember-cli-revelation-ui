import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

Ember.Component.reopen({
  attributeBindings: ['dataTest:data-test'],
  dataTest: Ember.computed(function() {
    const suffix = this.get('dataTestSuffix')
    let baseId = (this._debugContainerKey || '')
      .replace(/.*component:/g, '')
      .replace(/\//g, '-')
    return suffix ? `${baseId}-${suffix}` : baseId
  })
})

loadInitializers(App, config.modulePrefix);

export default App;
