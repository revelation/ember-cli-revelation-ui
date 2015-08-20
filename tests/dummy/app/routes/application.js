import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    alertSomething(param1, param2) {
      alert(param1 + ', ' + param2 );
    }
  }

});
