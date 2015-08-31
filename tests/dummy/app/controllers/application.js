import Ember from 'ember';

export default Ember.Controller.extend({
  menu: Ember.inject.service('menu'),
  // for displaying loading state on async button option
  asyncAction1: false,
  asyncAction2: false
});
