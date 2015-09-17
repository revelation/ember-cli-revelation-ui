import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('rui-dropdown-menu', 'Unit | Component | rui dropdown menu', {
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
    this.$().get(0).tagName.toLowerCase(), 'div',
    'it renders the component with an `div` tag'
  );
  assert.ok(
    this.$().hasClass('dropdown-menu'),
    'it renders with the base class `dropdown-menu`'
  );
});

test('it adds `align` class when `align` property is set', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();

  Ember.run(function(){
    component.set('align', 'right');
  });
  assert.ok(
    this.$().hasClass('dropdown-menu-right'),
    'it should have `dropdown-menu-right` class when `align` is set to `right`'
  );

  Ember.run(function(){
    component.set('align', 'left');
  });
  assert.ok(
    this.$().hasClass('dropdown-menu-left'),
    'it should have `dropdown-menu-left` class when size is set to `left`'
  );
});
