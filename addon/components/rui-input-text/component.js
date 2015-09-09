import Ember from 'ember';
import layout from './template';

export default Ember.TextField.extend({
  type: 'text',
  classNames: ['form-control']
});
