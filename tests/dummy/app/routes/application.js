import Ember from 'ember';

export default Ember.Route.extend({
  // Inject menu service into global application controll
  // Also injected in application router for method access
  menu: Ember.inject.service('menu'),

  actions: {

    toggleMenu() {
      this.get('menu').toggleMenu();
    },

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
