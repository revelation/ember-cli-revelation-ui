import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('rui-dropdown', 'Unit | Component | rui dropdown', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(3);
  var component = this.subject();
  this.render();

  assert.equal(this.$().text().trim(), '');
  assert.ok(
    this.$().hasClass('btn-group'),
    'it renders with the base class `btn-group`'
  );
  assert.equal(
    this.$().attr('role'), 'group',
    'it should render with the `role` attribute set to `group`'
  );
});
