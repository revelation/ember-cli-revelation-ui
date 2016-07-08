import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('rui-icon', 'Unit | Component | rui icon', {
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
    this.$().get(0).tagName.toLowerCase(), 'i',
    'it renders the component with an `i` tag'
  );
  assert.ok(
    this.$().hasClass('fa'),
    'it renders with the base class `fa`'
  );
});

test('it updates when settings change', function(assert) {
  assert.expect(2)
  var component = this.subject()
  component.set('name', 'times')

  assert.equal(
    component.get('nameComputed'),
    'fa-times',
    'name is times on initial render'
  )

  component.set('name', 'check')

  assert.equal(
    component.get('nameComputed'),
    'fa-check',
    'name is updated to check when computed'
  )
})
