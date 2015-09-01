import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'i',
  classNames: ['fa'],
  classNameBindings: ['nameComputed', 'spinComputed'],

  // Constructors
  classPrefix: 'fa',

  // Computed
  nameComputed: Ember.computed('style', function() {
    // Builds the icon class.
    // REVIEW: I wonder if there's an "easy" way to have this check if the icon
    //   name exists that doesn't rely on manually updating an array. It would
    //   be nice to give an Ember warning if the icon name doesn't exist.
    var iconName = this.get('name');
    return this.get('classPrefix') + '-' + iconName;
  }),

  spinComputed: Ember.computed('style', function() {
    // Adds the spin class if the icon should be spinning.
    if (this.get('spin')) {
      return this.get('classPrefix') + '-spin';
    } else {
      return null;
    }
  })
});
