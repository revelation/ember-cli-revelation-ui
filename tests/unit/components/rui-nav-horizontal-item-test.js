import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('rui-nav-horizontal-item', 'Unit | Component | rui nav horizontal item', {
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
    this.$().get(0).tagName.toLowerCase(), 'li',
    'it renders the component with an `li` tag'
  );
  assert.ok(
    this.$().hasClass('nav-item'),
    'it renders with the base class `nav-item`'
  );
});
