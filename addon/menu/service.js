import Ember from 'ember';

export default Ember.Service.extend({
  // Dependency: ember-cli-cookie
  // Inititialized and injected directly to this service
  // TBD: May rename this as layout-preferences
  unfixMenu: false,
  showMenu: false,

  unfixMenuObserver: Ember.observer('unfixMenu', function(){
    var cookie = this.get('cookie');
    cookie.setCookie('userprefsmenuunfix', this.get('unfixMenu'));
  }),

  toggleFixedMenu() {
    this.toggleProperty('unfixMenu');
  },

  toggleMenu() {
    this.toggleProperty('showMenu');
  }
});
