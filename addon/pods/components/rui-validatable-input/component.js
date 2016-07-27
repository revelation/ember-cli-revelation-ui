import Ember from 'ember'
import layout from './template'

const {
  Component,
  computed,
  defineProperty
} = Ember

export default Component.extend({
  attributeBindings: ['data-test-id'],
  classNameBindings: ['showErrorClass:has-error', 'isValid:has-success'],
  classNames: ['rui-validatable-input'],
  layout,
  model: null,
  placeholder: '',
  type: 'text',
  validation: null,
  value: null,
  valuePath: '',

  init() {
    this._super(...arguments)
    const valuePath = this.get('valuePath')
    defineProperty(this, 'validation', computed.oneWay(`model.validations.attrs.${valuePath}`))
    defineProperty(this, 'value', computed.alias(`model.${valuePath}`))
  },

  didChange: computed('value', 'model.hasDirtyAttributes', function() {
    let attrsChanged = this.get('model') ? this.get('model').changedAttributes() : []
    return this.get('valuePath') in attrsChanged
  }),
  didValidate: computed.oneWay('targetObject.didValidate'),
  hasContent: computed.notEmpty('value'),
  isInvalid: computed.oneWay('validation.isInvalid'),
  isValid: computed.and('didChange', 'hasContent', 'validation.isValid', 'notValidating'),
  notValidating: computed.not('validation.isValidating'),
  showErrorClass: computed.and('notValidating', 'showMessage', 'validation'),
  showMessage: computed('validation.isDirty', 'isInvalid', 'didValidate', function() {
    return (this.get('validation.isDirty') || this.get('didValidate')) && this.get('isInvalid')
  })

})
