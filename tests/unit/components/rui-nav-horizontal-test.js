import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('rui-nav-horizontal', 'Unit | Component | rui nav horizontal', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(3);
  var component = this.subject();
  this.render();

  // NOTE: `tagName` comparison is case-sensitive
  assert.equal(
    this.$().get(0).tagName.toLowerCase(), 'ul',
    'it renders the component with an `ul` tag'
  );
  assert.ok(
    this.$().hasClass('nav'),
    'it renders with the base class `nav`'
  );
  assert.ok(
    this.$().hasClass('nav-tabs'),
    'it renders with the base class `nav-tabs`'
  );
});
