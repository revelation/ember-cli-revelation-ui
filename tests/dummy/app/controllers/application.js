import Ember from 'ember';

export default Ember.Controller.extend({
  // Service::Menu Injected into global application controller for property access
  // Service::Menu Injected into global application router for method access
  // TBD: May rename as layout-preferences
  menu: Ember.inject.service('menu'),

  // +++
  // Dummy Only
  // +++

  // For displaying loading state on async button option
  asyncAction1: false,
  asyncAction2: false,
  mySelectOptions: [
    {title: 'Bears', id: 1},
    {title: 'Tigers', id: 2},
    {title: 'Lions', id: 3}
  ],

  actions: {
    sendMyAction() {
      window.alert('You triggered an action!');
      console.log('yo');
    },

    sendMyActionWithParams(param1, param2, param3) {
      window.alert(param1 + ', ' + param2 + ', ' + param3);
      console.log('yo');
    },

    asyncAction1() {
      this.set('asyncAction1', true);
      Ember.run.later(this, function(){
        this.set('asyncAction1', false);
      }, 1000);
    },

    asyncAction2() {
      this.set('asyncAction2', true);
      Ember.run.later(this, function(){
        this.set('asyncAction2', false);
      }, 1000);
    }
  }
});
