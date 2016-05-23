import Ember from 'ember'
import layout from './template'

/* Basic Usage

* this.get('flashMessages').success('A success message!');
* this.get('flashMessages').danger('A danger message!');
* this.get('flashMessages').info('A info message!');
* this.get('flashMessages').warning('A warning message!');

*/

const {
  Component,
  inject
} = Ember

export default Component.extend({
  layout,
  flashMessages: inject.service(),
  classNames: ['ember-cli-flash']
})
