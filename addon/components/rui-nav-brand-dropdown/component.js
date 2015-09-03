import Ember from 'ember';
import layout from './template';
import RuiDropdownComponent from 'ember-cli-revelation-ui/components/rui-dropdown/component';

export default RuiDropdownComponent.extend({
  layout: layout,
  classNames: ['rui-nav-brand-dropdown']
});
