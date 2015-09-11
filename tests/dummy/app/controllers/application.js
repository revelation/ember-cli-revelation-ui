import Ember from 'ember';

export default Ember.Controller.extend({
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
