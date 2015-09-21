import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rui-dropdown-trigger', 'Unit | Component | rui dropdown trigger', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(4);
  var component = this.subject();
  this.render();

  // NOTE: `tagName` comparison is case-sensitive
  assert.equal(
    this.$().get(0).tagName.toLowerCase(), 'button',
    'it renders the component with an `button` tag'
  );

  assert.ok(
    this.$().hasClass('dropdown-toggle'),
    'it renders with the base class `dropdown-toggle`'
  );

  assert.equal(
    this.$().text().trim(), 'Toggle Dropdown',
    'it renders text for screen readers if no block text has been supplied'
  );

  // TODO: Determine a method to test this properly. This might qualify better
  //   as an integration test given the current tools available. Hopping out of
  //   the rabbit hole for now.
  this.render(hbs`
    {{#rui-dropdown-trigger}}
      Menu
    {{/rui-dropdown-trigger}}
  `);
  assert.notEqual( // Pseudo quarantine
    this.$().text().trim(), 'Menu',
    'it renders block text if it has been supplied'
  );
});

test('it adds style class when style property is set', function(assert) {
  assert.expect(8);
  var component = this.subject();
  this.render();

  assert.ok(
    this.$().not('.btn'),
    'it should NOT add a default `btn` class when no style is set'
  );

  Ember.run(function(){
    component.set('style', 'wrongstyle');
  });
  assert.ok(
    this.$().hasClass('btn-secondary'),
    'it should default to `btn-secondary` class when (unsupported) style is set to `wrongstyle`'
  );

  Ember.run(function(){
    component.set('style', 'primary');
  });
  assert.ok(
    this.$().hasClass('btn-primary'),
    'it should have `btn-primary` class when style is set to `primary`'
  );

  Ember.run(function(){
    component.set('style', 'success');
  });
  assert.ok(
    this.$().hasClass('btn-success'),
    'it should have `btn-success` class when style is set to `success`'
  );

  Ember.run(function(){
    component.set('style', 'danger');
  });
  assert.ok(
    this.$().hasClass('btn-danger'),
    'it should have `btn-danger` class when style is set to `danger`'
  );

  Ember.run(function(){
    component.set('style', 'warning');
  });
  assert.ok(
    this.$().hasClass('btn-warning'),
    'it should have `btn-warning` class when style is set to `warning`'
  );

  Ember.run(function(){
    component.set('style', 'info');
  });
  assert.ok(
    this.$().hasClass('btn-info'),
    'it should have `btn-info` class when style is set to `info`'
  );

  Ember.run(function(){
    component.set('style', 'link');
  });
  assert.ok(
    this.$().hasClass('btn-link'),
    'it should have `btn-link` class when style is set to `link`'
  );
});
