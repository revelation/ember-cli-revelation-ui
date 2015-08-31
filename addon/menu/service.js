import Ember from 'ember';

export default Ember.Service.extend({
  showMenu: false,

  toggleMenu() {
    this.toggleProperty('showMenu');
  }
});
