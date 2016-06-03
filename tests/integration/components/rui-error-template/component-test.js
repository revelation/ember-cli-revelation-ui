import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('rui-error-template', 'Integration | Component | rui error template', {
  integration: true
})

test('it renders', function(assert) {
  this.render(
    hbs`{{rui-error-template
      status='500'
      tagline='There has been an error.'}}`
  )

  assert.equal(
    this.$().find('.rui-error-template-status').text().trim(),
    '500'
  )
  assert.equal(
    this.$().find('.rui-error-template-tagline').text().trim(),
    'There has been an error.'
  )
})
