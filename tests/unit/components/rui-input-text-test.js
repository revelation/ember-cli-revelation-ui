import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('rui-input-text', 'Unit | Component | rui input text', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();

  // NOTE: `tagName` comparison is case-sensitive
  assert.equal(
    this.$().get(0).tagName.toLowerCase(), 'input',
    'it renders the component with an `input` tag'
  );

  assert.equal(
    this.$().attr('type'), 'text',
    'it renders with the correct type attribute'
  );
});

test('it renders placeholder text if supplied', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();

  assert.notOk(
    this.$().attr('placeholder'),
    'it should not have the placeholder attribute if one is not supplied'
  );

  Ember.run(function() {
    component.set('placeholder', 'Placeholder text');
  });
  assert.equal(
    this.$().attr('placeholder'), 'Placeholder text',
    'it should render placeholder text when supplied'
  );
});
