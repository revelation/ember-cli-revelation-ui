import Ember from 'ember'
import layout from './template'

const {
  Component,
  computed,
  defineProperty
} = Ember

export default Component.extend({
  classNameBindings: ['isInvalid:has-error', 'isValid:has-success'],
  classNames: ['rui-validatable-input'],
  layout,
  model: null,
  placeholder: '',
  type: 'text',
  valuePath: '',
  async: false,

  init() {
    this._super(...arguments)
    const valuePath = this.get('valuePath')
    defineProperty(this,
      'validation',
      computed.oneWay(`model.validations.attrs.${valuePath}`))
    defineProperty(this, 'value', computed.alias(`model.${valuePath}`))
  },

  // This method ensures that if presence is required
  // But the initial value is undefined or an empty string
  // (the case with new records) we can still validate even though
  // the `didChange` attr would report it had not

  validatePresenceWithEmptyDefault: computed('value', function() {
    const validationOptions = Object.keys(
      this.get(`model.validations.attrs.${this.get('valuePath')}.options`))

    return (validationOptions.indexOf('presence') !== -1) &&
      (this.get('value') === '') ||
      (this.get('value') === undefined)
  }),

  // The attribute has changed UNLESS
  // the validator includes presence and
  // the value is undefined or empty

  didChange: computed(
    'value',
    'model.hasDirtyAttributes',
    'model.isSaving',
    function() {
      if (this.get('validatePresenceWithEmptyDefault')) { return true }

      const attrsChanged = this.get('model') ?
        this.get('model').changedAttributes() : {}
      return this.get('valuePath') in attrsChanged
    }
  ),

  // Checks for in processing statuses
  // Ensures validations don't show when:
  // input is clean, is validating, model is saving

  validatable: computed(
    'didChange',
    'validation.isValidating',
    'model.isSaving',
    function() {
      return this.get('didChange') &&
      !this.get('validation.isValidating') &&
      !this.get('model.isSaving')
    }
  ),

  // Base values that compute validation state

  _isInvalid: computed.and('validation.isInvalid', 'validatable'),
  _isValid: computed.and('validation.isValid', 'validatable'),

  // Checks property `didValidate` on controller
  // Used to only show validation if `async` is true

  didValidate: computed.oneWay('targetObject.didValidate'),

  // Validation binding attributes with check for async settings
  // if async is true, don't display either until `didValidate`

  isInvalid: computed('_isInvalid', 'didValidate', function() {
    if (this.get('async')) {
      return this.get('_isInvalid') && this.get('didValidate')
    }
    return this.get('_isInvalid')
  }),

  isValid: computed('_isValid', 'didValidate', function() {
    if (this.get('async')) {
      return this.get('_isValid') && this.get('didValidate')
    }
    return this.get('_isValid')
  })
})
