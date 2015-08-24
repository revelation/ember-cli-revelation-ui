import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  classNames: [],
  classNameBindings: ['typeComputed'],

  // Constructors
  types: ['dropdown', 'dropup', 'btn-group'],

  // Defaults
  type: null,

  // Computed
  typeComputed: Ember.computed('type', function(){
    var types = this.get('types');
    var type = this.get('type');
    var resolvedType = type;

    // Set default and bail our early if nothing is passed in
    if (!this.get('type')) {
      return 'dropdown';
    }

    // Catch mispelled or non-existant types and return safe default
    if (types.indexOf(type) === -1) {
      resolvedType = 'dropdown';
      Ember.Logger.warn('rui-dropdown: You specified and unsupported \'type\' property so we\'ve defaulted to the default type: choose from \'dropdown dropup btn-group.\'');
    }

    return resolvedType;
  }),
});
