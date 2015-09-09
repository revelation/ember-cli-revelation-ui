import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'i',
  classNames: ['fa', 'fa-spin', 'fa-circle-o-notch']
});
