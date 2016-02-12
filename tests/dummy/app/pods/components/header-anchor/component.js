import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'span',
  attributeBindings: ['name', 'href', 'data-title'],
  name: '',
  'data-title': '',
  href: Ember.computed('name', function(){
    return '#' + this.get('name');
  }),
});
