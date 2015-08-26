import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['color-swatch'],
  classNameBindings: ['computedClass'],
  computedClass: Ember.computed('color', function() {
    return 'swatch-' + this.get('color');
  })
});
