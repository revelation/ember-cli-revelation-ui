// NOTE: Extending LinkComponent does not work in Ember 2.0. A fix seems to be
//   available in Ember 2.1 beta.
//   https://github.com/emberjs/ember.js/blob/v2.1.0-beta.4/CHANGELOG.md#210-beta3-september-6-2015
//   The solution below fixes the issue in Ember 1.13 but doesn't work in 2.0.
//   https://github.com/emberjs/ember.js/issues/11912

import Ember from 'ember';

export default Ember.LinkComponent.extend({
  classNames: ['nav-link'],
  positionalParams: 'params',

  init: function() {
    // this._super.apply(this, arguments);
    this._super(...arguments);
    Ember.Logger.log('Attrs: ' + this.get('attrs'));
    Ember.Logger.log('Params: ' + this.get('params'));
    Ember.Logger.log('Classes are ' + this.get('classNames'));
  },

  didReceiveAttrs: function() {
    this.attrs.params = this.get('params');
    this.attrs.hasBlock = true;
  }
});
