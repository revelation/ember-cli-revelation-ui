import Ember from 'ember';
import layout from './template';

export default Ember.TextField.extend({
  layout: layout,
  type: 'text',
  classNames: ['form-control']
});
