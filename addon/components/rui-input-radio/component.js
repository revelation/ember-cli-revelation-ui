import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  //TBD: Extrapolate 'name' property for radio groups from bound 'cehcked' prop
  // These two values should always be the same
  layout: layout,
  tagName: 'div',
  classNames: ['radio'],
  classNameBindings: ['disabled:disabled'],

  value: null,
  checked: null,

  isChecked: Ember.computed('value', 'checked', function(){
    return this.get('value') === this.get('checked');
  }),

  actions: {
    change: function() {
      this.set('checked', this.get('value'));
    }  
  }
});
