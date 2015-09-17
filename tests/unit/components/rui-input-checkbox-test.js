import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('rui-input-checkbox', 'Unit | Component | rui input checkbox', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();

  assert.ok(
    this.$().hasClass('checkbox'),
    'it renders with the base class `checkbox`'
  );
});
