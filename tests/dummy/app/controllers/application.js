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
  checkBoxExamples: {
    meatCheckbox: true,
    cheeseCheckbox: false,
    picklesCheckbox: false
  },
  radioValue: 'red',

  actions: {

    // Actions sent to Service::Menu from template
    toggleMenu() {
      this.get('menu').toggleMenu();
    },

    toggleFixedMenu() {
      this.get('menu').toggleFixedMenu();
    },
    
    sendMyAction() {
      window.alert('You triggered an action!');
    },

    sendMyActionWithParams(param1, param2, param3) {
      window.alert(param1 + ', ' + param2 + ', ' + param3);
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
