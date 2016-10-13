import Ember from 'ember'
import layout from './template'

const {
  Component,
  computed,
  defineProperty,
  Logger: { warn }
} = Ember

export default Component.extend({
  classNameBindings: [
    'isInvalid:has-error',
    'isValid:has-success'
  ],
  classNames: ['rui-validatable-input'],
  layout,

  // Default Attrs

  type: 'text',
  async: false,

  // Passed Attrs

  // valuePath: string
  // model: object

  // Init Attrs

  // value: @alias model.valuePath
  // validation: @oneway model.validations.attrs.valuePath

  init() {
    this._super(...arguments)
    const valuePath = this.get('valuePath')
    defineProperty(
      this,
      'validation',
      computed.oneWay(`model.validations.attrs.${valuePath}`)
    )
    defineProperty(
      this,
      'value',
      computed.alias(`model.${valuePath}`)
    )
  },

  // Validation binding attributes with check for async settings
  // if async is true, don't display either until `_didValidate`

  isInvalid: computed('_isInvalid', 'didValidate', function() {
    if (this.get('async')) {
      return this.get('_isInvalid') &&
        this.get('didValidate')
    }
    return this.get('_isInvalid')
  }),

  isValid: computed('_isValid', 'didValidate', function() {
    if (this.get('async')) {
      return this.get('_isValid') &&
        this.get('didValidate')
    }
    return this.get('_isValid')
  }),

  // This method ensures that if presence is required
  // But the initial value is undefined or an empty string
  // (the case with new records) we can still validate even though
  // the `_didChange` attr would report it had not

  _forcePresenceValidation: computed('value', function() {
    const validationOptions = Object.keys(this.get('validation.options'))

    return (validationOptions.indexOf('presence') !== -1) &&
      (this.get('value') === undefined) ||
      (this.get('value') === '')
  }),

  // The attribute has changed UNLESS
  // the validator includes presence and
  // the value is undefined or empty

  _didChange: computed(
    'value',
    'model.hasDirtyAttributes',
    function() {
      if (this.get('_forcePresenceValidation')) { return true }

      const attrsChanged = this.get('model') ?
        this.get('model').changedAttributes() : {}
      return this.get('valuePath') in attrsChanged
    }
  ),

  // Checks for in processing statuses
  // Ensures validations don't show when:
  // input is clean, is validating, model is saving

  _validatable: computed(
    '_didChange',
    'validation.isValidating',
    'model.isSaving',
    function() {
      return this.get('_didChange') &&
      !this.get('validation.isValidating') &&
      !this.get('model.isSaving')
    }
  ),

  // Base values that compute validation state

  _isInvalid: computed.and('validation.isInvalid', '_validatable'),
  _isValid: computed.and('validation.isValid', '_validatable'),

  didValidate: computed('async', function() {
    if (this.get('async')) {
      warn(
        'rui-validatable-input: If async is true, you must send in a value' +
        'for `didValidate` in order to trigger when the validation should occur'
      )
    }
  })
})
