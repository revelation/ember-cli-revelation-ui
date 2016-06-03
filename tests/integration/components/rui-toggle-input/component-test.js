import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rui-toggle-input', 'Integration | Component | rui toggle input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`
    {{rui-toggle-input}}
  `);

  const component = this.$('.toggle-input')[0];
  const track = $('label', component);
  const checkbox = $('input[type=checkbox]', component);

  assert.equal(track.length, 1, 'it renders a label element inside');
  assert.equal(checkbox.length, 1, 'it renders an input element inside');
});

test('it toggles on when clicked', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.set('myBoolean', false);

  this.render(hbs`
    {{rui-toggle-input
    checked=(mut myBoolean)
    for='testComponent'}}
  `);

  const component = this.$('.toggle-input')[0];
  const label = $('label', component);
  const checkbox = $('input[type=checkbox]', component);

  assert.equal($(component).hasClass('toggle-input-off'), true, 'class is `.toggle-input-off` initially');
  assert.equal($(checkbox).is(':checked'), false, 'checkbox is NOT checked initially');

  $(label).click();

  assert.equal($(component).hasClass('toggle-input-on'), true, 'class is `toggle-input-on` when clicked');
  assert.equal($(checkbox).is(':checked'), true, 'checkbox is checked when clicked');

});
