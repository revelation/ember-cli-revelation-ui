import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'ul',
  classNames: 'dropdown-menu',
  attributeBindings: ['aria-labelledby'],

  // Accessibility
  'aria-labelledby': ''
});
