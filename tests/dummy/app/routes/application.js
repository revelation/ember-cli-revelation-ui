import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    sendAction() {
      window.alert('You triggered an action!');
    },

    sendActionWithParams(param1, param2) {
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
