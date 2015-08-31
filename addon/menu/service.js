import Ember from 'ember';

export default Ember.Service.extend({
  // TBD: May rename as layout-preferences
  unfixMenu: false,
  showMenu: false,

  toggleFixedMenu() {
    this.set('showMenu', false);
    this.toggleProperty('unfixMenu');
  },

  toggleMenu() {
    this.toggleProperty('showMenu');
  }
});
