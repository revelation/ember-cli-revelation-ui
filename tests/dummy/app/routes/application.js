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
    },

    // +++
    // Dummy Only
    // +++

    sendMyAction() {
      window.alert('You triggered an action!');
    },

    sendMyActionWithParams(param1, param2) {
      window.alert(param1 + ', ' + param2 );
    },

    asyncAction1() {
      this.controller.set('asyncAction1', true);
      Ember.run.later(this, function(){
        this.controller.set('asyncAction1', false);
      }, 1000);
    },

    asyncAction2() {
      this.controller.set('asyncAction2', true);
      Ember.run.later(this, function(){
        this.controller.set('asyncAction2', false);
      }, 1000);
    },
  }

});
