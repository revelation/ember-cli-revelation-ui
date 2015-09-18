import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'button',
  classNames: ['dropdown-toggle'],
  classNameBindings: ['computedStyle'],
  attributeBindings: ['type', 'data-toggle', 'haspopup', 'aria-expanded'],
  id: '',

  //Defaults
  type: 'button',
  style: null,
  size: null,

  //Constructors
  classPrefix: 'btn',
  styles: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'link'],

  // Data Attrs, required by bootstrap
  'data-toggle': 'dropdown',

  // Accessibility
  haspopup: 'true',
  'aria-expanded': 'false',

  // Computed
  computedStyle: Ember.computed('style', function(){
    // Builds size button class
    // Should not have any btn class by default to allow for custom classing

    if (!this.get('style')) {
      return false;
    }

    var styles = this.get('styles');
    var findStyle = this.get('style');
    var resolvedStyle = findStyle;

    if (styles.indexOf(findStyle) === -1) {
      resolvedStyle = 'secondary';
      Ember.Logger.warn('rui-dropdown-trigger: You specified and unsupported \'style\' property so we\'ve defaulted to the secondary style: choose from \'primary secondary success warning danger info link.\'');
    }

    return 'btn ' + this.get('classPrefix') + '-' + resolvedStyle;
  }),
});
