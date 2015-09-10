import Ember from 'ember';

export default Ember.Route.extend({
  // Service::Menu Injected into global application controller for property access
  // Service::Menu Injected into global application router for method access
  // TBD: May rename as layout-preferences
  menu: Ember.inject.service('menu')
  
});
