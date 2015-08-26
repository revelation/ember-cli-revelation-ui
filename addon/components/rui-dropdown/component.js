import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['btn-group'],
  classNameBindings: ['dropup'],
  attributeBindings: ['role'],

  // Defaults
  dropup: false,
  role: 'group'
});
