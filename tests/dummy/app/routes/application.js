import Ember from 'ember';

export default Ember.Route.extend({
  // Service::Menu Injected into global application controller for property access
  // Service::Menu Injected into global application router for method access
  // TBD: May rename as layout-preferences
  menu: Ember.inject.service('menu'),

  actions: {

    // Actions sent to Service::Menu from template
    toggleMenu() {
      this.get('menu').toggleMenu();
    },

    toggleFixedMenu() {
      this.get('menu').toggleFixedMenu();
    }
  }
  
});
