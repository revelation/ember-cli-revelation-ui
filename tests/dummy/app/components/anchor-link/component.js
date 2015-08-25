import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'a',
  classNames: ['anchor-link'],
  attributeBindings: ['name', 'href'],
  name: '',
  href: Ember.computed('name', function(){
    return '#' + this.get('name');
  }),
});
