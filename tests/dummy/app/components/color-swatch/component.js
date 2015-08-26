import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  attributeBindings: ['data-variable'],
  classNames: ['color-swatch'],
  'data-variable': ''
});
