import Ember from 'ember';

export default Ember.Service.extend({
  unfixMenu: false,
  showMenu: false,

  toggleFixedMenu() {
    this.toggleProperty('unfixMenu');
  },

  toggleMenu() {
    this.toggleProperty('showMenu');
  }
});
